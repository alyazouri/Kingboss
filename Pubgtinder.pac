/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v12.0 – TINDER = PUBG MODE
   🇯🇴 All Players From Jordan | Tinder & PUBG Same Treatment
   💘 Tinder Deep Lock | 🎮 PUBG Region Lock | 🛡️ Anti-Israel
   ⚡ Zero Direct | 💾 45min Persistent | Anti-Spike v2
   ========================================================= */

/* ─────────────────────────────────────────
   🇯🇴 JORDAN PROXIES (P1 هو الأفضل)
   ───────────────────────────────────────── */
var P1 = "PROXY 37.220.120.111:20001";   // ★★★★★ الأقوى والأكثر استقراراً في الأردن
var P2 = "PROXY 46.185.131.218:20001";
var P3 = "PROXY 109.237.195.25:20001";

var BLOCK = "PROXY 0.0.0.0:0";

/* ─── CHAINS ─── */
var C1 = P1 + "; " + P2 + "; " + P3;   // Elite (الأولوية الأولى)
var C2 = P2 + "; " + P1 + "; " + P3;
var C3 = P3 + "; " + P1 + "; " + P2;

/* =========================================================
   ⚡ HASH + SMART DNS CACHE
   ========================================================= */
function hash(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
  }
  return h;
}

var _dns = {}, _dnsT = {}, _miss = {};
function getIP(host) {
  var now = Date.now();
  var h = host.toLowerCase();
  var ttl = (h.indexOf("pubg") !== -1 || h.indexOf("krafton") !== -1) ? 90000 : 
            (h.indexOf("tinder") !== -1 || h.indexOf("gotinder") !== -1) ? 60000 : 240000;

  if (_dns[host] && (now - _dnsT[host] < ttl)) return _dns[host];
  if (_miss[host] && (now - _miss[host] < 30000)) return null;

  var ip = dnsResolve(host);
  if (ip) {
    _dns[host] = ip; _dnsT[host] = now;
    delete _miss[host];
  } else _miss[host] = now;
  return ip;
}

/* =========================================================
   🚫 BLOCK ZONES
   ========================================================= */
function isIsraelIP(ip) {
  return isInNet(ip,"5.28.0.0","255.252.0.0")   || isInNet(ip,"31.44.128.0","255.255.128.0") ||
         isInNet(ip,"37.26.144.0","255.255.240.0")|| isInNet(ip,"46.116.0.0","255.252.0.0")  ||
         isInNet(ip,"62.0.0.0","255.192.0.0")     || isInNet(ip,"77.124.0.0","255.252.0.0")  ||
         isInNet(ip,"79.176.0.0","255.240.0.0")   || isInNet(ip,"80.178.0.0","255.254.0.0")  ||
         isInNet(ip,"81.218.0.0","255.255.0.0")   || isInNet(ip,"82.80.0.0","255.240.0.0")   ||
         isInNet(ip,"84.94.0.0","255.254.0.0")    || isInNet(ip,"85.64.0.0","255.252.0.0")   ||
         isInNet(ip,"87.68.0.0","255.252.0.0")    || isInNet(ip,"89.138.0.0","255.254.0.0")  ||
         isInNet(ip,"91.197.204.0","255.255.252.0")|| isInNet(ip,"93.172.0.0","255.252.0.0")  ||
         isInNet(ip,"94.159.0.0","255.255.0.0")   || isInNet(ip,"95.35.0.0","255.255.0.0")   ||
         isInNet(ip,"109.64.0.0","255.240.0.0")   || isInNet(ip,"132.64.0.0","255.240.0.0")  ||
         isInNet(ip,"141.226.0.0","255.255.0.0")  || isInNet(ip,"147.234.0.0","255.254.0.0") ||
         isInNet(ip,"176.12.128.0","255.255.128.0")|| isInNet(ip,"185.175.144.0","255.255.240.0")||
         isInNet(ip,"188.120.64.0","255.255.192.0")|| isInNet(ip,"192.114.0.0","255.255.0.0") ||
         isInNet(ip,"194.90.0.0","255.255.0.0")   || isInNet(ip,"212.143.0.0","255.255.0.0") ||
         isInNet(ip,"213.8.0.0","255.255.0.0");
}

