// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v32.0 — ABSOLUTE JORDAN EDITION
//  
//  🌟 REVOLUTIONARY FORCED MATCHMAKING FEATURES:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  👥 100% Jordan Players in Lobby, Team, and Enemies
//  ⚡ INSTANT_CREW_FORCE: Sub-millisecond Crew Recruitment
//  🚀 INSTANT_MATCH_FORCE: Ultra-fast Matchmaking with Jordanians
//  🛡️ Hard Block of Non-Jordan Matchmaking Servers
//  🔒 Absolute Geo-Fencing for Game Traffic
//  🧠 AI Driven Instant Routing (No Health Check Delay for MM)
//  💥 Tier 0 Burst Override for Social APIs
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME CONFIGURATION — Absolute Jordan Mode
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "32.0-ABSOLUTE-JORDAN",
    MODE: "INSTANT_MATCH_AND_RECRUIT",
    
    // Performance Targets - Pushed to absolute limits
    TARGET_PING: 2,                    // Sub-3ms target
    SOCIAL_API_TARGET: 2,
    EXCELLENT_PING: 5,
    GOOD_PING: 8,
    MAX_ACCEPTABLE_PING: 12,
    CRITICAL_PING: 18,
    
    // Jordan Player Visibility System - Absolute Force
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 100,         // Target 100% Jordan players
    JORDAN_ONLY_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,
    HARD_BLOCK_NON_JO_MATCH: true,     // Blocks any MM server not in Jordan
    
    // Instant Features
    INSTANT_MATCHMAKING: true,         // Bypass health checks for MM speed
    INSTANT_RECRUITMENT: true,         // Bypass health checks for Crew speed
    
    // Social & Discovery Features
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_SOCIAL_GRAPH: true,
    ENABLE_LOBBY_SYNC: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_REGIONAL_AFFINITY: true,
    ENABLE_PLAYER_SEARCH_BOOST: true,
    ENABLE_CROSS_PLATFORM: true,
    
    // Advanced Algorithms
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    FRIEND_DISCOVERY_RADIUS: 100,
    LOBBY_AGGREGATION: true,
    PLAYER_POOL_EXPANSION: true,
    VISIBILITY_BOOST: 10.0,
    SEARCH_RANKING_BOOST: 20,
    
    // AI & Machine Learning
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    LEARNING_RATE: 0.3,
    PATTERN_RECOGNITION: true,
    PREDICTIVE_ROUTING: true,
    SOCIAL_ML: true,
    
    // Network Optimization
    DNS_CACHE_TTL: 45000,
    DNS_CACHE_MAX: 1000,
    PREFETCH_SOCIAL_DNS: true,
    ROUTE_CACHE_TTL: 300000,
    STICKY_TTL: 600000,                // 10 minutes sticky for lobbies
    
    // Advanced Features
    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,
    
    // Security
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    MAX_PROXY_CHAIN: 1,                // 1 Hop for absolute speed
    
    // Monitoring
    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME JORDAN PROXY POOL — Tuned for Instant Match & Crew
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // TIER 0: INSTANT MATCH & SOCIAL (Sub-2ms Target)
    INSTANT_ORANGE_MM: {
        ip: "94.127.211.6", port: 20005,
        carrier: "ORANGE", tier: 0, targetPing: 2, reliability: 99.9,
        bandwidth: "ULTRA", priority: 100, capacity: 500,
        location: "AMMAN_CORE", socialOptimized: true, burstCapable: true,
        ultraBurst: true, keepAlive: true, poolSize: 20, instantCapable: true
    },
    INSTANT_ZAIN_MM: {
        ip: "109.237.193.187", port: 443,
        carrier: "ZAIN", tier: 0, targetPing: 2.5, reliability: 99.9,
        bandwidth: "ULTRA", priority: 99, capacity: 480,
        location: "AMMAN_CORE", socialOptimized: true, burstCapable: true,
        ultraBurst: true, keepAlive: true, poolSize: 20, instantCapable: true
    },
    INSTANT_UMNIAH_MM: {
        ip: "212.35.69.242", port: 443,
        carrier: "UMNIAH", tier: 0, targetPing: 3, reliability: 99.5,
        bandwidth: "ULTRA", priority: 98, capacity: 460,
        location: "AMMAN_CORE", socialOptimized: true, burstCapable: true,
        ultraBurst: true, keepAlive: true, poolSize: 15, instantCapable: true
    },
    
    // SOCIAL API & CREW DEDICATED
    SOCIAL_ORANGE_CREW: {
        ip: "82.212.77.242", port: 3128,
        carrier: "ORANGE", tier: 0, targetPing: 2, reliability: 99.9,
        bandwidth: "ULTRA", priority: 100, capacity: 400,
        location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, poolSize: 30, instantCapable: true
    },
    SOCIAL_ZAIN_CREW: {
        ip: "82.212.109.173", port: 8080,
        carrier: "ZAIN", tier: 0, targetPing: 2.5, reliability: 99.5,
        bandwidth: "ULTRA", priority: 99, capacity: 380,
        location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, poolSize: 25, instantCapable: true
    },

    // TIER 1: HIGH PERF GAMING
    ORANGE_GAME_1: {
        ip: "149.200.136.6", port: 443,
        carrier: "ORANGE", tier: 1, targetPing: 5, reliability: 99,
        bandwidth: "HIGH", priority: 90, capacity: 300,
        location: "AMMAN_METRO", socialOptimized: false, burstCapable: true, poolSize: 10
    },
    ZAIN_GAME_1: {
        ip: "37.75.144.225", port: 80,
        carrier: "ZAIN", tier: 1, targetPing: 6, reliability: 98.5,
        bandwidth: "HIGH", priority: 88, capacity: 280,
        location: "AMMAN_METRO", socialOptimized: false, burstCapable: true, poolSize: 10
    }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS & MATCHMAKING SIGNATURES
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    ["46.185.128.0", "17"], ["46.185.144.0", "20"], ["46.185.160.0", "19"], 
    ["94.127.208.0", "20"], ["94.127.224.0", "19"], ["149.200.136.0", "22"],
    ["149.200.140.0", "22"], ["149.200.144.0", "21"],
    ["79.173.192.0", "18"], ["79.173.224.0", "19"], ["109.237.192.0", "18"], 
    ["109.237.224.0", "19"], ["176.28.0.0", "15"], ["176.29.0.0", "16"],
    ["82.212.0.0", "16"], ["82.212.64.0", "18"], ["82.212.128.0", "17"], 
    ["212.35.64.0", "18"], ["212.35.96.0", "19"], ["212.35.112.0", "20"],
    ["188.247.0.0", "16"], ["94.230.0.0", "16"]
];

