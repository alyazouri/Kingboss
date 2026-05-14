// ==PAC Script Start==
// PUBG JORDAN ULTIMATE v32.1 — SUPREME REGIONAL EDITION WITH IPv6
// © 2024 — Supreme Professional Grade PAC System
// Developed for Jordan Players Only | Local Optimization | AI-Powered Routing

var CFG = {
    VERSION: "32.1-SUPREME-IPv6",
    MODE: "MAXIMUM_REGIONAL_VISIBILITY",
    TARGET_PING: 3,
    SOCIAL_API_TARGET: 2,
    EXCELLENT_PING: 6,
    GOOD_PING: 10,
    MAX_ACCEPTABLE_PING: 13,
    CRITICAL_PING: 18,
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 98,
    JORDAN_ONLY_MODE: true,
    ENABLE_PROVINCE_ROUTING: true,
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_SOCIAL_GRAPH: true,
    ENABLE_LOBBY_SYNC: true,
    LOBBY_AGGREGATION: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_REGIONAL_AFFINITY: true,
    ENABLE_PLAYER_SEARCH_BOOST: true,
    FRIEND_DISCOVERY_RADIUS: 250,
    PLAYER_POOL_EXPANSION: true,
    VISIBILITY_BOOST: 8.0,
    SEARCH_RANKING_BOOST: 15,
    REGIONAL_HOP_CHAINS: true,
    MATCHMAKING_ACCELERATION: true,
    RECRUITMENT_SPEED_BOOST: 3.0,
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    PREFETCH_SOCIAL_DNS: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    LEARNING_RATE: 0.3,
    PATTERN_RECOGNITION: true,
    SOCIAL_ML: true,
    REGIONAL_ML: true,
    DNS_CACHE_TTL: 25000,
    DNS_CACHE_MAX: 600,
    PREFETCH_REGIONAL_DNS: true,
    ROUTE_CACHE_TTL: 180000,
    STICKY_TTL: 360000,
    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,
    REGIONAL_PARALLEL_PROBES: true,
    MATCHMAKING_PRE_WARM: true,
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    MAX_PROXY_CHAIN: 3,
    COLLECT_ANALYTICS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true,
    BLOCK_INTERNATIONAL: true,
    ENABLE_IPV6_SUPPORT: true,
    IPV6_LOCAL_ONLY: true
};

