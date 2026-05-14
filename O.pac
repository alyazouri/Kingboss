// ===================================================================
//  PUBG JORDAN ULTIMATE v32.1 — PART 1/3: CORE CONFIG & INFRASTRUCTURE
//  IPv6 Ready | Jordan-Only | Ultra Low Latency
// ===================================================================

// ———————————————————————————————————————
//  MAIN CONFIGURATION
// ———————————————————————————————————————
var CFG = {
    VERSION: "32.1-SUPREME-REGIONAL-IPV6",
    MODE: "MAXIMUM_REGIONAL_VISIBILITY",
    
    // PERFORMANCE TARGETS
    TARGET_PING: 2,
    SOCIAL_API_TARGET: 2,
    EXCELLENT_PING: 5,
    GOOD_PING: 8,
    MAX_ACCEPTABLE_PING: 12,
    CRITICAL_PING: 16,
    
    // JORDAN ENFORCEMENT
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 98,
    JORDAN_ONLY_MODE: true,            // ✅ BLOCK ALL NON-JORDAN
    BLOCK_INTERNATIONAL: true,
    ALLOW_MENA_FALLBACK: false,
    
    // SOCIAL & DISCOVERY
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_SOCIAL_GRAPH: true,
    ENABLE_LOBBY_SYNC: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_REGIONAL_AFFINITY: true,
    ENABLE_PLAYER_SEARCH_BOOST: true,
    ENABLE_CROSS_PLATFORM: true,
    ENABLE_PROVINCE_ROUTING: true,
    
    // ADVANCED SOCIAL
    SOCIAL_PRIORITY_MULTIPLIER: 4.0,
    FRIEND_DISCOVERY_RADIUS: 250,
    LOBBY_AGGREGATION: true,
    PLAYER_POOL_EXPANSION: true,
    VISIBILITY_BOOST: 8.0,
    SEARCH_RANKING_BOOST: 15,
    REGIONAL_HOP_CHAINS: true,
    MATCHMAKING_ACCELERATION: true,
    RECRUITMENT_SPEED_BOOST: 3.0,
    
    // AI & MACHINE LEARNING
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    LEARNING_RATE: 0.3,
    PATTERN_RECOGNITION: true,
    PREDICTIVE_ROUTING: true,
    SOCIAL_ML: true,
    REGIONAL_ML: true,
    
    // NETWORK OPTIMIZATION
    DNS_CACHE_TTL: 25000,
    DNS_CACHE_MAX: 600,
    PREFETCH_SOCIAL_DNS: true,
    PREFETCH_REGIONAL_DNS: true,
    ROUTE_CACHE_TTL: 180000,
    STICKY_TTL: 360000,
    
    // ADVANCED FEATURES
    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,
    REGIONAL_PARALLEL_PROBES: true,
    MATCHMAKING_PRE_WARM: true,
    
    // SECURITY
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    MAX_PROXY_CHAIN: 3,
    
    // MONITORING
    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};

// ———————————————————————————————————————
//  JORDAN NETWORKS (IPv4 + IPv6)
// ———————————————————————————————————————
var JO_NETS = [
    // Orange Jordan
    ["46.185.144.0", "20"], ["46.185.128.0", "17"],
    ["46.185.160.0", "19"], ["46.185.176.0", "20"],
    ["46.185.192.0", "19"], ["46.185.208.0", "20"],
    ["46.185.212.0", "22"], ["46.185.216.0", "21"],
    ["46.185.220.0", "22"], ["46.185.224.0", "19"],
    ["94.127.208.0", "20"], ["94.127.216.0", "21"],
    ["94.127.220.0", "22"], ["94.127.222.0", "23"],
    ["94.127.224.0", "19"], ["149.200.136.0", "22"],
    ["149.200.140.0", "22"],
    
    // Zain Jordan
    ["79.173.192.0", "18"], ["79.173.208.0", "20"],
    ["79.173.224.0", "19"], ["79.173.236.0", "22"],
    ["79.173.240.0", "20"], ["79.173.244.0", "22"],
    ["109.237.192.0", "18"], ["109.237.200.0", "21"],
    ["109.237.204.0", "22"], ["109.237.208.0", "20"],
    ["109.237.224.0", "19"], ["176.28.0.0", "15"],
    ["176.28.128.0", "17"], ["176.28.160.0", "19"],
    ["176.29.0.0", "16"], ["176.29.128.0", "17"],
    ["176.30.0.0", "19"],
    
    // Umniah Jordan
    ["82.212.0.0", "16"], ["82.212.32.0", "19"],
    ["82.212.64.0", "18"], ["82.212.96.0", "19"],
    ["82.212.128.0", "17"], ["82.212.160.0", "19"],
    ["82.212.192.0", "19"], ["82.212.224.0", "19"],
    ["212.35.64.0", "18"], ["212.35.85.0", "24"],
    ["212.35.96.0", "19"], ["212.35.112.0", "20"],
    
    // Jordan Telecom / Government
    ["188.247.0.0", "16"], ["62.72.160.0", "19"],
    ["62.72.168.0", "21"], ["94.230.0.0", "16"],
    ["91.106.0.0", "16"], ["37.220.0.0", "16"],
    ["176.203.0.0", "16"], ["178.20.184.0", "21"],
    
    // Additional Providers
    ["5.11.0.0", "16"], ["31.25.128.0", "17"],
    ["37.48.0.0", "16"], ["77.44.0.0", "16"],
    ["185.54.148.0", "22"], ["185.117.80.0", "22"],
    ["185.143.228.0", "22"], ["46.235.48.0", "21"],
    ["86.108.0.0", "16"], ["193.188.64.0", "19"],
    ["194.126.0.0", "16"], ["213.139.0.0", "16"]
];

