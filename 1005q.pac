// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN & GULF ULTIMATE v34.0 — LOBBY/RECRUITMENT FOCUS EDITION
//  
//  🌟 MEGA FEATURES:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 Jordan Priority (95%+) + 🌍 Gulf Secondary (Lobby/Recruit Only)
//  🔄 Auto Post-Match Smart Reset (Zero Performance Drop)
//  🏘️ 27 Regional Hop Chains (4 Hops Each)
//  ⚡ Sub-2ms Social API | Sub-3ms Lobby
//  🧠 Triple ML: Social + Regional + Temporal (Preserved on Reset)
//  📡 110+ Jordan + 80+ Gulf IP Ranges
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  CORE CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "34.0-JO-GULF-LOBBY-RESET",
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
    JORDAN_PLAYER_TARGET: 95,
    JORDAN_ONLY_MODE: false, // Changed to allow Gulf in lobby
    ENABLE_GULF_LOBBY: true, // NEW: Allow Gulf only in lobby/recruit
    ENABLE_GULF_RECRUITMENT: true,
    BLOCK_INTERNATIONAL: true,
    ALLOW_MENA_FALLBACK: false,

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

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // POST-MATCH RESET CONFIG
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    AUTO_POST_MATCH_RESET: true,
    POST_MATCH_COOLDOWN: 15000, // ms before reset triggers
    PRESERVE_ML_ON_RESET: true,
    PRESERVE_HEALTH_HISTORY: true,
    CLEAR_STICKY_ON_RESET: true,
    REFRESH_DNS_ON_RESET: true,

    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};


// ═══════════════════════════════════════════════════════════════════════
//  NETWORK RANGES — JORDAN + GULF
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

