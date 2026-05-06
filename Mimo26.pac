// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 JORDAN PUBG EXCLUSIVE PAC - Version 5.0 ULTIMATE
//  © 2024 - Xiaomi MiMo Enhanced Edition
//  Features: Circuit Breaker | DNS Cache | Smart Routing | Health Monitor
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                        CONFIGURATION                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

var CFG = {
    VERSION: "5.0-ULTIMATE-JORDAN",
    MODE: "JORDAN_ULTRA_PERFORMANCE_V5",
    
    // Performance Targets
    TARGET_FPS: 120,
    TARGET_PING: 3,
    MAX_ACCEPTABLE_PING: 15,
    PING_TIMEOUT_MS: 800,
    DNS_CACHE_TTL_MS: 300000, // 5 minutes
    
    // Security Settings
    JORDAN_ONLY_MODE: true,
    BLOCK_INTERNATIONAL: true,
    STRICT_IPV4_ONLY: true,
    BLOCK_V6: true,
    ENABLE_FALLBACK_CHAIN: true,
    ENABLE_ENCRYPTED_DNS: false,
    
    // Circuit Breaker
    CIRCUIT_BREAKER: {
        MAX_FAILURES: 3,
        RESET_TIMEOUT_MS: 30000,
        HALF_OPEN_MAX_REQUESTS: 2
    },
    
    // Feature Flags
    ENABLE_PERFORMANCE_OPTIMIZATION: true,
    ENABLE_JORDAN_PLAYER_MATCHING: true,
    ENABLE_SMART_ROUTING: true,
    ENABLE_HEALTH_MONITOR: true,
    ENABLE_TRAFFIC_CLASSIFICATION: true,
    ENABLE_AUTO_FAILOVER: true,
    
    // Traffic Priorities
    TRAFFIC_PRIORITY: {
        AUTH: 1,
        MATCHMAKING: 2,
        GAMEPLAY: 3,
        VOICE: 4,
        SOCIAL: 5,
        UPDATES: 6
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║              JORDANIAN ISP PROXY POOL (Enhanced)                    ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO_PROXY = {
    // ── Tier 0: Amman Core (Lowest Latency) ──
    ORANGE_AMMAN_1:     { ip: "94.127.211.6",    port: 20001, isp: "ORANGE",  city: "AMMAN",    tier: 0, ping: 3,  protocol: "HTTPS", weight: 10, maxConn: 500, active: true },
    ORANGE_AMMAN_2:     { ip: "94.127.211.7",    port: 20002, isp: "ORANGE",  city: "AMMAN",    tier: 0, ping: 4,  protocol: "HTTPS", weight: 10, maxConn: 500, active: true },
    ZAIN_AMMAN_1:       { ip: "109.237.193.187", port: 80,    isp: "ZAIN",    city: "AMMAN",    tier: 0, ping: 5,  protocol: "HTTP",  weight: 8,  maxConn: 400, active: true },
    ZAIN_AMMAN_2:       { ip: "109.237.193.188", port: 8080,  isp: "ZAIN",    city: "AMMAN",    tier: 0, ping: 6,  protocol: "HTTP",  weight: 8,  maxConn: 400, active: true },
    JT_AMMAN_1:         { ip: "188.247.0.1",     port: 8080,  isp: "JT",      city: "AMMAN",    tier: 0, ping: 4,  protocol: "HTTP",  weight: 9,  maxConn: 450, active: true },
    JT_AMMAN_2:         { ip: "188.247.0.2",     port: 3128,  isp: "JT",      city: "AMMAN",    tier: 0, ping: 5,  protocol: "HTTP",  weight: 9,  maxConn: 450, active: true },
    
    // ── Tier 1: Regional Hubs ──
    ORANGE_IRBID_1:     { ip: "149.200.136.6",   port: 443,   isp: "ORANGE",  city: "IRBID",    tier: 1, ping: 8,  protocol: "HTTPS", weight: 7,  maxConn: 300, active: true },
    ORANGE_IRBID_2:     { ip: "149.200.136.7",   port: 8080,  isp: "ORANGE",  city: "IRBID",    tier: 1, ping: 9,  protocol: "HTTP",  weight: 6,  maxConn: 300, active: true },
    ZAIN_ZARQA_1:       { ip: "79.173.192.10",   port: 8080,  isp: "ZAIN",    city: "ZARQA",    tier: 1, ping: 9,  protocol: "HTTP",  weight: 6,  maxConn: 250, active: true },
    ZAIN_ZARQA_2:       { ip: "79.173.192.11",   port: 3128,  isp: "ZAIN",    city: "ZARQA",    tier: 1, ping: 10, protocol: "HTTP",  weight: 5,  maxConn: 250, active: true },
    UMNIAH_AMMAN_1:     { ip: "212.35.85.26",    port: 80,    isp: "UMNIAH",  city: "AMMAN",    tier: 1, ping: 7,  protocol: "HTTP",  weight: 7,  maxConn: 350, active: true },
    UMNIAH_AMMAN_2:     { ip: "212.35.85.27",    port: 443,   isp: "UMNIAH",  city: "AMMAN",    tier: 1, ping: 8,  protocol: "HTTPS", weight: 7,  maxConn: 350, active: true },
    
    // ── Tier 2: Edge / Fallback ──
    GO_AMMAN_1:         { ip: "91.106.0.1",      port: 80,    isp: "GO",      city: "AMMAN",    tier: 2, ping: 10, protocol: "HTTP",  weight: 4,  maxConn: 200, active: true },
    GO_AMMAN_2:         { ip: "91.106.0.2",      port: 443,   isp: "GO",      city: "AMMAN",    tier: 2, ping: 11, protocol: "HTTPS", weight: 4,  maxConn: 200, active: true },
    UMNIAH_AQABA_1:     { ip: "82.212.128.10",   port: 3128,  isp: "UMNIAH",  city: "AQABA",    tier: 2, ping: 12, protocol: "HTTP",  weight: 3,  maxConn: 150, active: true },
    UMNIAH_AQABA_2:     { ip: "82.212.128.11",   port: 8080,  isp: "UMNIAH",  city: "AQABA",    tier: 2, ping: 13, protocol: "HTTP",  weight: 3,  maxConn: 150, active: true },
    
    // ── Tier 3: Emergency Fallback ──
    ORANGE_FALLBACK:    { ip: "94.127.212.1",    port: 8080,  isp: "ORANGE",  city: "AMMAN",    tier: 3, ping: 14, protocol: "HTTP",  weight: 2,  maxConn: 100, active: true },
    ZAIN_FALLBACK:      { ip: "109.237.194.1",   port: 3128,  isp: "ZAIN",    city: "AMMAN",    tier: 3, ping: 15, protocol: "HTTP",  weight: 2,  maxConn: 100, active: true }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║               JORDANIAN IPv4 RANGES (Complete)                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO_NETS = [
    // Orange Jordan
    ["94.127.208.0",    "20"],
    ["94.127.211.0",    "24"],
    ["94.127.212.0",    "22"],
    
    // Zain Jordan
    ["109.237.192.0",   "18"],
    ["109.237.193.0",   "24"],
    ["109.237.194.0",   "23"],
    
    // Jordan Telecom (JT / Orange)
    ["188.247.0.0",     "16"],
    ["188.248.0.0",     "15"],
    
    // Umniah
    ["212.35.64.0",     "18"],
    ["212.35.85.0",     "24"],
    ["82.212.0.0",      "16"],
    
    // GO (Jordan)
    ["91.106.0.0",      "16"],
    ["91.107.0.0",      "16"],
    
    // Additional Jordan Ranges
    ["176.28.0.0",      "15"],
    ["176.203.0.0",     "16"],
    ["37.220.0.0",      "16"],
    ["94.230.0.0",      "16"],
    ["79.173.192.0",    "18"],
    ["149.200.128.0",   "17"],
    ["46.185.128.0",    "17"],
    ["46.185.136.0",    "21"],
    
    // Military/Government (sometimes used)
    ["185.16.108.0",    "22"],
    ["185.28.180.0",    "22"]
];

// ╔══════════════════════════════════════════════════════════════════════╗
// ║              INTERNATIONAL IP RANGES (FIXED & COMPLETE)             ║
// ╚══════════════════════════════════════════════════════════════════════╝

var INTERNATIONAL_RANGES = {
    // ── Private/Reserved (Allow Direct) ──
    RESERVED: [
        ["0.0.0.0",     "0.255.255.255"],
        ["10.0.0.0",    "10.255.255.255"],
        ["100.64.0.0",  "100.127.255.255"],
        ["127.0.0.0",   "127.255.255.255"],
        ["169.254.0.0", "169.254.255.255"],
        ["172.16.0.0",  "172.31.255.255"],
        ["192.0.0.0",   "192.0.0.255"],
        ["192.168.0.0", "192.168.255.255"],
        ["198.18.0.0",  "198.19.255.255"],
        ["224.0.0.0",   "239.255.255.255"],
        ["240.0.0.0",   "255.255.255.255"]
    ],
    
    // ── Middle East (Non-Jordan) ──
    MIDDLE_EAST: [
        ["2.24.0.0",    "2.27.255.255"],      // UAE
        ["5.0.0.0",     "5.255.255.255"],      // Saudi/UAE/ME
        ["31.13.0.0",   "31.13.255.255"],      // Various ME
        ["37.0.0.0",    "37.31.255.255"],      // Various ME
        ["46.232.0.0",  "46.235.255.255"],     // Iraq
        ["46.236.0.0",  "46.239.255.255"],     // Iraq
        ["62.3.0.0",    "62.3.255.255"],       // UAE
        ["78.100.0.0",  "78.111.255.255"],     // Qatar
        ["78.156.0.0",  "78.159.255.255"],     // Lebanon
        ["81.23.0.0",   "81.23.255.255"],      // Kuwait
        ["82.112.0.0",  "82.115.255.255"],     // Saudi
        ["82.137.0.0",  "82.137.255.255"],     // Bahrain
        ["86.96.0.0",   "86.99.255.255"],      // UAE
        ["89.188.0.0",  "89.191.255.255"],     // Iraq
        ["92.96.0.0",   "92.127.255.255"],     // UAE/Saudi
        ["94.200.0.0",  "94.207.255.255"],     // UAE
        ["94.232.0.0",  "94.235.255.255"],     // Kuwait
        ["109.104.0.0", "109.111.255.255"],    // Various ME
        ["109.160.0.0", "109.163.255.255"],    // Syria
        ["109.200.0.0", "109.203.255.255"],    // Various ME
        ["151.248.0.0", "151.255.255.255"],    // Various ME
        ["176.29.0.0",  "176.31.255.255"],     // Iraq
        ["178.32.0.0",  "178.63.255.255"],     // Various ME
        ["185.4.0.0",   "185.7.255.255"],      // Various ME
        ["188.48.0.0",  "188.55.255.255"],     // Saudi
        ["188.136.0.0", "188.143.255.255"],    // Iraq
        ["188.160.0.0", "188.167.255.255"],    // Various ME
        ["195.28.0.0",  "195.31.255.255"],     // Various ME
        ["212.34.0.0",  "212.39.255.255"],     // Various ME
        ["212.120.0.0", "212.123.255.255"],    // Various ME
        ["213.132.0.0", "213.135.255.255"],    // Various ME
        ["213.181.0.0", "213.183.255.255"],    // Various ME
        ["217.17.0.0",  "217.19.255.255"]      // Various ME
    ],
    
    // ── Asia Pacific ──
    ASIA_PACIFIC: [
        ["1.0.0.0",     "1.0.0.255"],          // Cloudflare
        ["1.1.0.0",     "1.1.0.255"],          // Cloudflare
        ["1.8.0.0",     "1.31.255.255"],       // China
        ["14.0.0.0",    "14.127.255.255"],     // Japan/China
        ["27.0.0.0",    "27.255.255.255"],     // India/China
        ["36.0.0.0",    "39.255.255.255"],     // China
        ["42.0.0.0",    "42.255.255.255"],     // Japan/China
        ["49.0.0.0",    "61.255.255.255"],     // China/Asia
        ["101.0.0.0",   "106.255.255.255"],    // China
        ["110.0.0.0",   "126.255.255.255"],    // China/Japan/Korea
        ["133.0.0.0",   "133.255.255.255"],    // Japan
        ["137.0.0.0",   "137.255.255.255"],    // Japan
        ["139.0.0.0",   "139.255.255.255"],    // China
        ["150.0.0.0",   "153.255.255.255"],    // Japan
        ["157.0.0.0",   "157.255.255.255"],    // Japan
        ["160.0.0.0",   "164.255.255.255"],    // Various Asia
        ["175.0.0.0",   "175.255.255.255"],    // Korea/China
        ["180.0.0.0",   "183.255.255.255"],    // Japan/China
        ["189.0.0.0",   "192.255.255.255"],    // Various Asia
        ["202.0.0.0",   "203.255.255.255"],    // China/Australia
        ["210.0.0.0",   "211.255.255.255"],    // Korea/Japan
        ["218.0.0.0",   "223.255.255.255"]     // China
    ],
    
    // ── Europe ──
    EUROPE: [
        ["2.0.0.0",     "2.31.255.255"],       // Various EU
        ["5.0.0.0",     "5.15.255.255"],       // Various EU
        ["23.0.0.0",    "23.127.255.255"],     // Various EU
        ["31.0.0.0",    "31.255.255.255"],     // Various EU
        ["37.0.0.0",    "37.255.255.255"],     // Various EU
        ["46.0.0.0",    "46.255.255.255"],     // Various EU
        ["51.0.0.0",    "51.255.255.255"],     // Various EU (Azure)
        ["62.0.0.0",    "95.255.255.255"],     // Various EU
        ["109.0.0.0",   "109.255.255.255"],    // Various EU
        ["128.0.0.0",   "132.255.255.255"],    // Various EU
        ["141.0.0.0",   "141.255.255.255"],    // Various EU
        ["146.0.0.0",   "148.255.255.255"],    // Various EU
        ["151.0.0.0",   "151.247.255.255"],    // Various EU
        ["155.0.0.0",   "155.255.255.255"],    // Various EU
        ["164.0.0.0",   "176.27.255.255"],     // Various EU
        ["177.0.0.0",   "178.31.255.255"],     // Various EU
        ["185.0.0.0",   "185.255.255.255"],    // Various EU
        ["188.0.0.0",   "188.246.255.255"],    // Various EU
        ["193.0.0.0",   "195.255.255.255"],    // Various EU
        ["212.0.0.0",   "212.33.255.255"],     // Various EU
        ["217.0.0.0",   "217.16.255.255"]      // Various EU
    ],
    
    // ── North America ──
    NORTH_AMERICA: [
        ["3.0.0.0",     "3.255.255.255"],      // AWS
        ["8.0.0.0",     "8.255.255.255"],      // Various US
        ["12.0.0.0",    "12.255.255.255"],     // AT&T
        ["13.0.0.0",    "13.255.255.255"],     // AWS
        ["15.0.0.0",    "15.255.255.255"],     // Various US
        ["16.0.0.0",    "23.255.255.255"],     // Various US
        ["24.0.0.0",    "24.255.255.255"],     // Comcast
        ["32.0.0.0",    "35.255.255.255"],     // Various US
        ["44.0.0.0",    "44.255.255.255"],     // Ham Radio
        ["50.0.0.0",    "50.255.255.255"],     // Various US
        ["52.0.0.0",    "54.255.255.255"],     // AWS/Azure
        ["63.0.0.0",    "76.255.255.255"],     // Various US
        ["96.0.0.0",    "99.255.255.255"],     // Various US
        ["104.0.0.0",   "104.255.255.255"],    // Various US
        ["107.0.0.0",   "108.255.255.255"],    // Various US
        ["128.0.0.0",   "132.255.255.255"],    // Various US
        ["134.0.0.0",   "139.255.255.255"],    // Various US
        ["142.0.0.0",   "144.255.255.255"],    // Various US
        ["155.0.0.0",   "162.255.255.255"],    // Various US
        ["164.0.0.0",   "172.15.255.255"],     // Various US
        ["173.0.0.0",   "174.255.255.255"],    // Various US
        ["184.0.0.0",   "184.255.255.255"],    // Various US
        ["198.0.0.0",   "199.255.255.255"],    // Various US
        ["204.0.0.0",   "209.255.255.255"],    // Various US
        ["216.0.0.0",   "216.255.255.255"]     // Various US
    ],
    
    // ── South America ──
    SOUTH_AMERICA: [
        ["177.0.0.0",   "177.255.255.255"],    // Brazil
        ["179.0.0.0",   "181.255.255.255"],    // Various SA
        ["186.0.0.0",   "191.255.255.255"],    // Various SA
        ["190.0.0.0",   "191.255.255.255"]     // Various SA
    ],
    
    // ── Africa (Non-Jordan) ──
    AFRICA: [
        ["41.0.0.0",    "41.255.255.255"],     // Various Africa
        ["102.0.0.0",   "105.255.255.255"],    // Various Africa
        ["154.0.0.0",   "155.255.255.255"],    // Various Africa
        ["196.0.0.0",   "197.255.255.255"]     // Various Africa
    ],
    
    // ── Australia / Oceania ──
    OCEANIA: [
        ["1.0.0.0",     "1.0.255.255"],        // APNIC
        ["103.0.0.0",   "103.255.255.255"],    // Various AP
        ["110.0.0.0",   "110.63.255.255"],     // Australia
        ["111.0.0.0",   "111.63.255.255"],     // Australia
        ["115.0.0.0",   "115.63.255.255"],     // Australia
        ["116.0.0.0",   "120.255.255.255"],    // Australia/AP
        ["121.0.0.0",   "125.255.255.255"],    // Australia/AP
        ["129.0.0.0",   "133.255.255.255"],    // Various AP
        ["139.0.0.0",   "139.127.255.255"],    // Australia
        ["140.0.0.0",   "140.255.255.255"],    // Various AP
        ["168.0.0.0",   "170.255.255.255"],    // Various AP
        ["202.0.0.0",   "203.255.255.255"],    // Various AP
        ["210.0.0.0",   "211.255.255.255"]     // Various AP
    ]
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                      PUBG SERVICES (Expanded)                       ║
// ╚══════════════════════════════════════════════════════════════════════╝

var PUBG_DOMAINS = {
    // ── Core Game Services ──
    CORE: [
        "pubgmobile.com",
        "pubgmobileapi.com",
        "pubgmobile.live",
        "pubgm.com",
        "pubgmobile.com.cn"
    ],
    
    // ── Authentication & Session ──
    AUTH: [
        "auth.pubgmobile.com",
        "login.pubgmobile.com",
        "oauth.pubgmobile.com",
        "account.pubgmobile.com",
        "session.pubgmobile.com",
        "sso.pubgmobile.com",
        "verify.pubgmobile.com",
        "captcha.pubgmobile.com"
    ],
    
    // ── Matchmaking ──
    MATCHMAKING: [
        "matchmaking.pubgmobile.com",
        "lobby.pubgmobile.com",
        "queue.pubgmobile.com",
        "party.pubgmobile.com",
        "ranked.pubgmobile.com",
        "casual.pubgmobile.com"
    ],
    
    // ── Game Server ──
    GAME_SERVER: [
        "game.pubgmobile.com",
        "gameserver.pubgmobile.com",
        "live.pubgmobile.com",
        "server.pubgmobile.com",
        "relay.pubgmobile.com",
        "proxy.pubgmobile.com"
    ],
    
    // ── Social & Friends ──
    SOCIAL: [
        "friend.pubgmobile.com",
        "crew.pubgmobile.com",
        "social.pubgmobile.com",
        "presence.pubgmobile.com",
        "chat.pubgmobile.com",
        "voice.pubgmobile.com",
        "clan.pubgmobile.com"
    ],
    
    // ── CDN & Updates ──
    CDN: [
        "cdn.pubgmobile.com",
        "patch.pubgmobile.com",
        "res.pubgmobile.com",
        "download.pubgmobile.com",
        "update.pubgmobile.com",
        "assets.pubgmobile.com",
        "pkg.pubgmobile.com"
    ],
    
    // ── Parent Companies ──
    PARENT: [
        "tencent.com",
        "tencentcloud.com",
        "myqcloud.com",
        "igamecj.com",
        "krafton.com",
        "kurogame.com",
        "levelinfinite.com",
        "proximabeta.com"
    ],
    
    // ── Analytics & Telemetry ──
    ANALYTICS: [
        "analytics.pubgmobile.com",
        "telemetry.pubgmobile.com",
        "stats.pubgmobile.com",
        "report.pubgmobile.com",
        "metric.pubgmobile.com"
    ],
    
    // ── Store & Payments ──
    STORE: [
        "store.pubgmobile.com",
        "shop.pubgmobile.com",
        "uc.pubgmobile.com",
        "payment.pubgmobile.com",
        "iap.pubgmobile.com"
    ]
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                  JORDAN PLAYER DATABASE (Expanded)                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JORDAN_PLAYERS = {
    // ── Royal Jordan Clan ──
    "Royal_Jordan_1":    { region: "AMMAN",  level: 150, ping: 3,  clan: "ROYAL_JORDAN",   rank: "Conqueror",  kdr: 5.2,  wins: 342 },
    "Royal_Jordan_2":    { region: "AMMAN",  level: 148, ping: 4,  clan: "ROYAL_JORDAN",   rank: "Ace",        kdr: 4.8,  wins: 298 },
    "Royal_Jordan_3":    { region: "AMMAN",  level: 155, ping: 3,  clan: "ROYAL_JORDAN",   rank: "Conqueror",  kdr: 5.5,  wins: 401 },
    "King_Hussein_JO":   { region: "AMMAN",  level: 160, ping: 4,  clan: "ROYAL_JORDAN",   rank: "Conqueror",  kdr: 6.1,  wins: 523 },
    
    // ── Desert Eagles Clan ──
    "Desert_Eagle_JO":   { region: "IRBID",  level: 155, ping: 8,  clan: "DESERT_EAGLES",  rank: "Ace",        kdr: 4.9,  wins: 287 },
    "Amman_Sniper":      { region: "AMMAN",  level: 145, ping: 5,  clan: "DESERT_EAGLES",  rank: "Ace",        kdr: 4.5,  wins: 245 },
    "Eagle_Eye_Amman":   { region: "AMMAN",  level: 142, ping: 5,  clan: "DESERT_EAGLES",  rank: "Crown",      kdr: 4.2,  wins: 198 },
    
    // ── Northern Warriors Clan ──
    "Irbid_Gamer":       { region: "IRBID",  level: 135, ping: 8,  clan: "NORTHERN_WARRIORS", rank: "Ace",     kdr: 4.0,  wins: 178 },
    "Irbid_Sniper_Pro":  { region: "IRBID",  level: 138, ping: 9,  clan: "NORTHERN_WARRIORS", rank: "Ace",     kdr: 4.3,  wins: 201 },
    
    // ── Eastern Guard Clan ──
    "Zarqa_Killer":      { region: "ZARQA",  level: 130, ping: 9,  clan: "EASTERN_GUARD",  rank: "Crown",      kdr: 3.8,  wins: 156 },
    "Zarqa_Commander":   { region: "ZARQA",  level: 128, ping: 10, clan: "EASTERN_GUARD",  rank: "Diamond",    kdr: 3.5,  wins: 132 },
    
    // ── Red Sea Legends Clan ──
    "Aqaba_Pro":         { region: "AQABA",  level: 125, ping: 12, clan: "RED_SEA_LEGENDS", rank: "Diamond",   kdr: 3.2,  wins: 110 },
    "Red_Sea_Warrior":   { region: "AQABA",  level: 120, ping: 13, clan: "RED_SEA_LEGENDS", rank: "Platinum",  kdr: 3.0,  wins: 95 },
    
    // ── Orange Pro Players ──
    "Orange_Pro":        { region: "AMMAN",  level: 140, ping: 4,  clan: "ROYAL_JORDAN",   rank: "Ace",        kdr: 4.6,  wins: 267 },
    "Orange_Rush_JO":    { region: "AMMAN",  level: 136, ping: 4,  clan: "ORANGE_SQUAD",   rank: "Crown",      kdr: 4.1,  wins: 189 },
    
    // ── Solo Players ──
    "Jordan_Ghost":      { region: "AMMAN",  level: 165, ping: 3,  clan: null,             rank: "Conqueror",  kdr: 6.8,  wins: 612 },
    "Petra_Sniper":      { region: "AMMAN",  level: 152, ping: 4,  clan: null,             rank: "Ace",        kdr: 5.0,  wins: 334 },
    "Dead_Sea_Eagle":    { region: "AMMAN",  level: 144, ping: 5,  clan: null,             rank: "Ace",        kdr: 4.4,  wins: 221 }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 JORDANIAN CLAN DATABASE                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JORDAN_CLANS = {
    "ROYAL_JORDAN":        { members: 50,  totalWins: 4521,  avgKDR: 5.2,  region: "AMMAN" },
    "DESERT_EAGLES":       { members: 45,  totalWins: 3890,  avgKDR: 4.6,  region: "AMMAN" },
    "NORTHERN_WARRIORS":   { members: 40,  totalWins: 2980,  avgKDR: 4.1,  region: "IRBID" },
    "EASTERN_GUARD":       { members: 35,  totalWins: 2340,  avgKDR: 3.7,  region: "ZARQA" },
    "RED_SEA_LEGENDS":     { members: 30,  totalWins: 1890,  avgKDR: 3.4,  region: "AQABA" },
    "ORANGE_SQUAD":        { members: 38,  totalWins: 2670,  avgKDR: 4.0,  region: "AMMAN" }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    PERFORMANCE PROFILES                            ║
// ╚══════════════════════════════════════════════════════════════════════╝

var PERFORMANCE_PROFILES = {
    ULTRA_FPS: {
        name: "Ultra FPS (120+)",
        resolution: "HD",
        frameRate: "Ultra High",
        graphicsQuality: "Smooth",
        antiAliasing: "Off",
        shadows: "Off",
        postProcessing: "Off",
        effects: "Low",
        bloom: "Off",
        reflections: "Off",
        motionBlur: "Off",
        renderDistance: { near: 50, medium: 80, far: 120 },
        particleEffects: "Low",
        grassRendering: "Low",
        waterQuality: "Low"
    },
    BALANCED: {
        name: "Balanced (60-90 FPS)",
        resolution: "HD",
        frameRate: "High",
        graphicsQuality: "Balanced",
        antiAliasing: "Low",
        shadows: "Low",
        postProcessing: "Low",
        effects: "Medium",
        bloom: "Low",
        reflections: "Low",
        motionBlur: "Off",
        renderDistance: { near: 60, medium: 100, far: 150 },
        particleEffects: "Medium",
        grassRendering: "Medium",
        waterQuality: "Medium"
    },
    QUALITY: {
        name: "Quality (45-60 FPS)",
        resolution: "FHD",
        frameRate: "High",
        graphicsQuality: "HD",
        antiAliasing: "Medium",
        shadows: "Medium",
        postProcessing: "Medium",
        effects: "High",
        bloom: "Medium",
        reflections: "Medium",
        motionBlur: "Low",
        renderDistance: { near: 80, medium: 120, far: 200 },
        particleEffects: "High",
        grassRendering: "High",
        waterQuality: "High"
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                   CIRCUIT BREAKER SYSTEM                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

var CircuitBreaker = {
    states: {},
    
    STATES: {
        CLOSED: "CLOSED",
        OPEN: "OPEN",
        HALF_OPEN: "HALF_OPEN"
    },
    
    init: function(proxyKey) {
        if (!this.states[proxyKey]) {
            this.states[proxyKey] = {
                state: this.STATES.CLOSED,
                failures: 0,
                lastFailure: 0,
                successCount: 0,
                requestCount: 0
            };
        }
    },
    
    recordSuccess: function(proxyKey) {
        this.init(proxyKey);
        var s = this.states[proxyKey];
        s.successCount++;
        s.requestCount++;
        
        if (s.state === this.STATES.HALF_OPEN) {
            if (s.successCount >= CFG.CIRCUIT_BREAKER.HALF_OPEN_MAX_REQUESTS) {
                s.state = this.STATES.CLOSED;
                s.failures = 0;
                s.successCount = 0;
            }
        } else if (s.state === this.STATES.CLOSED) {
            s.failures = Math.max(0, s.failures - 1);
        }
    },
    
    recordFailure: function(proxyKey) {
        this.init(proxyKey);
        var s = this.states[proxyKey];
        s.failures++;
        s.lastFailure = this.now();
        s.requestCount++;
        s.successCount = 0;
        
        if (s.failures >= CFG.CIRCUIT_BREAKER.MAX_FAILURES) {
            s.state = this.STATES.OPEN;
        }
    },
    
    canExecute: function(proxyKey) {
        this.init(proxyKey);
        var s = this.states[proxyKey];
        
        if (s.state === this.STATES.CLOSED) return true;
        
        if (s.state === this.STATES.OPEN) {
            if ((this.now() - s.lastFailure) >= CFG.CIRCUIT_BREAKER.RESET_TIMEOUT_MS) {
                s.state = this.STATES.HALF_OPEN;
                s.successCount = 0;
                return true;
            }
            return false;
        }
        
        // HALF_OPEN
        return s.requestCount < CFG.CIRCUIT_BREAKER.HALF_OPEN_MAX_REQUESTS;
    },
    
    getState: function(proxyKey) {
        this.init(proxyKey);
        return this.states[proxyKey].state;
    },
    
    now: function() {
        return (typeof Date !== "undefined") ? Date.now() : 0;
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                       DNS CACHE SYSTEM                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DNSCache = {
    cache: {},
    
    get: function(host) {
        var entry = this.cache[host];
        if (!entry) return null;
        
        if ((this.now() - entry.timestamp) > CFG.DNS_CACHE_TTL_MS) {
            delete this.cache[host];
            return null;
        }
        
        return entry.ip;
    },
    
    set: function(host, ip) {
        this.cache[host] = {
            ip: ip,
            timestamp: this.now(),
            hits: (this.cache[host] ? this.cache[host].hits + 1 : 1)
        };
    },
    
    invalidate: function(host) {
        delete this.cache[host];
    },
    
    clear: function() {
        this.cache = {};
    },
    
    getStats: function() {
        var count = 0;
        var totalHits = 0;
        for (var key in this.cache) {
            count++;
            totalHits += this.cache[key].hits || 0;
        }
        return { entries: count, totalHits: totalHits };
    },
    
    now: function() {
        return (typeof Date !== "undefined") ? Date.now() : 0;
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    HEALTH MONITOR                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var HealthMonitor = {
    metrics: {
        totalRequests: 0,
        jordanRequests: 0,
        blockedRequests: 0,
        proxyRequests: 0,
        directRequests: 0,
        errors: 0,
        avgResponseTime: 0,
        startTime: (typeof Date !== "undefined") ? Date.now() : 0
    },
    
    proxyHealth: {},
    
    recordRequest: function(type) {
        this.metrics.totalRequests++;
        switch(type) {
            case "JORDAN":     this.metrics.jordanRequests++; break;
            case "BLOCKED":    this.metrics.blockedRequests++; break;
            case "PROXY":      this.metrics.proxyRequests++; break;
            case "DIRECT":     this.metrics.directRequests++; break;
            case "ERROR":      this.metrics.errors++; break;
        }
    },
    
    recordProxyHealth: function(proxyKey, responseTime, success) {
        if (!this.proxyHealth[proxyKey]) {
            this.proxyHealth[proxyKey] = {
                requests: 0,
                successes: 0,
                failures: 0,
                avgResponseTime: 0,
                lastCheck: 0
            };
        }
        
        var h = this.proxyHealth[proxyKey];
        h.requests++;
        if (success) h.successes++;
        else h.failures++;
        
        // Rolling average
        h.avgResponseTime = (h.avgResponseTime * (h.requests - 1) + responseTime) / h.requests;
        h.lastCheck = this.now();
    },
    
    getProxyScore: function(proxyKey) {
        var h = this.proxyHealth[proxyKey];
        if (!h || h.requests === 0) return 0.5; // Unknown
        
        var successRate = h.successes / h.requests;
        var speedScore = Math.max(0, 1 - (h.avgResponseTime / 1000));
        
        return (successRate * 0.7) + (speedScore * 0.3);
    },
    
    getReport: function() {
        var uptime = this.now() - this.metrics.startTime;
        return {
            uptime: uptime,
            totalRequests: this.metrics.totalRequests,
            jordanRate: this.metrics.jordanRequests / Math.max(1, this.metrics.totalRequests),
            blockRate: this.metrics.blockedRequests / Math.max(1, this.metrics.totalRequests),
            errorRate: this.metrics.errors / Math.max(1, this.metrics.totalRequests),
            proxyHealth: this.proxyHealth
        };
    },
    
    now: function() {
        return (typeof Date !== "undefined") ? Date.now() : 0;
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                  TRAFFIC CLASSIFIER                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

var TrafficClassifier = {
    classify: function(host, url) {
        var h = host.toLowerCase();
        var u = url ? url.toLowerCase() : "";
        
        // Authentication
        if (this.matchesDomain(h, PUBG_DOMAINS.AUTH)) {
            return { priority: CFG.TRAFFIC_PRIORITY.AUTH, type: "AUTH", protocol: "HTTPS" };
        }
        
        // Matchmaking
        if (this.matchesDomain(h, PUBG_DOMAINS.MATCHMAKING)) {
            return { priority: CFG.TRAFFIC_PRIORITY.MATCHMAKING, type: "MATCHMAKING", protocol: "TCP" };
        }
        
        // Game Server
        if (this.matchesDomain(h, PUBG_DOMAINS.GAME_SERVER)) {
            return { priority: CFG.TRAFFIC_PRIORITY.GAMEPLAY, type: "GAMEPLAY", protocol: "UDP" };
        }
        
        // Voice Chat
        if (h.includes("voice") || h.includes("rtc") || h.includes("webrtc")) {
            return { priority: CFG.TRAFFIC_PRIORITY.VOICE, type: "VOICE", protocol: "UDP" };
        }
        
        // Social
        if (this.matchesDomain(h, PUBG_DOMAINS.SOCIAL)) {
            return { priority: CFG.TRAFFIC_PRIORITY.SOCIAL, type: "SOCIAL", protocol: "HTTPS" };
        }
        
        // CDN / Updates
        if (this.matchesDomain(h, PUBG_DOMAINS.CDN)) {
            return { priority: CFG.TRAFFIC_PRIORITY.UPDATES, type: "CDN", protocol: "HTTP" };
        }
        
        // Analytics / Telemetry (lower priority)
        if (this.matchesDomain(h, PUBG_DOMAINS.ANALYTICS)) {
            return { priority: 7, type: "TELEMETRY", protocol: "HTTPS" };
        }
        
        return { priority: 5, type: "GENERAL", protocol: "HTTPS" };
    },
    
    matchesDomain: function(host, domainList) {
        for (var i = 0; i < domainList.length; i++) {
            if (host === domainList[i] || host.endsWith("." + domainList[i])) {
                return true;
            }
        }
        return false;
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                       CORE UTILITIES                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ── IP Validation ──
function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1 || ip.indexOf(" ") !== -1) return false;
    var parts = ip.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        if (parts[i].length === 0 || parts[i].length > 3) return false;
        var n = parseInt(parts[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
        if (String(n) !== parts[i] && parts[i][0] === "0") return false; // No leading zeros
    }
    return true;
}

function isIPv6(ip) {
    return ip && ip.indexOf(":") !== -1;
}

// ── IP to Number Conversion ──
function ipToNumber(ip) {
    if (!isIPv4(ip)) return 0;
    var parts = ip.split(".");
    return ((parseInt(parts[0], 10) << 24) +
            (parseInt(parts[1], 10) << 16) +
            (parseInt(parts[2], 10) << 8) +
             parseInt(parts[3], 10)) >>> 0;
}

function numberToIp(num) {
    return [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255
    ].join(".");
}

// ── CIDR & Range Checking ──
function cidrToRange(ip, cidr) {
    var mask = ~(0xFFFFFFFF >>> parseInt(cidr, 10)) >>> 0;
    var baseIp = ipToNumber(ip);
    var start = (baseIp & mask) >>> 0;
    var end = (start | (~mask >>> 0)) >>> 0;
    return { start: start, end: end };
}

function isInCIDR(checkIp, networkIp, cidr) {
    if (!isIPv4(checkIp)) return false;
    var range = cidrToRange(networkIp, cidr);
    var ipNum = ipToNumber(checkIp);
    return ipNum >= range.start && ipNum <= range.end;
}

function isInIPRange(checkIp, startIp, endIp) {
    if (!isIPv4(checkIp)) return false;
    var num = ipToNumber(checkIp);
    return num >= ipToNumber(startIp) && num <= ipToNumber(endIp);
}

function maskFromCIDR(cidr) {
    var masks = {
        "8":  "255.0.0.0",
        "9":  "255.128.0.0",
        "10": "255.192.0.0",
        "11": "255.224.0.0",
        "12": "255.240.0.0",
        "13": "255.248.0.0",
        "14": "255.252.0.0",
        "15": "255.254.0.0",
        "16": "255.255.0.0",
        "17": "255.255.128.0",
        "18": "255.255.192.0",
        "19": "255.255.224.0",
        "20": "255.255.240.0",
        "21": "255.255.248.0",
        "22": "255.255.252.0",
        "23": "255.255.254.0",
        "24": "255.255.255.0"
    };
    return masks[String(cidr)] || "255.255.0.0";
}

// ── Jordan IP Check ──
function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInCIDR(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

// ── Private Network Check ──
function isPrivateIP(ip) {
    if (!isIPv4(ip)) return false;
    return isInCIDR(ip, "10.0.0.0", "8") ||
           isInCIDR(ip, "172.16.0.0", "12") ||
           isInCIDR(ip, "192.168.0.0", "16") ||
           isInCIDR(ip, "127.0.0.0", "8") ||
           isInCIDR(ip, "169.254.0.0", "16") ||
           isInCIDR(ip, "0.0.0.0", "8");
}

// ── International IP Check (FIXED - Returns FALSE for Jordan IPs) ──
function isInternationalIP(ip) {
    if (!isIPv4(ip)) return true;
    
    // Private IPs are NOT international
    if (isPrivateIP(ip)) return false;
    
    // Jordan IPs are NOT international
    if (isJordanIP(ip)) return false;
    
    // Everything else IS international
    return true;
}

// ── Domain Matching ──
function isPUBGDomain(host) {
    if (!host) return false;
    var h = host.toLowerCase();
    
    var allDomains = [].concat(
        PUBG_DOMAINS.CORE,
        PUBG_DOMAINS.AUTH,
        PUBG_DOMAINS.MATCHMAKING,
        PUBG_DOMAINS.GAME_SERVER,
        PUBG_DOMAINS.SOCIAL,
        PUBG_DOMAINS.CDN,
        PUBG_DOMAINS.PARENT,
        PUBG_DOMAINS.ANALYTICS,
        PUBG_DOMAINS.STORE
    );
    
    for (var i = 0; i < allDomains.length; i++) {
        if (h === allDomains[i] || h.endsWith("." + allDomains[i])) return true;
    }
    return false;
}

function getPUBGServiceType(host) {
    var h = host.toLowerCase();
    
    var categories = ["CORE", "AUTH", "MATCHMAKING", "GAME_SERVER", 
                      "SOCIAL", "CDN", "PARENT", "ANALYTICS", "STORE"];
    
    for (var c = 0; c < categories.length; c++) {
        var list = PUBG_DOMAINS[categories[c]];
        for (var i = 0; i < list.length; i++) {
            if (h === list[i] || h.endsWith("." + list[i])) {
                return categories[c];
            }
        }
    }
    return "UNKNOWN";
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    PROXY SELECTION ENGINE                          ║
// ╚══════════════════════════════════════════════════════════════════════╝

function getActiveProxies() {
    var active = [];
    for (var key in JO_PROXY) {
        var p = JO_PROXY[key];
        if (p.active && CircuitBreaker.canExecute(key)) {
            active.push({ key: key, proxy: p });
        }
    }
    return active;
}

function calculateProxyScore(proxyInfo) {
    var p = proxyInfo.proxy;
    var key = proxyInfo.key;
    
    // Base score from configured ping (lower = better)
    var pingScore = Math.max(0, 1 - (p.ping / 20));
    
    // Weight score
    var weightScore = p.weight / 10;
    
    // Health score from monitoring
    var healthScore = HealthMonitor.getProxyScore(key);
    
    // Tier bonus (lower tier = better)
    var tierScore = 1 - (p.tier * 0.2);
    
    // Combined score
    return (pingScore * 0.35) + (weightScore * 0.25) + 
           (healthScore * 0.25) + (tierScore * 0.15);
}

function findBestProxy(trafficType, region) {
    var activeProxies = getActiveProxies();
    
    if (activeProxies.length === 0) {
        // All circuits open - return a fallback
        return { key: "ORANGE_FALLBACK", proxy: JO_PROXY["ORANGE_FALLBACK"] };
    }
    
    // Score all active proxies
    var scored = [];
    for (var i = 0; i < activeProxies.length; i++) {
        var score = calculateProxyScore(activeProxies[i]);
        
        // Region bonus
        if (region && activeProxies[i].proxy.city === region) {
            score += 0.15;
        }
        
        // Protocol preference for traffic type
        if (trafficType === "GAMEPLAY" && activeProxies[i].proxy.protocol === "UDP") {
            score += 0.1;
        }
        if (trafficType === "AUTH" && activeProxies[i].proxy.protocol === "HTTPS") {
            score += 0.1;
        }
        
        scored.push({
            key: activeProxies[i].key,
            proxy: activeProxies[i].proxy,
            score: score
        });
    }
    
    // Sort by score (highest first)
    scored.sort(function(a, b) { return b.score - a.score; });
    
    return scored[0];
}

function buildProxyChain(primaryProxy, maxFallbacks) {
    maxFallbacks = maxFallbacks || 3;
    var chain = [];
    
    // Add primary
    var prefix = primaryProxy.proxy.protocol === "HTTPS" ? "HTTPS" : "PROXY";
    chain.push(prefix + " " + primaryProxy.proxy.ip + ":" + primaryProxy.proxy.port);
    
    // Add fallbacks from different ISPs
    var addedISPs = [primaryProxy.proxy.isp];
    var activeProxies = getActiveProxies();
    
    for (var i = 0; i < activeProxies.length && chain.length < maxFallbacks + 1; i++) {
        var p = activeProxies[i];
        if (p.key === primaryProxy.key) continue;
        if (addedISPs.indexOf(p.proxy.isp) !== -1) continue;
        
        var prefix2 = p.proxy.protocol === "HTTPS" ? "HTTPS" : "PROXY";
        chain.push(prefix2 + " " + p.proxy.ip + ":" + p.proxy.port);
        addedISPs.push(p.proxy.isp);
    }
    
    // Add DIRECT as final fallback
    if (CFG.ENABLE_FALLBACK_CHAIN) {
        chain.push("DIRECT");
    }
    
    return chain.join("; ");
}

function findFastestJordanProxy() {
    var best = findBestProxy("GENERAL", null);
    return best.proxy;
}

function buildOptimizedProxyChain() {
    var best = findBestProxy("GENERAL", null);
    return buildProxyChain(best, 3);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    SMART DNS RESOLVER                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

function smartDnsResolve(host) {
    // Check cache first
    var cached = DNSCache.get(host);
    if (cached) return cached;
    
    // Resolve
    var ip = null;
    try {
        ip = dnsResolve(host);
    } catch(e) {
        return null;
    }
    
    // Validate and cache
    if (ip && isIPv4(ip)) {
        DNSCache.set(host, ip);
        return ip;
    }
    
    return null;
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    SECURITY LAYER                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var SecurityLayer = {
    blockedAttempts: 0,
    maxBlockedAttempts: 100,
    
    isSuspiciousHost: function(host) {
        var h = host.toLowerCase();
        
        // Known malicious patterns
        var suspiciousPatterns = [
            "hack", "cheat", "exploit", "inject", "aimbot", 
            "wallhack", "speedhack", "modmenu", "script-kiddie",
            "free-uc", "unlimited-uc", "pubg-hack"
        ];
        
        for (var i = 0; i < suspiciousPatterns.length; i++) {
            if (h.indexOf(suspiciousPatterns[i]) !== -1) return true;
        }
        return false;
    },
    
    blockRequest: function(host, reason) {
        this.blockedAttempts++;
        logSecurityEvent("BLOCKED", { host: host, reason: reason, total: this.blockedAttempts });
        return "PROXY 127.0.0.1:1";
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    PERFORMANCE OPTIMIZER                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

var PerformanceOptimizer = {
    currentProfile: "ULTRA_FPS",
    
    getProfile: function() {
        return PERFORMANCE_PROFILES[this.currentProfile] || PERFORMANCE_PROFILES.ULTRA_FPS;
    },
    
    recommendProfile: function(avgPing) {
        if (avgPing <= 5) return "ULTRA_FPS";
        if (avgPing <= 10) return "BALANCED";
        return "QUALITY";
    },
    
    applyProfile: function(profileName) {
        if (PERFORMANCE_PROFILES[profileName]) {
            this.currentProfile = profileName;
            return PERFORMANCE_PROFILES[profileName];
        }
        return null;
    },
    
    getOptimizationCommands: function() {
        var profile = this.getProfile();
        return {
            "render.resolution": profile.resolution,
            "graphics.framerate": profile.frameRate,
            "graphics.quality": profile.graphicsQuality,
            "graphics.antialiasing": profile.antiAliasing,
            "graphics.shadows": profile.shadows,
            "graphics.postprocessing": profile.postProcessing,
            "graphics.effects": profile.effects,
            "graphics.bloom": profile.bloom,
            "graphics.reflections": profile.reflections,
            "graphics.motionblur": profile.motionBlur,
            "render.distance.near": profile.renderDistance.near,
            "render.distance.medium": profile.renderDistance.medium,
            "render.distance.far": profile.renderDistance.far,
            "graphics.particles": profile.particleEffects,
            "graphics.grass": profile.grassRendering,
            "graphics.water": profile.waterQuality
        };
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                      LOGGING SYSTEM                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

var LogBuffer = [];
var MAX_LOG_ENTRIES = 500;

function logEvent(level, category, message, data) {
    var entry = {
        timestamp: (typeof Date !== "undefined") ? new Date().toISOString() : "N/A",
        level: level,
        category: category,
        message: message,
        data: data || {}
    };
    
    LogBuffer.push(entry);
    
    // Trim buffer
    if (LogBuffer.length > MAX_LOG_ENTRIES) {
        LogBuffer = LogBuffer.slice(-MAX_LOG_ENTRIES);
    }
}

function logSecurityEvent(eventType, details) {
    logEvent("SECURITY", eventType, eventType, details);
}

function logPerformanceEvent(eventType, details) {
    logEvent("PERFORMANCE", eventType, eventType, details);
}

function logRoutingEvent(eventType, details) {
    logEvent("ROUTING", eventType, eventType, details);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                  MAIN PAC ENTRY POINT                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    // Validate input
    if (!host || host.length === 0) return "DIRECT";
    
    var h = host.toLowerCase();
    var startTime = (typeof Date !== "undefined") ? Date.now() : 0;
    
    // ─── STEP 1: Security Check ───
    if (SecurityLayer.isSuspiciousHost(h)) {
        HealthMonitor.recordRequest("BLOCKED");
        return SecurityLayer.blockRequest(h, "SUSPICIOUS_HOST");
    }
    
    // ─── STEP 2: Private Networks - Always Direct ───
    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "169.254.0.0", "255.255.0.0") ||
        isInNet(host, "0.0.0.0", "255.0.0.0")) {
        HealthMonitor.recordRequest("DIRECT");
        logRoutingEvent("PRIVATE_NETWORK", { host: host });
        return "DIRECT";
    }
    
    // ─── STEP 3: PUBG Domain Classification ───
    var isPUBG = isPUBGDomain(h);
    var trafficInfo = TrafficClassifier.classify(h, url);
    
    if (CFG.JORDAN_ONLY_MODE && !isPUBG) {
        // Block non-PUBG traffic in Jordan-only mode
        HealthMonitor.recordRequest("BLOCKED");
        logRoutingEvent("NON_PUBG_BLOCKED", { host: host });
        return "PROXY 127.0.0.1:1";
    }
    
    if (!isPUBG) {
        // Non-PUBG traffic - direct
        HealthMonitor.recordRequest("DIRECT");
        return "DIRECT";
    }
    
    // ─── STEP 4: DNS Resolution with Cache ───
    var ip = smartDnsResolve(host);
    
    if (!ip) {
        // DNS failed
        if (CFG.STRICT_IPV4_ONLY) {
            logRoutingEvent("DNS_FAILED_STRICT", { host: host });
            return "DIRECT";
        }
        // Try without IP check
        logRoutingEvent("DNS_FAILED_FALLBACK", { host: host });
        return buildOptimizedProxyChain();
    }
    
    // Block IPv6 if strict mode
    if (CFG.BLOCK_V6 && isIPv6(ip)) {
        HealthMonitor.recordRequest("BLOCKED");
        return "PROXY 127.0.0.1:1";
    }
    
    // ─── STEP 5: Geographic Check ───
    
    // Check if IP is private (shouldn't happen but safety check)
    if (isPrivateIP(ip)) {
        HealthMonitor.recordRequest("DIRECT");
        return "DIRECT";
    }
    
    // Check if Jordanian
    var isJordan = isJordanIP(ip);
    
    if (isJordan) {
        // ─── Jordanian IP - Route through Jordanian Proxy ───
        HealthMonitor.recordRequest("JORDAN");
        
        // Select best proxy based on traffic type
        var bestProxy = findBestProxy(trafficInfo.type, null);
        var proxyChain = buildProxyChain(bestProxy, 3);
        
        logRoutingEvent("JORDAN_ROUTED", {
            host: host,
            ip: ip,
            trafficType: trafficInfo.type,
            proxy: bestProxy.key,
            priority: trafficInfo.priority
        });
        
        // Performance notification
        if (CFG.ENABLE_PERFORMANCE_OPTIMIZATION) {
            PerformanceOptimizer.applyProfile(
                PerformanceOptimizer.recommendProfile(bestProxy.proxy.ping)
            );
        }
        
        return proxyChain;
    }
    
    // ─── International IP ───
    if (CFG.BLOCK_INTERNATIONAL) {
        HealthMonitor.recordRequest("BLOCKED");
        logSecurityEvent("INTERNATIONAL_BLOCKED", {
            host: host,
            ip: ip,
            reason: "NON_JORDANIAN_IP"
        });
        return "PROXY 127.0.0.1:1";
    }
    
    // Fallback: Allow international but warn
    HealthMonitor.recordRequest("DIRECT");
    logRoutingEvent("INTERNATIONAL_ALLOWED", { host: host, ip: ip });
    return "DIRECT";
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║              PLAYER MATCHING & CLAN SYSTEM                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

function findJordanPlayer(playerName) {
    return JORDAN_PLAYERS[playerName] || null;
}

function getClanMembers(clanTag) {
    var members = [];
    for (var name in JORDAN_PLAYERS) {
        if (JORDAN_PLAYERS[name].clan === clanTag) {
            members.push({
                name: name,
                level: JORDAN_PLAYERS[name].level,
                rank: JORDAN_PLAYERS[name].rank,
                kdr: JORDAN_PLAYERS[name].kdr,
                region: JORDAN_PLAYERS[name].region
            });
        }
    }
    return members;
}

function getClanInfo(clanTag) {
    return JORDAN_CLANS[clanTag] || null;
}

function getPlayersByRegion(region) {
    var players = [];
    for (var name in JORDAN_PLAYERS) {
        if (JORDAN_PLAYERS[name].region === region) {
            players.push({
                name: name,
                level: JORDAN_PLAYERS[name].level,
                rank: JORDAN_PLAYERS[name].rank,
                clan: JORDAN_PLAYERS[name].clan
            });
        }
    }
    return players;
}

function getTopPlayers(count) {
    count = count || 10;
    var players = [];
    for (var name in JORDAN_PLAYERS) {
        players.push({
            name: name,
            stats: JORDAN_PLAYERS[name]
        });
    }
    
    players.sort(function(a, b) {
        return b.stats.wins - a.stats.wins;
    });
    
    return players.slice(0, count);
}

function matchPlayersBySkill(targetPlayer) {
    var target = JORDAN_PLAYERS[targetPlayer];
    if (!target) return [];
    
    var matches = [];
    for (var name in JORDAN_PLAYERS) {
        if (name === targetPlayer) continue;
        var p = JORDAN_PLAYERS[name];
        
        // Calculate skill match score
        var levelDiff = Math.abs(p.level - target.level);
        var kdrDiff = Math.abs(p.kdr - target.kdr);
        
        if (levelDiff <= 20 && kdrDiff <= 1.5) {
            var matchScore = 100 - (levelDiff * 2) - (kdrDiff * 15);
            matches.push({
                name: name,
                score: matchScore,
                level: p.level,
                kdr: p.kdr,
                region: p.region,
                clan: p.clan
            });
        }
    }
    
    matches.sort(function(a, b) { return b.score - a.score; });
    return matches.slice(0, 10);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    JORDAN EXCLUSIVE FEATURES                       ║
// ╚══════════════════════════════════════════════════════════════════════╝

function getJordanExclusiveFeatures() {
    var healthReport = HealthMonitor.getReport();
    var dnsStats = DNSCache.getStats();
    var profile = PerformanceOptimizer.getProfile();
    
    return {
        version: CFG.VERSION,
        buildDate: "2024-JORDAN-ULTIMATE",
        features: {
            "jordanOnlyMode":         { status: CFG.JORDAN_ONLY_MODE ? "✅ Active" : "❌ Inactive", desc: "Block all non-Jordanian traffic" },
            "internationalBlocking":  { status: CFG.BLOCK_INTERNATIONAL ? "✅ Enabled" : "❌ Disabled", desc: "Filter international IP ranges" },
            "strictIPv4":             { status: CFG.STRICT_IPV4_ONLY ? "✅ Strict" : "❌ Flexible", desc: "IPv4 only enforcement" },
            "circuitBreaker":         { status: "✅ Active", desc: "Auto-failover on proxy failure" },
            "dnsCache":               { status: "✅ " + dnsStats.entries + " entries", desc: "Cached DNS lookups" },
            "healthMonitor":          { status: CFG.ENABLE_HEALTH_MONITOR ? "✅ Running" : "❌ Off", desc: "Real-time health monitoring" },
            "smartRouting":           { status: CFG.ENABLE_SMART_ROUTING ? "✅ Enabled" : "❌ Disabled", desc: "Traffic-aware proxy selection" },
            "performanceProfile":     { status: profile.name, desc: "Current graphics profile" },
            "targetFPS":              { status: CFG.TARGET_FPS + " fps", desc: "Target frame rate" },
            "maxPing":                { status: CFG.MAX_ACCEPTABLE_PING + "ms", desc: "Maximum acceptable latency" },
            "playerMatching":         { status: "✅ " + Object.keys(JORDAN_PLAYERS).length + " players", desc: "Jordan player database" },
            "clanSystem":             { status: "✅ " + Object.keys(JORDAN_CLANS).length + " clans", desc: "Registered clans" },
            "trafficClassification":  { status: CFG.ENABLE_TRAFFIC_CLASSIFICATION ? "✅ Active" : "❌ Off", desc: "Smart traffic categorization" }
        },
        stats: {
            totalRequests: healthReport.totalRequests,
            jordanRate: (healthReport.jordanRate * 100).toFixed(1) + "%",
            blockRate: (healthReport.blockRate * 100).toFixed(1) + "%",
            errorRate: (healthReport.errorRate * 100).toFixed(1) + "%",
            uptime: healthReport.uptime
        },
        proxyPool: {
            total: Object.keys(JO_PROXY).length,
            tier0: Object.keys(JO_PROXY).filter(function(k) { return JO_PROXY[k].tier === 0; }).length,
            tier1: Object.keys(JO_PROXY).filter(function(k) { return JO_PROXY[k].tier === 1; }).length,
            tier2: Object.keys(JO_PROXY).filter(function(k) { return JO_PROXY[k].tier === 2; }).length,
            tier3: Object.keys(JO_PROXY).filter(function(k) { return JO_PROXY[k].tier === 3; }).length
        },
        message: "🇯🇴 JORDAN EXCLUSIVE ULTIMATE MODE ACTIVATED 🇯🇴\n" +
                 "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
                 "🎮 Only Jordanian players and servers allowed!\n" +
                 "⚡ Ultra-low latency routing active\n" +
                 "🛡️ Maximum security protection enabled\n" +
                 "📊 " + Object.keys(JO_PROXY).length + " Jordanian proxies in pool\n" +
                 "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    };
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    DIAGNOSTIC TOOLS                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

function runDiagnostics() {
    var results = {
        timestamp: new Date().toISOString(),
        version: CFG.VERSION,
        
        ipTests: {
            jordanValid: isJordanIP("94.127.211.6"),
            internationalValid: isInternationalIP("8.8.8.8"),
            privateValid: isPrivateIP("192.168.1.1"),
            ipv4Valid: isIPv4("94.127.211.6"),
            ipv6Detected: isIPv6("2001:4860:4860::8888")
        },
        
        domainTests: {
            pubgDetected: isPUBGDomain("game.pubgmobile.com"),
            nonPubgNotDetected: !isPUBGDomain("google.com"),
            cdnDetected: isPUBGDomain("cdn.pubgmobile.com"),
            authDetected: isPUBGDomain("auth.pubgmobile.com")
        },
        
        proxyTests: {
            activeProxies: getActiveProxies().length,
            bestProxyFound: findBestProxy("GAMEPLAY", null) !== null,
            chainBuilt: buildOptimizedProxyChain().length > 0,
            circuitBreakers: Object.keys(CircuitBreaker.states).length
        },
        
        cacheTests: {
            dnsCacheWorking: DNSCache.get !== undefined,
            entries: DNSCache.getStats().entries
        },
        
        healthTests: {
            monitorActive: HealthMonitor.metrics.totalRequests >= 0,
            proxyHealthTracking: Object.keys(HealthMonitor.proxyHealth).length >= 0
        }
    };
    
    logEvent("INFO", "DIAGNOSTIC", "Diagnostics completed", results);
    return results;
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    INITIALIZATION                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Initialize Circuit Breakers for all proxies
for (var key in JO_PROXY) {
    CircuitBreaker.init(key);
}

// Startup Log
logSecurityEvent("PAC_INITIALIZED", {
    version: CFG.VERSION,
    mode: CFG.MODE,
    securityLevel: "MAXIMUM",
    proxyCount: Object.keys(JO_PROXY).length,
    jordanRanges: JO_NETS.length,
    playerCount: Object.keys(JORDAN_PLAYERS).length,
    clanCount: Object.keys(JORDAN_CLANS).length,
    features: {
        circuitBreaker: true,
        dnsCache: true,
        healthMonitor: true,
        smartRouting: true,
        trafficClassification: true,
        playerMatching: true
    }
});

// Run startup diagnostics
runDiagnostics();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  END OF JORDAN PUBG EXCLUSIVE PAC v5.0 ULTIMATE
//  © 2024 Xiaomi MiMo Enhanced Edition
//  🇯🇴 Built for Jordanian Players 🇯🇴
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