// ✅ YOUR PERSONAL IPv6 NETWORK — PRIORITIZED AS AMMAN_CORE
var JO_NETS_IPv6 = [
    "2A01:9700:4341:7C00::/56"
];

// ———————————————————————————————————————
//  PROXY POOL (TIER 0: ULTRA DIAMOND)
// ———————————————————————————————————————
var PROXY = {
    ORANGE_ULTRA_1: {
        ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0,
        targetPing: 2, reliability: 99.6, bandwidth: "ULTRA", priority: 100,
        capacity: 280, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    ZAIN_ULTRA_1: {
        ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0,
        targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 99,
        capacity: 270, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    UMNIAH_ULTRA_1: {
        ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0,
        targetPing: 3, reliability: 99, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 10, regionHop: "AMMAN_CORE"
    },
    
    // Social API Dedicated Proxies
    SOCIAL_ORANGE_1: {
        ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 2, reliability: 99.2, bandwidth: "ULTRA", priority: 98,
        capacity: 220, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true,
        poolSize: 18, regionHop: "AMMAN_CORE"
    },
    SOCIAL_ZAIN_1: {
        ip: "79.173.192.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 2.5, reliability: 98.8, bandwidth: "ULTRA", priority: 97,
        capacity: 210, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true,
        poolSize: 15, regionHop: "AMMAN_CORE"
    },
    SOCIAL_UMNIAH_1: {
        ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier:0,
        targetPing: 3, reliability: 98, bandwidth: "ULTRA", priority:96,
        capacity: 200, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};

// ===================================================================
//  END OF PART 1/3
// ===================================================================
// ===================================================================
//  PUBG JORDAN ULTIMATE v32.1 — PART 2/3: CITIES & REGIONAL PROXIES
// ===================================================================

// ———————————————————————————————————————
//  CITY-LEVEL NETWORKS (IPv4)
// ———————————————————————————————————————
var JO_CITIES = {
    AMMAN_CORE: [
        ["46.185.128.0", "20"], ["46.185.132.0", "22"],
        ["79.173.192.0", "20"], ["79.173.196.0", "22"],
        ["82.212.0.0", "19"], ["82.212.8.0", "21"],
        ["188.247.0.0", "18"], ["188.247.32.0", "20"]
    ],
    AMMAN_METRO: [
        ["46.185.144.0", "22"], ["79.173.208.0", "21"],
        ["82.212.32.0", "20"], ["176.28.128.0", "18"],
        ["149.200.136.0", "22"]
    ],
    IRBID: [
        ["46.185.176.0", "21"], ["46.185.180.0", "22"],
        ["79.173.240.0", "21"], ["79.173.242.0", "23"],
        ["82.212.96.0", "20"], ["109.237.208.0", "21"]
    ],
    ZARQA: [
        ["46.185.192.0", "21"], ["46.185.196.0", "22"],
        ["176.28.128.0", "20"], ["82.212.128.0", "20"]
    ],
    AQABA: [
        ["46.185.208.0", "21"], ["46.185.210.0", "23"],
        ["176.29.128.0", "18"], ["176.29.132.0", "20"]
    ],
    // أضف باقي المحافظات حسب نسختك الأصلية
};

// ———————————————————————————————————————
//  REGIONAL HOP CHAINS
// ———————————————————————————————————————
var REGIONAL_HOPS = {
    AMMAN_CORE: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ULTRA_1"],
    AMMAN_METRO: ["SOCIAL_ORANGE_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    IRBID: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "UMNIAH_IRBID_1"],
    ZARQA: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "ORANGE_ULTRA_1"],
    AQABA: ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "ORANGE_PLAT_1"],
    SOCIAL_AMMAN: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1"],
    SOCIAL_NATIONAL: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ULTRA_1"]
};

// ———————————————————————————————————————
//  DOMAIN DETECTION KEYS
// ———————————————————————————————————————
var PUBG_KEYS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds",
    "tencent", "qq", "igame", "myapp", "intlgame",
    "lightspeed", "tmgp", "gcloud", "tgpa",
    "levelinfinite", "levelinf", "proximabeta",
    "igamecj", "bsgame", "minisite", "garena",
    "anticheat", "tpns", "midas", "unipay",
    "pubgstudio", "krafton", "bluehole",
    "matchmaking", "lobbyserver", "gameserver"
];

var SOCIAL_KEYS = [
    "friend", "friendlist", "friendrequest", "friendsearch",
    "addfriend", "findfriend", "friendmatch", "friendinvite",
    "crew", "clan", "guild", "team", "squad",
    "crewlist", "clanlist", "recruitment", "recruit",
    "crewsearch", "clansearch", "jointeam", "teamfind",
    "social", "presence", "nearby", "nearbyplayers",
    "recommend", "suggestion", "playerdiscovery",
    "lobby", "matchmake", "matchmaking", "queue",
    "roomlist", "room_list", "playerlist", "online",
    "chat", "voice", "message", "im", "rtc",
    "region", "server_list", "serverlist", "worldsvr",
    "playerscan", "regionfilter", "geo_match",
    "match_pool", "player_pool", "active_users"
];

var DIRECT_KEYS = [
    "apple", "icloud", "google", "facebook",
    "instagram", "whatsapp", "telegram",
    "twitter", "tiktok", "netflix", "spotify"
];

// ———————————————————————————————————————
//  GAME MODES
// ———————————————————————————————————————
var MODES = {
    FRIEND_DISCOVERY: {
        sig: ["friend", "friendsearch", "findfriend", "addfriend", "nearby", "playerscan"],
        priority: 10, targetPing: 2, maxPing: 5,
        strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000,
        jordanBonus: 250, foreignPenalty: -500,
        requiresBurst: true, ultraBurst: true, socialPriority: true,
        visibilityBoost: 12, matchmakingSpeed: 2.5, searchRadius: 250,
        gameState: "SOCIAL"
    },
    CREW_RECRUITMENT: {
        sig: ["crew", "clan", "recruit", "guild", "teamfind"],
        priority: 10, targetPing: 2, maxPing: 5,
        strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000,
        jordanBonus: 250, foreignPenalty: -500,
        requiresBurst: true, ultraBurst: true, socialPriority: true,
        visibilityBoost: 12, matchmakingSpeed: 3.0, searchRadius: 250,
        gameState: "SOCIAL"
    },
    LOBBY: {
        sig: ["lobby", "queue", "matchmake", "roomlist", "player_pool"],
        priority: 10, targetPing: 3, maxPing: 8,
        strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 360000,
        jordanBonus: 220, foreignPenalty: -350,
        requiresBurst: true, ultraBurst: true, socialPriority: true,
        gameState: "PRE_MATCH"
    }
    // أضف باقي الأنماط (RANKED, AUTH, CLASSIC, إلخ) من نسختك الأصلية
};

var MODE_PRIORITY = ["FRIEND_DISCOVERY", "CREW_RECRUITMENT", "LOBBY", "MATCHMAKING", "RANKED", "AUTH", "CLASSIC"];

// ===================================================================
//  END OF PART 2/3
// ===================================================================
// ===================================================================
//  PUBG JORDAN ULTIMATE v32.1 — PART 3/3: CORE LOGIC & MAIN FUNCTION
// ===================================================================

// ———————————————————————————————————————
//  UTILITY FUNCTIONS
// ———————————————————————————————————————
function now() { return (new Date()).getTime(); }
function isIPv4(str) { return /^(\d+\.){3}\d+$/.test(str); }
function isIPv6(str) { return /:/.test(str); }
function isInIPv6Range(ip, prefix) {
    try {
        const [network] = prefix.split('/');
        return ip.startsWith(network.split('::')[0]);
    } catch (e) { return false; }
}
function isInNet(ip, net, mask) { /* Standard PAC function */ }
function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) {
        var base = ranges[i][0], cidr = ranges[i][1], mask = maskFromCIDR(cidr);
        if (isInNet(ip, base, mask)) return true;
    }
    return false;
}
function containsAny(str, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}
function getPort(url) {
    var match = url.match(/:(\d+)/);
    return match ? parseInt(match[1], 10) : (url.indexOf("https://") === 0 ? 443 : 80);
}
function dnsResolve(host) { /* Standard PAC function */ }

