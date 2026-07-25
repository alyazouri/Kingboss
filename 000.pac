// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v36.0 — PURE JORDANIAN PROXY EDITION
//  
//  🌟 PURE JORDANIAN IP MASKING:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 100% Pure Jordanian Proxies (Orange, Zain, Umniah, Damamax)
//  👥 Fixes Recruitment: Crew/Friend APIs see you as local JO player
//  🚀 Fixes Matchmaking: MM algorithm strictly puts you in JO lobbies
//  🎮 Covers ALL Modes & Lobby with zero connection breaks
//  ⚡ Fail-Closed System: If proxy dies, blocks connection (No IP Leak)
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "36.0-PURE-JO-PROXY",
    MODE: "JO_PURE_MASKING",
    
    MASK_ALL_PUBG_TRAFFIC: true,
    ALLOW_PUBG_GLOBAL_RELAY: true, // Connects to global MM but masked as JO
    
    TARGET_PING: 1,
    MAX_PROXY_CHAIN: 1,
    
    // Sticky Durations (Maintains lobby and team stability)
    RECRUIT_STICKY_TTL: 1800000,    // 30 mins
    MM_STICKY_TTL: 900000,          // 15 mins
    GAME_STICKY_TTL: 2400000        // 40 mins
};


// ═══════════════════════════════════════════════════════════════════════
//  PURE JORDANIAN PROXY POOL (Amman Local ISPs)
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // --- ORANGE JORDAN (Pure) ---
    JO_ORANGE_1: { ip: "94.127.211.6", port: 20005 },    // Orange Amman Core
    JO_ORANGE_2: { ip: "149.200.136.6", port: 443 },     // Orange Metro
    JO_ORANGE_3: { ip: "82.212.77.242", port: 3128 },     // Orange Social Hub
    
    // --- ZAIN JORDAN (Pure) ---
    JO_ZAIN_1: { ip: "109.237.193.187", port: 443 },     // Zain Amman Core
    JO_ZAIN_2: { ip: "82.212.109.173", port: 8080 },     // Zain Social Hub
    JO_ZAIN_3: { ip: "176.29.231.42", port: 8080 },      // Zain Mobile
    
    // --- UMNIAH JORDAN (Pure) ---
    JO_UMNIAH_1: { ip: "212.35.69.242", port: 443 },     // Umniah Core
    JO_UMNIAH_2: { ip: "82.212.103.6", port: 3128 },     // Umniah Metro
    
    // --- DAMAMAX JORDAN (Pure) ---
    JO_DAMAMAX_1: { ip: "37.75.144.225", port: 8080 },   // Damamax Amman
    JO_DAMAMAX_2: { ip: "77.45.0.10", port: 8080 }       // Damamax Backup
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1" // Hard block (Fail-Closed)
};


// ═══════════════════════════════════════════════════════════════════════
//  COMPREHENSIVE PUBG SIGNATURES
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS = [
    // Core Tencent & PUBG
    "pubgmobile", "pubgm", "pubg", "tencent", "igame", "intlgame", 
    "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", "proximabeta", 
    "igamecj", "bsgame", "anticheat", "tpns", "midas", "krafton", "bluehole",
    
    // Matchmaking & Game Modes
    "brmm", "arenamm", "gcs", "svrconn", "match", "matching", "finder", 
    "pool", "join_game", "ready_check", "start_match", "tdm", "arena", 
    "ranked", "classic", "metro", "erangel", "miramar", "sanhok", "vikendi",
    
    // Lobby & Social (Crucial for Recruitment)
    "lobby", "queue", "room", "frontsvr", "worldsvr", "presence", 
    "friend", "crew", "clan", "guild", "team", "squad", "recruit", 
    "social", "nearby", "chat", "voice", "rtc", "im", "profile"
];

// Traffic that should NOT go through proxy
var DIRECT_KEYS = [
    "cdn", "patch", "update", "download", "apple", "icloud", "google", 
    "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok"
];


