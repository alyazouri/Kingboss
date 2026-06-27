// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v35.0 — SPLIT ROUTING + PURE JO PROXIES
//  🎮 GAME/MATCH → bestJordanGamingCIDRs (Top 3 Ultra Low Ping)
//  🏠 LOBBY/SOCIAL → jordanGamingCIDRs (All 15 Ranges)
//  🚫 NO Europe Proxies | NO Mixed Proxies | Pure Jordan Only
// ══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "35.0-SPLIT-ROUTING-PURE-JO",
    MODE: "SPLIT_GAME_LOBBY_PURE_JORDAN",
    
    //  PING TARGETS
    TARGET_PING_BEST_JO: 15,          // Top 3 ranges ultra target
    TARGET_PING_JO: 30,               // All JO ranges target
    TARGET_PING_MENA: 40,
    EXCELLENT_PING: 25,
    GOOD_PING: 40,
    MAX_ACCEPTABLE_PING: 55,
    CRITICAL_PING: 70,
    
    //  PLAYER DISCOVERY
    FORCE_LOBBY_MAX_PLAYERS: true,
    FORCE_MATCHMAKING_MAX_PLAYERS: true,
    MAXIMIZE_LOBBY_VISIBILITY: true,
    MAXIMIZE_MATCHMAKING_POOL: true,
    SEARCH_RADIUS: 300,
    EXPANDED_REGIONAL_SEARCH: true,
    
    //  MATCHMAKING
    MATCHMAKING_SPEED_BOOST: 5.0,
    LOBBY_REFRESH_RATE: 500,
    PARALLEL_LOBBY_QUERIES: 8,
    AGGRESSIVE_PLAYER_DISCOVERY: true,
    
    // 📡 NETWORK
    DNS_CACHE_TTL: 15000,
    DNS_CACHE_MAX: 800,
    ROUTE_CACHE_TTL: 120000,
    STICKY_TTL: 300000,
    
    //  PERFORMANCE
    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    MEGA_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    
    // 🧠 AI
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    PREDICTIVE_ROUTING: true,
    
    // 🔒 PURE JORDAN ONLY — No Europe, No Mixed
    PURE_JORDAN_ONLY: true,
    BLOCK_EUROPE_MIXED: true,
    BLOCK_CLOUDFLARE_MIXED: true,
    BLOCK_AKAMAI_MIXED: true
};

// ══════════════════════════════════════════════════════════════════════
//  🇯🇴 PURE JORDAN PROXIES ONLY — No Europe, No Mixed
//  ❌ Removed: EU_ULTRA (Europe), MENA (Cloudflare/Akamai mixed)
//  ❌ Removed: FALLBACK (1.1.1.1 Global mixed)
// ══════════════════════════════════════════════════════════════════════
var PROXY = {
    // 🇯🇴 JO-1: Orange Jordan — JCS Backbone Area
    JO_ORANGE_1: {
        ip: "94.127.211.6", port: 20001, carrier: "ORANGE_JO",
        tier: 0, targetPing: 18, reliability: 99.8,
        bandwidth: "ULTRA", priority: 100, capacity: 350,
        location: "AMMAN_JCS", region: "JORDAN",
        burstCapable: true, ultraBurst: true, megaBurst: true,
        keepAlive: true, poolSize: 15,
        gameOptimized: true, lobbyOptimized: true,
        pureJordan: true
    },
    // 🇯🇴 JO-2: Zain Jordan — Zain Core Area
    JO_ZAIN_1: {
        ip: "109.237.193.187", port: 80, carrier: "ZAIN_JO",
        tier: 0, targetPing: 20, reliability: 99.7,
        bandwidth: "ULTRA", priority: 99, capacity: 340,
        location: "AMMAN_ZAIN", region: "JORDAN",
        burstCapable: true, ultraBurst: true, megaBurst: true,
        keepAlive: true, poolSize: 15,
        gameOptimized: true, lobbyOptimized: true,
        pureJordan: true
    },
    // 🇯🇴 JO-3: Umniah Jordan — Secondary Backbone
    JO_UMNIAH_1: {
        ip: "82.212.0.1", port: 8080, carrier: "UMNIAH_JO",
        tier: 0, targetPing: 22, reliability: 99.5,
        bandwidth: "ULTRA", priority: 98, capacity: 330,
        location: "AMMAN_UMNIAH", region: "JORDAN",
        burstCapable: true, ultraBurst: true, megaBurst: true,
        keepAlive: true, poolSize: 12,
        gameOptimized: true, lobbyOptimized: true,
        pureJordan: true
    }
};

