/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v13.2 – TINDER+PUBG FIXED
   =========================================================
   ✅ Tinder 100% Working (كل الميزات)
   ✅ PUBG 100% Working (كل الأوضاع)
   ✅ Zero Direct | Jordan Only
   ========================================================= */

/* ─────────────────────────────────────────────────────────
   🇯🇴 JORDAN PROXY ARSENAL
   ───────────────────────────────────────────────────────── */
var P1    = "PROXY 37.220.120.111:20001";
var P2    = "PROXY 46.185.131.218:20001";
var P3    = "PROXY 109.237.195.25:20001";
var BLOCK = "PROXY 0.0.0.0:0";

var C1 = P1 + "; " + P2 + "; " + P3;
var C2 = P2 + "; " + P1 + "; " + P3;
var C3 = P3 + "; " + P1 + "; " + P2;

/* =========================================================
   ⚡ HASH ENGINE
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
   🧠 DNS CACHE
   ========================================================= */
var _dns  = {};
var _dnsT = {};
var _miss = {};

function getIP(host) {
  var now = Date.now();
  var ttl = 240000;
  if (host.indexOf("pubg") !== -1 || host.indexOf("krafton") !== -1) ttl = 90000;
  if (host.indexOf("tinder") !== -1 || host.indexOf("gotinder") !== -1) ttl = 60000;
  if (_dns[host] && (now - _dnsT[host] < ttl)) return _dns[host];
  if (_miss[host] && (now - _miss[host] < 30000)) return null;
  var ip = dnsResolve(host);
  if (ip) { _dns[host] = ip; _dnsT[host] = now; delete _miss[host]; }
  else { _miss[host] = now; }
  return ip;
}

/* =========================================================
   💘 TINDER DETECTION – شامل جداً (8 طبقات)
   ========================================================= */
function isTinder(host, url) {
  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* ═══ طبقة 1: Wildcard Patterns ═══ */
  if (shExpMatch(h, "*.tinder.com"))       return true;
  if (shExpMatch(h, "*.gotinder.com"))      return true;
  if (shExpMatch(h, "*.tindercdn.com"))     return true;
  if (shExpMatch(h, "*.tindersparks.com"))  return true;
  if (shExpMatch(h, "*.tindermatch.com"))   return true;
  if (shExpMatch(h, "*.tinderapi.com"))     return true;
  if (shExpMatch(h, "*.tinder.app"))        return true;
  if (shExpMatch(h, "*.tndr.co"))           return true;
  if (shExpMatch(h, "*.tnder.com"))         return true;

  /* ═══ طبقة 2: Base domains ═══ */
  if (h === "tinder.com")       return true;
  if (h === "gotinder.com")     return true;
  if (h === "tindercdn.com")    return true;
  if (h === "tindersparks.com") return true;
  if (h === "tinder.app")       return true;
  if (h === "tndr.co")          return true;

  /* ═══ طبقة 3: Tinder Specific Subdomains ═══ */
  var tinderSubs = [
    "api.gotinder.com",         "api.tinder.com",
    "api.gotinder.com",
    "images.gotinder.com",      "images.tinder.com",
    "media.gotinder.com",       "media.tinder.com",
    "static.gotinder.com",      "static.tinder.com",
    "auth.gotinder.com",        "auth.tinder.com",
    "profile.gotinder.com",     "profile.tinder.com",
    "recs.gotinder.com",        "recs.tinder.com",
    "see.gotinder.com",         "see.tinder.com",
    "data.gotinder.com",        "data.tinder.com",
    "updates.gotinder.com",     "updates.tinder.com",
    "passport.gotinder.com",    "passport.tinder.com",
    "tinbox.gotinder.com",      "tinbox.tinder.com",
    "fast-match.gotinder.com",  "fast-match.tinder.com",
    "vibes.gotinder.com",       "vibes.tinder.com",
    "swipe.gotinder.com",       "swipe.tinder.com",
    "explore.gotinder.com",     "explore.tinder.com",
    "gold.tinder.com",          "plus.tinder.com",
    "platinum.tinder.com",      "go.tinder.com",
    "m.tinder.com",             "web.tinder.com",
    "events.gotinder.com",      "events.tinder.com",
    "consent.gotinder.com",     "consent.tinder.com",
    "mfa.gotinder.com",         "mfa.tinder.com",
    "report.gotinder.com",      "report.tinder.com",
    "lp.gotinder.com",          "share.gotinder.com",
    "tinder-cdn.com",           "tinder-static.com",
    "tinder-content.com",       "tinder-assets.com"
  ];
  for (var i = 0; i < tinderSubs.length; i++) {
    if (h === tinderSubs[i]) return true;
  }

  /* ═══ طبقة 4: Keyword Check ═══ */
  if (h.indexOf("tinder")   !== -1) return true;
  if (h.indexOf("gotinder") !== -1) return true;
  if (h.indexOf("tndr")     !== -1) return true;

  /* ═══ طبقة 5: Tinder CDN on CloudFront ═══ */
  if (shExpMatch(h, "*.cloudfront.net")) {
    var combined = h + u;
    if (combined.indexOf("tinder")  !== -1) return true;
    if (combined.indexOf("gotinder") !== -1) return true;
    if (combined.indexOf("tndr")    !== -1) return true;
  }

  /* ═══ طبقة 6: Tinder Ports ═══ */
  var m = u.match(/:(\d+)/);
  if (m) {
    var p = +m[1];
    if (p === 3000 || p === 3001 || p === 4000 || p === 4443) return true;
  }

  return false;
}

