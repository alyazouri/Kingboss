/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v13.1 – FIXED
   =========================================================
   🇯🇴 Zero Direct | Jordan Players Only
   🎮 PUBG Mobile | 💘 Tinder Jordan Lock
   🛡️ Anti-Israel (30+ Range) | 🇸🇾 Anti-Syria
   ⚡ Anti-Spike | 🔥 Smart Warmup 90s
   💾 Persistent 45min | 🔒 Game Lock 8min
   ⏰ Peak Hours Guard | ♻️ Auto Recovery
   🧠 Smart DNS Cache | 🎯 Port Detection
   🗑️ Junk Killer 50+ | 🔗 Failover Chains
   🔏 Session Fingerprint | 🌍 Foreign Block
   ========================================================= */

/* ─────────────────────────────────────────────────────────
   🇯🇴 JORDAN PROXY ARSENAL
   ───────────────────────────────────────────────────────── */
var P1    = "PROXY 37.220.120.111:20001";
var P2    = "PROXY 46.185.131.218:20001";
var P3    = "PROXY 109.237.195.25:20001";
var BLOCK = "PROXY 0.0.0.0:0";

/* ─── FAILOVER CHAINS ─── */
var C1 = P1 + "; " + P2 + "; " + P3;
var C2 = P2 + "; " + P1 + "; " + P3;
var C3 = P3 + "; " + P1 + "; " + P2;

/* =========================================================
   ⚡ ULTRA HASH ENGINE – FNV-1a
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
   ========================================================= */
var _dns  = {};
var _dnsT = {};
var _miss = {};

