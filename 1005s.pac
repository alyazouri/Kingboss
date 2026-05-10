// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v34.0 — JORDAN + GULF + AUTO-RESTART
//  
//  🇯🇴 الأردن في المباراة — أفضل بنق
//  🌍 الأردن + الخليج في اللوبي والتجنيد — لاعبين أكثر
//  🔄 إعادة تشغيل تلقائية بعد كل مباراة
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "34.0-JORDAN-GULF-RESTART",
    MODE: "JORDAN_GULF_HYBRID",

    TARGET_PING: 2,
    SOCIAL_API_TARGET: 1,
    EXCELLENT_PING: 4,
    GOOD_PING: 8,
    MAX_ACCEPTABLE_PING: 12,
    CRITICAL_PING: 18,

    // ═══ إعدادات الأردن ═══
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 99,
    JORDAN_ONLY_IN_GAME: true,           // أردن فقط في المباراة

    // ═══ إعدادات الخليج (للوبي والتجنيد فقط) ═══
    ENABLE_GULF_IN_LOBBY: true,          // تفعيل الخليج في اللوبي
    ENABLE_GULF_IN_RECRUITMENT: true,    // تفعيل الخليج في التجنيد
    GULF_COUNTRIES: ["SA", "AE", "KW", "QA", "BH", "OM"],
    GULF_ROTATION: true,                 // تدوير بين دول الخليج
    GULF_PING_LIMIT: 30,                 // أقصى بنق للخليج (ms)
    GULF_WEIGHT: 40,                     // نسبة اللاعبين الخليجيين %
    JORDAN_WEIGHT: 60,                   // نسبة اللاعبين الأردنيين %
    BLOCK_INTERNATIONAL_IN_GAME: true,   // حظر الدولي في المباراة

    // ═══ إعدادات إعادة التشغيل ═══
    AUTO_RESTART_AFTER_MATCH: true,      // إعادة تشغيل تلقائية
    RESTART_DELAY_MS: 2000,              // تأخير قبل إعادة التشغيل (ms)
    CLEAR_ALL_CACHES_ON_RESTART: true,   // مسح كل الكاش
    RESET_ML_ON_RESTART: false,          // الاحتفاظ بالـ ML
    RESTART_WARMUP_REQUESTS: 3,          // طلبات التسخين بعد إعادة التشغيل
    FORCE_FRESH_DNS: true,               // DNS جديد بعد إعادة التشغيل

    // ═══ إعدادات التدوير ═══
    ENABLE_PROXY_ROTATION: true,
    ROTATION_INTERVAL: 3,
    CARRIER_ROTATION: true,
    REGIONAL_ROTATION: true,

    // ═══ إعدادات الشبكة ═══
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_SOCIAL_GRAPH: true,
    ENABLE_LOBBY_SYNC: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_PROVINCE_ROUTING: true,
    ENABLE_DEEP_SCAN: true,
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    FRIEND_DISCOVERY_RADIUS: 500,        // 500km — يشمل الخليج
    LOBBY_AGGREGATION: true,
    PLAYER_POOL_EXPANSION: true,
    VISIBILITY_BOOST: 15.0,
    SEARCH_RANKING_BOOST: 25,
    REGIONAL_HOP_CHAINS: true,
    MATCHMAKING_ACCELERATION: true,
    RECRUITMENT_SPEED_BOOST: 5.0,

    // ═══ ML ═══
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    LEARNING_RATE: 0.4,
    SOCIAL_ML: true,
    REGIONAL_ML: true,
    TEMPORAL_ML: true,

    // ═══ DNS ═══
    DNS_CACHE_TTL: 20000,
    DNS_CACHE_MAX: 800,
    PREFETCH_SOCIAL_DNS: true,
    STICKY_TTL: 180000,

    // ═══ أداء ═══
    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    HYPER_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,

    // ═══ أمان ═══
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    MAX_PROXY_CHAIN: 4,

    // ═══ مراقبة ═══
    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};


// ═══════════════════════════════════════════════════════════════════════
//  نظام إعادة التشغيل التلقائي
// ═══════════════════════════════════════════════════════════════════════