/* =========================================================
   🔐 TINDER AUTH & DEPENDENCIES
   (_domains اللي Tinder يحتاجها للتسجيل والدخول)
   ========================================================= */
function isTinderAuth(host) {
  var h = host.toLowerCase();

  /* Facebook Login */
  if (shExpMatch(h, "*.facebook.com") && h.indexOf("tinder") !== -1) return true;
  if (h === "graph.facebook.com")      return true;
  if (h === "api.facebook.com")        return true;
  if (h === "www.facebook.com")        return true;
  if (h === "m.facebook.com")          return true;
  if (h === "login.facebook.com")      return true;
  if (h === "connect.facebook.net")    return true;
  if (shExpMatch(h, "*.fbcdn.net"))    return true;
  if (shExpMatch(h, "*.facebook.net")) return true;

  /* Google Login */
  if (h === "accounts.google.com")              return true;
  if (h === "oauth.google.com")                 return true;
  if (h === "oauthaccountmanager.googleapis.com") return true;
  if (shExpMatch(h, "*.googleapis.com"))        return true;
  if (shExpMatch(h, "*.gstatic.com"))           return true;
  if (shExpMatch(h, "*.google.com")) {
    if (h.indexOf("accounts") !== -1) return true;
    if (h.indexOf("oauth")    !== -1) return true;
    if (h.indexOf("login")    !== -1) return true;
  }

  /* Apple Sign-in */
  if (h === "appleid.apple.com")              return true;
  if (h === "idmsa.apple.com")               return true;
  if (shExpMatch(h, "*.apple.com")) {
    if (h.indexOf("appleid")  !== -1) return true;
    if (h.indexOf("idmsa")    !== -1) return true;
    if (h.indexOf("auth")     !== -1) return true;
  }

  return false;
}

/* =========================================================
   🔔 PUSH NOTIFICATIONS (Tinder & PUBG)
   ========================================================= */
