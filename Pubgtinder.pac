/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v10.0 – COMPLETE EDITION
   🇯🇴 Jordan Players Only | 🛡️ Anti-Israel & Syria
   🎮 PUBG Mobile | 💘 Tinder | 📱 All Apps
   ⚡ Zero Direct | 💾 45min Persistent | Anti-Spike
   🔥 Warmup | ⏰ Peak Guard | ♻️ Auto Recovery
   🧠 Smart DNS Cache | 🎯 Port Detection
   ========================================================= */

/* ─────────────────────────────────────────
   🇯🇴 JORDAN PROXY ARSENAL
   ───────────────────────────────────────── */
var P1 = "PROXY 37.220.120.111:20001";  // ★★★★★ الملك – الأفضل في الأردن
var P2 = "PROXY 46.185.131.218:20001";  // ★★★★☆ القوي
var P3 = "PROXY 109.237.195.25:20001";  // ★★★☆☆ الاحتياطي

var BLOCK = "PROXY 0.0.0.0:0";

/* ─────────────────────────────────────────
   🔗 FAILOVER CHAINS
   ───────────────────────────────────────── */
var C1 = P1 + "; " + P2 + "; " + P3;  // Elite
var C2 = P2 + "; " + P1 + "; " + P3;  // Strong
var C3 = P3 + "; " + P1 + "; " + P2;  // Backup

/* =========================================================
   ⚡ ULTRA HASH ENGINE (FNV-1a)
   ========================================================= */
function hash(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = ((h << 1) + (h << 4) + (h << 7) +
         (h << 8) + (h << 24)) >>> 0;
  }
  return h;
}

/* =========================================================
   🧠 SMART DNS CACHE
   PUBG  → TTL 90  ثانية
   Tinder→ TTL 120 ثانية
   عادي  → TTL 300 ثانية
   ========================================================= */
var _dns  = {};
var _dnsT = {};
var _miss = {};

function getIP(host) {
  var now = Date.now();

  /* TTL حسب نوع التطبيق */
  var ttl = 300000;
  if (host.indexOf("pubg")    !== -1 ||
      host.indexOf("krafton") !== -1 ||
      host.indexOf("tencent") !== -1)  ttl = 90000;
  if (host.indexOf("tinder")  !== -1 ||
      host.indexOf("gotinder")!== -1)  ttl = 120000;

  if (_dns[host]  && (now - _dnsT[host] < ttl))  return _dns[host];
  if (_miss[host] && (now - _miss[host] < 30000)) return null;

  var ip = dnsResolve(host);
  if (ip) {
    _dns[host]  = ip;
    _dnsT[host] = now;
    delete _miss[host];
  } else {
    _miss[host] = now;
  }
  return ip;
}

/* =========================================================
   🚫 BLOCK ZONES
   ========================================================= */