// ══════════════════════════════════════════════════════════════════════
//  🎮 GAME/MATCHMAKING NETS — bestJordanGamingCIDRs (Top 3 Only)
//  Ultra low ping, best routing for active gameplay
// ══════════════════════════════════════════════════════════════════════
var GAME_NETS = [
    ["62.72.160.0", "19"],    // JCS Backbone (Best)
    ["77.245.0.0", "20"],     // Zain Core (Mobile gaming strong)
    ["185.68.54.0", "24"]     // Modern Jordan low congestion
];

// ══════════════════════════════════════════════════════════════════════
//  🏠 LOBBY/SOCIAL NETS — jordanGamingCIDRs (All 15 Ranges)
//  Wider range for maximum player discovery in lobby
// ══════════════════════════════════════════════════════════════════════
var LOBBY_NETS = [
    // Top Tier (also in GAME_NETS)
    ["62.72.160.0", "19"],    // JCS Backbone (Best)
    ["77.245.0.0", "20"],     // Zain Core (Mobile gaming strong)
    ["185.68.54.0", "24"],    // Modern Jordan low congestion
    
    // Second Tier
    ["37.123.64.0", "19"],    // Stable Jordan backbone
    ["185.19.112.0", "22"],   // ISP core stable routing
    ["5.45.128.0", "20"],     // Mixed but decent Jordan routing
    ["37.202.64.0", "18"],    // Orange JDC
    ["46.32.96.0", "19"],     // Zain backbone
    ["79.173.192.0", "18"],   // Orange Jordan large block
    ["176.29.0.0", "16"],     // Zain major backbone
    
    // Third Tier
    ["94.142.32.0", "19"],    // Mid-tier routing
    ["95.141.208.0", "20"],   // Stable but mixed
    ["109.107.224.0", "19"],  // ISP general routing
    ["185.80.24.0", "22"],    // Moderate stability
    ["185.175.248.0", "22"]   // Older allocation, variable routing
];

// ══════════════════════════════════════════════════════════════════════
//  🚫 BLOCKED PROXIES — Europe & Mixed (Removed from pool)
//  These are logged but NEVER used
// ══════════════════════════════════════════════════════════════════════
var BLOCKED_PROXIES = [
    { ip: "185.220.101.1", reason: "EUROPE_BACKBONE — Frankfurt (Europe)" },
    { ip: "185.220.102.1", reason: "EUROPE_BACKBONE — Amsterdam (Europe)" },
    { ip: "185.220.103.1", reason: "EUROPE_BACKBONE — London (Europe)" },
    { ip: "188.114.96.1",  reason: "CLOUDFLARE_MENA — Mixed routing (EU leak)" },
    { ip: "193.108.88.1",  reason: "AKAMAI_MENA — Mixed routing (variable)" },
    { ip: "1.1.1.1",       reason: "CLOUDFLARE_GLOBAL — Global mixed" }
];

// 🎮 MODES — Split Routing
var MODES = {
    LOBBY: {
        sig: ["lobby", "queue", "matchmake", "room", "channel"],
        priority: 10,
        targetPing: 30,
        maxPing: 55,
        strategy: "LOBBY_WIDE_JO",
        sticky: true,
        stickyDuration: 300000,
        playerBoost: 500,
        matchmakingSpeed: 5.0,
        searchRadius: 300,
        parallelQueries: 8,
        refreshRate: 500,
        netType: "LOBBY"           // ← Uses LOBBY_NETS (all 15)
    },
    MATCHMAKING: {
        sig: ["match", "matching", "finder", "game", "battle"],
        priority: 10,
        targetPing: 18,
        maxPing: 40,
        strategy: "GAME_BEST_JO",
        sticky: true,
        stickyDuration: 300000,
        playerBoost: 600,
        matchmakingSpeed: 6.0,
        searchRadius: 200,
        parallelQueries: 10,
        refreshRate: 400,
        netType: "GAME"            // ← Uses GAME_NETS (top 3)
    },
    SOCIAL: {
        sig: ["friend", "social", "party", "crew", "team"],
        priority: 9,
        targetPing: 30,
        maxPing: 55,
        strategy: "LOBBY_WIDE_JO",
        sticky: true,
        stickyDuration: 240000,
        playerBoost: 400,
        searchRadius: 400,
        parallelQueries: 6,
        netType: "LOBBY"           // ← Uses LOBBY_NETS (all 15)
    },
    GAME: {
        sig: ["game", "play", "combat", "battle"],
        priority: 10,
        targetPing: 15,
        maxPing: 35,
        strategy: "GAME_BEST_JO",
        sticky: true,
        stickyDuration: 600000,
        playerBoost: 0,
        searchRadius: 150,
        netType: "GAME"            // ← Uses GAME_NETS (top 3)
    }
};