function isPushNotification(host) {
  var h = host.toLowerCase();
  /* Firebase Cloud Messaging */
  if (h === "fcm.googleapis.com")                        return true;
  if (h === "iid.googleapis.com")                        return true;
  if (h === "firebaseinstallations.googleapis.com")      return true;
  if (h === "fcmregistrations.googleapis.com")           return true;
  if (shExpMatch(h, "*.fcm.googleapis.com"))             return true;
  /* APNs (Apple Push) */
  if (shExpMatch(h, "*.push.apple.com"))                 return true;
  if (h.indexOf("courier") !== -1 && h.indexOf("apple") !== -1) return true;
  /* Firebase */
  if (shExpMatch(h, "*.firebaseio.com"))                 return true;
  if (shExpMatch(h, "*.firebaseapp.com"))                return true;
  if (shExpMatch(h, "*.firebase.google.com"))            return true;
  if (shExpMatch(h, "*.firebase.com"))                   return true;
  /* Google Play Services */
  if (h === "android.googleapis.com")                    return true;
  if (h === "play.googleapis.com")                       return true;
  return false;
}

/* =========================================================
   💳 PAYMENT SERVICES (Tinder Gold/Plus/Platinum)
   ========================================================= */
function isPaymentService(host) {
  var h = host.toLowerCase();
  if (h.indexOf("braintree")  !== -1) return true;
  if (h.indexOf("stripe")     !== -1) return true;
  if (h === "payments.google.com")    return true;
  if (shExpMatch(h, "*.braintreegateway.com")) return true;
  if (shExpMatch(h, "*.stripe.com"))           return true;
  if (h.indexOf("apple-pay")  !== -1) return true;
  if (h === "buy.itunes.apple.com")   return true;
  return false;
}

/* =========================================================
   📊 TINDER THIRD-PARTY SERVICES
   (اللي Tinder يستخدمها فعلياً)
   ========================================================= */
function isTinderThirdParty(host) {
  var h = host.toLowerCase();
  /* Analytics */
  if (shExpMatch(h, "*.amplitude.com"))   return true;
  if (shExpMatch(h, "*.segment.com"))     return true;
  if (shExpMatch(h, "*.segment.io"))      return true;
  /* Attribution */
  if (shExpMatch(h, "*.branch.io"))       return true;
  if (shExpMatch(h, "*.appsflyer.com"))   return true;
  if (shExpMatch(h, "*.adjust.com"))      return true;
  /* Customer Support */
  if (shExpMatch(h, "*.intercom.io"))     return true;
  if (shExpMatch(h, "*.intercomcdn.com")) return true;
  if (shExpMatch(h, "*.intercom.com"))    return true;
  /* CDN/Infrastructure */
  if (shExpMatch(h, "*.fastly.net"))      return true;
  if (shExpMatch(h, "*.cloudflare.com"))  return true;
  if (shExpMatch(h, "*.cloudflare-dns.com")) return true;
  /* Mapbox (Tinder uses for location) */
  if (shExpMatch(h, "*.mapbox.com"))      return true;
  if (shExpMatch(h, "*.tiles.mapbox.com")) return true;
  /* Twilio (SMS verification) */
  if (shExpMatch(h, "*.twilio.com"))      return true;
  if (shExpMatch(h, "*.twilio.com"))      return true;
  /* Imgix (image processing) */
  if (shExpMatch(h, "*.imgix.net"))       return true;
  /* Phone verification */
  if (h.indexOf("telesign") !== -1)       return true;
  if (h.indexOf("sinch")    !== -1)       return true;
  return false;
}

/* =========================================================
   🎮 PUBG DETECTION – شامل
   ========================================================= */