/* 🇮🇱 Anti-Israel – حظر شامل */
function isIsraelIP(ip) {
  return (
    isInNet(ip, "5.28.0.0",      "255.252.0.0")  ||
    isInNet(ip, "31.44.128.0",   "255.255.128.0")||
    isInNet(ip, "37.26.144.0",   "255.255.240.0")||
    isInNet(ip, "46.116.0.0",    "255.252.0.0")  ||
    isInNet(ip, "62.0.0.0",      "255.192.0.0")  ||
    isInNet(ip, "77.124.0.0",    "255.252.0.0")  ||
    isInNet(ip, "79.176.0.0",    "255.240.0.0")  ||
    isInNet(ip, "80.178.0.0",    "255.254.0.0")  ||
    isInNet(ip, "81.218.0.0",    "255.255.0.0")  ||
    isInNet(ip, "82.80.0.0",     "255.240.0.0")  ||
    isInNet(ip, "84.94.0.0",     "255.254.0.0")  ||
    isInNet(ip, "85.64.0.0",     "255.252.0.0")  ||
    isInNet(ip, "87.68.0.0",     "255.252.0.0")  ||
    isInNet(ip, "89.138.0.0",    "255.254.0.0")  ||
    isInNet(ip, "91.197.204.0",  "255.255.252.0")||
    isInNet(ip, "93.172.0.0",    "255.252.0.0")  ||
    isInNet(ip, "94.159.0.0",    "255.255.0.0")  ||
    isInNet(ip, "95.35.0.0",     "255.255.0.0")  ||
    isInNet(ip, "109.64.0.0",    "255.240.0.0")  ||
    isInNet(ip, "132.64.0.0",    "255.240.0.0")  ||
    isInNet(ip, "141.226.0.0",   "255.255.0.0")  ||
    isInNet(ip, "147.234.0.0",   "255.254.0.0")  ||
    isInNet(ip, "176.12.128.0",  "255.255.128.0")||
    isInNet(ip, "185.3.0.0",     "255.255.0.0")  ||
    isInNet(ip, "185.175.144.0", "255.255.240.0")||
    isInNet(ip, "188.120.64.0",  "255.255.192.0")||
    isInNet(ip, "192.114.0.0",   "255.255.0.0")  ||
    isInNet(ip, "194.90.0.0",    "255.255.0.0")  ||
    isInNet(ip, "212.143.0.0",   "255.255.0.0")  ||
    isInNet(ip, "213.8.0.0",     "255.255.0.0")  ||
    isInNet(ip, "216.73.80.0",   "255.255.252.0")
  );
}

/* 🇸🇾 Anti-Syria */
function isSyriaIP(ip) {
  return (
    isInNet(ip, "31.9.0.0",     "255.255.0.0")  ||
    isInNet(ip, "82.137.192.0", "255.255.192.0")||
    isInNet(ip, "91.144.0.0",   "255.252.0.0")  ||
    isInNet(ip, "176.29.128.0", "255.255.128.0")||
    isInNet(ip, "5.36.0.0",     "255.252.0.0")  ||
    isInNet(ip, "185.11.224.0", "255.255.252.0")||
    isInNet(ip, "185.202.172.0","255.255.252.0")
  );
}

/* 🌍 Foreign Game Servers (يحظرها لإجبار الأردن) */
function isForeignGame(ip) {
  return (
    /* أمريكا */
    isInNet(ip, "44.192.0.0",  "255.192.0.0")  ||
    isInNet(ip, "52.0.0.0",    "255.0.0.0")    ||
    isInNet(ip, "54.0.0.0",    "255.0.0.0")    ||
    isInNet(ip, "35.160.0.0",  "255.248.0.0")  ||
    /* أوروبا */
    isInNet(ip, "18.192.0.0",  "255.240.0.0")  ||
    isInNet(ip, "35.156.0.0",  "255.252.0.0")  ||
    isInNet(ip, "52.28.0.0",   "255.252.0.0")  ||
    isInNet(ip, "18.184.0.0",  "255.252.0.0")  ||
    /* آسيا البعيدة */
    isInNet(ip, "13.212.0.0",  "255.255.0.0")  ||
    isInNet(ip, "52.74.0.0",   "255.254.0.0")  ||
    isInNet(ip, "13.228.0.0",  "255.252.0.0")  ||
    isInNet(ip, "54.169.0.0",  "255.255.0.0")  ||
    /* كوريا */
    isInNet(ip, "52.78.0.0",   "255.254.0.0")  ||
    isInNet(ip, "13.124.0.0",  "255.252.0.0")  ||
    /* تركيا */
    isInNet(ip, "18.185.0.0",  "255.255.0.0")  ||
    /* الهند */
    isInNet(ip, "13.126.0.0",  "255.254.0.0")  ||
    isInNet(ip, "52.66.0.0",   "255.254.0.0")
  );
}

/* =========================================================
   🇯🇴 JORDAN IP VERIFICATION
   ========================================================= */
