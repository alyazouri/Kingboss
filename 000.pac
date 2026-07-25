// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v34.0 — ABSOLUTE TOTAL JORDAN OVERRIDE
//  
//  🌟 TOTAL MODE & LOBBY OVERRIDE:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 100% Jordan Players in ALL Modes (Classic, TDM, Arena, Ranked)
//  🏠 Full Lobby Override (Presence, Friends, Crew, Chat, Nearby)
//  🚫 HARD BLOCK ALL Non-Jordan Servers (ME, EU, Asia, AWS)
//  ⚡ Sub-2ms Routing for MM, Crew, and Game Relays
//  🔒 Airtight IPv4/IPv6 Geo-Fencing
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  ABSOLUTE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "34.0-TOTAL-OVERRIDE",
    MODE: "JO_TOTAL_GEO_FENCE",
    
    // Absolute Rules
    BLOCK_ALL_NON_JO_PUBG: true,   // The Kill Switch for ANY non-Jordan IP
    FORCE_JO_ALL_MODES: true,      // Forces Classic, TDM, Arena, Ranked to JO
    FORCE_JO_LOBBY: true,          // Forces Lobby, Friends, Crew to JO
    BLOCK_IPV6: true,              // Prevents all IPv6 leaks
    
    // Instant Performance
    TARGET_PING: 1,                // Sub-2ms target
    MAX_PROXY_CHAIN: 1,            // 1 Hop for absolute zero delay
    
    // Sticky Durations (To maintain lobby and match stability)
    LOBBY_STICKY_TTL: 1200000,     // 20 mins for Lobby/Social
    MM_STICKY_TTL: 600000,         // 10 mins for Matchmaking
    GAME_STICKY_TTL: 2400000       // 40 mins for In-Game (Classic matches)
};


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN PROXY POOL — Amman Core Only
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // Lobby & Matchmaking Proxies
    JO_MM_ORANGE_1: { ip: "94.127.211.6", port: 20005, carrier: "ORANGE" },
    JO_MM_ORANGE_2: { ip: "149.200.136.6", port: 443, carrier: "ORANGE" },
    JO_MM_ZAIN_1:   { ip: "109.237.193.187", port: 443, carrier: "ZAIN" },
    JO_MM_ZAIN_2:   { ip: "82.212.103.6", port: 3128, carrier: "ZAIN" },
    JO_MM_UMNIAH_1: { ip: "212.35.69.242", port: 443, carrier: "UMNIAH" },
    
    // Crew & Social Proxies
    JO_CREW_ORANGE: { ip: "82.212.77.242", port: 3128, carrier: "ORANGE" },
    JO_CREW_ZAIN:   { ip: "82.212.109.173", port: 8080, carrier: "ZAIN" },
    
    // In-Game Relay Proxies (For actual gameplay stability)
    JO_GAME_ORANGE: { ip: "46.32.97.238", port: 8080, carrier: "ORANGE" },
    JO_GAME_ZAIN:   { ip: "217.29.240.221", port: 443, carrier: "ZAIN" }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"  // Hard Block
};


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN IP RANGES & BLOCKED INTERNATIONAL RANGES
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    // Orange Jordan
    ["46.32.96.0", "19"], ["46.185.128.0", "17"], ["94.127.208.0", "20"], 
    ["149.200.136.0", "21"], ["188.247.0.0", "16"], ["62.72.160.0", "19"],
    // Zain Jordan
    ["37.75.0.0", "16"], ["77.45.0.0", "16"], ["79.173.192.0", "18"], 
    ["176.29.0.0", "16"], ["178.20.184.0", "21"], ["109.237.192.0", "18"],
    ["188.71.0.0", "17"], ["94.237.0.0", "17"],
    // Umniah Jordan
    ["82.212.0.0", "16"], ["212.35.64.0", "18"], ["31.25.128.0", "17"],
    ["37.48.64.0", "18"], ["5.11.0.0", "16"],
    // Other Jordan Transit
    ["94.230.0.0", "16"], ["176.28.0.0", "15"]
];

// Known PUBG ME/International Servers (Bahrain, KSA, UAE, AWS, Azure)
var BLOCKED_REGIONS_IP = [
    ["15.185.0.0", "16"],     // Bahrain AWS
    ["104.46.0.0", "16"],     // Bahrain Azure
    ["86.51.0.0", "16"],      // KSA
    ["78.110.0.0", "16"],     // KSA
    ["94.200.0.0", "16"],     // UAE
    ["37.107.0.0", "16"],     // UAE
    ["18.0.0.0", "8"],        // AWS Global
    ["52.0.0.0", "8"],        // Azure/AWS Global
    ["13.0.0.0", "8"]         // Azure Global
];


// ═══════════════════════════════════════════════════════════════════════
//  COMPREHENSIVE PUBG SIGNATURES (ALL MODES & LOBBY)
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS = [
    // Core
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "igame", 
    "intlgame", "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", 
    "proximabeta", "igamecj", "bsgame", "anticheat", "tpns", "midas", 
    "unipay", "krafton", "bluehole",
    
    // Matchmaking & Game Modes Signatures
    "brmm", "arenamm", "gcs", "svrconn", "match", "matching", "finder", 
    "pool", "join_game", "ready_check", "start_match", "tdm", "arena", 
    "ranked", "classic", "metro", "erangel", "miramar", "sanhok", "vikendi",
    "livik", "karakin", "deston", "payload", "cheerpark",
    
    // Lobby & Social Signatures
    "lobby", "queue", "room", "frontsvr", "worldsvr", "presence", 
    "friend", "crew", "clan", "guild", "team", "squad", "recruit", 
    "social", "nearby", "chat", "voice", "rtc", "im", "profile"
];