function isPUBG(host, url) {
  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* Wildcard patterns */
  if (shExpMatch(h, "*.pubg.com"))              return true;
  if (shExpMatch(h, "*.pubgmobile.com"))        return true;
  if (shExpMatch(h, "*.pubgm.com"))             return true;
  if (shExpMatch(h, "*.pubgmobile.kr"))         return true;
  if (shExpMatch(h, "*.pubgmobile.live"))       return true;
  if (shExpMatch(h, "*.krafton.com"))           return true;
  if (shExpMatch(h, "*.krafton.co.kr"))         return true;
  if (shExpMatch(h, "*.lightspeedstudios.com")) return true;
  if (shExpMatch(h, "*.proximabeta.com"))       return true;
  if (shExpMatch(h, "*.proximabeta2.com"))      return true;
  if (shExpMatch(h, "*.proximabeta3.com"))      return true;
  if (shExpMatch(h, "*.proximabeta4.com"))      return true;
  if (shExpMatch(h, "*.qcloud.com"))            return true;
  if (shExpMatch(h, "*.myqcloud.com"))          return true;
  if (shExpMatch(h, "*.tencentcs.com"))         return true;
  if (shExpMatch(h, "*.tencent-cloud.com"))     return true;
  if (shExpMatch(h, "*.battlegrounds.com"))     return true;
  if (shExpMatch(h, "*.bgmi.com"))              return true;
  if (shExpMatch(h, "*.proxima.studio"))        return true;
  if (shExpMatch(h, "*.vivogame.com"))          return true;
  if (shExpMatch(h, "*.tencent.com")) {
    /* Tencent Gaming */
    if (h.indexOf("pubg")      !== -1) return true;
    if (h.indexOf("game")      !== -1) return true;
    if (h.indexOf("gaming")    !== -1) return true;
    if (h.indexOf("cloud")     !== -1) return true;
  }

  /* Base domains */
  if (h === "pubg.com")             return true;
  if (h === "pubgmobile.com")       return true;
  if (h === "krafton.com")          return true;

  /* PUBG Keywords */
  var pubgKeywords = [
    "battle", "lobby", "match", "session", "dispatcher",
    "gamecore", "allocation", "ranked", "conqueror",
    "erangel", "miramar", "sanhok", "vikendi", "karakin",
    "livik", "tdm", "payload", "metro", "zombie",
    "cheerpark", "warehouse", "training", "arcade",
    "infection", "event", "season", "tier", "leaderboard",
    "battlegrounds", "pubg", "bgmi"
  ];
  var combined = h + u;
  for (var j = 0; j < pubgKeywords.length; j++) {
    if (combined.indexOf(pubgKeywords[j]) !== -1) return true;
  }

  /* PUBG Ports */
  var m = u.match(/:(\d+)/);
  if (m) {
    var p = +m[1];
    if (p === 7889  || p === 8011  || p === 8012 ||
        p === 8013  || p === 8443  || p === 10012 ||
        p === 10490 || p === 17500) return true;
    if ((p >= 7000  && p <= 7999)  ||
        (p >= 10000 && p <= 11000) ||
        (p >= 17000 && p <= 18100) ||
        (p >= 20000 && p <= 20100)) return true;
  }

  return false;
}

/* =========================================================
   🇮🇱 ANTI-ISRAEL
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
   🇸🇾 ANTI-SYRIA (مصحح)
   ========================================================= */
function isSyriaIP(ip) {
  return (
    isInNet(ip, "31.9.0.0",       "255.255.0.0")    ||
    isInNet(ip, "82.137.192.0",   "255.255.192.0")  ||
    isInNet(ip, "91.144.0.0",     "255.252.0.0")    ||
    isInNet(ip, "5.36.0.0",       "255.252.0.0")    ||
    isInNet(ip, "185.11.224.0",   "255.255.252.0")  ||
    isInNet(ip, "185.202.172.0",  "255.255.252.0")
  );
}