function getIP(host) {
  var now = Date.now();
  var h   = host.toLowerCase();

  var ttl = 240000;
  if (h.indexOf("pubg")     !== -1 ||
      h.indexOf("krafton")  !== -1 ||
      h.indexOf("tencent")  !== -1) ttl = 90000;
  if (h.indexOf("tinder")   !== -1 ||
      h.indexOf("gotinder")  !== -1 ||
      h.indexOf("tndr")     !== -1) ttl = 60000;

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
   🇮🇱 ANTI-ISRAEL – 30+ IP RANGE
   ========================================================= */
function isIsraelIP(ip) {
  return (
    isInNet(ip, "5.28.0.0",       "255.252.0.0")   ||
    isInNet(ip, "31.44.128.0",    "255.255.128.0")  ||
    isInNet(ip, "37.26.144.0",    "255.255.240.0")  ||
    isInNet(ip, "46.116.0.0",     "255.252.0.0")    ||
    isInNet(ip, "62.0.0.0",       "255.192.0.0")    ||
    isInNet(ip, "77.124.0.0",     "255.252.0.0")    ||
    isInNet(ip, "79.176.0.0",     "255.240.0.0")    ||
    isInNet(ip, "80.178.0.0",     "255.254.0.0")    ||
    isInNet(ip, "81.218.0.0",     "255.255.0.0")    ||
    isInNet(ip, "82.80.0.0",      "255.240.0.0")    ||
    isInNet(ip, "84.94.0.0",      "255.254.0.0")    ||
    isInNet(ip, "85.64.0.0",      "255.252.0.0")    ||
    isInNet(ip, "87.68.0.0",      "255.252.0.0")    ||
    isInNet(ip, "89.138.0.0",     "255.254.0.0")    ||
    isInNet(ip, "91.197.204.0",   "255.255.252.0")  ||
    isInNet(ip, "93.172.0.0",     "255.252.0.0")    ||
    isInNet(ip, "94.159.0.0",     "255.255.0.0")    ||
    isInNet(ip, "95.35.0.0",      "255.255.0.0")    ||
    isInNet(ip, "109.64.0.0",     "255.240.0.0")    ||
    isInNet(ip, "132.64.0.0",     "255.240.0.0")    ||
    isInNet(ip, "141.226.0.0",    "255.255.0.0")    ||
    isInNet(ip, "147.234.0.0",    "255.254.0.0")    ||
    isInNet(ip, "176.12.128.0",   "255.255.128.0")  ||
    isInNet(ip, "185.3.0.0",      "255.255.0.0")    ||
    isInNet(ip, "185.175.144.0",  "255.255.240.0")  ||
    isInNet(ip, "188.120.64.0",   "255.255.192.0")  ||
    isInNet(ip, "192.114.0.0",    "255.255.0.0")    ||
    isInNet(ip, "194.90.0.0",     "255.255.0.0")    ||
    isInNet(ip, "212.143.0.0",    "255.255.0.0")    ||
    isInNet(ip, "213.8.0.0",      "255.255.0.0")    ||
    isInNet(ip, "216.73.80.0",    "255.255.252.0")
  );
}

/* =========================================================
   🇸🇾 ANTI-SYRIAFIXED –  أزلنا 176.29.0.0
   ========================================================= */
function isSyriaIP(ip) {
  return (
    isInNet(ip, "31.9.0.0",       "255.255.0.0")    ||
    isInNet(ip, "82.137.192.0",   "255.255.192.0")  ||
    isInNet(ip, "91.144.0.0",     "255.252.0.0")    ||
    /* 176.29.0.0 محذوف – تعارض مع isJordanIP */
    isInNet(ip, "5.36.0.0",       "255.252.0.0")    ||
    isInNet(ip, "185.11.224.0",   "255.255.252.0")  ||
    isInNet(ip, "185.202.172.0",  "255.255.252.0")
  );
}

/* =========================================================
   🇯🇴 JORDAN IP RANGES (محدث 2025)
   ========================================================= */
function isJordanIP(ip) {
  return (
    isInNet(ip, "37.220.112.0",   "255.255.240.0")  ||
    isInNet(ip, "46.185.128.0",   "255.255.128.0")  ||
    isInNet(ip, "79.173.192.0",   "255.255.192.0")  ||
    isInNet(ip, "87.236.232.0",   "255.255.248.0")  ||
    isInNet(ip, "92.253.0.0",     "255.255.128.0")  ||
    isInNet(ip, "109.237.192.0",  "255.255.240.0")  ||
    isInNet(ip, "178.20.184.0",   "255.255.248.0")  ||
    isInNet(ip, "185.117.68.0",   "255.255.252.0")  ||
    isInNet(ip, "82.102.0.0",     "255.255.0.0")    ||
    isInNet(ip, "94.0.0.0",       "255.255.0.0")    ||
    isInNet(ip, "212.118.0.0",    "255.255.0.0")    ||
    isInNet(ip, "213.6.0.0",      "255.255.0.0")    ||
    isInNet(ip, "176.29.0.0",     "255.255.0.0")
  );
}

/* =========================================================
   🎮 PUBG MOBILE DETECTION
   ========================================================= */
var PUBG_DOMAINS = {
  "pubg":1, "pubgm":1, "pubgmobile":1, "krafton":1,
  "lightspeed":1, "proximabeta":1, "tencent":1,
  "qcloud":1, "myqcloud":1, "tencentcs":1,
  "battlegrounds":1, "bgmi":1,
  "proxima":1, "vivogame":1
};

/* ⚠️ أزلنا "amazonaws" من القائمة – يستخدمه الجميع */

var PUBG_KEYWORDS = [
  "battle", "lobby", "match", "session", "dispatcher",
  "gamecore", "allocation", "ranked", "conqueror",
  "erangel", "miramar", "sanhok", "vikendi", "karakin",
  "livik", "tdm", "payload", "metro", "zombie",
  "cheerpark", "warehouse", "training", "arcade",
  "infection", "event", "season", "tier", "leaderboard"
];

function isPUBGPort(url) {
  var m = url.match(/:(\d+)/);
  if (!m) return false;
  var p = +m[1];
  return (
    p === 7889  || p === 8011  || p === 8012  ||
    p === 8013  || p === 8443  || p === 10012 ||
    p === 10490 || p === 17500 ||
    (p >= 7000  && p <= 7999)  ||
    (p >= 10000 && p <= 11000) ||
    (p >= 17000 && p <= 18100) ||
    (p >= 20000 && p <= 20100)
  );
}

function isPUBG(host, url) {
  var h     = host.toLowerCase();
  var parts = h.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (PUBG_DOMAINS[parts[i]]) return true;
  }
  var text = h + url.toLowerCase();
  for (var j = 0; j < PUBG_KEYWORDS.length; j++) {
    if (text.indexOf(PUBG_KEYWORDS[j]) !== -1) return true;
  }
  return isPUBGPort(url);
}

