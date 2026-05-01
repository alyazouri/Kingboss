// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 PUBG 100% JORDAN LOBBY — NO FOREIGNERS ALLOWED
//  ⚡ DNS: 192.168.100.1 | FORCE: JORDAN ONLY
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    // 🔥 STRICT JORDAN ONLY - NO EXCEPTIONS
    JORDAN_100_PERCENT: true,          // ← المفتاح الرئيسي!
    BLOCK_ALL_NON_JORDAN: true,
    BLOCK_MENA_TOO: true,              // حتى MENA يتحظر!
    BLOCK_GLOBAL_CDN: true,
    
    // Proxy Settings
    USE_ONLY_JORDAN_PROXIES: true,
    MAX_CHAIN: 2,
    FAIL_ACTION: "BLOCK",              // BLOCK or DIRECT
    
    // DNS Force
    FORCE_JORDAN_DNS: true,
    DNS_SERVER: "192.168.100.1"
};

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDAN PROXY POOL ONLY
// ═══════════════════════════════════════════════════════════════════════

var JO_PROXY = {
    // Tier 0 - FASTEST (AMMAN CORE)
    ORANGE_FAST:    {ip:"94.127.211.6",   port:20001, carrier:"ORANGE", ping:5},
    ZAIN_FAST:      {ip:"109.237.193.18", port:80,    carrier:"ZAIN",   ping:6},
    
    // Tier 1 - GOOD
    ORANGE_GOOD:    {ip:"149.200.136.6",  port:443,   carrier:"ORANGE", ping:8},
    ZAIN_GOOD:      {ip:"79.173.192.10",  port:8080,  carrier:"ZAIN",   ping:9},
    UMNIAH_GOOD:    {ip:"212.35.85.26",   port:80,    carrier:"UMNIAH", ping:10},
    
    // Tier 2 - BACKUP
    ORANGE_BACK:    {ip:"46.185.128.5",   port:3128,  carrier:"ORANGE", ping:12},
    ZAIN_BACK:      {ip:"176.29.0.10",    port:8080,  carrier:"ZAIN",   ping:13}
};

// ═══════════════════════════════════════════════════════════════════════
//  🚫 BLOCKED NETWORKS — EVERYTHING NON-JORDAN
// ═══════════════════════════════════════════════════════════════════════

var BLOCK_ALL = [
    // ❌ UAE
    ["5.0.0.0",8], ["31.14.0.0",15], ["213.42.0.0",16],
    // ❌ Saudi
    ["82.148.0.0",15], ["94.101.0.0",16],
    // ❌ Egypt
    ["41.32.0.0",11],
    // ❌ Lebanon
    ["178.135.0.0",16],
    // ❌ Global CDNs
    ["104.16.0.0",12], ["172.64.0.0",13],
    ["13.224.0.0",14], ["99.84.0.0",16],
    // ❌ USA
    ["3.0.0.0",8], ["100.64.0.0",10],
    // ❌ Europe
    ["5.0.0.0",8], ["37.0.0.0",8],
    // ❌ Asia
    ["110.0.0.0",8], ["14.0.0.0",8]
];

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDAN NETWORKS — ALLOW ONLY THESE
// ═══════════════════════════════════════════════════════════════════════

var JO_ALLOW = [
    ["46.185.0.0",16],      // Orange
    ["94.127.0.0",16],      // Orange
    ["149.200.0.0",16],     // Orange
    ["79.173.0.0",16],      // Zain
    ["109.237.0.0",16],     // Zain
    ["176.28.0.0",15],      // Zain
    ["82.212.0.0",16],      // Umniah
    ["212.35.0.0",16],      // Umniah
    ["188.247.0.0",16],     // JT
    ["62.72.0.0",16],       // JT
    ["5.11.0.0",16],        // Other JO
    ["77.44.0.0",16]        // Other JO
];

// ═══════════════════════════════════════════════════════════════════════
//  PUBG DETECTION
// ═══════════════════════════════════════════════════════════════════════

var PUBG = [
    "pubgmobile","pubgm","pubg","battlegrounds",
    "tencent","qq","igame","myapp","lightspeed",
    "tmgp","gcloud","tgpa","levelinfinite",
    "anticheat","tpns","midas","krafton"
];