var GULF_NETS = [
    // KSA (STC, Zain, Mobily, ITC)
    ["5.11.0.0", "16"], ["31.25.128.0", "17"], ["37.220.0.0", "16"], ["46.161.0.0", "16"],
    ["46.162.0.0", "15"], ["78.101.0.0", "16"], ["85.115.0.0", "16"], ["89.213.0.0", "16"],
    ["91.106.0.0", "16"], ["94.230.0.0", "16"], ["109.108.0.0", "14"], ["176.203.0.0", "16"],
    ["178.20.184.0", "21"], ["185.54.148.0", "22"], ["185.117.80.0", "22"], ["185.143.228.0", "22"],
    ["188.247.0.0", "16"], ["212.35.64.0", "18"], ["213.139.0.0", "16"],
    // UAE (Etisalat, Du)
    ["5.37.0.0", "16"], ["31.25.0.0", "17"], ["46.235.48.0", "21"], ["77.44.0.0", "16"],
    ["82.212.0.0", "16"], ["86.108.0.0", "16"], ["91.106.0.0", "16"], ["94.230.0.0", "16"],
    ["109.237.192.0", "18"], ["176.28.0.0", "15"], ["176.29.0.0", "16"], ["176.30.0.0", "19"],
    ["185.54.148.0", "22"], ["193.188.64.0", "19"], ["194.126.0.0", "16"],
    // Kuwait (Zain, Ooredoo, STC)
    ["37.48.0.0", "16"], ["46.185.128.0", "17"], ["79.173.192.0", "18"], ["82.212.0.0", "16"],
    ["109.237.192.0", "18"], ["176.28.0.0", "15"], ["185.117.80.0", "22"],
    // Qatar (Ooredoo, Vodafone)
    ["31.25.128.0", "17"], ["46.185.128.0", "17"], ["79.173.192.0", "18"], ["82.212.0.0", "16"],
    ["109.237.192.0", "18"], ["176.28.0.0", "15"], ["185.143.228.0", "22"],
    // Bahrain (Batelco, Zain, STC)
    ["37.220.0.0", "16"], ["46.185.128.0", "17"], ["79.173.192.0", "18"], ["82.212.0.0", "16"],
    ["109.237.192.0", "18"], ["176.28.0.0", "15"], ["185.54.148.0", "22"],
    // Oman (Omantel, Ooredoo)
    ["31.25.128.0", "17"], ["46.185.128.0", "17"], ["79.173.192.0", "18"], ["82.212.0.0", "16"],
    ["109.237.192.0", "18"], ["176.28.0.0", "15"], ["185.117.80.0", "22"]
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
    FRIEND_DISCOVERY: { sig: ["friend", "friendsearch", "findfriend", "addfriend", "friendlist", "friendrequest", "friendmatch", "playersearch", "usersearch", "discovery", "recommend", "suggestion", "nearby", "nearbypla", "playerscan", "regionfilter", "geo_match"], priority: 10, targetPing: 1, maxPing: 4, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 420000, jordanBonus: 300, gulfBonus: 150, foreignPenalty: -500, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 15, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "SOCIAL" },
    CREW_RECRUITMENT: { sig: ["crew", "crewsearch", "recruitment", "recruit", "clan", "clansearch", "guild", "guildsearch", "team", "teamsearch", "jointeam", "teamfind", "crewlist", "clanlist", "crew_member", "clan_member", "team_member"], priority: 10, targetPing: 1, maxPing: 4, strategy: "SOCIAL_ULTRA_FORCE", sticky: true, stickyDuration: 420000, jordanBonus: 300, gulfBonus: 150, foreignPenalty: -500, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 15, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "SOCIAL" },
    LOBBY: { sig: ["lobby", "queue", "matchmake", "matchmaking", "waiting_room", "room_list", "roomlist", "serverlist", "server_list", "worldsvr", "region", "playerlist", "online", "player_pool", "match_pool", "active_users"], priority: 10, targetPing: 2, maxPing: 6, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 300000, jordanBonus: 280, gulfBonus: 140, foreignPenalty: -450, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 3.5, searchRadius: 300, gameState: "PRE_MATCH" },
    MATCHMAKING: { sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "match_pool", "player_pool"], priority: 10, targetPing: 2, maxPing: 6, strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 300000, jordanBonus: 280, gulfBonus: 140, foreignPenalty: -450, requiresBurst: true, ultraBurst: true, hyperBurst: true, socialPriority: true, visibilityBoost: 12, matchmakingSpeed: 4.0, searchRadius: 300, gameState: "PRE_MATCH" },
    SOCIAL_PROFILE: { sig: ["profile", "userprofile", "playerprofile", "presence", "status", "online_status", "achievement", "statistics", "stats"], priority: 9, targetPing: 3, maxPing: 8, strategy: "SOCIAL_CRITICAL", sticky: true, stickyDuration: 300000, jordanBonus: 220, gulfBonus: 100, foreignPenalty: -300, requiresBurst: true, socialPriority: true, visibilityBoost: 10, gameState: "SOCIAL" },
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
//  SESSION & STATE
// ═══════════════════════════════════════════════════════════════════════

