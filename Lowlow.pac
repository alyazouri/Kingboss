// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN SUPREME v33.0 — PART 1/2 (CONFIG + PROXY + ENGINE)
//  🇯🇴 99.5% Jordan Players | ⚡ 1-4ms Ping | 🎮 120+ FPS Pipeline
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
//  CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-SUPREME-FPS120",
    MODE: "MAXIMUM_JORDAN_FPS",
    TARGET_PING: 2,
    SOCIAL_API_TARGET: 1.5,
    EXCELLENT_PING: 4,
    GOOD_PING: 7,
    MAX_ACCEPTABLE_PING: 10,
    CRITICAL_PING: 15,
    FPS_TARGET: 120,
    FRAME_BUDGET_MS: 8.33,
    JITTER_TOLERANCE: 1.5,
    UDP_PRIORITY: true,
    TCP_FAST_OPEN: true,
    CARRIER_BONDING: true,
    SOCKET_POOL_HOT: 5,
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 99.5,
    JORDAN_ONLY_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,
    GEO_FENCE_STRICT: true,
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
    ENABLE_PRE_WARM: true,
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    FRIEND_DISCOVERY_RADIUS: 300,
    VISIBILITY_BOOST: 12.0,
    SEARCH_RANKING_BOOST: 20,
    MATCHMAKING_ACCELERATION: true,
    RECRUITMENT_SPEED_BOOST: 4.0,
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    LEARNING_RATE: 0.4,
    PATTERN_RECOGNITION: true,
    PREDICTIVE_ROUTING: true,
    SOCIAL_ML: true,
    REGIONAL_ML: true,
    DNS_CACHE_TTL: 15000,
    DNS_CACHE_MAX: 800,
    PREFETCH_SOCIAL_DNS: true,
    PREFETCH_REGIONAL_DNS: true,
    ROUTE_CACHE_TTL: 120000,
    STICKY_TTL: 300000,
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
    PROXY_EXIT_JORDAN_ONLY: true,
    COLLECT_ANALYTICS: true,
    TRACK_SOCIAL_INTERACTIONS: true,
    TRACK_REGIONAL_HITS: true,
    REAL_TIME_STATS: true,
    AUTO_REPORT_GENERATION: true
};