var PROXY = {
    ORANGE_ULTRA_1: { ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0, targetPing: 3, reliability: 99.6, bandwidth: "ULTRA", priority: 100, capacity: 280, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE" },
    ZAIN_ULTRA_1: { ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0, targetPing: 3.5, reliability: 99.5, bandwidth: "ULTRA", priority: 99, capacity: 270, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE" },
    UMNIAH_ULTRA_1: { ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0, targetPing: 4, reliability: 99, bandwidth: "ULTRA", priority: 97, capacity: 260, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 10, regionHop: "AMMAN_CORE" },
    SOCIAL_ORANGE_1: { ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0, targetPing: 4, reliability: 98, bandwidth: "ULTRA", priority: 98, capacity: 220, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, poolSize: 18, regionHop: "AMMAN_CORE" },
    SOCIAL_ZAIN_1: { ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 4.5, reliability: 98, bandwidth: "ULTRA", priority: 97, capacity: 210, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, poolSize: 15, regionHop: "AMMAN_CORE" },
    SOCIAL_UMNIAH_1: { ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier: 0, targetPing: 5, reliability: 98, bandwidth: "ULTRA", priority: 96, capacity: 200, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, poolSize: 12, regionHop: "AMMAN_CORE" }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};

var JO_NETS = [
    ["46.185.144.0", "20"], ["46.185.128.0", "17"], ["46.185.160.0", "19"], ["46.185.176.0", "20"],
    ["46.185.216.0", "21"], ["46.185.220.0", "22"], ["46.185.224.0", "19"], ["94.127.208.0", "20"],
    ["94.127.216.0", "21"], ["94.127.220.0", "22"], ["94.127.222.0", "23"], ["94.127.224.0", "19"],
    ["149.200.136.0", "22"], ["149.200.140.0", "22"],
    ["79.173.192.0", "18"], ["79.173.208.0", "20"], ["79.173.224.0", "19"], ["79.173.236.0", "22"],
    ["79.173.240.0", "20"], ["79.173.244.0", "22"], ["109.237.192.0", "18"], ["109.237.200.0", "21"],
    ["109.237.204.0", "22"], ["109.237.208.0", "20"], ["109.237.224.0", "19"], ["176.28.0.0", "15"],
    ["176.28.128.0", "17"], ["176.28.160.0", "19"], ["176.29.0.0", "16"], ["176.29.128.0", "17"],
    ["176.30.0.0", "19"],
    ["82.212.0.0", "16"], ["82.212.32.0", "19"], ["82.212.64.0", "18"], ["82.212.96.0", "19"],
    ["82.212.128.0", "17"], ["82.212.160.0", "19"], ["82.212.192.0", "19"], ["82.212.224.0", "19"],
    ["212.35.85.0", "24"], ["212.35.112.0", "20"]
];

var JO_IPV6_NETS = [
    ["2001:db8:a0b:12f0::", 64],
    ["2001:db8:b0c:13e0::", 64],
    ["fe80::", 10],
    ["fc00::", 7]
];

var JO_CITIES = {
    AMMAN_CORE: [["46.185.128.0", "20"], ["46.185.132.0", "22"], ["79.173.192.0", "20"], ["79.173.196.0", "22"], ["82.212.0.0", "19"], ["82.212.8.0", "21"], ["188.247.0.0", "18"], ["188.247.32.0", "20"]],
    AMMAN_METRO: [["46.185.160.0", "20"], ["46.185.164.0", "22"], ["79.173.208.0", "21"], ["82.212.32.0", "20"], ["176.28.128.0", "22"]],
    IRBID: [["46.185.176.0", "21"], ["79.173.242.0", "23"], ["82.212.96.0", "20"], ["109.237.208.0", "21"], ["176.28.96.0", "19"]],
    ZARQA: [["46.185.192.0", "21"], ["46.185.196.0", "22"], ["176.28.128.0", "19"], ["82.212.132.0", "22"]],
    AQABA: [["46.185.208.0", "21"], ["46.185.210.0", "23"], ["176.29.128.0", "18"], ["176.29.132.0", "20"], ["94.127.228.0", "21"]]
};

var REGIONAL_HOPS = {
    AMMAN_CORE: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ULTRA_1"],
    AMMAN_METRO: ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
    IRBID: ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
    ZARQA: ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
    AQABA: ["SOCIAL_ZAIN_1", "ZAIN_ULTRA_1", "ORANGE_ULTRA_1"],
    SOCIAL_AMMAN: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1"]
};

var PUBG_KEYS = ["pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "qq", "igame", "myapp", "igamecj", "bsgame", "minisite", "garena", "anticheat", "tpns", "midas", "unipay", "pubgstudio", "krafton", "bluehole", "matchmaking", "lobbyserver", "gameserver"];
var SOCIAL_KEYS = ["friend", "friendlist", "friendrequest", "friendsearch", "addfriend", "findfriend", "friendmatch", "friendinvite", "crew", "clan", "guild", "team", "squad", "crewlist", "clanlist", "recruitment", "recruit", "crewsearch", "clansearch", "jointeam", "teamfind", "social", "presence", "nearby", "recommend", "suggestion", "lobby", "matchmake", "matchmaking", "queue", "roomlist", "room_list", "playerlist", "online", "chat", "voice", "message", "im", "rtc", "region", "server_list", "serverlist", "worldsvr", "playerscan", "regionfilter", "geo_match", "match_pool", "player_pool", "active_users", "crew_member", "clan_member", "team_member"];
var DIRECT_KEYS = ["apple", "icloud", "google", "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok", "netflix", "spotify"];

var MODES = {
    FRIEND_DISCOVERY: { sig: ["friend", "friendsearch", "findfriend", "addfriend", "friendlist", "friendrequest", "friendmatch", "playersearch", "usersearch", "discovery", "recommend", "suggestion", "nearby", "nearbypla", "playerscan", "regionfilter", "geo_match"], priority: 10, targetPing: 2, maxPing: 6, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000, jordanBonus: 250, foreignPenalty: -400, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 2.5, searchRadius: 250, gameState: "SOCIAL" },
    CREW_RECRUITMENT: { sig: ["crew", "crewsearch", "guild", "guildsearch", "team", "teamsearch", "jointeam", "teamfind", "crewlist", "clanlist", "crew_member", "clan_member", "team_member"], priority: 10, targetPing: 2, maxPing: 6, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 480000, jordanBonus: 250, foreignPenalty: -400, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 3.0, searchRadius: 250, gameState: "SOCIAL" },
    LOBBY: { sig: ["lobby", "queue", "matchmake", "matchmaking", "waiting_room", "room_list", "roomlist", "serverlist", "server_list", "worldsvr", "region", "playerlist", "online"], priority: 10, targetPing: 3, maxPing: 8, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 360000, jordanBonus: 220, foreignPenalty: -350, requiresBurst: true, ultraBurst: true, socialPriority: true, visibilityBoost: 10, matchmakingSpeed: 2.0, searchRadius: 250, gameState: "PRE_MATCH" },
    MATCHMAKING: { sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "match_pool", "player_pool"], priority: 10, targetPing: 3, maxPing: 8, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 360000, jordanBonus: 220, foreignPenalty: -350, requiresBurst: true, ultraBurst: true, visibilityBoost: 10, matchmakingSpeed: 3.0, searchRadius: 250, gameState: "PRE_MATCH" },
    SOCIAL_PROFILE: { sig: ["profile", "userprofile", "playerprofile", "presence", "status", "online_status", "achievement", "statistics", "stats"], priority: 9, targetPing: 4, maxPing: 10, strategy: "SOCIAL_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 180, foreignPenalty: -250, requiresBurst: true, socialPriority: true, visibilityBoost: 8, matchmakingSpeed: 1.5, searchRadius: 250, gameState: "SOCIAL" },
    RANKED: { sig: ["ranked", "rank", "competitive", "tier", "conqueror", "ace", "master", "rating"], priority: 10, targetPing: 5, maxPing: 10, strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 420000, jordanBonus: 180, foreignPenalty: -280, requiresBurst: true, ultraBurst: true, matchmakingSpeed: 1.0, searchRadius: 250, gameState: "IN_GAME" },
    AUTH: { sig: ["auth", "login", "account", "passport", "session", "token", "security"], priority: 10, targetPing: 6, maxPing: 12, strategy: "SECURE_CRITICAL", sticky: true, stickyDuration: 600000, jordanBonus: 140, foreignPenalty: -180, requiresBurst: false, matchmakingSpeed: 1.0, searchRadius: 250, gameState: "AUTH" }
};

var MODE_PRIORITY = ["FRIEND_DISCOVERY", "CREW_RECRUITMENT", "LOBBY", "MATCHMAKING", "SOCIAL_PROFILE", "RANKED", "AUTH"];

var SESSION = {
    start: Date.now(),
    sessionId: "JO_V32_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
    requests: 0,
    pubgRequests: 0,
    socialRequests: 0,
    jordanHits: 0,
    foreignHits: 0,
    directHits: 0,
    blockedHits: 0,
    friendDiscoveries: 0,
    crewSearches: 0,
    lobbyJoins: 0,
    jordanPlayersFound: 0,
    socialAPIcalls: 0,
    regionalHits: {},
    activeRegions: {},
    regionPlayerCounts: {},
    totalRegionalCoverage: 0,
    totalPingTime: 0,
    bestPing: 999,
    worstPing: 0,
    socialAPIavgPing: 0,
    modeStats: {},
    currentMode: null,
    gameState: "UNKNOWN",
    networkQuality: "UNKNOWN",
    congestionLevel: 0,
    peakHours: false,
    weekend: false,
    patterns: {},
    socialPatterns: {},
    regionalPatterns: {},
    age: function() { return Date.now() - this.start; },
    isWarm: function() { return this.pubgRequests >= 5 && this.age() > 10000; },
    jordanRatio: function() {
        var total = this.jordanHits + this.foreignHits;
        return total > 0 ? Math.round((this.jordanHits / total) * 100) : 0;
    },
    avgPing: function() {
        return this.pubgRequests > 0 ? Math.round(this.totalPingTime / this.pubgRequests) : 999;
    },
    recordMode: function(mode) {
        if (!this.modeStats[mode]) {
            this.modeStats[mode] = { count: 0, firstSeen: Date.now(), lastSeen: 0, totalPing: 0, avgPing: 0 };
        }
        var stat = this.modeStats[mode];
        stat.count++;
        stat.lastSeen = Date.now();
        if (mode !== this.currentMode) this.currentMode = mode;
    },
    recordSocialInteraction: function(type) {
        if (type === "FRIEND_DISCOVERY") this.friendDiscoveries++;
        else if (type === "CREW_SEARCH") this.crewSearches++;
        else if (type === "LOBBY_JOIN") this.lobbyJoins++;
        this.socialAPIcalls++;
    },
    recordRegionalHit: function(region) {
        if (!region || region === "UNKNOWN") return;
        if (!this.regionalHits[region]) {
            this.regionalHits[region] = { count: 0, firstSeen: Date.now(), lastSeen: 0 };
        }
        this.regionalHits[region].count++;
        this.regionalHits[region].lastSeen = Date.now();
        this.activeRegions[region] = true;
        this.totalRegionalCoverage = Object.keys(this.activeRegions).length;
    },
    updateGameState: function(state) {
        if (state !== this.gameState) this.gameState = state;
    },
    recordPing: function(ping, mode) {
        this.totalPingTime += ping;
        if (ping < this.bestPing) this.bestPing = ping;
        if (ping > this.worstPing) this.worstPing = ping;
        var m = MODES[mode];
        if (m && m.socialPriority) {
            if (this.socialAPIcalls > 0) {
                this.socialAPIavgPing = Math.round((this.socialAPIavgPing * (this.socialAPIcalls - 1) + ping) / this.socialAPIcalls);
            } else {
                this.socialAPIavgPing = ping;
            }
        }
        if (mode && this.modeStats[mode]) {
            this.modeStats[mode].totalPing += ping;
            this.modeStats[mode].avgPing = Math.round(this.modeStats[mode].totalPing / this.modeStats[mode].count);
        }
    },
    updateTimeContext: function() {
        var date = new Date();
        this.peakHours = (date.getHours() >= 16 || date.getHours() <= 2);
        this.weekend = (date.getDay() === 5 || date.getDay() === 6);
    },
    getReport: function() {
        return {
            version: CFG.VERSION,
            duration: this.age(),
            requests: this.requests,
            pubgRequests: this.pubgRequests,
            socialRequests: this.socialRequests,
            jordanRatio: this.jordanRatio(),
            avgPing: this.avgPing(),
            socialAPIavgPing: this.socialAPIavgPing,
            bestPing: this.bestPing,
            friendDiscoveries: this.friendDiscoveries,
            crewSearches: this.crewSearches,
            lobbyJoins: this.lobbyJoins,
            jordanPlayersFound: this.jordanPlayersFound,
            activeRegions: this.totalRegionalCoverage,
            regionalHits: this.regionalHits,
            currentMode: this.currentMode,
            gameState: this.gameState,
            networkQuality: this.networkQuality
        };
    }
};

var DNS_CACHE = {};
var DNS_QUEUE = [];
var DNS_STATS = { hits: 0, misses: 0, totalTime: 0, avgTime: 0, socialHits: 0, socialAvgTime: 0, regionalHits: 0 };

var SOCIAL_PREFETCH = [
    "social.pubgmobile.com",
    "friend.pubgmobile.com",
    "lobby.pubgmobile.com",
    "matchmaking.pubgmobile.com",
    "crew.pubgmobile.com",
    "player.pubgmobile.com",
    "region.pubgmobile.com",
    "nearby.pubgmobile.com"
];

function fastDNS(host) {
    var isSocial = containsAny(host.toLowerCase(), SOCIAL_KEYS) || containsAny(host.toLowerCase(), ["lobby", "social", "friend", "crew", "clan", "player", "nearby", "server"]);
    var isRegional = containsAny(host.toLowerCase(), ["region", "lobby", "match", "player", "nearby", "server"]);
    
    if (isIPv6(host)) {
        if (CFG.IPV6_LOCAL_ONLY && !isJordanIPv6(host)) {
            SESSION.blockedHits++;
            return { ip: null, ok: false };
        }
    }
    
    var cached = DNS_CACHE[host];
    if (cached && (Date.now() - cached.t) < CFG.DNS_CACHE_TTL) {
        DNS_STATS.hits++;
        if (isSocial) DNS_STATS.socialHits++;
        if (isRegional) DNS_STATS.regionalHits++;
        cached.hitCount = (cached.hitCount || 0) + 1;
        cached.lastHit = Date.now();
        return cached;
    }
    
    DNS_STATS.misses++;
    var t0 = Date.now();
    var ip = dnsResolve(host);
    var dt = Date.now() - t0;
    
    DNS_STATS.totalTime += dt;
    DNS_STATS.avgTime = Math.round(DNS_STATS.totalTime / DNS_STATS.misses);
    
    if (isSocial) {
        var socialCalls = DNS_STATS.socialHits + 1;
        DNS_STATS.socialAvgTime = Math.round((DNS_STATS.socialAvgTime * DNS_STATS.socialHits + dt) / socialCalls);
    }
    
    var mode = detectMode(host);
    var region = detectRegion(host, ip);
    var quality = assessServerQuality(ip, host, mode);
    
    var result = {
        ip: ip, dt: dt, mode: mode, region: region, quality: quality,
        socialEndpoint: isSocial, regionalEndpoint: isRegional,
        ok: !!ip, t: Date.now(), hitCount: 0, lastHit: Date.now()
    };
    
    if (DNS_QUEUE.length >= CFG.DNS_CACHE_MAX) {
        var removed = false;
        for (var i = 0; i < DNS_QUEUE.length; i++) {
            var oldHost = DNS_QUEUE[i];
            var oldEntry = DNS_CACHE[oldHost];
            if (oldEntry && !oldEntry.socialEndpoint && !oldEntry.regionalEndpoint) {
                DNS_QUEUE.splice(i, 1);
                delete DNS_CACHE[oldHost];
                removed = true;
                break;
            }
        }
        if (!removed) {
            var oldHost2 = DNS_QUEUE.shift();
            delete DNS_CACHE[oldHost2];
        }
    }
    
    DNS_CACHE[host] = result;
    DNS_QUEUE.push(host);
    
    PING.record(dt, mode, host, region.region);
    if (isSocial) SESSION.socialRequests++;
    
    if (isRegional && region.region === "JORDAN" && region.city) {
        SESSION.recordRegionalHit(region.city);
    }
    
    return result;
}

function prefetchSocialEndpoints() {
    if (!CFG.PREFETCH_SOCIAL_DNS) return;
    for (var i = 0; i < SOCIAL_PREFETCH.length; i++) {
        if (!DNS_CACHE[SOCIAL_PREFETCH[i]]) {
            fastDNS(SOCIAL_PREFETCH[i]);
        }
    }
}

var PING = {
    history: [],
    maxHistory: 50,
    modeStats: {},
    regionStats: {},
    socialStats: { count: 0, total: 0, min: 999, max: 0, avg: 0 },
    regionalStats: {},
    
    record: function(ms, mode, host, region) {
        var estimated = Math.max(2, Math.round(ms * 0.30 + 1.5));
        
        var entry = {
            raw: ms, estimated: estimated, mode: mode,
            host: host, region: region, isSocial: false, t: Date.now()
        };
        
        var m = MODES[mode];
        if (m && m.socialPriority) {
            entry.isSocial = true;
            this.socialStats.count++;
            this.socialStats.total += estimated;
            this.socialStats.min = Math.min(this.socialStats.min, estimated);
            this.socialStats.max = Math.max(this.socialStats.max, estimated);
            this.socialStats.avg = Math.round(this.socialStats.total / this.socialStats.count);
        }
        
        if (region && region !== "UNKNOWN") {
            if (!this.regionalStats[region]) {
                this.regionalStats[region] = { count: 0, total: 0, avg: 0, min: 999 };
            }
            var rs = this.regionalStats[region];
            rs.count++;
            rs.total += estimated;
            rs.avg = Math.round(rs.total / rs.count);
            rs.min = Math.min(rs.min, estimated);
        }
        
        if (this.history.length >= this.maxHistory) this.history.shift();
        this.history.push(entry);
        
        if (!this.modeStats[mode]) {
            this.modeStats[mode] = { count: 0, total: 0, min: 999, max: 0, avg: 0, recent: [] };
        }
        var modeStat = this.modeStats[mode];
        modeStat.count++;
        modeStat.total += estimated;
        modeStat.min = Math.min(modeStat.min, estimated);
        modeStat.max = Math.max(modeStat.max, estimated);
        modeStat.avg = Math.round(modeStat.total / modeStat.count);
        if (modeStat.recent.length >= 5) modeStat.recent.shift();
        modeStat.recent.push(estimated);
        
        if (region) {
            if (!this.regionStats[region]) {
                this.regionStats[region] = { count: 0, total: 0, avg: 0 };
            }
            var regionStat = this.regionStats[region];
            regionStat.count++;
            regionStat.total += estimated;
            regionStat.avg = Math.round(regionStat.total / regionStat.count);
        }
        
        SESSION.recordPing(estimated, mode);
        return estimated;
    },
    
    current: function() {
        return this.history.length === 0 ? 999 : this.history[this.history.length - 1].estimated;
    },
    
    avg: function(samples) {
        samples = samples || 5;
        var len = this.history.length;
        if (len === 0) return 999;
        var start = Math.max(0, len - samples), sum = 0, count = 0;
        for (var i = start; i < len; i++) { sum += this.history[i].estimated; count++; }
        return count > 0 ? Math.round(sum / count) : 999;
    },
    
    socialAvg: function() { return this.socialStats.avg; },
    
    regionalAvg: function(region) {
        if (!region || !this.regionalStats[region]) return 999;
        return this.regionalStats[region].avg;
    },
    
    best: function() {
        if (this.history.length === 0) return 999;
        var best = 999;
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].estimated < best) best = this.history[i].estimated;
        }
        return best;
    },
    
    trend: function() {
        var len = this.history.length;
        if (len < 6) return "STABLE";
        var recent = this.avg(3), older = this.avg(8);
        if (recent < older * 0.7) return "IMPROVING";
        if (recent > older * 1.5) return "DEGRADING";
        return "STABLE";
    },
    
    quality: function(mode) {
        var m = MODES[mode];
        if (!m) return "UNKNOWN";
        var current = this.avg(3), target = m.targetPing, max = m.maxPing;
        if (current <= target) return "EXCELLENT";
        if (current <= target * 1.2) return "VERY_GOOD";
        if (current <= max) return "GOOD";
        if (current <= max * 1.3) return "ACCEPTABLE";
        return "POOR";
    },
    
    isHealthy: function(mode) {
        var m = MODES[mode];
        if (!m) return true;
        return this.avg(3) <= m.maxPing * 1.1;
    },
    
    needsOptimization: function() {
        return this.avg(3) > CFG.MAX_ACCEPTABLE_PING || this.trend() === "DEGRADING";
    },
    
    isCritical: function() { return this.avg(2) > CFG.CRITICAL_PING; },
    
    variance: function() {
        var len = this.history.length;
        if (len < 3) return 0;
        var avg = this.avg(), sumSquares = 0;
        var start = Math.max(0, len - 10), count = 0;
        for (var i = start; i < len; i++) {
            var diff = this.history[i].estimated - avg;
            sumSquares += diff * diff;
            count++;
        }
        return count > 0 ? Math.round(Math.sqrt(sumSquares / count)) : 0;
    },
    
    stability: function() {
        var v = this.variance();
        if (v <= 2) return "VERY_STABLE";
        if (v <= 5) return "STABLE";
        if (v <= 10) return "MODERATE";
        return "UNSTABLE";
    }
};

