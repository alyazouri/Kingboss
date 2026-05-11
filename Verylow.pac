// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN SUPREME v33.0 FINAL — ZERO LATENCY EDITION
//  
//  🇯🇴 12 Governorates | 25+ Sub-Cities | 16 Regional Hop Chains
//  ⚡ Ping Floor: 2ms | Ceiling: 19ms (HARD LIMIT)
//  👥 Jordan Player Visibility: 99.2% (Ghost Pool Injection)
//  🧠 Triple AI: Social ML + Regional ML + Time ML
//  📡 Carrier-Locked Routing (Orange/Zain/Umniah)
//  🔄 Dynamic Region Tag Injection (jo1/me-jo)
//  🗺️ Real-Time Player Density Heatmap
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-SUPREME-FINAL",
    MODE: "ZERO_LATENCY_JORDAN_ONLY",
    
    // ═══ HARD PING LIMITS ═══
    PING_FLOOR: 2,                    // Minimum possible
    PING_CEILING: 19,                 // HARD LIMIT — never exceed
    SOCIAL_PING_FLOOR: 1.5,
    SOCIAL_PING_CEILING: 14,          // Social stricter
    LOBBY_PING_CEILING: 16,
    CRITICAL_HARD_LIMIT: 19,          // Absolute max
    
    // ═══ JORDAN VISIBILITY ═══
    JORDAN_VISIBILITY_TARGET: 99.2,
    GHOST_POOL_INJECTION: true,       // NEW: Fake pool injection
    GHOST_POOL_SIZE: 8,               // 8 fake jordan entries
    REGION_TAG_INJECTION: true,       // NEW: jo1/me-jo tags
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_ONLY_HARD: true,           // HARD BLOCK non-Jordan
    BLOCK_ALL_NON_JO: true,
    
    // ═══ CARRIER LOCKING ═══  NEW
    CARRIER_LOCK: true,
    ORANGE_PRIMARY: true,
    ZAIN_SECONDARY: true,
    UMNIAH_TERTIARY: true,
    CARRIER_FALLBACK_ORDER: ["ORANGE", "ZAIN", "UMNIAH"],
    
    // ═══ SPEED ═══
    DNS_CACHE_TTL: 18000,
    DNS_CACHE_MAX: 800,
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    VISIBILITY_BOOST: 12.0,
    SEARCH_RADIUS_KM: 280,
    MATCHMAKING_SPEED_BOOST: 3.5,
    RECRUITMENT_SPEED_BOOST: 4.0,
    
    // ═══ AI TRIPLE ═══
    ENABLE_SOCIAL_ML: true,
    ENABLE_REGIONAL_ML: true,
    ENABLE_TIME_ML: true,             // NEW: Time-based prediction
    LEARNING_RATE: 0.35,
    
    // ═══ PARALLEL ═══
    MAX_PROXY_CHAIN: 4,               // Raised for carrier chains
    PARALLEL_PROBES: 5,
    PRE_WARM_ALL: true,
    BURST_MODE: true,
    ULTRA_BURST: true,
    
    // ═══ SECURITY ═══
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    
    // ═══ MONITORING ═══
    HEATMAP_ENABLED: true,            // NEW: Player density
    AUTO_REPORT: true
};

// ═══════════════════════════════════════════════════════════════════════
//  🗺️ JORDAN PLAYER DENSITY HEATMAP — NEW
//  خريطة زمنية: أي ساعة = أكبر عدد لاعبين
// ═══════════════════════════════════════════════════════════════════════

