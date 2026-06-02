/* =========================================================
   🏆 JORDAN TOURNAMENT TITANIUM v4.0 – ZERO DIRECT FORTRESS
   ❌ ZERO DIRECT | 🇯🇴 ALL-JORDAN ROUTING | FPS GUARDIAN
   Sticky Lock | DNS Cache | Junk Kill | Port Detect
   ========================================================= */

/* ─── 🇯🇴 JORDAN PROXY ARSENAL ─── */
var P1 = "PROXY 37.220.120.111:20001";
var P2 = "PROXY 46.185.131.218:20001";
var P3 = "PROXY 109.237.195.25:20001";
var BLOCK = "PROXY 0.0.0.0:0";

/* ─── 🔗 FAILOVER CHAINS (الثلاثة أردنية) ─── */
/* إذا واحد وقع ينتقل للثاني فوراً بدون أي قطع */
var CHAIN_PRIMARY   = P1 + "; " + P2 + "; " + P3;
var CHAIN_SECONDARY = P2 + "; " + P1 + "; " + P3;
var CHAIN_TERTIARY  = P3 + "; " + P1 + "; " + P2;

/* ==============================
   ⚡ FNV-1a HASH (Lightweight)
   ============================== */
function fnvHash(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
  }
  return h;
}

/* ==============================
   🧠 DNS CACHE – يمنع Lag Spikes
   ============================== */
var _dc = {};
var _dt = {};

function cachedDNS(host) {
  var n = +new Date();
  if (_dc[host] && _dt[host] && (n - _dt[host]) < 180000) {
    return _dc[host];
  }
  var ip = dnsResolve(host);
  if (ip) {
    _dc[host] = ip;
    _dt[host] = n;
  }
  return ip;
}

/* ==============================
   🎮 PUBG FAST DETECTION
   Object Lookup أسرع 10x من Regex
   ============================== */
var PD = {
  "pubg":1,"pubgm":1,"pubgmobile":1,"bgmi":1,
  "krafton":1,"lightspeed":1,"proximabeta":1,
  "tencent":1,"qcloud":1,"myqcloud":1,"tencentcs":1,
  "aliyun":1,"gcloud":1,"amazonaws":1,"battlegrounds":1
};

var PK = [
  "battle","match","arena","session","dispatcher",
  "lobby","gamecore","allocation","ranked","payload",
  "metro","training","erangel","miramar","sanhok",
  "vikendi","karakin","livik","tdm","arcade",
  "cheerpark","warehouse","zombie","infection",
  "event","season","tier","conqueror","gun_game"
];

function isPUBG(h, u) {
  var parts = h.split(".");
  for (var i = 0; i < parts.length; i++) {
    if (PD[parts[i]]) return true;
  }
  var c = h + u;
  for (var j = 0; j < PK.length; j++) {
    if (c.indexOf(PK[j]) !== -1) return true;
  }
  return false;
}

/* ==============================
   🎯 PUBG PORT DETECTION
   ============================== */
function isPUBGPort(url) {
  var m = url.match(/:(\d+)/);
  if (!m) return false;
  var p = parseInt(m[1], 10);
  return (
    p === 7889 || p === 8011 || p === 8012 ||
    p === 8013 || p === 8443 || p === 10012 ||
    p === 10490 || p === 17500 ||
    (p >= 10000 && p <= 10100) ||
    (p >= 17000 && p <= 18000) ||
    (p >= 20000 && p <= 20100)
  );
}

/* ==============================
   🗑️ JUNK KILLER – يحرر Bandwidth
   إعلانات + تتبع + سوشال ميديا
   كل bandwidth تروح للعبة
   ============================== */
var JK = {
  "doubleclick.net":1,"googlesyndication.com":1,
  "googleadservices.com":1,"adnxs.com":1,
  "moatads.com":1,"appsflyer.com":1,
  "adjust.com":1,"branch.io":1,
  "crashlytics.com":1,"amplitude.com":1,
  "mixpanel.com":1,"flurry.com":1,
  "mopub.com":1,"inmobi.com":1,
  "chartboost.com":1,"ironsrc.com":1,
  "vungle.com":1,"tapjoy.com":1,
  "facebook.com":1,"fbcdn.net":1,
  "instagram.com":1,"tiktok.com":1,
  "tiktokcdn.com":1,"snapchat.com":1,
  "sc-cdn.net":1,"twitter.com":1,"x.com":1,
  "ads.yahoo.com":1,"ad.doubleclick.net":1,
  "pagead2.googlesyndication.com":1,
  "graph.facebook.com":1,"analytics.google.com":1,
  "firebaselogging.googleapis.com":1,
  "app-measurement.com":1,"unityads.unity3d.com":1
};