function isSyriaIP(ip) {
  return isInNet(ip,"31.9.0.0","255.255.0.0")     || isInNet(ip,"82.137.192.0","255.255.192.0")||
         isInNet(ip,"91.144.0.0","255.252.0.0")   || isInNet(ip,"176.29.0.0","255.255.0.0")   ||
         isInNet(ip,"5.36.0.0","255.252.0.0")     || isInNet(ip,"185.11.224.0","255.255.252.0")||
         isInNet(ip,"185.202.172.0","255.255.252.0");
}

function isForeignServer(ip) {
  return isInNet(ip,"52.0.0.0","255.0.0.0")   || isInNet(ip,"54.0.0.0","255.0.0.0")   ||
         isInNet(ip,"18.192.0.0","255.240.0.0")|| isInNet(ip,"35.156.0.0","255.252.0.0")||
         isInNet(ip,"13.212.0.0","255.255.0.0")|| isInNet(ip,"52.74.0.0","255.254.0.0") ||
         isInNet(ip,"13.124.0.0","255.252.0.0")|| isInNet(ip,"18.185.0.0","255.255.0.0");
}

function isJordanIP(ip) {
  return isInNet(ip,"37.220.112.0","255.255.240.0") || isInNet(ip,"46.185.128.0","255.255.128.0") ||
         isInNet(ip,"79.173.192.0","255.255.192.0") || isInNet(ip,"87.236.232.0","255.255.248.0") ||
         isInNet(ip,"92.253.0.0","255.255.128.0")   || isInNet(ip,"109.237.192.0","255.255.240.0")||
         isInNet(ip,"178.20.184.0","255.255.248.0") || isInNet(ip,"82.102.0.0","255.255.0.0")    ||
         isInNet(ip,"213.6.0.0","255.255.0.0");
}

/* =========================================================
   🎮 PUBG + 💘 TINDER DETECTION (كلاهما بنفس القوة)
   ========================================================= */
function isHighPriorityApp(host, url) {
  var h = host.toLowerCase();
  var u = url.toLowerCase();
  var combined = h + u;

  /* Tinder Deep Detection (التطبيق الرسمي) */
  if (h.indexOf("tinder") !== -1 || h.indexOf("gotinder") !== -1 || 
      h.indexOf("tndr") !== -1 || combined.indexOf("tinder") !== -1) {
    return "tinder";
  }

  /* PUBG Detection */
  var PD = ["pubg","pubgm","pubgmobile","krafton","lightspeed","proximabeta","tencent","qcloud"];
  for (var i = 0; i < PD.length; i++) {
    if (h.indexOf(PD[i]) !== -1) return "pubg";
  }

  var PK = ["battle","lobby","match","session","dispatcher","gamecore","erangel","sanhok","vikendi","tdm","ranked","conqueror"];
  for (var j = 0; j < PK.length; j++) {
    if (combined.indexOf(PK[j]) !== -1) return "pubg";
  }

  if (isPUBGPort(u)) return "pubg";

  return false;
}

function isPUBGPort(url) {
  var m = url.match(/:(\d+)/);
  if (!m) return false;
  var p = +m[1];
  return (p >= 7000 && p <= 9000) || (p >= 10000 && p <= 11000) || 
         (p >= 17000 && p <= 18100) || (p >= 20000 && p <= 20100);
}

/* =========================================================
   🛡️ JUNK FILTER (مع استثناء Tinder)
   ========================================================= */
var JL = {"doubleclick":1,"googlesyndication":1,"adnxs":1,"moatads":1,"appsflyer":1,"adjust":1,
          "crashlytics":1,"amplitude":1,"mixpanel":1,"flurry":1,"unityads":1,"ironsrc":1,
          "vungle":1,"tapjoy":1,"facebook":1,"instagram":1,"tiktok":1,"snapchat":1,"twitter":1};

function isJunk(host) {
  var h = host.toLowerCase();
  if (h.indexOf("tinder") !== -1 || h.indexOf("gotinder") !== -1) return false;
  var p = h.split(".");
  if (JL[p[p.length-2]] || JL[p[p.length-3]]) return true;
  return false;
}

