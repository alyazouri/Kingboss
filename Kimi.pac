// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SMART JORDAN PUBG PAC - Version 4.0
//  Optimized for Low-Latency & Anti-Telemetry
//  Compatible with Standard PAC Environment (ES3)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var CFG = {
    VERSION:             "4.0-SMART-JO",
    BLOCK_TELEMETRY:     true,
    BLOCK_ADS:           true,
    CDN_DIRECT:          true,   // تحديثات اللعبة مباشرة
    AUTH_DIRECT:         true,   // تسجيل الدخول مباشر
    PEAK_SHIFT:          true,   // تبديل تلقائي في الذروة
    PEAK_START:          18,     // 6 PM
    PEAK_END:            24,     // 12 AM
    FALLBACK_DIRECT:     true    // إذا فشلت كل البروكسيات
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDAN PROXY POOL (Sorted by Score Dynamically)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO_PROXIES = [
    // Tier 0: Amman Core
    {ip:"94.127.211.6",   port:20001, tier:0, ping:3,  isp:"Orange", city:"Amman", peak:false},
    {ip:"188.247.0.1",    port:8080,  tier:0, ping:4,  isp:"JT",     city:"Amman", peak:false},
    {ip:"109.237.193.187",port:80,    tier:0, ping:5,  isp:"Zain",   city:"Amman", peak:false},
    {ip:"94.127.211.7",   port:20002, tier:0, ping:4,  isp:"Orange", city:"Amman", peak:false},
    
    // Tier 1: Regional / Backup
    {ip:"212.35.85.26",   port:80,    tier:1, ping:7,  isp:"Umniah", city:"Amman", peak:false},
    {ip:"149.200.136.6",  port:443,   tier:1, ping:8,  isp:"Orange", city:"Irbid", peak:false},
    {ip:"79.173.192.10",  port:8080,  tier:1, ping:9,  isp:"Zain",   city:"Zarqa", peak:true},  // ذروة فقط
    
    // Tier 2: Edge Fallback
    {ip:"91.106.0.1",     port:80,    tier:2, ping:10, isp:"GO",     city:"Amman", peak:false}
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDANIAN IPv4 RANGES (CIDR Verified)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO_NETS = [
    ["46.185.128.0",  "255.255.128.0"],
    ["94.127.208.0",  "255.255.240.0"],
    ["109.237.192.0", "255.255.192.0"],
    ["176.28.0.0",    "255.254.0.0"],
    ["82.212.0.0",    "255.255.0.0"],
    ["188.247.0.0",   "255.255.0.0"],
    ["91.106.0.0",    "255.255.0.0"],
    ["79.173.192.0",  "255.255.192.0"],
    ["212.35.64.0",   "255.255.192.0"],
    ["37.220.0.0",    "255.255.0.0"],
    ["94.230.0.0",    "255.255.0.0"],
    ["176.203.0.0",   "255.255.0.0"]
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DOMAIN CLASSIFICATION LISTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var DOM_AUTH = [
    "auth.pubgmobile.com",
    "login.pubgmobile.com",
    "account.tencent.com",
    "openid.tencent.com",
    "gcloud.tencent.com"
];

var DOM_GAME = [
    "lobby.pubgmobile.com",
    "matchmaking.pubgmobile.com",
    "game.pubgmobile.com",
    "friend.pubgmobile.com",
    "crew.pubgmobile.com",
    "social.pubgmobile.com",
    "presence.pubgmobile.com",
    "igamecj.com",
    "kurogame.com",
    "krafton.com"
];

var DOM_CDN = [
    "cdn.pubgmobile.com",
    "patch.pubgmobile.com",
    "res.pubgmobile.com",
    "download.pubgmobile.com",
    "tencentcloud.com",
    "myqcloud.com",
    "akamaized.net"
];

var DOM_TELEMETRY = [
    "telemetry",
    "crashlytics",
    "firebase",
    "adjust",
    "appsflyer",
    "bugly",
    "umeng",
    "googletagmanager",
    "google-analytics",
    "facebook.com/tr",
    "graph.facebook.com"
];

var DOM_ADS = [
    "ads",
    "adnxs",
    "mopub",
    "inmobi",
    "chartboost",
    "unityads",
    "applovin",
    "doubleclick",
    "googleadservices",
    "googlesyndication"
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE UTILITIES (ES3 Safe)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function isIPv4(ip) {
    if (!ip || ip.indexOf(".") === -1 || ip.indexOf(":") !== -1) return false;
    var parts = ip.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(parts[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

function isPeakHour() {
    if (!CFG.PEAK_SHIFT) return false;
    var d = new Date();
    var h = d.getHours();
    return (h >= CFG.PEAK_START && h < CFG.PEAK_END);
}

function domainInList(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        var pat = list[i].toLowerCase();
        if (h === pat) return true;
        // subdomain match: *.pattern
        if (h.indexOf("." + pat) !== -1) return true;
        // pattern as substring inside host (for telemetry keywords)
        if (pat.indexOf(".") === -1 && h.indexOf(pat) !== -1) return true;
    }
    return false;
}

function proxyScore(p) {
    // Lower score = better proxy
    var score = p.ping + (p.tier * 3);
    if (CFG.PEAK_SHIFT && p.peak && !isPeakHour()) score += 50; // deprioritize off-peak
    if (CFG.PEAK_SHIFT && !p.peak && isPeakHour()) score -= 1;  // slightly boost core in peak
    return score;
}

function buildProxyChain() {
    // Clone & sort proxies by score (bubble sort for ES3 compatibility)
    var arr = [];
    for (var i = 0; i < JO_PROXIES.length; i++) arr[i] = JO_PROXIES[i];
    
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (proxyScore(arr[j]) > proxyScore(arr[j+1])) {
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    
    // Build chain string
    var chain = "";
    var activeCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (activeCount >= 4) break; // max 4 proxies to keep string short
        // Skip peak-only proxies outside peak hours
        if (arr[i].peak && !isPeakHour()) continue;
        if (chain !== "") chain += "; ";
        chain += "PROXY " + arr[i].ip + ":" + arr[i].port;
        activeCount++;
    }
    
    if (CFG.FALLBACK_DIRECT) {
        if (chain !== "") chain += "; ";
        chain += "DIRECT";
    }
    
    return chain !== "" ? chain : "DIRECT";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PAC DECISION ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();
    
    // 1. LOCAL & PRIVATE NETWORKS (Always Direct)
    if (isPlainHostName(h)) return "DIRECT";
    if (shExpMatch(h, "*.local")) return "DIRECT";
    if (isInNet(h, "10.0.0.0", "255.0.0.0") ||
        isInNet(h, "172.16.0.0", "255.240.0.0") ||
        isInNet(h, "192.168.0.0", "255.255.0.0") ||
        isInNet(h, "127.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }
    
    // 2. ANTI-TELEMETRY & ADS BLOCK (Blackhole)
    // هذه تقلل الـ Ping لأنها تمنع الاتصالات الخلفية غير الضرورية
    if (CFG.BLOCK_TELEMETRY && domainInList(h, DOM_TELEMETRY)) {
        return "PROXY 127.0.0.1:65535";
    }
    if (CFG.BLOCK_ADS && domainInList(h, DOM_ADS)) {
        return "PROXY 127.0.0.1:65535";
    }
    
    // 3. PUBG TRAFFIC DETECTION
    var isPubg = domainInList(h, DOM_AUTH) ||
                 domainInList(h, DOM_GAME) ||
                 domainInList(h, DOM_CDN) ||
                 shExpMatch(h, "*pubg*") ||
                 shExpMatch(h, "*tencent*") ||
                 shExpMatch(h, "*igamecj*") ||
                 shExpMatch(h, "*krafton*");
    
    // Non-PUBG traffic -> Direct (don't break other apps)
    if (!isPubg) return "DIRECT";
    
    // 4. AUTHENTICATION TRAFFIC -> DIRECT (Avoid login/session issues)
    if (CFG.AUTH_DIRECT && domainInList(h, DOM_AUTH)) {
        return "DIRECT";
    }
    
    // 5. CDN / PATCHES -> DIRECT (High bandwidth, no proxy needed)
    if (CFG.CDN_DIRECT && domainInList(h, DOM_CDN)) {
        return "DIRECT";
    }
    
    // 6. RESOLVE IP FOR GEO-CHECK (Optional but recommended)
    var ip = null;
    try {
        ip = dnsResolve(h);
    } catch (e) {
        ip = null;
    }
    
    // If resolved and it's a Jordanian server -> Direct (already optimal)
    if (ip && isIPv4(ip) && isJordanIP(ip)) {
        return "DIRECT";
    }
    
    // 7. GAME TRAFFIC -> JORDAN PROXY CHAIN (Optimized)
    return buildProxyChain();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  END OF SMART JORDAN PUBG PAC v4.0
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
