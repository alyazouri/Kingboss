function FindProxyForURL(url, host) {
  // === إعدادات البروكسي (استخدم خادمًا قريبًا من الأردن/الشرق الأوسط) ===
  var PROXY_HOST = "91.106.109.12"; // يُفضل خادم في الأردن أو الإمارات
  var PROXY_HOSTNAME_V6 = ""; // اختياري: اسم نطاق أردني بـ AAAA

  // === المنافذ مع أوزان مُحسّنة (LOBBY و MATCH لهما أولوية قصوى) ===
  var PORTS = {
    LOBBY: [443, 8080, 8443],
    MATCH: [20001, 20002, 20003],
    RECRUIT_SEARCH: [10010, 10012, 10013, 10039, 10096, 10491, 10612, 11000, 11455, 12235],
    UPDATES: [80, 443, 8443, 8080],
    CDNs: [80, 8080, 443]
  };

  var PORT_WEIGHTS = {
    LOBBY: [10, 8, 6],        // زيادة الوزن للسرعة
    MATCH: [10, 8, 6],        // أعلى أولوية للمباريات
    RECRUIT_SEARCH: [5, 4, 4, 3, 3, 3, 3, 3, 3, 2],
    UPDATES: [5, 3, 2, 1],
    CDNs: [3, 2, 2]
  };

  // === سياسات الأمان (منع الاتصال بخوادم غير محلية) ===
  var HARD_BLOCK_NON_ME = true; // حظر غير الشرق الأوسط
  var BLOCK_REPLY = "PROXY 127.0.0.1:9";
  var STICKY_SALT = "ME_STICKY";
  var STICKY_TTL_MINUTES = 30;
  var JITTER_WINDOW = 1; // تقليل التشتت لزيادة الاستقرار
  var DST_RESOLVE_TTL_MS = 30000;

  // === نطاقات IPv6 الشرق الأوسط (الأردن + الدول المجاورة) ===
  var ME_V6_RANGES = [
    // الأردن
    ["2a01:9700:1000::", "2a01:9700:17ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:2000::", "2a01:9700:3fff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:3000::", "2a01:9700:37ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:4000::", "2a01:9700:47ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:8000::", "2a01:9700:8fff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:a000::", "2a01:9700:bfff:ffff:ffff:ffff:ffff:ffff"],
    // السعودية (مثال: 2a06:6a00::/29)
    ["2a06:6a00::", "2a06:6a07:ffff:ffff:ffff:ffff:ffff:ffff"],
    // الإمارات (مثال: 2a02:ec00::/28)
    ["2a02:ec00::", "2a02:ec0f:ffff:ffff:ffff:ffff:ffff:ffff"]
  ];

  // === نطاقات IPv4 الشرق الأوسط (اختياري) ===
  var ME_V4_RANGES = [
    ["188.138.0.0", "188.138.255.255"], // الأردن (مثال)
    ["82.137.224.0", "82.137.255.255"], // الأردن
    ["141.105.0.0", "141.105.255.255"]  // السعودية (مثال)
  ];

  // === نطاقات PUBG (محدّثة للشرق الأوسط) ===
  var PUBG_DOMAINS = {
    LOBBY: ["*.pubgmobile.com", "*.pubgmobile.net", "*.proximabeta.com", "*.igamecj.com", "lobby.me.pubgmobile.com"],
    MATCH: ["*.gcloud.qq.com", "gpuimabeta.com", "teamfinder.igamecj.com", "match.me.pubgmobile.com"],
    RECRUIT_SEARCH: ["recruit.me.pubgmobile.com", "teamfinder.me.pubgmobile.com"],
    UPDATES: ["cdn.pubgmobile.com", "updates.pubgmobile.com", "patch.igamecj.com"],
    CDNs: ["cdn.igamecj.com", "cdn.me.pubgmobile.com"]
  };

  var URL_PATTERNS = {
    LOBBY: ["*/account/login*", "*/client/version*", "*/status/heartbeat*", "*/presence/*"],
    MATCH: ["*/matchmaking/*", "*/mms/*", "*/game/start*", "*/game/join*"],
    RECRUIT_SEARCH: ["*/teamfinder/*", "*/clan/*", "*/recruit/*"],
    UPDATES: ["*/patch*", "*/hotfix*", "*/download*"],
    CDNs: ["*/cdn/*", "*/static/*"]
  };

  // === استثناء يوتيوب ===
  var YOUTUBE_DOMAINS = ["*.youtube.com", "youtu.be", "*.googlevideo.com"];

  // === الكاش ===
  var root = (typeof globalThis !== "undefined" ? globalThis : this);
  if (!root._PAC_CACHE) root._PAC_CACHE = {};
  var CACHE = root._PAC_CACHE;
  if (!CACHE.DST_RESOLVE_CACHE) CACHE.DST_RESOLVE_CACHE = {};
  if (!CACHE._PORT_STICKY) CACHE._PORT_STICKY = {};
  var now = new Date().getTime();

  // === أدوات مساعدة ===
  function splitList(s) { return (s || "").replace(/\s+/g, "").split(/[\,\;]+/).filter(Boolean); }
  function has(fn) { try { return typeof this[fn] === "function"; } catch (e) { return false; } }
  function normIPv6(ip) { ip = (ip || "").replace(/^\[|\]$/g, ""); var z = ip.indexOf("%"); return z > 0 ? ip.slice(0, z) : ip; }
  function normIPv4(ip) { return ip.split('.').map(Number).join('.'); }

  function expandIPv6(ip) {
    ip = normIPv6(ip).toLowerCase();
    if (ip === "") return null;
    var parts = ip.split("::");
    if (parts.length > 2) return null;
    var left = parts[0].length ? parts[0].split(":") : [];
    var right = (parts.length > 1 && parts[1].length) ? parts[1].split(":") : [];
    for (var i = 0; i < left.length; i++) left[i] = left[i] || "0";
    for (var j = 0; j < right.length; j++) right[j] = right[j] || "0";
    var missing = 8 - (left.length + right.length);
    if (missing < 0) return null;
    var mid = []; for (var k = 0; k < missing; k++) mid.push("0");
    var full = left.concat(mid, right);
    if (full.length !== 8) return null;
    var out = [];
    for (var t = 0; t < 8; t++) {
      var v = parseInt(full[t], 16);
      if (!(v >= 0 && v <= 0xFFFF)) return null;
      out.push(v);
    }
    return out;
  }

  function cmpIPv6Words(a, b) {
    for (var i = 0; i < 8; i++) { if (a[i] < b[i]) return -1; if (a[i] > b[i]) return 1; }
    return 0;
  }

  function ipInRange(ip, start, end, isIPv6) {
    if (isIPv6) {
      var ai = expandIPv6(ip), si = expandIPv6(start), ei = expandIPv6(end);
      if (!ai || !si || !ei) return false;
      return (cmpIPv6Words(si, ai) <= 0) && (cmpIPv6Words(ai, ei) <= 0);
    } else {
      var ai = ip.split('.').map(Number), si = start.split('.').map(Number), ei = end.split('.').map(Number);
      for (var i = 0; i < 4; i++) {
        if (ai[i] < si[i] || ai[i] > ei[i]) return false;
      }
      return true;
    }
  }

  function ipInAnyRanges(ip, ranges, isIPv6) {
    for (var i = 0; i < ranges.length; i++) {
      if (ipInRange(ip, ranges[i][0], ranges[i][1], isIPv6)) return true;
    }
    return false;
  }

  function isMiddleEastIP(ip) {
    if (ip.indexOf(":") !== -1) return ipInAnyRanges(ip, ME_V6_Ranges, true);
    else return ipInAnyRanges(ip, ME_V4_Ranges, false);
  }

  function resolveIP(hostname, isIPv6) {
    if (!hostname) return "";
    if (isIPv6 && /^[0-9a-fA-F:\[\]]+$/.test(hostname)) return normIPv6(hostname);
    if (!isIPv6 && /^[0-9\.]+$/.test(hostname)) return normIPv4(hostname);
    if (has("dnsResolveEx")) {
      var lst = splitList(dnsResolveEx(hostname));
      for (var i = 0; i < lst.length; i++) {
        var cand = isIPv6 ? normIPv6(lst[i]) : normIPv4(lst[i]);
        if (cand && ((isIPv6 && cand.indexOf(":") !== -1) || (!isIPv6 && cand.indexOf(".") !== -1))) return cand;
      }
    }
    return "";
  }

  function pathMatches(u, arr) { for (var i = 0; i < arr.length; i++) if (shExpMatch(u, arr[i])) return true; return false; }
  function hostMatches(h, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (shExpMatch(h, arr[i])) return true;
      var p = arr[i].replace(/^\*\./, ".");
      if (h.slice(-p.length) === p) return true;
    }
    return false;
  }

  function weightedPick(ports, weights) {
    var sum = 0; for (var i = 0; i < weights.length; i++) sum += (weights[i] || 1);
    var r = Math.floor(Math.random() * sum) + 1, acc = 0;
    for (var k = 0; k < ports.length; k++) { acc += (weights[k] || 1); if (r <= acc) return ports[k]; }
    return ports[0];
  }

  function proxyFor(category) {
    var key = STICKY_SALT + "_PORT_" + category;
    var e = CACHE._PORT_STICKY[key];
    var ttl = STICKY_TTL_MINUTES * 60000;
    if (e && (now - e.t) < ttl) return "PROXY " + PROXY_HOST + ":" + e.p;
    var p = weightedPick(PORTS[category], PORT_WEIGHTS[category]);
    CACHE._PORT_STICKY[key] = { p: p, t: now };
    return "PROXY " + PROXY_HOST + ":" + p;
  }

  // === التحقق من أن العميل من الشرق الأوسط ===
  var clientOK = (function () {
    if (!has("myIpAddressEx")) return false;
    var lst = splitList(myIpAddressEx());
    for (var i = 0; i < lst.length; i++) {
      if (isMiddleEastIP(lst[i])) return true;
    }
    return false;
  })();
  if (!clientOK) return HARD_BLOCK_NON_ME ? BLOCK_REPLY : "DIRECT";

  // === دالة التحقق من الوجهة (فقط شرق أوسط) ===
  function requireMiddleEast(category, h) {
    var c = CACHE.DST_RESOLVE_CACHE[h];
    var ip = (c && (now - c.t) < DST_RESOLVE_TTL_MS) ? c.ip : "";
    if (!ip) {
      ip = resolveIP(h, true) || resolveIP(h, false);
      CACHE.DST_RESOLVE_CACHE[h] = { ip: ip, t: now };
    }
    if (!isMiddleEastIP(ip)) return HARD_BLOCK_NON_ME ? BLOCK_REPLY : "DIRECT";
    return proxyFor(category);
  }

  // === استثناء يوتيوب ===
  if (hostMatches(host, YOUTUBE_DOMAINS) || shExpMatch(url, "*youtube*")) return "DIRECT";

  // === توجيه حسب النمط أولاً ===
  for (var cat in URL_PATTERNS) {
    if (pathMatches(url, URL_PATTERNS[cat])) return requireMiddleEast(cat, host);
  }

  // === توجيه حسب الدومين ===
  for (var c in PUBG_DOMAINS) {
    if (hostMatches(host, PUBG_DOMAINS[c])) return requireMiddleEast(c, host);
  }

  // === فحص الوجهة مباشرة ===
  var dst = resolveIP(host, true) || resolveIP(host, false);
  if (isMiddleEastIP(dst)) return proxyFor("LOBBY");

  return HARD_BLOCK_NON_ME ? BLOCK_REPLY : "DIRECT";
}
