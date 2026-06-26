function FindProxyForURL(url, host) {
  // === إعدادات البروكسي ===
  var PROXY_HOST = "91.106.109.50"; // IPv4 البروكسي الرئيسي
  var PROXY_HOSTNAME_V6 = ""; // يمكن ملؤه لاحقًا إذا كان لديك اسم نطاق أردني بـ AAAA

  // === المنافذ والأوزان ===
  var PORTS = {
    LOBBY: [443, 8080, 8443],
    MATCH: [20005],
    RECRUIT_SEARCH: [10010, 10012, 10013, 10039, 10096, 10491, 10612, 11000, 11455, 12235],
    UPDATES: [80, 443, 8443, 8080],
    CDNs: [80, 8080, 443]
  };

  var PORT_WEIGHTS = {
    LOBBY: [5, 3, 2],
    MATCH: [4, 2, 1],
    RECRUIT_SEARCH: [4, 3, 3, 2, 2, 2, 2, 2, 2, 1],
    UPDATES: [5, 3, 2, 1],
    CDNs: [3, 2, 2]
  };

  // === سياسات الأمان ===
  var HARD_BLOCK_NON_JO = true;
  var BLOCK_REPLY = "PROXY 127.0.0.1:9";
  var STICKY_SALT = "JO_STICKY";
  var STICKY_TTL_MINUTES = 30;
  var JITTER_WINDOW = 3;
  var DST_RESOLVE_TTL_MS = 30000;

  // === نطاقات IPv6 الأردنية الجديدة (محولة إلى start-end) ===
  var JO_V6_RANGES = [
    ["2a01:9700:1000::", "2a01:9700:17ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:2000::", "2a01:9700:3fff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:3000::", "2a01:9700:37ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:4000::", "2a01:9700:47ff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:8000::", "2a01:9700:8fff:ffff:ffff:ffff:ffff:ffff"],
    ["2a01:9700:a000::", "2a01:9700:bfff:ffff:ffff:ffff:ffff:ffff"]
  ];

  // === نطاقات PUBG ===
  var PUBG_DOMAINS = {
    LOBBY: ["*.pubgmobile.com", "*.pubgmobile.net", "*.proximabeta.com", "*.igamecj.com"],
    MATCH: ["*.gcloud.qq.com", "gpuimabeta.com", "teamfinder.igamecj.com", "teamfinder.proximabeta.com"],
    RECRUIT_SEARCH: ["match.igamecj.com", "match.proximabeta.com", "*.teamfinder.*", "*.clan.*", "*.social.*"],
    UPDATES: ["cdn.pubgmobile.com", "updates.pubgmobile.com", "patch.igamecj.com", "hotfix.proximabeta.com", "dlied1.qq.com", "dlied2.qq.com", "gpubgm.com"],
    CDNs: ["cdn.igamecj.com", "cdn.proximabeta.com", "cdn.tencentgames.com", "*.qcloudcdn.com", "*.cloudfront.net", "*.edgesuite.net"]
  };

  var URL_PATTERNS = {
    LOBBY: ["*/account/login*", "*/client/version*", "*/status/heartbeat*", "*/presence/*", "*/friends/*"],
    MATCH: ["*/matchmaking/*", "*/mms/*", "*/game/start*", "*/game/join*", "*/report/battle*"],
    RECRUIT_SEARCH: ["*/teamfinder/*", "*/clan/*", "*/social/*", "*/search/*", "*/recruit/*"],
    UPDATES: ["*/patch*", "*/hotfix*", "*/update*", "*/download*", "*/assets/*", "*/assetbundle*", "*/obb*"],
    CDNs: ["*/cdn/*", "*/static/*", "*/image/*", "*/media/*", "*/video/*", "*/res/*", "*/pkg/*"]
  };

  // === استثناء يوتيوب ===
  var YOUTUBE_DOMAINS = [
    "*.youtube.com", "youtu.be", "*.googlevideo.com", "youtubei.googleapis.com",
    "*.ytimg.com", "*.yt3.ggpht.com", "*.ggpht.com", "*.withyoutube.com"
  ];

  // === الكاش الداخلي ===
  var root = (typeof globalThis !== "undefined" ? globalThis : this);
  if (!root._PAC_CACHE) root._PAC_CACHE = {};
  var CACHE = root._PAC_CACHE;
  if (!CACHE.DST_RESOLVE_CACHE) CACHE.DST_RESOLVE_CACHE = {};
  if (!CACHE._PORT_STICKY) CACHE._PORT_STICKY = {};
  var now = new Date().getTime();

  // === أدوات مساعدة ===
  function splitList(s) {
    return (s || "").replace(/\s+/g, "").split(/[\,\;]+/).filter(Boolean);
  }

  function has(fn) {
    try { return typeof this[fn] === "function"; } catch (e) { return false; }
  }

  function normIPv6(ip) {
    ip = (ip || "").replace(/^\[|\]$/g, "");
    var z = ip.indexOf("%");
    return z > 0 ? ip.slice(0, z) : ip;
  }

  function expandIPv6(ip) {
    ip = normIPv6(ip).toLowerCase();
    if (ip === "") return null;
    var parts = ip.split("::");
    if (parts.length > 2) return null; // invalid

    var left = parts[0].length ? parts[0].split(":") : [];
    var right = (parts.length > 1 && parts[1].length) ? parts[1].split(":") : [];

    // Pad each part to 4 hex digits? Not needed; we parse as int.
    for (var i = 0; i < left.length; i++) left[i] = left[i] || "0";
    for (var j = 0; j < right.length; j++) right[j] = right[j] || "0";

    var missing = 8 - (left.length + right.length);
    if (missing < 0) return null;

    var mid = [];
    for (var k = 0; k < missing; k++) mid.push("0");
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
    for (var i = 0; i < 8; i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return 0;
  }

  function ipInRange(ip, start, end) {
    var ai = expandIPv6(ip), si = expandIPv6(start), ei = expandIPv6(end);
    if (!ai || !si || !ei) return false;
    return (cmpIPv6Words(si, ai) <= 0) && (cmpIPv6Words(ai, ei) <= 0);
  }

  function ipInAnyRanges(ip, ranges) {
    for (var i = 0; i < ranges.length; i++) {
      if (ipInRange(ip, ranges[i][0], ranges[i][1])) return true;
    }
    return false;
  }

  function isJordanV6(ip) {
    return ip && ip.indexOf(":") !== -1 && ipInAnyRanges(ip, JO_V6_Ranges);
  }

  function resolveV6(hostname) {
    if (!hostname) return "";
    if (/^[0-9a-fA-F:\[\]]+$/.test(hostname)) return normIPv6(hostname); // IPv6 literal

    if (has("dnsResolveEx")) {
      var lst = splitList(dnsResolveEx(hostname));
      for (var i = 0; i < lst.length; i++) {
        var cand = normIPv6(lst[i]);
        if (cand && cand.indexOf(":") !== -1) return cand;
      }
    }
    return "";
  }

  function pathMatches(u, arr) {
    for (var i = 0; i < arr.length; i++) if (shExpMatch(u, arr[i])) return true;
    return false;
  }

  function hostMatches(h, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (shExpMatch(h, arr[i])) return true;
      var p = arr[i].replace(/^\*\./, ".");
      if (h.slice(-p.length) === p) return true;
    }
    return false;
  }

  // === اختيار منفذ عشوائي موزون مع Sticky ===
  function weightedPick(ports, weights) {
    var sum = 0;
    for (var i = 0; i < weights.length; i++) sum += (weights[i] || 1);
    var jitter = (JITTER_WINDOW > 0) ? Math.floor(Math.random() * JITTER_WINDOW) : 0;
    var r = Math.floor(Math.random() * (sum + jitter)) + 1, acc = 0;
    for (var k = 0; k < ports.length; k++) {
      acc += (weights[k] || 1);
      if (r <= acc) return ports[k];
    }
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

  // === التحقق من أن العميل IPv6 أردني ===
  var clientOK = (function () {
    if (!has("myIpAddressEx")) return false;
    var lst = splitList(myIpAddressEx());
    for (var i = 0; i < lst.length; i++) {
      if (isJordanV6(normIPv6(lst[i]))) return true;
    }
    return false;
  })();
  if (!clientOK) return HARD_BLOCK_NON_JO ? BLOCK_REPLY : "DIRECT";

  // === التحقق من أن البروكسي IPv6 أردني (اختياري) ===
  function proxyIsJordan() {
    if (!PROXY_HOSTNAME_V6) return true; // لا نتحقق
    if (!has("dnsResolveEx")) return true; // غير مدعوم
    var lst = splitList(dnsResolveEx(PROXY_HOSTNAME_V6));
    for (var i = 0; i < lst.length; i++) {
      var ip = normIPv6(lst[i]);
      if (ip && ip.indexOf(":") !== -1 && isJordanV6(ip)) return true;
    }
    return false;
  }
  if (!proxyIsJordan()) return HARD_BLOCK_NON_JO ? BLOCK_REPLY : "DIRECT";

  // === دالة التحقق من الوجهة ===
  function requireJordanV6(category, h) {
    var c = CACHE.DST_RESOLVE_CACHE[h];
    var ip = (c && (now - c.t) < DST_RESOLVE_TTL_MS) ? c.ipv6 : "";
    if (!ip) {
      ip = resolveV6(h);
      CACHE.DST_RESOLVE_CACHE[h] = { ipv6: ip, t: now };
    }
    if (!isJordanV6(ip)) return HARD_BLOCK_NON_JO ? BLOCK_REPLY : "DIRECT";
    return proxyFor(category);
  }

  // === استثناء يوتيوب: DIRECT دائمًا ===
  if (hostMatches(host, YOUTUBE_DOMAINS) ||
      shExpMatch(url, "*youtube*") ||
      shExpMatch(url, "*googlevideo*")) {
    return "DIRECT";
  }

  // === توجيه حسب نمط URL أولاً ===
  for (var cat in URL_PATTERNS) {
    if (pathMatches(url, URL_PATTERNS[cat])) {
      return requireJordanV6(cat, host);
    }
  }

  // === توجيه حسب الدومين ===
  for (var c in PUBG_DOMAINS) {
    if (hostMatches(host, PUBG_DOMAINS[c])) {
      return requireJordanV6(c, host);
    }
  }

  // === فحص الوجهة مباشرة ===
  var dst = resolveV6(host);
  if (isJordanV6(dst)) return proxyFor("LOBBY");

  // === الافتراضي ===
  return HARD_BLOCK_NON_JO ? BLOCK_REPLY : "DIRECT";
}