function isJunk(h) {
  var p = h.split(".");
  var l = p.length;
  if (l >= 2) {
    if (JK[p[l-2]+"."+p[l-1]]) return true;
  }
  if (l >= 3) {
    if (JK[p[l-3]+"."+p[l-2]+"."+p[l-1]]) return true;
  }
  if (JK[h]) return true;
  return false;
}

/* ==============================
   🇸🇾 SYRIA BLOCK
   ============================== */
function isSyriaIP(ip) {
  return (
    isInNet(ip,"31.9.0.0","255.255.0.0")       ||
    isInNet(ip,"82.137.192.0","255.255.192.0")  ||
    isInNet(ip,"91.144.0.0","255.252.0.0")      ||
    isInNet(ip,"176.29.0.0","255.255.0.0")      ||
    isInNet(ip,"5.36.0.0","255.252.0.0")        ||
    isInNet(ip,"185.11.224.0","255.255.252.0")  ||
    isInNet(ip,"185.202.172.0","255.255.252.0")
  );
}

/* ==============================
   🔐 STICKY GAME LOCK
   يثبت البروكسي 6 دقائق (طول ماتش)
   يمنع تقطيع أو تغيير بروكسي
   ============================== */
var _sl = null;
var _st = 0;

function getGameProxy(h, u) {
  var n = +new Date();

  /* إذا مقفول وما انتهت الصلاحية */
  if (_sl && (n - _st) < 360000) {
    return _sl;
  }

  /* وزّع بالهاش على السلاسل الأردنية */
  var hash = fnvHash(h + u);
  var mod = hash % 3;

  if (mod === 0) {
    _sl = CHAIN_PRIMARY;
  } else if (mod === 1) {
    _sl = CHAIN_SECONDARY;
  } else {
    _sl = CHAIN_TERTIARY;
  }

  _st = n;
  return _sl;
}

/* ==============================
   🔄 LOAD BALANCER للترافيك العادي
   يوزع الحمل على 3 بروكسيات أردنية
   عشان ما يضغط على واحد = سرعة أعلى
   ============================== */
function getBalancedProxy(h) {
  var hash = fnvHash(h);
  var mod = hash % 3;

  if (mod === 0) return CHAIN_PRIMARY;
  if (mod === 1) return CHAIN_SECONDARY;
  return CHAIN_TERTIARY;
}

/* ==============================
   🚀 MAIN ENGINE v4.0
   ❌ ZERO DIRECT – كل شي عالأردن
   ============================== */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* ─── 1️⃣ LOCALHOST ONLY (هاد الشي الوحيد اللي لازم direct) ─── */
  if (h === "localhost" || h === "127.0.0.1" || h === "::1") {
    return P1;
  }

  /* ─── 2️⃣ PRIVATE NETWORKS → أقوى بروكسي ─── */
  if (isPlainHostName(h) ||
      shExpMatch(h, "10.*") ||
      shExpMatch(h, "192.168.*") ||
      shExpMatch(h, "172.1[6-9].*") ||
      shExpMatch(h, "172.2[0-9].*") ||
      shExpMatch(h, "172.3[0-1].*")) {
    return P1;
  }

  /* ─── 3️⃣ 🗑️ JUNK = BLOCK (بدون DNS) ─── */
  if (isJunk(h)) {
    return BLOCK;
  }

  /* ─── 4️⃣ 🇸🇾 SYRIA DOMAIN = BLOCK ─── */
  if (shExpMatch(h, "*.sy")) {
    return BLOCK;
  }

  /* ─── 5️⃣ 🎮 PUBG CHECK (قبل DNS = أسرع) ─── */
  var gm = isPUBG(h, u);
  var gp = isPUBGPort(u);

  /* ─── 6️⃣ DNS (مرة وحدة + مخزن) ─── */
  var ip = cachedDNS(h);

  if (!ip) {
    /* DNS فشل */
    if (gm || gp) return CHAIN_PRIMARY;
    return CHAIN_PRIMARY;
  }

  /* ─── 7️⃣ 🇸🇾 SYRIA IP = BLOCK ─── */
  if (isSyriaIP(ip)) {
    return BLOCK;
  }

  /* ─── 8️⃣ 🎮 PUBG GAME TRAFFIC = STICKY LOCK ─── */
  if (gm || gp) {
    return getGameProxy(h, u);
  }

  /* ─── 9️⃣ كل شي ثاني = بروكسي أردني موزع ─── */
  return getBalancedProxy(h);
}
