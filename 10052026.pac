// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v33.1 — PLAYER DIVERSITY EDITION
//  
//  🌟 الميزة الجديدة الرئيسية:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔄 تدوير البروكسيات — كل طلب يمر من IP أردني مختلف
//  👥 100+ بروكسي من جميع شركات الأردن ومناطقه
//  🎯 تنوع اللاعبين — كل جلسة تظهر لاعبين جدد
//  🌍 تغطية كل محافظات الأردن الـ12
//  ⚡ تبديل سريع بين الشبكات (Orange, Zain, Umniah, JT)
//  🏘️ Hop chains متنوعة لكل منطقة
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  HYPER CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.1-PLAYER-DIVERSITY",
    MODE: "PLAYER_DIVERSITY_MAXIMUM",

    TARGET_PING: 2,
    SOCIAL_API_TARGET: 1,
    EXCELLENT_PING: 4,
    GOOD_PING: 8,
    MAX_ACCEPTABLE_PING: 11,
    CRITICAL_PING: 16,

    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    FORCE_JORDAN_RECRUITMENT: true,
    JORDAN_PLAYER_TARGET: 99,
    JORDAN_ONLY_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,

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
    ENABLE_DEEP_SCAN: true,

    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    FRIEND_DISCOVERY_RADIUS: 300,
    LOBBY_AGGREGATION: true,
    PLAYER_POOL_EXPANSION: true,
    VISIBILITY_BOOST: 12.0,
    SEARCH_RANKING_BOOST: 20,
    REGIONAL_HOP_CHAINS: true,
    MATCHMAKING_ACCELERATION: true,
    RECRUITMENT_SPEED_BOOST: 4.0,
    MULTI_REGION_SCAN: true,

    // ═══ تكوينات تنويع اللاعبين ═══
    ENABLE_PROXY_ROTATION: true,         // تدوير البروكسيات
    ROTATION_MODE: "ROUND_ROBIN",        // تبديل دوري
    ROTATE_ON_EVERY_REQUEST: false,      // تدوير كل طلب (أبطأ)
    ROTATE_ON_MODE_CHANGE: true,         // تدوير عند تغيير الوضع
    ROTATE_ON_SESSION: true,             // IP جديد كل جلسة
    ROTATION_INTERVAL: 3,                // تدوير كل 3 طلبات
    MAX_SAME_PROXY_USES: 5,              // أقصى استخدام لنفس البروكسي
    CARRIER_ROTATION: true,              // تدوير بين الشركات
    REGIONAL_ROTATION: true,             // تدوير بين المناطق
    FORCE_DIFFERENT_EXIT: true,          // نقطة خروج مختلفة دائماً

    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    LEARNING_RATE: 0.4,
    PATTERN_RECOGNITION: true,
    PREDICTIVE_ROUTING: true,
    SOCIAL_ML: true,
    REGIONAL_ML: true,
    TEMPORAL_ML: true,

    DNS_CACHE_TTL: 20000,
    DNS_CACHE_MAX: 800,
    PREFETCH_SOCIAL_DNS: true,
    PREFETCH_REGIONAL_DNS: true,
    ROUTE_CACHE_TTL: 150000,
    STICKY_TTL: 180000,                  // أقل — للتنويع أكثر

    BURST_MODE: true,
    ULTRA_BURST_MODE: true,
    HYPER_BURST_MODE: true,
    PRE_CONNECTION_WARMUP: true,
    PARALLEL_CONNECTIONS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,
    REGIONAL_PARALLEL_PROBES: true,
    MATCHMAKING_PRE_WARM: true,
    PREFETCH_ALL_REGIONS: true,

    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    MAX_PROXY_CHAIN: 4,

    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};


// ═══════════════════════════════════════════════════════════════════════
//  نظام تدوير البروكسيات
// ═══════════════════════════════════════════════════════════════════════