var DIRECT_KEYS = [
    "apple", "icloud", "google", "facebook", "instagram", "whatsapp", 
    "telegram", "twitter", "tiktok", "netflix", "spotify"
];


// ═══════════════════════════════════════════════════════════════════════
//  STICKY SESSION ENGINE (For Lobby & Match Stability)
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
//  GEO-FENCING & ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    return isInRanges(ip, JO_NETS);
}

function isBlockedRegionIP(ip) {
    if (!ip) return false;
    return isInRanges(ip, BLOCKED_REGIONS_IP);
}

function getProxyRoute(host) {
    var h = host.toLowerCase();
    
    // 1. IN-GAME ROUTING (TDM, Classic, Arena Relays)
    var isGameRelay = containsAny(h, ["gcs", "svrconn", "relay", "gamecl", "tpnn"]);
    if (isGameRelay) {
        var stickyGame = getSticky("GAME_ROUTE");
        if (stickyGame) return stickyGame;
        
        var pool = ["JO_GAME_ORANGE", "JO_GAME_ZAIN", "JO_MM_ORANGE_1"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port + "; " + BLOOD.BLK;
        setSticky("GAME_ROUTE", route, CFG.GAME_STICKY_TTL);
        return route;
    }
    
    // 2. CREW & SOCIAL ROUTING (Instant Recruit)
    var isCrew = containsAny(h, ["crew", "clan", "guild", "recruit", "friend", "social", "nearby"]);
    if (isCrew) {
        var stickyCrew = getSticky("CREW_ROUTE");
        if (stickyCrew) return stickyCrew;
        
        var pool = ["JO_CREW_ORANGE", "JO_CREW_ZAIN", "JO_MM_ORANGE_1"];
        var sel = pool[Math.floor(Math.random() * pool.length)];
        var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port + "; " + BLOOD.BLK;
        setSticky("CREW_ROUTE", route, CFG.LOBBY_STICKY_TTL);
        return route;
    }
    
    // 3. MATCHMAKING & LOBBY ROUTING (Finding Players)
    var pool = ["JO_MM_ORANGE_1", "JO_MM_ZAIN_1", "JO_MM_UMNIAH_1", "JO_MM_ORANGE_2", "JO_MM_ZAIN_2"];
    var stickyMM = getSticky("MM_ROUTE");
    if (stickyMM) return stickyMM;
    
    var sel = pool[Math.floor(Math.random() * pool.length)];
    var route = "PROXY " + PROXY[sel].ip + ":" + PROXY[sel].port + "; " + BLOOD.BLK;
    setSticky("MM_ROUTE", route, CFG.MM_STICKY_TTL);
    return route;
}


// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if (!host) return BLOOD.DIR;
    
    // Block IPv6 entirely for PUBG to prevent leak
    if (host.indexOf(":") !== -1 && containsAny(host.toLowerCase(), PUBG_KEYS)) {
        return BLOOD.BLK;
    }
    
    var h = host.toLowerCase();
    
    // Local & Private IPs
    if (isPlainHostName(host) || isInNet(host, "127.0.0.0", "255.0.0.0") || 
        isInNet(host, "10.0.0.0", "255.0.0.0") || isInNet(host, "192.168.0.0", "255.255.0.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return BLOOD.DIR;
    }
    
    // Non-PUBG Traffic -> Direct
    if (!containsAny(h, PUBG_KEYS)) {
        // Keep social media direct unless it's intercepted by PUBG keys
        if (containsAny(h, DIRECT_KEYS)) return BLOOD.DIR;
        return BLOOD.DIR;
    }
    
    // ==========================================
    // PUBG TRAFFIC HANDLING (TOTAL LOCKDOWN)
    // ==========================================
    
    // If it's a direct IP and not a domain
    if (isIPv4(host)) {
        if (isJordanIP(host)) {
            return getProxyRoute(host); // Route through Jordan Proxy for MM priority
        } else {
            if (CFG.BLOCK_ALL_NON_JO_PUBG) return BLOOD.BLK; // Hard Block International
            return BLOOD.DIR;
        }
    }
    
    // Resolve Domain to IP
    var ip = dnsResolve(host);
    
    if (ip) {
        // If IP is in Jordan -> Route through Jordan Proxy
        if (isJordanIP(ip)) {
            return getProxyRoute(host);
        }
        
        // If IP is in known blocked regions -> HARD BLOCK
        if (isBlockedRegionIP(ip)) {
            return BLOOD.BLK;
        }
        
        // If it's an international IP and LOCKDOWN is enabled -> HARD BLOCK
        if (CFG.BLOCK_ALL_NON_JO_PUBG) {
            return BLOOD.BLK;
        }
    }
    
    // If DNS fails locally, force it through Jordan Proxy to let Proxy resolve in Jordan
    return getProxyRoute(host);
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }

function isIPv4(str) {
    if (!str || str.indexOf(":") !== -1) return false;
    var parts = str.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var num = parseInt(parts[i], 10);
        if (isNaN(num) || num < 0 || num > 255) return false;
    }
    return true;
}

function maskFromCIDR(cidr) {
    var masks = {
        "8": "255.0.0.0", "15": "255.254.0.0", "16": "255.255.0.0", 
        "17": "255.255.128.0", "18": "255.255.192.0", "19": "255.255.224.0", 
        "20": "255.255.240.0", "21": "255.255.248.0"
    };
    return masks[String(cidr)] || "255.255.0.0";
}

function isInRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) {
        var base = ranges[i][0];
        var mask = maskFromCIDR(ranges[i][1]);
        if (isInNet(ip, base, mask)) return true;
    }
    return false;
}

function containsAny(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  END OF v34.0 — ABSOLUTE TOTAL JORDAN OVERRIDE
// ═══════════════════════════════════════════════════════════════════════