function isJordanIP(ip) {
  return (
    isInNet(ip, "37.220.112.0",  "255.255.240.0") ||
    isInNet(ip, "46.185.128.0",  "255.255.128.0") ||
    isInNet(ip, "79.173.192.0",  "255.255.192.0") ||
    isInNet(ip, "87.236.232.0",  "255.255.248.0") ||
    isInNet(ip, "92.253.0.0",    "255.255.128.0") ||
    isInNet(ip, "109.237.192.0", "255.255.240.0") ||
    isInNet(ip, "178.20.184.0",  "255.255.248.0") ||
    isInNet(ip, "185.117.68.0",  "255.255.252.0") ||
    isInNet(ip, "82.102.0.0",    "255.255.0.0")   ||
    isInNet(ip, "94.0.0.0",      "255.255.0.0")   ||
    isInNet(ip, "212.118.0.0",   "255.255.0.0")   ||
    isInNet(ip, "213.6.0.0",     "255.255.0.0")
  );
}

/* =========================================================
   🎮 PUBG DETECTION – 3 طبقات
   ========================================================= */
var PD = {
  "pubg":1,"pubgm":1,"pubgmobile":1,"krafton":1,
  "lightspeed":1,"proximabeta":1,"tencent":1,
  "qcloud":1,"myqcloud":1,"tencentcs":1,
  "amazonaws":1,"battlegrounds":1,"bgmi":1,
  "proxima":1,"vivogame":1
};

var PK = [
  "battle","lobby","match","session","dispatcher",
  "gamecore","allocation","ranked","conqueror",
  "erangel","miramar","sanhok","vikendi","karakin",
  "livik","tdm","payload","metro","zombie",
  "cheerpark","warehouse","training","arcade",
  "infection","event","season","tier"
];

function isPUBG(host, url) {
  var h = host.toLowerCase();
  var parts = h.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (PD[parts[i]]) return true;
  }
  var text = h + url.toLowerCase();
  for (var j = 0; j < PK.length; j++) {
    if (text.indexOf(PK[j]) !== -1) return true;
  }
  return false;
}

function isPUBGPort(url) {
  var m = url.match(/:(\d+)/);
  if (!m) return false;
  var p = +m[1];
  return (
    p === 7889 || p === 8011 || p === 8012 ||
    p === 8013 || p === 8443 || p === 10012 ||
    p === 10490 || p === 17500 ||
    (p >= 7000  && p <= 7999)  ||
    (p >= 10000 && p <= 11000) ||
    (p >= 17000 && p <= 18100) ||
    (p >= 20000 && p <= 20100)
  );
}

/* =========================================================
   💘 TINDER DETECTION
   ========================================================= */
var TINDER_DOMAINS = {
  "tinder":1,"gotinder":1,"tndr":1,
  "tindercdn":1,"tindersparks":1
};

function isTinder(host) {
  var h = host.toLowerCase();
  var parts = h.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (TINDER_DOMAINS[parts[i]]) return true;
  }
  return (
    h.indexOf("tinder")   !== -1 ||
    h.indexOf("gotinder") !== -1 ||
    h.indexOf("tndr")     !== -1
  );
}

/* =========================================================
   🛡️ JUNK KILLER v4 – Bandwidth Guardian
   ========================================================= */