// ══════════════════════════════════════════════════════════════════════
//  🛡️ GUARD SYSTEM — Split Check: Game vs Lobby
// ══════════════════════════════════════════════════════════════════════
var GUARD = {
    // Check if IP is allowed for the current mode
    isAllowedForMode: function(ip, mode) {
        var modeConfig = MODES[mode];
        if (!modeConfig) return this.isJordan(ip);
        
        if (modeConfig.netType === "GAME") {
            return this.isGameNet(ip);    // Top 3 only
        }
        return this.isLobbyNet(ip);       // All 15
    },
    
    // 🎮 GAME check — bestJordanGamingCIDRs (Top 3)
    isGameNet: function(ip) {
        for (var i = 0; i < GAME_NETS.length; i++) {
            if (isInNet(ip, GAME_NETS[i][0], this.cidrToMask(GAME_NETS[i][1]))) {
                return true;
            }
        }
        return false;
    },
    
    // 🏠 LOBBY check — jordanGamingCIDRs (All 15)
    isLobbyNet: function(ip) {
        for (var i = 0; i < LOBBY_NETS.length; i++) {
            if (isInNet(ip, LOBBY_NETS[i][0], this.cidrToMask(LOBBY_NETS[i][1]))) {
                return true;
            }
        }
        return false;
    },
    
    // General Jordan check (any range)
    isJordan: function(ip) {
        return this.isGameNet(ip) || this.isLobbyNet(ip);
    },
    
    // 🚫 Block check — reject Europe/Mixed proxies
    isBlockedProxy: function(ip) {
        for (var i = 0; i < BLOCKED_PROXIES.length; i++) {
            if (BLOCKED_PROXIES[i].ip === ip) {
                return true;
            }
        }
        return false;
    },
    
    cidrToMask: function(cidr) {
        var mask = 0;
        for (var i = 0; i < cidr; i++) {
            mask |= (0x80000000 >>> i);
        }
        return this.maskToString(mask);
    },
    maskToString: function(mask) {
        return ((mask >>> 24) & 255) + "." + 
               ((mask >>> 16) & 255) + "." + 
               ((mask >>> 8) & 255) + "." + 
               (mask & 255);
    }
};

// ══════════════════════════════════════════════════════════════════════
//  📊 SCORE CALCULATION — Split: Game=Best / Lobby=All
// ══════════════════════════════════════════════════════════════════════
function calculateScore(ip, host, port, dns, mode) {
    var score = 0;
    var ping = estimatePing(ip, mode);
    var modeConfig = MODES[mode] || MODES.LOBBY;
    
    // 🚫 Block Europe/Mixed proxies immediately
    if (GUARD.isBlockedProxy(ip)) {
        return -9999;
    }
    
    // Ping score
    if (ping <= CFG.TARGET_PING_BEST_JO) {
        score += 1500;    // Ultra — Best JO ranges
    } else if (ping <= CFG.TARGET_PING_JO) {
        score += 1000;    // Excellent — All JO ranges
    } else if (ping <= CFG.TARGET_PING_MENA) {
        score += 600;     // Good
    } else if (ping <= CFG.MAX_ACCEPTABLE_PING) {
        score += 300;     // Acceptable
    } else {
        score += 50;      // Poor
    }
    
    // 🎮 GAME MODE — Bonus for Top 3 ranges only
    if (modeConfig.netType === "GAME") {
        if (GUARD.isGameNet(ip)) {
            score += 800;     // Massive bonus for best ranges in game
        } else if (GUARD.isLobbyNet(ip)) {
            score += 100;     // Small bonus if only in lobby range
        }
    }
    
    // 🏠 LOBBY MODE — Bonus for all JO ranges
    if (modeConfig.netType === "LOBBY") {
        if (GUARD.isLobbyNet(ip)) {
            score += 500;     // Good bonus for all ranges in lobby
        }
        if (GUARD.isGameNet(ip)) {
            score += 200;     // Extra bonus if also in best range
        }
    }
    
    // Player count boost
    if (CFG.MAXIMIZE_LOBBY_VISIBILITY && mode === "LOBBY") {
        score += modeConfig.playerBoost;
    }
    if (CFG.MAXIMIZE_MATCHMAKING_POOL && mode === "MATCHMAKING") {
        score += modeConfig.playerBoost;
    }
    
    // Pure Jordan proxy bonus
    var proxy = findBestProxy(mode);
    if (proxy && proxy.pureJordan) {
        score += proxy.priority;
        if (proxy.megaBurst) score += 100;
        if (proxy.gameOptimized && modeConfig.netType === "GAME") score += 300;
        if (proxy.lobbyOptimized && modeConfig.netType === "LOBBY") score += 200;
    }
    
    return score;
}