/* =========================================================
   PROFESSIONAL SYSTEMS (Peak, Warmup, Spike, Recovery)
   ========================================================= */
function isPeakHour() { var h = new Date().getHours(); return (h >= 20 || h < 2); }
var startTime = Date.now();
function isWarmup() { return (Date.now() - startTime < 90000); }

var reqCount = 0, reqWindow = 0;
function isSpike() {
  var now = Date.now();
  if (now - reqWindow > 1000) { reqCount = 0; reqWindow = now; }
  reqCount++;
  return reqCount > 48;
}

/* =========================================================
   💾 UNIFIED PERSISTENT LOCK (يعمل بنفس الطريقة على Tinder و PUBG)
   ========================================================= */
var lockedChain = null;
var lockTime = 0;
var recoveryCount = 0;
var recoveryMode = false;
var sessionFP = hash("ultra_v12_" + Date.now());

var LOCK_ACTIVE   = 480000;   // 8 دقائق أثناء الاستخدام (مثل الماتش)
var LOCK_PERSIST  = 2700000;  // 45 دقيقة بعد الإغلاق
var LOCK_RECOVERY = 600000;   // 10 دقائق Recovery

function getUnifiedProxy(host, url, appType) {
  var now = Date.now();
  var isActive = (appType === "tinder" || appType === "pubg");

  if (isWarmup()) { lockedChain = C1; lockTime = now; return C1; }
  if (isSpike()) return C1;
  if (isPeakHour() && isActive) { lockedChain = C1; lockTime = now; return C1; }

  if (recoveryCount >= 3) { recoveryMode = true; recoveryCount = 0; }
  if (recoveryMode) {
    if (now - lockTime < LOCK_RECOVERY) return C1;
    recoveryMode = false;
  }

  var duration = isActive ? LOCK_ACTIVE : LOCK_PERSIST;
  if (lockedChain && (now - lockTime < duration)) {
    if (!isActive) {
      if ((hash(host + sessionFP) % 100) < 92) return lockedChain;
    }
    return lockedChain;
  }

  var h = hash(host + url + sessionFP) % 100;
  var selected = (h < 80) ? C1 : (h < 94) ? C2 : C3;   // Bias قوي جداً على P1 (80%)

  if (lockedChain && selected !== lockedChain) recoveryCount++;
  lockedChain = selected;
  lockTime = now;
  return selected;
}

/* =========================================================
   🚀 MAIN ENGINE v12.0
   ========================================================= */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* 1. Local & Private Networks */
  if (isPlainHostName(h) || h.indexOf("127.") === 0 || h.indexOf("192.168.") === 0 || 
      h.indexOf("10.") === 0 || h.indexOf("172.16.") === 0 || h.indexOf("172.17.") === 0) {
    return P1;
  }

  /* 2. Junk Filter */
  if (isJunk(h)) return BLOCK;

  /* 3. Domain Blocks */
  if (shExpMatch(h, "*.il") || shExpMatch(h, "*.sy")) return BLOCK;

  /* 4. Warmup Phase */
  if (isWarmup()) return C1;

  /* 5. App Detection */
  var appType = isHighPriorityApp(h, u);   // "tinder" أو "pubg" أو false

  /* 6. DNS Resolution */
  var ip = getIP(h);
  if (!ip) {
    return getUnifiedProxy(h, u, appType || "other");
  }

  /* 7. IP Blocks */
  if (isIsraelIP(ip) || isSyriaIP(ip)) return BLOCK;

  /* 8. Tinder = PUBG Mode */
  if (appType === "tinder") {
    if (isIsraelIP(ip)) return BLOCK;
    if (!isJordanIP(ip)) return getUnifiedProxy(h, u, "tinder"); // يجبره على P1
    return getUnifiedProxy(h, u, "tinder");
  }

  /* 9. PUBG Region Lock */
  if (appType === "pubg") {
    if (isForeignServer(ip)) return BLOCK;
    return getUnifiedProxy(h, u, "pubg");
  }

  /* 10. All Other Traffic → Persistent Jordan Proxy */
  return getUnifiedProxy(h, u, "other");
}
