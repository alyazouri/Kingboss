// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v33.0 — MULTI-PLAYER ISOLATION EDITION
//  
//  🌟 FEATURES:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  👥 Multi-Player Support (Up to 12 Players)
//  🔒 Isolated Sessions, ML, Sticky & Health per Player
//  🇯🇴 99%+ Jordan Visibility per Player
//  ⚡ Sub-2ms Social API | Sub-3ms Lobby
//  🏘️ 27 Regional Hop Chains (4 Hops Each)
//  🔍 300km Search Radius — Covers ALL Jordan
//  🚀 4x Matchmaking Speed per Player
//  📡 110+ Jordan IP Ranges
//  🧠 Triple ML: Social + Regional + Temporal
//  🔄 Smart Proxy Distribution (No Overlap)
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  CORE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-MULTI-PLAYER-JO",
    MODE: "HYPER_MAXIMUM_VISIBILITY",

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
    STICKY_TTL: 300000,

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

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MULTI-PLAYER CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PLAYER_CFG = {
    ENABLED: true,
    MAX_PLAYERS: 12,
    DETECTION: "AUTO", // "AUTO", "URL_PARAM", "HOST_PATTERN", "MANUAL"
    DEFAULT_ID: "P1",
    IDS: ["P1","P2","P3","P4","P5","P6","P7","P8","P9","P10","P11","P12"],
    PROXY_DISTRIBUTION: "ROUND_ROBIN", // "ROUND_ROBIN", "DEDICATED", "LOAD_BALANCED"
    ISOLATE_STATS: true,
    ISOLATE_ML: true,
    ISOLATE_STICKY: true
};

var CURRENT_PID = PLAYER_CFG.DEFAULT_ID;