var RESTART = {
    lastGameState: "UNKNOWN",
    matchCount: 0,
    restartCount: 0,
    lastRestartTime: 0,
    isRestarting: false,
    warmupRemaining: 0,
    
    // ═══ رصد تغيير حالة المباراة ═══
    checkGameStateChange: function(newState) {
        var oldState = this.lastGameState;
        
        if (oldState === "IN_GAME" && newState !== "IN_GAME") {
            // المباراة انتهت → إعادة تشغيل
            this.triggerRestart("MATCH_ENDED");
        }
        
        if (oldState === "IN_GAME" && newState === "SOCIAL") {
            this.matchCount++;
        }
        
        this.lastGameState = newState;
    },
    
    // ═══ تفعيل إعادة التشغيل ═══
    triggerRestart: function(reason) {
        if (!CFG.AUTO_RESTART_AFTER_MATCH) return;
        if (this.isRestarting) return;
        
        this.isRestarting = true;
        this.restartCount++;
        this.lastRestartTime = now();
        
        // 1. مسح DNS Cache بالكامل
        if (CFG.CLEAR_ALL_CACHES_ON_RESTART) {
            this.clearDNSCache();
        }
        
        // 2. مسح Sticky Routes
        this.clearStickyRoutes();
        
        // 3. مسح Health Stats (لبدء جديد)
        this.resetHealthStats();
        
        // 4. الاحتفاظ بالـ ML أو مسحه
        if (!CFG.RESET_ML_ON_RESTART) {
            // الاحتفاظ ببيانات ML — مهم للتحسين المستمر
        } else {
            this.clearMLData();
        }
        
        // 5. إعادة تعيين Session Counters
        this.softResetSession();
        
        // 6. تفعيل التسخين
        this.warmupRemaining = CFG.RESTART_WARMUP_REQUESTS;
        
        // 7. تغيير Session ID (لبدء جديد)
        SESSION.sessionId = generateSessionId();
        
        this.isRestarting = false;
    },
    
    // ═══ مسح DNS ═══
    clearDNSCache: function() {
        for (var key in DNS_CACHE) {
            delete DNS_CACHE[key];
        }
        DNS_QUEUE.length = 0;
        DNS_STATS.hits = 0;
        DNS_STATS.misses = 0;
        DNS_STATS.totalTime = 0;
        DNS_STATS.avgTime = 0;
        DNS_STATS.socialHits = 0;
        DNS_STATS.socialAvgTime = 0;
        DNS_STATS.regionalHits = 0;
    },
    
    // ═══ مسح Sticky ═══
    clearStickyRoutes: function() {
        for (var key in STICKY) {
            delete STICKY[key];
        }
    },
    
    // ═══ إعادة تعيين Health ═══
    resetHealthStats: function() {
        for (var name in HEALTH) {
            var p = PROXY[name];
            HEALTH[name] = {
                uses: 0, successes: 0, failures: 0,
                lastUse: 0, lastSuccess: 0,
                load: 0, status: "READY",
                avgPing: p ? p.targetPing : 999,
                recentPings: [], uptime: 100, score: 100,
                socialUses: 0, regionalUses: 0
            };
        }
    },
    
    // ═══ مسح ML ═══
    clearMLData: function() {
        ML.patterns = {};
        ML.socialPatterns = {};
        ML.regionalPatterns = {};
        ML.temporalPatterns = {};
        ML.learningData = [];
    },
    
    // ═══ إعادة تعيين Session (بدون مسح الإحصائيات) ═══
    softResetSession: function() {
        SESSION.totalPingTime = 0;
        SESSION.bestPing = 999;
        SESSION.worstPing = 0;
        SESSION.socialAPIavgPing = 0;
        SESSION.congestionLevel = 0;
        SESSION.blockedHits = 0;
        SESSION.directHits = 0;
    },
    
    // ═══ معالجة التسخين ═══
    processWarmup: function() {
        if (this.warmupRemaining > 0) {
            this.warmupRemaining--;
            if (this.warmupRemaining === 0) {
                // التسخين اكتمل — اجمع DNS للنقاط الاجتماعية
                if (CFG.PREFETCH_SOCIAL_DNS) {
                    prefetchSocialEndpoints();
                }
            }
            return true; // لا يزال في مرحلة التسخين
        }
        return false;
    },
    
    // ═══ هل تمت إعادة التشغيل مؤخراً ═══
    wasRecentlyRestarted: function() {
        return (now() - this.lastRestartTime) < 10000; // آخر 10 ثواني
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  نظام تدوير البروكسيات
// ═══════════════════════════════════════════════════════════════════════

var ROTATION = {
    counter: 0,
    requestSinceRotate: 0,
    sessionProxyIndex: Math.floor(Math.random() * 100),
    lastUsedCarrier: null,
    lastUsedRegion: null,
    gulfRotationIndex: 0,
    
    shouldRotate: function() {
        if (!CFG.ENABLE_PROXY_ROTATION) return false;
        if (this.requestSinceRotate >= CFG.ROTATION_INTERVAL) {
            this.requestSinceRotate = 0;
            return true;
        }
        return false;
    },
    
    nextGulfCountry: function() {
        var countries = CFG.GULF_COUNTRIES;
        var country = countries[this.gulfRotationIndex % countries.length];
        this.gulfRotationIndex++;
        return country;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  NETWORK DETECTION — هل الطلب في مرحلة اللوبي أم المباراة
// ═══════════════════════════════════════════════════════════════════════

function isLobbyOrRecruitment(mode) {
    var m = MODES[mode];
    if (!m) return false;
    return m.gameState === "SOCIAL" || m.gameState === "PRE_MATCH";
}

function isInGame(mode) {
    var m = MODES[mode];
    if (!m) return false;
    return m.gameState === "IN_GAME";
}

function shouldUseGulf(mode) {
    if (!CFG.ENABLE_GULF_IN_LOBBY && !CFG.ENABLE_GULF_IN_RECRUITMENT) return false;
    if (isInGame(mode)) return false; // لا خليج في المباراة
    if (!isLobbyOrRecruitment(mode)) return false;
    
    var m = MODES[mode];
    // استخدم الخليج فقط في اللوبي والتجنيد والبروفايل
    return m && (m.socialPriority || m.gameState === "PRE_MATCH");
}


// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURATION — PROXY POOL (الأردن + الخليج)
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {

    // ═══════════════════════════════════════════════
    //  الأردن — AMMAN CORE (Orange)
    // ═══════════════════════════════════════════════
    ORANGE_CORE_1: {
        ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0,
        targetPing: 2, reliability: 99.7, bandwidth: "ULTRA", priority: 100,
        capacity: 300, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_2: {
        ip: "46.185.128.10", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 99,
        capacity: 280, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 14, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_3: {
        ip: "46.185.129.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 2.5, reliability: 99.4, bandwidth: "ULTRA", priority: 98,
        capacity: 270, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 13, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_4: {
        ip: "46.185.130.8", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 3, reliability: 99.3, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    },

    // ═══════════════════════════════════════════════
    //  الأردن — AMMAN CORE (Zain)
    // ═══════════════════════════════════════════════
    ZAIN_CORE_1: {
        ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0,
        targetPing: 2.5, reliability: 99.6, bandwidth: "ULTRA", priority: 99,
        capacity: 290, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_2: {
        ip: "79.173.193.5", port: 443, carrier: "ZAIN", tier: 0,
        targetPing: 3, reliability: 99.4, bandwidth: "ULTRA", priority: 98,
        capacity: 275, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 13, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_3: {
        ip: "79.173.194.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 3, reliability: 99.3, bandwidth: "ULTRA", priority: 97,
        capacity: 265, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    },

    // ═══════════════════════════════════════════════
    //  الأردن — AMMAN CORE (Umniah + JT)
    // ═══════════════════════════════════════════════
    UMNIAH_CORE_1: {
        ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0,
        targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 98,
        capacity: 280, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    JT_CORE_1: {
        ip: "188.247.10.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 98,
        capacity: 270, location: "AMMAN_CORE", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 14, regionHop: "AMMAN_CORE"
    },

    // ═══════════════════════════════════════════════
    //  SOCIAL DEDICATED (الأردن)
    // ═══════════════════════════════════════════════
    SOCIAL_ORANGE_1: {
        ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 1.5, reliability: 99.4, bandwidth: "ULTRA", priority: 100,
        capacity: 250, location: "AMMAN_SOCIAL_HUB", country: "JO",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 20, regionHop: "AMMAN_CORE"
    },
    SOCIAL_ZAIN_1: {
        ip: "176.29.0.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 2, reliability: 99.2, bandwidth: "ULTRA", priority: 99,
        capacity: 240, location: "AMMAN_SOCIAL_HUB", country: "JO",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 18, regionHop: "AMMAN_CORE"
    },
    SOCIAL_JT_1: {
        ip: "188.247.20.8", port: 443, carrier: "JT", tier: 0,
        targetPing: 2, reliability: 99.3, bandwidth: "ULTRA", priority: 99,
        capacity: 245, location: "AMMAN_SOCIAL_HUB", country: "JO",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 18, regionHop: "AMMAN_CORE"
    },
    SOCIAL_UMNIAH_1: {
        ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier: 0,
        targetPing: 2.5, reliability: 98.5, bandwidth: "ULTRA", priority: 98,
        capacity: 230, location: "AMMAN_SOCIAL_HUB", country: "JO",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 15, regionHop: "AMMAN_CORE"
    },

    // ═══════════════════════════════════════════════
    //  الأردن — مناطق أخرى
    // ═══════════════════════════════════════════════
    ORANGE_METRO_1: {
        ip: "149.200.136.6", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 4, reliability: 99.2, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_METRO", country: "JO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_METRO"
    },
    ZAIN_METRO_1: {
        ip: "79.173.192.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 4.5, reliability: 99, bandwidth: "ULTRA", priority: 96,
        capacity: 250, location: "AMMAN_METRO", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_METRO"
    },
    ORANGE_IRBID_1: {
        ip: "46.185.176.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 5, reliability: 98.2, bandwidth: "HIGH", priority: 93,
        capacity: 200, location: "IRBID", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "IRBID"
    },
    ZAIN_IRBID_1: {
        ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 5.5, reliability: 98, bandwidth: "HIGH", priority: 92,
        capacity: 190, location: "IRBID", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 9, regionHop: "IRBID"
    },
    ORANGE_ZARQA_1: {
        ip: "46.185.192.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 4.5, reliability: 98.2, bandwidth: "HIGH", priority: 94,
        capacity: 210, location: "ZARQA", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "ZARQA"
    },
    ZAIN_ZARQA_1: {
        ip: "176.28.128.10", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 93,
        capacity: 200, location: "ZARQA", country: "JO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 9, regionHop: "ZARQA"
    },

    // ═══════════════════════════════════════════════
    //  🇸🇦 السعودية — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    STC_RIYADH_1: {
        ip: "212.89.224.5", port: 8080, carrier: "STC", tier: 1,
        targetPing: 18, reliability: 97, bandwidth: "HIGH", priority: 85,
        capacity: 150, location: "RIYADH", country: "SA",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "SAUDI"
    },
    STC_JEDDAH_1: {
        ip: "91.212.236.8", port: 443, carrier: "STC", tier: 1,
        targetPing: 20, reliability: 96.5, bandwidth: "HIGH", priority: 84,
        capacity: 140, location: "JEDDAH", country: "SA",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 7, regionHop: "SAUDI"
    },
    MOBILY_RIYADH_1: {
        ip: "37.224.64.10", port: 8080, carrier: "MOBILY", tier: 1,
        targetPing: 19, reliability: 96, bandwidth: "HIGH", priority: 83,
        capacity: 130, location: "RIYADH", country: "SA",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "SAUDI"
    },
    ZAIN_SA_RIYADH_1: {
        ip: "84.235.128.5", port: 3128, carrier: "ZAIN_SA", tier: 1,
        targetPing: 19, reliability: 96, bandwidth: "HIGH", priority: 82,
        capacity: 125, location: "RIYADH", country: "SA",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "SAUDI"
    },

    // ═══════════════════════════════════════════════
    //  🇦🇪 الإمارات — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    DU_DUBAI_1: {
        ip: "94.56.128.5", port: 8080, carrier: "DU", tier: 1,
        targetPing: 22, reliability: 96.5, bandwidth: "HIGH", priority: 83,
        capacity: 140, location: "DUBAI", country: "AE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 7, regionHop: "UAE"
    },
    ETISALAT_ABU_DHABI_1: {
        ip: "91.74.0.10", port: 443, carrier: "ETISALAT", tier: 1,
        targetPing: 23, reliability: 96, bandwidth: "HIGH", priority: 82,
        capacity: 135, location: "ABU_DHABI", country: "AE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 7, regionHop: "UAE"
    },
    ETISALAT_DUBAI_1: {
        ip: "86.96.200.8", port: 3128, carrier: "ETISALAT", tier: 1,
        targetPing: 22, reliability: 96, bandwidth: "HIGH", priority: 81,
        capacity: 130, location: "DUBAI", country: "AE",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "UAE"
    },

    // ═══════════════════════════════════════════════
    //  🇰🇼 الكويت — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    ZAIN_KW_1: {
        ip: "185.68.20.5", port: 8080, carrier: "ZAIN_KW", tier: 1,
        targetPing: 20, reliability: 96, bandwidth: "HIGH", priority: 82,
        capacity: 120, location: "KUWAIT_CITY", country: "KW",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 6, regionHop: "KUWAIT"
    },
    OOREDOO_KW_1: {
        ip: "37.39.0.8", port: 443, carrier: "OOREDOO_KW", tier: 1,
        targetPing: 21, reliability: 95.5, bandwidth: "HIGH", priority: 81,
        capacity: 115, location: "KUWAIT_CITY", country: "KW",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "KUWAIT"
    },
    STC_KW_1: {
        ip: "95.142.128.10", port: 3128, carrier: "STC_KW", tier: 1,
        targetPing: 21, reliability: 95.5, bandwidth: "HIGH", priority: 80,
        capacity: 110, location: "KUWAIT_CITY", country: "KW",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "KUWAIT"
    },

    // ═══════════════════════════════════════════════
    //  🇶🇦 قطر — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    OOREDOO_QA_1: {
        ip: "37.210.128.5", port: 8080, carrier: "OOREDOO_QA", tier: 1,
        targetPing: 22, reliability: 96, bandwidth: "HIGH", priority: 81,
        capacity: 120, location: "DOHA", country: "QA",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 6, regionHop: "QATAR"
    },
    VODAFONE_QA_1: {
        ip: "82.148.96.8", port: 443, carrier: "VODAFONE_QA", tier: 1,
        targetPing: 23, reliability: 95.5, bandwidth: "HIGH", priority: 80,
        capacity: 110, location: "DOHA", country: "QA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "QATAR"
    },

    // ═══════════════════════════════════════════════
    //  🇧🇭 البحرين — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    BATELCO_BH_1: {
        ip: "89.148.0.5", port: 8080, carrier: "BATELCO", tier: 1,
        targetPing: 20, reliability: 96, bandwidth: "HIGH", priority: 81,
        capacity: 110, location: "MANAMA", country: "BH",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 5, regionHop: "BAHRAIN"
    },
    ZAIN_BH_1: {
        ip: "185.64.100.8", port: 443, carrier: "ZAIN_BH", tier: 1,
        targetPing: 21, reliability: 95.5, bandwidth: "HIGH", priority: 80,
        capacity: 105, location: "MANAMA", country: "BH",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "BAHRAIN"
    },

    // ═══════════════════════════════════════════════
    //  🇴🇲 عُمان — لاعبين خليجيين في اللوبي
    // ═══════════════════════════════════════════════
    OMANTEL_OM_1: {
        ip: "82.178.0.5", port: 8080, carrier: "OMANTEL", tier: 1,
        targetPing: 25, reliability: 95, bandwidth: "HIGH", priority: 79,
        capacity: 100, location: "MUSCAT", country: "OM",
        socialOptimized: true, burstCapable: true,
        poolSize: 5, regionHop: "OMAN"
    },
    OOREDOO_OM_1: {
        ip: "37.140.128.8", port: 443, carrier: "OOREDOO_OM", tier: 1,
        targetPing: 26, reliability: 94.5, bandwidth: "MEDIUM", priority: 78,
        capacity: 95, location: "MUSCAT", country: "OM",
        socialOptimized: false, burstCapable: false,
        poolSize: 4, regionHop: "OMAN"
    },

    // ═══════════════════════════════════════════════
    //  BACKUP
    // ═══════════════════════════════════════════════
    ORANGE_BACKUP_1: {
        ip: "46.185.224.5", port: 8080, carrier: "ORANGE", tier: 2,
        targetPing: 10, reliability: 93, bandwidth: "MEDIUM", priority: 78,
        capacity: 160, location: "NATIONAL_BACKUP", country: "JO",
        regionHop: "AMMAN_CORE"
    },
    ZAIN_BACKUP_1: {
        ip: "109.237.224.8", port: 3128, carrier: "ZAIN", tier: 2,
        targetPing: 11, reliability: 92, bandwidth: "MEDIUM", priority: 77,
        capacity: 150, location: "NATIONAL_BACKUP", country: "JO",
        regionHop: "AMMAN_CORE"
    }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    ["46.185.128.0","17"],["46.185.144.0","20"],["46.185.160.0","19"],
    ["46.185.176.0","20"],["46.185.192.0","19"],["46.185.208.0","20"],
    ["46.185.212.0","22"],["46.185.216.0","21"],["46.185.220.0","22"],
    ["46.185.224.0","19"],["94.127.208.0","20"],["94.127.216.0","21"],
    ["94.127.220.0","22"],["94.127.222.0","23"],["94.127.224.0","19"],
    ["149.200.136.0","22"],["79.173.192.0","18"],["79.173.208.0","20"],
    ["79.173.224.0","19"],["79.173.236.0","22"],["79.173.240.0","20"],
    ["79.173.244.0","22"],["109.237.192.0","18"],["109.237.200.0","21"],
    ["109.237.204.0","22"],["109.237.208.0","20"],["109.237.224.0","19"],
    ["176.28.0.0","15"],["176.28.128.0","17"],["176.28.160.0","19"],
    ["176.29.0.0","16"],["176.29.128.0","17"],["176.30.0.0","19"],
    ["82.212.0.0","16"],["82.212.32.0","19"],["82.212.64.0","18"],
    ["82.212.96.0","19"],["82.212.128.0","17"],["82.212.160.0","19"],
    ["82.212.192.0","19"],["212.35.64.0","18"],["212.35.85.0","24"],
    ["212.35.96.0","19"],["188.247.0.0","16"],["94.230.0.0","16"],
    ["91.106.0.0","16"],["37.220.0.0","16"],["176.203.0.0","16"]
];

// ═══ شبكات الخليج (مسموح بها في اللوبي والتجنيد فقط) ═══
var GULF_NETS = {
    SA: [ // السعودية
        ["212.89.224.0","19"],["91.212.236.0","22"],["37.224.64.0","18"],
        ["84.235.128.0","17"],["5.44.128.0","18"],["188.155.0.0","16"],
        ["176.44.0.0","16"],["78.110.16.0","20"],["94.96.0.0","15"]
    ],
    AE: [ // الإمارات
        ["94.56.128.0","17"],["91.74.0.0","16"],["86.96.200.0","21"],
        ["37.32.0.0","16"],["94.200.0.0","16"],["185.42.204.0","22"],
        ["5.192.0.0","16"],["89.237.0.0","16"]
    ],
    KW: [ // الكويت
        ["185.68.20.0","22"],["37.39.0.0","16"],["95.142.128.0","18"],
        ["168.187.0.0","16"],["188.54.0.0","16"],["62.150.0.0","16"],
        ["213.132.0.0","16"]
    ],
    QA: [ // قطر
        ["37.210.128.0","17"],["82.148.96.0","19"],["178.152.0.0","16"],
        ["78.100.0.0","16"],["103.236.0.0","16"]
    ],
    BH: [ // البحرين
        ["89.148.0.0","18"],["185.64.100.0","22"],["37.131.0.0","16"],
        ["87.248.0.0","16"],["78.110.128.0","19"]
    ],
    OM: [ // عُمان
        ["82.178.0.0","16"],["37.140.128.0","17"],["213.226.0.0","16"],
        ["78.110.96.0","19"],["188.48.0.0","16"]
    ]
};

// ═══ دمج كل شبكات الخليج ═══
var ALL_GULF_NETS = [];
(function() {
    for (var country in GULF_NETS) {
        var nets = GULF_NETS[country];
        for (var i = 0; i < nets.length; i++) {
            ALL_GULF_NETS.push(nets[i]);
        }
    }
})();

var JO_CITIES = {
    AMMAN_CORE: [["46.185.128.0","20"],["79.173.192.0","20"],["82.212.0.0","19"],["188.247.0.0","18"],["212.35.85.0","24"]],
    AMMAN_METRO: [["46.185.144.0","21"],["79.173.208.0","21"],["82.212.32.0","20"],["149.200.136.0","22"]],
    AMMAN_CITY: [["46.185.160.0","20"],["79.173.224.0","21"],["82.212.64.0","20"],["94.127.208.0","21"]],
    AMMAN_SOUTH: [["94.127.224.0","20"],["46.185.168.0","21"],["82.212.48.0","21"]],
    AMMAN_NORTH: [["46.185.136.0","21"],["79.173.200.0","22"],["82.212.16.0","21"]],
    IRBID: [["46.185.176.0","21"],["79.173.240.0","21"],["82.212.96.0","20"],["176.28.96.0","19"]],
    ZARQA: [["46.185.192.0","21"],["176.28.128.0","18"],["82.212.128.0","20"]],
    AQABA: [["46.185.208.0","21"],["176.29.128.0","18"]],
    MAFRAQ: [["46.185.212.0","21"],["176.28.160.0","19"]],
    MADABA: [["82.212.160.0","21"],["79.173.236.0","22"]],
    BALQA: [["46.185.200.0","21"],["109.237.204.0","22"],["82.212.144.0","20"]],
    KARAK: [["94.127.216.0","21"],["109.237.200.0","21"]],
    JERASH: [["82.212.192.0","21"],["79.173.244.0","22"]],
    TAFILAH: [["94.127.220.0","22"]],
    MAAN: [["94.127.222.0","23"],["46.185.216.0","21"]]
};


// ═══════════════════════════════════════════════════════════════════════
//  REGIONAL HOP CHAINS
// ═══════════════════════════════════════════════════════════════════════

var REGIONAL_HOPS = {
    // ═══ أردن ═══
    AMMAN_CORE: ["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_JT_1","ORANGE_CORE_1"],
    AMMAN_METRO: ["SOCIAL_ORANGE_1","ORANGE_METRO_1","ZAIN_METRO_1","ZAIN_CORE_1"],
    IRBID: ["ORANGE_IRBID_1","ZAIN_IRBID_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    ZARQA: ["ORANGE_ZARQA_1","ZAIN_ZARQA_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    AQABA: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    MADABA: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    BALQA: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    KARAK: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    MAFRAQ: ["ORANGE_IRBID_1","ZAIN_IRBID_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    JERASH: ["ORANGE_IRBID_1","ZAIN_IRBID_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    TAFILAH: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],
    MAAN: ["ORANGE_METRO_1","ZAIN_METRO_1","ORANGE_CORE_1","ZAIN_CORE_1"],

    // ═══ خليجي — للوبي والتجنيد فقط ═══
    GULF_LOBBY_SA: ["STC_RIYADH_1","STC_JEDDAH_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"],
    GULF_LOBBY_AE: ["DU_DUBAI_1","ETISALAT_ABU_DHABI_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"],
    GULF_LOBBY_KW: ["ZAIN_KW_1","OOREDOO_KW_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"],
    GULF_LOBBY_QA: ["OOREDOO_QA_1","VODAFONE_QA_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"],
    GULF_LOBBY_BH: ["BATELCO_BH_1","ZAIN_BH_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"],
    GULF_LOBBY_OM: ["OMANTEL_OM_1","OOREDOO_OM_1","SOCIAL_ORANGE_1","SOCIAL_ZAIN_1"]
};

// ═══ قائمة سلاسل الخليج للتدوير ═══
var GULF_LOBBY_CHAINS = [
    "GULF_LOBBY_SA", "GULF_LOBBY_AE", "GULF_LOBBY_KW",
    "GULF_LOBBY_QA", "GULF_LOBBY_BH", "GULF_LOBBY_OM"
];


// ═══════════════════════════════════════════════════════════════════════
//  PUBG + SOCIAL + DIRECT KEYS
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS = [
    "pubgmobile","pubgm","pubg","battlegrounds","tencent","qq","igame",
    "myapp","intlgame","lightspeed","tmgp","gcloud","tgpa","levelinfinite",
    "levelinf","proximabeta","igamecj","bsgame","minisite","garena",
    "anticheat","tpns","midas","unipay","pubgstudio","krafton","bluehole",
    "matchmaking","lobbyserver","gameserver"
];

var SOCIAL_KEYS = [
    "friend","friendlist","friendrequest","friendsearch","addfriend","findfriend",
    "friendmatch","friendinvite","crew","clan","guild","team","squad","crewlist",
    "clanlist","recruitment","recruit","crewsearch","clansearch","jointeam",
    "teamfind","social","presence","nearby","nearbypla","playersearch",
    "usersearch","profile","userprofile","discovery","recommend","suggestion",
    "lobby","matchmake","matchmaking","queue","roomlist","room_list","playerlist",
    "online","chat","voice","message","im","rtc","region","server_list",
    "serverlist","worldsvr","playerscan","regionfilter","geo_match","match_pool",
    "player_pool","active_users","crew_member","clan_member","team_member"
];

var LOBBY_SOCIAL_PATTERNS = [
    "lobby","social","friend","crew","clan","player","search","discover",
    "nearby","match","room","team","squad","guild","online","presence",
    "profile","user","pool","scan","filter","region","geo","active","member","invite"
];

var DIRECT_KEYS = [
    "apple","icloud","google","facebook","instagram","whatsapp",
    "telegram","twitter","tiktok","netflix","spotify"
];


// ═══════════════════════════════════════════════════════════════════════
//  GAME MODES
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    FRIEND_DISCOVERY: {
        sig: ["friend","friendsearch","findfriend","addfriend","friendlist",
            "friendrequest","friendmatch","playersearch","usersearch","discovery",
            "recommend","suggestion","nearby","nearbypla","playerscan","regionfilter","geo_match"],
        priority:10, targetPing:1, maxPing:4, strategy:"SOCIAL_ULTRA_FORCE",
        sticky:true, stickyDuration:420000, jordanBonus:300, foreignPenalty:-200,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:15, matchmakingSpeed:4.0,
        searchRadius:500, gameState:"SOCIAL", allowGulf:true
    },
    CREW_RECRUITMENT: {
        sig: ["crew","crewsearch","recruitment","recruit","clan","clansearch",
            "guild","guildsearch","team","teamsearch","jointeam","teamfind",
            "crewlist","clanlist","crew_member","clan_member","team_member"],
        priority:10, targetPing:1, maxPing:4, strategy:"SOCIAL_ULTRA_FORCE",
        sticky:true, stickyDuration:420000, jordanBonus:300, foreignPenalty:-200,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:15, matchmakingSpeed:4.0,
        searchRadius:500, gameState:"SOCIAL", allowGulf:true
    },
    LOBBY: {
        sig: ["lobby","queue","matchmake","matchmaking","waiting_room","room_list",
            "roomlist","serverlist","server_list","worldsvr","region","playerlist",
            "online","player_pool","match_pool","active_users"],
        priority:10, targetPing:2, maxPing:6, strategy:"LOBBY_ULTRA_FORCE",
        sticky:true, stickyDuration:300000, jordanBonus:280, foreignPenalty:-150,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:12, matchmakingSpeed:3.5,
        searchRadius:500, gameState:"PRE_MATCH", allowGulf:true
    },
    MATCHMAKING: {
        sig: ["match","matching","finder","search_player","pool","join_game",
            "ready_check","start_match","region_select","server_select",
            "match_pool","player_pool"],
        priority:10, targetPing:2, maxPing:6, strategy:"LOBBY_ULTRA_FORCE",
        sticky:true, stickyDuration:300000, jordanBonus:280, foreignPenalty:-150,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:12, matchmakingSpeed:4.0,
        searchRadius:500, gameState:"PRE_MATCH", allowGulf:true
    },
    SOCIAL_PROFILE: {
        sig: ["profile","userprofile","playerprofile","presence","status",
            "online_status","achievement","statistics","stats"],
        priority:9, targetPing:3, maxPing:8, strategy:"SOCIAL_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:220, foreignPenalty:-100,
        requiresBurst:true, socialPriority:true, visibilityBoost:10,
        gameState:"SOCIAL", allowGulf:true
    },
    RANKED: {
        sig: ["ranked","rank","competitive","tier","conqueror","ace","master","rating"],
        priority:10, targetPing:4, maxPing:8, strategy:"GAME_ULTRA_CRITICAL",
        sticky:true, stickyDuration:360000, jordanBonus:200, foreignPenalty:-320,
        requiresBurst:true, hyperBurst:true, matchmakingSpeed:2.0,
        gameState:"IN_GAME", allowGulf:false
    },
    AUTH: {
        sig: ["auth","login","account","passport","session","token","security"],
        priority:10, targetPing:5, maxPing:10, strategy:"SECURE_CRITICAL",
        sticky:true, stickyDuration:600000, jordanBonus:160, foreignPenalty:-200,
        requiresBurst:false, gameState:"AUTH", allowGulf:false
    },
    TDM: {
        sig: ["tdm","team_death","deathmatch","arena"],
        priority:9, targetPing:4, maxPing:8, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:180, foreignPenalty:-260,
        requiresBurst:true, matchmakingSpeed:2.0, gameState:"IN_GAME", allowGulf:false
    },
    CLASSIC: {
        sig: ["classic","battle_royale","erangel","miramar","sanhok","vikendi",
            "livik","karakin","deston"],
        priority:9, targetPing:5, maxPing:11, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:360000, jordanBonus:170, foreignPenalty:-250,
        requiresBurst:true, matchmakingSpeed:2.0, gameState:"IN_GAME", allowGulf:false
    },
    CLAN_WAR: {
        sig: ["clan_war","clanwar","crew_challenge","guild_battle","territory","conquest"],
        priority:9, targetPing:5, maxPing:11, strategy:"SOCIAL_GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:200, foreignPenalty:-200,
        requiresBurst:true, socialPriority:true, matchmakingSpeed:3.0,
        gameState:"IN_GAME", allowGulf:true
    },
    CHAT_VOICE: {
        sig: ["chat","voice","rtc","im","message"],
        priority:8, targetPing:7, maxPing:13, strategy:"SOCIAL_STANDARD",
        sticky:false, jordanBonus:140, foreignPenalty:-100,
        requiresBurst:false, socialPriority:true, gameState:"SOCIAL", allowGulf:true
    },
    METRO: {
        sig: ["metro","metro_royale","underground"],
        priority:8, targetPing:7, maxPing:13, strategy:"GAME_STANDARD",
        sticky:true, stickyDuration:300000, jordanBonus:150, foreignPenalty:-190,
        requiresBurst:false, gameState:"IN_GAME", allowGulf:false
    },
    ARCADE: {
        sig: ["arcade","quick_match","mini_zone"],
        priority:7, targetPing:8, maxPing:16, strategy:"GAME_LIGHT",
        sticky:false, jordanBonus:120, foreignPenalty:-140,
        requiresBurst:false, gameState:"IN_GAME", allowGulf:false
    },
    EVENT: {
        sig: ["event","special","limited","collab"],
        priority:9, targetPing:5, maxPing:11, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:160, foreignPenalty:-220,
        requiresBurst:true, gameState:"IN_GAME", allowGulf:false
    },
    CDN: {
        sig: ["cdn","patch","update","download"],
        priority:2, targetPing:50, maxPing:999, strategy:"CDN",
        sticky:false, jordanBonus:20, foreignPenalty:0, gameState:"DOWNLOAD", allowGulf:false
    },
    TRAINING: {
        sig: ["training","practice","cheer_park"],
        priority:1, targetPing:999, maxPing:999, strategy:"SAFE",
        sticky:false, jordanBonus:10, foreignPenalty:0, gameState:"TRAINING", allowGulf:false
    }
};

var MODE_PRIORITY = [
    "FRIEND_DISCOVERY","CREW_RECRUITMENT","LOBBY","MATCHMAKING",
    "SOCIAL_PROFILE","RANKED","AUTH","TDM","CLASSIC","CLAN_WAR",
    "CHAT_VOICE","METRO","EVENT","ARCADE","CDN","TRAINING"
];


// ═══════════════════════════════════════════════════════════════════════
//  SESSION TRACKING
// ═══════════════════════════════════════════════════════════════════════

var SESSION = {
    start:now(), sessionId:generateSessionId(),
    requests:0, pubgRequests:0, socialRequests:0,
    jordanHits:0, gulfHits:0, foreignHits:0, directHits:0, blockedHits:0,
    friendDiscoveries:0, crewSearches:0, lobbyJoins:0,
    jordanPlayersFound:0, gulfPlayersFound:0, socialAPIcalls:0,
    regionalHits:{}, activeRegions:{}, totalRegionalCoverage:0,
    totalPingTime:0, bestPing:999, worstPing:0, socialAPIavgPing:0,
    modeStats:{}, currentMode:null, gameState:"UNKNOWN",
    networkQuality:"UNKNOWN", congestionLevel:0, peakHours:false, weekend:false,
    patterns:{}, socialPatterns:{}, regionalPatterns:{},
    uniqueProxiesUsed:{}, uniqueCarriersUsed:{}, totalRotations:0,
    
    age:function(){return now()-this.start;},
    isWarm:function(){return this.pubgRequests>=3&&this.age()>5000;},
    jordanRatio:function(){var t=this.jordanHits+this.gulfHits+this.foreignHits;return t>0?Math.round((this.jordanHits/t)*100):0;},
    gulfRatio:function(){var t=this.jordanHits+this.gulfHits+this.foreignHits;return t>0?Math.round((this.gulfHits/t)*100):0;},
    avgPing:function(){return this.pubgRequests>0?Math.round(this.totalPingTime/this.pubgRequests):999;},
    recordMode:function(mode){
        if(!this.modeStats[mode])this.modeStats[mode]={count:0,firstSeen:now(),lastSeen:0,totalPing:0,avgPing:0};
        this.modeStats[mode].count++;this.modeStats[mode].lastSeen=now();
        if(mode!==this.currentMode){
            var oldState = MODES[this.currentMode] ? MODES[this.currentMode].gameState : "UNKNOWN";
            var newState = MODES[mode] ? MODES[mode].gameState : "UNKNOWN";
            this.currentMode=mode;
            // رصد تغيير حالة المباراة
            if(oldState !== newState) {
                this.gameState = newState;
                RESTART.checkGameStateChange(newState);
            }
        }
    },
    recordSocialInteraction:function(type){
        if(type==="FRIEND_DISCOVERY")this.friendDiscoveries++;
        else if(type==="CREW_SEARCH")this.crewSearches++;
        else if(type==="LOBBY_JOIN")this.lobbyJoins++;
        this.socialAPIcalls++;
    },
    recordRegionalHit:function(region){
        if(!region||region==="UNKNOWN")return;
        if(!this.regionalHits[region])this.regionalHits[region]={count:0,firstSeen:now(),lastSeen:0};
        this.regionalHits[region].count++;this.regionalHits[region].lastSeen=now();
        this.activeRegions[region]=true;
        this.totalRegionalCoverage=Object.keys(this.activeRegions).length;
    },
    recordDiversity:function(proxyName,carrier){
        this.uniqueProxiesUsed[proxyName]=true;
        if(carrier)this.uniqueCarriersUsed[carrier]=true;
    },
    updateGameState:function(s){
        if(s!==this.gameState){
            this.gameState=s;
            RESTART.checkGameStateChange(s);
        }
    },
    recordPing:function(ping,mode){
        this.totalPingTime+=ping;if(ping<this.bestPing)this.bestPing=ping;
        if(ping>this.worstPing)this.worstPing=ping;
        var m=MODES[mode];
        if(m&&m.socialPriority){
            this.socialAPIavgPing=this.socialAPIcalls>0?
                Math.round((this.socialAPIavgPing*(this.socialAPIcalls-1)+ping)/this.socialAPIcalls):ping;}
        if(mode&&this.modeStats[mode]){
            this.modeStats[mode].totalPing+=ping;
            this.modeStats[mode].avgPing=Math.round(this.modeStats[mode].totalPing/this.modeStats[mode].count);}
    },
    updateTimeContext:function(){var d=new Date();this.peakHours=(d.getHours()>=16||d.getHours()<=2);this.weekend=(d.getDay()===5||d.getDay()===6);},
    getReport:function(){
        return{duration:this.age(),requests:this.requests,pubgRequests:this.pubgRequests,
            socialRequests:this.socialRequests,jordanRatio:this.jordanRatio(),
            gulfRatio:this.gulfRatio(),avgPing:this.avgPing(),
            socialAPIavgPing:this.socialAPIavgPing,bestPing:this.bestPing,
            friendDiscoveries:this.friendDiscoveries,crewSearches:this.crewSearches,
            lobbyJoins:this.lobbyJoins,jordanPlayersFound:this.jordanPlayersFound,
            gulfPlayersFound:this.gulfPlayersFound,activeRegions:this.totalRegionalCoverage,
            currentMode:this.currentMode,gameState:this.gameState,
            uniqueProxiesUsed:Object.keys(this.uniqueProxiesUsed).length,
            totalRotations:this.totalRotations,
            matchCount:RESTART.matchCount,restartCount:RESTART.restartCount};
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  DNS CACHE
// ═══════════════════════════════════════════════════════════════════════

var DNS_CACHE={};var DNS_QUEUE=[];
var DNS_STATS={hits:0,misses:0,totalTime:0,avgTime:0,socialHits:0,socialAvgTime:0,regionalHits:0};

var SOCIAL_PREFETCH=["social.pubgmobile.com","friend.pubgmobile.com","lobby.pubgmobile.com",
    "matchmaking.pubgmobile.com","crew.pubgmobile.com","player.pubgmobile.com",
    "region.pubgmobile.com","nearby.pubgmobile.com"];

function fastDNS(host){
    var isSocial=containsAny(host.toLowerCase(),SOCIAL_KEYS)||containsAny(host.toLowerCase(),LOBBY_SOCIAL_PATTERNS);
    var isRegional=containsAny(host.toLowerCase(),["region","lobby","match","player","nearby","server"]);
    var cached=DNS_CACHE[host];
    if(cached&&(now()-cached.t)<CFG.DNS_CACHE_TTL){
        DNS_STATS.hits++;if(isSocial)DNS_STATS.socialHits++;if(isRegional)DNS_STATS.regionalHits++;
        cached.hitCount=(cached.hitCount||0)+1;cached.lastHit=now();return cached;}
    DNS_STATS.misses++;var t0=now();var ip=dnsResolve(host);var dt=now()-t0;
    DNS_STATS.totalTime+=dt;DNS_STATS.avgTime=Math.round(DNS_STATS.totalTime/DNS_STATS.misses);
    if(isSocial){var sc=DNS_STATS.socialHits+1;DNS_STATS.socialAvgTime=Math.round((DNS_STATS.socialAvgTime*DNS_STATS.socialHits+dt)/sc);}
    var mode=detectMode(host);var region=detectRegion(host,ip);var quality=assessServerQuality(ip,host,mode);
    var result={ip:ip,dt:dt,mode:mode,region:region,quality:quality,socialEndpoint:isSocial,
        regionalEndpoint:isRegional,ok:!!ip,t:now(),hitCount:0,lastHit:now()};
    if(DNS_QUEUE.length>=CFG.DNS_CACHE_MAX){
        var removed=false;
        for(var i=0;i<DNS_QUEUE.length;i++){var old=DNS_QUEUE[i],oe=DNS_CACHE[old];
            if(oe&&!oe.socialEndpoint&&!oe.regionalEndpoint){DNS_QUEUE.splice(i,1);delete DNS_CACHE[old];removed=true;break;}}
        if(!removed){var oh=DNS_QUEUE.shift();delete DNS_CACHE[oh];}}
    DNS_CACHE[host]=result;DNS_QUEUE.push(host);
    PING.record(dt,mode,host,region.region);
    if(isSocial)SESSION.socialRequests++;
    if(isRegional&&region.region==="JORDAN"&&region.city)SESSION.recordRegionalHit(region.city);
    return result;
}

function prefetchSocialEndpoints(){
    if(!CFG.PREFETCH_SOCIAL_DNS)return;
    for(var i=0;i<SOCIAL_PREFETCH.length;i++){if(!DNS_CACHE[SOCIAL_PREFETCH[i]])fastDNS(SOCIAL_PREFETCH[i]);}
}


// ═══════════════════════════════════════════════════════════════════════
//  PING ENGINE
// ═══════════════════════════════════════════════════════════════════════

var PING={
    history:[],maxHistory:60,modeStats:{},regionStats:{},
    socialStats:{count:0,total:0,min:999,max:0,avg:0},regionalStats:{},
    record:function(ms,mode,host,region){
        var estimated=Math.max(1,Math.round(ms*0.25+1));
        var entry={raw:ms,estimated:estimated,mode:mode,host:host,region:region,isSocial:false,t:now()};
        var m=MODES[mode];
        if(m&&m.socialPriority){entry.isSocial=true;this.socialStats.count++;this.socialStats.total+=estimated;
            this.socialStats.min=Math.min(this.socialStats.min,estimated);
            this.socialStats.max=Math.max(this.socialStats.max,estimated);
            this.socialStats.avg=Math.round(this.socialStats.total/this.socialStats.count);}
        if(region&&region!=="UNKNOWN"){if(!this.regionalStats[region])this.regionalStats[region]={count:0,total:0,avg:0,min:999};
            var rs=this.regionalStats[region];rs.count++;rs.total+=estimated;rs.avg=Math.round(rs.total/rs.count);rs.min=Math.min(rs.min,estimated);}
        if(this.history.length>=this.maxHistory)this.history.shift();this.history.push(entry);
        if(!this.modeStats[mode])this.modeStats[mode]={count:0,total:0,min:999,max:0,avg:0,recent:[]};
        var ms2=this.modeStats[mode];ms2.count++;ms2.total+=estimated;ms2.min=Math.min(ms2.min,estimated);
        ms2.max=Math.max(ms2.max,estimated);ms2.avg=Math.round(ms2.total/ms2.count);
        if(ms2.recent.length>=5)ms2.recent.shift();ms2.recent.push(estimated);
        if(region){if(!this.regionStats[region])this.regionStats[region]={count:0,total:0,avg:0};
            var rg=this.regionStats[region];rg.count++;rg.total+=estimated;rg.avg=Math.round(rg.total/rg.count);}
        SESSION.recordPing(estimated,mode);return estimated;},
    current:function(){return this.history.length===0?999:this.history[this.history.length-1].estimated;},
    avg:function(samples){samples=samples||5;var len=this.history.length;if(len===0)return 999;
        var s=Math.max(0,len-samples),sum=0,c=0;for(var i=s;i<len;i++){sum+=this.history[i].estimated;c++;}
        return c>0?Math.round(sum/c):999;},
    socialAvg:function(){return this.socialStats.avg;},
    best:function(){if(this.history.length===0)return 999;var b=999;for(var i=0;i<this.history.length;i++)if(this.history[i].estimated<b)b=this.history[i].estimated;return b;},
    trend:function(){if(this.history.length<6)return"STABLE";var r=this.avg(3),o=this.avg(8);
        if(r<o*0.7)return"IMPROVING";if(r>o*1.5)return"DEGRADING";return"STABLE";},
    quality:function(mode){var m=MODES[mode];if(!m)return"UNKNOWN";var c=this.avg(3),t=m.targetPing,mx=m.maxPing;
        if(c<=t)return"EXCELLENT";if(c<=t*1.2)return"VERY_GOOD";if(c<=mx)return"GOOD";if(c<=mx*1.3)return"ACCEPTABLE";return"POOR";},
    isHealthy:function(mode){var m=MODES[mode];if(!m)return true;return this.avg(3)<=m.maxPing*1.1;},
    needsOptimization:function(){return this.avg(3)>CFG.MAX_ACCEPTABLE_PING||this.trend()==="DEGRADING";},
    isCritical:function(){return this.avg(2)>CFG.CRITICAL_PING;},
    variance:function(){if(this.history.length<3)return 0;var a=this.avg(),ss=0,s=Math.max(0,this.history.length-10),c=0;
        for(var i=s;i<this.history.length;i++){var d=this.history[i].estimated-a;ss+=d*d;c++;}
        return c>0?Math.round(Math.sqrt(ss/c)):0;},
    stability:function(){var v=this.variance();if(v<=2)return"VERY_STABLE";if(v<=5)return"STABLE";if(v<=10)return"MODERATE";return"UNSTABLE";}
};


// ═══════════════════════════════════════════════════════════════════════
//  MACHINE LEARNING
// ═══════════════════════════════════════════════════════════════════════

var ML={patterns:{},socialPatterns:{},regionalPatterns:{},temporalPatterns:{},learningData:[],
    recordSuccess:function(mode,route,ping,region,isSocial){
        var key=mode+"_"+region;if(!this.patterns[key])this.patterns[key]={routes:{},totalSamples:0,bestRoute:null,bestPing:999};
        var p=this.patterns[key];if(!p.routes[route])p.routes[route]={uses:0,totalPing:0,avgPing:0};
        var rd=p.routes[route];rd.uses++;rd.totalPing+=ping;rd.avgPing=Math.round(rd.totalPing/rd.uses);
        p.totalSamples++;if(rd.avgPing<p.bestPing&&rd.uses>=3){p.bestPing=rd.avgPing;p.bestRoute=route;}
        if(isSocial){if(!this.socialPatterns[mode])this.socialPatterns[mode]={bestRoute:null,bestPing:999,samples:0};
            this.socialPatterns[mode].samples++;if(ping<this.socialPatterns[mode].bestPing){this.socialPatterns[mode].bestPing=ping;this.socialPatterns[mode].bestRoute=route;}}
        if(region&&region!=="UNKNOWN"){if(!this.regionalPatterns[region])this.regionalPatterns[region]={bestRoute:null,bestPing:999,samples:0};
            this.regionalPatterns[region].samples++;if(ping<this.regionalPatterns[region].bestPing){this.regionalPatterns[region].bestPing=ping;this.regionalPatterns[region].bestRoute=route;}}
        if(this.learningData.length>=250)this.learningData.shift();
        this.learningData.push({mode:mode,route:route,ping:ping,region:region,isSocial:!!isSocial,time:now()});},
    predict:function(mode,region){if(!CFG.ENABLE_ML_PREDICTION)return null;
        if(CFG.SOCIAL_ML&&this.socialPatterns[mode]&&this.socialPatterns[mode].samples>=3)return this.socialPatterns[mode].bestRoute;
        var key=mode+"_"+region,pat=this.patterns[key];if(!pat||pat.totalSamples<5)return null;return pat.bestRoute;},
    confidence:function(mode,region){var key=mode+"_"+region,pat=this.patterns[key];if(!pat)return 0;
        var s=pat.totalSamples;if(s>=25)return 100;if(s>=15)return 85;if(s>=10)return 70;if(s>=5)return 50;return 25;},
    getRegionalBest:function(region){if(!this.regionalPatterns[region])return null;
        return this.regionalPatterns[region].samples>=3?this.regionalPatterns[region].bestRoute:null;}};


// ═══════════════════════════════════════════════════════════════════════
//  PROXY HEALTH MONITOR
// ═══════════════════════════════════════════════════════════════════════

var HEALTH={};
function initHealth(){for(var n in PROXY){var p=PROXY[n];HEALTH[n]={uses:0,successes:0,failures:0,lastUse:0,lastSuccess:0,load:0,status:"READY",avgPing:p.targetPing,recentPings:[],uptime:100,score:100,socialUses:0,regionalUses:0};}}
function updateHealth(name,success,ping,isSocial,isRegional){
    if(!HEALTH[name])return;var h=HEALTH[name],p=PROXY[name];h.uses++;h.lastUse=now();
    if(isSocial)h.socialUses++;if(isRegional)h.regionalUses++;
    if(success){h.successes++;h.lastSuccess=now();}else h.failures++;
    if(ping){if(h.recentPings.length>=10)h.recentPings.shift();h.recentPings.push(ping);
        var s=0;for(var i=0;i<h.recentPings.length;i++)s+=h.recentPings[i];h.avgPing=Math.round(s/h.recentPings.length);}
    if(p&&p.capacity)h.load=Math.min(100,Math.round((h.uses/p.capacity)*100));
    if(h.uses>0)h.uptime=Math.round((h.successes/h.uses)*100);h.score=calcHealthScore(h,p);
    if(h.score>=90)h.status="EXCELLENT";else if(h.score>=75)h.status="GOOD";else if(h.score>=60)h.status="FAIR";
    else if(h.score>=40)h.status="DEGRADED";else if(h.score>=20)h.status="POOR";else h.status="CRITICAL";}
function calcHealthScore(h,p){var s=100;s-=(100-h.uptime)*0.4;
    if(h.load>90)s-=20;else if(h.load>75)s-=10;else if(h.load>60)s-=5;
    if(p&&h.avgPing){var r=h.avgPing/p.targetPing;if(r<=1.0)s+=5;else if(r<=1.3)s-=10;else if(r<=1.6)s-=20;else s-=30;}
    var fr=h.uses>0?(h.failures/h.uses):0;if(fr>0.2)s-=15;else if(fr>0.1)s-=7;
    if(p&&p.socialOptimized&&h.socialUses>0)s+=10;return Math.max(0,Math.min(100,Math.round(s)));}
function getHealthStatus(name){return HEALTH[name]||{status:"UNKNOWN",load:100,score:0,avgPing:999};}

function getBestProxies(tier,carrier,count,socialOptimized,regionHop){
    var c=[];for(var n in PROXY){var p=PROXY[n],h=HEALTH[n];if(!p||!h)continue;
        if(tier!==undefined&&p.tier!==tier)continue;if(carrier&&p.carrier!==carrier)continue;
        if(h.status==="CRITICAL"||h.status==="POOR")continue;
        if(socialOptimized&&!p.socialOptimized)continue;if(regionHop&&p.regionHop!==regionHop)continue;
        c.push({name:n,score:calcProxyScore(p,h,socialOptimized)});}
    c.sort(function(a,b){return b.score-a.score;});count=count||c.length;
    var r=[];for(var i=0;i<Math.min(count,c.length);i++)r.push(c[i].name);return r;}

// ═══ جلب بروكسيات خليجية (للوبي والتجنيد فقط) ═══
function getGulfProxies(count, socialOptimized) {
    var c = [];
    for (var n in PROXY) {
        var p = PROXY[n], h = HEALTH[n];
        if (!p || !h) continue;
        if (!p.country || p.country === "JO") continue; // استبعد الأردني
        if (h.status === "CRITICAL" || h.status === "POOR") continue;
        if (socialOptimized && !p.socialOptimized) continue;
        c.push({name: n, score: calcProxyScore(p, h, socialOptimized)});
    }
    c.sort(function(a, b) { return b.score - a.score; });
    count = count || c.length;
    var r = [];
    for (var i = 0; i < Math.min(count, c.length); i++) r.push(c[i].name);
    return r;
}

// ═══ جلب بروكسيات مختلطة (أردن + خليج) للوبي ═══
function getMixedLobbyProxies(count) {
    count = count || 4;
    var jordanCount = Math.ceil(count * CFG.JORDAN_WEIGHT / 100); // 60% أردن
    var gulfCount = count - jordanCount;                            // 40% خليج
    
    var jordanProxies = getBestProxies(0, null, jordanCount, true);
    var gulfProxies = getGulfProxies(gulfCount, false);
    
    // إذا لم يتوفر بروكسي خليجي كافي، أكمل من الأردن
    if (gulfProxies.length < gulfCount) {
        var extra = gulfCount - gulfProxies.length;
        var extraJordan = getBestProxies(1, null, extra, true);
        gulfProxies = gulfProxies.concat(extraJordan);
    }
    
    // دمج: أردن أولاً ثم خليج
    var mixed = [];
    var jIdx = 0, gIdx = 0;
    for (var i = 0; i < count; i++) {
        if (i < jordanCount && jIdx < jordanProxies.length) {
            mixed.push(jordanProxies[jIdx++]);
        } else if (gIdx < gulfProxies.length) {
            mixed.push(gulfProxies[gIdx++]);
        } else if (jIdx < jordanProxies.length) {
            mixed.push(jordanProxies[jIdx++]);
        }
    }
    
    SESSION.totalRotations++;
    return mixed;
}

// ═══ تدوير سلاسل الخليج ═══
function getNextGulfChain() {
    var idx = ROTATION.gulfRotationIndex % GULF_LOBBY_CHAINS.length;
    ROTATION.gulfRotationIndex++;
    return REGIONAL_HOPS[GULF_LOBBY_CHAINS[idx]];
}

function calcProxyScore(p,h,social){var s=0;s+=(p.priority/100)*40;s+=(h.score/100)*30;
    var pr=h.avgPing/p.targetPing;if(pr<=1.0)s+=20;else if(pr<=1.2)s+=15;else if(pr<=1.5)s+=10;
    if(h.load<=50)s+=10;else if(h.load<=70)s+=7;else if(h.load<=85)s+=4;
    if(social&&p.socialOptimized){s+=20;if(p.socialDedicated)s+=15;}return Math.round(s);}

initHealth();


// ═══════════════════════════════════════════════════════════════════════
//  GUARD SYSTEM
// ═══════════════════════════════════════════════════════════════════════

var GUARD={
    blockedHosts:{},trustedHosts:{},
    isJordan:function(ip){if(!ip||!isIPv4(ip))return false;return inRanges(ip,JO_NETS);},
    isGulf:function(ip){if(!ip||!isIPv4(ip))return false;return inRanges(ip,ALL_GULF_NETS);},
    isJordanOrGulf:function(ip){return this.isJordan(ip)||this.isGulf(ip);},
    getJordanCity:function(ip){if(!this.isJordan(ip))return null;for(var c in JO_CITIES)if(inRanges(ip,JO_CITIES[c]))return c;return"JORDAN_OTHER";},
    getGulfCountry:function(ip){if(!this.isGulf(ip))return null;
        for(var country in GULF_NETS)if(inRanges(ip,GULF_NETS[country]))return country;return"GULF_OTHER";},
    checkDestination:function(ip,host,mode){
        if(!ip)return true;
        if(ip.indexOf(":")!==-1&&(CFG.JORDAN_ONLY_IN_GAME||CFG.BLOCK_INTERNATIONAL_IN_GAME)){
            this.blockedHosts[host]={reason:"IPv6",time:now()};SESSION.blockedHits++;return false;}
        if(this.trustedHosts[host])return true;if(this.blockedHosts[host])return false;
        
        var m=MODES[mode];
        
        // ═══ IP أردني — مقبول دائماً ═══
        if(this.isJordan(ip)){
            var city=this.getJordanCity(ip);
            this.trustedHosts[host]={ip:ip,city:city,since:now(),country:"JO"};
            SESSION.jordanHits++;SESSION.recordRegionalHit(city);
            if(m&&m.socialPriority)SESSION.jordanPlayersFound++;return true;}
        
        // ═══ IP خليجي — مقبول في اللوبي والتجنيد فقط ═══
        if(this.isGulf(ip)){
            if(m&&m.allowGulf&&isLobbyOrRecruitment(mode)){
                var gulfCountry=this.getGulfCountry(ip);
                this.trustedHosts[host]={ip:ip,country:gulfCountry,since:now()};
                SESSION.gulfHits++;SESSION.recordRegionalHit("GULF_"+gulfCountry);
                if(m&&m.socialPriority)SESSION.gulfPlayersFound++;return true;}
            // خليجي في المباراة → مرفوض
            if(isInGame(mode)){
                this.blockedHosts[host]={reason:"Gulf blocked in-game",time:now()};
                SESSION.blockedHits++;return false;}}
        
        // ═══ IP دولي — مرفوض ═══
        SESSION.foreignHits++;
        if(isInGame(mode)&&CFG.BLOCK_INTERNATIONAL_IN_GAME){
            this.blockedHosts[host]={reason:"Intl blocked in-game",time:now()};SESSION.blockedHits++;return false;}
        if(CFG.JORDAN_ONLY_IN_GAME&&isInGame(mode)){
            this.blockedHosts[host]={reason:"JO only in-game",time:now()};SESSION.blockedHits++;return false;}
        this.blockedHosts[host]={reason:"Intl blocked",time:now()};SESSION.blockedHits++;return false;},
    
    buildChain:function(names,mode,req){
        var chain=[],used={};req=req||{};
        for(var i=0;i<names.length;i++){var name=names[i];if(used[name])continue;if(!PROXY[name])continue;
            var proxy=PROXY[name],health=getHealthStatus(name);
            if(health.status==="CRITICAL"||health.status==="POOR")continue;
            // في المباراة: أردن فقط
            if(isInGame(mode)&&CFG.JORDAN_ONLY_IN_GAME&&proxy.country&&proxy.country!=="JO")continue;
            if(req.burst&&!proxy.burstCapable)continue;if(req.ultraBurst&&!proxy.ultraBurst)continue;
            if(req.hyperBurst&&!proxy.hyperBurst)continue;
            if(req.socialOptimized&&!proxy.socialOptimized)continue;
            if(req.tier!==undefined&&proxy.tier>req.tier)continue;
            chain.push("PROXY "+proxy.ip+":"+proxy.port);used[name]=true;
            var m=MODES[mode];updateHealth(name,true,proxy.targetPing,m&&m.socialPriority,!!proxy.regionHop);
            if(chain.length>=CFG.MAX_PROXY_CHAIN)break;}
        if(chain.length===0)return CFG.FAIL_CLOSED?BLOOD.BLK:BLOOD.DIR;
        return chain.join("; ")+(CFG.FAIL_CLOSED?("; "+BLOOD.BLK):"; DIRECT");}
};


// ═══════════════════════════════════════════════════════════════════════
//  STICKY / REGION / MODE / QUALITY / CONNECTION / TIME / CARRIER
// ═══════════════════════════════════════════════════════════════════════

var STICKY={};
function stickyGet(k){var e=STICKY[k];if(!e)return null;if(now()-e.created>e.ttl){delete STICKY[k];return null;}e.hits++;e.lastHit=now();return e.value;}
function stickySet(k,v,t){STICKY[k]={value:v,created:now(),ttl:t||CFG.STICKY_TTL,hits:0,lastHit:now()};}
function stickyClear(k){delete STICKY[k];}
function stickyExtend(k,e){if(STICKY[k])STICKY[k].ttl+=e;}

function isLobbyOrRecruitment(mode){var m=MODES[mode];if(!m)return false;return m.gameState==="SOCIAL"||m.gameState==="PRE_MATCH";}
function isInGame(mode){var m=MODES[mode];if(!m)return false;return m.gameState==="IN_GAME";}

function detectRegion(host,ip){
    if(ip&&GUARD.isJordan(ip))return{region:"JORDAN",city:GUARD.getJordanCity(ip),confidence:100};
    if(ip&&GUARD.isGulf(ip)){var gc=GUARD.getGulfCountry(ip);return{region:"GULF",country:gc,confidence:90};}
    var h=host.toLowerCase();var jp=["jo","jordan","amman","irbid","zarqa","aqaba","karak","mafraq","jerash",
        "ajloun","balqa","salt","madaba","tafilah","maan","petra","me-jo","mena-jo"];
    for(var i=0;i<jp.length;i++)if(h.indexOf(jp[i])!==-1)return{region:"JORDAN",confidence:85};
    return{region:"UNKNOWN",confidence:0};}

function detectMode(host){var h=host.toLowerCase();
    for(var i=0;i<MODE_PRIORITY.length;i++){var mn=MODE_PRIORITY[i],m=MODES[mn];if(!m||!m.sig)continue;
        for(var j=0;j<m.sig.length;j++){if(h.indexOf(m.sig[j])!==-1){
            if(m.socialPriority){if(mn==="FRIEND_DISCOVERY")SESSION.recordSocialInteraction("FRIEND_DISCOVERY");
                else if(mn==="CREW_RECRUITMENT")SESSION.recordSocialInteraction("CREW_SEARCH");
                else if(mn==="LOBBY"||mn==="MATCHMAKING")SESSION.recordSocialInteraction("LOBBY_JOIN");}
            return mn;}}}return"CLASSIC";}

function assessServerQuality(ip,host,mode){var s=50;
    if(ip&&GUARD.isJordan(ip)){s+=50;var c=GUARD.getJordanCity(ip);
        if(c==="AMMAN_CORE")s+=15;else if(c&&c.indexOf("AMMAN")!==-1)s+=10;
        else if(c==="IRBID"||c==="ZARQA")s+=8;else s+=5;}
    else if(ip&&GUARD.isGulf(ip)&&isLobbyOrRecruitment(mode)){s+=35;} // بونص الخليج في اللوبي
    var rg=detectRegion(host,ip);if(rg.region==="JORDAN")s+=rg.confidence*0.3;
    s=Math.max(0,Math.min(100,s));
    if(s>=90)return"EXCELLENT";if(s>=75)return"GOOD";if(s>=60)return"FAIR";if(s>=40)return"POOR";return"UNACCEPTABLE";}

var CONNECTION={profile:function(){var a=PING.avg(5),b=PING.best();var t="UNKNOWN",q="UNKNOWN";
    if(a<=4&&b<=2){t="5G_ULTRA";q="EXCELLENT";}else if(a<=6&&b<=4){t="5G_PREMIUM";q="EXCELLENT";}
    else if(a<=10){t="5G_GOOD";q="VERY_GOOD";}else if(a<=18){t="4G_EXCELLENT";q="GOOD";}
    else if(a<=30){t="4G_GOOD";q="FAIR";}else{t="WEAK";q="POOR";}
    SESSION.networkQuality=q;return{type:t,quality:q,avgPing:a,bestPing:b,tier:this.getTier(t)};},
    getTier:function(t){if(t.indexOf("5G_ULTRA")===0||t.indexOf("5G_PREMIUM")===0)return 0;
        if(t.indexOf("5G")===0||t.indexOf("4G_EXCELLENT")===0)return 1;return 2;},
    boost:function(){var p=this.profile();if(p.type==="5G_ULTRA")return 90;if(p.type==="5G_PREMIUM")return 80;
        if(p.type==="5G_GOOD")return 60;if(p.type==="4G_EXCELLENT")return 45;if(p.type==="4G_GOOD")return 25;return -30;}};

var TIME={isPeakHours:function(){var h=(new Date()).getHours();return(h>=16||h<=2);},
    isWeekend:function(){var d=(new Date()).getDay();return(d===5||d===6);},
    getBoost:function(){if(this.isPeakHours()&&this.isWeekend())return 35;if(this.isPeakHours()||this.isWeekend())return 20;return 0;}};

function getCarrier(ip){
    if(!ip||!isIPv4(ip))return"UNKNOWN";
    if(isInNet(ip,"46.185.128.0","255.255.128.0")||isInNet(ip,"94.127.208.0","255.255.240.0"))return"ORANGE";
    if(isInNet(ip,"79.173.192.0","255.255.192.0")||isInNet(ip,"109.237.192.0","255.255.224.0"))return"ZAIN";
    if(isInNet(ip,"82.212.0.0","255.255.0.0")||isInNet(ip,"212.35.64.0","255.255.192.0"))return"UMNIAH";
    if(isInNet(ip,"188.247.0.0","255.255.0.0")||isInNet(ip,"94.230.0.0","255.255.0.0"))return"JT";
    return"OTHER";}
function getCarrierBonus(c){if(c==="ORANGE")return 50;if(c==="ZAIN")return 47;if(c==="UMNIAH")return 42;if(c==="JT")return 32;return 0;}


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME AI SCORING ENGINE — 22 Factors
// ═══════════════════════════════════════════════════════════════════════

function calculateScore(ip,host,port,dns,mode){
    var score=0,m=MODES[mode];
    if(m){score+=m.priority*5;if(m.socialPriority)score+=40;if(m.matchmakingSpeed)score+=m.matchmakingSpeed*6;}else score+=25;
    var dt=dns.dt;if(dt<=1)score+=55;else if(dt<=3)score+=50;else if(dt<=6)score+=42;else if(dt<=12)score+=32;else if(dt<=25)score+=20;else score-=30;
    var q=PING.quality(mode);if(q==="EXCELLENT")score+=45;else if(q==="VERY_GOOD")score+=35;else if(q==="GOOD")score+=22;else if(q==="ACCEPTABLE")score+=8;else score-=40;
    
    // بونص الأردن
    if(ip&&GUARD.isJordan(ip)){score+=200;var carrier=getCarrier(ip);score+=getCarrierBonus(carrier);
        var city=GUARD.getJordanCity(ip);var cb=0;
        if(city==="AMMAN_CORE")cb=45;else if(city==="AMMAN_METRO")cb=40;else if(city==="AMMAN_CITY")cb=35;
        else if(city==="AMMAN_NORTH"||city==="AMMAN_SOUTH")cb=32;
        else if(city==="IRBID"||city==="ZARQA")cb=28;else if(city==="AQABA")cb=25;else score+=12;
        score+=cb;SESSION.recordRegionalHit(city);
        if(m&&m.priority>=9)score+=45;if(m&&m.socialPriority)score+=70;if(m&&m.searchRadius)score+=25;
        if(TIME.isPeakHours())score+=25;}
    
    // بونص الخليج (في اللوبي والتجنيد فقط)
    if(ip&&GUARD.isGulf(ip)&&isLobbyOrRecruitment(mode)){
        score+=120; // بونص أقل من الأردن
        var gc=GUARD.getGulfCountry(ip);
        if(gc==="SA")score+=20;else if(gc==="AE")score+=18;else if(gc==="KW")score+=16;
        else if(gc==="QA")score+=15;else if(gc==="BH")score+=14;else if(gc==="OM")score+=12;
        SESSION.recordRegionalHit("GULF_"+gc);
        if(m&&m.socialPriority)score+=40;}
    
    var rg=detectRegion(host,ip);
    if(rg.region==="JORDAN")score+=90+(rg.confidence*0.2);
    else if(rg.region==="GULF"&&isLobbyOrRecruitment(mode))score+=50;
    else score-=80;
    
    score+=CONNECTION.boost();
    var st=PING.stability();if(st==="VERY_STABLE")score+=35;else if(st==="STABLE")score+=22;else if(st==="MODERATE")score+=8;else score-=40;
    if(port===443)score+=15;else if(port>=10000&&port<=10100)score+=22;else if(port===80)score+=10;
    var tr=PING.trend();if(tr==="IMPROVING")score+=40;else if(tr==="DEGRADING")score-=60;
    if(PING.isCritical())score-=80;else if(PING.needsOptimization())score-=45;
    if(m){if(ip&&GUARD.isJordan(ip))score+=m.jordanBonus||0;
        else if(ip&&GUARD.isGulf(ip)&&isLobbyOrRecruitment(mode))score+=100; // بونص خليجي
        else score+=m.foreignPenalty||0;}
    score+=TIME.getBoost();
    if(dns.socialEndpoint){score+=70;if(ip&&GUARD.isJordan(ip))score+=40;else if(ip&&GUARD.isGulf(ip))score+=20;}
    if(m&&m.visibilityBoost)score=Math.round(score*(1+(m.visibilityBoost*0.1)));
    if(m&&m.matchmakingSpeed)score=Math.round(score*(1+((m.matchmakingSpeed-1)*0.15)));
    if(score<0)return 0;if(score>600)return 100;return Math.round((score/600)*100);
}


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME ROUTING ENGINE — مع خليج وإعادة تشغيل
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode,score,ip,port,host,dns){
    var m=MODES[mode];if(!m)m=MODES["CLASSIC"];
    var strategy=m.strategy,region=dns.region,city=region.city||"UNKNOWN";
    var carrier=getCarrier(ip),connProfile=CONNECTION.profile();
    
    // ═══ معالجة إعادة التشغيل ═══
    if(RESTART.processWarmup()){
        // في مرحلة التسخين — استخدم أفضل بروكسي أردني
        return GUARD.buildChain(["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_JT_1","ORANGE_CORE_1"],mode,
            {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}
    
    if(m.gameState)SESSION.updateGameState(m.gameState);
    if(!GUARD.checkDestination(ip,host,mode))return BLOOD.BLK;
    
    // ML Prediction
    if(CFG.ENABLE_ML_PREDICTION&&SESSION.isWarm()){
        var predicted=ML.predict(mode,region.region||"UNKNOWN");
        var conf=ML.confidence(mode,region.region||"UNKNOWN");
        if(predicted&&conf>=65&&PING.isHealthy(mode))return predicted;}
    
    // Sticky Check
    if(m.sticky&&SESSION.isWarm()){
        var sticky=stickyGet(mode+"_"+city);if(!sticky)sticky=stickyGet(mode);
        if(sticky&&PING.isHealthy(mode)&&!PING.needsOptimization())return sticky;}
    
    // Emergency
    if(PING.isCritical()){stickyClear(mode);stickyClear(mode+"_"+city);
        var em=GUARD.buildChain(getBestProxies(0,null,4,true),mode,
            {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});
        stickySet(mode,em,m.stickyDuration);ML.recordSuccess(mode,em,PING.current(),region.region,m.socialPriority);return em;}
    
    var route=null;
    var shouldRotate=ROTATION.shouldRotate();
    ROTATION.requestSinceRotate++;
    var req={burst:m.requiresBurst||false,ultraBurst:m.ultraBurst||false,hyperBurst:m.hyperBurst||false,
        tier:connProfile.tier,socialOptimized:m.socialPriority||false};
    
    // ═══════════════════════════════════════════════════════════
    //  STRATEGY: SOCIAL_ULTRA_FORCE (الوبي/تجنيد)
    //  ════ أردن + خليج — لاعبين أكثر ════
    // ═══════════════════════════════════════════════════════════
    if(strategy==="SOCIAL_ULTRA_FORCE"){
        // ═══ خطوة 1: اختر سلسلة خليجية للتدوير ═══
        if(m.allowGulf&&CFG.ENABLE_GULF_IN_RECRUITMENT){
            var gulfChain=getNextGulfChain();
            if(gulfChain){
                route=GUARD.buildChain(gulfChain,mode,
                    {burst:true,ultraBurst:true,tier:1,socialOptimized:true});}}
        
        // ═══ خطوة 2: إذا فشل الخليج، الأردن ═══
        if(!route){
            if(city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS&&REGIONAL_HOPS[city]){
                route=GUARD.buildChain(REGIONAL_HOPS[city],mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}
            if(!route){
                var socialList=shouldRotate?
                    getMixedLobbyProxies(4):
                    ["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_JT_1","SOCIAL_UMNIAH_1"];
                route=GUARD.buildChain(socialList,mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}}
    }
    // ═══════════════════════════════════════════════════════════
    //  STRATEGY: LOBBY_ULTRA_FORCE
    //  ════ أردن + خليج — لاعبين أكثر ════
    // ═══════════════════════════════════════════════════════════
    else if(strategy==="LOBBY_ULTRA_FORCE"){
        // ═══ احتمال 40% لاستخدام بروكسي خليجي ═══
        var useGulf=Math.random()*100<CFG.GULF_WEIGHT;
        
        if(m.allowGulf&&CFG.ENABLE_GULF_IN_LOBBY&&useGulf){
            var gulfChain2=getNextGulfChain();
            if(gulfChain2){
                route=GUARD.buildChain(gulfChain2,mode,
                    {burst:true,ultraBurst:true,tier:1,socialOptimized:true});}}
        
        if(!route){
            if(city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS&&REGIONAL_HOPS[city]){
                route=GUARD.buildChain(REGIONAL_HOPS[city],mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}
            if(!route){
                var pList=shouldRotate?getMixedLobbyProxies(4):
                    getBestProxies(0,carrier,4,true);
                route=GUARD.buildChain(pList,mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}}
    }
    // ═══════════════════════════════════════════════════════════
    //  STRATEGIES الأخرى (مباراة — أردن فقط)
    // ═══════════════════════════════════════════════════════════
    else if(strategy==="SOCIAL_CRITICAL"){
        route=GUARD.buildChain(getBestProxies(0,null,4,true),mode,{burst:true,tier:0,socialOptimized:true});}
    else if(strategy==="SOCIAL_GAME_CRITICAL"){
        if(score>=80||(ip&&GUARD.isJordan(ip))){
            route=GUARD.buildChain(getBestProxies(0,carrier,4,true),mode,{burst:true,tier:0,socialOptimized:true});
        }else{route=GUARD.buildChain(getBestProxies(0,null,4,false),mode,{burst:true,tier:0});}}
    else if(strategy==="GAME_ULTRA_CRITICAL"){
        if(city!=="UNKNOWN"&&REGIONAL_HOPS[city]){
            route=GUARD.buildChain(REGIONAL_HOPS[city],mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0});}
        if(!route){
            if(score>=85||(ip&&GUARD.isJordan(ip))){
                route=GUARD.buildChain(getBestProxies(0,carrier,4,false),mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0});
            }else{route=GUARD.buildChain(getBestProxies(0,null,4,false),mode,{burst:true,tier:0});}}
    }
    else if(strategy==="SECURE_CRITICAL"){
        route=GUARD.buildChain(["ORANGE_CORE_1","SOCIAL_ORANGE_1","ZAIN_CORE_1","JT_CORE_1"],mode,req);}
    else if(strategy==="GAME_CRITICAL"){
        if(score>=80||(ip&&GUARD.isJordan(ip))){
            route=GUARD.buildChain(getBestProxies(0,carrier,4,false),mode,req);
        }else{route=GUARD.buildChain(getBestProxies(1,null,4,false),mode,req);}}
    else{route=GUARD.buildChain(getBestProxies(0,null,4,false),mode,req);}
    
    // Default fallback
    if(!route){route=GUARD.buildChain(getBestProxies(0,null,4,m.socialPriority),mode,
        {burst:true,tier:0,socialOptimized:m.socialPriority});}
    
    // Save to sticky
    if(m.sticky){stickySet(mode,route,m.stickyDuration);if(city&&city!=="UNKNOWN")stickySet(mode+"_"+city,route,m.stickyDuration);}
    if(CFG.ENABLE_ML_PREDICTION)ML.recordSuccess(mode,route,PING.current(),region.region,m.socialPriority);
    return route;
}


// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url,host){
    SESSION.requests++;SESSION.updateTimeContext();
    if(SESSION.requests===1&&CFG.PREFETCH_SOCIAL_DNS)prefetchSocialEndpoints();
    if(!host)return BLOOD.DIR;var h=host.toLowerCase();
    if(isPlainHostName(host))return BLOOD.DIR;
    if(isIPv4(host)){if(isInNet(host,"10.0.0.0","255.0.0.0")||isInNet(host,"172.16.0.0","255.240.0.0")||
        isInNet(host,"192.168.0.0","255.255.0.0")||isInNet(host,"127.0.0.0","255.0.0.0"))return BLOOD.DIR;}
    if(containsAny(h,DIRECT_KEYS)&&!containsAny(h,PUBG_KEYS)){SESSION.directHits++;return BLOOD.DIR;}
    if(!containsAny(h,PUBG_KEYS)){SESSION.directHits++;return BLOOD.DIR;}
    SESSION.pubgRequests++;var dns=fastDNS(host),ip=dns.ip,mode=dns.mode,port=getPort(url);
    SESSION.recordMode(mode);
    if(ip&&ip.indexOf(":")!==-1){if(isInGame(mode)&&CFG.BLOCK_INTERNATIONAL_IN_GAME){SESSION.blockedHits++;return BLOOD.BLK;}}
    var score=calculateScore(ip,h,port,dns,mode);
    return selectRoute(mode,score,ip,port,h,dns);
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now(){return(new Date()).getTime();}
function generateSessionId(){return"JO_GULF_V34_"+now()+"_"+Math.random().toString(36).substr(2,9);}
function isIPv4(str){if(!str||str.indexOf(":")!==-1)return false;var p=str.split(".");if(p.length!==4)return false;
    for(var i=0;i<4;i++){var n=parseInt(p[i],10);if(isNaN(n)||n<0||n>255)return false;}return true;}
function maskFromCIDR(cidr){cidr=String(cidr);var m={"8":"255.0.0.0","10":"255.192.0.0","11":"255.224.0.0","12":"255.240.0.0",
    "13":"255.248.0.0","14":"255.252.0.0","15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0",
    "19":"255.255.224.0","20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0","24":"255.255.255.0"};
    return m[cidr]||"255.255.0.0";}
function inRanges(ip,ranges){if(!ip||!isIPv4(ip))return false;
    for(var i=0;i<ranges.length;i++){if(isInNet(ip,ranges[i][0],maskFromCIDR(ranges[i][1])))return true;}return false;}
function containsAny(str,kw){for(var i=0;i<kw.length;i++)if(str.indexOf(kw[i])!==-1)return true;return false;}
function getPort(url){var m=url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);if(m)return parseInt(m[1],10);
    if(url.indexOf("https://")===0)return 443;if(url.indexOf("http://")===0)return 80;return 443;}


// ═══════════════════════════════════════════════════════════════════════
//  PERFORMANCE REPORT
// ═══════════════════════════════════════════════════════════════════════

function generatePerformanceReport(){
    if(!CFG.AUTO_REPORT_GENERATION)return null;
    return{version:CFG.VERSION,session:SESSION.getReport(),dns:DNS_STATS,
        ping:{current:PING.current(),avg:PING.avg(),socialAvg:PING.socialAvg(),best:PING.best(),
            trend:PING.trend(),stability:PING.stability()},
        players:{jordanRatio:SESSION.jordanRatio(),gulfRatio:SESSION.gulfRatio(),
            jordanFound:SESSION.jordanPlayersFound,gulfFound:SESSION.gulfPlayersFound},
        restart:{matchCount:RESTART.matchCount,restartCount:RESTART.restartCount,
            warmupRemaining:RESTART.warmupRemaining,lastRestart:RESTART.lastRestartTime},
        regional:{activeRegions:SESSION.totalRegionalCoverage,regionalHits:SESSION.regionalHits},
        connection:CONNECTION.profile(),
        healthiest:getBestProxies(undefined,undefined,5,false),
        healthiestGulf:getGulfProxies(3,false)};
}


// ═══════════════════════════════════════════════════════════════════════
//  END OF PUBG JORDAN ULTIMATE v34.0
//  
//  🇯🇴 الأردن فقط في المباراة — أفضل بنق
//  🌍 الأردن + الخليج في اللوبي والتجنيد
//  🔄 إعادة تشغيل تلقائية بعد كل مباراة
//  🇸🇦🇦🇪🇰🇼🇶🇦🇧🇭🇴 بروكسيات من 6 دول خليجية
//  🧠 ML + تدوير + تنوع اللاعبين
// ═══════════════════════════════════════════════════════════════════════
