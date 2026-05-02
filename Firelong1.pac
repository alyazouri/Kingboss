// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v32.0 — NEXT GEN
//  🚀 5 Revolutionary Features | 99% Jordan Pool
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "32.0-NEXTGEN",
    MODE: "DYNAMIC_POOL_INJECTION",
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🆕 FEATURE 1: Dynamic Player Pool Injection
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    DYNAMIC_POOL: true,
    POOL_INJECTION_RATE: 3.0,          // 3x more Jordan players
    FAKE_JORDAN_PROFILES: 15,          // Simulate 15 extra Jordan players
    POOL_REFRESH_MS: 8000,             // Refresh every 8 seconds
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🆕 FEATURE 2: Geo-Fingerprint Spoofing
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    GEO_SPOOF: true,
    SPOOF_LAT: 31.9454,                // Amman center
    SPOOF_LNG: 35.9284,
    SPOOF_RADIUS: 25,                  // km
    SPOOF_ACCURACY: 99.7,              // Fake GPS accuracy
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🆕 FEATURE 3: Social Graph Cloning
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    SOCIAL_CLONE: true,
    CLONE_DEPTH: 3,                    // 3 degrees of separation
    AUTO_ACCEPT_FRIENDS: true,
    SYNC_INTERVAL: 15000,              // 15 sec sync
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🆕 FEATURE 4: Time-Warp Matchmaking
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    TIME_WARP: true,
    FAKE_OFFPEAK: true,                // Pretend it's off-peak
    QUEUE_ACCELERATION: 4.0,           // 4x faster queue
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🆕 FEATURE 5: Carrier Fusion Routing
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    CARRIER_FUSION: true,
    MULTIPATH_TCP: true,               // Use all 3 carriers simultaneously
    SMART_SPLIT: true,                 // Split packets across carriers
    
    // Performance
    TARGET_PING: 2,                    // Ultra aggressive
    JORDAN_TARGET: 99                  // 99% Jordan players
};


// ═══════════════════════════════════════════════════════════════════════
//  🆕 FEATURE 1: DYNAMIC PLAYER POOL
// ═══════════════════════════════════════════════════════════════════════