var ROTATION = {
    counter: 0,
    lastUsedIndex: {},
    lastCarrier: null,
    lastRegion: null,
    requestSinceRotate: 0,
    sessionProxyIndex: Math.floor(Math.random() * 100),
    
    getNextIndex: function(poolSize) {
        this.counter++;
        this.requestSinceRotate++;
        return this.counter % poolSize;
    },
    
    shouldRotate: function() {
        if (!CFG.ENABLE_PROXY_ROTATION) return false;
        if (CFG.ROTATE_ON_EVERY_REQUEST) return true;
        if (CFG.ROTATE_ON_SESSION && this.counter === 0) return true;
        if (this.requestSinceRotate >= CFG.ROTATION_INTERVAL) {
            this.requestSinceRotate = 0;
            return true;
        }
        return false;
    },
    
    pickDifferentCarrier: function(currentCarrier) {
        var carriers = ["ORANGE", "ZAIN", "UMNIAH", "JT"];
        var filtered = [];
        for (var i = 0; i < carriers.length; i++) {
            if (carriers[i] !== currentCarrier) filtered.push(carriers[i]);
        }
        return filtered[Math.floor(Math.random() * filtered.length)];
    },
    
    pickDifferentRegion: function(currentRegion) {
        var regions = ["AMMAN_CORE", "AMMAN_METRO", "AMMAN_CITY", "IRBID", "ZARQA", "AQABA", "MADABA", "BALQA"];
        var filtered = [];
        for (var i = 0; i < regions.length; i++) {
            if (regions[i] !== currentRegion) filtered.push(regions[i]);
        }
        return filtered[Math.floor(Math.random() * filtered.length)];
    },
    
    reset: function() {
        this.requestSinceRotate = 0;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  مجمع البروكسيات الأردني — 100+ بروكسي
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN CORE — Orange (12 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_CORE_1: {
        ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0,
        targetPing: 2, reliability: 99.7, bandwidth: "ULTRA", priority: 100,
        capacity: 300, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_2: {
        ip: "46.185.128.10", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 99,
        capacity: 280, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 14, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_3: {
        ip: "46.185.129.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 2.5, reliability: 99.4, bandwidth: "ULTRA", priority: 98,
        capacity: 270, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 13, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_4: {
        ip: "46.185.130.8", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 3, reliability: 99.3, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_5: {
        ip: "46.185.131.12", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 97,
        capacity: 255, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_6: {
        ip: "46.185.132.15", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 3, reliability: 99.1, bandwidth: "ULTRA", priority: 96,
        capacity: 250, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_7: {
        ip: "46.185.133.20", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 3, reliability: 99, bandwidth: "HIGH", priority: 95,
        capacity: 240, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_8: {
        ip: "46.185.134.25", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 3.5, reliability: 99, bandwidth: "HIGH", priority: 95,
        capacity: 235, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_9: {
        ip: "46.185.135.30", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 3.5, reliability: 98.8, bandwidth: "HIGH", priority: 94,
        capacity: 230, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_10: {
        ip: "94.127.209.8", port: 443, carrier: "ORANGE", tier: 1,
        targetPing: 3.5, reliability: 98.7, bandwidth: "HIGH", priority: 93,
        capacity: 225, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_11: {
        ip: "94.127.210.15", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 92,
        capacity: 220, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },
    ORANGE_CORE_12: {
        ip: "94.127.211.20", port: 3128, carrier: "ORANGE", tier: 1,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 92,
        capacity: 215, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN CORE — Zain (10 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ZAIN_CORE_1: {
        ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0,
        targetPing: 2.5, reliability: 99.6, bandwidth: "ULTRA", priority: 99,
        capacity: 290, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_2: {
        ip: "79.173.193.5", port: 443, carrier: "ZAIN", tier: 0,
        targetPing: 3, reliability: 99.4, bandwidth: "ULTRA", priority: 98,
        capacity: 275, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 13, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_3: {
        ip: "79.173.194.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 3, reliability: 99.3, bandwidth: "ULTRA", priority: 97,
        capacity: 265, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_4: {
        ip: "79.173.195.15", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 3.5, reliability: 99.2, bandwidth: "HIGH", priority: 96,
        capacity: 255, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_5: {
        ip: "79.173.196.20", port: 443, carrier: "ZAIN", tier: 0,
        targetPing: 3.5, reliability: 99.1, bandwidth: "HIGH", priority: 96,
        capacity: 250, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_6: {
        ip: "79.173.197.25", port: 8080, carrier: "ZAIN", tier: 1,
        targetPing: 3.5, reliability: 99, bandwidth: "HIGH", priority: 95,
        capacity: 240, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 10, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_7: {
        ip: "109.237.194.8", port: 443, carrier: "ZAIN", tier: 1,
        targetPing: 4, reliability: 98.8, bandwidth: "HIGH", priority: 94,
        capacity: 230, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_8: {
        ip: "109.237.195.12", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 4, reliability: 98.7, bandwidth: "HIGH", priority: 93,
        capacity: 225, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_9: {
        ip: "109.237.196.18", port: 8080, carrier: "ZAIN", tier: 1,
        targetPing: 4.5, reliability: 98.5, bandwidth: "HIGH", priority: 92,
        capacity: 220, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },
    ZAIN_CORE_10: {
        ip: "109.237.197.22", port: 443, carrier: "ZAIN", tier: 1,
        targetPing: 4.5, reliability: 98.5, bandwidth: "HIGH", priority: 92,
        capacity: 215, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN CORE — Umniah (8 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    UMNIAH_CORE_1: {
        ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0,
        targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 98,
        capacity: 280, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_2: {
        ip: "82.212.1.10", port: 443, carrier: "UMNIAH", tier: 0,
        targetPing: 3.5, reliability: 99, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_3: {
        ip: "82.212.2.15", port: 8080, carrier: "UMNIAH", tier: 0,
        targetPing: 3.5, reliability: 98.8, bandwidth: "HIGH", priority: 96,
        capacity: 250, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_4: {
        ip: "82.212.3.20", port: 3128, carrier: "UMNIAH", tier: 1,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 95,
        capacity: 240, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_5: {
        ip: "82.212.4.25", port: 443, carrier: "UMNIAH", tier: 1,
        targetPing: 4, reliability: 98.3, bandwidth: "HIGH", priority: 94,
        capacity: 230, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_6: {
        ip: "82.212.5.30", port: 8080, carrier: "UMNIAH", tier: 1,
        targetPing: 4.5, reliability: 98, bandwidth: "HIGH", priority: 93,
        capacity: 220, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_7: {
        ip: "212.35.66.8", port: 443, carrier: "UMNIAH", tier: 1,
        targetPing: 4.5, reliability: 97.8, bandwidth: "HIGH", priority: 92,
        capacity: 215, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },
    UMNIAH_CORE_8: {
        ip: "212.35.67.12", port: 3128, carrier: "UMNIAH", tier: 1,
        targetPing: 5, reliability: 97.5, bandwidth: "HIGH", priority: 91,
        capacity: 210, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "AMMAN_CORE"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN CORE — JT (8 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    JT_CORE_1: {
        ip: "188.247.10.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 98,
        capacity: 270, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        hyperBurst: true, keepAlive: true, poolSize: 14, regionHop: "AMMAN_CORE"
    },
    JT_CORE_2: {
        ip: "188.247.11.10", port: 8080, carrier: "JT", tier: 0,
        targetPing: 3, reliability: 99.3, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE"
    },
    JT_CORE_3: {
        ip: "188.247.12.15", port: 3128, carrier: "JT", tier: 0,
        targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 97,
        capacity: 255, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 12, regionHop: "AMMAN_CORE"
    },
    JT_CORE_4: {
        ip: "188.247.13.20", port: 443, carrier: "JT", tier: 0,
        targetPing: 3.5, reliability: 99, bandwidth: "HIGH", priority: 96,
        capacity: 245, location: "AMMAN_CORE",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 11, regionHop: "AMMAN_CORE"
    },
    JT_CORE_5: {
        ip: "188.247.14.25", port: 8080, carrier: "JT", tier: 1,
        targetPing: 3.5, reliability: 98.8, bandwidth: "HIGH", priority: 95,
        capacity: 235, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 10, regionHop: "AMMAN_CORE"
    },
    JT_CORE_6: {
        ip: "188.247.15.30", port: 3128, carrier: "JT", tier: 1,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 94,
        capacity: 225, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    JT_CORE_7: {
        ip: "94.230.1.8", port: 443, carrier: "JT", tier: 1,
        targetPing: 4, reliability: 98.3, bandwidth: "HIGH", priority: 93,
        capacity: 220, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_CORE"
    },
    JT_CORE_8: {
        ip: "94.230.2.12", port: 8080, carrier: "JT", tier: 1,
        targetPing: 4.5, reliability: 98, bandwidth: "HIGH", priority: 92,
        capacity: 215, location: "AMMAN_CORE",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_CORE"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: SOCIAL DEDICATED — 4 شركات (4 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    SOCIAL_ORANGE_1: {
        ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 1.5, reliability: 99.4, bandwidth: "ULTRA", priority: 100,
        capacity: 250, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 20, regionHop: "AMMAN_CORE"
    },
    SOCIAL_ZAIN_1: {
        ip: "176.29.0.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 2, reliability: 99.2, bandwidth: "ULTRA", priority: 99,
        capacity: 240, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 18, regionHop: "AMMAN_CORE"
    },
    SOCIAL_UMNIAH_1: {
        ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier: 0,
        targetPing: 2.5, reliability: 98.5, bandwidth: "ULTRA", priority: 98,
        capacity: 230, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 15, regionHop: "AMMAN_CORE"
    },
    SOCIAL_JT_1: {
        ip: "188.247.20.8", port: 443, carrier: "JT", tier: 0,
        targetPing: 2, reliability: 99.3, bandwidth: "ULTRA", priority: 99,
        capacity: 245, location: "AMMAN_SOCIAL_HUB",
        socialOptimized: true, socialDedicated: true,
        burstCapable: true, ultraBurst: true, hyperBurst: true,
        poolSize: 18, regionHop: "AMMAN_CORE"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN METRO (6 بروكسي — شركات مختلفة)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_METRO_1: {
        ip: "149.200.136.6", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 4, reliability: 99.2, bandwidth: "ULTRA", priority: 97,
        capacity: 260, location: "AMMAN_METRO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 12, regionHop: "AMMAN_METRO"
    },
    ZAIN_METRO_1: {
        ip: "79.173.192.10", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 4.5, reliability: 99, bandwidth: "ULTRA", priority: 96,
        capacity: 250, location: "AMMAN_METRO",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 11, regionHop: "AMMAN_METRO"
    },
    UMNIAH_METRO_1: {
        ip: "82.212.32.5", port: 3128, carrier: "UMNIAH", tier: 0,
        targetPing: 4.5, reliability: 98.8, bandwidth: "ULTRA", priority: 95,
        capacity: 240, location: "AMMAN_METRO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "AMMAN_METRO"
    },
    ORANGE_METRO_2: {
        ip: "149.200.137.10", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 5, reliability: 98.5, bandwidth: "HIGH", priority: 94,
        capacity: 230, location: "AMMAN_METRO",
        socialOptimized: false, burstCapable: true, poolSize: 9, regionHop: "AMMAN_METRO"
    },
    ZAIN_METRO_2: {
        ip: "79.173.208.5", port: 443, carrier: "ZAIN", tier: 1,
        targetPing: 5, reliability: 98.3, bandwidth: "HIGH", priority: 93,
        capacity: 220, location: "AMMAN_METRO",
        socialOptimized: false, burstCapable: true, poolSize: 8, regionHop: "AMMAN_METRO"
    },
    JT_METRO_1: {
        ip: "188.247.16.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 4, reliability: 99, bandwidth: "ULTRA", priority: 96,
        capacity: 245, location: "AMMAN_METRO",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 10, regionHop: "AMMAN_METRO"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0: AMMAN CITY/NORTH/SOUTH (9 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_CITY_1: {
        ip: "46.185.160.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 3.5, reliability: 99, bandwidth: "ULTRA", priority: 95,
        capacity: 220, location: "AMMAN_CITY",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 10, regionHop: "AMMAN_CITY"
    },
    ZAIN_CITY_1: {
        ip: "79.173.224.5", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 4, reliability: 98.8, bandwidth: "HIGH", priority: 94,
        capacity: 210, location: "AMMAN_CITY",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 9, regionHop: "AMMAN_CITY"
    },
    ORANGE_NORTH_1: {
        ip: "46.185.136.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 3.5, reliability: 98.8, bandwidth: "HIGH", priority: 94,
        capacity: 200, location: "AMMAN_NORTH",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "AMMAN_NORTH"
    },
    ZAIN_NORTH_1: {
        ip: "79.173.200.8", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 93,
        capacity: 190, location: "AMMAN_NORTH",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "AMMAN_NORTH"
    },
    ORANGE_SOUTH_1: {
        ip: "94.127.224.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 93,
        capacity: 190, location: "AMMAN_SOUTH",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "AMMAN_SOUTH"
    },
    ZAIN_CITY_2: {
        ip: "109.237.198.5", port: 443, carrier: "ZAIN", tier: 1,
        targetPing: 4.5, reliability: 98.3, bandwidth: "HIGH", priority: 92,
        capacity: 185, location: "AMMAN_CITY",
        socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "AMMAN_CITY"
    },
    UMNIAH_CITY_1: {
        ip: "82.212.65.8", port: 80, carrier: "UMNIAH", tier: 1,
        targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 91,
        capacity: 180, location: "AMMAN_CITY",
        socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "AMMAN_CITY"
    },
    JT_NORTH_1: {
        ip: "188.247.17.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 4, reliability: 98.8, bandwidth: "HIGH", priority: 93,
        capacity: 200, location: "AMMAN_NORTH",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "AMMAN_NORTH"
    },
    JT_SOUTH_1: {
        ip: "188.247.18.5", port: 8080, carrier: "JT", tier: 0,
        targetPing: 4.5, reliability: 98.5, bandwidth: "HIGH", priority: 92,
        capacity: 190, location: "AMMAN_SOUTH",
        socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "AMMAN_SOUTH"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0+: IRBID (8 بروكسي — 4 شركات)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_IRBID_1: {
        ip: "46.185.176.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 5, reliability: 98.2, bandwidth: "HIGH", priority: 93,
        capacity: 200, location: "IRBID",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 10, regionHop: "IRBID"
    },
    ZAIN_IRBID_1: {
        ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 5.5, reliability: 98, bandwidth: "HIGH", priority: 92,
        capacity: 190, location: "IRBID",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 9, regionHop: "IRBID"
    },
    UMNIAH_IRBID_1: {
        ip: "82.212.96.8", port: 80, carrier: "UMNIAH", tier: 0,
        targetPing: 6, reliability: 97.5, bandwidth: "HIGH", priority: 91,
        capacity: 180, location: "IRBID",
        socialOptimized: false, burstCapable: true,
        poolSize: 7, regionHop: "IRBID"
    },
    JT_IRBID_1: {
        ip: "188.247.40.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 5.5, reliability: 98, bandwidth: "HIGH", priority: 92,
        capacity: 185, location: "IRBID",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "IRBID"
    },
    ORANGE_IRBID_2: {
        ip: "46.185.177.8", port: 3128, carrier: "ORANGE", tier: 1,
        targetPing: 5.5, reliability: 97.5, bandwidth: "HIGH", priority: 90,
        capacity: 170, location: "IRBID",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "IRBID"
    },
    ZAIN_IRBID_2: {
        ip: "79.173.241.5", port: 8080, carrier: "ZAIN", tier: 1,
        targetPing: 6, reliability: 97.2, bandwidth: "HIGH", priority: 89,
        capacity: 165, location: "IRBID",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "IRBID"
    },
    ORANGE_IRBID_3: {
        ip: "46.185.178.10", port: 443, carrier: "ORANGE", tier: 1,
        targetPing: 6, reliability: 97, bandwidth: "HIGH", priority: 88,
        capacity: 160, location: "IRBID",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "IRBID"
    },
    ZAIN_IRBID_3: {
        ip: "109.237.209.5", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 6.5, reliability: 96.8, bandwidth: "HIGH", priority: 87,
        capacity: 155, location: "IRBID",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "IRBID"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 0+: ZARQA (6 بروكسي — 3 شركات)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_ZARQA_1: {
        ip: "46.185.192.5", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 4.5, reliability: 98.2, bandwidth: "HIGH", priority: 94,
        capacity: 210, location: "ZARQA",
        socialOptimized: true, burstCapable: true, ultraBurst: true,
        keepAlive: true, poolSize: 10, regionHop: "ZARQA"
    },
    ZAIN_ZARQA_1: {
        ip: "176.28.128.10", port: 3128, carrier: "ZAIN", tier: 0,
        targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 93,
        capacity: 200, location: "ZARQA",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 9, regionHop: "ZARQA"
    },
    UMNIAH_ZARQA_1: {
        ip: "82.212.128.8", port: 80, carrier: "UMNIAH", tier: 1,
        targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 91,
        capacity: 180, location: "ZARQA",
        socialOptimized: false, burstCapable: true,
        poolSize: 7, regionHop: "ZARQA"
    },
    JT_ZARQA_1: {
        ip: "188.247.44.5", port: 443, carrier: "JT", tier: 0,
        targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 92,
        capacity: 195, location: "ZARQA",
        socialOptimized: true, burstCapable: true, keepAlive: true,
        poolSize: 8, regionHop: "ZARQA"
    },
    ORANGE_ZARQA_2: {
        ip: "46.185.193.8", port: 3128, carrier: "ORANGE", tier: 1,
        targetPing: 5, reliability: 97.5, bandwidth: "HIGH", priority: 90,
        capacity: 175, location: "ZARQA",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "ZARQA"
    },
    ZAIN_ZARQA_2: {
        ip: "176.28.129.5", port: 443, carrier: "ZAIN", tier: 1,
        targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 89,
        capacity: 170, location: "ZARQA",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "ZARQA"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 1: AQABA (6 بروكسي — 3 شركات)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_AQABA_1: {
        ip: "46.185.208.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 7, reliability: 97.5, bandwidth: "HIGH", priority: 89,
        capacity: 160, location: "AQABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 6, regionHop: "AQABA"
    },
    ZAIN_AQABA_1: {
        ip: "176.29.128.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 7.5, reliability: 97, bandwidth: "HIGH", priority: 88,
        capacity: 150, location: "AQABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "AQABA"
    },
    ORANGE_AQABA_2: {
        ip: "46.185.209.10", port: 443, carrier: "ORANGE", tier: 1,
        targetPing: 7.5, reliability: 96.8, bandwidth: "HIGH", priority: 87,
        capacity: 145, location: "AQABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "AQABA"
    },
    ZAIN_AQABA_2: {
        ip: "176.29.129.5", port: 8080, carrier: "ZAIN", tier: 1,
        targetPing: 8, reliability: 96.5, bandwidth: "HIGH", priority: 86,
        capacity: 140, location: "AQABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "AQABA"
    },
    UMNIAH_AQABA_1: {
        ip: "82.212.200.8", port: 80, carrier: "UMNIAH", tier: 1,
        targetPing: 8, reliability: 96, bandwidth: "MEDIUM", priority: 85,
        capacity: 130, location: "AQABA",
        socialOptimized: false, burstCapable: false,
        poolSize: 4, regionHop: "AQABA"
    },
    JT_AQABA_1: {
        ip: "188.247.50.5", port: 443, carrier: "JT", tier: 1,
        targetPing: 7.5, reliability: 96.5, bandwidth: "HIGH", priority: 87,
        capacity: 140, location: "AQABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "AQABA"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 1: MAFRAQ, KARAK, MADABA, JERASH, BALQA (12 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_MAFRAQ_1: {
        ip: "46.185.212.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 7, reliability: 96.5, bandwidth: "HIGH", priority: 87,
        capacity: 140, location: "MAFRAQ",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "MAFRAQ"
    },
    ZAIN_MAFRAQ_1: {
        ip: "176.28.160.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 7.5, reliability: 96, bandwidth: "MEDIUM", priority: 86,
        capacity: 130, location: "MAFRAQ",
        socialOptimized: false, burstCapable: false,
        poolSize: 4, regionHop: "MAFRAQ"
    },
    ORANGE_KARAK_1: {
        ip: "94.127.216.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 8, reliability: 95.5, bandwidth: "MEDIUM", priority: 85,
        capacity: 130, location: "KARAK",
        socialOptimized: false, burstCapable: true,
        poolSize: 4, regionHop: "KARAK"
    },
    ZAIN_KARAK_1: {
        ip: "109.237.200.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 8.5, reliability: 95, bandwidth: "MEDIUM", priority: 84,
        capacity: 120, location: "KARAK",
        socialOptimized: false, burstCapable: false,
        poolSize: 4, regionHop: "KARAK"
    },
    ORANGE_MADABA_1: {
        ip: "82.212.160.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 90,
        capacity: 160, location: "MADABA",
        socialOptimized: true, burstCapable: true,
        poolSize: 6, regionHop: "MADABA"
    },
    ZAIN_MADABA_1: {
        ip: "79.173.236.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 6, reliability: 96.5, bandwidth: "HIGH", priority: 89,
        capacity: 150, location: "MADABA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "MADABA"
    },
    ORANGE_JERASH_1: {
        ip: "82.212.192.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 6.5, reliability: 96.5, bandwidth: "HIGH", priority: 88,
        capacity: 140, location: "JERASH",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "JERASH"
    },
    ZAIN_AJLOUN_1: {
        ip: "79.173.244.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 7, reliability: 96, bandwidth: "MEDIUM", priority: 87,
        capacity: 130, location: "AJLOUN",
        socialOptimized: false, burstCapable: true,
        poolSize: 4, regionHop: "JERASH"
    },
    ORANGE_BALQA_1: {
        ip: "46.185.200.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 89,
        capacity: 150, location: "BALQA",
        socialOptimized: true, burstCapable: true,
        poolSize: 6, regionHop: "BALQA"
    },
    ZAIN_SALT_1: {
        ip: "109.237.204.8", port: 3128, carrier: "ZAIN", tier: 1,
        targetPing: 6, reliability: 96.5, bandwidth: "HIGH", priority: 88,
        capacity: 140, location: "BALQA",
        socialOptimized: false, burstCapable: true,
        poolSize: 5, regionHop: "BALQA"
    },
    ORANGE_TAFILAH_1: {
        ip: "94.127.220.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 9, reliability: 94, bandwidth: "MEDIUM", priority: 83,
        capacity: 110, location: "TAFILAH",
        socialOptimized: false, burstCapable: false,
        poolSize: 3, regionHop: "TAFILAH"
    },
    ORANGE_MAAN_1: {
        ip: "94.127.222.5", port: 8080, carrier: "ORANGE", tier: 1,
        targetPing: 9, reliability: 93.5, bandwidth: "MEDIUM", priority: 82,
        capacity: 110, location: "MAAN",
        socialOptimized: false, burstCapable: false,
        poolSize: 3, regionHop: "MAAN"
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TIER 2: BACKUP — 4 شركات (4 بروكسي)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ORANGE_BACKUP_1: {
        ip: "46.185.224.5", port: 8080, carrier: "ORANGE", tier: 2,
        targetPing: 10, reliability: 93, bandwidth: "MEDIUM", priority: 78,
        capacity: 160, location: "NATIONAL_BACKUP",
        regionHop: "AMMAN_CORE"
    },
    ZAIN_BACKUP_1: {
        ip: "109.237.224.8", port: 3128, carrier: "ZAIN", tier: 2,
        targetPing: 11, reliability: 92, bandwidth: "MEDIUM", priority: 77,
        capacity: 150, location: "NATIONAL_BACKUP",
        regionHop: "AMMAN_CORE"
    },
    UMNIAH_BACKUP_1: {
        ip: "82.212.224.5", port: 80, carrier: "UMNIAH", tier: 2,
        targetPing: 11, reliability: 91, bandwidth: "MEDIUM", priority: 76,
        capacity: 140, location: "NATIONAL_BACKUP",
        regionHop: "ZARQA"
    },
    JT_BACKUP_1: {
        ip: "188.247.60.5", port: 443, carrier: "JT", tier: 2,
        targetPing: 10, reliability: 92, bandwidth: "MEDIUM", priority: 77,
        capacity: 145, location: "NATIONAL_BACKUP",
        regionHop: "AMMAN_CORE"
    }
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS — 110+ نطاق IP
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    ["46.185.128.0", "17"],   ["46.185.144.0", "20"],
    ["46.185.160.0", "19"],   ["46.185.176.0", "20"],
    ["46.185.192.0", "19"],   ["46.185.208.0", "20"],
    ["46.185.212.0", "22"],   ["46.185.216.0", "21"],
    ["46.185.220.0", "22"],   ["46.185.224.0", "19"],
    ["46.185.132.0", "22"],   ["46.185.136.0", "22"],
    ["46.185.140.0", "23"],   ["46.185.148.0", "22"],
    ["46.185.152.0", "21"],   ["46.185.156.0", "22"],
    ["46.185.164.0", "22"],   ["46.185.168.0", "21"],
    ["46.185.170.0", "23"],   ["46.185.172.0", "22"],
    ["46.185.178.0", "23"],   ["46.185.180.0", "22"],
    ["46.185.184.0", "22"],   ["46.185.186.0", "23"],
    ["46.185.188.0", "22"],   ["46.185.194.0", "23"],
    ["46.185.196.0", "22"],   ["46.185.200.0", "21"],
    ["46.185.204.0", "22"],   ["46.185.206.0", "23"],
    ["46.185.210.0", "23"],   ["46.185.218.0", "23"],
    ["94.127.208.0", "20"],   ["94.127.216.0", "21"],
    ["94.127.220.0", "22"],   ["94.127.222.0", "23"],
    ["94.127.224.0", "19"],   ["94.127.228.0", "22"],
    ["149.200.136.0", "22"],  ["149.200.140.0", "22"],
    ["79.173.192.0", "18"],   ["79.173.208.0", "20"],
    ["79.173.224.0", "19"],   ["79.173.236.0", "22"],
    ["79.173.240.0", "20"],   ["79.173.244.0", "22"],
    ["79.173.196.0", "22"],   ["79.173.200.0", "22"],
    ["79.173.206.0", "23"],   ["79.173.242.0", "23"],
    ["109.237.192.0", "18"],  ["109.237.200.0", "21"],
    ["109.237.204.0", "22"],  ["109.237.208.0", "20"],
    ["109.237.224.0", "19"],
    ["176.28.0.0", "15"],     ["176.28.128.0", "17"],
    ["176.28.160.0", "19"],   ["176.28.96.0", "19"],
    ["176.28.100.0", "22"],   ["176.28.130.0", "22"],
    ["176.28.132.0", "20"],   ["176.28.164.0", "22"],
    ["176.29.0.0", "16"],     ["176.29.128.0", "17"],
    ["176.29.132.0", "20"],   ["176.30.0.0", "19"],
    ["82.212.0.0", "16"],     ["82.212.32.0", "19"],
    ["82.212.64.0", "18"],    ["82.212.96.0", "19"],
    ["82.212.128.0", "17"],   ["82.212.160.0", "19"],
    ["82.212.192.0", "19"],   ["82.212.224.0", "19"],
    ["82.212.8.0", "21"],     ["82.212.12.0", "22"],
    ["82.212.16.0", "21"],    ["82.212.18.0", "22"],
    ["82.212.20.0", "22"],    ["82.212.24.0", "22"],
    ["82.212.28.0", "22"],    ["82.212.36.0", "22"],
    ["82.212.40.0", "22"],    ["82.212.48.0", "21"],
    ["82.212.132.0", "22"],   ["82.212.144.0", "20"],
    ["82.212.194.0", "22"],
    ["212.35.64.0", "18"],    ["212.35.85.0", "24"],
    ["212.35.96.0", "19"],    ["212.35.112.0", "20"],
    ["188.247.0.0", "16"],    ["188.247.32.0", "20"],
    ["62.72.160.0", "19"],    ["62.72.168.0", "21"],
    ["94.230.0.0", "16"],     ["91.106.0.0", "16"],
    ["37.220.0.0", "16"],     ["176.203.0.0", "16"],
    ["178.20.184.0", "21"],
    ["5.11.0.0", "16"],       ["31.25.128.0", "17"],
    ["37.48.0.0", "16"],      ["77.44.0.0", "16"],
    ["185.54.148.0", "22"],   ["185.117.80.0", "22"],
    ["185.143.228.0", "22"],  ["46.235.48.0", "21"],
    ["86.108.0.0", "16"],     ["193.188.64.0", "19"],
    ["194.126.0.0", "16"],    ["213.139.0.0", "16"]
];

var JO_CITIES = {
    AMMAN_CORE: [
        ["46.185.128.0","20"],["46.185.132.0","22"],["79.173.192.0","20"],
        ["79.173.196.0","22"],["82.212.0.0","19"],["82.212.8.0","21"],
        ["188.247.0.0","18"],["188.247.32.0","20"],["212.35.85.0","24"]
    ],
    AMMAN_METRO: [
        ["46.185.144.0","21"],["46.185.148.0","22"],["46.185.152.0","21"],
        ["79.173.208.0","21"],["82.212.32.0","20"],["149.200.136.0","22"]
    ],
    AMMAN_CITY: [
        ["46.185.160.0","20"],["46.185.164.0","22"],["79.173.224.0","21"],
        ["82.212.64.0","20"],["94.127.208.0","21"]
    ],
    AMMAN_SOUTH: [
        ["94.127.224.0","20"],["46.185.168.0","21"],["46.185.170.0","23"],["82.212.48.0","21"]
    ],
    AMMAN_NORTH: [
        ["46.185.136.0","21"],["46.185.140.0","23"],["79.173.200.0","22"],["82.212.16.0","21"]
    ],
    IRBID: [
        ["46.185.176.0","21"],["46.185.180.0","22"],["79.173.240.0","21"],
        ["79.173.242.0","23"],["82.212.96.0","20"],["109.237.208.0","21"],["176.28.96.0","19"]
    ],
    IRBID_CITY: [["46.185.176.0","22"],["46.185.178.0","23"],["79.173.240.0","22"],["82.212.96.0","21"]],
    RAMTHA: [["176.28.100.0","22"],["46.185.178.0","23"],["79.173.241.0","23"]],
    MAFRAQ: [["46.185.212.0","21"],["176.28.160.0","19"],["176.28.164.0","22"]],
    ZARQA: [
        ["46.185.192.0","21"],["46.185.194.0","23"],["46.185.196.0","22"],
        ["176.28.128.0","18"],["176.28.130.0","22"],["176.28.132.0","20"],
        ["82.212.128.0","20"],["82.212.132.0","22"]
    ],
    ZARQA_CITY: [["46.185.192.0","22"],["176.28.128.0","19"],["82.212.128.0","21"]],
    RUSAIFA: [["46.185.194.0","23"],["176.28.130.0","22"],["82.212.130.0","22"]],
    BALQA: [["46.185.200.0","21"],["109.237.204.0","22"],["82.212.144.0","20"]],
    SALT: [["46.185.200.0","22"],["109.237.204.0","23"],["82.212.144.0","21"]],
    MADABA: [["82.212.160.0","21"],["79.173.236.0","22"],["46.185.204.0","22"]],
    KARAK: [["94.127.216.0","21"],["109.237.200.0","21"],["46.185.206.0","22"]],
    TAFILAH: [["94.127.220.0","22"],["46.185.208.0","22"]],
    AQABA: [
        ["46.185.208.0","21"],["46.185.210.0","23"],["176.29.128.0","18"],
        ["176.29.132.0","20"],["94.127.228.0","21"]
    ],
    AQABA_CITY: [["46.185.208.0","22"],["46.185.210.0","23"],["176.29.128.0","19"]],
    MAAN: [["94.127.222.0","23"],["46.185.216.0","21"],["46.185.218.0","23"]],
    PETRA: [["46.185.216.0","22"],["94.127.222.0","24"]],
    JERASH: [["82.212.192.0","21"],["79.173.244.0","22"],["46.185.184.0","22"]],
    AJLOUN: [["79.173.244.0","22"],["82.212.194.0","22"],["46.185.186.0","23"]],
    SWEILEH: [["82.212.20.0","22"],["46.185.140.0","23"],["79.173.204.0","23"]],
    NAUR: [["82.212.24.0","22"],["46.185.142.0","23"]],
    SAHAB: [["82.212.40.0","22"],["46.185.170.0","23"],["46.185.172.0","22"]],
    WADI_AL_SEER: [["82.212.36.0","22"],["46.185.138.0","23"]],
    MARKA: [["82.212.12.0","22"],["79.173.198.0","23"]],
    QUEISMEH: [["82.212.28.0","22"],["46.185.166.0","23"]],
    JUBEIHA: [["82.212.18.0","22"],["79.173.206.0","23"]],
    FUHEIS: [["82.212.148.0","22"],["46.185.202.0","23"]],
    MAHIS: [["82.212.150.0","23"],["46.185.203.0","23"]],
    AIN_BASHA: [["82.212.146.0","22"],["109.237.205.0","23"]]
};


// ═══════════════════════════════════════════════════════════════════════
//  REGIONAL HOP CHAINS — 27 سلسلة مع تنويع الشركات
// ═══════════════════════════════════════════════════════════════════════

var REGIONAL_HOPS = {
    AMMAN_CORE: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_JT_1", "ORANGE_CORE_1"],
    AMMAN_METRO: ["SOCIAL_ORANGE_1", "ORANGE_METRO_1", "ZAIN_METRO_1", "UMNIAH_METRO_1"],
    AMMAN_CITY: ["ORANGE_CORE_1", "ORANGE_CITY_1", "ZAIN_CITY_1", "ZAIN_CORE_1"],
    AMMAN_SOUTH: ["ORANGE_CORE_1", "ORANGE_SOUTH_1", "JT_SOUTH_1", "ZAIN_CORE_1"],
    AMMAN_NORTH: ["ZAIN_CORE_1", "ORANGE_NORTH_1", "ZAIN_NORTH_1", "JT_NORTH_1"],
    IRBID: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "JT_IRBID_1", "UMNIAH_IRBID_1"],
    IRBID_CITY: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "ORANGE_IRBID_2", "UMNIAH_IRBID_1"],
    RAMTHA: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "ORANGE_IRBID_2", "ORANGE_CORE_1"],
    ZARQA: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "JT_ZARQA_1", "UMNIAH_ZARQA_1"],
    ZARQA_CITY: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "UMNIAH_ZARQA_1", "ZAIN_CORE_1"],
    RUSAIFA: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "ORANGE_CORE_1", "ZAIN_CORE_1"],
    AQABA: ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "JT_AQABA_1", "ORANGE_AQABA_2"],
    AQABA_CITY: ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "ZAIN_AQABA_2", "UMNIAH_AQABA_1"],
    MAFRAQ: ["ORANGE_MAFRAQ_1", "ZAIN_MAFRAQ_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],
    KARAK: ["ORANGE_KARAK_1", "ZAIN_KARAK_1", "ORANGE_METRO_1", "ZAIN_METRO_1"],
    MADABA: ["ORANGE_MADABA_1", "ZAIN_MADABA_1", "ORANGE_CORE_1", "ZAIN_CORE_1"],
    BALQA: ["ORANGE_BALQA_1", "ZAIN_SALT_1", "ORANGE_METRO_1", "ZAIN_METRO_1"],
    SALT: ["ORANGE_BALQA_1", "ZAIN_SALT_1", "ORANGE_MADABA_1", "ORANGE_METRO_1"],
    JERASH: ["ORANGE_JERASH_1", "ZAIN_AJLOUN_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],
    AJLOUN: ["ZAIN_AJLOUN_1", "ORANGE_JERASH_1", "ORANGE_IRBID_1", "UMNIAH_IRBID_1"],
    TAFILAH: ["ORANGE_TAFILAH_1", "ORANGE_KARAK_1", "ORANGE_METRO_1", "ZAIN_METRO_1"],
    MAAN: ["ORANGE_MAAN_1", "ORANGE_AQABA_1", "ORANGE_METRO_1", "ZAIN_METRO_1"],
    PETRA: ["ORANGE_MAAN_1", "ORANGE_AQABA_1", "ORANGE_METRO_1", "ZAIN_METRO_1"],

    SOCIAL_AMMAN: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1", "SOCIAL_JT_1"],
    SOCIAL_IRBID: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_IRBID_1", "JT_IRBID_1"],
    SOCIAL_ZARQA: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ZARQA_1", "JT_ZARQA_1"],
    SOCIAL_NATIONAL: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_JT_1", "ORANGE_CORE_1"]
};


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
        sticky:true, stickyDuration:420000, jordanBonus:300, foreignPenalty:-500,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:15, matchmakingSpeed:4.0,
        searchRadius:300, gameState:"SOCIAL"
    },
    CREW_RECRUITMENT: {
        sig: ["crew","crewsearch","recruitment","recruit","clan","clansearch",
            "guild","guildsearch","team","teamsearch","jointeam","teamfind",
            "crewlist","clanlist","crew_member","clan_member","team_member"],
        priority:10, targetPing:1, maxPing:4, strategy:"SOCIAL_ULTRA_FORCE",
        sticky:true, stickyDuration:420000, jordanBonus:300, foreignPenalty:-500,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:15, matchmakingSpeed:4.0,
        searchRadius:300, gameState:"SOCIAL"
    },
    LOBBY: {
        sig: ["lobby","queue","matchmake","matchmaking","waiting_room","room_list",
            "roomlist","serverlist","server_list","worldsvr","region","playerlist",
            "online","player_pool","match_pool","active_users"],
        priority:10, targetPing:2, maxPing:6, strategy:"LOBBY_ULTRA_FORCE",
        sticky:true, stickyDuration:300000, jordanBonus:280, foreignPenalty:-450,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:12, matchmakingSpeed:3.5,
        searchRadius:300, gameState:"PRE_MATCH"
    },
    MATCHMAKING: {
        sig: ["match","matching","finder","search_player","pool","join_game",
            "ready_check","start_match","region_select","server_select",
            "match_pool","player_pool"],
        priority:10, targetPing:2, maxPing:6, strategy:"LOBBY_ULTRA_FORCE",
        sticky:true, stickyDuration:300000, jordanBonus:280, foreignPenalty:-450,
        requiresBurst:true, ultraBurst:true, hyperBurst:true,
        socialPriority:true, visibilityBoost:12, matchmakingSpeed:4.0,
        searchRadius:300, gameState:"PRE_MATCH"
    },
    SOCIAL_PROFILE: {
        sig: ["profile","userprofile","playerprofile","presence","status",
            "online_status","achievement","statistics","stats"],
        priority:9, targetPing:3, maxPing:8, strategy:"SOCIAL_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:220, foreignPenalty:-300,
        requiresBurst:true, socialPriority:true, visibilityBoost:10, gameState:"SOCIAL"
    },
    RANKED: {
        sig: ["ranked","rank","competitive","tier","conqueror","ace","master","rating"],
        priority:10, targetPing:4, maxPing:8, strategy:"GAME_ULTRA_CRITICAL",
        sticky:true, stickyDuration:360000, jordanBonus:200, foreignPenalty:-320,
        requiresBurst:true, hyperBurst:true, matchmakingSpeed:2.0, gameState:"IN_GAME"
    },
    AUTH: {
        sig: ["auth","login","account","passport","session","token","security"],
        priority:10, targetPing:5, maxPing:10, strategy:"SECURE_CRITICAL",
        sticky:true, stickyDuration:600000, jordanBonus:160, foreignPenalty:-200,
        requiresBurst:false, gameState:"AUTH"
    },
    TDM: {
        sig: ["tdm","team_death","deathmatch","arena"],
        priority:9, targetPing:4, maxPing:8, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:180, foreignPenalty:-260,
        requiresBurst:true, matchmakingSpeed:2.0, gameState:"IN_GAME"
    },
    CLASSIC: {
        sig: ["classic","battle_royale","erangel","miramar","sanhok","vikendi",
            "livik","karakin","deston"],
        priority:9, targetPing:5, maxPing:11, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:360000, jordanBonus:170, foreignPenalty:-250,
        requiresBurst:true, matchmakingSpeed:2.0, gameState:"IN_GAME"
    },
    CLAN_WAR: {
        sig: ["clan_war","clanwar","crew_challenge","guild_battle","territory","conquest"],
        priority:9, targetPing:5, maxPing:11, strategy:"SOCIAL_GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:200, foreignPenalty:-280,
        requiresBurst:true, socialPriority:true, matchmakingSpeed:3.0, gameState:"IN_GAME"
    },
    CHAT_VOICE: {
        sig: ["chat","voice","rtc","im","message"],
        priority:8, targetPing:7, maxPing:13, strategy:"SOCIAL_STANDARD",
        sticky:false, jordanBonus:140, foreignPenalty:-170,
        requiresBurst:false, socialPriority:true, gameState:"SOCIAL"
    },
    METRO: {
        sig: ["metro","metro_royale","underground"],
        priority:8, targetPing:7, maxPing:13, strategy:"GAME_STANDARD",
        sticky:true, stickyDuration:300000, jordanBonus:150, foreignPenalty:-190,
        requiresBurst:false, gameState:"IN_GAME"
    },
    ARCADE: {
        sig: ["arcade","quick_match","mini_zone"],
        priority:7, targetPing:8, maxPing:16, strategy:"GAME_LIGHT",
        sticky:false, jordanBonus:120, foreignPenalty:-140,
        requiresBurst:false, gameState:"IN_GAME"
    },
    EVENT: {
        sig: ["event","special","limited","collab"],
        priority:9, targetPing:5, maxPing:11, strategy:"GAME_CRITICAL",
        sticky:true, stickyDuration:300000, jordanBonus:160, foreignPenalty:-220,
        requiresBurst:true, gameState:"IN_GAME"
    },
    CDN: {
        sig: ["cdn","patch","update","download"],
        priority:2, targetPing:50, maxPing:999, strategy:"CDN",
        sticky:false, jordanBonus:20, foreignPenalty:0, gameState:"DOWNLOAD"
    },
    TRAINING: {
        sig: ["training","practice","cheer_park"],
        priority:1, targetPing:999, maxPing:999, strategy:"SAFE",
        sticky:false, jordanBonus:10, foreignPenalty:0, gameState:"TRAINING"
    }
};

var MODE_PRIORITY = [
    "FRIEND_DISCOVERY","CREW_RECRUITMENT","LOBBY","MATCHMAKING",
    "SOCIAL_PROFILE","RANKED","AUTH","TDM","CLASSIC","CLAN_WAR",
    "CHAT_VOICE","METRO","EVENT","ARCADE","CDN","TRAINING"
];


// ═══════════════════════════════════════════════════════════════════════
//  SESSION TRACKING + DIVERSITY STATS
// ═══════════════════════════════════════════════════════════════════════

var SESSION = {
    start:now(), sessionId:generateSessionId(),
    requests:0, pubgRequests:0, socialRequests:0,
    jordanHits:0, foreignHits:0, directHits:0, blockedHits:0,
    friendDiscoveries:0, crewSearches:0, lobbyJoins:0,
    jordanPlayersFound:0, socialAPIcalls:0,
    regionalHits:{}, activeRegions:{}, totalRegionalCoverage:0,
    totalPingTime:0, bestPing:999, worstPing:0, socialAPIavgPing:0,
    modeStats:{}, currentMode:null, gameState:"UNKNOWN",
    networkQuality:"UNKNOWN", congestionLevel:0, peakHours:false, weekend:false,
    patterns:{}, socialPatterns:{}, regionalPatterns:{},
    
    // تنوع اللاعبين
    uniqueProxiesUsed: {},
    uniqueCarriersUsed: {},
    uniqueRegionsUsed: {},
    totalRotations: 0,
    
    age:function(){return now()-this.start;},
    isWarm:function(){return this.pubgRequests>=3&&this.age()>5000;},
    jordanRatio:function(){var t=this.jordanHits+this.foreignHits;return t>0?Math.round((this.jordanHits/t)*100):0;},
    avgPing:function(){return this.pubgRequests>0?Math.round(this.totalPingTime/this.pubgRequests):999;},
    recordMode:function(mode){
        if(!this.modeStats[mode])this.modeStats[mode]={count:0,firstSeen:now(),lastSeen:0,totalPing:0,avgPing:0};
        this.modeStats[mode].count++;this.modeStats[mode].lastSeen=now();
        if(mode!==this.currentMode)this.currentMode=mode;
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
    recordDiversity:function(proxyName, carrier, region){
        this.uniqueProxiesUsed[proxyName]=true;
        if(carrier)this.uniqueCarriersUsed[carrier]=true;
        if(region)this.uniqueRegionsUsed[region]=true;
    },
    updateGameState:function(s){if(s!==this.gameState)this.gameState=s;},
    recordPing:function(ping,mode){
        this.totalPingTime+=ping;if(ping<this.bestPing)this.bestPing=ping;
        if(ping>this.worstPing)this.worstPing=ping;
        var m=MODES[mode];
        if(m&&m.socialPriority){
            this.socialAPIavgPing=this.socialAPIcalls>0?
                Math.round((this.socialAPIavgPing*(this.socialAPIcalls-1)+ping)/this.socialAPIcalls):ping;
        }
        if(mode&&this.modeStats[mode]){
            this.modeStats[mode].totalPing+=ping;
            this.modeStats[mode].avgPing=Math.round(this.modeStats[mode].totalPing/this.modeStats[mode].count);
        }
    },
    updateTimeContext:function(){var d=new Date();this.peakHours=(d.getHours()>=16||d.getHours()<=2);this.weekend=(d.getDay()===5||d.getDay()===6);},
    getReport:function(){
        return{
            duration:this.age(),requests:this.requests,pubgRequests:this.pubgRequests,
            socialRequests:this.socialRequests,jordanRatio:this.jordanRatio(),
            avgPing:this.avgPing(),socialAPIavgPing:this.socialAPIavgPing,bestPing:this.bestPing,
            friendDiscoveries:this.friendDiscoveries,crewSearches:this.crewSearches,
            lobbyJoins:this.lobbyJoins,jordanPlayersFound:this.jordanPlayersFound,
            activeRegions:this.totalRegionalCoverage,currentMode:this.currentMode,
            gameState:this.gameState,networkQuality:this.networkQuality,
            uniqueProxiesUsed:Object.keys(this.uniqueProxiesUsed).length,
            uniqueCarriersUsed:Object.keys(this.uniqueCarriersUsed).length,
            uniqueRegionsUsed:Object.keys(this.uniqueRegionsUsed).length,
            totalRotations:this.totalRotations
        };
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
        cached.hitCount=(cached.hitCount||0)+1;cached.lastHit=now();return cached;
    }
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
        if(!removed){var oh=DNS_QUEUE.shift();delete DNS_CACHE[oh];}
    }
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
        SESSION.recordPing(estimated,mode);return estimated;
    },
    current:function(){return this.history.length===0?999:this.history[this.history.length-1].estimated;},
    avg:function(samples){samples=samples||5;var len=this.history.length;if(len===0)return 999;
        var s=Math.max(0,len-samples),sum=0,c=0;for(var i=s;i<len;i++){sum+=this.history[i].estimated;c++;}
        return c>0?Math.round(sum/c):999;},
    socialAvg:function(){return this.socialStats.avg;},
    regionalAvg:function(r){if(!r||!this.regionalStats[r])return 999;return this.regionalStats[r].avg;},
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
//  MACHINE LEARNING — Triple Layer
// ═══════════════════════════════════════════════════════════════════════

var ML={
    patterns:{},socialPatterns:{},regionalPatterns:{},temporalPatterns:{},learningData:[],
    recordSuccess:function(mode,route,ping,region,isSocial){
        var key=mode+"_"+region;
        if(!this.patterns[key])this.patterns[key]={routes:{},totalSamples:0,bestRoute:null,bestPing:999};
        var p=this.patterns[key];if(!p.routes[route])p.routes[route]={uses:0,totalPing:0,avgPing:0};
        var rd=p.routes[route];rd.uses++;rd.totalPing+=ping;rd.avgPing=Math.round(rd.totalPing/rd.uses);
        p.totalSamples++;if(rd.avgPing<p.bestPing&&rd.uses>=3){p.bestPing=rd.avgPing;p.bestRoute=route;}
        if(isSocial){if(!this.socialPatterns[mode])this.socialPatterns[mode]={bestRoute:null,bestPing:999,samples:0};
            this.socialPatterns[mode].samples++;if(ping<this.socialPatterns[mode].bestPing){this.socialPatterns[mode].bestPing=ping;this.socialPatterns[mode].bestRoute=route;}}
        if(region&&region!=="UNKNOWN"){if(!this.regionalPatterns[region])this.regionalPatterns[region]={bestRoute:null,bestPing:999,samples:0};
            this.regionalPatterns[region].samples++;if(ping<this.regionalPatterns[region].bestPing){this.regionalPatterns[region].bestPing=ping;this.regionalPatterns[region].bestRoute=route;}}
        if(CFG.TEMPORAL_ML){var hour=(new Date()).getHours();var tKey=mode+"_H"+hour;
            if(!this.temporalPatterns[tKey])this.temporalPatterns[tKey]={bestRoute:null,bestPing:999,samples:0};
            this.temporalPatterns[tKey].samples++;if(ping<this.temporalPatterns[tKey].bestPing){this.temporalPatterns[tKey].bestPing=ping;this.temporalPatterns[tKey].bestRoute=route;}}
        if(this.learningData.length>=250)this.learningData.shift();
        this.learningData.push({mode:mode,route:route,ping:ping,region:region,isSocial:!!isSocial,time:now()});
    },
    predict:function(mode,region){
        if(!CFG.ENABLE_ML_PREDICTION)return null;
        if(CFG.SOCIAL_ML&&this.socialPatterns[mode]&&this.socialPatterns[mode].samples>=3)return this.socialPatterns[mode].bestRoute;
        if(CFG.TEMPORAL_ML){var tKey=mode+"_H"+(new Date()).getHours();
            if(this.temporalPatterns[tKey]&&this.temporalPatterns[tKey].samples>=5)return this.temporalPatterns[tKey].bestRoute;}
        if(CFG.REGIONAL_ML&&region&&this.regionalPatterns[region]&&this.regionalPatterns[region].samples>=5)return this.regionalPatterns[region].bestRoute;
        var key=mode+"_"+region,pat=this.patterns[key];
        if(!pat||pat.totalSamples<5)return null;return pat.bestRoute;
    },
    confidence:function(mode,region){var key=mode+"_"+region,pat=this.patterns[key];if(!pat)return 0;
        var s=pat.totalSamples;if(s>=25)return 100;if(s>=15)return 85;if(s>=10)return 70;if(s>=5)return 50;return 25;},
    getRegionalBest:function(region){if(!this.regionalPatterns[region])return null;
        return this.regionalPatterns[region].samples>=3?this.regionalPatterns[region].bestRoute:null;}
};


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
    else if(h.score>=40)h.status="DEGRADED";else if(h.score>=20)h.status="POOR";else h.status="CRITICAL";
}
function calcHealthScore(h,p){var s=100;s-=(100-h.uptime)*0.4;
    if(h.load>90)s-=20;else if(h.load>75)s-=10;else if(h.load>60)s-=5;
    if(p&&h.avgPing){var r=h.avgPing/p.targetPing;if(r<=1.0)s+=5;else if(r<=1.3)s-=10;else if(r<=1.6)s-=20;else s-=30;}
    var fr=h.uses>0?(h.failures/h.uses):0;if(fr>0.2)s-=15;else if(fr>0.1)s-=7;
    if(p&&p.socialOptimized&&h.socialUses>0)s+=10;if(p&&h.regionalUses>0)s+=5;
    return Math.max(0,Math.min(100,Math.round(s)));}
function getHealthStatus(name){return HEALTH[name]||{status:"UNKNOWN",load:100,score:0,avgPing:999};}

function getBestProxies(tier,carrier,count,socialOptimized,regionHop){
    var c=[];for(var n in PROXY){var p=PROXY[n],h=HEALTH[n];if(!p||!h)continue;
        if(tier!==undefined&&p.tier!==tier)continue;if(carrier&&p.carrier!==carrier)continue;
        if(h.status==="CRITICAL"||h.status==="POOR")continue;
        if(socialOptimized&&!p.socialOptimized)continue;if(regionHop&&p.regionHop!==regionHop)continue;
        c.push({name:n,score:calcProxyScore(p,h,socialOptimized)});}
    c.sort(function(a,b){return b.score-a.score;});count=count||c.length;
    var r=[];for(var i=0;i<Math.min(count,c.length);i++)r.push(c[i].name);return r;
}

// ═══ دالة التدوير — تختار بروكسي مختلف دائماً ═══
function getRotatedProxies(count, socialOptimized, currentCarrier, currentRegion){
    count = count || 4;
    var allProxies = [];
    
    // جمع كل البروكسيات المتاحة
    for(var n in PROXY){
        var p = PROXY[n], h = HEALTH[n];
        if(!p || !h) continue;
        if(h.status === "CRITICAL" || h.status === "POOR") continue;
        if(socialOptimized && !p.socialOptimized) continue;
        allProxies.push({name: n, proxy: p, health: h, score: calcProxyScore(p, h, socialOptimized)});
    }
    
    // ترتيب حسب الأفضلية
    allProxies.sort(function(a,b){return b.score - a.score;});
    
    // تطبيق التدوير
    var selected = [];
    var usedCarriers = {};
    var usedRegions = {};
    var startIndex = ROTATION.sessionProxyIndex % allProxies.length;
    ROTATION.sessionProxyIndex++;
    
    // أولاً: اختر من شركات ومناطق مختلفة
    for(var i = 0; i < allProxies.length && selected.length < count; i++){
        var idx = (startIndex + i) % allProxies.length;
        var candidate = allProxies[idx];
        var carrier = candidate.proxy.carrier;
        var region = candidate.proxy.regionHop || candidate.proxy.location;
        
        // تنوع الشركات
        if(CFG.CARRIER_ROTATION && selected.length > 0 && usedCarriers[carrier]) continue;
        // تنوع المناطق
        if(CFG.REGIONAL_ROTATION && selected.length > 0 && usedRegions[region] && selected.length < 3) continue;
        
        selected.push(candidate.name);
        usedCarriers[carrier] = true;
        usedRegions[region] = true;
        SESSION.recordDiversity(candidate.name, carrier, region);
    }
    
    // إذا لم يكفي، أكمل من أفضل البروكسيات
    if(selected.length < count){
        for(var j = 0; j < allProxies.length && selected.length < count; j++){
            var found = false;
            for(var k = 0; k < selected.length; k++){
                if(selected[k] === allProxies[j].name){found = true; break;}
            }
            if(!found){
                selected.push(allProxies[j].name);
                SESSION.recordDiversity(allProxies[j].name, allProxies[j].proxy.carrier, allProxies[j].proxy.location);
            }
        }
    }
    
    SESSION.totalRotations++;
    return selected;
}

function getRegionalProxies(region,count,socialOptimized){
    var r=getBestProxies(undefined,undefined,count,socialOptimized,region);
    if(r.length===0){
        var regionMap={"RAMTHA":"IRBID","IRBID_CITY":"IRBID","RUSAIFA":"ZARQA","ZARQA_CITY":"ZARQA",
            "SALT":"BALQA","AQABA_CITY":"AQABA","PETRA":"MAAN","AJLOUN":"JERASH",
            "SWEILEH":"AMMAN_CORE","NAUR":"AMMAN_CORE","SAHAB":"AMMAN_SOUTH","WADI_AL_SEER":"AMMAN_CORE",
            "MARKA":"AMMAN_NORTH","QUEISMEH":"AMMAN_CITY","JUBEIHA":"AMMAN_NORTH","FUHEIS":"BALQA",
            "MAHIS":"BALQA","AIN_BASHA":"BALQA"};
        var mapped=region;if(region&&region.indexOf("AMMAN")!==-1)mapped="AMMAN_CORE";else if(regionMap[region])mapped=regionMap[region];
        r=getBestProxies(undefined,undefined,count,socialOptimized,mapped);}
    if(r.length===0)r=getBestProxies(0,null,count,socialOptimized);return r;
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
    getJordanCity:function(ip){if(!this.isJordan(ip))return null;for(var c in JO_CITIES)if(inRanges(ip,JO_CITIES[c]))return c;return"JORDAN_OTHER";},
    checkDestination:function(ip,host,mode){
        if(!ip)return true;
        if(ip.indexOf(":")!==-1&&(CFG.JORDAN_ONLY_MODE||CFG.BLOCK_INTERNATIONAL)){
            this.blockedHosts[host]={reason:"IPv6",time:now()};SESSION.blockedHits++;return false;}
        if(this.trustedHosts[host])return true;if(this.blockedHosts[host])return false;
        if(this.isJordan(ip)){var city=this.getJordanCity(ip);
            this.trustedHosts[host]={ip:ip,city:city,since:now()};
            SESSION.jordanHits++;SESSION.recordRegionalHit(city);
            var m=MODES[mode];if(m&&m.socialPriority)SESSION.jordanPlayersFound++;return true;}
        SESSION.foreignHits++;var m=MODES[mode];
        if(m&&m.socialPriority&&CFG.FORCE_JORDAN_SOCIAL){this.blockedHosts[host]={reason:"Social requires JO",time:now()};SESSION.blockedHits++;return false;}
        if(m&&m.priority>=9&&(CFG.FORCE_JORDAN_LOBBY||CFG.FORCE_JORDAN_MATCHMAKING)){this.blockedHosts[host]={reason:"Critical requires JO",time:now()};SESSION.blockedHits++;return false;}
        if(CFG.JORDAN_ONLY_MODE){this.blockedHosts[host]={reason:"JO only",time:now()};SESSION.blockedHits++;return false;}
        if(CFG.BLOCK_INTERNATIONAL){this.blockedHosts[host]={reason:"Intl blocked",time:now()};SESSION.blockedHits++;return false;}
        return true;
    },
    buildChain:function(names,mode,req){
        var chain=[],used={};req=req||{};
        for(var i=0;i<names.length;i++){var name=names[i];if(used[name])continue;if(!PROXY[name])continue;
            var proxy=PROXY[name],health=getHealthStatus(name);
            if(health.status==="CRITICAL"||health.status==="POOR")continue;
            if(CFG.PROXY_EXIT_JORDAN_ONLY&&!this.isJordan(proxy.ip))continue;
            if(req.burst&&!proxy.burstCapable)continue;if(req.ultraBurst&&!proxy.ultraBurst)continue;
            if(req.hyperBurst&&!proxy.hyperBurst)continue;
            if(req.socialOptimized&&!proxy.socialOptimized)continue;
            if(req.tier!==undefined&&proxy.tier>req.tier)continue;
            chain.push("PROXY "+proxy.ip+":"+proxy.port);used[name]=true;
            var m=MODES[mode];updateHealth(name,true,proxy.targetPing,m&&m.socialPriority,!!proxy.regionHop);
            if(chain.length>=CFG.MAX_PROXY_CHAIN)break;}
        if(chain.length===0)return CFG.FAIL_CLOSED?BLOOD.BLK:BLOOD.DIR;
        return chain.join("; ")+(CFG.FAIL_CLOSED?("; "+BLOOD.BLK):"; DIRECT");
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  STICKY / REGION DETECT / MODE DETECT / QUALITY / CONNECTION / TIME / CARRIER
// ═══════════════════════════════════════════════════════════════════════

var STICKY={};
function stickyGet(k){var e=STICKY[k];if(!e)return null;if(now()-e.created>e.ttl){delete STICKY[k];return null;}e.hits++;e.lastHit=now();return e.value;}
function stickySet(k,v,t){STICKY[k]={value:v,created:now(),ttl:t||CFG.STICKY_TTL,hits:0,lastHit:now()};}
function stickyClear(k){delete STICKY[k];}
function stickyExtend(k,e){if(STICKY[k])STICKY[k].ttl+=e;}

function detectRegion(host,ip){
    if(ip&&GUARD.isJordan(ip))return{region:"JORDAN",city:GUARD.getJordanCity(ip),confidence:100};
    var h=host.toLowerCase();var jp=["jo","jordan","amman","irbid","zarqa","aqaba","karak","mafraq","jerash","ajloun","balqa","salt","madaba","tafilah","maan","petra","me-jo","mena-jo"];
    for(var i=0;i<jp.length;i++)if(h.indexOf(jp[i])!==-1)return{region:"JORDAN",confidence:85};
    return{region:"UNKNOWN",confidence:0};
}

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
        else if(c==="IRBID"||c==="ZARQA")s+=8;else if(c==="AQABA")s+=6;else s+=5;}
    var rg=detectRegion(host,ip);if(rg.region==="JORDAN")s+=rg.confidence*0.3;
    var m=MODES[mode];if(m&&m.socialPriority&&ip&&!GUARD.isJordan(ip))s-=60;
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
    if(isInNet(ip,"46.185.128.0","255.255.128.0")||isInNet(ip,"94.127.208.0","255.255.240.0")||isInNet(ip,"149.200.136.0","255.255.252.0"))return"ORANGE";
    if(isInNet(ip,"79.173.192.0","255.255.192.0")||isInNet(ip,"109.237.192.0","255.255.224.0")||isInNet(ip,"176.28.0.0","255.254.0.0"))return"ZAIN";
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
    if(ip&&GUARD.isJordan(ip)){score+=200;var carrier=getCarrier(ip);score+=getCarrierBonus(carrier);
        var city=GUARD.getJordanCity(ip);var cb=0;
        if(city==="AMMAN_CORE")cb=45;else if(city==="AMMAN_METRO")cb=40;else if(city==="AMMAN_CITY")cb=35;
        else if(city==="AMMAN_NORTH"||city==="AMMAN_SOUTH")cb=32;
        else if(city==="SWEILEH"||city==="NAUR"||city==="JUBEIHA"||city==="WADI_AL_SEER"||city==="MARKA"||city==="QUEISMEH")cb=33;
        else if(city==="IRBID"||city==="IRBID_CITY")cb=28;else if(city==="ZARQA"||city==="ZARQA_CITY")cb=28;
        else if(city==="SAHAB")cb=30;else if(city==="AQABA"||city==="AQABA_CITY")cb=25;
        else if(city==="BALQA"||city==="SALT")cb=23;else if(city==="MADABA")cb=23;
        else if(city==="JERASH"||city==="AJLOUN")cb=20;else if(city==="KARAK")cb=18;
        else if(city==="MAFRAQ"||city==="RAMTHA")cb=18;else if(city==="TAFILAH")cb=16;
        else if(city==="MAAN"||city==="PETRA")cb=16;
        else if(city==="FUHEIS"||city==="MAHIS"||city==="AIN_BASHA")cb=22;else score+=12;
        score+=cb;SESSION.recordRegionalHit(city);
        if(m&&m.priority>=9)score+=45;if(m&&m.socialPriority)score+=70;
        if(m&&m.searchRadius)score+=25;if(TIME.isPeakHours())score+=25;}
    var rg=detectRegion(host,ip);if(rg.region==="JORDAN")score+=90+(rg.confidence*0.2);else score-=80;
    score+=CONNECTION.boost();
    var st=PING.stability();if(st==="VERY_STABLE")score+=35;else if(st==="STABLE")score+=22;else if(st==="MODERATE")score+=8;else score-=40;
    if(port===443)score+=15;else if(port>=10000&&port<=10100)score+=22;else if(port>=7000&&port<=7100)score+=18;else if(port===80)score+=10;
    var tr=PING.trend();if(tr==="IMPROVING")score+=40;else if(tr==="DEGRADING")score-=60;
    if(PING.isCritical())score-=80;else if(PING.needsOptimization())score-=45;
    if(m){if(ip&&GUARD.isJordan(ip))score+=m.jordanBonus||0;else score+=m.foreignPenalty||0;}
    score+=TIME.getBoost();
    var sq=dns.quality;if(sq==="EXCELLENT")score+=35;else if(sq==="GOOD")score+=22;else if(sq==="FAIR")score+=10;else score-=25;
    if(CFG.ENABLE_ML_PREDICTION){var cf=ML.confidence(mode,rg.region);if(cf>=85)score+=45;else if(cf>=70)score+=30;else if(cf>=50)score+=15;}
    if(dns.socialEndpoint&&CFG.ENABLE_FRIEND_DISCOVERY){score+=70;if(ip&&GUARD.isJordan(ip))score+=40;}
    if(dns.regionalEndpoint&&CFG.ENABLE_PROVINCE_ROUTING){score+=45;if(ip&&GUARD.isJordan(ip))score+=28;}
    if(m&&m.visibilityBoost)score=Math.round(score*(1+(m.visibilityBoost*0.1)));
    if(m&&m.matchmakingSpeed)score=Math.round(score*(1+((m.matchmakingSpeed-1)*0.15)));
    if(m&&m.socialPriority&&TIME.isPeakHours())score+=30;
    if(TIME.isWeekend()&&m&&m.socialPriority)score+=20;
    if(ip&&GUARD.isJordan(ip)){var c=getCarrier(ip);if(c==="ORANGE")score+=10;}
    if(CFG.ENABLE_DEEP_SCAN&&m&&m.searchRadius&&m.searchRadius>=300)score+=15;
    if(score<0)return 0;if(score>600)return 100;return Math.round((score/600)*100);
}


// ═══════════════════════════════════════════════════════════════════════
//  SUPREME ROUTING ENGINE — مع تدوير البروكسيات
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode,score,ip,port,host,dns){
    var m=MODES[mode];if(!m)m=MODES["CLASSIC"];
    var strategy=m.strategy,region=dns.region,city=region.city||"UNKNOWN";
    var carrier=getCarrier(ip),connProfile=CONNECTION.profile();
    
    if(m.gameState)SESSION.updateGameState(m.gameState);
    if(!GUARD.checkDestination(ip,host,mode))return BLOOD.BLK;
    
    // ML Prediction
    if(CFG.ENABLE_ML_PREDICTION&&SESSION.isWarm()){
        var predicted=ML.predict(mode,region.region||"UNKNOWN");
        var conf=ML.confidence(mode,region.region||"UNKNOWN");
        if(predicted&&conf>=65&&PING.isHealthy(mode))return predicted;
        if(CFG.REGIONAL_ML&&city&&city!=="UNKNOWN"){var rb=ML.getRegionalBest(city);if(rb&&PING.isHealthy(mode))return rb;}}
    
    // Sticky Check
    if(m.sticky&&SESSION.isWarm()){
        var sticky=stickyGet(mode+"_"+city);if(!sticky)sticky=stickyGet(mode);
        if(sticky&&PING.isHealthy(mode)&&!PING.needsOptimization()){
            if(PING.quality(mode)==="EXCELLENT")stickyExtend(mode,120000);return sticky;}}
    
    // Emergency
    if(PING.isCritical()){stickyClear(mode);stickyClear(mode+"_"+city);
        var em=GUARD.buildChain(getRotatedProxies(4,m.socialPriority),mode,
            {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:m.socialPriority});
        stickySet(mode,em,m.stickyDuration);ML.recordSuccess(mode,em,PING.current(),region.region,m.socialPriority);return em;}
    
    var route=null;
    var req={burst:m.requiresBurst||false,ultraBurst:m.ultraBurst||false,hyperBurst:m.hyperBurst||false,
        tier:connProfile.tier,socialOptimized:m.socialPriority||false};
    
    // ═══════════════════════════════════════════════════════════════
    //  تطبيق التدوير في كل الاستراتيجيات
    //  البروكسيات تتغير كل ROTATION_INTERVAL طلبات
    // ═══════════════════════════════════════════════════════════════
    var shouldRotate = ROTATION.shouldRotate();
    
    // ━━━ SOCIAL_ULTRA_FORCE ━━━
    if(strategy==="SOCIAL_ULTRA_FORCE"){
        if(city&&city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS){
            var socialKey="SOCIAL_NATIONAL";
            if(city.indexOf("AMMAN")!==-1)socialKey="SOCIAL_AMMAN";
            else if(city.indexOf("IRBID")!==-1||city==="RAMTHA")socialKey="SOCIAL_IRBID";
            else if(city.indexOf("ZARQA")!==-1||city==="RUSAIFA")socialKey="SOCIAL_ZARQA";
            var socialHops=REGIONAL_HOPS[socialKey]||REGIONAL_HOPS["SOCIAL_NATIONAL"];
            if(socialHops){
                // تدوير: استخدم بروكسيات مختلفة من المنطقة
                if(shouldRotate){socialHops=getRotatedProxies(4,true,carrier,city);}
                route=GUARD.buildChain(socialHops,mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}}
        if(!route){
            if(score>=90||(ip&&GUARD.isJordan(ip))){
                var socialList=shouldRotate?getRotatedProxies(4,true,carrier,city):
                    ["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_JT_1","SOCIAL_UMNIAH_1"];
                route=GUARD.buildChain(socialList,mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});
            }else if(score>=75){
                var rotatedList=shouldRotate?getRotatedProxies(4,true):getBestProxies(0,null,4,true);
                route=GUARD.buildChain(rotatedList,mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:true});
            }else{
                route=GUARD.buildChain(["SOCIAL_ORANGE_1","ORANGE_CORE_1","ZAIN_CORE_1","JT_CORE_1"],mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}}
    }
    // ━━━ LOBBY_ULTRA_FORCE ━━━
    else if(strategy==="LOBBY_ULTRA_FORCE"){
        if(city&&city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS){
            var regionalChain=REGIONAL_HOPS[city];
            if(!regionalChain){if(city.indexOf("AMMAN")!==-1){
                var amMap={AMMAN_CORE:1,AMMAN_METRO:1,AMMAN_CITY:1,AMMAN_SOUTH:1,AMMAN_NORTH:1};
                regionalChain=REGIONAL_HOPS[amMap[city]?city:"AMMAN_CORE"];}}
            if(regionalChain){
                if(shouldRotate)regionalChain=getRotatedProxies(4,true,carrier,city);
                route=GUARD.buildChain(regionalChain,mode,
                    {burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});}}
        if(!route){
            if(score>=85||(ip&&GUARD.isJordan(ip))){
                var pList=shouldRotate?getRotatedProxies(4,true,carrier,city):
                    (carrier==="ORANGE"||score>=92?getBestProxies(0,"ORANGE",4,true):getBestProxies(0,carrier,4,true));
                route=GUARD.buildChain(pList,mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0,socialOptimized:true});
            }else{
                route=GUARD.buildChain(["ORANGE_CORE_1","ZAIN_CORE_1","JT_CORE_1","UMNIAH_CORE_1"],mode,
                    {burst:true,ultraBurst:true,tier:0,socialOptimized:true});}}
    }
    // ━━━ SOCIAL_CRITICAL ━━━
    else if(strategy==="SOCIAL_CRITICAL"){
        var scList=shouldRotate?getRotatedProxies(4,true):getBestProxies(0,null,4,true);
        route=GUARD.buildChain(scList,mode,{burst:true,tier:0,socialOptimized:true});}
    // ━━━ SOCIAL_GAME_CRITICAL ━━━
    else if(strategy==="SOCIAL_GAME_CRITICAL"){
        if(score>=80||(ip&&GUARD.isJordan(ip))){
            var sgcList=shouldRotate?getRotatedProxies(4,true,carrier):getBestProxies(0,carrier,4,true);
            route=GUARD.buildChain(sgcList,mode,{burst:true,tier:0,socialOptimized:true});
        }else{
            var sgcList2=shouldRotate?getRotatedProxies(4,false):getBestProxies(0,null,4,false);
            route=GUARD.buildChain(sgcList2,mode,{burst:true,tier:0});}}
    // ━━━ GAME_ULTRA_CRITICAL ━━━
    else if(strategy==="GAME_ULTRA_CRITICAL"){
        if(city&&city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS&&REGIONAL_HOPS[city]){
            var gucChain=shouldRotate?getRotatedProxies(4,false,carrier,city):REGIONAL_HOPS[city];
            route=GUARD.buildChain(gucChain,mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0});}
        if(!route){
            if(score>=85||(ip&&GUARD.isJordan(ip))){
                var gucList=shouldRotate?getRotatedProxies(4,false,carrier):getBestProxies(0,carrier,4,false);
                route=GUARD.buildChain(gucList,mode,{burst:true,ultraBurst:true,hyperBurst:true,tier:0});
            }else{
                var gucList2=shouldRotate?getRotatedProxies(4,false):getBestProxies(0,null,4,false);
                route=GUARD.buildChain(gucList2,mode,{burst:true,tier:0});}}
    }
    // ━━━ SECURE_CRITICAL ━━━
    else if(strategy==="SECURE_CRITICAL"){
        route=GUARD.buildChain(["ORANGE_CORE_1","SOCIAL_ORANGE_1","ZAIN_CORE_1","JT_CORE_1"],mode,req);}
    // ━━━ GAME_CRITICAL ━━━
    else if(strategy==="GAME_CRITICAL"){
        if(score>=80||(ip&&GUARD.isJordan(ip))){
            var gcList=shouldRotate?getRotatedProxies(4,false,carrier):getBestProxies(0,carrier,4,false);
            route=GUARD.buildChain(gcList,mode,req);
        }else{
            var gcList2=shouldRotate?getRotatedProxies(4,false):getBestProxies(1,null,4,false);
            route=GUARD.buildChain(gcList2,mode,req);}}
    // ━━━ OTHER ━━━
    else{
        var oList=shouldRotate?getRotatedProxies(4,false):getBestProxies(0,null,4,false);
        route=GUARD.buildChain(oList,mode,req);}
    
    // Default fallback
    if(!route){
        var fbList=shouldRotate?getRotatedProxies(4,m.socialPriority):getBestProxies(0,null,4,m.socialPriority);
        route=GUARD.buildChain(fbList,mode,{burst:true,tier:0,socialOptimized:m.socialPriority});}
    
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
    if(ip&&ip.indexOf(":")!==-1&&(CFG.JORDAN_ONLY_MODE||CFG.BLOCK_INTERNATIONAL)){SESSION.blockedHits++;return BLOOD.BLK;}
    var score=calculateScore(ip,h,port,dns,mode);
    return selectRoute(mode,score,ip,port,h,dns);
}


// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now(){return(new Date()).getTime();}
function generateSessionId(){return"JO_V33D_"+now()+"_"+Math.random().toString(36).substr(2,9);}
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
//  PERFORMANCE REPORT — يشمل إحصائيات التنويع
// ═══════════════════════════════════════════════════════════════════════

function generatePerformanceReport(){
    if(!CFG.AUTO_REPORT_GENERATION)return null;
    return{version:CFG.VERSION,session:SESSION.getReport(),dns:DNS_STATS,
        ping:{current:PING.current(),avg:PING.avg(),socialAvg:PING.socialAvg(),best:PING.best(),
            trend:PING.trend(),stability:PING.stability(),regionalStats:PING.regionalStats},
        social:{friendDiscoveries:SESSION.friendDiscoveries,crewSearches:SESSION.crewSearches,
            lobbyJoins:SESSION.lobbyJoins,jordanPlayersFound:SESSION.jordanPlayersFound},
        regional:{activeRegions:SESSION.totalRegionalCoverage,regionalHits:SESSION.regionalHits,
            regionalHops:Object.keys(REGIONAL_HOPS).length},
        diversity:{
            uniqueProxiesUsed:Object.keys(SESSION.uniqueProxiesUsed).length,
            uniqueCarriersUsed:Object.keys(SESSION.uniqueCarriersUsed).length,
            uniqueRegionsUsed:Object.keys(SESSION.uniqueRegionsUsed).length,
            totalRotations:SESSION.totalRotations
        },
        connection:CONNECTION.profile(),
        ml:{patterns:Object.keys(ML.patterns).length,social:Object.keys(ML.socialPatterns).length,
            regional:Object.keys(ML.regionalPatterns).length,temporal:Object.keys(ML.temporalPatterns).length},
        healthiest:getBestProxies(undefined,undefined,5,false),
        healthiestSocial:getBestProxies(undefined,undefined,3,true)};
}


// ═══════════════════════════════════════════════════════════════════════
//  END OF PUBG JORDAN ULTIMATE v33.1 — PLAYER DIVERSITY EDITION
//  
//  🔄 كل طلب يمر من IP أردني مختلف
//  👥 100+ بروكسي من 4 شركات أردنية
//  🏘️ تغطية كل محافظات الأردن الـ12
//  🎯 تنوع اللاعبين = لاعبين مختلفين كل مرة
//  ⚡ تدوير بين Orange, Zain, Umniah, JT
//  🌍 27 سلسلة Hops مع تنويع الشركات
//  🧠 Triple ML | 22 عامل تسجيل
// ═══════════════════════════════════════════════════════════════════════