var JL = {
  /* إعلانات */
  "doubleclick.net":1,"googlesyndication.com":1,
  "googleadservices.com":1,"adnxs.com":1,
  "moatads.com":1,"openx.net":1,
  "rubiconproject.com":1,"pubmatic.com":1,
  "criteo.com":1,"taboola.com":1,"outbrain.com":1,
  "zedo.com":1,"trafficjunky.net":1,
  "adsafeprotected.com":1,"scorecardresearch.com":1,
  /* تتبع */
  "appsflyer.com":1,"adjust.com":1,"branch.io":1,
  "crashlytics.com":1,"amplitude.com":1,
  "mixpanel.com":1,"flurry.com":1,
  "app-measurement.com":1,"firebase.com":1,
  "firebaseio.com":1,"appsflyer.com":1,
  /* سوشال ميديا */
  "facebook.com":1,"fbcdn.net":1,
  "instagram.com":1,"cdninstagram.com":1,
  "tiktok.com":1,"tiktokcdn.com":1,
  "tiktokv.com":1,"snapchat.com":1,
  "sc-cdn.net":1,"twitter.com":1,
  "x.com":1,"twimg.com":1,
  /* موبايل ads */
  "unity3d.com":1,"unityads.unity3d.com":1,
  "ironsrc.com":1,"vungle.com":1,
  "tapjoy.com":1,"chartboost.com":1,
  "applovin.com":1,"mopub.com":1,
  "inmobi.com":1,"adcolony.com":1,
  "supersonicads.com":1,"startapp.com":1,
  "smaato.net":1,"kidoz.net":1
};

function isJunk(host) {
  var h = host.toLowerCase();
  var p = h.split(".");
  var l = p.length;
  if (l >= 2 && JL[p[l-2] + "." + p[l-1]]) return true;
  if (l >= 3 && JL[p[l-3] + "." + p[l-2] + "." + p[l-1]]) return true;
  if (JL[h]) return true;
  return false;
}

/* =========================================================
   ⏰ PEAK HOURS (8م – 2ص = أقوى اتصال)
   ========================================================= */
function isPeakHour() {
  var h = new Date().getHours();
  return (h >= 20 || h < 2);
}

/* =========================================================
   🔥 SMART WARMUP (90 ثانية)
   ========================================================= */
var _start = Date.now();
function isWarmup() {
  return (Date.now() - _start < 90000);
}

/* =========================================================
   🌡️ ANTI-SPIKE ENGINE
   ========================================================= */
var _rCount = 0;
var _rTime  = 0;

function isSpike() {
  var now = Date.now();
  if (now - _rTime > 1000) {
    _rCount = 0;
    _rTime  = now;
  }
  _rCount++;
  return (_rCount > 45);
}

/* =========================================================
   💾 PERSISTENT LOCK SYSTEM (45 دقيقة)
   ========================================================= */
var _locked    = null;
var _lockTime  = 0;
var _recCount  = 0;
var _recMode   = false;
var _sessionFP = hash("jo_" + Date.now());

var LOCK_GAME    = 480000;   // 8 دقيقة أثناء اللعب
var LOCK_PERSIST = 2700000;  // 45 دقيقة بعد اللعب
var LOCK_RECOVER = 600000;   // 10 دقيقة وضع Recovery

function getProxy(host, url, isGame) {
  var now = Date.now();

  /* 🔥 Warmup = P1 فقط */
  if (isWarmup()) {
    _locked = C1; _lockTime = now;
    return C1;
  }

  /* 🌡️ Spike = P1 فوراً */
  if (isSpike()) return C1;

  /* ⏰ Peak + Game = P1 فقط */
  if (isPeakHour() && isGame) {
    _locked = C1; _lockTime = now;
    return C1;
  }

  /* ♻️ Auto Recovery */
  if (_recCount >= 3) {
    _recMode  = true;
    _recCount = 0;
  }
  if (_recMode) {
    if (now - _lockTime < LOCK_RECOVER) return C1;
    _recMode = false;
  }

  /* 💾 Persistent Lock */
  var duration = isGame ? LOCK_GAME : LOCK_PERSIST;
  if (_locked && (now - _lockTime < duration)) {
    /* بعد الماتش 92% يبقى نفس السيرفر */
    if (!isGame) {
      if ((hash(host + _sessionFP) % 100) < 92) {
        return _locked;
      }
    } else {
      return _locked; // أثناء الماتش 100% ثابت
    }
  }

  /* 🎯 Smart Selection – Bias على P1 */
  var h   = hash(host + url + _sessionFP) % 100;
  var sel = (h < 78) ? C1 : (h < 94) ? C2 : C3;

  if (_locked && sel !== _locked) _recCount++;
  _locked   = sel;
  _lockTime = now;
  return sel;
}