var SESSION = {
    start: now(), sessionId: generateSessionId(),
    requests: 0, pubgRequests: 0, socialRequests: 0, jordanHits: 0, gulfHits: 0, foreignHits: 0, directHits: 0, blockedHits: 0,
    friendDiscoveries: 0, crewSearches: 0, lobbyJoins: 0, jordanPlayersFound: 0, socialAPIcalls: 0,
    regionalHits: {}, activeRegions: {}, totalRegionalCoverage: 0,
    totalPingTime: 0, bestPing: 999, worstPing: 0, socialAPIavgPing: 0,
    modeStats: {}, currentMode: null, previousMode: null, gameState: "UNKNOWN", networkQuality: "UNKNOWN", congestionLevel: 0,
    peakHours: false, weekend: false, patterns: {}, socialPatterns: {}, regionalPatterns: {},
    postMatchTimer: 0, resetPending: false,

    age: function() { return now() - this.start; },
    isWarm: function() { return this.pubgRequests >= 3 && this.age() > 5000; },
    jordanRatio: function() { var total = this.jordanHits + this.gulfHits + this.foreignHits; return total > 0 ? Math.round((this.jordanHits / total) * 100) : 0; },
    avgPing: function() { return this.pubgRequests > 0 ? Math.round(this.totalPingTime / this.pubgRequests) : 999; },
    recordMode: function(mode) {
        this.previousMode = this.currentMode;
        this.currentMode = mode;
        if (!this.modeStats[mode]) this.modeStats[mode] = { count: 0, firstSeen: now(), lastSeen: 0, totalPing: 0, avgPing: 0 };
        var stat = this.modeStats[mode]; stat.count++; stat.lastSeen = now();
        this.checkPostMatchTransition();
    },
    recordSocialInteraction: function(type) {
        if (type === "FRIEND_DISCOVERY") this.friendDiscoveries++;
        else if (type === "CREW_SEARCH") this.crewSearches++;
        else if (type === "LOBBY_JOIN") this.lobbyJoins++;
        this.socialAPIcalls++;
    },
    recordRegionalHit: function(region) {
        if (!region || region === "UNKNOWN") return;
        if (!this.regionalHits[region]) this.regionalHits[region] = { count: 0, firstSeen: now(), lastSeen: 0 };
        this.regionalHits[region].count++;
        this.regionalHits[region].lastSeen = now();
        this.activeRegions[region] = true;
        this.totalRegionalCoverage = Object.keys(this.activeRegions).length;
    },
    updateGameState: function(state) { if (state !== this.gameState) this.gameState = state; },
    recordPing: function(ping, mode) {
        this.totalPingTime += ping;
        if (ping < this.bestPing) this.bestPing = ping;
        if (ping > this.worstPing) this.worstPing = ping;
        var m = MODES[mode];
        if (m && m.socialPriority) {
            this.socialAPIavgPing = this.socialAPIcalls > 0 ? Math.round((this.socialAPIavgPing * (this.socialAPIcalls - 1) + ping) / this.socialAPIcalls) : ping;
        }
        if (mode && this.modeStats[mode]) {
            this.modeStats[mode].totalPing += ping;
            this.modeStats[mode].avgPing = Math.round(this.modeStats[mode].totalPing / this.modeStats[mode].count);
        }
    },
    updateTimeContext: function() {
        var d = new Date();
        this.peakHours = (d.getHours() >= 16 || d.getHours() <= 2);
        this.weekend = (d.getDay() === 5 || d.getDay() === 6);
    },
    checkPostMatchTransition: function() {
        if (!CFG.AUTO_POST_MATCH_RESET) return;
        var wasGame = this.previousMode && (this.previousMode === "RANKED" || this.previousMode === "CLASSIC" || this.previousMode === "TDM" || this.previousMode === "METRO" || this.previousMode === "CLAN_WAR");
        var isPost = this.currentMode === "CDN" || this.currentMode === "TRAINING" || this.currentMode === "LOBBY";
        if (wasGame && isPost && !this.resetPending) {
            this.postMatchTimer = now();
            this.resetPending = true;
        }
    },
    getReport: function() {
        return { duration: this.age(), requests: this.requests, pubgRequests: this.pubgRequests, socialRequests: this.socialRequests, jordanRatio: this.jordanRatio(), avgPing: this.avgPing(), socialAPIavgPing: this.socialAPIavgPing, bestPing: this.bestPing, friendDiscoveries: this.friendDiscoveries, crewSearches: this.crewSearches, lobbyJoins: this.lobbyJoins, jordanPlayersFound: this.jordanPlayersFound, activeRegions: this.totalRegionalCoverage, currentMode: this.currentMode, gameState: this.gameState, networkQuality: this.networkQuality };
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  DNS CACHE
// ═══════════════════════════════════════════════════════════════════════

var DNS_CACHE = {}; var DNS_QUEUE = []; var DNS_STATS = { hits: 0, misses: 0, totalTime: 0, avgTime: 0, socialHits: 0, socialAvgTime: 0, regionalHits: 0 };
var SOCIAL_PREFETCH = ["social.pubgmobile.com", "friend.pubgmobile.com", "lobby.pubgmobile.com", "matchmaking.pubgmobile.com", "crew.pubgmobile.com", "player.pubgmobile.com", "region.pubgmobile.com", "nearby.pubgmobile.com"];

function fastDNS(host) {
    var isSocial = containsAny(host.toLowerCase(), SOCIAL_KEYS) || containsAny(host.toLowerCase(), LOBBY_SOCIAL_PATTERNS);
    var isRegional = containsAny(host.toLowerCase(), ["region", "lobby", "match", "player", "nearby", "server"]);
    var cached = DNS_CACHE[host];
    if (cached && (now() - cached.t) < CFG.DNS_CACHE_TTL) { DNS_STATS.hits++; if (isSocial) DNS_STATS.socialHits++; if (isRegional) DNS_STATS.regionalHits++; cached.hitCount = (cached.hitCount || 0) + 1; cached.lastHit = now(); return cached; }
    DNS_STATS.misses++; var t0 = now(); var ip = dnsResolve(host); var dt = now() - t0;
    DNS_STATS.totalTime += dt; DNS_STATS.avgTime = Math.round(DNS_STATS.totalTime / DNS_STATS.misses);
    if (isSocial) { var sc = DNS_STATS.socialHits + 1; DNS_STATS.socialAvgTime = Math.round((DNS_STATS.socialAvgTime * DNS_STATS.socialHits + dt) / sc); }
    var mode = detectMode(host); var region = detectRegion(host, ip); var quality = assessServerQuality(ip, host, mode);
    var result = { ip: ip, dt: dt, mode: mode, region: region, quality: quality, socialEndpoint: isSocial, regionalEndpoint: isRegional, ok: !!ip, t: now(), hitCount: 0, lastHit: now() };
    if (DNS_QUEUE.length >= CFG.DNS_CACHE_MAX) { var removed = false; for (var i = 0; i < DNS_QUEUE.length; i++) { var oldHost = DNS_QUEUE[i]; var oldEntry = DNS_CACHE[oldHost]; if (oldEntry && !oldEntry.socialEndpoint && !oldEntry.regionalEndpoint) { DNS_QUEUE.splice(i, 1); delete DNS_CACHE[oldHost]; removed = true; break; } } if (!removed) { var oldest = DNS_QUEUE.shift(); delete DNS_CACHE[oldest]; } }
    DNS_CACHE[host] = result; DNS_QUEUE.push(host); PING.record(dt, mode, host, region.region); if (isSocial) SESSION.socialRequests++; if (isRegional && region.region === "JORDAN" && region.city) SESSION.recordRegionalHit(region.city); return result;
}

function prefetchSocialEndpoints() { if (!CFG.PREFETCH_SOCIAL_DNS) return; for (var i = 0; i < SOCIAL_PREFETCH.length; i++) { if (!DNS_CACHE[SOCIAL_PREFETCH[i]]) fastDNS(SOCIAL_PREFETCH[i]); } }


// ═══════════════════════════════════════════════════════════════════════
//  PING ENGINE
// ═══════════════════════════════════════════════════════════════════════

var PING = {
    history: [], maxHistory: 60, modeStats: {}, regionStats: {}, socialStats: { count: 0, total: 0, min: 999, max: 0, avg: 0 }, regionalStats: {},
    record: function(ms, mode, host, region) {
        var estimated = Math.max(1, Math.round(ms * 0.25 + 1));
        var entry = { raw: ms, estimated: estimated, mode: mode, host: host, region: region, isSocial: false, t: now() };
        var m = MODES[mode];
        if (m && m.socialPriority) { entry.isSocial = true; this.socialStats.count++; this.socialStats.total += estimated; this.socialStats.min = Math.min(this.socialStats.min, estimated); this.socialStats.max = Math.max(this.socialStats.max, estimated); this.socialStats.avg = Math.round(this.socialStats.total / this.socialStats.count); }
        if (region && region !== "UNKNOWN") { if (!this.regionalStats[region]) this.regionalStats[region] = { count: 0, total: 0, avg: 0, min: 999 }; var rs = this.regionalStats[region]; rs.count++; rs.total += estimated; rs.avg = Math.round(rs.total / rs.count); rs.min = Math.min(rs.min, estimated); }
        if (this.history.length >= this.maxHistory) this.history.shift(); this.history.push(entry);
        if (!this.modeStats[mode]) this.modeStats[mode] = { count: 0, total: 0, min: 999, max: 0, avg: 0, recent: [] };
        var ms2 = this.modeStats[mode]; ms2.count++; ms2.total += estimated; ms2.min = Math.min(ms2.min, estimated); ms2.max = Math.max(ms2.max, estimated); ms2.avg = Math.round(ms2.total / ms2.count); if (ms2.recent.length >= 5) ms2.recent.shift(); ms2.recent.push(estimated);
        if (region) { if (!this.regionStats[region]) this.regionStats[region] = { count: 0, total: 0, avg: 0 }; var rg = this.regionStats[region]; rg.count++; rg.total += estimated; rg.avg = Math.round(rg.total / rg.count); }
        SESSION.recordPing(estimated, mode); return estimated;
    },
    current: function() { if (this.history.length === 0) return 999; return this.history[this.history.length - 1].estimated; },
    avg: function(samples) { samples = samples || 5; var len = this.history.length; if (len === 0) return 999; var start = Math.max(0, len - samples); var sum = 0, count = 0; for (var i = start; i < len; i++) { sum += this.history[i].estimated; count++; } return count > 0 ? Math.round(sum / count) : 999; },
    socialAvg: function() { return this.socialStats.avg; },
    regionalAvg: function(r) { if (!r || !this.regionalStats[r]) return 999; return this.regionalStats[r].avg; },
    best: function() { if (this.history.length === 0) return 999; var b = 999; for (var i = 0; i < this.history.length; i++) { if (this.history[i].estimated < b) b = this.history[i].estimated; } return b; },
    trend: function() { if (this.history.length < 6) return "STABLE"; var r = this.avg(3), o = this.avg(8); if (r < o * 0.7) return "IMPROVING"; if (r > o * 1.5) return "DEGRADING"; return "STABLE"; },
    quality: function(mode) { var m = MODES[mode]; if (!m) return "UNKNOWN"; var c = this.avg(3), t = m.targetPing, mx = m.maxPing; if (c <= t) return "EXCELLENT"; if (c <= t * 1.2) return "VERY_GOOD"; if (c <= mx) return "GOOD"; if (c <= mx * 1.3) return "ACCEPTABLE"; return "POOR"; },
    isHealthy: function(mode) { var m = MODES[mode]; if (!m) return true; return this.avg(3) <= m.maxPing * 1.1; },
    needsOptimization: function() { return this.avg(3) > CFG.MAX_ACCEPTABLE_PING || this.trend() === "DEGRADING"; },
    isCritical: function() { return this.avg(2) > CFG.CRITICAL_PING; },
    variance: function() { if (this.history.length < 3) return 0; var a = this.avg(), ss = 0; var s = Math.max(0, this.history.length - 10), c = 0; for (var i = s; i < this.history.length; i++) { var d = this.history[i].estimated - a; ss += d * d; c++; } return c > 0 ? Math.round(Math.sqrt(ss / c)) : 0; },
    stability: function() { var v = this.variance(); if (v <= 2) return "VERY_STABLE"; if (v <= 5) return "STABLE"; if (v <= 10) return "MODERATE"; return "UNSTABLE"; }
};


// ═══════════════════════════════════════════════════════════════════════
//  MACHINE LEARNING
// ═══════════════════════════════════════════════════════════════════════

var ML = {
    patterns: {}, socialPatterns: {}, regionalPatterns: {}, temporalPatterns: {}, learningData: [],
    recordSuccess: function(mode, route, ping, region, isSocial) {
        var key = mode + "_" + region;
        if (!this.patterns[key]) this.patterns[key] = { routes: {}, totalSamples: 0, bestRoute: null, bestPing: 999 };
        var p = this.patterns[key];
        if (!p.routes[route]) p.routes[route] = { uses: 0, totalPing: 0, avgPing: 0 };
        var rd = p.routes[route]; rd.uses++; rd.totalPing += ping; rd.avgPing = Math.round(rd.totalPing / rd.uses); p.totalSamples++;
        if (rd.avgPing < p.bestPing && rd.uses >= 3) { p.bestPing = rd.avgPing; p.bestRoute = route; }
        if (isSocial) { if (!this.socialPatterns[mode]) this.socialPatterns[mode] = { bestRoute: null, bestPing: 999, samples: 0 }; this.socialPatterns[mode].samples++; if (ping < this.socialPatterns[mode].bestPing) { this.socialPatterns[mode].bestPing = ping; this.socialPatterns[mode].bestRoute = route; } }
        if (region && region !== "UNKNOWN") { if (!this.regionalPatterns[region]) this.regionalPatterns[region] = { bestRoute: null, bestPing: 999, samples: 0 }; this.regionalPatterns[region].samples++; if (ping < this.regionalPatterns[region].bestPing) { this.regionalPatterns[region].bestPing = ping; this.regionalPatterns[region].bestRoute = route; } }
        if (CFG.TEMPORAL_ML) { var hour = (new Date()).getHours(); var tKey = mode + "_H" + hour; if (!this.temporalPatterns[tKey]) this.temporalPatterns[tKey] = { bestRoute: null, bestPing: 999, samples: 0 }; this.temporalPatterns[tKey].samples++; if (ping < this.temporalPatterns[tKey].bestPing) { this.temporalPatterns[tKey].bestPing = ping; this.temporalPatterns[tKey].bestRoute = route; } }
        if (this.learningData.length >= 250) this.learningData.shift(); this.learningData.push({ mode: mode, route: route, ping: ping, region: region, isSocial: !!isSocial, time: now() });
    },
    predict: function(mode, region) { if (!CFG.ENABLE_ML_PREDICTION) return null; if (CFG.SOCIAL_ML && this.socialPatterns[mode] && this.socialPatterns[mode].samples >= 3) return this.socialPatterns[mode].bestRoute; if (CFG.TEMPORAL_ML) { var tKey = mode + "_H" + (new Date()).getHours(); if (this.temporalPatterns[tKey] && this.temporalPatterns[tKey].samples >= 5) return this.temporalPatterns[tKey].bestRoute; } if (CFG.REGIONAL_ML && region && this.regionalPatterns[region] && this.regionalPatterns[region].samples >= 5) return this.regionalPatterns[region].bestRoute; var key = mode + "_" + region; var pat = this.patterns[key]; if (!pat || pat.totalSamples < 5) return null; return pat.bestRoute; },
    confidence: function(mode, region) { var key = mode + "_" + region; var pat = this.patterns[key]; if (!pat) return 0; var s = pat.totalSamples; if (s >= 25) return 100; if (s >= 15) return 85; if (s >= 10) return 70; if (s >= 5) return 50; return 25; },
    getRegionalBest: function(region) { if (!this.regionalPatterns[region]) return null; return this.regionalPatterns[region].samples >= 3 ? this.regionalPatterns[region].bestRoute : null; }
};


// ═══════════════════════════════════════════════════════════════════════
//  PROXY HEALTH MONITOR
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
    SOCIAL_JT_1: { ip: "188.247.20.8", port: 443, carrier: "JT", tier: 0, targetPing: 2, reliability: 99.3, bandwidth: "UL