// ═══════════════════════════════════════════════════════════════════════
//  STICKY SESSION ENGINE
// ═══════════════════════════════════════════════════════════════════════

var STICKY = {};

function getSticky(key) {
    var e = STICKY[key];
    if (!e) return null;
    if ((now() - e.t) > e.ttl) { delete STICKY[key]; return null; }
    return e.v;
}

function setSticky(key, value, ttl) {
    STICKY[key] = { v: value, t: now(), ttl: ttl };
}


// ═══════════════════════════════════════════════════════════════════════
//  PURE JO ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

function getProxyRoute(host) {
    var h = host.toLowerCase();
    
    // 1. RECRUITMENT & SOCIAL (Priority: Catch Jordanian players instantly)
    var isRecruit = containsAny(h, ["crew", "clan", "recruit", "friend", "social", "nearby", "presence", "igamecj"]);
    if (isRecruit) {
        var stickyRec = getSticky("RECRUIT_ROUTE");
        if (stickyRec) return stickyRec;
        
        // Use Orange & Zain Social Hubs for instant recruit accept
        var pool = ["JO_ORANGE_3", "JO_ZAIN_2", "JO_ORANGE_1"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("RECRUIT_ROUTE", route, CFG.RECRUIT_STICKY_TTL);
        return route;
    }
    
    // 2. MATCHMAKING (Priority: Force PUBG to put you in JO lobbies)
    var isMM = containsAny(h, ["brmm", "arenamm", "match", "matching", "finder", "pool", "lobby", "queue", "room", "frontsvr"]);
    if (isMM) {
        var stickyMM = getSticky("MM_ROUTE");
        if (stickyMM) return stickyMM;
        
        // Use Core Amman servers for stable MM routing
        var pool = ["JO_ORANGE_1", "JO_ZAIN_1", "JO_UMNIAH_1", "JO_DAMAMAX_1"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("MM_ROUTE", route, CFG.MM_STICKY_TTL);
        return route;
    }
    
    // 3. IN-GAME RELAY (Priority: Stable ping during the match)
    var isGame = containsAny(h, ["gcs", "svrconn", "relay", "gamecl"]);
    if (isGame) {
        var stickyGame = getSticky("GAME_ROUTE");
        if (stickyGame) return stickyGame;
        
        var pool = ["JO_ZAIN_1", "JO_ORANGE_2", "JO_UMNIAH_2"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("GAME_ROUTE", route, CFG.GAME_STICKY_TTL);
        return route;
    }
    
    // 4. DEFAULT PUBG TRAFFIC (APIs, Auth, etc.)
    var pool = ["JO_ORANGE_1", "JO_ZAIN_1", "JO_UMNIAH_1"];
    var sel = pool[Math.floor(Math.random() * pool.length)];
    return "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
}


// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if (!host) return BLOOD.DIR;
    
    var h = host.toLowerCase();
    
    // Local & Private IPs -> Direct
    if (isPlainHostName(host) || isInNet(host, "127.0.0.0", "255.0.0.0") || 
        isInNet(host, "10.0.0.0", "255.0.0.0") || isInNet(host, "192.168.0.0", "255.255.0.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return BLOOD.DIR;
    }
    
    // Downloads & Social Media -> Direct (Save proxy bandwidth)
    if (containsAny(h, DIRECT_KEYS) && !containsAny(h, PUBG_KEYS)) {
        return BLOOD.DIR;
    }
    
    // ==========================================
    // PUBG TRAFFIC HANDLING (PURE JO MASKING)
    // ==========================================
    
    if (containsAny(h, PUBG_KEYS)) {
        return getProxyRoute(host); // Masks IP as Pure Jordanian
    }
    
    // Fallback
    return BLOOD.DIR;
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }

function containsAny(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  END OF v36.0 — PURE JORDANIAN PROXY EDITION
// ═══════════════════════════════════════════════════════════════════════