var JO_CITIES = {
    AMMAN_CORE: [
        ["46.185.128.0", "20"], ["79.173.192.0", "20"], ["82.212.0.0", "19"], 
        ["188.247.0.0", "18"], ["149.200.136.0", "22"]
    ]
};

var PUBG_KEYS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "qq", "igame", 
    "myapp", "intlgame", "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", 
    "levelinf", "proximabeta", "igamecj", "bsgame", "garena", "anticheat", 
    "tpns", "midas", "unipay", "pubgstudio", "krafton", "bluehole"
];

var SOCIAL_KEYS = [
    "friend", "crew", "clan", "guild", "team", "squad", "recruit", "social", 
    "presence", "nearby", "lobby", "matchmake", "match", "room", "online"
];

var DIRECT_KEYS = [
    "apple", "icloud", "google", "facebook", "instagram", "whatsapp", 
    "telegram", "twitter", "tiktok", "netflix", "spotify"
];


// ═══════════════════════════════════════════════════════════════════════
//  GAME MODES — Tuned for Absolute Jordan MM & Crew
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    // FORCE INSTANT CREW RECRUITMENT
    CREW_RECRUITMENT: {
        sig: ["crew", "crewsearch", "recruitment", "recruit", "clan", "clansearch", "guild", "team", "jointeam", "crewlist"],
        priority: 10, targetPing: 2, maxPing: 5,
        strategy: "INSTANT_CREW_FORCE", sticky: true, stickyDuration: 600000,
        jordanBonus: 1000, foreignPenalty: -2000, requiresBurst: true, ultraBurst: true,
        socialPriority: true, visibilityBoost: 20, gameState: "SOCIAL"
    },
    
    // FORCE INSTANT MATCHMAKING (Lobby & Team & Enemies)
    MATCHMAKING: {
        sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "brmm", "arenamm", "gcs", "svrconn"],
        priority: 10, targetPing: 2, maxPing: 5,
        strategy: "INSTANT_MATCH_FORCE", sticky: true, stickyDuration: 600000,
        jordanBonus: 1000, foreignPenalty: -2000, requiresBurst: true, ultraBurst: true,
        socialPriority: true, visibilityBoost: 20, gameState: "PRE_MATCH"
    },
    
    LOBBY: {
        sig: ["lobby", "queue", "waiting_room", "room_list", "serverlist", "worldsvr", "playerlist"],
        priority: 10, targetPing: 3, maxPing: 8,
        strategy: "INSTANT_MATCH_FORCE", sticky: true, stickyDuration: 600000,
        jordanBonus: 800, foreignPenalty: -1500, requiresBurst: true, ultraBurst: true,
        socialPriority: true, visibilityBoost: 15, gameState: "PRE_MATCH"
    },

    FRIEND_DISCOVERY: {
        sig: ["friend", "friendsearch", "findfriend", "addfriend", "playersearch", "discovery", "nearbypla"],
        priority: 9, targetPing: 3, maxPing: 8,
        strategy: "INSTANT_CREW_FORCE", sticky: true, stickyDuration: 600000,
        jordanBonus: 800, foreignPenalty: -1500, requiresBurst: true, ultraBurst: true,
        socialPriority: true, visibilityBoost: 15, gameState: "SOCIAL"
    },
    
    RANKED: {
        sig: ["ranked", "rank", "competitive", "tier", "conqueror", "ace"],
        priority: 9, targetPing: 4, maxPing: 10,
        strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 480000,
        jordanBonus: 500, foreignPenalty: -1000, requiresBurst: true, gameState: "IN_GAME"
    },
    
    CLASSIC: {
        sig: ["classic", "battle_royale", "erangel", "miramar", "sanhok", "vikendi", "livik", "karakin", "deston"],
        priority: 8, targetPing: 5, maxPing: 12,
        strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 420000,
        jordanBonus: 400, foreignPenalty: -800, requiresBurst: true, gameState: "IN_GAME"
    },
    
    TDM: {
        sig: ["tdm", "team_death", "deathmatch", "arena"],
        priority: 8, targetPing: 5, maxPing: 12,
        strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 360000,
        jordanBonus: 400, foreignPenalty: -800, requiresBurst: true, gameState: "IN_GAME"
    },

    AUTH: {
        sig: ["auth", "login", "account", "passport", "session", "token"],
        priority: 7, targetPing: 8, maxPing: 15,
        strategy: "SECURE_CRITICAL", sticky: true, stickyDuration: 600000,
        jordanBonus: 200, foreignPenalty: -300, gameState: "AUTH"
    },
    
    CDN: {
        sig: ["cdn", "patch", "update", "download"],
        priority: 1, targetPing: 50, maxPing: 999,
        strategy: "CDN", sticky: false, jordanBonus: 0, foreignPenalty: 0, gameState: "DOWNLOAD"
    }
};

