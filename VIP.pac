/* =========================================================
   🏆 JORDAN TOURNAMENT TITANIUM v2.0 – STABLE & OPTIMIZED
   IP + NET + HOST + PORT LOCK (Smart Edition)
   Zero DIRECT | Sticky Core | Gulf Bias | Anti-Syria
   ========================================================= */

var PROXY_A = "PROXY 37.220.120.111:20001";
var PROXY_B = "PROXY 46.185.131.218:20001";
var PROXY_C = "PROXY 109.237.195.25:20001";
var BLOCK   = "PROXY 0.0.0.0:0";
var DIRECT  = "DIRECT";

/* ==============================
   ⚡ ULTRA HASH ENGINE (FNV-1a)
   ============================== */
function ultraHash(str){
  var h = 2166136261;
  for (var i = 0; i < str.length; i++){
    h ^= str.charCodeAt(i);
    h += (h<<1) + (h<<4) + (h<<7) + (h<<8) + (h<<24);
  }
  return (h >>> 0);
}

/* ==============================
   🇯🇴 JORDAN RANGES (Optimized)
   ============================== */
function isJordanIP(ip){
  return (
    isInNet(ip,"46.185.128.0","255.255.128.0") ||
    isInNet(ip,"79.173.192.0","255.255.192.0") ||
    isInNet(ip,"87.236.232.0","255.255.248.0") ||
    isInNet(ip,"109.237.192.0","255.255.240.0") ||
    isInNet(ip,"178.20.184.0","255.255.248.0") ||
    isInNet(ip,"92.253.0.0","255.255.128.0")
  );
}

/* ==============================
   🇸🇾 SYRIA BLOCK (Accurate Ranges)
   تم إزالة 5.0.0.0/8 لأنه يحظر أوروبا
   ============================== */
function isSyriaIP(ip){
  return (
    isInNet(ip,"31.9.0.0","255.255.0.0")       || // Syriatel
    isInNet(ip,"82.137.192.0","255.255.192.0") || // Syriatel
    isInNet(ip,"91.144.0.0","255.252.0.0")     || // MTN Syria
    isInNet(ip,"176.29.0.0","255.255.0.0")     || // Syriatel
    isInNet(ip,"5.36.0.0","255.252.0.0")       || // MTN Syria
    isInNet(ip,"185.11.224.0","255.255.252.0") || // Tarassul
    isInNet(ip,"185.202.172.0","255.255.252.0")   // Tarassul
  );
}

/* ==============================
   🌍 GULF RANGES
   ============================== */
function isGulfIP(ip){
  return (
    isInNet(ip,"62.72.160.0","255.255.224.0")  ||
    isInNet(ip,"85.159.216.0","255.255.248.0") ||
    isInNet(ip,"94.127.208.0","255.255.248.0") ||
    isInNet(ip,"212.35.64.0","255.255.224.0")  ||
    isInNet(ip,"194.165.128.0","255.255.224.0")
  );
}

/* ==============================
   🎮 PUBG DETECTION (Compiled Regex)
   ============================== */
var PUBG_REGEX = /(pubg|pubgm|pubgmobile|bgmi|krafton|lightspeed|proximabeta|tencent|qcloud|myqcloud|tencentcs|amazonaws|aliyun|gcloud|me-south-1|battle|match|arena|allocation|session|dispatcher|lobby|gamecore|erangel|miramar|sanhok|vikendi|karakin|livik|paramo|deston|nusa|tdm|teamdeathmatch|arena_training|gun_game|quick_match|arcade|rank|ranked|season|leaderboard|tier|conqueror|ace|payload|metro|metro_royale|infection|zombie|survive_till_dawn|evo|wow|worldofwonder|event|specialmode|dragonball|spiderman|training|cheerpark|warehouse|hangar)/i;

function isPUBG(host, url){
  return PUBG_REGEX.test(host) || PUBG_REGEX.test(url);
}

/* ==============================
   🔐 SMART TOURNAMENT LOCK
   يثبت البروكسي للعبة دون قطع الاتصال عند تغير الـ IP
   ============================== */
var TOURNAMENT_STATE = {
  lockedProxy: null,
  sessionHash: null
};

function getStickyProxy(host, url, ip){
  // إذا كان أردني، نثبته على PROXY_A دائماً
  if (isJordanIP(ip)) {
    TOURNAMENT_STATE.lockedProxy = PROXY_A;
    return PROXY_A;
  }

  // إذا كان خليجي أو عالمي، نختار بروكسي ونثبته لهذه الجلسة
  if (!TOURNAMENT_STATE.lockedProxy) {
    var tier = isGulfIP(ip) ? 2 : 1;
    var hash = ultraHash(host + url);
    
    if (tier === 2){
      var mod = hash % 3;
      TOURNAMENT_STATE.lockedProxy = (mod === 0) ? PROXY_A : (mod === 1) ? PROXY_B : PROXY_C;
    } else {
      TOURNAMENT_STATE.lockedProxy = (hash % 2 === 0) ? PROXY_A : PROXY_B;
    }
  }
  
  return TOURNAMENT_STATE.lockedProxy;
}

/* ==============================
   🚀 MAIN ENGINE
   ============================== */
function FindProxyForURL(url, host){

  var h = host.toLowerCase();

  /* 1️⃣ Localhost & Private Networks Bypass */
  if (isPlainHostName(h) || 
      isInNet(h, "10.0.0.0", "255.0.0.0") || 
      isInNet(h, "172.16.0.0", "255.240.0.0") || 
      isInNet(h, "192.168.0.0", "255.255.0.0") || 
      isInNet(h, "127.0.0.0", "255.0.0.0")) {
    return DIRECT;
  }

  /* 2️⃣ Exceptions (GitHub, YouTube) */
  if (shExpMatch(h, "*.github.com") || shExpMatch(h, "*.youtube.com") || shExpMatch(h, "*.googlevideo.com")) {
    return DIRECT;
  }

  /* 🔍 Single DNS Resolution (Performance Boost) */
  var ip = dnsResolve(h);
  if (!ip) return PROXY_A; // Fallback if DNS fails

  /* 3️⃣ 🚫 Syria Block (IP & Domain) */
  if (shExpMatch(h, "*.sy") || isSyriaIP(ip)) {
    return BLOCK;
  }

  /* 4️⃣ 🎮 PUBG Routing & Locking */
  if (isPUBG(h, url)) {
    // Zero DIRECT enforced here
    return getStickyProxy(h, url, ip);
  }

  /* 5️⃣ Default Fallback */
  return PROXY_A; 
}