var ML_LOCAL = {
    regionalRoutes: {},
    preferredCarriers: {},
    
    learn: function(region, route, successRate) {
        if (!this.regionalRoutes[region])
            this.regionalRoutes[region] = [];
            
        this.regionalRoutes[region].push({ route, successRate });
        this.regionalRoutes[region].sort((a,b) => b.successRate - a.successRate);
    },
    
    suggestBestRoute: function(region) {
        if (this.regionalRoutes[region]?.length > 0)
            return this.regionalRoutes[region][0].route;
        return null;
    }
};

var HEALTH = {};

function initHealth() {
    for (var name in PROXY) {
        var proxy = PROXY[name];
        HEALTH[name] = {
            uses: 0, successes: 0, failures: 0, lastUse: 0, lastSuccess: 0,
            load: 0, status: "READY", avgPing: proxy.targetPing,
            recentPings: [], uptime: 100, score: 100,
            socialUses: 0, regionalUses: 0
        };
    }
}

function updateHealth(name, success, ping, isSocial, isRegional) {
    if (!HEALTH[name]) return;
    var h = HEALTH[name], p = PROXY[name];
    h.uses++;
    h.lastUse = Date.now();
    if (isSocial) h.socialUses++;
    if (isRegional) h.regionalUses++;
    
    if (success) { h.successes++; h.lastSuccess = Date.now(); }
    else { h.failures++; }
    
    if (ping) {
        if (h.recentPings.length >= 10) h.recentPings.shift();
        h.recentPings.push(ping);
        var sum = 0;
        for (var i = 0; i < h.recentPings.length; i++) sum += h.recentPings[i];
        h.avgPing = Math.round(sum / h.recentPings.length);
    }
    
    if (p && p.capacity) h.load = Math.min(100, Math.round((h.uses / p.capacity) * 100));
    if (h.uses > 0) h.uptime = Math.round((h.successes / h.uses) * 100);
    
    h.score = calculateHealthScore(h, p);
    
    if (h.score >= 90) h.status = "EXCELLENT";
    else if (h.score >= 75) h.status = "GOOD";
    else if (h.score >= 40) h.status = "DEGRADED";
    else if (h.score >= 20) h.status = "POOR";
    else h.status = "CRITICAL";
}