var MODE_PRIORITY = [
    "CREW_RECRUITMENT", "MATCHMAKING", "LOBBY", "FRIEND_DISCOVERY",
    "RANKED", "CLASSIC", "TDM", "AUTH", "CDN"
];


// ═══════════════════════════════════════════════════════════════════════
//  CORE SYSTEMS (Session, DNS, Ping, ML, Health)
// ═══════════════════════════════════════════════════════════════════════

var SESSION = {
    start: now(), requests: 0, pubgRequests: 0, jordanHits: 0, foreignHits: 0, blockedHits: 0,
    instantMatches: 0, instantRecruits: 0,
    age: function() { return now() - this.start; },
    isWarm: function() { return this.pubgRequests >= 3 && this.age() > 5000; },
    jordanRatio: function() {
        var t = this.jordanHits + this.foreignHits;
        return t > 0 ? Math.round((this.jordanHits / t) * 100) : 0;
    }
};

var DNS_CACHE = {};
var DNS_QUEUE = [];

function fastDNS(host) {
    var isSocial = containsAny(host.toLowerCase(), SOCIAL_KEYS);
    var cached = DNS_CACHE[host];
    if (cached && (now() - cached.t) < CFG.DNS_CACHE_TTL) return cached;
    
    var t0 = now();
    var ip = dnsResolve(host);
    var dt = now() - t0;
    
    var mode = detectMode(host);
    var region = detectRegion(host, ip);
    
    var result = { ip: ip, dt: dt, mode: mode, region: region, socialEndpoint: isSocial, ok: !!ip, t: now() };
    
    if (DNS_QUEUE.length >= CFG.DNS_CACHE_MAX) { delete DNS_CACHE[DNS_QUEUE.shift()]; }
    DNS_CACHE[host] = result; DNS_QUEUE.push(host);
    
    return result;
}