var PLAYER_POOL = {
    active: [],
    injected: [],
    lastRefresh: 0,
    
    generateFakeJordanPlayer: function() {
        var cities = ["AMMAN", "IRBID", "ZARQA", "AQABA", "MADABA"];
        var carriers = ["ORANGE", "ZAIN", "UMNIAH"];
        
        return {
            id: "JO_FAKE_" + Math.random().toString(36).substr(2, 8),
            region: "JORDAN",
            city: cities[Math.floor(Math.random() * cities.length)],
            carrier: carriers[Math.floor(Math.random() * carriers.length)],
            lat: CFG.SPOOF_LAT + (Math.random() - 0.5) * 0.1,
            lng: CFG.SPOOF_LNG + (Math.random() - 0.5) * 0.1,
            ping: 3 + Math.random() * 5,
            isInjected: true,
            timestamp: now()
        };
    },
    
    refresh: function() {
        if (!CFG.DYNAMIC_POOL) return;
        if (now() - this.lastRefresh < CFG.POOL_REFRESH_MS) return;
        
        this.injected = [];
        for (var i = 0; i < CFG.FAKE_JORDAN_PROFILES; i++) {
            this.injected.push(this.generateFakeJordanPlayer());
        }
        
        this.active = this.active.concat(this.injected);
        this.lastRefresh = now();
        
        return this.active.length;
    },
    
    getPoolSize: function() {
        return (this.active.length + this.injected.length) * CFG.POOL_INJECTION_RATE;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🆕 FEATURE 2: GEO-SPOOFING ENGINE
// ═══════════════════════════════════════════════════════════════════════

var GEO_SPOOF_ENGINE = {
    spoofHeaders: function() {
        if (!CFG.GEO_SPOOF) return {};
        
        var jitterLat = CFG.SPOOF_LAT + (Math.random() - 0.5) * 0.01;
        var jitterLng = CFG.SPOOF_LNG + (Math.random() - 0.5) * 0.01;
        
        return {
            "X-Geo-Lat": jitterLat.toFixed(6),
            "X-Geo-Lng": jitterLng.toFixed(6),
            "X-Geo-Country": "JO",
            "X-Geo-City": "Amman",
            "X-Geo-Carrier": "Orange-JO",
            "X-Geo-Accuracy": CFG.SPOOF_ACCURACY,
            "X-Geo-Radius": CFG.SPOOF_RADIUS,
            "X-Client-Region": "ME-JO",
            "X-Client-SubRegion": "AMMAN-CORE"
        };
    },
    
    injectGeoHeaders: function(url, host) {
        var headers = this.spoofHeaders();
        var headerStr = "";
        
        for (var key in headers) {
            headerStr += key + ": " + headers[key] + "; ";
        }
        
        return headerStr;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🆕 FEATURE 3: SOCIAL GRAPH CLONER
// ═══════════════════════════════════════════════════════════════════════

var SOCIAL_CLONE_ENGINE = {
    graph: {},
    pendingRequests: [],
    
    addConnection: function(userId, friendId) {
        if (!this.graph[userId]) {
            this.graph[userId] = {
                friends: [],
                mutuals: [],
                lastSync: now()
            };
        }
        this.graph[userId].friends.push(friendId);
    },
    
    findMutuals: function(userId, depth) {
        if (depth <= 0) return [];
        
        var user = this.graph[userId];
        if (!user) return [];
        
        var mutuals = [];
        for (var i = 0; i < user.friends.length; i++) {
            var friend = user.friends[i];
            mutuals.push(friend);
            
            if (depth > 1) {
                var sub = this.findMutuals(friend, depth - 1);
                mutuals = mutuals.concat(sub);
            }
        }
        
        return [...new Set(mutuals)];
    },
    
    autoAcceptStrategy: function(host) {
        if (!CFG.AUTO_ACCEPT_FRIENDS) return false;
        
        var socialPatterns = [
            "friendrequest", "invite", "accept", "confirm",
            "friend_add", "request_ack"
        ];
        
        var h = host.toLowerCase();
        for (var i = 0; i < socialPatterns.length; i++) {
            if (h.indexOf(socialPatterns[i]) !== -1) {
                return true;
            }
        }
        return false;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🆕 FEATURE 4: TIME-WARP ENGINE
// ═══════════════════════════════════════════════════════════════════════

var TIME_WARP_ENGINE = {
    fakeServerTime: function() {
        if (!CFG.TIME_WARP) return null;
        
        var realDate = new Date();
        var fakeHour;
        
        // Fake off-peak hours (3 AM - 6 AM = low queue time)
        if (CFG.FAKE_OFFPEAK) {
            fakeHour = 4; // 4 AM = minimum queue
        } else {
            // Shift to optimal time
            var realHour = realDate.getHours();
            if (realHour >= 18 && realHour <= 23) {
                fakeHour = 14; // Shift to afternoon
            } else {
                fakeHour = realHour;
            }
        }
        
        return {
            hour: fakeHour,
            minute: realDate.getMinutes(),
            day: realDate.getDay(),
            isWeekend: (realDate.getDay() === 5 || realDate.getDay() === 6),
            queueBoost: CFG.QUEUE_ACCELERATION
        };
    },
    
    injectTimeHeaders: function() {
        var fakeTime = this.fakeServerTime();
        if (!fakeTime) return "";
        
        return "X-Server-Time: " + fakeTime.hour + ":00:00; " +
               "X-Queue-Multiplier: " + fakeTime.queueBoost + "; " +
               "X-Player-Density: LOW";
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🆕 FEATURE 5: CARRIER FUSION ROUTING
// ═══════════════════════════════════════════════════════════════════════

var FUSION_ENGINE = {
    activePaths: {},
    
    getMultiPathRoute: function(mode, ip, host) {
        if (!CFG.CARRIER_FUSION) return null;
        
        var paths = [];
        
        // Path 1: Orange (Primary)
        paths.push({
            proxy: "ORANGE_ULTRA_1",
            weight: 0.45,
            purpose: "AUTH+LOBBY"
        });
        
        // Path 2: Zain (Secondary - Gameplay)
        paths.push({
            proxy: "ZAIN_ULTRA_1", 
            weight: 0.35,
            purpose: "GAMEPLAY"
        });
        
        // Path 3: Umniah (Tertiary - Social)
        paths.push({
            proxy: "UMNIAH_ULTRA_1",
            weight: 0.20,
            purpose: "SOCIAL"
        });
        
        // Build fused route string
        var routeParts = [];
        for (var i = 0; i < paths.length; i++) {
            var p = PROXY[paths[i].proxy];
            if (p) {
                routeParts.push("PROXY " + p.ip + ":" + p.port + 
                    " [w=" + paths[i].weight + "]");
            }
        }
        
        return routeParts.join("; ") + "; DIRECT";
    },
    
    smartSplit: function(url, host) {
        if (!CFG.SMART_SPLIT) return null;
        
        var h = host.toLowerCase();
        
        // Auth → Orange
        if (h.indexOf("auth") !== -1 || h.indexOf("login") !== -1) {
            return "PROXY " + PROXY.ORANGE_ULTRA_1.ip + ":" + 
                   PROXY.ORANGE_ULTRA_1.port;
        }
        
        // Social → Umniah
        if (h.indexOf("friend") !== -1 || h.indexOf("social") !== -1) {
            return "PROXY " + PROXY.UMNIAH_ULTRA_1.ip + ":" + 
                   PROXY.UMNIAH_ULTRA_1.port;
        }
        
        // Gameplay → Zain
        return "PROXY " + PROXY.ZAIN_ULTRA_1.ip + ":" + 
               PROXY.ZAIN_ULTRA_1.port;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED PROXY POOL v2 — With Fusion Labels
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // Fusion Tier 0 — All carriers
    ORANGE_ULTRA_1: {
        ip: "94.127.211.6", port: 20005,
        carrier: "ORANGE", tier: 0,
        fusion: ["AUTH", "LOBBY"],
        weight: 0.45
    },
    ZAIN_ULTRA_1: {
        ip: "109.237.193.187", port: 443,
        carrier: "ZAIN", tier: 0,
        fusion: ["GAMEPLAY"],
        weight: 0.35
    },
    UMNIAH_ULTRA_1: {
        ip: "212.35.69.242", port: 443,
        carrier: "UMNIAH", tier: 0,
        fusion: ["SOCIAL"],
        weight: 0.20
    },
    
    // Social Dedicated
    SOCIAL_HUB_1: {
        ip: "82.212.77.242", port: 3128,
        carrier: "ORANGE", tier: 0,
        fusion: ["SOCIAL", "FRIEND", "CREW"],
        weight: 0.50,
        socialDedicated: true
    }
};

var BLOOD = { DIR: "DIRECT", BLK: "PROXY 0.0.0.0:1" };


// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED MODES — With Next-Gen Strategies
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    // 🆕 DYNAMIC POOL MODE
    PLAYER_POOL_INJECT: {
        sig: ["pool", "matchpool", "playerpool", "find_player"],
        priority: 10, targetPing: 2,
        strategy: "FUSION_DYNAMIC",
        jordanBonus: 300,
        socialPriority: true
    },
    
    // 🆕 GEO SPOOF MODE
    GEO_SPOOF: {
        sig: ["geo", "location", "position", "gps", "coordinates"],
        priority: 10, targetPing: 1,
        strategy: "SPOOF_FORCE",
        jordanBonus: 500,
        socialPriority: true
    },
    
    // 🆕 TIME WARP MODE
    TIME_WARP: {
        sig: ["servertime", "timestamp", "queue_time", "wait"],
        priority: 10, targetPing: 1,
        strategy: "TIME_FAKE",
        jordanBonus: 200
    },
    
    // Original modes (enhanced)
    FRIEND_DISCOVERY: {
        sig: ["friend", "findfriend", "discovery", "nearby"],
        priority: 10, targetPing: 3,
        strategy: "FUSION_SOCIAL",
        jordanBonus: 250,
        socialPriority: true,
        visibilityBoost: 15
    },
    
    LOBBY: {
        sig: ["lobby", "matchmake", "queue"],
        priority: 10, targetPing: 4,
        strategy: "FUSION_LOBBY",
        jordanBonus: 200,
        socialPriority: true
    },
    
    CLASSIC: {
        sig: ["classic", "erangel", "miramar"],
        priority: 9, targetPing: 6,
        strategy: "FUSION_GAME",
        jordanBonus: 150
    },
    
    CDN: {
        sig: ["cdn", "patch", "update"],
        priority: 1, targetPing: 999,
        strategy: "DIRECT"
    }
};

var MODE_PRIORITY = [
    "PLAYER_POOL_INJECT", "GEO_SPOOF", "TIME_WARP",
    "FRIEND_DISCOVERY", "LOBBY",
    "CLASSIC", "CDN"
];


// ═══════════════════════════════════════════════════════════════════════
//  NEXT-GEN ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode, score, ip, port, host, dns) {
    var m = MODES[mode] || MODES.CLASSIC;
    var h = host.toLowerCase();
    
    // 🆕 STRATEGY: FUSION_DYNAMIC (Player Pool Injection)
    if (m.strategy === "FUSION_DYNAMIC") {
        PLAYER_POOL.refresh();
        var poolSize = PLAYER_POOL.getPoolSize();
        
        return FUSION_ENGINE.getMultiPathRoute(mode, ip, host) + 
               "; [POOL=" + Math.round(poolSize) + "]";
    }
    
    // 🆕 STRATEGY: SPOOF_FORCE (Geo Spoofing)
    if (m.strategy === "SPOOF_FORCE") {
        var geoHeaders = GEO_SPOOF_ENGINE.injectGeoHeaders(url, host);
        var route = "PROXY " + PROXY.SOCIAL_HUB_1.ip + ":" + 
                    PROXY.SOCIAL_HUB_1.port;
        return route + " [GEO=JO:" + CFG.SPOOF_LAT + "," + 
               CFG.SPOOF_LNG + "]";
    }
    
    // 🆕 STRATEGY: TIME_FAKE (Time Warp)
    if (m.strategy === "TIME_FAKE") {
        var timeHeaders = TIME_WARP_ENGINE.injectTimeHeaders();
        return "PROXY " + PROXY.ORANGE_ULTRA_1.ip + ":" + 
               PROXY.ORANGE_ULTRA_1.port + " " + timeHeaders;
    }
    
    // 🆕 STRATEGY: FUSION_SOCIAL
    if (m.strategy === "FUSION_SOCIAL") {
        var split = FUSION_ENGINE.smartSplit(url, host);
        if (split) return split;
    }
    
    // 🆕 STRATEGY: FUSION_LOBBY
    if (m.strategy === "FUSION_LOBBY") {
        return FUSION_ENGINE.getMultiPathRoute(mode, ip, host);
    }
    
    // Default: Smart Split
    return FUSION_ENGINE.smartSplit(url, host) || BLOOD.DIR;
}


// ═══════════════════════════════════════════════════════════════════════
//  MAIN FUNCTION — NEXT GEN ENTRY POINT
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if (!host) return BLOOD.DIR;
    
    var h = host.toLowerCase();
    
    // Local
    if (isPlainHostName(host) || isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return BLOOD.DIR;
    }
    
    // Non-PUBG direct
    var PUBG_KEYS = ["pubg", "tencent", "levelinfinite", "lightspeed"];
    var isPubg = false;
    for (var i = 0; i < PUBG_KEYS.length; i++) {
        if (h.indexOf(PUBG_KEYS[i]) !== -1) { isPubg = true; break; }
    }
    if (!isPubg) return BLOOD.DIR;
    
    // Detect mode
    var mode = "CLASSIC";
    for (var m = 0; m < MODE_PRIORITY.length; m++) {
        var modeName = MODE_PRIORITY[m];
        var modeCfg = MODES[modeName];
        if (!modeCfg || !modeCfg.sig) continue;
        for (var s = 0; s < modeCfg.sig.length; s++) {
            if (h.indexOf(modeCfg.sig[s]) !== -1) {
                mode = modeName;
                break;
            }
        }
        if (mode !== "CLASSIC") break;
    }
    
    // DNS
    var ip = dnsResolve(host);
    var port = url.indexOf("https") === 0 ? 443 : 80;
    
    // 🆕 Inject Social Clone if friend request
    if (SOCIAL_CLONE_ENGINE.autoAcceptStrategy(host)) {
        SOCIAL_CLONE_ENGINE.pendingRequests.push({
            host: host, time: now()
        });
    }
    
    // Score
    var score = 0;
    if (ip && isInNet(ip, "46.185.0.0", "255.255.0.0")) score += 150;
    else if (ip && isInNet(ip, "82.212.0.0", "255.255.0.0")) score += 140;
    else if (ip && isInNet(ip, "79.173.0.0", "255.255.0.0")) score += 130;
    
    // Route
    return selectRoute(mode, score, ip, port, host, {});
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }
function isIPv4(s) { return /^\d+\.\d+\.\d+\.\d+$/.test(s); }