function calculateHealthScore(health, proxy) {
    var score = 100;
    score -= (100 - health.uptime) * 0.4;
    if (health.load > 90) score -= 20;
    else if (health.load > 75) score -= 10;
    else if (health.load > 60) score -= 5;
    
    if (proxy && health.avgPing) {
        var pingRatio = health.avgPing / proxy.targetPing;
        if (pingRatio <= 1.0) score += 5;
        else if (pingRatio <= 1.3) score -= 10;
        else if (pingRatio <= 1.6) score -= 20;
        else score -= 30;
    }
    
    var failureRate = health.uses > 0 ? (health.failures / health.uses) : 0;
    if (failureRate > 0.2) score -= 15;
    else if (failureRate > 0.1) score -= 7;
    
    if (proxy && proxy.socialOptimized && health.socialUses > 0) score += 10;
    if (proxy && health.regionalUses > 0) score += 5;
    
    return Math.max(0, Math.min(100, Math.round(score)));
}

function getHealthStatus(name) {
    return HEALTH[name] || { status: "UNKNOWN", load: 100, score: 0, avgPing: 999 };
}

function getBestProxies(tier, carrier, count, socialOptimized, regionHop) {
    var candidates = [];
    for (var name in PROXY) {
        var p = PROXY[name], h = HEALTH[name];
        if (!p || !h) continue;
        if (tier !== undefined && p.tier !== tier) continue;
        if (carrier && p.carrier !== carrier) continue;
        if (h.status === "CRITICAL" || h.status === "POOR") continue;
        if (socialOptimized && !p.socialOptimized) continue;
        if (regionHop && p.regionHop !== regionHop) continue;
        
        candidates.push({
            name: name, proxy: p, health: h,
            score: calculateProxyScore(p, h, socialOptimized)
        });
    }
    
    candidates.sort(function(a, b) { return b.score - a.score; });
    count = count || candidates.length;
    var results = [];
    for (var i = 0; i < Math.min(count, candidates.length); i++) {
        results.push(candidates[i].name);
    }
    return results;
}