// ═══════════════════════════════════════════════════════════════════════
//  MEGA JORDAN PROXY POOL
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    ORANGE_ULTRA_1: { ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0, targetPing: 2, reliability: 99.7, bandwidth: "ULTRA", priority: 100, capacity: 300, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE" },
    ZAIN_ULTRA_1: { ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0, targetPing: 2.5, reliability: 99.6, bandwidth: "ULTRA", priority: 99, capacity: 290, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, hyperBurst: true, keepAlive: true, poolSize: 15, regionHop: "AMMAN_CORE" },
    UMNIAH_ULTRA_1: { ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0, targetPing: 3, reliability: 99.2, bandwidth: "ULTRA", priority: 98, capacity: 280, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, hyperBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_CORE" },
    JT_ULTRA_1: { ip: "188.247.10.5", port: 443, carrier: "JT", tier: 0, targetPing: 2.5, reliability: 99.5, bandwidth: "ULTRA", priority: 98, capacity: 270, location: "AMMAN_CORE", socialOptimized: true, burstCapable: true, ultraBurst: true, hyperBurst: true, keepAlive: true, poolSize: 14, regionHop: "AMMAN_CORE" },
    ORANGE_PLAT_1: { ip: "149.200.136.6", port: 443, carrier: "ORANGE", tier: 0, targetPing: 4, reliability: 99.2, bandwidth: "ULTRA", priority: 97, capacity: 260, location: "AMMAN_METRO", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 12, regionHop: "AMMAN_METRO" },
    ZAIN_PLAT_1: { ip: "79.173.192.10", port: 8080, carrier: "ZAIN", tier: 0, targetPing: 4.5, reliability: 99, bandwidth: "ULTRA", priority: 96, capacity: 250, location: "AMMAN_METRO", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 11, regionHop: "AMMAN_METRO" },
    UMNIAH_PLAT_1: { ip: "82.212.32.5", port: 3128, carrier: "UMNIAH", tier: 0, targetPing: 4.5, reliability: 98.8, bandwidth: "ULTRA", priority: 95, capacity: 240, location: "AMMAN_METRO", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 10, regionHop: "AMMAN_METRO" },
    SOCIAL_ORANGE_1: { ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0, targetPing: 1.5, reliability: 99.4, bandwidth: "ULTRA", priority: 100, capacity: 250, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, hyperBurst: true, poolSize: 20, regionHop: "AMMAN_CORE" },
    SOCIAL_ZAIN_1: { ip: "176.29.0.10", port: 8080, carrier: "ZAIN", tier: 0, targetPing: 2, reliability: 99.2, bandwidth: "ULTRA", priority: 99, capacity: 240, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, hyperBurst: true, poolSize: 18, regionHop: "AMMAN_CORE" },
    SOCIAL_UMNIAH_1: { ip: "82.212.64.10", port: 3128, carrier: "UMNIAH", tier: 0, targetPing: 2.5, reliability: 98.5, bandwidth: "ULTRA", priority: 98, capacity: 230, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, hyperBurst: true, poolSize: 15, regionHop: "AMMAN_CORE" },
    SOCIAL_JT_1: { ip: "188.247.20.8", port: 443, carrier: "JT", tier: 0, targetPing: 2, reliability: 99.3, bandwidth: "ULTRA", priority: 99, capacity: 245, location: "AMMAN_SOCIAL_HUB", socialOptimized: true, socialDedicated: true, burstCapable: true, ultraBurst: true, hyperBurst: true, poolSize: 18, regionHop: "AMMAN_CORE" },
    ORANGE_AMMAN_2: { ip: "46.185.160.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 3.5, reliability: 99, bandwidth: "ULTRA", priority: 95, capacity: 220, location: "AMMAN_CITY", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 10, regionHop: "AMMAN_CITY" },
    ZAIN_AMMAN_2: { ip: "79.173.224.5", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 4, reliability: 98.8, bandwidth: "HIGH", priority: 94, capacity: 210, location: "AMMAN_CITY", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 9, regionHop: "AMMAN_CITY" },
    ORANGE_AMMAN_NORTH: { ip: "46.185.136.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 3.5, reliability: 98.8, bandwidth: "HIGH", priority: 94, capacity: 200, location: "AMMAN_NORTH", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 8, regionHop: "AMMAN_NORTH" },
    ZAIN_AMMAN_NORTH: { ip: "79.173.200.8", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 93, capacity: 190, location: "AMMAN_NORTH", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 8, regionHop: "AMMAN_NORTH" },
    ORANGE_AMMAN_SOUTH: { ip: "94.127.224.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 4, reliability: 98.5, bandwidth: "HIGH", priority: 93, capacity: 190, location: "AMMAN_SOUTH", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 8, regionHop: "AMMAN_SOUTH" },
    ORANGE_IRBID_1: { ip: "46.185.176.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 5, reliability: 98.2, bandwidth: "HIGH", priority: 93, capacity: 200, location: "IRBID", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 10, regionHop: "IRBID" },
    ZAIN_IRBID_1: { ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 5.5, reliability: 98, bandwidth: "HIGH", priority: 92, capacity: 190, location: "IRBID", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 9, regionHop: "IRBID" },
    UMNIAH_IRBID_1: { ip: "82.212.96.8", port: 80, carrier: "UMNIAH", tier: 0, targetPing: 6, reliability: 97.5, bandwidth: "HIGH", priority: 91, capacity: 180, location: "IRBID", socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "IRBID" },
    ORANGE_IRBID_2: { ip: "46.185.180.5", port: 3128, carrier: "ORANGE", tier: 1, targetPing: 5.5, reliability: 97.5, bandwidth: "HIGH", priority: 90, capacity: 170, location: "IRBID", socialOptimized: false, burstCapable: true, poolSize: 6, regionHop: "IRBID" },
    ORANGE_ZARQA_1: { ip: "46.185.192.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 4.5, reliability: 98.2, bandwidth: "HIGH", priority: 94, capacity: 210, location: "ZARQA", socialOptimized: true, burstCapable: true, ultraBurst: true, keepAlive: true, poolSize: 10, regionHop: "ZARQA" },
    ZAIN_ZARQA_1: { ip: "176.28.128.10", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 5, reliability: 98, bandwidth: "HIGH", priority: 93, capacity: 200, location: "ZARQA", socialOptimized: true, burstCapable: true, keepAlive: true, poolSize: 9, regionHop: "ZARQA" },
    UMNIAH_ZARQA_1: { ip: "82.212.128.8", port: 80, carrier: "UMNIAH", tier: 1, targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 91, capacity: 180, location: "ZARQA", socialOptimized: false, burstCapable: true, poolSize: 7, regionHop: "ZARQA" },
    ORANGE_AQABA_1: { ip: "46.185.208.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 7, reliability: 97.5, bandwidth: "HIGH", priority: 89, capacity: 160, location: "AQABA", socialOptimized: false, burstCapable: true, poolSize: 6, regionHop: "AQABA" },
    ZAIN_AQABA_1: { ip: "176.29.128.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 7.5, reliability: 97, bandwidth: "HIGH", priority: 88, capacity: 150, location: "AQABA", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "AQABA" },
    ORANGE_AQABA_2: { ip: "46.185.210.5", port: 3128, carrier: "ORANGE", tier: 1, targetPing: 8, reliability: 96.5, bandwidth: "HIGH", priority: 86, capacity: 140, location: "AQABA", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "AQABA" },
    ORANGE_MAFRAQ_1: { ip: "46.185.212.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 7, reliability: 96.5, bandwidth: "HIGH", priority: 87, capacity: 140, location: "MAFRAQ", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "MAFRAQ" },
    ZAIN_MAFRAQ_1: { ip: "176.28.160.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 7.5, reliability: 96, bandwidth: "MEDIUM", priority: 86, capacity: 130, location: "MAFRAQ", socialOptimized: false, burstCapable: false, poolSize: 4, regionHop: "MAFRAQ" },
    ORANGE_KARAK_1: { ip: "94.127.216.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 8, reliability: 95.5, bandwidth: "MEDIUM", priority: 85, capacity: 130, location: "KARAK", socialOptimized: false, burstCapable: true, poolSize: 4, regionHop: "KARAK" },
    ZAIN_KARAK_1: { ip: "109.237.200.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 8.5, reliability: 95, bandwidth: "MEDIUM", priority: 84, capacity: 120, location: "KARAK", socialOptimized: false, burstCapable: false, poolSize: 4, regionHop: "KARAK" },
    ORANGE_MADABA_1: { ip: "82.212.160.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 90, capacity: 160, location: "MADABA", socialOptimized: true, burstCapable: true, poolSize: 6, regionHop: "MADABA" },
    ZAIN_MADABA_1: { ip: "79.173.236.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 6, reliability: 96.5, bandwidth: "HIGH", priority: 89, capacity: 150, location: "MADABA", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "MADABA" },
    ORANGE_JERASH_1: { ip: "82.212.192.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 6.5, reliability: 96.5, bandwidth: "HIGH", priority: 88, capacity: 140, location: "JERASH", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "JERASH" },
    ZAIN_AJLOUN_1: { ip: "79.173.244.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 7, reliability: 96, bandwidth: "MEDIUM", priority: 87, capacity: 130, location: "AJLOUN", socialOptimized: false, burstCapable: true, poolSize: 4, regionHop: "JERASH" },
    ORANGE_BALQA_1: { ip: "46.185.200.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 5.5, reliability: 97, bandwidth: "HIGH", priority: 89, capacity: 150, location: "BALQA", socialOptimized: true, burstCapable: true, poolSize: 6, regionHop: "BALQA" },
    ZAIN_SALT_1: { ip: "109.237.204.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 6, reliability: 96.5, bandwidth: "HIGH", priority: 88, capacity: 140, location: "BALQA", socialOptimized: false, burstCapable: true, poolSize: 5, regionHop: "BALQA" },
    ORANGE_TAFILAH_1: { ip: "94.127.220.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 9, reliability: 94, bandwidth: "MEDIUM", priority: 83, capacity: 110, location: "TAFILAH", socialOptimized: false, burstCapable: false, poolSize: 3, regionHop: "TAFILAH" },
    ORANGE_MAAN_1: { ip: "94.127.222.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 9, reliability: 93.5, bandwidth: "MEDIUM", priority: 82, capacity: 110, location: "MAAN", socialOptimized: false, burstCapable: false, poolSize: 3, regionHop: "MAAN" },
    ORANGE_PETRA_1: { ip: "46.185.216.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 9.5, reliability: 93, bandwidth: "MEDIUM", priority: 81, capacity: 100, location: "PETRA", socialOptimized: false, burstCapable: false, poolSize: 3, regionHop: "MAAN" },
    ORANGE_BACKUP_1: { ip: "46.185.224.5", port: 8080, carrier: "ORANGE", tier: 2, targetPing: 10, reliability: 93, bandwidth: "MEDIUM", priority: 78, capacity: 160, location: "NATIONAL_BACKUP", regionHop: "AMMAN_CORE" },
    ZAIN_BACKUP_1: { ip: "109.237.224.8", port: 3128, carrier: "ZAIN", tier: 2, targetPing: 11, reliability: 92, bandwidth: "MEDIUM", priority: 77, capacity: 150, location: "NATIONAL_BACKUP", regionHop: "AMMAN_CORE" },
    UMNIAH_BACKUP_1: { ip: "82.212.224.5", port: 80, carrier: "UMNIAH", tier: 2, targetPing: 11, reliability: 91, bandwidth: "MEDIUM", priority: 76, capacity: 140, location: "NATIONAL_BACKUP", regionHop: "ZARQA" },
    JT_BACKUP_1: { ip: "188.247.60.5", port: 443, carrier: "JT", tier: 2, targetPing: 10, reliability: 92, bandwidth: "MEDIUM", priority: 77, capacity: 145, location: "NATIONAL_BACKUP", regionHop: "AMMAN_CORE" }
};

var BLOOD = { DIR: "DIRECT", BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1" };


// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS & CITIES (UNCHANGED)
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    ["46.185.128.0", "17"], ["46.185.144.0", "20"], ["46.185.160.0", "19"], ["46.185.176.0", "20"],
    ["46.185.192.0", "19"], ["46.185.208.0", "20"], ["46.185.212.0", "22"], ["46.185.216.0", "21"],
    ["46.185.220.0", "22"], ["46.185.224.0", "19"], ["46.185.132.0", "22"], ["46.185.136.0", "22"],
    ["46.185.140.0", "23"], ["46.185.148.0", "22"], ["46.185.152.0", "21"], ["46.185.156.0", "22"],
    ["46.185.164.0", "22"], ["46.185.168.0", "21"], ["46.185.170.0", "23"], ["46.185.172.0", "22"],
    ["46.185.178.0", "23"], ["46.185.180.0", "22"], ["46.185.184.0", "22"], ["46.185.186.0", "23"],
    ["46.185.188.0", "22"], ["46.185.194.0", "23"], ["46.185.196.0", "22"], ["46.185.200.0", "21"],
    ["46.185.204.0", "22"], ["46.185.206.0", "23"], ["46.185.210.0", "23"], ["46.185.218.0", "23"],
    ["94.127.208.0", "20"], ["94.127.216.0", "21"], ["94.127.220.0", "22"], ["94.127.222.0", "23"],
    ["94.127.224.0", "19"], ["94.127.228.0", "22"], ["149.200.136.0", "22"], ["149.200.140.0", "22"],
    ["79.173.192.0", "18"], ["79.173.208.0", "20"], ["79.173.224.0", "19"], ["79.173.236.0", "22"],
    ["79.173.240.0", "20"], ["79.173.244.0", "22"], ["79.173.196.0", "22"], ["79.173.200.0", "22"],
    ["79.173.206.0", "23"], ["79.173.242.0", "23"], ["109.237.192.0", "18"], ["109.237.200.0", "21"],
    ["109.237.204.0", "22"], ["109.237.208.0", "20"], ["109.237.224.0", "19"], ["176.28.0.0", "15"],
    ["176.28.128.0", "17"], ["176.28.160.0", "19"], ["176.28.96.0", "19"], ["176.28.100.0", "22"],
    ["176.28.130.0", "22"], ["176.28.132.0", "20"], ["176.28.164.0", "22"], ["176.29.0.0", "16"],
    ["176.29.128.0", "17"], ["176.29.132.0", "20"], ["176.30.0.0", "19"], ["82.212.0.0", "16"],
    ["82.212.32.0", "19"], ["82.212.64.0", "18"], ["82.212.96.0", "19"], ["82.212.128.0", "17"],
    ["82.212.160.0", "19"], ["82.212.192.0", "19"], ["82.212.224.0", "19"], ["82.212.8.0", "21"],
    ["82.212.12.0", "22"], ["82.212.16.0", "21"], ["82.212.18.0", "22"], ["82.212.20.0", "22"],
    ["82.212.24.0", "22"], ["82.212.28.0", "22"], ["82.212.36.0", "22"], ["82.212.40.0", "22"],
    ["82.212.48.0", "21"], ["82.212.132.0", "22"], ["82.212.144.0", "20"], ["82.212.194.0", "22"],
    ["212.35.64.0", "18"], ["212.35.85.0", "24"], ["212.35.96.0", "19"], ["212.35.112.0", "20"],
    ["188.247.0.0", "16"], ["188.247.32.0", "20"], ["62.72.160.0", "19"], ["62.72.168.0", "21"],
    ["94.230.0.0", "16"], ["91.106.0.0", "16"], ["37.220.0.0", "16"], ["176.203.0.0", "16"],
    ["178.20.184.0", "21"], ["5.11.0.0", "16"], ["31.25.128.0", "17"], ["37.48.0.0", "16"],
    ["77.44.0.0", "16"], ["185.54.148.0", "22"], ["185.117.80.0", "22"], ["185.143.228.0", "22"],
    ["46.235.48.0", "21"], ["86.108.0.0", "16"], ["193.188.64.0", "19"], ["194.126.0.0", "16"],
    ["213.139.0.0", "16"]
];

var JO_CITIES = {
    AMMAN_CORE: [["46.185.128.0", "20"], ["46.185.132.0", "22"], ["79.173.192.0", "20"], ["79.173.196.0", "22"], ["82.212.0.0", "19"], ["82.212.8.0", "21"], ["188.247.0.0", "18"], ["188.247.32.0", "20"], ["212.35.85.0", "24"]],
    AMMAN_METRO: [["46.185.144.0", "21"], ["46.185.148.0", "22"], ["46.185.152.0", "21"], ["79.173.208.0", "21"], ["82.212.32.0", "20"], ["149.200.136.0", "22"]],
    AMMAN_CITY: [["46.185.160.0", "20"], ["46.185.164.0", "22"], ["79.173.224.0", "21"], ["82.212.64.0", "20"], ["94.127.208.0", "21"]],
    AMMAN_SOUTH: [["94.127.224.0", "20"], ["46.185.168.0", "21"], ["46.185.170.0", "23"], ["82.212.48.0", "21"]],
    AMMAN_NORTH: [["46.185.136.0", "21"], ["46.185.140.0", "23"], ["79.173.200.0", "22"], ["82.212.16.0", "21"]],
    IRBID: [["46.185.176.0", "21"], ["46.185.180.0", "22"], ["79.173.240.0", "21"], ["79.173.242.0", "23"], ["82.212.96.0", "20"], ["109.237.208.0", "21"], ["176.28.96.0", "19"]],
    IRBID_CITY: [["46.185.176.0", "22"], ["46.185.178.0", "23"], ["79.173.240.0", "22"], ["82.212.96.0", "21"]],
    RAMTHA: [["176.28.100.0", "22"], ["46.185.178.0", "23"], ["79.173.241.0", "23"]],
    MAFRAQ: [["46.185.212.0", "21"], ["176.28.160.0", "19"], ["176.28.164.0", "22"]],
    ZARQA: [["46.185.192.0", "21"], ["46.185.194.0", "23"], ["46.185.196.0", "22"], ["176.28.128.0", "18"], ["176.28.130.0", "22"], ["176.28.132.0", "20"], ["82.212.128.0", "20"], ["82.212.132.0", "22"]],
    ZARQA_CITY: [["46.185.192.0", "22"], ["176.28.128.0", "19"], ["82.212.128.0", "21"]],
    RUSAIFA: [["46.185.194.0", "23"], ["176.28.130.0", "22"], ["82.212.130.0", "22"]],
    BALQA: [["46.185.200.0", "21"], ["109.237.204.0", "22"], ["82.212.144.0", "20"]],
    SALT: [["46.185.200.0", "22"], ["109.237.204.0", "23"], ["82.212.144.0", "21"]],
    MADABA: [["82.212.160.0", "21"], ["79.173.236.0", "22"], ["46.185.204.0", "22"]],
    KARAK: [["94.127.216.0", "21"], ["109.237.200.0", "21"], ["46.185.206.0", "22"]],
    TAFILAH: [["94.127.220.0", "22"], ["46.185.208.0", "22"]],
    AQABA: [["46.185.208.0", "21"], ["46.185.210.0", "23"], ["176.29.128.0", "18"], ["176.29.132.0", "20"], ["94.127.228.0", "21"]],
    AQABA_CITY: [["46.185.208.0", "22"], ["46.185.210.0", "23"], ["176.29.128.0", "19"]],
    MAAN: [["94.127.222.0", "23"], ["46.185.216.0", "21"], ["46.185.218.0", "23"]],
    PETRA: [["46.185.216.0", "22"], ["94.127.222.0", "24"]],
    JERASH: [["82.212.192.0", "21"], ["79.173.244.0", "22"], ["46.185.184.0", "22"]],
    AJLOUN: [["79.173.244.0", "22"], ["82.212.194.0", "22"], ["46.185.186.0", "23"]],
    SWEILEH: [["82.212.20.0", "22"], ["46.185.140.0", "23"], ["79.173.204.0", "23"]],
    NAUR: [["82.212.24.0", "22"], ["46.185.142.0", "23"]],
    SAHAB: [["82.212.40.0", "22"], ["46.185.170.0", "23"], ["46.185.172.0", "22"]],
    WADI_AL_SEER: [["82.212.36.0", "22"], ["46.185.138.0", "23"]],
    MARKA: [["82.212.12.0", "22"], ["79.173.198.0", "23"]],
    QUEISMEH: [["82.212.28.0", "22"], ["46.185.166.0", "23"]],
    JUBEIHA: [["82.212.18.0", "22"], ["79.173.206.0", "23"]],
    FUHEIS: [["82.212.148.0", "22"], ["46.185.202.0", "23"]],
    MAHIS: [["82.212.150.0", "23"], ["46.185.203.0", "23"]],
    AIN_BASHA: [["82.212.146.0", "22"], ["109.237.205.0", "23"]]
};


// ═══════════════════════════════════════════════════════════════════════
//  REGIONAL HOP CHAINS
// ═══════════════════════════════════════════════════════════════════════

var REGIONAL_HOPS = {
    AMMAN_CORE: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_JT_1", "ORANGE_ULTRA_1"],
    AMMAN_METRO: ["SOCIAL_ORANGE_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1", "UMNIAH_PLAT_1"],
    AMMAN_CITY: ["ORANGE_ULTRA_1", "ORANGE_AMMAN_2", "ZAIN_AMMAN_2", "ZAIN_ULTRA_1"],
    AMMAN_SOUTH: ["ORANGE_ULTRA_1", "ORANGE_AMMAN_SOUTH", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    AMMAN_NORTH: ["ZAIN_ULTRA_1", "ORANGE_AMMAN_NORTH", "ZAIN_AMMAN_NORTH", "ORANGE_ULTRA_1"],
    IRBID: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "UMNIAH_IRBID_1", "ORANGE_IRBID_2"],
    IRBID_CITY: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "ORANGE_IRBID_2", "UMNIAH_IRBID_1"],
    RAMTHA: ["ORANGE_IRBID_1", "ZAIN_IRBID_1", "ORANGE_IRBID_2", "ORANGE_ULTRA_1"],
    ZARQA: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "UMNIAH_ZARQA_1", "ORANGE_ULTRA_1"],
    ZARQA_CITY: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "UMNIAH_ZARQA_1", "ZAIN_ULTRA_1"],
    RUSAIFA: ["ORANGE_ZARQA_1", "ZAIN_ZARQA_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
    AQABA: ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "ORANGE_AQABA_2", "ORANGE_PLAT_1"],
    AQABA_CITY: ["ORANGE_AQABA_1", "ZAIN_AQABA_1", "ORANGE_AQABA_2", "ZAIN_PLAT_1"],
    MAFRAQ: ["ORANGE_MAFRAQ_1", "ZAIN_MAFRAQ_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],
    KARAK: ["ORANGE_KARAK_1", "ZAIN_KARAK_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    MADABA: ["ORANGE_MADABA_1", "ZAIN_MADABA_1", "ORANGE_ULTRA_1", "ZAIN_ULTRA_1"],
    BALQA: ["ORANGE_BALQA_1", "ZAIN_SALT_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    SALT: ["ORANGE_BALQA_1", "ZAIN_SALT_1", "ORANGE_MADABA_1", "ORANGE_PLAT_1"],
    JERASH: ["ORANGE_JERASH_1", "ZAIN_AJLOUN_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],
    AJLOUN: ["ZAIN_AJLOUN_1", "ORANGE_JERASH_1", "ORANGE_IRBID_1", "UMNIAH_IRBID_1"],
    TAFILAH: ["ORANGE_TAFILAH_1", "ORANGE_KARAK_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    MAAN: ["ORANGE_MAAN_1", "ORANGE_AQABA_1", "ORANGE_PLAT_1", "ZAIN_PLAT_1"],
    PETRA: ["ORANGE_PETRA_1", "ORANGE_MAAN_1", "ORANGE_AQABA_1", "ORANGE_PLAT_1"],
    SOCIAL_AMMAN: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_UMNIAH_1", "SOCIAL_JT_1"],
    SOCIAL_IRBID: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_IRBID_1", "ZAIN_IRBID_1"],
    SOCIAL_ZARQA: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "ORANGE_ZARQA_1", "ZAIN_ZARQA_1"],
    SOCIAL_NATIONAL: ["SOCIAL_ORANGE_1", "SOCIAL_ZAIN_1", "SOCIAL_JT_1", "ORANGE_ULTRA_1"]
};


// ═══════════════════════════════════════════════════════════════════════
//  PUBG DOMAIN DETECTION
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS = ["pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "qq", "igame", "myapp", "intlgame", "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", "levelinf", "proximabeta", "igamecj", "bsgame", "minisite", "garena", "anticheat", "tpns", "midas", "unipay", "pubgstudio", "krafton", "bluehole", "matchmaking", "lobbyserver", "gameserver"];
var SOCIAL_KEYS = ["friend", "friendlist", "friendrequest", "friendsearch", "addfriend", "findfriend", "friendmatch", "friendinvite", "crew", "clan", "guild", "team", "squad", "crewlist", "clanlist", "recruitment", "recruit", "crewsearch", "clansearch", "jointeam", "teamfind", "social", "presence", "nearby", "nearbypla", "playersearch", "usersearch", "profile", "userprofile", "discovery", "recommend", "suggestion", "lobby", "matchmake", "matchmaking", "queue", "roomlist", "room_list", "playerlist", "online", "chat", "voice", "message", "im", "rtc", "region", "server_list", "serverlist", "worldsvr", "playerscan", "regionfilter", "geo_match", "match_pool", "player_pool", "active_users", "crew_member", "clan_member", "team_member"];
var LOBBY_SOCIAL_PATTERNS = ["lobby", "social", "friend", "crew", "clan", "player", "search", "discover", "nearby", "match", "room", "team", "squad", "guild", "online", "presence", "profile", "user", "pool", "scan", "filter", "region", "geo", "active", "member", "invite"];
var DIRECT_KEYS = ["apple", "icloud", "google", "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok", "netflix", "spotify"];


// ═══════════════════════════════════════════════════════════════════════
//  GAME MODES
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    FRIEND_DISCOVERY: { sig: ["friend", "friendsearch", "findfriend", "addfriend", "friendlist", "friendrequest", "friendmatch", "playersearch", "usersearch", "discovery", "recommend", "suggestion", "nearby", "nearbypla", "playerscan", "regionfilter", "geo_match"], priority: 10, targetPing: 1, maxPing: 4, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 420000, jordanBonus: 300, foreignPenalty: -500, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 15, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "SOCIAL" },
    CREW_RECRUITMENT: { sig: ["crew", "crewsearch", "recruitment", "recruit", "clan", "clansearch", "guild", "guildsearch", "team", "teamsearch", "jointeam", "teamfind", "crewlist", "clanlist", "crew_member", "clan_member", "team_member"], priority: 10, targetPing: 1, maxPing: 4, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 420000, jordanBonus: 300, foreignPenalty: -500, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 15, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "SOCIAL" },
    LOBBY: { sig: ["lobby", "queue", "matchmake", "matchmaking", "waiting_room", "room_list", "roomlist", "serverlist", "server_list", "worldsvr", "region", "playerlist", "online", "player_pool", "match_pool", "active_users"], priority: 10, targetPing: 2, maxPing: 6, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 300000, jordanBonus: 280, foreignPenalty: -450, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 3.5, searchRadius: 300, gameState: "PRE_MATCH" },
    MATCHMAKING: { sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "match_pool", "player_pool"], priority: 10, targetPing: 2, maxPing: 6, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 300000, jordanBonus: 280, foreignPenalty: -450, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "PRE_MATCH" },
    SOCIAL_PROFILE: { sig: ["profile", "userprofile", "playerprofile", "presence", "status", "online_status", "achievement", "statistics", "stats"], priority: 9, targetPing: 3, maxPing: 8, strategy: "SOCIAL_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 220, foreignPenalty: -300, requiresBurst: true, socialPriority: true, visibilityBoost: 10, gameState: "SOCIAL" },
    RANKED: { sig: ["ranked", "rank", "competitive", "tier", "conqueror", "ace", "master", "rating"], priority: 10, targetPing: 4, maxPing: 8, strategy: "GAME_ULTRA_CRITICAL", sticky: true, stickyDuration: 360000, jordanBonus: 200, foreignPenalty: -320, requiresBurst: true, hyperBurst: true, matchmakingSpeed: 2.0, gameState: "IN_GAME" },
    AUTH: { sig: ["auth", "login", "account", "passport", "session", "token", "security"], priority: 10, targetPing: 5, maxPing: 10, strategy: "SECURE_CRITICAL", sticky: true, stickyDuration: 600000, jordanBonus: 160, foreignPenalty: -200, requiresBurst: false, gameState: "AUTH" },
    TDM: { sig: ["tdm", "team_death", "deathmatch", "arena"], priority: 9, targetPing: 4, maxPing: 8, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 180, foreignPenalty: -260, requiresBurst: true, matchmakingSpeed: 2.0, gameState: "IN_GAME" },
    CLASSIC: { sig: ["classic", "battle_royale", "erangel", "miramar", "sanhok", "vikendi", "livik", "karakin", "deston"], priority: 9, targetPing: 5, maxPing: 11, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 360000, jordanBonus: 170, foreignPenalty: -250, requiresBurst: true, matchmakingSpeed: 2.0, gameState: "IN_GAME" },
    CLAN_WAR: { sig: ["clan_war", "clanwar", "crew_challenge", "guild_battle", "territory", "conquest"], priority: 9, targetPing: 5, maxPing: 11, strategy: "SOCIAL_GAME_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 200, foreignPenalty: -280, requiresBurst: true, socialPriority: true, matchmakingSpeed: 3.0, gameState: "IN_GAME" },
    CHAT_VOICE: { sig: ["chat", "voice", "rtc", "im", "message"], priority: 8, targetPing: 7, maxPing: 13, strategy: "SOCIAL_STANDARD", sticky: false, jordanBonus: 140, foreignPenalty: -170, requiresBurst: false, socialPriority: true, gameState: "SOCIAL" },
    METRO: { sig: ["metro", "metro_royale", "underground"], priority: 8, targetPing: 7, maxPing: 13, strategy: "GAME_STANDARD", sticky: true, stickyDuration: 300000, jordanBonus: 150, foreignPenalty: -190, requiresBurst: false, gameState: "IN_GAME" },
    ARCADE: { sig: ["arcade", "quick_match", "mini_zone"], priority: 7, targetPing: 8, maxPing: 16, strategy: "GAME_LIGHT", sticky: false, jordanBonus: 120, foreignPenalty: -140, requiresBurst: false, gameState: "IN_GAME" },
    EVENT: { sig: ["event", "special", "limited", "collab"], priority: 9, targetPing: 5, maxPing: 11, strategy: "GAME_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 160, foreignPenalty: -220, requiresBurst: true, gameState: "IN_GAME" },
    CDN: { sig: ["cdn", "patch", "update", "download"], priority: 2, targetPing: 50, maxPing: 999, strategy: "CDN", sticky: false, jordanBonus: 20, foreignPenalty: 0, gameState: "DOWNLOAD" },
    TRAINING: { sig: ["training", "practice", "cheer_park"], priority: 1, targetPing: 999, maxPing: 999, strategy: "SAFE", sticky: false, jordanBonus: 10, foreignPenalty: 0, gameState: "TRAINING" }
};

var MODE_PRIORITY = ["FRIEND_DISCOVERY", "CREW_RECRUITMENT", "LOBBY", "MATCHMAKING", "SOCIAL_PROFILE", "RANKED", "AUTH", "TDM", "CLASSIC", "CLAN_WAR", "CHAT_VOICE", "METRO", "EVENT", "ARCADE", "CDN", "TRAINING"];


// ═══════════════════════════════════════════════════════════════════════
//  MULTI-PLAYER STATE MANAGER
// ═══════════════════════════════════════════════════════════════════════

var PLAYER_DATA = {};
var GLOBAL_REQUEST_COUNT = 0;

function getPlayerData(pid) {
    if (!PLAYER_DATA[pid]) {
        var h = {};
        for (var n in PROXY) {
            var p = PROXY[n];
            h[n] = { uses: 0, successes: 0, failures: 0, lastUse: 0, lastSuccess: 0, load: 0, status: "READY", avgPing: p.targetPing, recentPings: [], uptime: 100, score: 100, socialUses: 0, regionalUses: 0 };
        }
        PLAYER_DATA[pid] = {
            session: { start: now(), sessionId: "JO_" + pid + "_" + now(), requests: 0, pubgRequests: 0, socialRequests: 0, jordanHits: 0, foreignHits: 0, directHits: 0, blockedHits: 0, friendDiscoveries: 0, crewSearches: 0, lobbyJoins: 0, jordanPlayersFound: 0, socialAPIcalls: 0, regionalHits: {}, activeRegions: {}, totalRegionalCoverage: 0, totalPingTime: 0, bestPing: 999, worstPing: 0, socialAPIavgPing: 0, modeStats: {}, currentMode: null, gameState: "UNKNOWN", networkQuality: "UNKNOWN", congestionLevel: 0, peakHours: false, weekend: false, patterns: {}, socialPatterns: {}, regionalPatterns: {} },
            ml: { patterns: {}, socialPatterns: {}, regionalPatterns: {}, temporalPatterns: {}, learningData: [] },
            sticky: {},
            health: h,
            requestCount: 0
        };
    }
    return PLAYER_DATA[pid];
}

function detectPlayerId(url, host) {
    if (!PLAYER_CFG.ENABLED) return PLAYER_CFG.DEFAULT_ID;
    if (PLAYER_CFG.DETECTION === "URL_PARAM") {
        var m = url.match(/[?&](?:player|uid|id)=([^&]+)/i);
        if (m) return m[1].toUpperCase();
    }
    if (PLAYER_CFG.DETECTION === "HOST_PATTERN") {
        var hm = host.match(/(?:p|player)(\d+)/i);
        if (hm) return "P" + hm[1];
    }
    var idx = GLOBAL_REQUEST_COUNT % PLAYER_CFG.IDS.length;
    return PLAYER_CFG.IDS[idx];
}


// ═══════════════════════════════════════════════════════════════════════
//  CORE FUNCTIONS (Player-Aware)
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }
function generateSessionId() { return "JO_V33_" + now() + "_" + Math.random().toString(36).substr(2, 9); }
function isIPv4(str) { if (!str || str.indexOf(":") !== -1) return false; var parts = str.split("."); if (parts.length !== 4) return false; for (var i = 0; i < 4; i++) { var num = parseInt(parts[i], 10); if (isNaN(num) || num < 0 || num > 255) return false; } return true; }
function maskFromCIDR(cidr) { cidr = String(cidr); var masks = { "8": "255.0.0.0", "10": "255.192.0.0", "11": "255.224.0.0", "12": "255.240.0.0", "13": "255.248.0.0", "14": "255.252.0.0", "15": "255.254.0.0", "16": "255.255.0.0", "17": "255.255.128.0", "18": "255.255.192.0", "19": "255.255.224.0", "20": "255.255.240.0", "21": "255.255.248.0", "22": "255.255.252.0", "23": "255.255.254.0", "24": "255.255.255.0" }; return masks[cidr] || "255.255.0.0"; }
function inRanges(ip, ranges) { if (!ip || !isIPv4(ip)) return false; for (var i = 0; i < ranges.length; i++) { if (isInNet(ip, ranges[i][0], maskFromCIDR(ranges[i][1]))) return true; } return false; }
function containsAny(str, keywords) { for (var i = 0; i < keywords.length; i++) { if (str.indexOf(keywords[i]) !== -1) return true; } return false; }
function getPort(url) { var match = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/); if (match) return parseInt(match[1], 10); if (url.indexOf("https://") === 0) return 443; if (url.indexOf("http://") === 0) return 80; return 443; }

var DNS_CACHE = {}; var DNS_QUEUE = []; var DNS_STATS = { hits: 0, misses: 0, totalTime: 0, avgTime: 0, socialHits: 0, socialAvgTime: 0, regionalHits: 0 };
var SOCIAL_PREFETCH = ["social.pubgmobile.com", "friend.pubgmobile.com", "lobby.pubgmobile.com", "matchmaking.pubgmobile.com", "crew.pubgmobile.com", "player.pubgmobile.com", "region.pubgmobile.com", "nearby.pubgmobile.com"];

function fastDNS(host, pid) {
    var isSocial = containsAny(host.toLowerCase(), SOCIAL_KEYS) || containsAny(host.toLowerCase(), LOBBY_SOCIAL_PATTERNS);
    var isRegional = containsAny(host.toLowerCase(), ["region", "lobby", "match", "player", "nearby", "server"]);
    var cached = DNS_CACHE[host];
    if (cached && (now() - cached.t) < CFG.DNS_CACHE_TTL) { DNS_STATS.hits++; if (isSocial) DNS_STATS.socialHits++; if (isRegional) DNS_STATS.regionalHits++; cached.hitCount = (cached.hitCount || 0) + 1; cached.lastHit = now(); return cached; }
    DNS_STATS.misses++; var t0 = now(); var ip = dnsResolve(host); var dt = now() - t0;
    DNS_STATS.totalTime += dt; DNS_STATS.avgTime = Math.round(DNS_STATS.totalTime / DNS_STATS.misses);
    if (isSocial) { var sc = DNS_STATS