/* =========================================================
   💘 TINDER DETECTION
   ========================================================= */
var TINDER_DOMAINS = {
  "tinder":1, "gotinder":1, "tndr":1,
  "tindercdn":1, "tindersparks":1,
  "tindermatch":1, "tinderapi":1
};

var TINDER_HOSTS = [
  "api.gotinder.com",     "api.tinder.com",
  "tinder.com",           "gotinder.com",
  "images.gotinder.com",  "images.tinder.com",
  "media.gotinder.com",   "media.tinder.com",
  "tindercdn.com",        "auth.gotinder.com",
  "auth.tinder.com",      "profile.gotinder.com",
  "recs.gotinder.com",    "recs.tinder.com",
  "see.gotinder.com",     "data.gotinder.com"
];

var TINDER_KEYWORDS = [
  "tinder", "gotinder", "tndr",
  "tindercdn", "tinderspark",
  "tinderapi", "tindermatch"
];

function isTinder(host, url) {
  var h     = host.toLowerCase();
  var parts = h.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (TINDER_DOMAINS[parts[i]]) return true;
  }
  for (var j = 0; j < TINDER_HOSTS.length; j++) {
    if (h === TINDER_HOSTS[j] ||
        h.indexOf(TINDER_HOSTS[j]) !== -1) return true;
  }
  var combined = h + url.toLowerCase();
  for (var k = 0; k < TINDER_KEYWORDS.length; k++) {
    if (combined.indexOf(TINDER_KEYWORDS[k]) !== -1) return true;
  }
  return false;
}

/* =========================================================
   🛡️ JUNK KILLER v6 – FIXED
   ========================================================= */
var JUNK_LIST = {
  /* إعلانات */
  "doubleclick.net":1,        "googlesyndication.com":1,
  "googleadservices.com":1,   "adnxs.com":1,
  "moatads.com":1,            "openx.net":1,
  "rubiconproject.com":1,     "pubmatic.com":1,
  "criteo.com":1,             "taboola.com":1,
  "outbrain.com":1,           "zedo.com":1,
  "trafficjunky.net":1,       "adsafeprotected.com":1,
  "scorecardresearch.com":1,  "quantserve.com":1,
  "adsrvr.org":1,             "advertising.com":1,
  "bluekai.com":1,            "demdex.net":1,
  /* تتبع */
  "adjust.com":1,
  "crashlytics.com":1,
  "mixpanel.com":1,
  "flurry.com":1,
  "app-measurement.com":1,
  "singular.net":1,           "tune.com":1,
  /* ⚠️ أزلنا appsflyer و amplitude – تستخدمها التطبيقات */
  /* ⚠️ أزلنا branch.io – Tinder يستخدمه */
  /* ⚠️ أزلنا firebaseio – PUBG يستخدمه */
  /* سوشال ميديا */
  "tiktok.com":1,             "tiktokcdn.com":1,
  "tiktokv.com":1,            "snapchat.com":1,
  "sc-cdn.net":1,             "twitter.com":1,
  "x.com":1,                  "twimg.com":1,
  /* ⚠️ أزلنا facebook/fbcdn/instagram – Tinder يحتاجهم لـ Login والصور */
  /* موبايل Ads */
  "unity3d.com":1,            "ironsrc.com":1,
  "vungle.com":1,             "tapjoy.com":1,
  "chartboost.com":1,         "applovin.com":1,
  "mopub.com":1,              "inmobi.com":1,
  "adcolony.com":1,           "supersonicads.com":1,
  "startapp.com":1,           "smaato.net":1,
  "kidoz.net":1,              "fyber.com":1,
  "digitalturbine.com":1
};

function isJunk(host) {
  var h = host.toLowerCase();
  /* استثناء كامل للتطبيقات المطلوبة */
  if (isTinder(h, "") || isPUBG(h, "")) return false;

  /* استثناء Facebook/Instagram (Tinder يعتمد عليهم) */
  if (h.indexOf("facebook")   !== -1) return false;
  if (h.indexOf("fbcdn")      !== -1) return false;
  if (h.indexOf("instagram")  !== -1) return false;
  if (h.indexOf("cdninstagram") !== -1) return false;
  if (h.indexOf("firebase")   !== -1) return false;
  if (h.indexOf("branch")     !== -1) return false;
  if (h.indexOf("amplitude")  !== -1) return false;
  if (h.indexOf("appsflyer")  !== -1) return false;

  var p = h.split(".");
  var l = p.length;
  if (l >= 2 && JUNK_LIST[p[l-2] + "." + p[l-1]]) return true;
  if (l >= 3 && JUNK_LIST[p[l-3] + "." + p[l-2] + "." + p[l-1]]) return true;
  if (JUNK_LIST[h]) return true;
  return false;
}