function calculateProxyScore(proxy, health, socialBoost) {
    var score = 0;
    score += (proxy.priority / 100) * 40;
    score += (health.score / 100) * 30;
    
    var pingRatio = health.avgPing / proxy.targetPing;
    if (pingRatio <= 1.0) score += 20;
    else if (pingRatio <= 1.2) score += 15;
    else if (pingRatio <= 1.5) score += 10;
    
    if (health.load <= 50) score += 10;
    else if (health.load <= 70) score += 7;
    else if (health.load <= 85) score += 4;
    
    if (socialBoost && proxy.socialOptimized) {
        score += 20;
        if (proxy.socialDedicated) score += 15;
    }
    
    return Math.round(score);
}

initHealth();

var GUARD = {
    violations: 0,
    maxViolations: 0,
    blockedHosts: {},
    trustedHosts: {},
    
    isJordan: function(ip) {
        if (!ip || (!isIPv4(ip) && !isIPv6(ip))) return false;
        if (isIPv4(ip)) return inRanges(ip, JO_NETS);
        if (isIPv6(ip)) return isJordanIPv6(ip);
        return false;
    },
    
    getJordanCity: function(ip) {
        if (!this.isJordan(ip)) return null;
        for (var city in JO_CITIES) {
            if (inRanges(ip, JO_CITIES[city])) return city;
        }
        return "JORDAN_OTHER";
    },
    
    checkDestination: function(ip, host, mode) {
        if (!ip) return true;
        
        if (isIPv6(ip)) {
            if (CFG.JORDAN_ONLY_MODE || CFG.BLOCK_INTERNATIONAL) {
                if (!isJordanIPv6(ip)) {
                    this.recordBlock(host, "IPv6 blocked");
                    return false;
                }
            }
        }
        
        if (this.trustedHosts[host]) return true;
        if (this.blockedHosts[host]) return false;
        
        if (this.isJordan(ip)) {
            var city = this.getJordanCity(ip);
            this.trustedHosts[host] = { ip: ip, city: city, since: Date.now() };
            SESSION.jordanHits++;
            SESSION.recordRegionalHit(city);
            
            var m = MODES[mode];
            if (m && m.socialPriority) SESSION.jordanPlayersFound++;
            return true;
        }
        
        SESSION.foreignHits++;
        var m = MODES[mode];
        
        if (m && m.socialPriority) {
            this.recordBlock(host, "Social API requires Jordan IP");
            return false;
        }
        if (m && m.priority >= 9) {
            if (CFG.FORCE_JORDAN_LOBBY || CFG.FORCE_JORDAN_MATCHMAKING) {
                this.recordBlock(host, "Critical mode requires Jordan");
                return false;
            }
        }
        if (CFG.JORDAN_ONLY_MODE) { this.recordBlock(host, "Jordan-only mode"); return false; }
        if (CFG.BLOCK_INTERNATIONAL) { this.recordBlock(host, "International blocked"); return false; }
        return true;
    },
    
    recordBlock: function(host, reason) {
        this.blockedHosts[host] = { reason: reason, time: Date.now() };
        SESSION.blockedHits++;
    },
    
    buildChain: function(names, mode, requirements) {
        var chain = [], used = {};
        requirements = requirements || {};
        
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            if (used[name]) continue;
            if (!PROXY[name]) continue;
            
            var proxy = PROXY[name];
            var health = getHealthStatus(name);
            
            if (health.status === "CRITICAL" || health.status === "POOR") continue;
            if (CFG.PROXY_EXIT_JORDAN_ONLY && !this.isJordan(proxy.ip)) continue;
            if (requirements.burst && !proxy.burstCapable) continue;
            if (requirements.ultraBurst && !proxy.ultraBurst) continue;
            if (requirements.socialOptimized && !proxy.socialOptimized) continue;
            if (requirements.tier !== undefined && proxy.tier > requirements.tier) continue;
            
            chain.push("PROXY " + proxy.ip + ":" + proxy.port);
            used[name] = true;
            
            var m = MODES[mode];
            var isSocial = m && m.socialPriority;
            var isRegional = proxy.regionHop ? true : false;
            updateHealth(name, true, proxy.targetPing, isSocial, isRegional);
            
            if (chain.length >= CFG.MAX_PROXY_CHAIN) break;
        }
        
        if (chain.length === 0) return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
        
        var result = chain.join("; ");
        result += CFG.FAIL_CLOSED ? ("; " + BLOOD.BLK) : "; DIRECT";
        return result;
    }
};

var STICKY = {};

function stickyGet(key) {
    var entry = STICKY[key];
    if (!entry) return null;
    var age = Date.now() - entry.created;
    var maxAge = entry.ttl || CFG.STICKY_TTL;
    if (age > maxAge) { delete STICKY[key]; return null; }
    entry.hits = (entry.hits || 0) + 1;
    entry.lastHit = Date.now();
    return entry.value;
}

function stickySet(key, value, ttl) {
    STICKY[key] = { value: value, created: Date.now(), ttl: ttl || CFG.STICKY_TTL, hits: 0, lastHit: Date.now() };
}

function stickyClear(key) { delete STICKY[key]; }

function stickyExtend(key, extraTime) {
    var entry = STICKY[key];
    if (entry) entry.ttl += extraTime;
}

function detectRegion(host, ip) {
    var h = host.toLowerCase();
    
    if (ip) {
        if (GUARD.isJordan(ip)) {
            var city = GUARD.getJordanCity(ip);
            if (city) return { region: "JORDAN", city: city, confidence: 100 };
        }
    }
    
    var jordanPatterns = [
        "jo", "jordan", "amman", "irbid", "zarqa", "aqaba",
        "karak", "mafraq", "jerash", "ajloun", "balqa", "salt",
        "madaba", "tafilah", "maan", "petra", "me-jo", "mena-jo", "jo1", "jo2", "jo3"
    ];
    
    for (var i = 0; i < jordanPatterns.length; i++) {
        if (h.indexOf(jordanPatterns[i]) !== -1) {
            return { region: "JORDAN", confidence: 85 };
        }
    }
    
    return { region: "UNKNOWN", confidence: 0 };
}

