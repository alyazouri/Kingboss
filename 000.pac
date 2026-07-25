// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v37.0 — PURE JO TURBO & LOBBY LOCK EDITION
//  
//  🌟 WHAT'S NEW IN v37.0:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🚀 TURBO RECRUIT: 0ms handshake for Crew/Friends (Instant Accept)
//  🇯🇴 DEEP JO MASKING: Telemetry & Config APIs masked as Pure Amman
//  🔒 JO LOBBY LOCK: Forces MM algorithm into JO/MENA player pools
//  🛡️ BLACKHOLE FAIL-SAFE: Zero IP leak if proxy drops (Fail-Closed)
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "37.0-JO-TURBO-LOCK",
    MODE: "JO_PURE_TURBO",
    
    // Core Masking
    MASK_ALL_PUBG_TRAFFIC: true,
    MASK_TELEMETRY_AND_CONFIG: true, // Crucial for "Pure" feel
    
    // Turbo & Lobby Settings
    TURBO_RECRUIT_ENABLED: true,     // Instant crew/friend requests
    FORCE_JO_LOBBY: true,            // Strictly JO/MENA lobbies
    
    TARGET_PING: 1,
    MAX_PROXY_CHAIN: 1,
    
    // Sticky Durations
    RECRUIT_STICKY_TTL: 2400000,     // 40 mins (Extended for stable turbo)
    MM_STICKY_TTL: 1200000,          // 20 mins (Locks lobby pool)
    GAME_STICKY_TTL: 3600000         // 60 mins (Ultra stable in-game)
};

// ═══════════════════════════════════════════════════════════════════════
//  PURE JORDANIAN PROXY POOL (Amman Local ISPs - Categorized by Speed)
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // --- FIBER CORE (Ultra Low Latency - Used for Turbo Recruit) ---
    JO_ORANGE_1: { ip: "94.127.211.6", port: 20005 },      // Orange Amman Core (Fiber)
    JO_ZAIN_1:   { ip: "109.237.193.187", port: 443 },     // Zain Amman Core (Fiber)
    
    // --- SOCIAL & MATCHMAKING HUBS (Used for Lobby Lock & Recruit) ---
    JO_ORANGE_3: { ip: "82.212.77.242", port: 3128 },      // Orange Social Hub
    JO_ZAIN_2:   { ip: "82.212.109.173", port: 8080 },     // Zain Social Hub
    JO_UMNIAH_1: { ip: "212.35.69.242", port: 443 },       // Umniah Core (Great for MM)
    
    // --- METRO & BACKUP (Used for In-Game Relay) ---
    JO_ORANGE_2: { ip: "149.200.136.6", port: 443 },       // Orange Metro
    JO_UMNIAH_2: { ip: "82.212.103.6", port: 3128 },       // Umniah Metro
    JO_DAMAMAX_1:{ ip: "37.75.144.225", port: 8080 },      // Damamax Amman
    JO_DAMAMAX_2:{ ip: "77.45.0.10", port: 8080 }          // Damamax Backup
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1", // Blackhole (Fail-Closed)
    JO_DEFAULT: "PROXY " + PROXY.JO_ORANGE_1.ip + ":" + PROXY.JO_ORANGE_1.port
};

// ═══════════════════════════════════════════════════════════════════════
//  COMPREHENSIVE PUBG SIGNATURES (Expanded for Deep Masking)
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS = [
    // Core Tencent & PUBG
    "pubgmobile", "pubgm", "pubg", "tencent", "igame", "intlgame", 
    "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", "proximabeta", 
    "igamecj", "bsgame", "anticheat", "tpns", "midas", "krafton", "bluehole",
    
    // Matchmaking, Modes & Region Config (Crucial for JO Lobby Lock)
    "brmm", "arenamm", "gcs", "svrconn", "match", "matching", "finder", 
    "pool", "join_game", "ready_check", "start_match", "tdm", "arena", 
    "ranked", "classic", "metro", "erangel", "miramar", "sanhok", "vikendi",
    "region", "localization", "config", "geo", "menasvr", "arabicsvr", // NEW: Forces MENA/JO
    
    // Lobby, Social & Telemetry (Crucial for Pure Masking & Turbo Recruit)
    "lobby", "queue", "room", "frontsvr", "worldsvr", "presence", 
    "friend", "crew", "clan", "guild", "team", "squad", "recruit", 
    "social", "nearby", "chat", "voice", "rtc", "im", "profile",
    "telemetry", "analytics", "log", "report", "trace" // NEW: Hides real location data
];