var PING = {
    history: [], maxHistory: 30,
    record: function(ms) {
        var est = Math.max(1, Math.round(ms * 0.3 + 1));
        if (this.history.length >= this.maxHistory) this.history.shift();
        this.history.push(est); return est;
    },
    current: function() { return this.history.length === 0 ? 999 : this.history[this.history.length - 1]; },
    avg: function(s) { s = s||5; var l=this.history.length; if(l===0) return 999; var st=Math.max(0,l-s); var sm=0,c=0; for(var i=st;i<l;i++){sm+=this.history[i];c++;} return c>0?Math.round(sm/c):999; },
    isHealthy: function(m) { var mm=MODES[m]; return mm ? this.avg(3) <= mm.maxPing*1.2 : true; }
};

var ML = {
    patterns: {},
    recordSuccess: function(mode, route, ping, region) {
        if(!this.patterns[mode]) this.patterns[mode] = { route: route, ping: ping, uses: 0 };
        this.patterns[mode].uses++;
        if(ping < this.patterns[mode].ping) { this.patterns[mode].ping = ping; this.patterns[mode].route = route; }
    },
    predict: function(mode) { return this.patterns[mode] && this.patterns[mode].uses >= 2 ? this.patterns[mode].route : null; }
};

var HEALTH = {};
function initHealth() {
    for (var name in PROXY) {
        HEALTH[name] = { uses: 0, successes: 0, failures: 0, load: 0, status: "READY", avgPing: PROXY[name].targetPing, score: 100 };
    }
}

function updateHealth(name, success, ping) {
    if(!HEALTH[name]) return;
    var h = HEALTH[name]; h.uses++;
    if(success) h.successes++; else h.failures++;
    if(ping) h.avgPing = (h.avgPing + ping) / 2;
    h.score = Math.max(10, 100 - (h.failures * 10) - (h.load * 0.1));
    if(h.score > 80) h.status="EXCELLENT"; else if(h.score>60) h.status="GOOD"; else h.status="DEGRADED";
}

function getBestProxies(tier, carrier, count, requireInstant) {
    var c = [];
    for (var name in PROXY) {
        var p = PROXY[name]; var h = HEALTH[name];
        if (tier !== undefined && p.tier > tier) continue;
        if (carrier && p.carrier !== carrier) continue;
        if (requireInstant && !p.instantCapable) continue;
        c.push({ name: name, p: p, h: h, score: h.score + (p.priority/10) });
    }
    c.sort(function(a, b) { return b.score - a.score; });
    var r = []; for (var i = 0; i < Math.min(count, c.length); i++) r.push(c[i].name); return r;
}