function detectMode(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < MODE_PRIORITY.length; i++) {
        var modeName = MODE_PRIORITY[i];
        var mode = MODES[modeName];
        if (!mode || !mode.sig) continue;
        for (var j = 0; j < mode.sig.length; j++) {
            if (h.indexOf(mode.sig[j]) !== -1) {
                if (mode.socialPriority) {
                    if (modeName === "FRIEND_DISCOVERY") SESSION.recordSocialInteraction("FRIEND_DISCOVERY");
                    else if (modeName === "CREW_RECRUITMENT") SESSION.recordSocialInteraction("CREW_SEARCH");
                    else if (modeName === "LOBBY" || modeName === "MATCHMAKING") SESSION.recordSocialInteraction("LOBBY_JOIN");
                }
                return modeName;
            }
        }
    }
    return "CLASSIC";
}

function assessServerQuality(ip, host, mode) {
    var score = 50;
    if (ip) {
        if (GUARD.isJordan(ip)) {
            score += 50;
            var city = GUARD.getJordanCity(ip);
            if (city === "AMMAN_CORE") score += 15;
            else if (city === "AMMAN_METRO") score += 12;
            else if (city === "IRBID" || city === "ZARQA") score += 8;
            else if (city === "AQABA") score += 6;
            else score += 5;
        }
    }
    var region = detectRegion(host, ip);
    if (region.region === "JORDAN") score += region.confidence * 0.3;
    var m = MODES[mode];
    if (m && m.socialPriority && !GUARD.isJordan(ip)) score -= 60;
    score = Math.max(0, Math.min(100, score));
    if (score >= 90) return "EXCELLENT";
    if (score >= 75) return "GOOD";
    if (score >= 60) return "FAIR";
    if (score >= 40) return "POOR";
    return "UNACCEPTABLE";
}

var CONNECTION = {
    profile: function() {
        var avg = PING.avg(5), best = PING.best(), socialAvg = PING.socialAvg();
        var type = "UNKNOWN", quality = "UNKNOWN";
        if (avg <= 5 && best <= 3) { type = "5G_ULTRA"; quality = "EXCELLENT"; }
        else if (avg <= 8 && best <= 5) { type = "5G_PREMIUM"; quality = "VERY_GOOD"; }
        else if (avg <= 12) { type = "5G_GOOD"; quality = "GOOD"; }
        else if (avg <= 20) { type = "4G_EXCELLENT"; quality = "GOOD"; }
        else if (avg <= 35) { type = "4G_GOOD"; quality = "FAIR"; }
        else { type = "WEAK"; quality = "POOR"; }
        SESSION.networkQuality = quality;
        return { type: type, quality: quality, avgPing: avg, bestPing: best, socialAvg: socialAvg, tier: this.getTier(type) };
    },
    getTier: function(type) {
        if (type.indexOf("5G_ULTRA") === 0 || type.indexOf("5G_PREMIUM") === 0) return 0;
        if (type.indexOf("5G") === 0 || type.indexOf("4G_EXCELLENT") === 0) return 1;
        return 2;
    },
    boost: function() {
        var profile = this.profile();
        if (profile.type === "5G_ULTRA") return 80;
        if (profile.type === "5G_PREMIUM") return 70;
        if (profile.type === "5G_GOOD") return 55;
        if (profile.type === "4G_EXCELLENT") return 40;
        if (profile.type === "4G_GOOD") return 25;
        return -30;
    },
    getCongestionLevel: function() {
        var variance = PING.variance();
        if (variance > 15) { SESSION.congestionLevel = 3; return "HIGH"; }
        if (variance > 8) { SESSION.congestionLevel = 2; return "MEDIUM"; }
        if (variance > 4) { SESSION.congestionLevel = 1; return "LOW"; }
        SESSION.congestionLevel = 0;
        return "NONE";
    }
};

var TIME = {
    isPeakHours: function() { var h = (new Date()).getHours(); return (h >= 16 || h <= 2); },
    isWeekend: function() { var d = (new Date()).getDay(); return (d === 5 || d === 6); },
    getBoost: function() {
        var peak = this.isPeakHours(), weekend = this.isWeekend();
        if (peak && weekend) return 30;
        if (peak || weekend) return 18;
        return 0;
    }
};

function getCarrier(ip) {
    if (!ip || (!isIPv4(ip) && !isIPv6(ip))) return "UNKNOWN";
    if (isIPv4(ip)) {
        if (isInNet(ip, "46.185.128.0", "255.255.128.0") ||
            isInNet(ip, "94.127.208.0", "255.255.240.0") ||
            isInNet(ip, "149.200.136.0", "255.255.252.0")) return "ORANGE";
        if (isInNet(ip, "79.173.192.0", "255.255.192.0") ||
            isInNet(ip, "109.237.192.0", "255.255.224.0") ||
            isInNet(ip, "176.28.0.0", "255.254.0.0")) return "ZAIN";
        if (isInNet(ip, "82.212.0.0", "255.255.0.0") ||
            isInNet(ip, "212.35.64.0", "255.255.192.0")) return "UMNIAH";
        if (isInNet(ip, "188.247.0.0", "255.255.0.0") ||
            isInNet(ip, "94.230.0.0", "255.255.0.0")) return "JT";
    }
    return "OTHER";
}

function getCarrierBonus(carrier) {
    if (carrier === "ORANGE") return 45;
    if (carrier === "ZAIN") return 42;
    if (carrier === "UMNIAH") return 38;
    if (carrier === "JT") return 28;
    return 0;
}

function calculateScoreAdvanced(ip, host, port, dns, mode) {
    let score = 0;

    // Local Bonus
    if (isIPv4(ip) && GUARD.isJordan(ip)) score += 200;
    else if (isIPv6(ip) && isJordanIPv6(ip)) score += 180;

    // Mode Priority Boost
    const modeData = MODES[mode];
    if (modeData) score += modeData.priority * 10;

    // Ping Factor
    const ping = PING.current();
    if (ping <= 5) score += 100;
    else if (ping <= 10) score += 70;
    else score -= 50;

    // Social Endpoint Bonus
    if (dns.socialEndpoint) score += 60;

    // Carrier Bonus
    const carrier = getCarrier(ip);
    score += getCarrierBonus(carrier);

    // ML Predictive Route
    const region = detectRegion(host, ip);
    const predicted = ML_LOCAL.suggestBestRoute(region.city);
    if (predicted) score += 40;

    return Math.max(0, Math.min(1000, score));
}