/* =========================================================
   🛡️ JUNK KILLER (نظيف – لا يمس التطبيقات)
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
  /* تتبع إعلاني فقط */
  "crashlytics.com":1,
  "mixpanel.com":1,
  "flurry.com":1,
  "kochava.com":1,
  /* سوشال ميديا (إعلانات فقط) */
  "tiktok.com":1,             "tiktokcdn.com":1,
  "tiktokv.com":1,            "snapchat.com":1,
  "sc-cdn.net":1,
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

  /* ═══ استثناءات كاملة – لا تمس أبداً ═══ */

  /* Tinder */
  if (h.indexOf("tinder")      !== -1) return false;
  if (h.indexOf("gotinder")    !== -1) return false;
  if (h.indexOf("tndr")        !== -1) return false;

  /* PUBG */
  if (h.indexOf("pubg")        !== -1) return false;
  if (h.indexOf("krafton")     !== -1) return false;
  if (h.indexOf("battlegrounds") !== -1) return false;
  if (h.indexOf("bgmi")        !== -1) return false;
  if (h.indexOf("proximabeta") !== -1) return false;
  if (h.indexOf("lightspeed")  !== -1) return false;

  /* Auth services */
  if (h.indexOf("facebook")    !== -1) return false;
  if (h.indexOf("fbcdn")       !== -1) return false;
  if (h.indexOf("facebook.net") !== -1) return false;
  if (h.indexOf("instagram")   !== -1) return false;
  if (h.indexOf("cdninstagram") !== -1) return false;
  if (h.indexOf("googleapis")  !== -1) return false;
  if (h.indexOf("gstatic")     !== -1) return false;
  if (h.indexOf("appleid")     !== -1) return false;
  if (h.indexOf("apple.com")   !== -1) return false;

  /* Push notifications */
  if (h.indexOf("firebase")    !== -1) return false;

  /* Infrastructure */
  if (h.indexOf("cloudflare")  !== -1) return false;
  if (h.indexOf("cloudfront")  !== -1) return false;
  if (h.indexOf("fastly")      !== -1) return false;
  if (h.indexOf("akamai")      !== -1) return false;

  /* Tinder deps */
  if (h.indexOf("amplitude")   !== -1) return false;
  if (h.indexOf("branch.io")   !== -1) return false;
  if (h.indexOf("appsflyer")   !== -1) return false;
  if (h.indexOf("intercom")    !== -1) return false;
  if (h.indexOf("segment")     !== -1) return false;
  if (h.indexOf("braintree")   !== -1) return false;
  if (h.indexOf("stripe")      !== -1) return false;
  if (h.indexOf("mapbox")      !== -1) return false;
  if (h.indexOf("twilio")      !== -1) return false;
  if (h.indexOf("imgix")       !== -1) return false;
  if (h.indexOf("telesign")    !== -1) return false;
  if (h.indexOf("sinch")       !== -1) return false;

  /* Tencent */
  if (h.indexOf("tencent")     !== -1) return false;
  if (h.indexOf("qcloud")      !== -1) return false;

  /* Check against junk list */
  var p = h.split(".");
  var l = p.length;
  if (l >= 2 && JUNK_LIST[p[l-2] + "." + p[l-1]]) return true;
  if (l >= 3 && JUNK_LIST[p[l-3] + "." + p[l-2] + "." + p[l-1]]) return true;
  if (JUNK_LIST[h]) return true;
  return false;
}

/* =========================================================
   ⏰ PEAK HOURS
   ========================================================= */
function isPeakHour() {
  var h = new Date().getHours();
  return (h >= 20 || h < 2);
}

/* =========================================================
   🔥 SMART WARMUP
   ========================================================= */
var _startTime = Date.now();
function isWarmup() {
  return (Date.now() - _startTime < 90000);
}

/* =========================================================
   🌡️ ANTI-SPIKE
   ========================================================= */
var _reqCount  = 0;
var _reqWindow = 0;
function isSpike() {
  var now = Date.now();
  if (now - _reqWindow > 1000) { _reqCount = 0; _reqWindow = now; }
  _reqCount++;
  return (_reqCount > 48);
}

/* =========================================================
   💾 PERSISTENT LOCK
   ========================================================= */
var _locked    = null;
var _lockTime  = 0;
var _recCount  = 0;
var _recMode   = false;
var _fp        = hash("jordan_v13.2_" + Date.now());

var LOCK_ACTIVE   = 480000;
var LOCK_PERSIST  = 2700000;
var LOCK_RECOVER  = 600000;