/* =========================================================
   🚀 MAIN ENGINE v10.0 – COMPLETE
   ========================================================= */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* ──────────────────────────────────────
     1️⃣ SYSTEM – Local & Private
     ────────────────────────────────────── */
  if (isPlainHostName(h)           ||
      h === "localhost"            ||
      h.indexOf("127.")    === 0   ||
      h.indexOf("10.")     === 0   ||
      h.indexOf("192.168.")=== 0   ||
      h.indexOf("172.16.") === 0   ||
      h.indexOf("172.17.") === 0   ||
      h.indexOf("172.18.") === 0   ||
      h.indexOf("172.19.") === 0   ||
      h.indexOf("172.20.") === 0   ||
      h.indexOf("172.21.") === 0   ||
      h.indexOf("172.22.") === 0   ||
      h.indexOf("172.23.") === 0   ||
      h.indexOf("172.24.") === 0   ||
      h.indexOf("172.25.") === 0   ||
      h.indexOf("172.26.") === 0   ||
      h.indexOf("172.27.") === 0   ||
      h.indexOf("172.28.") === 0   ||
      h.indexOf("172.29.") === 0   ||
      h.indexOf("172.30.") === 0   ||
      h.indexOf("172.31.") === 0) {
    return P1;
  }

  /* ──────────────────────────────────────
     2️⃣ JUNK = BLOCK (بدون DNS)
     ────────────────────────────────────── */
  if (isJunk(h)) return BLOCK;

  /* ──────────────────────────────────────
     3️⃣ DOMAIN BLOCKS (بدون DNS)
     ────────────────────────────────────── */
  if (shExpMatch(h, "*.il")) return BLOCK;  // إسرائيل دومين
  if (shExpMatch(h, "*.sy")) return BLOCK;  // سوريا دومين

  /* ──────────────────────────────────────
     4️⃣ WARMUP PHASE
     ────────────────────────────────────── */
  if (isWarmup()) return C1;

  /* ──────────────────────────────────────
     5️⃣ APP DETECTION (قبل DNS)
     ────────────────────────────────────── */
  var isGame   = isPUBG(h, u) || isPUBGPort(u);
  var isTindr  = isTinder(h);

  /* ──────────────────────────────────────
     6️⃣ DNS (مرة وحدة + Cache)
     ────────────────────────────────────── */
  var ip = getIP(h);

  if (!ip) {
    /* DNS فشل = استخدم أفضل بروكسي */
    return getProxy(h, u, isGame || isTindr);
  }

  /* ──────────────────────────────────────
     7️⃣ IP BLOCKS
     ────────────────────────────────────── */
  if (isIsraelIP(ip))  return BLOCK;  // حظر إسرائيل IP
  if (isSyriaIP(ip))   return BLOCK;  // حظر سوريا IP

  /* ──────────────────────────────────────
     8️⃣ 💘 TINDER – Jordan Lock
     ────────────────────────────────────── */
  if (isTindr) {
    /* إذا IP إسرائيلي أو أجنبي غير أردني = BLOCK */
    if (!isJordanIP(ip)) return BLOCK;
    return getProxy(h, u, true);
  }

  /* ──────────────────────────────────────
     9️⃣ 🎮 PUBG – Region Lock
     ────────────────────────────────────── */
  if (isGame) {
    /* سيرفرات أجنبية = BLOCK لإجبار الأردن */
    if (isForeignGame(ip)) return BLOCK;
    return getProxy(h, u, true);
  }

  /* ──────────────────────────────────────
     🔟 ALL OTHER TRAFFIC
     Zero Direct – كل شي عالأردن
     ────────────────────────────────────── */
  return getProxy(h, u, false);
}