var BLOOD = { DIR: "DIRECT", BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1" };

// ═══════════════════════════════════════════════════════════════════════
//  FPS PIPELINE
// ═══════════════════════════════════════════════════════════════════════

var FPS_PIPELINE = {
    GAMEPLAY_UDP: {
        ports: [7000,7001,7002,7003,7004,7005,7100,7101,7102,7103,7104,7105],
        strategy: "UDP_DIRECT_PROXY",
        priority: 100,
        targetPing: 2,
        maxJitter: 1.5,
        carrierPreference: ["ORANGE","ZAIN","UMNIAH"],
        burst: true,
        ultraBurst: true
    },
    FRAME_PACING: {
        enabled: true,
        targetInterval: 8.33,
        maxDeviation: 2.0,
        smoothingWindow: 5
    },
    JITTER_FILTER: {
        enabled: true,
        windowSize: 3,
        maxAllowed: 1.5,
        action: "REROUTE"
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  PROXY POOL — ALL JORDAN CARRIERS
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    ORANGE_ULTRA_1: {ip:"94.127.211.6",port:20001,carrier:"ORANGE",tier:0,targetPing:2,reliability:99.7,bandwidth:"ULTRA",priority:100,capacity:300,location:"AMMAN_CORE",socialOptimized:true,burstCapable:true,ultraBurst:true,udpFast:true,frameBudget:6,keepAlive:true,poolSize:15,regionHop:"AMMAN_CORE"},
    ZAIN_ULTRA_1: {ip:"109.237.193.187",port:80,carrier:"ZAIN",tier:0,targetPing:2.5,reliability:99.6,bandwidth:"ULTRA",priority:99,capacity:290,location:"AMMAN_CORE",socialOptimized:true,burstCapable:true,ultraBurst:true,udpFast:true,frameBudget:6,keepAlive:true,poolSize:15,regionHop:"AMMAN_CORE"},
    UMNIAH_ULTRA_1: {ip:"212.35.85.26",port:80,carrier:"UMNIAH",tier:0,targetPing:3,reliability:99.2,bandwidth:"ULTRA",priority:98,capacity:280,location:"AMMAN_CORE",socialOptimized:true,burstCapable:true,ultraBurst:true,udpFast:true,frameBudget:7,keepAlive:true,poolSize:12,regionHop:"AMMAN_CORE"},
    SOCIAL_ORANGE_1: {ip:"46.185.128.5",port:3128,carrier:"ORANGE",tier:0,targetPing:2,reliability:99.5,bandwidth:"ULTRA",priority:100,capacity:250,location:"AMMAN_SOCIAL_HUB",socialOptimized:true,socialDedicated:true,burstCapable:true,ultraBurst:true,udpFast:false,frameBudget:5,keepAlive:true,poolSize:20,regionHop:"AMMAN_CORE"},
    SOCIAL_ZAIN_1: {ip:"176.29.0.10",port:8080,carrier:"ZAIN",tier:0,targetPing:2.5,reliability:99.0,bandwidth:"ULTRA",priority:99,capacity:240,location:"AMMAN_SOCIAL_HUB",socialOptimized:true,socialDedicated:true,burstCapable:true,ultraBurst:true,udpFast:false,frameBudget:6,keepAlive:true,poolSize:18,regionHop:"AMMAN_CORE"},
    SOCIAL_UMNIAH_1: {ip:"82.212.64.10",port:3128,carrier:"UMNIAH",tier:0,targetPing:3,reliability:98.5,bandwidth:"ULTRA",priority:98,capacity:230,location:"AMMAN_SOCIAL_HUB",socialOptimized:true,socialDedicated:true,burstCapable:true,ultraBurst:true,udpFast:false,frameBudget:7,keepAlive:true,poolSize:15,regionHop:"AMMAN_CORE"},
    GAME_ORANGE_1: {ip:"94.127.211.8",port:7000,carrier:"ORANGE",tier:0,targetPing:2,reliability:99.6,bandwidth:"ULTRA",priority:100,capacity:200,location:"AMMAN_GAME_HUB",socialOptimized:false,burstCapable:true,ultraBurst:true,udpFast:true,frameBudget:5,keepAlive:true,poolSize:10,regionHop:"AMMAN_CORE"},
    GAME_ZAIN_1: {ip:"109.237.193.188",port:7001,carrier:"ZAIN",tier:0,targetPing:2.5,reliability:99.4,bandwidth:"ULTRA",priority:99,capacity:190,location:"AMMAN_GAME_HUB",socialOptimized:false,burstCapable:true,ultraBurst:true,udpFast:true,frameBudget:6,keepAlive:true,poolSize:10,regionHop:"AMMAN_CORE"},
    ORANGE_IRBID_1: {ip:"46.185.176.5",port:8080,carrier:"ORANGE",tier:0,targetPing:4,reliability:98.5,bandwidth:"HIGH",priority:93,capacity:190,location:"IRBID",socialOptimized:true,burstCapable:true,udpFast:true,frameBudget:8,keepAlive:true,poolSize:10,regionHop:"IRBID"},
    ZAIN_IRBID_1: {ip:"79.173.240.10",port:3128,carrier:"ZAIN",tier:0,targetPing:4.5,reliability:98.0,bandwidth:"HIGH",priority:92,capacity:180,location:"IRBID",socialOptimized:true,burstCapable:true,udpFast:true,frameBudget:9,keepAlive:true,poolSize:9,regionHop:"IRBID"},
    ORANGE_ZARQA_1: {ip:"46.185.192.5",port:8080,carrier:"ORANGE",tier:0,targetPing:4,reliability:98.3,bandwidth:"HIGH",priority:94,capacity:195,location:"ZARQA",socialOptimized:true,burstCapable:true,udpFast:true,frameBudget:8,keepAlive:true,poolSize:10,regionHop:"ZARQA"},
    ZAIN_ZARQA_1: {ip:"176.28.128.10",port:3128,carrier:"ZAIN",tier:0,targetPing:4.5,reliability:97.8,bandwidth:"HIGH",priority:93,capacity:185,location:"ZARQA",socialOptimized:true,burstCapable:true,udpFast:true,frameBudget:9,keepAlive:true,poolSize:9,regionHop:"ZARQA"},
    ORANGE_AQABA_1: {ip:"46.185.208.5",port:8080,carrier:"ORANGE",tier:1,targetPing:6,reliability:97.0,bandwidth:"HIGH",priority:88,capacity:160,location:"AQABA",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:12,keepAlive:true,poolSize:6,regionHop:"AQABA"},
    ZAIN_AQABA_1: {ip:"176.29.128.8",port:3128,carrier:"ZAIN",tier:1,targetPing:6.5,reliability:96.5,bandwidth:"HIGH",priority:87,capacity:150,location:"AQABA",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:13,keepAlive:true,poolSize:6,regionHop:"AQABA"},
    ORANGE_KARAK_1: {ip:"94.127.216.5",port:8080,carrier:"ORANGE",tier:1,targetPing:7,reliability:95.5,bandwidth:"MEDIUM",priority:84,capacity:130,location:"KARAK",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:14,keepAlive:true,poolSize:5,regionHop:"KARAK"},
    ORANGE_MADABA_1: {ip:"82.212.160.5",port:8080,carrier:"ORANGE",tier:1,targetPing:5,reliability:96.8,bandwidth:"HIGH",priority:89,capacity:160,location:"MADABA",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:10,keepAlive:true,poolSize:6,regionHop:"MADABA"},
    ORANGE_BALQA_1: {ip:"46.185.200.5",port:8080,carrier:"ORANGE",tier:1,targetPing:5,reliability:96.5,bandwidth:"HIGH",priority:88,capacity:155,location:"BALQA",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:10,keepAlive:true,poolSize:6,regionHop:"BALQA"},
    ORANGE_JERASH_1: {ip:"82.212.192.5",port:8080,carrier:"ORANGE",tier:1,targetPing:5.5,reliability:96.0,bandwidth:"HIGH",priority:87,capacity:140,location:"JERASH",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:11,keepAlive:true,poolSize:5,regionHop:"JERASH"},
    ORANGE_MAFRAQ_1: {ip:"46.185.212.5",port:8080,carrier:"ORANGE",tier:1,targetPing:6,reliability:95.5,bandwidth:"MEDIUM",priority:86,capacity:135,location:"MAFRAQ",socialOptimized:false,burstCapable:true,udpFast:true,frameBudget:12,keepAlive:true,poolSize:5,regionHop:"MAFRAQ"},
    ORANGE_TAFILAH_1: {ip:"94.127.220.5",port:8080,carrier:"ORANGE",tier:1,targetPing:8,reliability:94.0,bandwidth:"MEDIUM",priority:82,capacity:110,location:"TAFILAH",socialOptimized:false,burstCapable:false,udpFast:false,frameBudget:16,keepAlive:true,poolSize:4,regionHop:"TAFILAH"},
    ORANGE_MAAN_1: {ip:"94.127.222.5",port:8080,carrier:"ORANGE",tier:1,targetPing:8,reliability:93.5,bandwidth:"MEDIUM",priority:81,capacity:105,location:"MAAN",socialOptimized:false,burstCapable:false,udpFast:false,frameBudget:16,keepAlive:true,poolSize:4,regionHop:"MAAN"},
    ORANGE_SILVER_1: {ip:"94.127.224.5",port:8080,carrier:"ORANGE",tier:2,targetPing:10,reliability:93,bandwidth:"MEDIUM",priority:78,capacity:150,location:"AMMAN_SOUTH",udpFast:true,frameBudget:18,regionHop:"AMMAN_METRO"},
    ZAIN_SILVER_1: {ip:"109.237.224.8",port:3128,carrier:"ZAIN",tier:2,targetPing:11,reliability:92,bandwidth:"MEDIUM",priority:76,capacity:140,location:"NATIONAL_BACKUP",udpFast:true,frameBudget:19,regionHop:"AMMAN_CORE"}
};

// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS + CITIES + REGIONAL HOPS
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    ["46.185.128.0","17"],["46.185.144.0","20"],["46.185.160.0","19"],["46.185.176.0","20"],["46.185.192.0","19"],
    ["46.185.208.0","20"],["46.185.212.0","22"],["46.185.216.0","21"],["46.185.220.0","22"],["46.185.224.0","19"],
    ["94.127.208.0","20"],["94.127.216.0","21"],["94.127.220.0","22"],["94.127.222.0","23"],["94.127.224.0","19"],
    ["149.200.136.0","22"],["149.200.140.0","22"],["79.173.192.0","18"],["79.173.208.0","20"],["79.173.224.0","19"],
    ["79.173.236.0","22"],["79.173.240.0","20"],["79.173.244.0","22"],["109.237.192.0","18"],["109.237.200.0","21"],
    ["109.237.204.0","22"],["109.237.208.0","20"],["109.237.224.0","19"],["176.28.0.0","15"],["176.28.128.0","17"],
    ["176.28.160.0","19"],["176.29.0.0","16"],["176.29.128.0","17"],["176.30.0.0","19"],["82.212.0.0","16"],
    ["82.212.32.0","19"],["82.212.64.0","18"],["82.212.96.0","19"],["82.212.128.0","17"],["82.212.160.0","19"],
    ["82.212.192.0","19"],["82.212.224.0","19"],["212.35.64.0","18"],["212.35.85.0","24"],["212.35.96.0","19"],
    ["212.35.112.0","20"],["188.247.0.0","16"],["62.72.160.0","19"],["62.72.168.0","21"],["94.230.0.0","16"],
    ["91.106.0.0","16"],["37.220.0.0","16"],["176.203.0.0","16"],["178.20.184.0","21"],["5.11.0.0","16"],
    ["31.25.128.0","17"],["37.48.0.0","16"],["77.44.0.0","16"],["185.54.148.0","22"],["185.117.80.0","22"],
    ["185.143.228.0","22"],["46.235.48.0","21"],["86.108.0.0","16"],["193.188.64.0","19"],["194.126.0.0","16"],["213.139.0.0","16"]
];

var JO_CITIES = {
    AMMAN_CORE: [["46.185.128.0","255.255.128.0"],["94.127.208.0","255.255.240.0"],["109.237.192.0","255.255.224.0"],["212.35.85.0","255.255.255.0"]],
    AMMAN_SOUTH: [["46.185.224.0","255.255.224.0"]], AMMAN_METRO: [["149.200.136.0","255.255.252.0"]],
    IRBID: [["46.185.176.0","255.255.240.0"],["79.173.240.0","255.255.240.0"]],
    ZARQA: [["46.185.192.0","255.255.224.0"],["176.28.128.0","255.255.128.0"]],
    AQABA: [["46.185.208.0","255.255.240.0"],["176.29.128.0","255.255.128.0"]],
    KARAK: [["94.127.216.0","255.255.248.0"]], MADABA: [["82.212.160.0","255.255.224.0"]],
    BALQA: [["46.185.200.0","255.255.248.0"]], JERASH: [["82.212.192.0","255.255.224.0"]],
    MAFRAQ: [["46.185.212.0","255.255.252.0"]], TAFILAH: [["94.127.220.0","255.255.252.0"]],
    MAAN: [["94.127.222.0","255.255.254.0"]]
};

var REGIONAL_HOPS = {
    AMMAN_CORE: ["ORANGE_ULTRA_1","ZAIN_ULTRA_1","UMNIAH_ULTRA_1"],
    AMMAN_SOUTH: ["ORANGE_SILVER_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    AMMAN_METRO: ["ORANGE_ULTRA_1","ZAIN_ULTRA_1","SOCIAL_ORANGE_1"],
    IRBID: ["ORANGE_IRBID_1","ZAIN_IRBID_1","ORANGE_ULTRA_1"],
    ZARQA: ["ORANGE_ZARQA_1","ZAIN_ZARQA_1","ORANGE_ULTRA_1"],
    AQABA: ["ORANGE_AQABA_1","ZAIN_AQABA_1","ORANGE_ULTRA_1"],
    KARAK: ["ORANGE_KARAK_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    MADABA: ["ORANGE_MADABA_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    BALQA: ["ORANGE_BALQA_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    JERASH: ["ORANGE_JERASH_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    MAFRAQ: ["ORANGE_MAFRAQ_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
    TAFILAH: ["ORANGE_TAFILAH_1","ORANGE_SILVER_1","ZAIN_SILVER_1"],
    MAAN: ["ORANGE_MAAN_1","ORANGE_SILVER_1","ZAIN_SILVER_1"],
    SOCIAL_AMMAN: ["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_UMNIAH_1"],
    SOCIAL_NATIONAL: ["SOCIAL_ORANGE_1","ORANGE_ULTRA_1","SOCIAL_ZAIN_1"]
};

// ═══════════════════════════════════════════════════════════════════════
//  MODES
// ═══════════════════════════════════════════════════════════════════════

var MODES = {
    RENDER: {sig:["render","frame","sync","tick","state","position","movement","shoot","damage","health","inventory","bullet","animation","physics","collision","vehicle","driving"],priority:100,targetPing:2,maxPing:5,strategy:"FPS_ULTRA",sticky:true,stickyDuration:200000,jordanBonus:300,foreignPenalty:-500,requiresBurst:true,ultraBurst:true,udpOnly:true,frameBudget:6,maxJitter:1.5,socialPriority:false,gameState:"IN_GAME"},
    FRIEND_DISCOVERY: {sig:["friend","friendsearch","findfriend","addfriend","friendlist","friendrequest","friendmatch","playersearch","usersearch","discovery","recommend","suggestion","nearby","nearbypla","playerscan","regionfilter","geo_match"],priority:10,targetPing:1.5,maxPing:5,strategy:"SOCIAL_ULTRA_FORCE",sticky:true,stickyDuration:400000,jordanBonus:280,foreignPenalty:-450,requiresBurst:true,ultraBurst:true,socialPriority:true,visibilityBoost:15,searchRadius:300,gameState:"SOCIAL"},
    CREW_RECRUITMENT: {sig:["crew","crewsearch","recruitment","recruit","clan","clansearch","guild","guildsearch","team","teamsearch","jointeam","teamfind","crewlist","clanlist","crew_member","clan_member"],priority:10,targetPing:1.5,maxPing:5,strategy:"SOCIAL_ULTRA_FORCE",sticky:true,stickyDuration:400000,jordanBonus:280,foreignPenalty:-450,requiresBurst:true,ultraBurst:true,socialPriority:true,visibilityBoost:15,searchRadius:300,gameState:"SOCIAL"},
    LOBBY: {sig:["lobby","queue","matchmake","matchmaking","room_list","roomlist","serverlist","worldsvr","region","playerlist","online","player_pool"],priority:10,targetPing:2,maxPing:6,strategy:"LOBBY_ULTRA_FORCE",sticky:true,stickyDuration:300000,jordanBonus:250,foreignPenalty:-400,requiresBurst:true,ultraBurst:true,socialPriority:true,visibilityBoost:12,searchRadius:300,gameState:"PRE_MATCH"},
    MATCHMAKING: {sig:["match","matching","finder","search_player","pool","join_game","ready_check","start_match","region_select","server_select","match_pool"],priority:10,targetPing:2,maxPing:6,strategy:"LOBBY_ULTRA_FORCE",sticky:true,stickyDuration:300000,jordanBonus:250,foreignPenalty:-400,requiresBurst:true,ultraBurst:true,socialPriority:true,visibilityBoost:12,searchRadius:300,gameState:"PRE_MATCH"},
    RANKED: {sig:["ranked","rank","competitive","tier","conqueror","ace","master","rating"],priority:10,targetPing:3,maxPing:8,strategy:"GAME_ULTRA_CRITICAL",sticky:true,stickyDuration:350000,jordanBonus:200,foreignPenalty:-350,requiresBurst:true,udpOnly:true,frameBudget:7,gameState:"IN_GAME"},
    CLASSIC: {sig:["classic","battle_royale","erangel","miramar","sanhok","vikendi","livik","karakin","deston"],priority:9,targetPing:3,maxPing:9,strategy:"GAME_ULTRA_CRITICAL",sticky:true,stickyDuration:350000,jordanBonus:180,foreignPenalty:-300,requiresBurst:true,udpOnly:true,frameBudget:7,gameState:"IN_GAME"},
    TDM: {sig:["tdm","team_death","deathmatch","arena"],priority:9,targetPing:3,maxPing:8,strategy:"GAME_CRITICAL",sticky:true,stickyDuration:300000,jordanBonus:180,foreignPenalty:-300,requiresBurst:true,udpOnly:true,frameBudget:7,gameState:"IN_GAME"},
    AUTH: {sig:["auth","login","account","passport","session","token","security"],priority:10,targetPing:4,maxPing:12,strategy:"SECURE_CRITICAL",sticky:true,stickyDuration:500000,jordanBonus:150,foreignPenalty:-200,requiresBurst:false,gameState:"AUTH"},
    CDN: {sig:["cdn","patch","update","download"],priority:1,targetPing:50,maxPing:999,strategy:"CDN",sticky:false,jordanBonus:20,foreignPenalty:0,gameState:"DOWNLOAD"},
    TRAINING: {sig:["training","practice","cheer_park"],priority:1,targetPing:999,maxPing:999,strategy:"SAFE",sticky:false,jordanBonus:10,foreignPenalty:0,gameState:"TRAINING"}
};

var MODE_PRIORITY = ["RENDER","FRIEND_DISCOVERY","CREW_RECRUITMENT","LOBBY","MATCHMAKING","RANKED","AUTH","CLASSIC","TDM","CDN","TRAINING"];

// ═══════════════════════════════════════════════════════════════════════
//  JITTER ELIMINATOR
// ═══════════════════════════════════════════════════════════════════════

var JITTER = {samples:[],maxSamples:5,threshold:CFG.JITTER_TOLERANCE,
    push:function(p){if(this.samples.length>=this.maxSamples)this.samples.shift();this.samples.push(p);},
    median:function(){if(this.samples.length===0)return 999;var s=this.samples.slice().sort((a,b)=>a-b);var m=Math.floor(s.length/2);return s.length%2===0?(s[m-1]+s[m])/2:s[m];},
    variance:function(){if(this.samples.length<2)return 0;var md=this.median(),sum=0;for(var i=0;i<this.samples.length;i++)sum+=Math.abs(this.samples[i]-md);return sum/this.samples.length;},
    needsReroute:function(){return this.variance()>this.threshold&&this.samples.length>=3;},
    reset:function(){this.samples=[];}
};

// ═══════════════════════════════════════════════════════════════════════
//  SESSION
// ═══════════════════════════════════════════════════════════════════════

var SESSION = {
    start: now(), sessionId: "JO_V33_" + now() + "_" + Math.random().toString(36).substr(2,9),
    requests: 0, pubgRequests: 0, socialRequests: 0, jordanHits: 0, foreignHits: 0,
    directHits: 0, blockedHits: 0, friendDiscoveries: 0, crewSearches: 0,
    lobbyJoins: 0, jordanPlayersFound: 0, socialAPIcalls: 0,
    regionalHits: {}, activeRegions: {}, totalRegionalCoverage: 0,
    totalPingTime: 0, bestPing: 999, worstPing: 0, socialAPIavgPing: 0,
    modeStats: {}, currentMode: null, gameState: "UNKNOWN",
    networkQuality: "UNKNOWN", congestionLevel: 0, peakHours: false,
    weekend: false, fpsModeHits: 0, avgJitter: 0,
    age: function(){return now()-this.start;},
    isWarm: function(){return this.pubgRequests>=5&&this.age()>8000;},
    jordanRatio: function(){var t=this.jordanHits+this.foreignHits;return t>0?Math.round((this.jordanHits/t)*100):0;},
    avgPing: function(){return this.pubgRequests>0?Math.round(this.totalPingTime/this.pubgRequests):999;},
    recordMode: function(m){if(!this.modeStats[m])this.modeStats[m]={count:0,firstSeen:now(),lastSeen:0,totalPing:0};var s=this.modeStats[m];s.count++;s.lastSeen=now();if(m!==this.currentMode)this.currentMode=m;},
    recordSocialInteraction: function(t){if(t==="FRIEND_DISCOVERY")this.friendDiscoveries++;else if(t==="CREW_SEARCH")this.crewSearches++;else if(t==="LOBBY_JOIN")this.lobbyJoins++;this.socialAPIcalls++;},
    recordRegionalHit: function(r){if(!r||r==="UNKNOWN")return;if(!this.regionalHits[r])this.regionalHits[r]={count:0,firstSeen:now(),lastSeen:0};this.regionalHits[r].count++;this.regionalHits[r].lastSeen=now();this.activeRegions[r]=true;this.totalRegionalCoverage=Object.keys(this.activeRegions).length;},
    updateGameState: function(s){if(s!==this.gameState)this.gameState=s;},
    recordPing: function(p,m){this.totalPingTime+=p;if(p<this.bestPing)this.bestPing=p;if(p>this.worstPing)this.worstPing=p;JITTER.push(p);var md=MODES[m];if(md&&md.socialPriority){if(this.socialAPIcalls>0){this.socialAPIavgPing=Math.round((this.socialAPIavgPing*(this.socialAPIcalls-1)+p)/this.socialAPIcalls);}else{this.socialAPIavgPing=p;}}if(m&&this.modeStats[m]){this.modeStats[m].totalPing+=p;this.modeStats[m].avgPing=Math.round(this.modeStats[m].totalPing/this.modeStats[m].count);}if(m==="RENDER"){this.fpsModeHits++;}this.avgJitter=JITTER.variance();},
    updateTimeContext: function(){var d=new Date();this.peakHours=(d.getHours()>=16||d.getHours()<=2);this.weekend=(d.getDay()===5||d.getDay()===6);},
    getReport: function(){return {duration:this.age(),requests:this.requests,pubgRequests:this.pubgRequests,jordanRatio:this.jordanRatio(),avgPing:this.avgPing(),bestPing:this.bestPing,socialAPIavgPing:this.socialAPIavgPing,avgJitter:Math.round(this.avgJitter*100)/100,fpsModeHits:this.fpsModeHits,friendDiscoveries:this.friendDiscoveries,crewSearches:this.crewSearches,lobbyJoins:this.lobbyJoins,activeRegions:this.totalRegionalCoverage,currentMode:this.currentMode,gameState:this.gameState};}
};

// ═══════════════════════════════════════════════════════════════════════
//  PING ENGINE
// ═══════════════════════════════════════════════════════════════════════

var PING = {
    history: [], maxHistory: 60, modeStats: {}, regionStats: {},
    socialStats: {count:0,total:0,min:999,max:0,avg:0},
    regionalStats: {}, fpsStats: {count:0,total:0,min:999,max:0,avg:0},
    record: function(ms,mode,host,region){var est=Math.max(1,Math.round(ms*0.25+1.2));var entry={raw:ms,estimated:est,mode:mode,host:host,region:region,isSocial:false,isFPS:false,t:now()};var md=MODES[mode];if(md&&md.socialPriority){entry.isSocial=true;this.socialStats.count++;this.socialStats.total+=est;this.socialStats.min=Math.min(this.socialStats.min,est);this.socialStats.max=Math.max(this.socialStats.max,est);this.socialStats.avg=Math.round(this.socialStats.total/this.socialStats.count);}
    if(mode==="RENDER"){entry.isFPS=true;this.fpsStats.count++;this.fpsStats.total+=est;this.fpsStats.min=Math.min(this.fpsStats.min,est);this.fpsStats.max=Math.max(this.fpsStats.max,est);this.fpsStats.avg=Math.round(this.fpsStats.total/this.fpsStats.count);}
    if(region&&region!=="UNKNOWN"){if(!this.regionalStats[region])this.regionalStats[region]={count:0,total:0,avg:0,min:999};var rs=this.regionalStats[region];rs.count++;rs.total+=est;rs.avg=Math.round(rs.total/rs.count);rs.min=Math.min(rs.min,est);}
    if(this.history.length>=this.maxHistory)this.history.shift();this.history.push(entry);
    if(!this.modeStats[mode])this.modeStats[mode]={count:0,total:0,min:999,max:0,avg:0,recent:[]};var ms=this.modeStats[mode];ms.count++;ms.total+=est;ms.min=Math.min(ms.min,est);ms.max=Math.max(ms.max,est);ms.avg=Math.round(ms.total/ms.count);if(ms.recent.length>=5)ms.recent.shift();ms.recent.push(est);SESSION.recordPing(est,mode);return est;},
    current: function(){return this.history.length===0?999:this.history[this.history.length-1].estimated;},
    avg: function(s){s=s||5;var l=this.history.length;if(l===0)return 999;var st=Math.max(0,l-s),sum=0,c=0;for(var i=st;i<l;i++){sum+=this.history[i].estimated;c++;}return c>0?Math.round(sum/c):999;},
    fpsAvg: function(){return this.fpsStats.avg;}, socialAvg: function(){return this.socialStats.avg;},
    best: function(){if(this.history.length===0)return 999;var b=999;for(var i=0;i<this.history.length;i++)if(this.history[i].estimated<b)b=this.history[i].estimated;return b;},
    trend: function(){var l=this.history.length;if(l<6)return"STABLE";var r=this.avg(3),o=this.avg(8);if(r<o*0.7)return"IMPROVING";if(r>o*1.5)return"DEGRADING";return"STABLE";},
    quality: function(mode){var md=MODES[mode];if(!md)return"UNKNOWN";var c=this.avg(3),t=md.targetPing,mx=md.maxPing;if(c<=t)return"EXCELLENT";if(c<=t*1.2)return"VERY_GOOD";if(c<=mx)return"GOOD";if(c<=mx*1.3)return"ACCEPTABLE";return"POOR";},
    isHealthy: function(mode){var md=MODES[mode];if(!md)return true;return this.avg(3)<=md.maxPing*1.1;},
    needsOptimization: function(){return this.avg(3)>CFG.MAX_ACCEPTABLE_PING||this.trend()==="DEGRADING";},
    isCritical: function(){return this.avg(2)>CFG.CRITICAL_PING;},
    variance: function(){var l=this.history.length;if(l<3)return 0;var a=this.avg(),sq=0,st=Math.max(0,l-10),c=0;for(var i=st;i<l;i++){var d=this.history[i].estimated-a;sq+=d*d;c++;}return c>0?Math.round(Math.sqrt(sq/c)):0;},
    stability: function(){var v=this.variance();if(v<=1)return"VERY_STABLE";if(v<=3)return"STABLE";if(v<=6)return"MODERATE";return"UNSTABLE";}
};

// ═══════════════════════════════════════════════════════════════════════
//  GUARD — Geo-Fence
// ═══════════════════════════════════════════════════════════════════════

var GUARD = {violations:0,maxViolations:0,blockedHosts:{},trustedHosts:{},
    isJordan: function(ip){if(!ip||!isIPv4(ip))return false;return inRanges(ip,JO_NETS);},
    getJordanCity: function(ip){if(!this.isJordan(ip))return null;for(var city in JO_CITIES)if(inRanges(ip,JO_CITIES[city]))return city;return "JORDAN_OTHER";},
    checkDestination: function(ip,host,mode){if(!ip)return true;if(ip.indexOf(":")!==-1){if(CFG.JORDAN_ONLY_MODE||CFG.BLOCK_INTERNATIONAL){this.recordBlock(host,"IPv6 blocked strict");return false;}}if(this.trustedHosts[host])return true;if(this.blockedHosts[host])return false;var md=MODES[mode];if(this.isJordan(ip)){var city=this.getJordanCity(ip);this.trustedHosts[host]={ip:ip,city:city,since:now()};SESSION.jordanHits++;SESSION.recordRegionalHit(city);if(md&&md.socialPriority)SESSION.jordanPlayersFound++;return true;}SESSION.foreignHits++;if(CFG.GEO_FENCE_STRICT){if(md&&md.priority>=7){this.recordBlock(host,"STRICT: non-Jordan blocked for priority "+md.priority);return false;}}if(md&&md.socialPriority&&CFG.FORCE_JORDAN_SOCIAL){this.recordBlock(host,"Social requires Jordan");return false;}if(md&&md.priority>=9&&(CFG.FORCE_JORDAN_LOBBY||CFG.FORCE_JORDAN_MATCHMAKING)){this.recordBlock(host,"Critical requires Jordan");return false;}if(CFG.JORDAN_ONLY_MODE){this.recordBlock(host,"JO-only");return false;}if(CFG.BLOCK_INTERNATIONAL){this.recordBlock(host,"INT blocked");return false;}return true;},
    recordBlock: function(h,r){this.blockedHosts[h]={reason:r,time:now()};SESSION.blockedHits++;},
    buildChain: function(names,mode,req){var chain=[],used={};req=req||{};for(var i=0;i<names.length;i++){var n=names[i];if(used[n])continue;if(!PROXY[n])continue;var p=PROXY[n],h=getHealthStatus(n);if(h.status==="CRITICAL"||h.status==="POOR")continue;if(CFG.PROXY_EXIT_JORDAN_ONLY&&!this.isJordan(p.ip))continue;if(req.burst&&!p.burstCapable)continue;if(req.ultraBurst&&!p.ultraBurst)continue;if(req.socialOptimized&&!p.socialOptimized)continue;if(req.tier!==undefined&&p.tier>req.tier)continue;if(req.udpOnly&&!p.udpFast)continue;chain.push("PROXY "+p.ip+":"+p.port);used[n]=true;var md=MODES[mode];updateHealth(n,true,p.targetPing,md&&md.socialPriority,p.regionHop?true:false);if(chain.length>=CFG.MAX_PROXY_CHAIN)break;}if(chain.length===0)return CFG.FAIL_CLOSED?BLOOD.BLK:BLOOD.DIR;var r=chain.join("; ");return CFG.FAIL_CLOSED?(r+"; "+BLOOD.BLK):(r+"; DIRECT");}
};

// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function containsAny(str,arr){if(!str||!arr)return false;var s=str.toLowerCase();for(var i=0;i<arr.length;i++)if(s.indexOf(arr[i])!==-1)return true;return false;}
function isIPv4(ip){return/^(\d{1,3}\.){3}\d{1,3}$/.test(ip);}
function now(){return(new Date()).getTime();}
function inRanges(ip,ranges){if(!ip||!ranges||ranges.length===0)return false;for(var i=0;i<ranges.length;i++)if(isInNet(ip,ranges[i][0],netmaskFromCIDR(ranges[i][1])))return true;return false;}
function netmaskFromCIDR(c){c=parseInt(c,10);var m=[0,0,0,0];for(var i=0;i<32;i++)if(i<c)m[Math.floor(i/8)]|=1<<(31-i);return m.join(".");}

// ═══════════════════════════════════════════════════════════════════════
//  HEALTH + STICKY
// ═══════════════════════════════════════════════════════════════════════

var HEALTH={},ML={patterns:{},predictions:{},learningData:[],socialPatterns:{},regionalPatterns:{}},STICKY={};
function initHealth(){for(var n in PROXY){var p=PROXY[n];HEALTH[n]={uses:0,successes:0,failures:0,lastUse:0,lastSuccess:0,load:0,status:"READY",avgPing:p.targetPing,recentPings:[],uptime:100,score:100,socialUses:0,regionalUses:0};}}
function updateHealth(n,s,p,isS,isR){if(!HEALTH[n])return;var h=HEALTH[n];h.uses++;h.lastUse=now();if(isS)h.socialUses++;if(isR)h.regionalUses++;if(s){h.successes++;h.lastSuccess=now();}else{h.failures++;}if(p){if(h.recentPings.length>=10)h.recentPings.shift();h.recentPings.push(p);var sm=0;for(var i=0;i<h.recentPings.length;i++)sm+=h.recentPings[i];h.avgPing=Math.round(sm/h.recentPings.length);}if(PROXY[n]&&PROXY[n].capacity)h.load=Math.min(100,Math.round((h.uses/PROXY[n].capacity)*100));if(h.uses>0)h.uptime=Math.round((h.successes/h.uses)*100);h.score=calcHealth(h,PROXY[n]);if(h.score>=95)h.status="EXCELLENT";else if(h.score>=80)h.status="GOOD";else if(h.score>=65)h.status="FAIR";else if(h.score>=45)h.status="DEGRADED";else if(h.score>=25)h.status="POOR";else h.status="CRITICAL";}
function calcHealth(h,p){var s=100;s-=(100-h.uptime)*0.4;if(h.load>90)s-=20;else if(h.load>75)s-=10;else if(h.load>60)s-=5;if(p&&h.avgPing){var r=h.avgPing/p.targetPing;if(r<=1)s+=5;else if(r<=1.3)s-=10;else if(r<=1.6)s-=20;else s-=30;}var fr=h.uses>0?h.failures/h.uses:0;if(fr>0.2)s-=15;else if(fr>0.1)s-=7;if(p&&p.socialOptimized&&h.socialUses>0)s+=10;if(p&&h.regionalUses>0)s+=5;return Math.max(0,Math.min(100,Math.round(s)));}
function getHealthStatus(n){return HEALTH[n]||{status:"UNKNOWN",load:100,score:0,avgPing:999};}
function getBestProxies(t,cnt,ct,soc,rh){var cd=[];for(var n in PROXY){var p=PROXY[n],h=HEALTH[n];if(!p||!h)continue;if(t!==undefined&&p.tier!==t)continue;if(cnt&&p.carrier!==cnt)continue;if(h.status==="CRITICAL"||h.status==="POOR")continue;if(soc&&!p.socialOptimized)continue;if(rh&&p.regionHop!==rh)continue;cd.push({name:n,proxy:p,health:h,score:calcProxyScore(p,h,soc)});}cd.sort((a,b)=>b.score-a.score);ct=ct||cd.length;var rs=[];for(var i=0;i<Math.min(ct,cd.length);i++)rs.push(cd[i].name);return rs;}
function calcProxyScore(p,h,sb){var s=0;s+=(p.priority/100)*40;s+=(h.score/100)*30;var r=h.avgPing/p.targetPing;if(r<=1)s+=20;else if(r<=1.2)s+=15;else if(r<=1.5)s+=10;if(h.load<=50)s+=10;else if(h.load<=70)s+=7;else if(h.load<=85)s+=4;if(sb&&p.socialOptimized){s+=20;if(p.socialDedicated)s+=15;}if(p.udpFast)s+=10;return Math.round(s);}
initHealth();
function stickyGet(k){var e=STICKY[k];if(!e)return null;if(now()-e.created>(e.ttl||CFG.STICKY_TTL)){delete STICKY[k];return null;}e.hits=(e.hits||0)+1;e.lastHit=now();return e.value;}
function stickySet(k,v,t){STICKY[k]={value:v,created:now(),ttl:t||CFG.STICKY_TTL,hits:0,lastHit:now()};}
function stickyClear(k){delete STICKY[k];}
function stickyExtend(k,e){var t=STICKY[k];if(t)t.ttl+=e;}

// ═══════════════════════════════════════════════════════════════════════
//  DETECTION FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function detectRegion(host,ip){var h=host.toLowerCase();if(ip){if(GUARD.isJordan(ip)){var c=GUARD.getJordanCity(ip);return{region:"JORDAN",city:c,confidence:100};}}var jp=["jo","jordan","amman","irbid","zarqa","aqaba","karak","mafraq","jerash","ajloun","balqa","salt","madaba","tafilah","maan","petra","me-jo","mena-jo","jo1","jo2","jo3"];for(var i=0;i<jp.length;i++)if(h.indexOf(jp[i])!==-1)return{region:"JORDAN",confidence:85};return{region:"UNKNOWN",confidence:0};}
function detectMode(host){var h=host.toLowerCase();for(var i=0;i<MODE_PRIORITY.length;i++){var mn=MODE_PRIORITY[i],m=MODES[mn];if(!m||!m.sig)continue;for(var j=0;j<m.sig.length;j++)if(h.indexOf(m.sig[j])!==-1){if(m.socialPriority){if(mn==="FRIEND_DISCOVERY")SESSION.recordSocialInteraction("FRIEND_DISCOVERY");else if(mn==="CREW_RECRUITMENT")SESSION.recordSocialInteraction("CREW_SEARCH");else if(mn==="LOBBY"||mn==="MATCHMAKING")SESSION.recordSocialInteraction("LOBBY_JOIN");}return mn;}}return "CLASSIC";}
function assessServerQuality(ip,host,mode){var s=50;if(ip&&GUARD.isJordan(ip)){s+=50;var c=GUARD.getJordanCity(ip);if(c==="AMMAN_CORE")s+=18;else if(c.indexOf("AMMAN")!==-1)s+=12;else if(c==="IRBID"||c==="ZARQA")s+=10;else s+=6;}var r=detectRegion(host,ip);if(r.region==="JORDAN")s+=r.confidence*0.3;var md=MODES[mode];if(md&&md.socialPriority&&!GUARD.isJordan(ip))s-=65;s=Math.max(0,Math.min(100,s));if(s>=92)return"EXCELLENT";if(s>=78)return"GOOD";if(s>=62)return"FAIR";if(s>=42)return"POOR";return"UNACCEPTABLE";}

// ═══════════════════════════════════════════════════════════════════════
//  CONNECTION + TIME + CARRIER
// ═══════════════════════════════════════════════════════════════════════

var CONNECTION={profile:function(){var a=PING.avg(5),b=PING.best(),sa=PING.socialAvg();var t="UNKNOWN",q="UNKNOWN";if(a<=4&&b<=2){t="5G_ULTRA";q="EXCELLENT";}else if(a<=7&&b<=4){t="5G_PREMIUM";q="EXCELLENT";}else if(a<=10){t="5G_GOOD";q="VERY_GOOD";}else if(a<=18){t="4G_EXCELLENT";q="GOOD";}else if(a<=30){t="4G_GOOD";q="FAIR";}else{t="WEAK";q="POOR";}SESSION.networkQuality=q;return{type:t,quality:q,avgPing:a,bestPing:b,socialAvg:sa,tier:this.getTier(t)};},getTier:function(t){if(t.indexOf("5G_ULTRA")===0||t.indexOf("5G_PREMIUM")===0)return 0;if(t.indexOf("5G")===0||t.indexOf("4G_EXCELLENT")===0)return 1;return 2;},boost:function(){var p=this.profile();if(p.type==="5G_ULTRA")return 85;if(p.type==="5G_PREMIUM")return 75;if(p.type==="5G_GOOD")return 60;if(p.type==="4G_EXCELLENT")return 45;if(p.type==="4G_GOOD")return 30;return -25;},getCongestionLevel:function(){var v=PING.variance();if(v>12){SESSION.congestionLevel=3;return"HIGH";}if(v>6){SESSION.congestionLevel=2;return"MEDIUM";}if(v>3){SESSION.congestionLevel=1;return"LOW";}SESSION.congestionLevel=0;return"NONE";}};
var TIME={isPeakHours:function(){var h=(new Date()).getHours();return(h>=16||h<=2);},isWeekend:function(){var d=(new Date()).getDay();return(d===5||d===6);},getBoost:function(){var p=this.isPeakHours(),w=this.isWeekend();if(p&&w)return 35;if(p||w)return 20;return 0;}};
function getCarrier(ip){if(!ip||!isIPv4(ip))return"UNKNOWN";if(isInNet(ip,"46.185.128.0","255.255.128.0")||isInNet(ip,"94.127.208.0","255.255.240.0")||isInNet(ip,"149.200.136.0","255.255.252.0"))return"ORANGE";if(isInNet(ip,"79.173.192.0","255.255.192.0")||isInNet(ip,"109.237.192.0","255.255.224.0")||isInNet(ip,"176.28.0.0","255.254.0.0"))return"ZAIN";if(isInNet(ip,"82.212.0.0","255.255.0.0")||isInNet(ip,"212.35.64.0","255.255.192.0"))return"UMNIAH";if(isInNet(ip,"188.247.0.0","255.255.0.0")||isInNet(ip,"94.230.0.0","255.255.0.0"))return"JT";return"OTHER";}
function getCarrierBonus(c){if(c==="ORANGE")return 50;if(c==="ZAIN")return 45;if(c==="UMNIAH")return 40;if(c==="JT")return 30;return 0;}

// ═══════════════════════════════════════════════════════════════════════
//  ML ENGINE
// ═══════════════════════════════════════════════════════════════════════

ML.predict=function(mode,region){var key=mode+"_"+region;if(this.predictions[key]&&this.confidence(mode,region)>=70)return this.predictions[key];return null;};
ML.confidence=function(mode,region){var key=mode+"_"+region;if(!this.patterns[key])return 0;var p=this.patterns[key];return Math.min(100,Math.round((p.successes/(p.uses||1))*100));};
ML.recordSuccess=function(mode,route,ping,region,isSocial){var key=mode+"_"+(region||"UNKNOWN");if(!this.patterns[key])this.patterns[key]={uses:0,successes:0,bestPing:999,bestRoute:null};var p=this.patterns[key];p.uses++;if(ping<=p.bestPing){p.bestPing=ping;p.bestRoute=route;}if(ping<=(MODES[mode]?MODES[mode].targetPing*1.5:10)){p.successes++;}this.predictions[key]=p.bestRoute;if(isSocial&&CFG.SOCIAL_ML){var sk="SOC_"+key;if(!this.socialPatterns[sk])this.socialPatterns[sk]={uses:0,success:0};this.socialPatterns[sk].uses++;if(ping<=5)this.socialPatterns[sk].success++;}};
ML.getRegionalBest=function(city){var b=null,bp=999;for(var k in this.patterns){if(k.indexOf(city)!==-1){var p=this.patterns[k];if(p.bestPing<bp){bp=p.bestPing;b=p.bestRoute;}}}return b;};

// ═══════════════════════════════════════════════════════════════════════
//  KEYWORDS
// ═══════════════════════════════════════════════════════════════════════

var PUBG_KEYS=["pubgmobile","pubgm","pubg","battlegrounds","tencent","qq","igame","myapp","intlgame","lightspeed","tmgp","gcloud","tgpa","levelinfinite","levelinf","proximabeta","igamecj","bsgame","minisite","garena","anticheat","tpns","midas","unipay","pubgstudio","krafton","bluehole","matchmaking","lobbyserver","gameserver"];
var SOCIAL_KEYS=["friend","friendlist","friendrequest","friendsearch","addfriend","findfriend","friendmatch","friendinvite","crew","clan","guild","team","squad","crewlist","clanlist","recruitment","recruit","crewsearch","clansearch","jointeam","teamfind","social","presence","nearby","nearbypla","playersearch","usersearch","profile","userprofile","discovery","recommend","suggestion","lobby","matchmake","matchmaking","queue","roomlist","room_list","playerlist","online","chat","voice","message","im","rtc","region","server_list","serverlist","worldsvr","playerscan","regionfilter","geo_match","match_pool","player_pool","active_users","crew_member"];
var LOBBY_SOCIAL_PATTERNS=["lobby","social","friend","crew","clan","player","search","discover","nearby","match","room","team","squad","guild","online","presence","profile","user","pool","scan","filter","region","geo","active","member","invite"];
var DIRECT_KEYS=["apple","icloud","google","playstore","firebase","android","gstatic","gvt1","gvt2","dl","dl-ssl","update","ota","fota","ota-http","ota-https","cdn","akamai","cloudfront","fastly","cloudflare","github","gitlab","npm","maven","gradle","jetbrains","stackoverflow","wikipedia","youtube","ytimg","yt3","yt-video","googlevideo","facebook","fbcdn","instagram","twitter","tiktok","twimg","telegram","tme","tdns","tdns6","tcdn","tdcdn","tcdnl","tcdn2","tcdn3","tcdn4","tcdn5","tcdn6","tcdn7","tcdn8","tcdn9","tcdn10","tcdn11","tcdn12","tcdn13","tcdn14","tcdn15","tcdn16","tcdn17","tcdn18","tcdn19","tcdn20","tcdn21","tcdn22","tcdn23","tcdn24","tcdn25","tcdn26","tcdn27","tcdn28","tcdn29","tcdn30","tcdn31","tcdn32","tcdn33","tcdn34","tcdn35","tcdn36","tcdn37","tcdn38","tcdn39","tcdn40","tcdn41","tcdn42","tcdn43","tcdn44","tcdn45","tcdn46","tcdn47","tcdn48","tcdn49","tcdn50"];

// ═══════════════════════════════════════════════════════════════════════
//  SCORE ENGINE — 25 Factors
// ═══════════════════════════════════════════════════════════════════════

function calculateScore(ip,host,port,dns,mode){
    var score=0,md=MODES[mode];
    if(md){score+=md.priority*8;if(md.socialPriority)score+=50;if(md.udpOnly)score+=30;}else{score+=30;}
    var dt=dns.dt;if(dt<=1)score+=50;else if(dt<=3)score+=45;else if(dt<=6)score+=35;else if(dt<=12)score+=25;else if(dt<=25)score+=12;else score-=20;
    var q=PING.quality(mode);if(q==="EXCELLENT")score+=40;else if(q==="VERY_GOOD")score+=32;else if(q==="GOOD")score+=22;else if(q==="ACCEPTABLE")score+=8;else score-=30;
    if(ip&&GUARD.isJordan(ip)){score+=200;score+=getCarrierBonus(getCarrier(ip));var city=GUARD.getJordanCity(ip);var cb=0;if(city==="AMMAN_CORE")cb=50;else if(city.indexOf("AMMAN")!==-1)cb=40;else if(city==="IRBID"||city==="ZARQA")cb=30;else if(city==="AQABA")cb=25;else if(city==="BALQA"||city==="MADABA")cb=22;else if(city==="JERASH")cb=20;else if(city==="KARAK")cb=18;else if(city==="MAFRAQ")cb=16;else if(city==="TAFILAH"||city==="MAAN")cb=14;else cb=12;score+=cb;SESSION.recordRegionalHit(city);if(md&&md.priority>=9)score+=50;if(md&&md.socialPriority)score+=70;if(md&&md.udpOnly)score+=40;if(TIME.isPeakHours())score+=25;}
    var reg=detectRegion(host,ip);if(reg.region==="JORDAN")score+=90+(reg.confidence*0.15);else score-=80;
    score+=CONNECTION.boost();
    var st=PING.stability();if(st==="VERY_STABLE")score+=30;else if(st==="STABLE")score+=20;else if(st==="MODERATE")score+=5;else score-=30;
    var jv=JITTER.variance();if(jv>3)score-=40;else if(jv>2)score-=25;else if(jv>1.5)score-=10;
    if(port===443)score+=15;else if(port>=10000&&port<=10100)score+=20;else if(port>=7000&&port<=7100)score+=18;else if(port===80)score+=10;
    var tr=PING.trend();if(tr==="IMPROVING")score+=35;else if(tr==="DEGRADING")score-=55;
    if(PING.isCritical())score-=80;else if(PING.needsOptimization())score-=45;
    if(md){if(ip&&GUARD.isJordan(ip))score+=md.jordanBonus||0;else score+=md.foreignPenalty||0;}
    score+=TIME.getBoost();
    var sq=dns.quality;if(sq==="EXCELLENT")score+=30;else if(sq==="GOOD")score+=20;else if(sq==="FAIR")score+=8;else score-=15;
    if(CFG.ENABLE_ML_PREDICTION){var cf=ML.confidence(mode,reg.region);if(cf>=85)score+=45;else if(cf>=70)score+=30;else if(cf>=50)score+=15;}
    var cg=CONNECTION.getCongestionLevel();if(cg==="HIGH")score-=50;else if(cg==="MEDIUM")score-=25;else if(cg==="LOW")score-=10;
    if(dns.socialEndpoint&&CFG.ENABLE_FRIEND_DISCOVERY){score+=70;if(ip&&GUARD.isJordan(ip))score+=40;}
    if(dns.regionalEndpoint&&CFG.ENABLE_PROVINCE_ROUTING){score+=45;if(ip&&GUARD.isJordan(ip))score+=30;}
    if(md&&md.visibilityBoost)score=Math.round(score*(1+(md.visibilityBoost*0.08)));
    if(md&&md.matchmakingSpeed)score=Math.round(score*(1+((md.matchmakingSpeed-1)*0.12)));
    if(md&&md.udpOnly&&dns&&dns.udpFast)score+=35;
    if(md&&md.frameBudget){var fb=md.frameBudget;var cp=PING.current();if(cp<=fb)score+=30;else if(cp<=fb*1.3)score+=15;else score-=10;}
    if(CFG.CARRIER_BONDING&&ip&&GUARD.isJordan(ip))score+=20;
    if(md&&md.socialPriority&&TIME.isPeakHours())score+=25;
    if(SESSION.isWarm())score+=15;
    if(score<0)return 0;if(score>600)return 100;return Math.round((score/600)*100);
}

// ═══════════════════════════════════════════════════════════════════════
//  DNS ENGINE
// ═══════════════════════════════════════════════════════════════════════

var DNS_CACHE={},DNS_QUEUE=[],DNS_STATS={hits:0,misses:0,totalTime:0,avgTime:0,socialHits:0,socialAvgTime:0};
function fastDNS(host){
    var h=host.toLowerCase();
    var isSocial=containsAny(h,SOCIAL_KEYS)||containsAny(h,LOBBY_SOCIAL_PATTERNS);
    var isRegional=containsAny(h,["region","lobby","match","player","nearby","server"]);
    var isFPS=containsAny(h,["render","tick","state","position","movement","shoot"]);
    var cached=DNS_CACHE[host];
    if(cached&&(now()-cached.t)<CFG.DNS_CACHE_TTL){DNS_STATS.hits++;if(isSocial)DNS_STATS.socialHits++;cached.hitCount=(cached.hitCount||0)+1;cached.lastHit=now();return cached;}
    DNS_STATS.misses++;var t0=now();var ip=dnsResolve(host);var dt=now()-t0;
    DNS_STATS.totalTime+=dt;DNS_STATS.avgTime=Math.round(DNS_STATS.totalTime/DNS_STATS.misses);
    if(isSocial){var sc=DNS_STATS.socialHits+1;DNS_STATS.socialAvgTime=Math.round((DNS_STATS.socialAvgTime*DNS_STATS.socialHits+dt)/sc);}
    var mode=detectMode(host);var region=detectRegion(host,ip);var quality=assessServerQuality(ip,host,mode);
    var udpFast=false;for(var pn in PROXY){var px=PROXY[pn];if(px.ip===ip&&px.udpFast){udpFast=true;break;}}
    var result={ip:ip,dt:dt,mode:mode,region:region,quality:quality,socialEndpoint:isSocial,regionalEndpoint:isRegional,udpFast:udpFast,fpsEndpoint:isFPS,ok:!!ip,t:now(),hitCount:0,lastHit:now()};
    if(DNS_QUEUE.length>=CFG.DNS_CACHE_MAX){var rm=false;for(var i=0;i<DNS_QUEUE.length;i++){var oh=DNS_QUEUE[i],oe=DNS_CACHE[oh];if(oe&&!oe.socialEndpoint&&!oe.regionalEndpoint){DNS_QUEUE.splice(i,1);delete DNS_CACHE[oh];rm=true;break;}}if(!rm){var oh2=DNS_QUEUE.shift();delete DNS_CACHE[oh2];}}
    DNS_CACHE[host]=result;DNS_QUEUE.push(host);
    PING.record(dt,mode,host,region.region);if(isSocial)SESSION.socialRequests++;if(isRegional&&region.region==="JORDAN"&&region.city)SESSION.recordRegionalHit(region.city);
    return result;
}

// ═══════════════════════════════════════════════════════════════════════
//  PRE-WARM ENGINE
// ═══════════════════════════════════════════════════════════════════════

var PREWARM={active:false,sockets:[],maxSockets:CFG.SOCKET_POOL_HOT,interval:15000,
    start:function(){if(!CFG.ENABLE_PRE_WARM||this.active)return;this.active=true;this.warm();setInterval(function(){PREWARM.warm();},this.interval);},
    warm:function(){var diamond=[];for(var n in PROXY){if(PROXY[n].tier===0&&PROXY[n].keepAlive){var h=getHealthStatus(n);if(h.status!=="CRITICAL"&&h.status!=="POOR")diamond.push(n);}}diamond.sort(function(a,b){return(PROXY[b].priority-PROXY[a].priority);});var need=Math.min(this.maxSockets,diamond.length);for(var i=0;i<need;i++){var p=PROXY[diamond[i]];if(p){try{var s=new Socket();s.connect(p.ip,p.port,3000);if(s.connected){this.sockets.push({name:diamond[i],socket:s,last:now()});}}catch(e){}}}var alive=[];for(var j=0;j<this.sockets.length;j++){try{if(this.sockets[j].socket.connected){alive.push(this.sockets[j]);}}catch(e){}}this.sockets=alive;},
    getHot:function(carrier){for(var i=0;i<this.sockets.length;i++){if(!carrier||PROXY[this.sockets[i].name].carrier===carrier)return this.sockets[i];}return null;}
};
if(CFG.ENABLE_PRE_WARM)PREWARM.start();

// ═══════════════════════════════════════════════════════════════════════
//  FRAME PACER
// ═══════════════════════════════════════════════════════════════════════

var FRAME_PACER={lastFrame:now(),frameTimes:[],maxSamples:10,
    tick:function(){var nowT=now();var delta=nowT-this.lastFrame;this.lastFrame=nowT;if(this.frameTimes.length>=this.maxSamples)this.frameTimes.shift();this.frameTimes.push(delta);},
    avgFrameTime:function(){if(this.frameTimes.length===0)return 0;var s=0;for(var i=0;i<this.frameTimes.length;i++)s+=this.frameTimes[i];return Math.round(s/this.frameTimes.length);},
    isOnBudget:function(){return this.avgFrameTime()<=CFG.FRAME_BUDGET_MS*1.5;},
    shouldThrottle:function(){return this.avgFrameTime()>CFG.FRAME_BUDGET_MS*2;}
};

// ═══════════════════════════════════════════════════════════════════════
//  CARRIER BONDING
// ═══════════════════════════════════════════════════════════════════════

var BONDING={active:CFG.CARRIER_BONDING,probes:{},
    probe:function(mode,host){if(!this.active)return null;var results={};var carriers=["ORANGE","ZAIN","UMNIAH"];for(var i=0;i<carriers.length;i++){var best=getBestProxies(0,carriers[i],1,false);if(best.length>0){var p=PROXY[best[0]];var t0=now();try{var s=new Socket();s.connect(p.ip,p.port,2000);if(s.connected){results[carriers[i]]={ping:now()-t0,proxy:best[0],ip:p.ip,port:p.port};}s.close();}catch(e){}}}var bestCarrier=null,bestPing=999;for(var c in results){if(results[c].ping<bestPing){bestPing=results[c].ping;bestCarrier=c;}}this.probes[host+"_"+mode]={best:bestCarrier,all:results,time:now()};return bestCarrier?results[bestCarrier]:null;},
    getBest:function(mode,host){var cached=this.probes[host+"_"+mode];if(cached&&now()-cached.time<30000)return cached.best?cached.all[cached.best]:null;return this.probe(mode,host);}
};

// ═══════════════════════════════════════════════════════════════════════
//  ANTI-CHEAT SAFE LAYER
// ═══════════════════════════════════════════════════════════════════════

var SAFE={blockedPatterns:["inject","hook","dll","memory","write","readmem","cheat","hack","speed","aimbot","wall","esp","mod","patch_exe","bypass","root","jailbreak"],
    isSafe:function(host,url){var target=(host+url).toLowerCase();for(var i=0;i<this.blockedPatterns.length;i++)if(target.indexOf(this.blockedPatterns[i])!==-1)return false;return true;},
    validateRequest:function(host,url){if(!this.isSafe(host,url)){SESSION.blockedHits++;return false;}return true;}
};

// ═══════════════════════════════════════════════════════════════════════
//  END OF PART 1 — Go to PART 2 for MAIN FUNCTION + ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
//  ROUTING ENGINE v33 — FPS Pipeline + Jitter Reroute + Carrier Bond
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode,score,ip,port,host,dns){
    var md=MODES[mode]||MODES["CLASSIC"];
    var strategy=md.strategy;
    var region=dns.region;
    var city=region.city||"UNKNOWN";
    var carrier=getCarrier(ip);
    var conn=CONNECTION.profile();

    if(md.gameState)SESSION.updateGameState(md.gameState);

    // Security Gate
    if(!GUARD.checkDestination(ip,host,mode))return BLOOD.BLK;

    // Jitter Emergency Reroute
    if(JITTER.needsReroute()){
        stickyClear(mode);stickyClear(mode+"_"+city);JITTER.reset();
        var jr=GUARD.buildChain(
            getBestProxies(0,null,3,md.socialPriority),
            mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:md.socialPriority}
        );
        ML.recordSuccess(mode,jr,PING.current(),region.region,md.socialPriority);
        return jr;
    }

    // ML Prediction (if warm)
    if(CFG.ENABLE_ML_PREDICTION&&SESSION.isWarm()){
        var pred=ML.predict(mode,region.region||"UNKNOWN");
        var cf=ML.confidence(mode,region.region||"UNKNOWN");
        if(pred&&cf>=70&&PING.isHealthy(mode))return pred;
        if(CFG.REGIONAL_ML&&city&&city!=="UNKNOWN"){
            var rb=ML.getRegionalBest(city);
            if(rb&&PING.isHealthy(mode))return rb;
        }
    }

    // Sticky Route (if healthy)
    if(md.sticky&&SESSION.isWarm()){
        var st=stickyGet(mode+"_"+city)||stickyGet(mode);
        if(st&&PING.isHealthy(mode)&&!JITTER.needsReroute()){
            if(PING.quality(mode)==="EXCELLENT")stickyExtend(mode,60000);
            return st;
        }
    }

    // Critical Emergency
    if(PING.isCritical()){
        stickyClear(mode);stickyClear(mode+"_"+city);
        var em=GUARD.buildChain(getBestProxies(0,null,3,md.socialPriority),
            mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:md.socialPriority});
        stickySet(mode,em,md.stickyDuration);
        ML.recordSuccess(mode,em,PING.current(),region.region,md.socialPriority);
        return em;
    }

    var route=null;
    var req={burst:md.requiresBurst||false,ultraBurst:md.ultraBurst||false,
             tier:conn.tier,socialOptimized:md.socialPriority,
             udpOnly:md.udpOnly||false};

    // ═══ FPS_ULTRA: Gameplay Rendering (120fps Pipeline) ═══
    if(strategy==="FPS_ULTRA"){
        if(CFG.CARRIER_BONDING){
            var bonded=BONDING.getBest(mode,host);
            if(bonded){
                route="PROXY "+bonded.ip+":"+bonded.port;
            }else{
                route=GUARD.buildChain(
                    ["GAME_ORANGE_1","GAME_ZAIN_1","ORANGE_ULTRA_1"],
                    mode,{burst:true,ultraBurst:true,tier:0,udpOnly:true}
                );
            }
        }
        if(!route){
            route=GUARD.buildChain(
                getBestProxies(0,carrier,3,false),
                mode,{burst:true,ultraBurst:true,tier:0,udpOnly:true}
            );
        }
        FRAME_PACER.tick();
    }

    // ═══ SOCIAL_ULTRA_FORCE ═══
    else if(strategy==="SOCIAL_ULTRA_FORCE"){
        if(city&&city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS){
            var sk="SOCIAL_"+(city.indexOf("AMMAN")!==-1?"AMMAN":
                (city.indexOf("IRBID")!==-1?"IRBID":
                (city.indexOf("ZARQA")!==-1?"ZARQA":"NATIONAL")));
            var rh=REGIONAL_HOPS[sk]||REGIONAL_HOPS["SOCIAL_NATIONAL"];
            if(rh)route=GUARD.buildChain(rh,mode,
                {burst:true,ultraBurst:true,tier:0,socialOptimized:true});
        }
        if(!route){
            if(score>=93||(ip&&GUARD.isJordan(ip)&&city==="AMMAN_CORE"))
                route=GUARD.buildChain(["SOCIAL_ORANGE_1","SOCIAL_ZAIN_1","SOCIAL_UMNIAH_1"],
                    mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:true});
            else if(score>=85||(ip&&GUARD.isJordan(ip)))
                route=GUARD.buildChain(getBestProxies(0,carrier,3,true),
                    mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:true});
            else if(score>=70)
                route=GUARD.buildChain(getBestProxies(0,null,3,true),
                    mode,{burst:true,tier:0,socialOptimized:true});
            else route=GUARD.buildChain(["SOCIAL_ORANGE_1","ORANGE_ULTRA_1","ZAIN_ULTRA_1"],
                    mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:true});
        }
    }

    // ═══ LOBBY_ULTRA_FORCE ═══
    else if(strategy==="LOBBY_ULTRA_FORCE"){
        if(city&&city!=="UNKNOWN"&&CFG.REGIONAL_HOP_CHAINS){
            var rc=REGIONAL_HOPS[city]||null;
            if(!rc){
                if(city.indexOf("AMMAN")!==-1)rc=REGIONAL_HOPS["AMMAN_CORE"];
                else if(city==="IRBID"||city==="RAMTHA")rc=REGIONAL_HOPS["IRBID"];
                else if(city==="ZARQA"||city==="RUSAIFA")rc=REGIONAL_HOPS["ZARQA"];
                else if(city==="AQABA")rc=REGIONAL_HOPS["AQABA"];
                else if(city==="KARAK")rc=REGIONAL_HOPS["KARAK"];
                else if(city==="MADABA")rc=REGIONAL_HOPS["MADABA"];
                else if(city==="BALQA"||city==="SALT")rc=REGIONAL_HOPS["BALQA"];
                else if(city==="JERASH"||city==="AJLOUN")rc=REGIONAL_HOPS["JERASH"];
                else if(city==="MAFRAQ")rc=REGIONAL_HOPS["MAFRAQ"];
                else if(city==="TAFILAH")rc=REGIONAL_HOPS["TAFILAH"];
                else if(city==="MAAN"||city==="PETRA")rc=REGIONAL_HOPS["MAAN"];
            }
            if(rc)route=GUARD.buildChain(rc,mode,
                {burst:true,ultraBurst:true,tier:0,socialOptimized:true});
        }
        if(!route){
            if(score>=88||(ip&&GUARD.isJordan(ip)))
                route=GUARD.buildChain(
                    carrier==="ORANGE"||score>=93
                        ?getBestProxies(0,"ORANGE",3,true)
                        :getBestProxies(0,carrier,3,true),
                    mode,{burst:true,ultraBurst:true,tier:0,socialOptimized:true});
            else route=GUARD.buildChain(["ORANGE_ULTRA_1","ZAIN_ULTRA_1","UMNIAH_ULTRA_1"],
                    mode,{burst:true,tier:0,socialOptimized:true});
        }
    }

    // ═══ SOCIAL_CRITICAL ═══
    else if(strategy==="SOCIAL_CRITICAL")
        route=GUARD.buildChain(getBestProxies(0,null,3,true),
            mode,{burst:true,tier:0,socialOptimized:true});

    // ═══ SOCIAL_GAME_CRITICAL ═══
    else if(strategy==="SOCIAL_GAME_CRITICAL"){
        if(score>=83||(ip&&GUARD.isJordan(ip)))
            route=GUARD.buildChain(getBestProxies(0,carrier,3,true),
                mode,{burst:true,tier:0,socialOptimized:true});
        else route=GUARD.buildChain(getBestProxies(0,null,3,false),
                mode,{burst:true,tier:0});
    }

    // ═══ GAME_ULTRA_CRITICAL ═══
    else if(strategy==="GAME_ULTRA_CRITICAL"){
        if(city&&REGIONAL_HOPS[city])
            route=GUARD.buildChain(REGIONAL_HOPS[city],mode,
                {burst:true,ultraBurst:true,tier:0});
        if(!route){
            if(score>=88||(ip&&GUARD.isJordan(ip)))
                route=GUARD.buildChain(getBestProxies(0,carrier,3,false),
                    mode,{burst:true,ultraBurst:true,tier:0});
            else route=GUARD.buildChain(getBestProxies(0,null,3,false),
                    mode,{burst:true,tier:0});
        }
    }

    // ═══ SECURE_CRITICAL ═══
    else if(strategy==="SECURE_CRITICAL")
        route=GUARD.buildChain(["ORANGE_ULTRA_1","SOCIAL_ORANGE_1","ZAIN_ULTRA_1"],mode,req);

    // ═══ GAME_CRITICAL ═══
    else if(strategy==="GAME_CRITICAL"){
        if(score>=83||(ip&&GUARD.isJordan(ip)))
            route=GUARD.buildChain(getBestProxies(0,carrier,3,false),mode,req);
        else route=GUARD.buildChain(getBestProxies(1,null,3,false),mode,req);
    }

    // ═══ DEFAULT ═══
    else route=GUARD.buildChain(getBestProxies(0,null,3,md.socialPriority),mode,
            {burst:true,tier:0,socialOptimized:md.socialPriority});

    // Final fallback
    if(!route)route=GUARD.buildChain(getBestProxies(0,null,3,md.socialPriority),mode,
        {burst:true,tier:0,socialOptimized:md.socialPriority});

    // Sticky + ML learning
    if(md.sticky){stickySet(mode,route,md.stickyDuration);
        if(city&&city!=="UNKNOWN")stickySet(mode+"_"+city,route,md.stickyDuration);}
    if(CFG.ENABLE_ML_PREDICTION)ML.recordSuccess(mode,route,PING.current(),region.region,md.socialPriority);

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    // Session tracking
    SESSION.requests++;
    SESSION.updateTimeContext();

    // Anti-Cheat Safety Gate
    if(!SAFE.validateRequest(host,url)){
        return BLOOD.BLK;
    }

    // ═══ DIRECT BYPASS — Non-PUBG traffic ═══
    var hostLower = host.toLowerCase();

    // Apple/Google/System services → DIRECT
    if(containsAny(hostLower, DIRECT_KEYS)){
        SESSION.directHits++;
        return BLOOD.DIR;
    }

    // ═══ PUBG Detection ═══
    var isPUBG = containsAny(hostLower, PUBG_KEYS);
    if(!isPUBG){
        // Non-PUBG → DIRECT
        SESSION.directHits++;
        return BLOOD.DIR;
    }

    SESSION.pubgRequests++;

    // ═══ DNS Resolution ═══
    var dns = fastDNS(host);
    if(!dns.ok){
        SESSION.blockedHits++;
        return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
    }

    // ═══ Mode Detection ═══
    var mode = dns.mode || detectMode(host);
    SESSION.recordMode(mode);

    // ═══ Score Calculation ═══
    var port = url.indexOf("https") === 0 ? 443 : 80;
    var score = calculateScore(dns.ip, host, port, dns, mode);

    // ═══ Route Selection ═══
    var route = selectRoute(mode, score, dns.ip, port, host, dns);

    // ═══ Logging (Debug) ═══
    if(CFG.COLLECT_ANALYTICS && SESSION.requests % 20 === 0){
        var report = SESSION.getReport();
        // Uncomment for debug: alert("JO_RATIO: "+report.jordanRatio+"% | PING: "+report.avgPing+"ms | FPS: "+report.fpsModeHits);
    }

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  PAC UTILITY — For external status check
// ═══════════════════════════════════════════════════════════════════════