/* =========================================================
   ⏰ PEAK HOURS (8م – 2ص)
   ========================================================= */
function isPeakHour() {
  var h = new Date().getHours();
  return (h >= 20 || h < 2);
}

/* =========================================================
   🔥 SMART WARMUP (90 ثانية)
   ========================================================= */
var _startTime = Date.now();
function isWarmup() {
  return (Date.now() - _startTime < 90000);
}

/* =========================================================
   🌡️ ANTI-SPIKE ENGINE v2
   ========================================================= */
var _reqCount  = 0;
var _reqWindow = 0;

function isSpike() {
  var now = Date.now();
  if (now - _reqWindow > 1000) {
    _reqCount  = 0;
    _reqWindow = now;
  }
  _reqCount++;
  return (_reqCount > 48);
}

/* =========================================================
   💾 UNIFIED PERSISTENT LOCK
   ========================================================= */
var _locked    = null;
var _lockTime  = 0;
var _recCount  = 0;
var _recMode   = false;
var _fp        = hash("jordan_v13_ultra_" + Date.now());

var LOCK_ACTIVE   = 480000;
var LOCK_PERSIST  = 2700000;
var LOCK_RECOVER  = 600000;

function getUnifiedProxy(host, url, isActive) {
  var now = Date.now();

  if (isWarmup()) {
    _locked = C1; _lockTime = now;
    return C1;
  }

  if (isSpike()) return C1;

  if (isPeakHour() && isActive) {
    _locked = C1; _lockTime = now;
    return C1;
  }

  if (_recCount >= 3) { _recMode = true; _recCount = 0; }
  if (_recMode) {
    if (now - _lockTime < LOCK_RECOVER) return C1;
    _recMode = false;
  }

  var duration = isActive ? LOCK_ACTIVE : LOCK_PERSIST;
  if (_locked && (now - _lockTime < duration)) {
    if (!isActive) {
      if ((hash(host + _fp) % 100) < 92) return _locked;
    } else {
      return _locked;
    }
  }

  var h   = hash(host + url + _fp) % 100;
  var sel = (h < 80) ? C1 : (h < 94) ? C2 : C3;

  if (_locked && sel !== _locked) _recCount++;
  _locked   = sel;
  _lockTime = now;
  return sel;
}

/* =========================================================
   🚀 MAIN ENGINE v13.1 – FIXED
   ========================================================= */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* 1️⃣ LOCAL & PRIVATE NETWORKS → P1 */
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

  /* 2️⃣ APP DETECTION أولاً (قبل أي حظر) */
  var isGame   = isPUBG(h, u);
  var isTindr  = isTinder(h, u);
  var isActive = (isGame || isTindr);

  /* ✅ التطبيقات تمر مباشرة بدون حظر */
  if (isActive) {
    if (isWarmup()) return C1;
    return getUnifiedProxy(h, u, true);
  }

  /* 3️⃣ JUNK = BLOCK */
  if (isJunk(h)) return BLOCK;

  /* 4️⃣ DOMAIN BLOCKS */
  if (shExpMatch(h, "*.il")) return BLOCK;
  if (shExpMatch(h, "*.sy")) return BLOCK;

  /* 5️⃣ WARMUP PHASE */
  if (isWarmup()) return C1;

  /* 6️⃣ DNS RESOLVE */
  var ip = getIP(h);

  if (!ip) {
    return getUnifiedProxy(h, u, false);
  }

  /* 7️⃣ IP BLOCKS (لغير التطبيقات فقط) */
  if (isIsraelIP(ip)) return BLOCK;
  if (isSyriaIP(ip))  return BLOCK;

  /* 8️⃣ OTHER TRAFFIC */
  return getUnifiedProxy(h, u, false);
}