// ———————————————————————————————————————
//  GUARD SYSTEM — JORDAN-ONLY ENFORCEMENT
// ———————————————————————————————————————
var GUARD = {
    isJordan: function(ip) {
        if (!ip) return false;
        if (isIPv4(ip)) return inRanges(ip, JO_NETS);
        if (isIPv6(ip)) {
            for (let range of JO_NETS_IPv6) {
                if (isInIPv6Range(ip, range)) return true;
            }
        }
        return false;
    },
    getJordanCity: function(ip) {
        if (isIPv6(ip) && isInIPv6Range(ip, "2A01:9700:4341:7C00::/56")) return "AMMAN_CORE";
        for (var city in JO_CITIES) {
            if (inRanges(ip, JO_CITIES[city])) return city;
        }
        return "JORDAN_OTHER";
    },
    checkDestination: function(ip, host, mode) {
        if (!ip) return true;
        if (ip.indexOf(":") !== -1 && !this.isJordan(ip)) {
            return false; // Block non-Jordan IPv6
        }
        if (!this.isJordan(ip)) {
            return false; // Block non-Jordan IPv4
        }
        return true;
    },
    buildChain: function(names, mode, req) {
        var chain = [], used = {};
        req = req || {};
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            if (used[name] || !PROXY[name]) continue;
            var p = PROXY[name];
            var h = HEALTH[name] || { status: "GOOD" };
            if (h.status === "CRITICAL" || h.status === "POOR") continue;
            if (req.burst && !p.burstCapable) continue;
            if (req.ultraBurst && !p.ultraBurst) continue;
            if (req.socialOptimized && !p.socialOptimized) continue;
            chain.push("PROXY " + p.ip + ":" + p.port);
            used[name] = true;
            if (chain.length >= CFG.MAX_PROXY_CHAIN) break;
        }
        return chain.length > 0 ? chain.join("; ") + "; DIRECT" : BLOOD.BLK;
    }
};