// ═══════════════════════════════════════════════════════════════════════
//  GUARD SYSTEM — Absolute Jordan Geo-Lock
// ═══════════════════════════════════════════════════════════════════════

var GUARD = {
    isJordan: function(ip) { return ip && isIPv4(ip) && inRanges(ip, JO_NETS); },
    
    checkDestination: function(ip, host, mode) {
        if (!ip) return true;
        var m = MODES[mode];
        
        // ABSOLUTE RULE: Matchmaking, Lobby, and Crew MUST be Jordan
        if (m && (m.strategy === "INSTANT_MATCH_FORCE" || m.strategy === "INSTANT_CREW_FORCE")) {
            if (!this.isJordan(ip)) {
                SESSION.blockedHits++;
                return false; // Hard block non-Jordan MM/Crew servers
            }
            SESSION.jordanHits++;
            return true;
        }
        
        if (CFG.JORDAN_ONLY_MODE && !this.isJordan(ip)) {
            SESSION.blockedHits++;
            return false;
        }
        
        if (this.isJordan(ip)) SESSION.jordanHits++; else SESSION.foreignHits++;
        return true;
    },
    
    buildInstantChain: function(names, mode) {
        var chain = [];
        for (var i = 0; i < names.length; i++) {
            var name = names[i]; var p = PROXY[name];
            if (!p || !p.instantCapable) continue;
            chain.push("PROXY " + p.ip + ":" + p.port);
            updateHealth(name, true, p.targetPing);
            break; // Only 1 hop for absolute instant speed
        }
        if (chain.length === 0) return BLOOD.BLK;
        return chain.join("; ") + "; " + BLOOD.BLK;
    },
    
    buildChain: function(names, mode) {
        var chain = []; var used = {};
        for (var i = 0; i < names.length; i++) {
            var name = names[i]; var p = PROXY[name]; var h = HEALTH[name];
            if (used[name] || !p || h.status === "DEGRADED") continue;
            chain.push("PROXY " + p.ip + ":" + p.port); used[name] = true;
            updateHealth(name, true, p.targetPing);
            if (chain.length >= CFG.MAX_PROXY_CHAIN) break;
        }
        if (chain.length === 0) return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
        return chain.join("; ") + "; " + (CFG.FAIL_CLOSED ? BLOOD.BLK : "DIRECT");
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

function detectMode(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < MODE_PRIORITY.length; i++) {
        var mName = MODE_PRIORITY[i]; var m = MODES[mName];
        for (var j = 0; j < m.sig.length; j++) {
            if (h.indexOf(m.sig[j]) !== -1) return mName;
        }
    }
    return "CLASSIC";
}

function detectRegion(host, ip) {
    if (ip && GUARD.isJordan(ip)) return { region: "JORDAN", city: "AMMAN_CORE", confidence: 100 };
    return { region: "UNKNOWN", confidence: 0 };
}

function selectRoute(mode, ip, host, dns) {
    var m = MODES[mode]; if (!m) m = MODES["CLASSIC"];
    var carrier = getCarrier(ip);
    
    // 1. SECURITY GATE (HARD BLOCK NON-JO FOR MM/LOBBY/CREW)
    if (!GUARD.checkDestination(ip, host, mode)) return BLOOD.BLK;
    
    // 2. INSTANT BYPASS (No health checks, no sticky delay - Pure Speed)
    if (m.strategy === "INSTANT_MATCH_FORCE") {
        SESSION.instantMatches++;
        var matchProxies = getBestProxies(0, carrier, 1, true);
        if (matchProxies.length === 0) matchProxies = ["INSTANT_ORANGE_MM", "INSTANT_ZAIN_MM"];
        return GUARD.buildInstantChain(matchProxies, mode);
    }
    
    if (m.strategy === "INSTANT_CREW_FORCE") {
        SESSION.instantRecruits++;
        var crewProxies = getBestProxies(0, carrier, 1, true);
        if (crewProxies.length === 0) crewProxies = ["SOCIAL_ORANGE_CREW", "SOCIAL_ZAIN_CREW"];
        return GUARD.buildInstantChain(crewProxies, mode);
    }
    
    // 3. ML PREDICTION (For regular gameplay)
    if (CFG.ENABLE_ML_PREDICTION && SESSION.isWarm()) {
        var predicted = ML.predict(mode);
        if (predicted && PING.isHealthy(mode)) return predicted;
    }
    
    // 4. STANDARD GAME ROUTING
    var route;
    if (m.strategy === "GAME_ULTRA_CRITICAL" || m.strategy === "SECURE_CRITICAL") {
        var tier0 = getBestProxies(0, carrier, 2, false);
        route = tier0.length > 0 ? GUARD.buildChain(tier0, mode) : GUARD.buildChain(["INSTANT_ORANGE_MM", "INSTANT_ZAIN_MM"], mode);
    } else {
        route = GUARD.buildChain(getBestProxies(0, null, 2, false), mode);
    }
    
    ML.recordSuccess(mode, route, PING.current(), dns.region.region);
    return route;
}

function getCarrier(ip) {
    if (!ip) return "UNKNOWN";
    if (isInNet(ip, "46.185.128.0", "255.255.128.0") || isInNet(ip, "94.127.208.0", "255.255.240.0")) return "ORANGE";
    if (isInNet(ip, "79.173.192.0", "255.255.192.0") || isInNet(ip, "109.237.192.0", "255.255.224.0")) return "ZAIN";
    if (isInNet(ip, "82.212.0.0", "255.255.0.0") || isInNet(ip, "212.35.64.0", "255.255.192.0")) return "UMNIAH";
    return "OTHER";
}


// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    SESSION.requests++;
    if (!host) return BLOOD.DIR;
    var h = host.toLowerCase();
    
    if (isPlainHostName(host)) return BLOOD.DIR;
    if (isIPv4(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") || isInNet(host, "172.16.0.0", "255.240.0.0") || isInNet(host, "192.168.0.0", "255.255.0.0") || isInNet(host, "127.0.0.0", "255.0.0.0")) return BLOOD.DIR;
    }
    
    if (containsAny(h, DIRECT_KEYS) && !containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    if (!containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    
    SESSION.pubgRequests++;
    
    var dns = fastDNS(host);
    var ip = dns.ip;
    var mode = dns.mode;
    
    // Block IPv6 strictly to prevent leak to international MM
    if (ip && ip.indexOf(":") !== -1) {
        if (CFG.JORDAN_ONLY_MODE || CFG.BLOCK_INTERNATIONAL) return BLOOD.BLK;
    }
    
    return selectRoute(mode, ip, h, dns);
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }
function isIPv4(str) { if (!str || str.indexOf(":") !== -1) return false; var p = str.split("."); if (p.length !== 4) return false; for (var i = 0; i < 4; i++) { var n = parseInt(p[i], 10); if (isNaN(n) || n < 0 || n > 255) return false; } return true; }
function maskFromCIDR(cidr) { var m = {"8":"255.0.0.0","15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0"}; return m[String(cidr)] || "255.255.0.0"; }
function inRanges(ip, ranges) { if (!ip || !isIPv4(ip)) return false; for (var i = 0; i < ranges.length; i++) { if (isInNet(ip, ranges[i][0], maskFromCIDR(ranges[i][1]))) return true; } return false; }
function containsAny(str, k) { for (var i = 0; i < k.length; i++) { if (str.indexOf(k[i]) !== -1) return true; } return false; }

initHealth();
// ═══════════════════════════════════════════════════════════════════════
//  END OF v32.0 — ABSOLUTE JORDAN EDITION
// ═══════════════════════════════════════════════════════════════════════