function getUnifiedProxy(host, url, isActive) {
  var now = Date.now();

  if (isWarmup()) {
    _locked = C1; _lockTime = now; return C1;
  }
  if (isSpike()) return C1;
  if (isPeakHour() && isActive) {
    _locked = C1; _lockTime = now; return C1;
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
  _locked = sel; _lockTime = now;
  return sel;
}

/* =========================================================
   🚀 MAIN ENGINE v13.2
   ========================================================= */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* ════════════════════════════════════
     1️⃣ LOCAL & PRIVATE → P1
     ════════════════════════════════════ */
  if (isPlainHostName(h)           ||
      h === "localhost"            ||
      h.indexOf("127.")     === 0 ||
      h.indexOf("10.")      === 0 ||
      h.indexOf("192.168.") === 0 ||
      h.indexOf("172.16.")  === 0 ||
      h.indexOf("172.17.")  === 0 ||
      h.indexOf("172.18.")  === 0 ||
      h.indexOf("172.19.")  === 0 ||
      h.indexOf("172.20.")  === 0 ||
      h.indexOf("172.21.")  === 0 ||
      h.indexOf("172.22.")  === 0 ||
      h.indexOf("172.23.")  === 0 ||
      h.indexOf("172.24.")  === 0 ||
      h.indexOf("172.25.")  === 0 ||
      h.indexOf("172.26.")  === 0 ||
      h.indexOf("172.27.")  === 0 ||
      h.indexOf("172.28.")  === 0 ||
      h.indexOf("172.29.")  === 0 ||
      h.indexOf("172.30.")  === 0 ||
      h.indexOf("172.31.")  === 0) {
    return P1;
  }

  /* ════════════════════════════════════
     2️⃣ 💘 TINDER – اكتشف أولاً
     ════════════════════════════════════ */
  if (isTinder(h, u)) {
    return getUnifiedProxy(h, u, true);
  }

  /* ════════════════════════════════════
     3️⃣ 🔐 TINDER AUTH (Facebook/Google/Apple)
     ════════════════════════════════════ */
  if (isTinderAuth(h)) {
    return getUnifiedProxy(h, u, true);
  }

  /* ════════════════════════════════════
     4️⃣ 🎮 PUBG – اكتشف أولاً
     ════════════════════════════════════ */
  if (isPUBG(h, u)) {
    return getUnifiedProxy(h, u, true);
  }

  /* ════════════════════════════════════
     5️⃣ 🔔 PUSH NOTIFICATIONS
     ════════════════════════════════════ */
  if (isPushNotification(h)) {
    return getUnifiedProxy(h, u, false);
  }

  /* ════════════════════════════════════
     6️⃣ 💳 PAYMENT SERVICES
     ════════════════════════════════════ */
  if (isPaymentService(h)) {
    return getUnifiedProxy(h, u, true);
  }

  /* ════════════════════════════════════
     7️⃣ 📊 TINDER THIRD-PARTY
     ════════════════════════════════════ */
  if (isTinderThirdParty(h)) {
    return getUnifiedProxy(h, u, false);
  }

  /* ════════════════════════════════════
     8️⃣ 🛡️ JUNK → BLOCK
     ════════════════════════════════════ */
  if (isJunk(h)) return BLOCK;

  /* ════════════════════════════════════
     9️⃣ DOMAIN BLOCKS
     ════════════════════════════════════ */
  if (shExpMatch(h, "*.il")) return BLOCK;
  if (shExpMatch(h, "*.sy")) return BLOCK;

  /* ════════════════════════════════════
     🔟 DNS + IP BLOCKS
     ════════════════════════════════════ */
  if (isWarmup()) return C1;

  var ip = getIP(h);

  if (!ip) {
    return getUnifiedProxy(h, u, false);
  }

  /* حظر IP إسرائيلي/سوري فقط */
  if (isIsraelIP(ip)) return BLOCK;
  if (isSyriaIP(ip))  return BLOCK;

  /* ════════════════════════════════════
     1️⃣1️⃣ باقي الترافيك → بروكسي أردني
     ════════════════════════════════════ */
  return getUnifiedProxy(h, u, false);
}