var SAFE = [
    "apple","icloud","google","gstatic",
    "facebook","instagram","whatsapp",
    "telegram","youtube","netflix"
];

// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function mask(cidr) {
    var m = {
        "8":"255.0.0.0","10":"255.192.0.0","11":"255.224.0.0",
        "12":"255.240.0.0","13":"255.248.0.0","14":"255.252.0.0",
        "15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
        "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0"
    };
    return m[cidr] || "255.255.0.0";
}

function isJO(ip) {
    if (!ip || ip.indexOf(":")>-1) return false;
    for (var i=0; i<JO_ALLOW.length; i++)
        if (isInNet(ip, JO_ALLOW[i][0], mask(JO_ALLOW[i][1]))) return true;
    return false;
}

function isBlocked(ip) {
    if (!ip) return false;
    for (var i=0; i<BLOCK_ALL.length; i++)
        if (isInNet(ip, BLOCK_ALL[i][0], mask(BLOCK_ALL[i][1]))) return true;
    return false;
}

function hasWord(h, arr) {
    h = h.toLowerCase();
    for (var i=0; i<arr.length; i++)
        if (h.indexOf(arr[i]) !== -1) return true;
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  PROXY BUILDER — JORDAN ONLY
// ═══════════════════════════════════════════════════════════════════════

function getJOProxy() {
    // Always return fastest Jordan proxy chain
    return "PROXY " + JO_PROXY.ORANGE_FAST.ip + ":" + JO_PROXY.ORANGE_FAST.port + 
           "; PROXY " + JO_PROXY.ZAIN_FAST.ip + ":" + JO_PROXY.ZAIN_FAST.port +
           "; PROXY 0.0.0.0:1";
}

function getJOBackup() {
    return "PROXY " + JO_PROXY.ORANGE_GOOD.ip + ":" + JO_PROXY.ORANGE_GOOD.port +
           "; PROXY " + JO_PROXY.UMNIAH_GOOD.ip + ":" + JO_PROXY.UMNIAH_GOOD.port +
           "; PROXY 0.0.0.0:1";
}

// ═══════════════════════════════════════════════════════════════════════
//  🎮 MAIN — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    // 1️⃣ Local - DIRECT
    if (isPlainHostName(host)) return "DIRECT";
    if (isInNet(host,"10.0.0.0","255.0.0.0")) return "DIRECT";
    if (isInNet(host,"172.16.0.0","255.240.0.0")) return "DIRECT";
    if (isInNet(host,"192.168.0.0","255.255.0.0")) return "DIRECT";
    if (isInNet(host,"127.0.0.0","255.0.0.0")) return "DIRECT";

    var h = host.toLowerCase();

    // 2️⃣ Safe apps - DIRECT
    if (hasWord(h, SAFE) && !hasWord(h, PUBG)) return "DIRECT";

    // 3️⃣ Not PUBG - DIRECT
    if (!hasWord(h, PUBG)) return "DIRECT";

    // 🔥 4️⃣ PUBG DETECTED — FORCE JORDAN!
    
    // Matchmaking & Lobby — STRICTEST
    if (h.indexOf("match")>-1 || h.indexOf("lobby")>-1 || 
        h.indexOf("queue")>-1 || h.indexOf("rank")>-1) {
        return getJOProxy();  // Fastest Jordan only
    }
    
    // Game servers
    if (h.indexOf("game")>-1 || h.indexOf("server")>-1 ||
        h.indexOf("battle")>-1 || h.indexOf("classic")>-1) {
        return getJOProxy();
    }
    
    // Auth & Login
    if (h.indexOf("auth")>-1 || h.indexOf("login")>-1 || 
        h.indexOf("token")>-1) {
        return getJOBackup();
    }
    
    // CDN & Updates — Jordan proxy but allow fallback
    if (h.indexOf("cdn")>-1 || h.indexOf("update")>-1 || 
        h.indexOf("patch")>-1) {
        return "PROXY " + JO_PROXY.ORANGE_GOOD.ip + ":" + JO_PROXY.ORANGE_GOOD.port + "; DIRECT";
    }
    
    // 🔥 DEFAULT: ALL PUBG TRAFFIC → JORDAN PROXY
    return getJOProxy();
}