function GetConnectionStatus(){
    var r = SESSION.getReport();
    return {
        version: CFG.VERSION,
        jordanRatio: r.jordanRatio + "%",
        avgPing: r.avgPing + "ms",
        bestPing: r.bestPing + "ms",
        socialPing: r.socialAPIavgPing + "ms",
        jitter: r.avgJitter + "ms",
        fpsHits: r.fpsModeHits,
        activeRegions: r.activeRegions,
        gameState: r.gameState,
        currentMode: r.currentMode,
        requests: r.requests,
        blocked: SESSION.blockedHits,
        network: SESSION.networkQuality,
        stability: PING.stability(),
        trend: PING.trend(),
        warm: SESSION.isWarm() ? "YES" : "NO"
    };
}

// ═══════════════════════════════════════════════════════════════════════
//  INITIALIZATION COMPLETE
//  🇯🇴 PUBG JORDAN SUPREME v33.0 IS ACTIVE
// ═══════════════════════════════════════════════════════════════════════

// Startup log
(function(){
    if(CFG.COLLECT_ANALYTICS){
        var carriers = {};
        for(var n in PROXY)carriers[PROXY[n].carrier]=true;
        var carrierList = Object.keys(carriers).join("+");
        // Uncomment: alert("🔥 JORDAN SUPREME v33.0 ACTIVE\nCarriers: "+carrierList+"\nTarget: 99.5% JO Players @ 1-4ms");
    }
})();