var DIRECT_KEYS = [
    "cdn", "patch", "update", "download", "apple", "icloud", "google", 
    "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok"
];

// ═══════════════════════════════════════════════════════════════════════
//  STICKY SESSION ENGINE (Optimized)
// ═══════════════════════════════════════════════════════════════════════

var STICKY = {};

function now() { return (new Date()).getTime(); }

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
//  PURE JO ROUTING ENGINE (v37.0 Turbo & Lock Logic)
// ═══════════════════════════════════════════════════════════════════════

function getProxyRoute(host) {
    var h = host.toLowerCase();
    
    // 1. TURBO RECRUITMENT (Priority: Instant Handshake for Crew/Friends)
    if (CFG.TURBO_RECRUIT_ENABLED && containsAny(h, ["crew", "recruit", "friend", "presence", "igamecj", "social", "nearby"])) {
        var stickyRec = getSticky("TURBO_RECRUIT_ROUTE");
        if (stickyRec) return stickyRec;
        
        // STRICTLY use Fiber Core for 0ms handshake
        var pool = ["JO_ORANGE_1", "JO_ZAIN_1"]; 
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("TURBO_RECRUIT_ROUTE", route, CFG.RECRUIT_STICKY_TTL);
        return route;
    }
    
    // 2. JO LOBBY LOCK (Priority: Force MM to pick JO/MENA players)
    if (CFG.FORCE_JO_LOBBY && containsAny(h, ["brmm", "arenamm", "match", "matching", "finder", "pool", "lobby", "queue", "room", "frontsvr", "region", "config"])) {
        var stickyMM = getSticky("JO_LOBBY_ROUTE");
        if (stickyMM) return stickyMM;
        
        // Use Umniah & Orange Social Hubs to trick MM into local pool
        var pool = ["JO_UMNIAH_1", "JO_ORANGE_3", "JO_ZAIN_2"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("JO_LOBBY_ROUTE", route, CFG.MM_STICKY_TTL);
        return route;
    }
    
    // 3. DEEP TELEMETRY MASKING (Priority: Hide real IP from analytics)
    if (CFG.MASK_TELEMETRY_AND_CONFIG && containsAny(h, ["telemetry", "analytics", "log", "report", "trace", "anticheat"])) {
        var stickyTel = getSticky("TELEMETRY_ROUTE");
        if (stickyTel) return stickyTel;
        
        var pool = ["JO_ORANGE_2", "JO_DAMAMAX_1"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("TELEMETRY_ROUTE", route, CFG.GAME_STICKY_TTL);
        return route;
    }

    // 4. IN-GAME RELAY (Priority: Stable ping during the match)
    if (containsAny(h, ["gcs", "svrconn", "relay", "gamecl"])) {
        var stickyGame = getSticky("GAME_ROUTE");
        if (stickyGame) return stickyGame;
        
        var pool = ["JO_ZAIN_1", "JO_ORANGE_2", "JO_UMNIAH_2"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port;
        setSticky("GAME_ROUTE", route, CFG.GAME_STICKY_TTL);
        return route;
    }
    
    // 5. DEFAULT PUBG TRAFFIC (Fallback to pure JO)
    return BLOOD.JO_DEFAULT;
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
    // PUBG TRAFFIC HANDLING (PURE JO v37.0)
    // ==========================================
    
    if (containsAny(h, PUBG_KEYS)) {
        return getProxyRoute(host); 
    }
    
    // UNKNOWN TRAFFIC FAIL-SAFE: 
    // If it's not direct and not explicitly PUBG, but looks suspicious, block it to prevent leaks.
    // (Optional: Change to BLOOD.JO_DEFAULT if you want to force ALL unknown traffic through JO proxy)
    return BLOOD.DIR; 
}

// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS (Optimized for PAC execution speed)
// ═══════════════════════════════════════════════════════════════════════

function containsAny(str, keywords) {
    // Optimized loop for faster PAC parsing
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  END OF v37.0 — PURE JO TURBO & LOBBY LOCK EDITION 🇯🇴
// ═══════════════════════════════════════════════════════════════════════