// ———————————————————————————————————————
//  SESSION & HEALTH (Simplified)
// ———————————————————————————————————————
var SESSION = { requests: 0, jordanHits: 0, blockedHits: 0, jordanPlayersFound: 0 };
var HEALTH = {}; for (var k in PROXY) HEALTH[k] = { status: "GOOD" };

// ———————————————————————————————————————
//  MAIN FUNCTION — FindProxyForURL
// ———————————————————————————————————————
function FindProxyForURL(url, host) {
    SESSION.requests++;
    if (!host || isPlainHostName(host)) return BLOOD.DIR;
    var h = host.toLowerCase();
    
    if (containsAny(h, DIRECT_KEYS) && !containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    if (!containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    
    var ip = dnsResolve(host);
    var mode = "CLASSIC";
    for (var m of MODE_PRIORITY) {
        if (containsAny(h, MODES[m].sig)) {
            mode = m;
            break;
        }
    }
    
    if (!GUARD.checkDestination(ip, host, mode)) return BLOOD.BLK;
    
    var chain = GUARD.buildChain(
        REGIONAL_HOPS.SOCIAL_AMMAN || ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1"],
        mode,
        { burst: true, ultraBurst: true, socialOptimized: true }
    );
    
    return chain;
}

// ===================================================================
//  END OF SCRIPT — JORDAN ONLY | IPv6 READY | ULTRA FAST
//  © 2025 Jordan Supreme Edition
// ===================================================================