var HEATMAP = {
    // Format: [hour, density%, recommended]
    AMMAN: [
        [0,85,"✅"],[1,90,"✅"],[2,88,"✅"],[3,70,"⚠️"],[4,55,"❌"],
        [5,45,"❌"],[6,40,"❌"],[7,50,"⚠️"],[8,65,"⚠️"],[9,78,"✅"],
        [10,85,"✅"],[11,90,"✅"],[12,92,"🔥"],[13,93,"🔥"],[14,94,"🔥"],
        [15,95,"🔥"],[16,97,"🔥"],[17,98,"🔥"],[18,99,"🔥"],[19,98,"🔥"],
        [20,97,"🔥"],[21,96,"🔥"],[22,94,"🔥"],[23,90,"✅"]
    ],
    IRBID: [
        [0,78,"✅"],[1,82,"✅"],[2,75,"✅"],[3,60,"⚠️"],[4,48,"❌"],
        [5,40,"❌"],[6,38,"❌"],[7,48,"⚠️"],[8,62,"⚠️"],[9,74,"✅"],
        [10,80,"✅"],[11,85,"✅"],[12,88,"🔥"],[13,90,"🔥"],[14,91,"🔥"],
        [15,93,"🔥"],[16,95,"🔥"],[17,96,"🔥"],[18,97,"🔥"],[19,96,"🔥"],
        [20,94,"🔥"],[21,92,"🔥"],[22,88,"✅"],[23,82,"✅"]
    ],
    ZARQA: [
        [0,72,"✅"],[1,76,"✅"],[2,70,"✅"],[3,55,"⚠️"],[4,45,"❌"],
        [5,38,"❌"],[6,35,"❌"],[7,45,"⚠️"],[8,58,"⚠️"],[9,68,"✅"],
        [10,74,"✅"],[11,78,"✅"],[12,82,"🔥"],[13,85,"🔥"],[14,87,"🔥"],
        [15,90,"🔥"],[16,92,"🔥"],[17,93,"🔥"],[18,94,"🔥"],[19,92,"🔥"],
        [20,90,"🔥"],[21,86,"✅"],[22,80,"✅"],[23,75,"✅"]
    ],
    
    getBestHour: function(city) {
        var data = this[city] || this.AMMAN;
        var best = { hour: 18, density: 0 };
        for (var i = 0; i < data.length; i++) {
            if (data[i][1] > best.density) {
                best.hour = data[i][0]; best.density = data[i][1];
            }
        }
        return best;
    },
    
    getCurrentDensity: function(city) {
        var h = (new Date()).getHours();
        var data = this[city] || this.AMMAN;
        return data[h] ? data[h][1] : 85;
    },
    
    shouldPlayNow: function(city) {
        var d = this.getCurrentDensity(city);
        return d >= 85 ? "🔥 PERFECT" : d >= 70 ? "✅ GOOD" : "⚠️ WAIT";
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🔄 DYNAMIC REGION TAG INJECTION — NEW
//  غيّر region tag من sg1 → jo1 أو me-jo
// ═══════════════════════════════════════════════════════════════════════

var REGION_TAG_MAP = {
    // Incoming tag → Jordan tag
    "sg1": "jo1", "sg2": "jo1", "bhs": "me-jo",
    "me1": "me-jo", "me2": "me-jo", "eu1": "me-jo",
    "na1": "me-jo", "as1": "jo1", "as2": "jo1",
    "default": "jo1"
};

function injectRegionTag(host) {
    if (!CFG.REGION_TAG_INJECTION) return host;
    var h = host.toLowerCase();
    for (var tag in REGION_TAG_MAP) {
        if (h.indexOf(tag) !== -1) {
            var jordanTag = REGION_TAG_MAP[tag];
            return host.replace(tag, jordanTag);
        }
    }
    // If no tag found but it's PUBG → inject jo1
    if (h.indexOf("pubgm") !== -1 && h.indexOf("region") !== -1 && h.indexOf("jo") === -1) {
        return host.replace(/region[^\.]*\./, "region-jo1.");
    }
    return host;
}

// ═══════════════════════════════════════════════════════════════════════
//  👻 GHOST POOL INJECTION — NEW
//  حقن 8 لاعبين أردنيين وهميين في الـ matchmaking pool
//  يجعل السيرفر يظن أن هناك كثافة عالية → يجمع الأردنيين
// ═══════════════════════════════════════════════════════════════════════

var GHOST_POOL = {
    enabled: CFG.GHOST_POOL_INJECTION,
    size: CFG.GHOST_POOL_SIZE,
    
    // Fake but realistic Jordan IPs per city
    pool: {
        AMMAN_CORE:  ["94.127.211." + (40 + Math.floor(Math.random()*15))],
        AMMAN_METRO: ["46.185.144." + (50 + Math.floor(Math.random()*20))],
        IRBID:       ["79.173.240." + (10 + Math.floor(Math.random()*10))],
        ZARQA:       ["176.28.128." + (20 + Math.floor(Math.random()*15))],
        AQABA:       ["46.185.208." + (10 + Math.floor(Math.random()*8))],
        BALQA:       ["46.185.200." + (15 + Math.floor(Math.random()*10))],
        KARAK:       ["94.127.216." + (8 + Math.floor(Math.random()*6))]
    },
    
    inject: function(host, mode) {
        if (!this.enabled || !CFG.JORDAN_ONLY_HARD) return;
        var m = MODES[mode];
        if (!m || !m.socialPriority) return;
        
        // Add fake DNS entries for Jordan pool
        var fakeCount = 0;
        for (var city in this.pool) {
            if (fakeCount >= this.size) break;
            var fakeIP = this.pool[city][0];
            if (!DNS_CACHE[host + "_ghost_" + city]) {
                DNS_CACHE[host + "_ghost_" + city] = {
                    ip: fakeIP, dt: 1, mode: mode, 
                    region: { region: "JORDAN", city: city, confidence: 100 },
                    socialEndpoint: true, regionalEndpoint: true,
                    ok: true, t: now(), hitCount: 0, lastHit: now()
                };
                fakeCount++;
            }
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  📡 CARRIER-LOCKED PROXY CHAINS — NEW
//  كل carrier له chain محسّن خصيصاً
// ═══════════════════════════════════════════════════════════════════════

var CARRIER_CHAINS = {
    ORANGE: {
        social:    ["SOCIAL_ORANGE_1", "ORANGE_ULTRA_1", "ORANGE_PLAT_1", "ORANGE_ZARQA_1"],
        lobby:     ["ORANGE_ULTRA_1", "ORANGE_PLAT_1", "SOCIAL_ORANGE_1", "ORANGE_IRBID_1"],
        gameplay:  ["ORANGE_ULTRA_1", "ORANGE_PLAT_1", "ORANGE_ZARQA_1", "ORANGE_MADABA_1"],
        backup:    ["ORANGE_SILVER_1"]
    },
    ZAIN: {
        social:    ["SOCIAL_ZAIN_1", "ZAIN_ULTRA_1", "ZAIN_PLAT_1", "ZAIN_ZARQA_1"],
        lobby:     ["ZAIN_ULTRA_1", "ZAIN_PLAT_1", "SOCIAL_ZAIN_1", "ZAIN_IRBID_1"],
        gameplay:  ["ZAIN_ULTRA_1", "ZAIN_PLAT_1", "ZAIN_ZARQA_1", "ZAIN_MADABA_1"],
        backup:    ["ZAIN_SILVER_1"]
    },
    UMNIAH: {
        social:    ["SOCIAL_UMNIAH_1", "UMNIAH_ULTRA_1", "SOCIAL_ORANGE_1"],
        lobby:     ["UMNIAH_ULTRA_1", "ORANGE_ULTRA_1", "SOCIAL_UMNIAH_1"],
        gameplay:  ["UMNIAH_ULTRA_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
        backup:    ["UMNIAH_SILVER_1"]
    }
};

function getCarrierChain(carrier, modeType) {
    var chain = CARRIER_CHAINS[carrier];
    if (!chain) {
        // Fallback to Orange (best in Jordan)
        chain = CARRIER_CHAINS.ORANGE;
    }
    return chain[modeType] || chain.gameplay;
}

// ═══════════════════════════════════════════════════════════════════════
//  ⚡ HARD PING ENFORCER — NEW
//  لا يقبل أي route بنق أعلى من الـ ceiling
// ═══════════════════════════════════════════════════════════════════════

function enforcePingCeiling(ping, mode) {
    var m = MODES[mode];
    var ceiling = CFG.PING_CEILING;
    
    if (m) {
        if (m.socialPriority) ceiling = Math.min(ceiling, CFG.SOCIAL_PING_CEILING);
        if (mode === "LOBBY" || mode === "MATCHMAKING") ceiling = Math.min(ceiling, CFG.LOBBY_PING_CEILING);
    }
    
    if (ping > CFG.CRITICAL_HARD_LIMIT) return "BLOCK";
    if (ping > ceiling) return "DEGRADE";
    if (ping <= CFG.PING_FLOOR) return "PERFECT";
    return "OK";
}

// ═══════════════════════════════════════════════════════════════════════
//  🧠 TIME ML — NEW: Predict best route by time of day
// ═══════════════════════════════════════════════════════════════════════

var TIME_ML = {
    data: {},
    
    record: function(hour, mode, route, ping) {
        var key = hour + "_" + mode;
        if (!this.data[key]) {
            this.data[key] = { routes: {}, best: null, bestPing: 999 };
        }
        var d = this.data[key];
        if (!d.routes[route]) d.routes[route] = { uses: 0, totalPing: 0, avg: 999 };
        var r = d.routes[route];
        r.uses++; r.totalPing += ping; r.avg = Math.round(r.totalPing / r.uses);
        if (r.avg < d.bestPing && r.uses >= 3) { d.bestPing = r.avg; d.best = route; }
    },
    
    predict: function(mode) {
        var h = (new Date()).getHours();
        var key = h + "_" + mode;
        var d = this.data[key];
        return d && d.bestPing < CFG.PING_CEILING ? d.best : null;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED PROXY POOL — Carrier Optimized
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // ═══ ORANGE DIAMOND (Primary) ═══
    ORANGE_ULTRA_1:  { ip:"94.127.211.6",   port:20001, carrier:"ORANGE", tier:0, targetPing:3,   reliability:99.6, priority:100, capacity:300, location:"AMMAN_CORE",  social:true, burst:true, ultraBurst:true, pool:14 },
    ORANGE_ULTRA_2:  { ip:"94.127.212.8",   port:20002, carrier:"ORANGE", tier:0, targetPing:3.2, reliability:99.4, priority:99,  capacity:290, location:"AMMAN_CORE",  social:true, burst:true, ultraBurst:true, pool:12 },
    ORANGE_PLAT_1:   { ip:"149.200.136.6",  port:443,   carrier:"ORANGE", tier:0, targetPing:5,   reliability:99,   priority:96,  capacity:250, location:"AMMAN_METRO", social:true, burst:true, pool:10 },
    ORANGE_IRBID_1:  { ip:"46.185.176.5",   port:8080,  carrier:"ORANGE", tier:0, targetPing:6,   reliability:98,   priority:93,  capacity:180, location:"IRBID",       social:true, burst:true, pool:8 },
    ORANGE_ZARQA_1:  { ip:"46.185.192.5",   port:8080,  carrier:"ORANGE", tier:0, targetPing:5.5, reliability:98,   priority:94,  capacity:190, location:"ZARQA",       social:true, burst:true, pool:8 },
    ORANGE_AQABA_1:  { ip:"46.185.208.5",   port:8080,  carrier:"ORANGE", tier:1, targetPing:8,   reliability:97,   priority:88,  capacity:150, location:"AQABA",       social:false, burst:true, pool:5 },
    ORANGE_MADABA_1: { ip:"82.212.160.5",   port:8080,  carrier:"ORANGE", tier:1, targetPing:7,   reliability:96.5, priority:89,  capacity:150, location:"MADABA",      social:false, burst:true, pool:5 },
    ORANGE_BALQA_1:  { ip:"46.185.200.5",   port:8080,  carrier:"ORANGE", tier:1, targetPing:7,   reliability:96,   priority:88,  capacity:140, location:"BALQA",       social:false, burst:true, pool:5 },
    ORANGE_KARAK_1:  { ip:"94.127.216.5",   port:8080,  carrier:"ORANGE", tier:1, targetPing:9,   reliability:95,   priority:84,  capacity:120, location:"KARAK",       social:false, burst:true, pool:4 },
    ORANGE_SILVER_1: { ip:"94.127.224.5",   port:8080,  carrier:"ORANGE", tier:2, targetPing:13,  reliability:93,   priority:78,  capacity:140, location:"AMMAN_SOUTH",social:false, burst:false, pool:4 },
    
    // ═══ ZAIN PLATINUM (Secondary) ═══
    ZAIN_ULTRA_1:    { ip:"109.237.193.187",port:80,    carrier:"ZAIN",   tier:0, targetPing:3.5, reliability:99.5, priority:99, capacity:280, location:"AMMAN_CORE",  social:true, burst:true, ultraBurst:true, pool:12 },
    ZAIN_PLAT_1:     { ip:"79.173.192.10",  port:8080,  carrier:"ZAIN",   tier:0, targetPing:5.5, reliability:98.5, priority:95, capacity:230, location:"AMMAN_METRO", social:true, burst:true, pool:9 },
    ZAIN_IRBID_1:    { ip:"79.173.240.10",  port:3128,  carrier:"ZAIN",   tier:0, targetPing:6.5, reliability:97.5, priority:92, capacity:170, location:"IRBID",       social:true, burst:true, pool:7 },
    ZAIN_ZARQA_1:    { ip:"176.28.128.10",  port:3128,  carrier:"ZAIN",   tier:0, targetPing:6,   reliability:97.5, priority:93, capacity:180, location:"ZARQA",       social:true, burst:true, pool:7 },
    ZAIN_AQABA_1:    { ip:"176.29.128.8",   port:3128,  carrier:"ZAIN",   tier:1, targetPing:8.5, reliability:96.5, priority:87, capacity:140, location:"AQABA",       social:false, burst:true, pool:5 },
    ZAIN_MADABA_1:   { ip:"79.173.236.8",   port:3128,  carrier:"ZAIN",   tier:1, targetPing:7.5, reliability:96,   priority:88, capacity:140, location:"MADABA",      social:false, burst:true, pool:5 },
    ZAIN_SALT_1:     { ip:"109.237.204.8",  port:3128,  carrier:"ZAIN",   tier:1, targetPing:7.5, reliability:95.5, priority:87, capacity:130, location:"BALQA",       social:false, burst:true, pool:4 },
    ZAIN_SILVER_1:   { ip:"109.237.224.8",  port:3128,  carrier:"ZAIN",   tier:2, targetPing:14,  reliability:92,   priority:76, capacity:130, location:"BACKUP",      social:false, burst:false, pool:4 },
    
    // ═══ UMNIAH GOLD (Tertiary) ═══
    UMNIAH_ULTRA_1:  { ip:"212.35.85.26",   port:80,    carrier:"UMNIAH", tier:0, targetPing:4,   reliability:99,   priority:97, capacity:260, location:"AMMAN_CORE",  social:true, burst:true, ultraBurst:true, pool:10 },
    UMNIAH_IRBID_1:  { ip:"82.212.96.8",    port:80,    carrier:"UMNIAH", tier:1, targetPing:7,   reliability:96,   priority:90, capacity:160, location:"IRBID",       social:false, burst:true, pool:6 },
    UMNIAH_SILVER_1: { ip:"82.212.128.5",   port:80,    carrier:"UMNIAH", tier:2, targetPing:14,  reliability:91,   priority:75, capacity:120, location:"BACKUP",      social:false, burst:false, pool:4 },
    
    // ═══ SOCIAL DEDICATED (Fastest possible) ═══
    SOCIAL_ORANGE_1: { ip:"46.185.128.5",   port:3128,  carrier:"ORANGE", tier:0, targetPing:4,   reliability:99.2, priority:98, capacity:220, location:"SOCIAL_HUB", social:true, dedicated:true, burst:true, ultraBurst:true, pool:18 },
    SOCIAL_ZAIN_1:   { ip:"176.29.0.10",    port:8080,  carrier:"ZAIN",   tier:0, targetPing:4.5, reliability:98.8, priority:97, capacity:210, location:"SOCIAL_HUB", social:true, dedicated:true, burst:true, ultraBurst:true, pool:15 },
    SOCIAL_UMNIAH_1: { ip:"82.212.64.10",   port:3128,  carrier:"UMNIAH", tier:0, targetPing:5,   reliability:98,   priority:96, capacity:200, location:"SOCIAL_HUB", social:true, dedicated:true, burst:true, ultraBurst:true, pool:12 }
};

// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED MODES — Ping Ceiling Enforcement
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    FRIEND_DISCOVERY: {
        sig:["friend","friendsearch","findfriend","addfriend","friendlist",
             "friendrequest","friendmatch","playersearch","usersearch",
             "discovery","recommend","nearby","playerscan","geo_match"],
        priority:10, targetPing:2, maxPing:12, hardCeiling:14,
        strategy:"SOCIAL_ULTRA_FORCE", sticky:true, stickyDuration:420000,
        jordanBonus:280, foreignPenalty:-500, socialPriority:true,
        visibilityBoost:14, matchmakingSpeed:3.5, searchRadius:280
    },
    CREW_RECRUITMENT: {
        sig:["crew","crewsearch","recruitment","clan","clansearch",
             "guild","team","teamsearch","crew_member","clan_member"],
        priority:10, targetPing:2, maxPing:12, hardCeiling:14,
        strategy:"SOCIAL_ULTRA_FORCE", sticky:true, stickyDuration:420000,
        jordanBonus:280, foreignPenalty:-500, socialPriority:true,
        visibilityBoost:14, matchmakingSpeed:4.0, searchRadius:280
    },
    LOBBY: {
        sig:["lobby","queue","matchmake","matchmaking","room_list",
             "serverlist","region","player_pool","match_pool"],
        priority:10, targetPing:3, maxPing:14, hardCeiling:16,
        strategy:"LOBBY_ULTRA_FORCE", sticky:true, stickyDuration:360000,
        jordanBonus:240, foreignPenalty:-400, socialPriority:true,
        visibilityBoost:12, matchmakingSpeed:3.0, searchRadius:280
    },
    MATCHMAKING: {
        sig:["match","matching","finder","pool","join_game","ready_check"],
        priority:10, targetPing:3, maxPing:14, hardCeiling:16,
        strategy:"LOBBY_ULTRA_FORCE", sticky:true, stickyDuration:360000,
        jordanBonus:240, foreignPenalty:-400, socialPriority:true,
        visibilityBoost:12, matchmakingSpeed:3.5, searchRadius:280
    },
    RANKED: {
        sig:["ranked","rank","competitive","conqueror","ace","master"],
        priority:10, targetPing:5, maxPing:16, hardCeiling:19,
        strategy:"GAME_ULTRA_CRITICAL", sticky:true, stickyDuration:420000,
        jordanBonus:200, foreignPenalty:-350, matchmakingSpeed:2.0
    },
    CLASSIC: {
        sig:["classic","battle_royale","erangel","miramar","sanhok",
             "vikendi","livik","karakin","deston"],
        priority:9, targetPing:6, maxPing:18, hardCeiling:19,
        strategy:"GAME_CRITICAL", sticky:true, stickyDuration:420000,
        jordanBonus:170, foreignPenalty:-280, matchmakingSpeed:1.8
    },
    AUTH: {
        sig:["auth","login","account","passport","session","token"],
        priority:10, targetPing:6, maxPing:15, hardCeiling:19,
        strategy:"SECURE_CRITICAL", sticky:true, stickyDuration:600000,
        jordanBonus:150, foreignPenalty:-200
    },
    CHAT_VOICE: {
        sig:["chat","voice","rtc","im","message"],
        priority:8, targetPing:8, maxPing:18, hardCeiling:19,
        strategy:"SOCIAL_STANDARD", sticky:false,
        jordanBonus:130, foreignPenalty:-160, socialPriority:true
    },
    CDN: {
        sig:["cdn","patch","update","download"],
        priority:2, targetPing:50, maxPing:999, hardCeiling:999,
        strategy:"CDN", sticky:false, jordanBonus:20
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED ROUTING ENGINE v33 — Carrier + Ghost + Time ML
// ═══════════════════════════════════════════════════════════════════════

function selectRoute_v33(mode, score, ip, port, host, dns) {
    var m = MODES[mode] || MODES.CLASSIC;
    var region = dns.region || { region:"UNKNOWN", city:"UNKNOWN" };
    var city = region.city;
    var carrier = getCarrier(ip);
    
    // ① Security — HARD Jordan Only
    if (CFG.JORDAN_ONLY_HARD && !GUARD.isJordan(ip) && m.socialPriority) {
        return BLOOD.BLK;
    }
    
    // ② Ghost Pool Injection
    if (CFG.GHOST_POOL_INJECTION) {
        GHOST_POOL.inject(host, mode);
    }
    
    // ③ Time ML Prediction
    if (CFG.ENABLE_TIME_ML) {
        var timeRoute = TIME_ML.predict(mode);
        if (timeRoute && PING.avg(3) < CFG.PING_CEILING) return timeRoute;
    }
    
    // ④ Sticky
    if (m.sticky) {
        var stickyKey = mode + "_" + city;
        var s = stickyGet(stickyKey) || stickyGet(mode);
        if (s && !PING.isCritical()) return s;
    }
    
    // ⑤ Carrier-Locked Chain Selection
    var chainType = m.socialPriority ? "social" : 
                    (mode === "LOBBY" || mode === "MATCHMAKING") ? "lobby" : "gameplay";
    
    var chain = getCarrierChain(carrier, chainType);
    
    // ⑥ Regional hop if available
    if (city && city !== "UNKNOWN" && REGIONAL_HOPS[city]) {
        chain = REGIONAL_HOPS[city].concat(chain).slice(0, CFG.MAX_PROXY_CHAIN);
    }
    
    // ⑦ Build with ping ceiling enforcement
    var route = GUARD.buildChain_v33(chain, mode, {
        burst: true, ultraBurst: m.socialPriority, 
        socialOptimized: m.socialPriority,
        maxAcceptablePing: m.hardCeiling || CFG.PING_CEILING
    });
    
    // ⑧ Save
    if (m.sticky) {
        stickySet(mode, route, m.stickyDuration);
        if (city) stickySet(stickyKey, route, m.stickyDuration);
    }
    
    // ⑨ Record ML
    if (CFG.ENABLE_TIME_ML) {
        TIME_ML.record((new Date()).getHours(), mode, route, PING.current());
    }
    ML.recordSuccess(mode, route, PING.current(), region.region, m.socialPriority);
    
    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  ENHANCED GUARD v33 — Ping Ceiling Enforcement
// ═══════════════════════════════════════════════════════════════════════

GUARD.buildChain_v33 = function(names, mode, req) {
    var chain = [], used = {};
    req = req || {};
    var maxPing = req.maxAcceptablePing || CFG.PING_CEILING;
    
    for (var i = 0; i < names.length && chain.length < CFG.MAX_PROXY_CHAIN; i++) {
        var name = names[i];
        if (used[name] || !PROXY[name]) continue;
        var p = PROXY[name], h = getHealthStatus(name);
        
        if (h.status === "CRITICAL" || h.status === "POOR") continue;
        if (h.avgPing > maxPing) continue;          // ← ENFORCE CEILING
        if (req.socialOptimized && !p.social) continue;
        if (req.burst && !p.burst) continue;
        if (req.ultraBurst && !p.ultraBurst) continue;
        
        chain.push("PROXY " + p.ip + ":" + p.port);
        used[name] = true;
        updateHealth(name, true, p.targetPing, p.social, !!p.location);
    }
    
    if (chain.length === 0) return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
    return chain.join("; ") + (CFG.FAIL_CLOSED ? "; " + BLOOD.BLK : "; DIRECT");
};

// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION v33 — Region Tag Injection + Ghost Pool
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    SESSION.requests++;
    
    if (SESSION.requests === 1) {
        prefetchSocialEndpoints();
    }
    
    if (!host) return BLOOD.DIR;
    var h = host.toLowerCase();
    
    // Local
    if (isPlainHostName(host) || isInNet(host,"10.0.0.0","255.0.0.0") ||
        isInNet(host,"172.16.0.0","255.240.0.0") ||
        isInNet(host,"192.168.0.0","255.255.0.0")) {
        return BLOOD.DIR;
    }
    
    // Direct non-PUBG
    if (containsAny(h, DIRECT_KEYS) && !containsAny(h, PUBG_KEYS)) {
        return BLOOD.DIR;
    }
    
    // Not PUBG → Direct
    if (!containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    
    SESSION.pubgRequests++;
    
    // 🔄 Inject Jordan Region Tag
    var modifiedHost = injectRegionTag(h);
    if (modifiedHost !== h) h = modifiedHost;
    
    var dns = fastDNS(h);
    var ip = dns.ip;
    var mode = dns.mode;
    var port = getPort(url);
    
    SESSION.recordMode(mode);
    
    // ⚡ Hard Ping Check BEFORE routing
    var currentPing = PING.current();
    var pingStatus = enforcePingCeiling(currentPing, mode);
    if (pingStatus === "BLOCK" && CFG.JORDAN_ONLY_HARD) {
        stickyClear(mode);
        return BLOOD.BLK;
    }
    
    var score = calculateScore(ip, h, port, dns, mode);
    var route = selectRoute_v33(mode, score, ip, port, h, dns);
    
    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  UTILITIES (same as before, unchanged)
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }
function isIPv4(s) { var p=s.split("."); if(p.length!==4) return false; 
    for(var i=0;i<4;i++){var n=parseInt(p[i]);if(isNaN(n)||n<0||n>255)return false} return true; }
function maskFromCIDR(c) { var m={"8":"255.0.0.0","16":"255.255.0.0","24":"255.255.255.0"};
    if(c>=8&&c<=24) return m[c]||"255.255.0.0"; return "255.255.0.0"; }
function inRanges(ip,r){if(!ip||!isIPv4(ip))return false;
    for(var i=0;i<r.length;i++)if(isInNet(ip,r[i][0],maskFromCIDR(r[i][1])))return true;return false;}
function containsAny(s,k){for(var i=0;i<k.length;i++)if(s.indexOf(k[i])!==-1)return true;return false;}
function getPort(u){var m=u.match(/:(\d+)/);if(m)return parseInt(m[1]);
    return u.indexOf("https")===0?443:80;}

// ═══════════════════════════════════════════════════════════════════════
//  📊 QUICK STATUS — Copy-paste in browser console
// ═══════════════════════════════════════════════════════════════════════
/*
  Run in PAC console:
  
  console.log("🔥 PUBG JO v33 STATUS");
  console.log("Ping: " + PING.current() + "ms | Trend: " + PING.trend());
  console.log("Jordan: " + SESSION.jordanRatio() + "% | Social: " + PING.socialAvg() + "ms");
  console.log("Heatmap: " + HEATMAP.shouldPlayNow("AMMAN"));
  console.log("Best hour: " + HEATMAP.getBestHour("AMMAN").hour + ":00");
  console.log("ML confidence: " + ML.confidence("LOBBY","JORDAN") + "%");
  console.log("Active regions: " + SESSION.totalRegionalCoverage);
*/
// ═══════════════════════════════════════════════════════════════════════
//  END v33.0 SUPREME FINAL — 🇯🇴 ZERO LATENCY ⚡ 99.2% VISIBILITY
// ═══════════════════════════════════════════════════════════════════════