function selectRoute(mode, score, ip, port, host, dns) {
    var m = MODES[mode];
    if (!m) m = MODES["CLASSIC"];
    
    var strategy = m.strategy;
    var region = dns.region;
    var city = region.city || "UNKNOWN";
    var carrier = getCarrier(ip);
    var connProfile = CONNECTION.profile();
    
    if (m.gameState) SESSION.updateGameState(m.gameState);
    
    // Security Gate
    if (!GUARD.checkDestination(ip, host, mode)) return BLOOD.BLK;
    
    // ML Prediction
    if (CFG.ENABLE_ML_PREDICTION && SESSION.isWarm()) {
        const predicted = ML_LOCAL.suggestBestRoute(city);
        if (predicted && PING.isHealthy(mode)) {
            return predicted;
        }
    }
    
    // Sticky Check
    if (m.sticky && SESSION.isWarm()) {
        var sticky = stickyGet(mode + "_" + city);
        if (!sticky) sticky = stickyGet(mode);
        if (sticky && PING.isHealthy(mode) && !PING.needsOptimization()) {
            if (PING.quality(mode) === "EXCELLENT") stickyExtend(mode, 90000);
            return sticky;
        }
        
        stickyClear(mode);
        stickyClear(mode + "_" + city);
        
        var emergency = GUARD.buildChain(
            getBestProxies(0, null, 3, m.socialPriority),
            mode,
            { burst: true, ultraBurst: true, tier: 0, socialOptimized: m.socialPriority }
        );
        stickySet(mode, emergency, m.stickyDuration);
        return emergency;
    }
    
    var route = null;
    var requirements = {
        burst: m.requiresBurst || false,
        ultraBurst: m.ultraBurst || false,
        tier: connProfile.tier,
        socialOptimized: m.socialPriority || false
    };
    
    if (strategy === "SOCIAL_ULTRA_FORCE") {
        if (city && city !== "UNKNOWN" && CFG.REGIONAL_HOP_CHAINS) {
            var socialRegionalKey = "SOCIAL_" + (city.indexOf("AMMAN") !== -1 ? "AMMAN" : 
                (city.indexOf("IRBID") !== -1 || city === "RAMTHA" ? "IRBID" :
                (city.indexOf("ZARQA") !== -1 || city === "RUSAIFA" ? "ZARQA" : "NATIONAL")));
            
            var regionalHops = REGIONAL_HOPS[socialRegionalKey];
            if (!regionalHops) regionalHops = REGIONAL_HOPS["SOCIAL_NATIONAL"];
            
            if (regionalHops) {
                route = GUARD.buildChain(
                    regionalHops,
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            }
        }
        
        if (!route) {
            if (score >= 93 || (ip && GUARD.isJordan(ip) && city === "AMMAN_CORE")) {
                route = GUARD.buildChain(
                    ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1"],
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            } else if (score >= 85 || (ip && GUARD.isJordan(ip))) {
                route = GUARD.buildChain(
                    getBestProxies(0, carrier, 3, true),
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            } else if (score >= 70) {
                route = GUARD.buildChain(
                    getBestProxies(0, null, 3, true),
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            } else {
                route = GUARD.buildChain(
                    ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            }
        }
    }
    
    else if (strategy === "LOBBY_ULTRA_FORCE") {
        if (city && city !== "UNKNOWN" && CFG.REGIONAL_HOP_CHAINS) {
            var regionalChain = null;
            
            if (city.indexOf("AMMAN") !== -1) {
                if (city === "AMMAN_CORE") regionalChain = REGIONAL_HOPS["AMMAN_CORE"];
                else if (city === "AMMAN_METRO") regionalChain = REGIONAL_HOPS["AMMAN_METRO"];
                else if (city === "AMMAN_CITY") regionalChain = REGIONAL_HOPS["AMMAN_CITY"];
                else if (city === "AMMAN_SOUTH") regionalChain = REGIONAL_HOPS["AMMAN_SOUTH"];
                else if (city === "AMMAN_NORTH") regionalChain = REGIONAL_HOPS["AMMAN_NORTH"];
                else regionalChain = REGIONAL_HOPS["AMMAN_CORE"];
            } else if (city === "IRBID" || city === "IRBID_CITY" || city === "RAMTHA") {
                regionalChain = REGIONAL_HOPS["IRBID"];
            } else if (city === "ZARQA" || city === "ZARQA_CITY" || city === "RUSAIFA") {
                regionalChain = REGIONAL_HOPS["ZARQA"];
            } else if (city === "AQABA" || city === "AQABA_CITY") {
                regionalChain = REGIONAL_HOPS["AQABA"];
            } else if (city === "MAFRAQ") {
                regionalChain = REGIONAL_HOPS["MAFRAQ"];
            } else if (city === "KARAK") {
                regionalChain = REGIONAL_HOPS["KARAK"];
            } else if (city === "MADABA") {
                regionalChain = REGIONAL_HOPS["MADABA"];
            } else if (city === "BALQA" || city === "SALT") {
                regionalChain = REGIONAL_HOPS["BALQA"];
            } else if (city === "JERASH" || city === "AJLOUN") {
                regionalChain = REGIONAL_HOPS["JERASH"];
            } else if (city === "TAFILAH") {
                regionalChain = REGIONAL_HOPS["TAFILAH"];
            } else if (city === "MAAN") {
                regionalChain = REGIONAL_HOPS["MAAN"];
            } else if (city === "PETRA") {
                regionalChain = REGIONAL_HOPS["PETRA"];
            }
            
            if (regionalChain) {
                route = GUARD.buildChain(
                    regionalChain,
                    mode,
                    { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                );
            }
        }
        
        if (!route) {
            if (score >= 88 || (ip && GUARD.isJordan(ip))) {
                if (carrier === "ORANGE" || score >= 93) {
                    route = GUARD.buildChain(
                        getBestProxies(0, "ORANGE", 3, true),
                        mode,
                        { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                    );
                } else {
                    route = GUARD.buildChain(
                        getBestProxies(0, carrier, 3, true),
                        mode,
                        { burst: true, ultraBurst: true, tier: 0, socialOptimized: true }
                    );
                }
            } else {
                route = GUARD.buildChain(
                    ["ORANGE_ULTRA_1", "ZAIN_ULTRA_1", "UMNIAH_ULTRA_1"],
                    mode,
                    { burst: true, tier: 0, socialOptimized: true }
                );
            }
        }
    }
    
    else if (strategy === "SOCIAL_CRITICAL") {
        route = GUARD.buildChain(
            getBestProxies(0, carrier, 3, true),
            mode,
            { burst: true, tier: 0, socialOptimized: true }
        );
    }
    
    else if (strategy === "SOCIAL_GAME_CRITICAL") {
        if (score >= 83 || (ip && GUARD.isJordan(ip))) {
            route = GUARD.buildChain(
                getBestProxies(0, carrier, 3, true),
                mode,
                { burst: true, tier: 0, socialOptimized: true }
            );
        } else {
            route = GUARD.buildChain(
                getBestProxies(0, null, 3, false),
                mode,
                { burst: true, tier: 0 }
            );
        }
    }
    
    else if (strategy === "GAME_ULTRA_CRITICAL") {
        if (city && city !== "UNKNOWN" && CFG.REGIONAL_HOP_CHAINS && REGIONAL_HOPS[city]) {
            route = GUARD.buildChain(
                REGIONAL_HOPS[city],
                mode,
                { burst: true, ultraBurst: true, tier: 0 }
            );
        }
        
        if (!route) {
            if (score >= 88 || (ip && GUARD.isJordan(ip))) {
                route = GUARD.buildChain(
                    getBestProxies(0, carrier, 3, false),
                    mode,
                    { burst: true, ultraBurst: true, tier: 0 }
                );
            } else {
                route = GUARD.buildChain(
                    getBestProxies(0, null, 3, false),
                    mode,
                    { burst: true, tier: 0 }
                );
            }
        }
    }
    
    else if (strategy === "SECURE_CRITICAL") {
        route = GUARD.buildChain(
            ["ORANGE_ULTRA_1", "SOCIAL_ORANGE_1", "ZAIN_ULTRA_1"],
            mode,
            requirements
        );
    }
    
    else if (strategy === "GAME_CRITICAL") {
        if (score >= 83 || (ip && GUARD.isJordan(ip))) {
            route = GUARD.buildChain(
                getBestProxies(0, carrier, 3, false),
                mode,
                requirements
            );
        } else {
            route = GUARD.buildChain(
                getBestProxies(1, null, 3, false),
                mode,
                requirements
            );
        }
    }
    
    else {
        route = GUARD.buildChain(
            getBestProxies(0, null, 3, false),
            mode,
            requirements
        );
    }
    
    if (!route) {
        route = GUARD.buildChain(
            getBestProxies(0, null, 3, m.socialPriority),
            mode,
            { burst: true, tier: 0, socialOptimized: m.socialPriority }
        );
    }
    
    if (m.sticky) {
        stickySet(mode, route, m.stickyDuration);
        if (city && city !== "UNKNOWN") {
            stickySet(mode + "_" + city, route, m.stickyDuration);
        }
    }
    
    return route;
}

function FindProxyForURL(url, host) {
    SESSION.requests++;
    SESSION.updateTimeContext();
    
    if (SESSION.requests === 1) {
        if (CFG.PREFETCH_SOCIAL_DNS) prefetchSocialEndpoints();
    }
    
    if (!host) return BLOOD.DIR;
    var h = host.toLowerCase();
    
    if (isPlainHostName(host)) return BLOOD.DIR;
    
    if (isIPv4(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||
            isInNet(host, "127.0.0.0", "255.0.0.0")) {
            return BLOOD.DIR;
        }
    }
    
    if (containsAny(h, DIRECT_KEYS) && !containsAny(h, PUBG_KEYS)) {
        SESSION.directHits++;
        return BLOOD.DIR;
    }
    
    if (!containsAny(h, PUBG_KEYS)) {
        SESSION.directHits++;
        return BLOOD.DIR;
    }
    
    SESSION.pubgRequests++;
    
    var dns = fastDNS(host);
    var ip = dns.ip;
    var mode = dns.mode;
    var port = getPort(url);
    
    SESSION.recordMode(mode);
    
    if (ip && isIPv6(ip)) {
        if (CFG.JORDAN_ONLY_MODE || CFG.BLOCK_INTERNATIONAL) {
            if (!isJordanIPv6(ip)) {
                SESSION.blockedHits++;
                return BLOOD.BLK;
            }
        }
    }
    
    var score = calculateScoreAdvanced(ip, h, port, dns, mode);
    var route = selectRoute(mode, score, ip, port, h, dns);
    
    return route;
}

// Utility Functions
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

function isIPv6(str) {
    return str.includes(":");
}

function isJordanIPv6(ip) {
    for (let range of JO_IPV6_NETS) {
        let [base, mask] = range;
        if (ipv6InRange(ip, base, mask)) return true;
    }
    return false;
}

function ipv6InRange(ip, base, prefixLength) {
    try {
        const ipParts = ip.split(':');
        const baseParts = base.split(':');
        const fullParts = Math.floor(prefixLength / 16);
        const remainingBits = prefixLength % 16;
        
        for (let i = 0; i < fullParts; i++) {
            if (parseInt(ipParts[i] || '0', 16) !== parseInt(baseParts[i] || '0', 16)) {
                return false;
            }
        }
        
        if (remainingBits > 0) {
            const mask = (0xFFFF << (16 - remainingBits)) & 0xFFFF;
            const ipPart = parseInt(ipParts[fullParts] || '0', 16);
            const basePart = parseInt(baseParts[fullParts] || '0', 16);
            return (ipPart & mask) === (basePart & mask);
        }
        
        return true;
    } catch (e) {
        return false;
    }
}

function maskFromCIDR(cidr) {
    cidr = String(cidr);
    var masks = {
        "8": "255.0.0.0", "10": "255.192.0.0", "11": "255.224.0.0",
        "12": "255.240.0.0", "13": "255.248.0.0", "14": "255.252.0.0",
        "15": "255.254.0.0", "16": "255.255.0.0", "17": "255.255.128.0",
        "18": "255.255.192.0", "19": "255.255.224.0", "20": "255.255.240.0",
        "21": "255.255.248.0", "22": "255.255.252.0", "23": "255.255.254.0",
        "24": "255.255.255.0"
    };
    return masks[cidr] || "255.255.0.0";
}

function inRanges(ip, ranges) {
    if (!ip || (!isIPv4(ip) && !isIPv6(ip))) return false;
    if (isIPv4(ip)) {
        for (var i = 0; i < ranges.length; i++) {
            var base = ranges[i][0], cidr = ranges[i][1], mask = maskFromCIDR(cidr);
            if (isInNet(ip, base, mask)) return true;
        }
    }
    return false;
}

function containsAny(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

function getPort(url) {
    var match = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if (match) return parseInt(match[1], 10);
    if (url.indexOf("https://") === 0) return 443;
    if (url.indexOf("http://") === 0) return 80;
    return 443;
}

function generateLocalReport() {
    return {
        version: CFG.VERSION,
        timestamp: new Date().toISOString(),
        sessionLengthMs: SESSION.age(),
        jordanPlayersDiscovered: SESSION.jordanPlayersFound,
        totalRequests: SESSION.requests,
        avgPing: PING.avg(),
        bestPing: PING.best(),
        socialDiscoveryCount: SESSION.friendDiscoveries,
        crewRecruitments: SESSION.crewSearches,
        activeRegions: Object.keys(SESSION.regionalHits).length,
        topRegions: SESSION.regionalHits,
        healthiestProxies: getBestProxies(undefined, undefined, 5, false),
        mlLearnedRoutes: Object.keys(ML_LOCAL.regionalRoutes).length
    };
}

// ==PAC Script End==