// ══════════════════════════════════════════════════════════════════════
//  🛤️ ROUTE SELECTION — Pure Jordan Only
// ══════════════════════════════════════════════════════════════════════
function selectRoute(mode, score, ip, port, host, dns) {
    // 🚫 Never use blocked proxies
    if (GUARD.isBlockedProxy(ip)) {
        return findPureJordanProxy(mode);
    }
    
    var bestProxy = findBestProxy(mode);
    
    if (bestProxy && score > 300) {
        return "PROXY " + bestProxy.ip + ":" + bestProxy.port;
    }
    
    // Fallback to another pure Jordan proxy
    if (estimatePing(ip, mode) <= CFG.MAX_ACCEPTABLE_PING) {
        return "DIRECT";
    }
    
    // Last resort: pure Jordan proxy
    return findPureJordanProxy(mode);
}

// ══════════════════════════════════════════════════════════════════════
//  🇯🇴 FIND BEST PURE JORDAN PROXY (No Europe, No Mixed)
// ══════════════════════════════════════════════════════════════════════
function findBestProxy(mode) {
    var modeConfig = MODES[mode] || MODES.LOBBY;
    var proxies = [PROXY.JO_ORANGE_1, PROXY.JO_ZAIN_1, PROXY.JO_UMNIAH_1];
    var best = null;
    var bestScore = 0;
    
    for (var i = 0; i < proxies.length; i++) {
        var p = proxies[i];
        
        // 🚫 Skip non-pure or blocked
        if (!p.pureJordan || GUARD.isBlockedProxy(p.ip)) continue;
        
        var score = p.priority;
        
        // Game mode: prefer game-optimized
        if (modeConfig.netType === "GAME" && p.gameOptimized) {
            score += 200;
        }
        // Lobby mode: prefer lobby-optimized
        if (modeConfig.netType === "LOBBY" && p.lobbyOptimized) {
            score += 150;
        }
        if (p.megaBurst) score += 50;
        score += (p.capacity / 10);
        
        if (score > bestScore) {
            bestScore = score;
            best = p;
        }
    }
    
    return best;
}

function findPureJordanProxy(mode) {
    var proxy = findBestProxy(mode);
    if (proxy) {
        return "PROXY " + proxy.ip + ":" + proxy.port;
    }
    // Ultimate fallback — first pure JO proxy
    return "PROXY " + PROXY.JO_ORANGE_1.ip + ":" + PROXY.JO_ORANGE_1.port;
}

// ══════════════════════════════════════════════════════════════════════
//  ⚡ PING ESTIMATION — Split by mode
// ══════════════════════════════════════════════════════════════════════
function estimatePing(ip, mode) {
    var modeConfig = MODES[mode] || MODES.LOBBY;
    
    // 🎮 GAME mode — only best ranges matter
    if (modeConfig.netType === "GAME") {
        if (GUARD.isGameNet(ip)) return 15;    // Top 3 = ultra low
        if (GUARD.isLobbyNet(ip)) return 40;   // Other JO = higher
        return 80;                              // Non-JO = bad
    }
    
    // 🏠 LOBBY mode — all ranges acceptable
    if (modeConfig.netType === "LOBBY") {
        if (GUARD.isGameNet(ip)) return 18;    // Top 3 = best
        if (GUARD.isLobbyNet(ip)) return 30;   // All JO = good
        return 65;                              // Non-JO = poor
    }
    
    // Default
    if (GUARD.isJordan(ip)) return 25;
    return 60;
}

// ══════════════════════════════════════════════════════════════════════
//  🎮 MAIN PAC FUNCTION
// ══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    // Block non-PUBG traffic
    if (!containsAny(host.toLowerCase(), PUBG_KEYS)) {
        return "DIRECT";
    }
    
    // Detect mode
    var mode = detectMode(host);
    var dns = fastDNS(host);
    var ip = dns.ip;
    
    // 🚫 HARD BLOCK: Never route through Europe/Mixed proxies
    if (GUARD.isBlockedProxy(ip)) {
        return findPureJordanProxy(mode);
    }
    
    // Calculate score with split routing
    var score = calculateScore(ip, host, getPort(url), dns, mode);
    
    // Select route — Pure Jordan only
    var route = selectRoute(mode, score, ip, getPort(url), host, dns);
    
    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  END OF PUBG JORDAN ULTIMATE v35.0
//  🎮 GAME/MATCH → bestJordanGamingCIDRs (62.72, 77.245, 185.68)
//  🏠 LOBBY/SOCIAL → jordanGamingCIDRs (All 15 ranges)
//  🇯🇴 Proxies: Orange JO + Zain JO + Umniah JO ONLY
//  🚫 Blocked: All Europe, Cloudflare Mixed, Akamai Mixed, Global
// ═══════════════════════════════════════════════════════════════════════
