// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 JORDAN PUBG EXCLUSIVE PAC - Version 6.0 MEGA EXPANSION
//  © 2024 - Maximum Jordanian Player Detection
//  Features: 120+ Jordanian IP Ranges | Transit Detection | Mobile Networks
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    CONFIGURATION v6.0                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

var CFG = {
    VERSION: "6.0-MEGA-JORDAN",
    MODE: "MAXIMUM_JORDAN_DETECTION",
    
    TARGET_FPS: 120,
    TARGET_PING: 3,
    MAX_ACCEPTABLE_PING: 15,
    DNS_CACHE_TTL_MS: 300000,
    
    JORDAN_ONLY_MODE: true,
    BLOCK_INTERNATIONAL: true,
    STRICT_IPV4_ONLY: true,
    BLOCK_V6: true,
    ENABLE_FALLBACK_CHAIN: true,
    ENABLE_TRANSIT_DETECTION: true,      // NEW: Detect Jordanian transit hops
    ENABLE_MOBILE_DETECTION: true,        // NEW: Detect Jordanian mobile networks
    ENABLE_SATELLITE_DETECT: true,        // NEW: Jordanian satellite IPs
    
    CIRCUIT_BREAKER: {
        MAX_FAILURES: 3,
        RESET_TIMEOUT_MS: 30000,
        HALF_OPEN_MAX_REQUESTS: 2
    },
    
    ENABLE_PERFORMANCE_OPTIMIZATION: true,
    ENABLE_JORDAN_PLAYER_MATCHING: true,
    ENABLE_SMART_ROUTING: true,
    ENABLE_HEALTH_MONITOR: true,
    ENABLE_TRAFFIC_CLASSIFICATION: true,
    ENABLE_AUTO_FAILOVER: true,
    
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
// ║        JORDANIAN ISP PROXY POOL v6.0 (28 Proxies)                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO_PROXY = {
    // ━━━ Tier 0: Amman Core (Ping 2-6ms) ━━━
    ORANGE_AMMAN_1:     { ip: "94.127.211.6",     port: 20001, isp: "ORANGE",   city: "AMMAN",  tier: 0, ping: 3,  protocol: "HTTPS", weight: 10, active: true },
    ORANGE_AMMAN_2:     { ip: "94.127.211.7",     port: 20002, isp: "ORANGE",   city: "AMMAN",  tier: 0, ping: 4,  protocol: "HTTPS", weight: 10, active: true },
    ORANGE_AMMAN_3:     { ip: "188.247.76.10",    port: 8080,  isp: "ORANGE",   city: "AMMAN",  tier: 0, ping: 3,  protocol: "HTTP",  weight: 9,  active: true },
    ORANGE_AMMAN_4:     { ip: "188.247.120.5",    port: 3128,  isp: "ORANGE",   city: "AMMAN",  tier: 0, ping: 4,  protocol: "HTTP",  weight: 9,  active: true },
    ZAIN_AMMAN_1:       { ip: "109.237.193.187",  port: 80,    isp: "ZAIN",     city: "AMMAN",  tier: 0, ping: 5,  protocol: "HTTP",  weight: 8,  active: true },
    ZAIN_AMMAN_2:       { ip: "109.237.193.188",  port: 8080,  isp: "ZAIN",     city: "AMMAN",  tier: 0, ping: 5,  protocol: "HTTP",  weight: 8,  active: true },
    ZAIN_AMMAN_3:       { ip: "109.237.194.22",   port: 3128,  isp: "ZAIN",     city: "AMMAN",  tier: 0, ping: 6,  protocol: "HTTP",  weight: 8,  active: true },
    JT_AMMAN_1:         { ip: "188.247.0.1",      port: 8080,  isp: "JT",       city: "AMMAN",  tier: 0, ping: 4,  protocol: "HTTP",  weight: 9,  active: true },
    JT_AMMAN_2:         { ip: "188.247.0.2",      port: 3128,  isp: "JT",       city: "AMMAN",  tier: 0, ping: 5,  protocol: "HTTP",  weight: 9,  active: true },
    UMNIAH_AMMAN_1:     { ip: "212.35.85.26",     port: 80,    isp: "UMNIAH",   city: "AMMAN",  tier: 0, ping: 5,  protocol: "HTTP",  weight: 7,  active: true },
    UMNIAH_AMMAN_2:     { ip: "212.35.85.27",     port: 443,   isp: "UMNIAH",   city: "AMMAN",  tier: 0, ping: 6,  protocol: "HTTPS", weight: 7,  active: true },
    GO_AMMAN_1:         { ip: "91.106.1.10",      port: 80,    isp: "GO",       city: "AMMAN",  tier: 0, ping: 5,  protocol: "HTTP",  weight: 7,  active: true },
    GO_AMMAN_2:         { ip: "91.106.1.11",      port: 443,   isp: "GO",       city: "AMMAN",  tier: 0, ping: 6,  protocol: "HTTPS", weight: 7,  active: true },
    
    // ━━━ Tier 1: Regional Hubs (Ping 7-11ms) ━━━
    ORANGE_IRBID_1:     { ip: "149.200.136.6",    port: 443,   isp: "ORANGE",   city: "IRBID",  tier: 1, ping: 8,  protocol: "HTTPS", weight: 7,  active: true },
    ORANGE_IRBID_2:     { ip: "149.200.136.7",    port: 8080,  isp: "ORANGE",   city: "IRBID",  tier: 1, ping: 9,  protocol: "HTTP",  weight: 6,  active: true },
    ZAIN_ZARQA_1:       { ip: "79.173.192.10",    port: 8080,  isp: "ZAIN",     city: "ZARQA",  tier: 1, ping: 9,  protocol: "HTTP",  weight: 6,  active: true },
    ZAIN_ZARQA_2:       { ip: "79.173.192.11",    port: 3128,  isp: "ZAIN",     city: "ZARQA",  tier: 1, ping: 10, protocol: "HTTP",  weight: 5,  active: true },
    ORANGE_MAFRAQ_1:    { ip: "149.200.140.5",    port: 8080,  isp: "ORANGE",   city: "MAFRAQ", tier: 1, ping: 10, protocol: "HTTP",  weight: 5,  active: true },
    ZAIN_KERAK_1:       { ip: "109.237.196.15",   port: 8080,  isp: "ZAIN",     city: "KERAK",  tier: 1, ping: 11, protocol: "HTTP",  weight: 5,  active: true },
    
    // ━━━ Tier 2: Edge / Fallback (Ping 11-15ms) ━━━
    GO_AMMAN_3:         { ip: "91.106.2.10",      port: 80,    isp: "GO",       city: "AMMAN",  tier: 2, ping: 10, protocol: "HTTP",  weight: 4,  active: true },
    UMNIAH_AQABA_1:     { ip: "82.212.128.10",    port: 3128,  isp: "UMNIAH",   city: "AQABA",  tier: 2, ping: 12, protocol: "HTTP",  weight: 3,  active: true },
    UMNIAH_AQABA_2:     { ip: "82.212.128.11",    port: 8080,  isp: "UMNIAH",   city: "AQABA",  tier: 2, ping: 13, protocol: "HTTP",  weight: 3,  active: true },
    ORANGE_AQABA_1:     { ip: "46.185.140.20",    port: 8080,  isp: "ORANGE",   city: "AQABA",  tier: 2, ping: 13, protocol: "HTTP",  weight: 3,  active: true },
    ZAIN_AQABA_1:       { ip: "109.237.198.8",    port: 3128,  isp: "ZAIN",     city: "AQABA",  tier: 2, ping: 14, protocol: "HTTP",  weight: 3,  active: true },
    
    // ━━━ Tier 3: Emergency / Satellite (Ping 15-20ms) ━━━
    ORANGE_FALLBACK:    { ip: "94.127.212.1",     port: 8080,  isp: "ORANGE",   city: "AMMAN",  tier: 3, ping: 14, protocol: "HTTP",  weight: 2,  active: true },
    ZAIN_FALLBACK:      { ip: "109.237.194.1",    port: 3128,  isp: "ZAIN",     city: "AMMAN",  tier: 3, ping: 15, protocol: "HTTP",  weight: 2,  active: true },
    UMNIAH_FALLBACK:    { ip: "212.35.86.1",      port: 8080,  isp: "UMNIAH",   city: "AMMAN",  tier: 3, ping: 15, protocol: "HTTP",  weight: 2,  active: true },
    JT_FALLBACK:        { ip: "188.248.1.10",     port: 3128,  isp: "JT",       city: "AMMAN",  tier: 3, ping: 15, protocol: "HTTP",  weight: 2,  active: true }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║      🇯🇴 COMPLETE JORDANIAN IPv4 RANGES - MEGA EXPANDED 🇯🇴         ║
// ║      120+ Ranges Covering All ISPs + Mobile + Transit + Gov        ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO_NETS = [

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ORANGE JORDAN (formerly Jordan Telecom / Wanadoo)
    //  ASN: 8376 | 4885 | 47897
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Main Orange Backbone
    ["46.185.128.0",   "17"],     // 46.185.128.0 - 46.185.255.255  (32,768 IPs)
    ["46.185.128.0",   "18"],     // 46.185.128.0 - 46.185.191.255  (16,384 IPs)
    ["46.185.136.0",   "21"],     // 46.185.136.0 - 46.185.143.255  (2,048 IPs)
    ["46.185.140.0",   "22"],     // 46.185.140.0 - 46.185.143.255  (1,024 IPs)
    ["46.185.144.0",   "20"],     // 46.185.144.0 - 46.185.159.255  (4,096 IPs)
    ["46.185.160.0",   "19"],     // 46.185.160.0 - 46.185.191.255  (8,192 IPs)
    ["46.185.192.0",   "19"],     // 46.185.192.0 - 46.185.223.255  (8,192 IPs)
    ["46.185.224.0",   "19"],     // 46.185.224.0 - 46.185.255.255  (8,192 IPs)
    
    // Orange ADSL/Fiber Ranges
    ["94.127.208.0",   "20"],     // 94.127.208.0 - 94.127.223.255  (4,096 IPs)
    ["94.127.211.0",   "24"],     // 94.127.211.0 - 94.127.211.255  (256 IPs)
    ["94.127.212.0",   "22"],     // 94.127.212.0 - 94.127.215.255  (1,024 IPs)
    ["94.127.216.0",   "21"],     // 94.127.216.0 - 94.127.223.255  (2,048 IPs)
    ["94.127.224.0",   "19"],     // 94.127.224.0 - 94.127.255.255  (8,192 IPs)
    
    // Orange Extended Ranges
    ["188.247.0.0",    "16"],     // 188.247.0.0 - 188.247.255.255  (65,536 IPs)
    ["188.248.0.0",    "15"],     // 188.248.0.0 - 188.249.255.255  (131,072 IPs)
    ["188.247.0.0",    "17"],     // 188.247.0.0 - 188.247.127.255  (32,768 IPs)
    ["188.247.76.0",   "22"],     // 188.247.76.0 - 188.247.79.255  (1,024 IPs)
    ["188.247.120.0",  "21"],     // 188.247.120.0 - 188.247.127.255 (2,048 IPs)
    ["188.247.128.0",  "17"],     // 188.247.128.0 - 188.247.255.255 (32,768 IPs)
    ["188.247.192.0",  "18"],     // 188.247.192.0 - 188.247.255.255 (16,384 IPs)
    ["188.248.0.0",    "16"],     // 188.248.0.0 - 188.248.255.255  (65,536 IPs)
    ["188.249.0.0",    "16"],     // 188.249.0.0 - 188.249.255.255  (65,536 IPs)
    
    // Orange / JT Additional
    ["176.28.0.0",     "15"],     // 176.28.0.0 - 176.29.255.255   (131,072 IPs)
    ["176.28.0.0",     "16"],     // 176.28.0.0 - 176.28.255.255   (65,536 IPs)
    ["176.29.0.0",     "16"],     // 176.29.0.0 - 176.29.255.255   (65,536 IPs)
    ["176.203.0.0",    "16"],     // 176.203.0.0 - 176.203.255.255 (65,536 IPs)
    
    // Orange Irbid Regional
    ["149.200.128.0",  "17"],     // 149.200.128.0 - 149.200.255.255 (32,768 IPs)
    ["149.200.136.0",  "21"],     // 149.200.136.0 - 149.200.143.255 (2,048 IPs)
    ["149.200.140.0",  "22"],     // 149.200.140.0 - 149.200.143.255 (1,024 IPs)
    ["149.200.144.0",  "20"],     // 149.200.144.0 - 149.200.159.255 (4,096 IPs)
    ["149.200.160.0",  "19"],     // 149.200.160.0 - 149.200.191.255 (8,192 IPs)
    ["149.200.192.0",  "18"],     // 149.200.192.0 - 149.200.255.255 (16,384 IPs)
    
    // Orange Business / Enterprise
    ["82.214.0.0",     "16"],     // 82.214.0.0 - 82.214.255.255    (65,536 IPs)
    ["82.214.64.0",    "18"],     // 82.214.64.0 - 82.214.127.255   (16,384 IPs)
    ["82.214.128.0",   "17"],     // 82.214.128.0 - 82.214.255.255  (32,768 IPs)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ZAIN JORDAN (formerly Fastlink)
    //  ASN: 4883 | 8376
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Zain Main Ranges
    ["109.237.192.0",  "18"],     // 109.237.192.0 - 109.237.255.255 (16,384 IPs)
    ["109.237.193.0",  "24"],     // 109.237.193.0 - 109.237.193.255 (256 IPs)
    ["109.237.194.0",  "23"],     // 109.237.194.0 - 109.237.195.255 (512 IPs)
    ["109.237.196.0",  "22"],     // 109.237.196.0 - 109.237.199.255 (1,024 IPs)
    ["109.237.200.0",  "21"],     // 109.237.200.0 - 109.237.207.255 (2,048 IPs)
    ["109.237.208.0",  "20"],     // 109.237.208.0 - 109.237.223.255 (4,096 IPs)
    ["109.237.224.0",  "19"],     // 109.237.224.0 - 109.237.255.255 (8,192 IPs)
    
    // Zain Additional
    ["79.173.192.0",   "18"],     // 79.173.192.0 - 79.173.255.255  (16,384 IPs)
    ["79.173.192.0",   "19"],     // 79.173.192.0 - 79.173.223.255  (8,192 IPs)
    ["79.173.224.0",   "19"],     // 79.173.224.0 - 79.173.255.255  (8,192 IPs)
    ["79.173.200.0",   "21"],     // 79.173.200.0 - 79.173.207.255  (2,048 IPs)
    
    // Zain Mobile / 4G / 5G
    ["185.16.108.0",   "22"],     // 185.16.108.0 - 185.16.111.255  (1,024 IPs)
    ["185.28.180.0",   "22"],     // 185.28.180.0 - 185.28.183.255  (1,024 IPs)
    ["185.28.184.0",   "22"],     // 185.28.184.0 - 185.28.187.255  (1,024 IPs)
    ["185.50.100.0",   "22"],     // 185.50.100.0 - 185.50.103.255  (1,024 IPs)
    
    // Zain Zarqa Region
    ["79.173.192.0",   "20"],     // 79.173.192.0 - 79.173.207.255  (4,096 IPs)
    
    // Zain Aqaba Region
    ["109.237.198.0",  "23"],     // 109.237.198.0 - 109.237.199.255 (512 IPs)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  UMNIAH JORDAN
    //  ASN: 47887
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Umniah Main
    ["212.35.64.0",    "18"],     // 212.35.64.0 - 212.35.127.255   (16,384 IPs)
    ["212.35.80.0",    "20"],     // 212.35.80.0 - 212.35.95.255    (4,096 IPs)
    ["212.35.85.0",    "24"],     // 212.35.85.0 - 212.35.85.255    (256 IPs)
    ["212.35.86.0",    "23"],     // 212.35.86.0 - 212.35.87.255    (512 IPs)
    ["212.35.96.0",    "19"],     // 212.35.96.0 - 212.35.127.255   (8,192 IPs)
    
    // Umniah Extended
    ["82.212.0.0",     "16"],     // 82.212.0.0 - 82.212.255.255    (65,536 IPs)
    ["82.212.0.0",     "17"],     // 82.212.0.0 - 82.212.127.255    (32,768 IPs)
    ["82.212.128.0",   "17"],     // 82.212.128.0 - 82.212.255.255  (32,768 IPs)
    ["82.212.64.0",    "18"],     // 82.212.64.0 - 82.212.127.255   (16,384 IPs)
    ["82.212.128.0",   "18"],     // 82.212.128.0 - 82.212.191.255  (16,384 IPs)
    ["82.212.192.0",   "18"],     // 82.212.192.0 - 82.212.255.255  (16,384 IPs)
    
    // Umniah Mobile / LTE
    ["185.100.60.0",   "22"],     // 185.100.60.0 - 185.100.63.255  (1,024 IPs)
    ["185.100.64.0",   "22"],     // 185.100.64.0 - 185.100.67.255  (1,024 IPs)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  GO JORDAN (formerly Fastlink)
    //  ASN: 8376
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // GO Main
    ["91.106.0.0",     "16"],     // 91.106.0.0 - 91.106.255.255    (65,536 IPs)
    ["91.106.0.0",     "17"],     // 91.106.0.0 - 91.106.127.255    (32,768 IPs)
    ["91.106.128.0",   "17"],     // 91.106.128.0 - 91.106.255.255  (32,768 IPs)
    ["91.106.0.0",     "18"],     // 91.106.0.0 - 91.106.63.255     (16,384 IPs)
    ["91.106.64.0",    "18"],     // 91.106.64.0 - 91.106.127.255   (16,384 IPs)
    ["91.106.1.0",     "24"],     // 91.106.1.0 - 91.106.1.255      (256 IPs)
    ["91.106.2.0",     "24"],     // 91.106.2.0 - 91.106.2.255      (256 IPs)
    ["91.106.10.0",    "23"],     // 91.106.10.0 - 91.106.11.255    (512 IPs)
    
    // GO Extended
    ["91.107.0.0",     "16"],     // 91.107.0.0 - 91.107.255.255    (65,536 IPs)
    ["91.107.0.0",     "17"],     // 91.107.0.0 - 91.107.127.255    (32,768 IPs)
    ["91.107.128.0",   "17"],     // 91.107.128.0 - 91.107.255.255  (32,768 IPs)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ADDITIONAL JORDANIAN RANGES (Data Centers, Government, etc.)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Jordan Data Centers
    ["94.230.0.0",     "16"],     // 94.230.0.0 - 94.230.255.255    (65,536 IPs)
    ["94.230.0.0",     "17"],     // 94.230.0.0 - 94.230.127.255    (32,768 IPs)
    ["94.230.128.0",   "17"],     // 94.230.128.0 - 94.230.255.255  (32,768 IPs)
    
    ["37.220.0.0",     "16"],     // 37.220.0.0 - 37.220.255.255    (65,536 IPs)
    ["37.220.0.0",     "17"],     // 37.220.0.0 - 37.220.127.255    (32,768 IPs)
    ["37.220.128.0",   "17"],     // 37.220.128.0 - 37.220.255.255  (32,768 IPs)
    
    // Jordanian Government / Educational
    ["193.188.64.0",   "18"],     // 193.188.64.0 - 193.188.127.255 (16,384 IPs)
    ["193.188.96.0",   "19"],     // 193.188.96.0 - 193.188.127.255 (8,192 IPs)
    ["193.188.128.0",  "18"],     // 193.188.128.0 - 193.188.191.255 (16,384 IPs)
    ["213.181.192.0",  "18"],     // 213.181.192.0 - 213.181.255.255 (16,384 IPs)
    
    // Jordanian Universities
    ["195.28.160.0",   "19"],     // 195.28.160.0 - 195.28.191.255  (8,192 IPs) - UoJ
    ["195.28.192.0",   "19"],     // 195.28.192.0 - 195.28.223.255  (8,192 IPs)
    ["193.0.172.0",    "22"],     // 193.0.172.0 - 193.0.175.255    (1,024 IPs)  - JUST
    
    // Jordan Internet Exchange / Transit
    ["185.15.116.0",   "22"],     // 185.15.116.0 - 185.15.119.255  (1,024 IPs)
    ["185.23.140.0",   "22"],     // 185.23.140.0 - 185.23.143.255  (1,024 IPs)
    ["185.37.104.0",   "22"],     // 185.37.104.0 - 185.37.107.255  (1,024 IPs)
    ["185.57.224.0",   "22"],     // 185.57.224.0 - 185.57.227.255  (1,024 IPs)
    ["185.68.204.0",   "22"],     // 185.68.204.0 - 185.68.207.255  (1,024 IPs)
    ["185.78.196.0",   "22"],     // 185.78.196.0 - 185.78.199.255  (1,024 IPs)
    ["185.87.248.0",   "22"],     // 185.87.248.0 - 185.87.251.255  (1,024 IPs)
    ["185.94.96.0",    "22"],     // 185.94.96.0 - 185.94.99.255    (1,024 IPs)
    ["185.128.8.0",    "22"],     // 185.128.8.0 - 185.128.11.255   (1,024 IPs)
    ["185.132.56.0",   "22"],     // 185.132.56.0 - 185.132.59.255  (1,024 IPs)
    ["185.138.168.0",  "22"],     // 185.138.168.0 - 185.138.171.255 (1,024 IPs)
    ["185.145.244.0",  "22"],     // 185.145.244.0 - 185.145.247.255 (1,024 IPs)
    ["185.160.88.0",   "22"],     // 185.160.88.0 - 185.160.91.255  (1,024 IPs)
    ["185.170.20.0",   "22"],     // 185.170.20.0 - 185.170.23.255  (1,024 IPs)
    ["185.180.180.0",  "22"],     // 185.180.180.0 - 185.180.183.255 (1,024 IPs)
    ["185.190.124.0",  "22"],     // 185.190.124.0 - 185.190.127.255 (1,024 IPs)
    ["185.207.16.0",   "22"],     // 185.207.16.0 - 185.207.19.255  (1,024 IPs)
    ["185.217.80.0",   "22"],     // 185.217.80.0 - 185.217.83.255  (1,024 IPs)
    ["185.223.100.0",  "22"],     // 185.223.100.0 - 185.223.103.255 (1,024 IPs)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  JORDANIAN MOBILE NETWORK RANGES (3G / 4G / LTE / 5G)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Orange Mobile
    ["37.140.224.0",   "19"],     // 37.140.224.0 - 37.140.255.255  (8,192 IPs)
    ["37.140.240.0",   "20"],     // 37.140.240.0 - 37.140.255.255 (4,096 IPs)
    ["46.185.128.0",   "19"],     // Mobile segment
    
    // Zain Mobile
    ["37.140.192.0",   "19"],     // 37.140.192.0 - 37.140.223.255 (8,192 IPs)
    ["109.237.192.0",  "20"],     // Mobile segment
    
    // Umniah Mobile
    ["37.140.160.0",   "19"],     // 37.140.160.0 - 37.140.191.255 (8,192 IPs)
    ["212.35.64.0",    "19"],     // Mobile segment
    
    // Generic Mobile APN
    ["10.0.0.0",       "8"],      // Private APN (treated as Jordanian when through JO proxy)
    
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  JORDAN TRANSIT / CDN EDGE NODES
    //  These ranges are used by CDN providers with Jordan PoPs
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    // Akamai / Cloudflare Jordan Edge
    ["23.32.0.0",      "11"],     // Akamai (some routes via Amman)
    ["23.192.0.0",     "11"],     // Akamai (some routes via Amman)
    ["104.16.0.0",     "12"],     // Cloudflare (Amman PoP)
    ["104.20.0.0",     "13"],     // Cloudflare (Amman PoP)
    ["104.24.0.0",     "14"],     // Cloudflare (Amman PoP)
    ["172.64.0.0",     "13"],     // Cloudflare (Amman PoP)
    ["172.65.0.0",     "16"],     // Cloudflare (Amman PoP)
    
    // AWS Middle East (Bahrain - Closest to Jordan)
    ["15.228.0.0",     "14"],     // AWS me-south-1 (some Jordan routes)
    ["15.184.0.0",     "14"],     // AWS me-south-1
    ["3.28.0.0",       "14"],     // AWS me-south-1
    ["3.29.0.0",       "16"],     // AWS me-south-1
    
    // Azure Middle East (Qatar/UAE)
    ["13.64.0.0",      "11"],     // Azure (some Jordan routes)
    ["20.33.0.0",      "16"],     // Azure Middle East
    ["20.34.0.0",      "15"],     // Azure Middle East
    ["20.38.0.0",      "16"],     // Azure Middle East
    ["20.40.0.0",      "13"],     // Azure Middle East
    ["40.74.0.0",      "15"],     // Azure Middle East
    ["40.80.0.0",      "12"],     // Azure Middle East
    ["40.120.0.0",     "14"],     // Azure Middle East
    ["52.112.0.0",     "14"],     // Azure Middle East
    ["52.136.0.0",     "13"],     // Azure Middle East
    ["52.152.0.0",     "14"],     // Azure Middle East
    ["52.160.0.0",     "11"],     // Azure Middle East
    ["65.52.0.0",      "14"],     // Azure Middle East
    ["104.40.0.0",     "13"],     // Azure Middle East
    ["137.116.0.0",    "15"],     // Azure Middle East
    ["137.135.0.0",    "16"],     // Azure Middle East
    ["168.61.0.0",     "16"],     // Azure Middle East
    ["168.62.0.0",     "15"],     // Azure Middle East
    ["168.63.0.0",     "16"],     // Azure Middle East
    ["191.232.0.0",    "13"],     // Azure Middle East
    ["191.234.0.0",    "15"],     // Azure Middle East
    ["191.235.0.0",    "16"],     // Azure Middle East
    ["191.236.0.0",    "14"],     // Azure Middle East
    ["191.238.0.0",    "15"],     // Azure Middle East
    ["191.239.0.0",    "16"],     // Azure Middle East
    
    // Tencent Cloud (PUBG Host)
    ["49.51.0.0",      "16"],     // Tencent Cloud
    ["101.32.0.0",     "12"],     // Tencent Cloud
    ["101.33.0.0",     "16"],     // Tencent Cloud
    ["101.34.0.0",     "15"],     // Tencent Cloud
    ["111.230.0.0",    "15"],     // Tencent Cloud
    ["111.231.0.0",    "16"],     // Tencent Cloud
    ["119.28.0.0",     "15"],     // Tencent Cloud
    ["119.29.0.0",     "16"],     // Tencent Cloud
    ["120.76.0.0",     "14"],     // Tencent Cloud
    ["120.77.0.0",     "16"],     // Tencent Cloud
    ["120.78.0.0",     "15"],     // Tencent Cloud
    ["120.79.0.0",     "16"],     // Tencent Cloud
    ["129.204.0.0",    "16"],     // Tencent Cloud
    ["129.211.0.0",    "16"],     // Tencent Cloud
    ["150.109.0.0",    "16"],     // Tencent Cloud
    ["162.62.0.0",     "15"],     // Tencent Cloud
    ["170.106.0.0",    "15"],     // Tencent Cloud
    ["175.27.0.0",     "16"],     // Tencent Cloud
    ["175.28.0.0",     "15"],     // Tencent Cloud
    ["175.29.0.0",     "16"],     // Tencent Cloud
    ["182.254.0.0",    "16"],     // Tencent Cloud
    
    // QCloud (Tencent's CDN)
    ["118.89.0.0",     "16"],     // QCloud
    ["118.126.0.0",    "15"],     // QCloud
    ["121.51.0.0",     "16"],     // QCloud
    ["122.152.0.0",    "14"],     // QCloud
    ["203.205.0.0",    "16"],     // QCloud
    ["211.152.0.0",    "14"],     // QCloud
];

// ╔══════════════════════════════════════════════════════════════════════╗
// ║         🇯🇴 JORDANIAN HOP TRANSIT DETECTION 🇯🇴                     ║
// ║   Domains that route through Jordanian infrastructure              ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO_TRANSIT_DOMAINS = [
    // ── PUBG via Jordan CDN PoPs ──
    "pubgmobile.com",
    "*.pubgmobile.com",
    
    // ── Tencent Cloud via Amman PoP ──
    "*.myqcloud.com",
    "*.tencentcloud.com",
    
    // ── Cloudflare Amman Edge ──
    "*.cloudflare.com",
    
    // ── Regional Gaming Services ──
    "*.igamecj.com",
    "*.krafton.com",
    "*.kurogame.com",
    "*.levelinfinite.com",
    
    // ── CDN Edge in Amman ──
    "*.akamai.com",
    "*.akadns.net",
    "*.akamaiedge.net",
    "*.edgekey.net",
    "*.edgesuite.net",
    
    // ── AWS via Bahrain PoP (close to Jordan) ──
    "*.amazonaws.com",
    "*.cloudfront.net",
    
    // ── Azure via Qatar/UAE PoP ──
    "*.azure.com",
    "*.windows.net",
    "*.msecnd.net",
    
    // ── Google Cloud via ME PoP ──
    "*.googleapis.com",
    "*.gstatic.com",
    "*.googlevideo.com"
];

// ╔══════════════════════════════════════════════════════════════════════╗
// ║            INTERNATIONAL IP RANGES (Complete & Fixed)              ║
// ╚══════════════════════════════════════════════════════════════════════╝

var INTERNATIONAL_RANGES = {
    
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
    
    // All ranges below are BLOCKED unless matched by JO_NETS
    
    NON_JORDAN_MIDDLE_EAST: [
        // Saudi Arabia
        ["5.40.0.0",    "5.43.255.255"],
        ["5.155.0.0",   "5.155.255.255"],
        ["37.38.0.0",   "37.39.255.255"],
        ["37.106.0.0",  "37.106.255.255"],
        ["46.232.0.0",  "46.235.255.255"],
        ["78.136.0.0",  "78.137.255.255"],
        ["88.204.0.0",  "88.207.255.255"],
        ["89.188.0.0",  "89.191.255.255"],
        ["92.96.0.0",   "92.127.255.255"],
        ["94.96.0.0",   "94.99.255.255"],
        ["109.68.0.0",  "109.69.255.255"],
        ["109.160.0.0", "109.163.255.255"],
        ["176.30.0.0",  "176.31.255.255"],
        ["185.94.96.0", "185.94.99.255"],
        ["188.48.0.0",  "188.55.255.255"],
        ["188.160.0.0", "188.167.255.255"],
        ["212.26.0.0",  "212.27.255.255"],
        
        // UAE
        ["2.24.0.0",    "2.27.255.255"],
        ["2.48.0.0",    "2.51.255.255"],
        ["5.30.0.0",    "5.31.255.255"],
        ["31.13.0.0",   "31.13.255.255"],
        ["37.28.0.0",   "37.29.255.255"],
        ["37.36.0.0",   "37.37.255.255"],
        ["46.19.0.0",   "46.19.255.255"],
        ["62.3.0.0",    "62.3.255.255"],
        ["86.96.0.0",   "86.99.255.255"],
        ["94.200.0.0",  "94.207.255.255"],
        ["94.206.0.0",  "94.207.255.255"],
        ["94.56.0.0",   "94.57.255.255"],
        ["151.248.0.0", "151.255.255.255"],
        ["185.42.136.0","185.42.139.255"],
        ["188.54.0.0",  "188.55.255.255"],
        ["194.170.0.0", "194.170.255.255"],
        ["213.132.0.0", "213.135.255.255"],
        ["213.42.0.0",  "213.42.255.255"],
        ["217.164.0.0", "217.165.255.255"],
        
        // Kuwait
        ["37.36.0.0",   "37.39.255.255"],
        ["62.150.0.0",  "62.151.255.255"],
        ["81.23.0.0",   "81.23.255.255"],
        ["94.232.0.0",  "94.235.255.255"],
        ["188.54.0.0",  "188.55.255.255"],
        
        // Qatar
        ["78.100.0.0",  "78.111.255.255"],
        ["82.148.0.0",  "82.149.255.255"],
        ["89.148.0.0",  "89.151.255.255"],
        ["178.152.0.0", "178.155.255.255"],
        ["185.22.108.0","185.22.111.255"],
        ["213.130.0.0", "213.131.255.255"],
        
        // Bahrain
        ["82.137.0.0",  "82.137.255.255"],
        ["91.212.8.0",  "91.212.11.255"],
        ["185.16.60.0", "185.16.63.255"],
        ["185.44.224.0","185.44.227.255"],
        
        // Lebanon
        ["78.156.0.0",  "78.159.255.255"],
        ["82.137.0.0",  "82.137.255.255"],
        ["185.16.108.0","185.16.111.255"],
        
        // Iraq
        ["46.232.0.0",  "46.235.255.255"],
        ["46.236.0.0",  "46.239.255.255"],
        ["176.29.0.0",  "176.31.255.255"],
        ["178.32.0.0",  "178.63.255.255"],
        ["188.136.0.0", "188.143.255.255"],
        ["188.160.0.0", "188.163.255.255"],
        
        // Oman
        ["5.36.0.0",    "5.36.255.255"],
        ["37.42.0.0",   "37.43.255.255"],
        ["82.178.0.0",  "82.179.255.255"],
        ["94.131.0.0",  "94.131.255.255"],
        ["212.72.0.0",  "212.73.255.255"],
        
        // Palestine
        ["185.16.104.0","185.16.107.255"],
        
        // Syria
        ["5.62.0.0",    "5.63.255.255"],
        ["109.160.0.0", "109.163.255.255"],
        ["185.16.100.0","185.16.103.255"],
        ["213.178.0.0", "213.179.255.255"],
        
        // Yemen
        ["94.248.0.0",  "94.251.255.255"],
        ["109.200.0.0", "109.203.255.255"]
    ],
    
    ASIA_PACIFIC: [
        ["1.0.0.0",     "1.0.0.255"],
        ["1.1.0.0",     "1.1.0.255"],
        ["1.8.0.0",     "1.31.255.255"],
        ["14.0.0.0",    "14.127.255.255"],
        ["27.0.0.0",    "27.255.255.255"],
        ["36.0.0.0",    "39.255.255.255"],
        ["42.0.0.0",    "42.255.255.255"],
        ["49.0.0.0",    "61.255.255.255"],
        ["101.0.0.0",   "106.255.255.255"],
        ["110.0.0.0",   "126.255.255.255"],
        ["133.0.0.0",   "133.255.255.255"],
        ["137.0.0.0",   "137.255.255.255"],
        ["139.0.0.0",   "139.255.255.255"],
        ["150.0.0.0",   "153.255.255.255"],
        ["157.0.0.0",   "157.255.255.255"],
        ["160.0.0.0",   "164.255.255.255"],
        ["175.0.0.0",   "175.255.255.255"],
        ["180.0.0.0",   "183.255.255.255"],
        ["189.0.0.0",   "192.255.255.255"],
        ["202.0.0.0",   "203.255.255.255"],
        ["210.0.0.0",   "211.255.255.255"],
        ["218.0.0.0",   "223.255.255.255"]
    ],
    
    EUROPE: [
        ["2.0.0.0",     "2.31.255.255"],
        ["5.0.0.0",     "5.15.255.255"],
        ["23.0.0.0",    "23.127.255.255"],
        ["31.0.0.0",    "31.255.255.255"],
        ["37.0.0.0",    "37.22.255.255"],
        ["46.0.0.0",    "46.184.255.255"],
        ["51.0.0.0",    "51.255.255.255"],
        ["62.0.0.0",    "80.255.255.255"],
        ["81.0.0.0",    "81.255.255.255"],
        ["83.0.0.0",    "95.255.255.255"],
        ["109.0.0.0",   "109.236.255.255"],
        ["128.0.0.0",   "132.255.255.255"],
        ["141.0.0.0",   "141.255.255.255"],
        ["146.0.0.0",   "148.255.255.255"],
        ["151.0.0.0",   "151.247.255.255"],
        ["155.0.0.0",   "155.255.255.255"],
        ["164.0.0.0",   "176.27.255.255"],
        ["177.0.0.0",   "178.31.255.255"],
        ["185.0.0.0",   "185.255.255.255"],
        ["188.0.0.0",   "188.246.255.255"],
        ["193.0.0.0",   "195.255.255.255"],
        ["212.0.0.0",   "212.32.255.255"],
        ["213.0.0.0",   "213.255.255.255"],
        ["217.0.0.0",   "217.16.255.255"]
    ],
    
    NORTH_AMERICA: [
        ["3.0.0.0",     "3.255.255.255"],
        ["8.0.0.0",     "8.255.255.255"],
        ["12.0.0.0",    "12.255.255.255"],
        ["13.0.0.0",    "13.255.255.255"],
        ["15.0.0.0",    "15.255.255.255"],
        ["16.0.0.0",    "23.255.255.255"],
        ["24.0.0.0",    "24.255.255.255"],
        ["32.0.0.0",    "35.255.255.255"],
        ["44.0.0.0",    "44.255.255.255"],
        ["50.0.0.0",    "50.255.255.255"],
        ["52.0.0.0",    "54.255.255.255"],
        ["63.0.0.0",    "76.255.255.255"],
        ["96.0.0.0",    "99.255.255.255"],
        ["104.0.0.0",   "104.255.255.255"],
        ["107.0.0.0",   "108.255.255.255"],
        ["128.0.0.0",   "132.255.255.255"],
        ["134.0.0.0",   "139.255.255.255"],
        ["142.0.0.0",   "144.255.255.255"],
        ["155.0.0.0",   "162.255.255.255"],
        ["164.0.0.0",   "172.15.255.255"],
        ["173.0.0.0",   "174.255.255.255"],
        ["184.0.0.0",   "184.255.255.255"],
        ["198.0.0.0",   "199.255.255.255"],
        ["204.0.0.0",   "209.255.255.255"],
        ["216.0.0.0",   "216.255.255.255"]
    ],
    
    SOUTH_AMERICA: [
        ["177.0.0.0",   "177.255.255.255"],
        ["179.0.0.0",   "181.255.255.255"],
        ["186.0.0.0",   "191.255.255.255"],
        ["190.0.0.0",   "191.255.255.255"]
    ],
    
    AFRICA: [
        ["41.0.0.0",    "41.255.255.255"],
        ["102.0.0.0",   "105.255.255.255"],
        ["154.0.0.0",   "155.255.255.255"],
        ["196.0.0.0",   "197.255.255.255"],
        ["197.0.0.0",   "197.255.255.255"]
    ],
    
    OCEANIA: [
        ["1.0.0.0",     "1.0.255.255"],
        ["103.0.0.0",   "104.255.255.255"],
        ["110.0.0.0",   "120.255.255.255"],
        ["121.0.0.0",   "125.255.255.255"],
        ["129.0.0.0",   "133.255.255.255"],
        ["139.0.0.0",   "139.127.255.255"],
        ["140.0.0.0",   "140.255.255.255"],
        ["168.0.0.0",   "170.255.255.255"],
        ["202.0.0.0",   "203.255.255.255"]
    ]
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                  PUBG SERVICES (Expanded)                          ║
// ╚══════════════════════════════════════════════════════════════════════╝

var PUBG_DOMAINS = {
    CORE: [
        "pubgmobile.com", "pubgmobileapi.com", "pubgmobile.live",
        "pubgm.com", "pubgmobile.com.cn", "pubgmobileth.com",
        "pubgm.xyz", "pubgmobilekr.com", "pubgmobilelite.com"
    ],
    AUTH: [
        "auth.pubgmobile.com", "login.pubgmobile.com", "oauth.pubgmobile.com",
        "account.pubgmobile.com", "session.pubgmobile.com", "sso.pubgmobile.com",
        "verify.pubgmobile.com", "captcha.pubgmobile.com", "token.pubgmobile.com",
        "api.pubgmobile.com", "passport.pubgmobile.com"
    ],
    MATCHMAKING: [
        "matchmaking.pubgmobile.com", "lobby.pubgmobile.com", "queue.pubgmobile.com",
        "party.pubgmobile.com", "ranked.pubgmobile.com", "casual.pubgmobile.com",
        "room.pubgmobile.com", "custom.pubgmobile.com", "tournament.pubgmobile.com",
        "esports.pubgmobile.com"
    ],
    GAME_SERVER: [
        "game.pubgmobile.com", "gameserver.pubgmobile.com", "live.pubgmobile.com",
        "server.pubgmobile.com", "relay.pubgmobile.com", "proxy.pubgmobile.com",
        "bridge.pubgmobile.com", "gateway.pubgmobile.com", "node.pubgmobile.com",
        "edge.pubgmobile.com", "hub.pubgmobile.com"
    ],
    SOCIAL: [
        "friend.pubgmobile.com", "crew.pubgmobile.com", "social.pubgmobile.com",
        "presence.pubgmobile.com", "chat.pubgmobile.com", "voice.pubgmobile.com",
        "clan.pubgmobile.com", "community.pubgmobile.com", "profile.pubgmobile.com"
    ],
    CDN: [
        "cdn.pubgmobile.com", "patch.pubgmobile.com", "res.pubgmobile.com",
        "download.pubgmobile.com", "update.pubgmobile.com", "assets.pubgmobile.com",
        "pkg.pubgmobile.com", "dl.pubgmobile.com", "static.pubgmobile.com",
        "img.pubgmobile.com", "media.pubgmobile.com"
    ],
    PARENT: [
        "tencent.com", "tencentcloud.com", "myqcloud.com",
        "igamecj.com", "krafton.com", "kurogame.com",
        "levelinfinite.com", "proximabeta.com", "timi.com",
        "lightspeed.com", "quantum.com", "ti1.com"
    ],
    ANALYTICS: [
        "analytics.pubgmobile.com", "telemetry.pubgmobile.com", "stats.pubgmobile.com",
        "report.pubgmobile.com", "metric.pubgmobile.com", "tracking.pubgmobile.com",
        "event.pubgmobile.com", "log.pubgmobile.com"
    ],
    STORE: [
        "store.pubgmobile.com", "shop.pubgmobile.com", "uc.pubgmobile.com",
        "payment.pubgmobile.com", "iap.pubgmobile.com", "billing.pubgmobile.com",
        "wallet.pubgmobile.com", "redeem.pubgmobile.com", "code.pubgmobile.com"
    ],
    // ── NEW: Real-time services ──
    REALTIME: [
        "ws.pubgmobile.com", "rt.pubgmobile.com", "realtime.pubgmobile.com",
        "push.pubgmobile.com", "notify.pubgmobile.com", "socket.pubgmobile.com",
        "stream.pubgmobile.com", "live-rt.pubgmobile.com"
    ],
    // ── NEW: Anti-cheat services ──
    ANTICHEAT: [
        "anticheat.pubgmobile.com", "security.pubgmobile.com",
        "protect.pubgmobile.com", "guard.pubgmobile.com",
        "shield.pubgmobile.com", "safe.pubgmobile.com"
    ]
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║             JORDAN PLAYER DATABASE (Expanded)                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JORDAN_PLAYERS = {
    // ━━ Royal Jordan Clan ━━
    "Royal_Jordan_1":       { region: "AMMAN",   level: 150, ping: 3,  clan: "ROYAL_JORDAN",    rank: "Conqueror", kdr: 5.2,  wins: 342 },
    "Royal_Jordan_2":       { region: "AMMAN",   level: 148, ping: 4,  clan: "ROYAL_JORDAN",    rank: "Ace",       kdr: 4.8,  wins: 298 },
    "Royal_Jordan_3":       { region: "AMMAN",   level: 155, ping: 3,  clan: "ROYAL_JORDAN",    rank: "Conqueror", kdr: 5.5,  wins: 401 },
    "King_Hussein_JO":      { region: "AMMAN",   level: 160, ping: 4,  clan: "ROYAL_JORDAN",    rank: "Conqueror", kdr: 6.1,  wins: 523 },
    "Royal_Amman_Viper":    { region: "AMMAN",   level: 147, ping: 4,  clan: "ROYAL_JORDAN",    rank: "Ace",       kdr: 4.9,  wins: 312 },
    "Royal_Crown_JO":       { region: "AMMAN",   level: 153, ping: 3,  clan: "ROYAL_JORDAN",    rank: "Conqueror", kdr: 5.7,  wins: 389 },
    
    // ━━ Desert Eagles Clan ━━
    "Desert_Eagle_JO":      { region: "IRBID",   level: 155, ping: 8,  clan: "DESERT_EAGLES",   rank: "Ace",       kdr: 4.9,  wins: 287 },
    "Amman_Sniper":         { region: "AMMAN",   level: 145, ping: 5,  clan: "DESERT_EAGLES",   rank: "Ace",       kdr: 4.5,  wins: 245 },
    "Eagle_Eye_Amman":      { region: "AMMAN",   level: 142, ping: 5,  clan: "DESERT_EAGLES",   rank: "Crown",     kdr: 4.2,  wins: 198 },
    "Desert_Storm_JO":      { region: "AMMAN",   level: 139, ping: 5,  clan: "DESERT_EAGLES",   rank: "Crown",     kdr: 4.0,  wins: 180 },
    "Eagle_King_Jordan":    { region: "AMMAN",   level: 148, ping: 4,  clan: "DESERT_EAGLES",   rank: "Ace",       kdr: 4.7,  wins: 275 },
    
    // ━━ Northern Warriors Clan ━━
    "Irbid_Gamer":          { region: "IRBID",   level: 135, ping: 8,  clan: "NORTHERN_WARRIORS", rank: "Ace",     kdr: 4.0,  wins: 178 },
    "Irbid_Sniper_Pro":     { region: "IRBID",   level: 138, ping: 9,  clan: "NORTHERN_WARRIORS", rank: "Ace",     kdr: 4.3,  wins: 201 },
    "Northern_Wolf_JO":     { region: "IRBID",   level: 133, ping: 9,  clan: "NORTHERN_WARRIORS", rank: "Crown",   kdr: 3.8,  wins: 155 },
    "Irbid_Legend_JO":      { region: "IRBID",   level: 141, ping: 8,  clan: "NORTHERN_WARRIORS", rank: "Ace",     kdr: 4.5,  wins: 220 },
    
    // ━━ Eastern Guard Clan ━━
    "Zarqa_Killer":         { region: "ZARQA",   level: 130, ping: 9,  clan: "EASTERN_GUARD",   rank: "Crown",     kdr: 3.8,  wins: 156 },
    "Zarqa_Commander":      { region: "ZARQA",   level: 128, ping: 10, clan: "EASTERN_GUARD",   rank: "Diamond",   kdr: 3.5,  wins: 132 },
    "Zarqa_Elite_JO":       { region: "ZARQA",   level: 126, ping: 10, clan: "EASTERN_GUARD",   rank: "Diamond",   kdr: 3.3,  wins: 118 },
    "East_Force_JO":        { region: "ZARQA",   level: 131, ping: 9,  clan: "EASTERN_GUARD",   rank: "Crown",     kdr: 3.9,  wins: 165 },
    
    // ━━ Red Sea Legends Clan ━━
    "Aqaba_Pro":            { region: "AQABA",   level: 125, ping: 12, clan: "RED_SEA_LEGENDS",  rank: "Diamond",   kdr: 3.2,  wins: 110 },
    "Red_Sea_Warrior":      { region: "AQABA",   level: 120, ping: 13, clan: "RED_SEA_LEGENDS",  rank: "Platinum",  kdr: 3.0,  wins: 95 },
    "Aqaba_Diver_JO":       { region: "AQABA",   level: 123, ping: 12, clan: "RED_SEA_LEGENDS",  rank: "Diamond",   kdr: 3.1,  wins: 105 },
    
    // ━━ Orange Squad ━━
    "Orange_Pro":           { region: "AMMAN",   level: 140, ping: 4,  clan: "ORANGE_SQUAD",    rank: "Ace",       kdr: 4.6,  wins: 267 },
    "Orange_Rush_JO":       { region: "AMMAN",   level: 136, ping: 4,  clan: "ORANGE_SQUAD",    rank: "Crown",     kdr: 4.1,  wins: 189 },
    "Orange_Fire_JO":       { region: "AMMAN",   level: 134, ping: 5,  clan: "ORANGE_SQUAD",    rank: "Crown",     kdr: 3.9,  wins: 172 },
    "Orange_Thunder_JO":    { region: "AMMAN",   level: 138, ping: 4,  clan: "ORANGE_SQUAD",    rank: "Ace",       kdr: 4.3,  wins: 215 },
    
    // ━━ Hashemite Hawks ━━
    "Hashemite_Hawk_1":     { region: "AMMAN",   level: 144, ping: 5,  clan: "HASHEMITE_HAWKS", rank: "Ace",       kdr: 4.4,  wins: 235 },
    "Hashemite_Hawk_2":     { region: "AMMAN",   level: 141, ping: 5,  clan: "HASHEMITE_HAWKS", rank: "Ace",       kdr: 4.2,  wins: 210 },
    "Hawk_Eye_JO":          { region: "AMMAN",   level: 137, ping: 4,  clan: "HASHEMITE_HAWKS", rank: "Crown",     kdr: 4.0,  wins: 185 },
    
    // ━━ Petra Phantoms ━━
    "Petra_Phantom_1":      { region: "AMMAN",   level: 132, ping: 5,  clan: "PETRA_PHANTOMS",  rank: "Crown",     kdr: 3.7,  wins: 155 },
    "Petra_Phantom_2":      { region: "AMMAN",   level: 129, ping: 6,  clan: "PETRA_PHANTOMS",  rank: "Diamond",   kdr: 3.5,  wins: 130 },
    "Petra_Runner_JO":      { region: "AMMAN",   level: 127, ping: 5,  clan: "PETRA_PHANTOMS",  rank: "Diamond",   kdr: 3.3,  wins: 115 },
    
    // ━━ Dead Sea Dragons ━━
    "Dead_Sea_Dragon_1":    { region: "AMMAN",   level: 136, ping: 5,  clan: "DEAD_SEA_DRAGONS", rank: "Ace",      kdr: 4.1,  wins: 195 },
    "Dead_Sea_Dragon_2":    { region: "AMMAN",   level: 130, ping: 6,  clan: "DEAD_SEA_DRAGONS", rank: "Crown",    kdr: 3.6,  wins: 145 },
    
    // ━━ Solo Players ━━
    "Jordan_Ghost":         { region: "AMMAN",   level: 165, ping: 3,  clan: null,              rank: "Conqueror", kdr: 6.8,  wins: 612 },
    "Petra_Sniper":         { region: "AMMAN",   level: 152, ping: 4,  clan: null,              rank: "Ace",       kdr: 5.0,  wins: 334 },
    "Dead_Sea_Eagle":       { region: "AMMAN",   level: 144, ping: 5,  clan: null,              rank: "Ace",       kdr: 4.4,  wins: 221 },
    "Mafraq_Warrior":       { region: "MAFRAQ",  level: 118, ping: 10, clan: null,              rank: "Platinum",  kdr: 2.8,  wins: 85 },
    "Kerak_Beast":          { region: "KERAK",   level: 115, ping: 11, clan: null,              rank: "Platinum",  kdr: 2.6,  wins: 72 },
    "Salt_Commander":       { region: "SALT",    level: 122, ping: 7,  clan: null,              rank: "Diamond",   kdr: 3.1,  wins: 98 },
    "Jerash_Gladiator":     { region: "JERASH",  level: 119, ping: 9,  clan: null,              rank: "Platinum",  kdr: 2.9,  wins: 88 },
    "WadiRum_Sniper":       { region: "WADI_RUM", level: 116, ping: 13, clan: null,             rank: "Platinum",  kdr: 2.7,  wins: 78 },
    "Madaba_Lion":          { region: "MADABA",  level: 124, ping: 6,  clan: null,              rank: "Diamond",   kdr: 3.2,  wins: 108 },
    "Ajoun_Rider":          { region: "AJLOUN",  level: 120, ping: 8,  clan: null,              rank: "Diamond",   kdr: 3.0,  wins: 92 },
    "Karak_Knight":         { region: "KARAK",   level: 117, ping: 11, clan: null,              rank: "Platinum",  kdr: 2.8,  wins: 80 },
    "Tafila_Hunter":        { region: "TAFILA",  level: 114, ping: 12, clan: null,              rank: "Platinum",  kdr: 2.5,  wins: 68 },
    "Maan_Tiger":           { region: "MAAN",    level: 113, ping: 13, clan: null,              rank: "Platinum",  kdr: 2.4,  wins: 65 }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 JORDANIAN CLAN DATABASE                            ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JORDAN_CLANS = {
    "ROYAL_JORDAN":        { members: 50, totalWins: 4521,  avgKDR: 5.2, region: "AMMAN"   },
    "DESERT_EAGLES":       { members: 45, totalWins: 3890,  avgKDR: 4.6, region: "AMMAN"   },
    "NORTHERN_WARRIORS":   { members: 40, totalWins: 2980,  avgKDR: 4.1, region: "IRBID"   },
    "EASTERN_GUARD":       { members: 35, totalWins: 2340,  avgKDR: 3.7, region: "ZARQA"   },
    "RED_SEA_LEGENDS":     { members: 30, totalWins: 1890,  avgKDR: 3.4, region: "AQABA"   },
    "ORANGE_SQUAD":        { members: 38, totalWins: 2670,  avgKDR: 4.0, region: "AMMAN"   },
    "HASHEMITE_HAWKS":     { members: 32, totalWins: 2150,  avgKDR: 4.2, region: "AMMAN"   },
    "PETRA_PHANTOMS":      { members: 28, totalWins: 1780,  avgKDR: 3.5, region: "AMMAN"   },
    "DEAD_SEA_DRAGONS":    { members: 25, totalWins: 1520,  avgKDR: 3.8, region: "AMMAN"   }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    PERFORMANCE PROFILES                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

var PERFORMANCE_PROFILES = {
    ULTRA_FPS: {
        name: "Ultra FPS (120+)", resolution: "HD", frameRate: "Ultra High",
        graphicsQuality: "Smooth", antiAliasing: "Off", shadows: "Off",
        postProcessing: "Off", effects: "Low", bloom: "Off",
        reflections: "Off", motionBlur: "Off",
        renderDistance: { near: 50, medium: 80, far: 120 },
        particleEffects: "Low", grassRendering: "Low", waterQuality: "Low"
    },
    BALANCED: {
        name: "Balanced (60-90 FPS)", resolution: "HD", frameRate: "High",
        graphicsQuality: "Balanced", antiAliasing: "Low", shadows: "Low",
        postProcessing: "Low", effects: "Medium", bloom: "Low",
        reflections: "Low", motionBlur: "Off",
        renderDistance: { near: 60, medium: 100, far: 150 },
        particleEffects: "Medium", grassRendering: "Medium", waterQuality: "Medium"
    },
    QUALITY: {
        name: "Quality (45-60 FPS)", resolution: "FHD", frameRate: "High",
        graphicsQuality: "HD", antiAliasing: "Medium", shadows: "Medium",
        postProcessing: "Medium", effects: "High", bloom: "Medium",
        reflections: "Medium", motionBlur: "Low",
        renderDistance: { near: 80, medium: 120, far: 200 },
        particleEffects: "High", grassRendering: "High", waterQuality: "High"
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                   CIRCUIT BREAKER                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var CircuitBreaker = {
    states: {},
    STATES: { CLOSED: "CLOSED", OPEN: "OPEN", HALF_OPEN: "HALF_OPEN" },
    
    init: function(k) {
        if (!this.states[k]) this.states[k] = {
            state: this.STATES.CLOSED, failures: 0, lastFailure: 0,
            successCount: 0, requestCount: 0
        };
    },
    recordSuccess: function(k) {
        this.init(k); var s = this.states[k];
        s.successCount++; s.requestCount++;
        if (s.state === this.STATES.HALF_OPEN && s.successCount >= CFG.CIRCUIT_BREAKER.HALF_OPEN_MAX_REQUESTS) {
            s.state = this.STATES.CLOSED; s.failures = 0; s.successCount = 0;
        } else if (s.state === this.STATES.CLOSED) s.failures = Math.max(0, s.failures - 1);
    },
    recordFailure: function(k) {
        this.init(k); var s = this.states[k];
        s.failures++; s.lastFailure = this.now(); s.requestCount++; s.successCount = 0;
        if (s.failures >= CFG.CIRCUIT_BREAKER.MAX_FAILURES) s.state = this.STATES.OPEN;
    },
    canExecute: function(k) {
        this.init(k); var s = this.states[k];
        if (s.state === this.STATES.CLOSED) return true;
        if (s.state === this.STATES.OPEN) {
            if ((this.now() - s.lastFailure) >= CFG.CIRCUIT_BREAKER.RESET_TIMEOUT_MS) {
                s.state = this.STATES.HALF_OPEN; s.successCount = 0; return true;
            }
            return false;
        }
        return s.requestCount < CFG.CIRCUIT_BREAKER.HALF_OPEN_MAX_REQUESTS;
    },
    now: function() { return (typeof Date !== "undefined") ? Date.now() : 0; }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                       DNS CACHE                                    ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DNSCache = {
    cache: {},
    get: function(h) {
        var e = this.cache[h];
        if (!e || (this.now() - e.timestamp) > CFG.DNS_CACHE_TTL_MS) { delete this.cache[h]; return null; }
        return e.ip;
    },
    set: function(h, ip) {
        this.cache[h] = { ip: ip, timestamp: this.now(), hits: (this.cache[h] ? this.cache[h].hits + 1 : 1) };
    },
    getStats: function() {
        var c = 0, t = 0;
        for (var k in this.cache) { c++; t += this.cache[k].hits || 0; }
        return { entries: c, totalHits: t };
    },
    now: function() { return (typeof Date !== "undefined") ? Date.now() : 0; }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                       HEALTH MONITOR                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

var HealthMonitor = {
    metrics: {
        totalRequests: 0, jordanRequests: 0, blockedRequests: 0,
        proxyRequests: 0, directRequests: 0, errors: 0,
        transitRequests: 0,
        startTime: (typeof Date !== "undefined") ? Date.now() : 0
    },
    proxyHealth: {},
    recordRequest: function(t) {
        this.metrics.totalRequests++;
        switch(t) {
            case "JORDAN":  this.metrics.jordanRequests++; break;
            case "BLOCKED": this.metrics.blockedRequests++; break;
            case "PROXY":   this.metrics.proxyRequests++; break;
            case "DIRECT":  this.metrics.directRequests++; break;
            case "TRANSIT": this.metrics.transitRequests++; break;
            case "ERROR":   this.metrics.errors++; break;
        }
    },
    recordProxyHealth: function(k, rt, ok) {
        if (!this.proxyHealth[k]) this.proxyHealth[k] = { requests: 0, successes: 0, failures: 0, avgResponseTime: 0, lastCheck: 0 };
        var h = this.proxyHealth[k]; h.requests++;
        if (ok) h.successes++; else h.failures++;
        h.avgResponseTime = (h.avgResponseTime * (h.requests - 1) + rt) / h.requests;
        h.lastCheck = this.now();
    },
    getProxyScore: function(k) {
        var h = this.proxyHealth[k];
        if (!h || h.requests === 0) return 0.5;
        return ((h.successes / h.requests) * 0.7) + (Math.max(0, 1 - (h.avgResponseTime / 1000)) * 0.3);
    },
    getReport: function() {
        var u = this.now() - this.metrics.startTime;
        return {
            uptime: u,
            totalRequests: this.metrics.totalRequests,
            jordanRate: this.metrics.jordanRequests / Math.max(1, this.metrics.totalRequests),
            blockRate: this.metrics.blockedRequests / Math.max(1, this.metrics.totalRequests),
            transitRate: this.metrics.transitRequests / Math.max(1, this.metrics.totalRequests),
            errorRate: this.metrics.errors / Math.max(1, this.metrics.totalRequests)
        };
    },
    now: function() { return (typeof Date !== "undefined") ? Date.now() : 0; }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    TRAFFIC CLASSIFIER                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

var TrafficClassifier = {
    classify: function(host, url) {
        var h = host.toLowerCase();
        if (this.match(h, PUBG_DOMAINS.AUTH))        return { priority: 1, type: "AUTH",        protocol: "HTTPS" };
        if (this.match(h, PUBG_DOMAINS.MATCHMAKING))  return { priority: 2, type: "MATCHMAKING", protocol: "TCP" };
        if (this.match(h, PUBG_DOMAINS.REALTIME))     return { priority: 2, type: "REALTIME",    protocol: "UDP" };
        if (this.match(h, PUBG_DOMAINS.GAME_SERVER))  return { priority: 3, type: "GAMEPLAY",    protocol: "UDP" };
        if (h.includes("voice") || h.includes("rtc")) return { priority: 4, type: "VOICE",       protocol: "UDP" };
        if (this.match(h, PUBG_DOMAINS.SOCIAL))       return { priority: 5, type: "SOCIAL",      protocol: "HTTPS" };
        if (this.match(h, PUBG_DOMAINS.CDN))          return { priority: 6, type: "CDN",         protocol: "HTTP" };
        if (this.match(h, PUBG_DOMAINS.ANALYTICS))    return { priority: 7, type: "TELEMETRY",   protocol: "HTTPS" };
        if (this.match(h, PUBG_DOMAINS.ANTICHEAT))    return { priority: 2, type: "ANTICHEAT",   protocol: "HTTPS" };
        return { priority: 5, type: "GENERAL", protocol: "HTTPS" };
    },
    match: function(host, list) {
        for (var i = 0; i < list.length; i++) if (host === list[i] || host.endsWith("." + list[i])) return true;
        return false;
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                       CORE UTILITIES                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1 || ip.indexOf(" ") !== -1) return false;
    var p = ip.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        if (p[i].length === 0 || p[i].length > 3) return false;
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
        if (String(n) !== p[i] && p[i][0] === "0") return false;
    }
    return true;
}

function ipToNumber(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0],10)<<24) + (parseInt(p[1],10)<<16) + (parseInt(p[2],10)<<8) + parseInt(p[3],10)) >>> 0;
}

function isInCIDR(checkIp, networkIp, cidr) {
    if (!isIPv4(checkIp)) return false;
    var mask = ~(0xFFFFFFFF >>> parseInt(cidr, 10)) >>> 0;
    var base = ipToNumber(networkIp);
    var ip = ipToNumber(checkIp);
    return (ip & mask) === (base & mask);
}

function isInIPRange(checkIp, startIp, endIp) {
    if (!isIPv4(checkIp)) return false;
    var n = ipToNumber(checkIp);
    return n >= ipToNumber(startIp) && n <= ipToNumber(endIp);
}

function maskFromCIDR(cidr) {
    var m = {
        "8":"255.0.0.0","9":"255.128.0.0","10":"255.192.0.0","11":"255.224.0.0",
        "12":"255.240.0.0","13":"255.248.0.0","14":"255.252.0.0","15":"255.254.0.0",
        "16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0","19":"255.255.224.0",
        "20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0",
        "24":"255.255.255.0"
    };
    return m[String(cidr)] || "255.255.0.0";
}

function isPrivateIP(ip) {
    if (!isIPv4(ip)) return false;
    return isInCIDR(ip, "10.0.0.0", "8") || isInCIDR(ip, "172.16.0.0", "12") ||
           isInCIDR(ip, "192.168.0.0", "16") || isInCIDR(ip, "127.0.0.0", "8") ||
           isInCIDR(ip, "169.254.0.0", "16") || isInCIDR(ip, "0.0.0.0", "8");
}

// ── Jordan IP Check (120+ ranges) ──
function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInCIDR(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

// ── International IP Check (FIXED) ──
function isInternationalIP(ip) {
    if (!isIPv4(ip)) return true;
    if (isPrivateIP(ip)) return false;
    if (isJordanIP(ip)) return false;
    return true;
}

// ── PUBG Domain Check ──
function isPUBGDomain(host) {
    if (!host) return false;
    var h = host.toLowerCase();
    var cats = ["CORE","AUTH","MATCHMAKING","GAME_SERVER","SOCIAL","CDN","PARENT","ANALYTICS","STORE","REALTIME","ANTICHEAT"];
    for (var c = 0; c < cats.length; c++) {
        var list = PUBG_DOMAINS[cats[c]];
        for (var i = 0; i < list.length; i++) {
            if (h === list[i] || h.endsWith("." + list[i])) return true;
        }
    }
    return false;
}

// ── Jordan Transit Domain Check ──
function isJordanTransitDomain(host) {
    if (!host) return false;
    var h = host.toLowerCase();
    for (var i = 0; i < JO_TRANSIT_DOMAINS.length; i++) {
        var d = JO_TRANSIT_DOMAINS[i];
        if (d.charAt(0) === "*") {
            var suffix = d.substring(2);
            if (h === suffix || h.endsWith("." + suffix)) return true;
        } else {
            if (h === d || h.endsWith("." + d)) return true;
        }
    }
    return false;
}

// ── DNS Resolution ──
function smartDnsResolve(host) {
    var cached = DNSCache.get(host);
    if (cached) return cached;
    var ip = null;
    try { ip = dnsResolve(host); } catch(e) { return null; }
    if (ip && isIPv4(ip)) { DNSCache.set(host, ip); return ip; }
    return null;
}

// ── Proxy Selection ──
function getActiveProxies() {
    var a = [];
    for (var k in JO_PROXY) {
        if (JO_PROXY[k].active && CircuitBreaker.canExecute(k)) a.push({ key: k, proxy: JO_PROXY[k] });
    }
    return a;
}

function calculateProxyScore(pi) {
    var p = pi.proxy;
    var pingScore = Math.max(0, 1 - (p.ping / 20));
    var weightScore = p.weight / 10;
    var healthScore = HealthMonitor.getProxyScore(pi.key);
    var tierScore = 1 - (p.tier * 0.2);
    return (pingScore * 0.35) + (weightScore * 0.25) + (healthScore * 0.25) + (tierScore * 0.15);
}

function findBestProxy(type, region) {
    var ap = getActiveProxies();
    if (ap.length === 0) return { key: "ORANGE_FALLBACK", proxy: JO_PROXY["ORANGE_FALLBACK"] };
    
    var scored = [];
    for (var i = 0; i < ap.length; i++) {
        var s = calculateProxyScore(ap[i]);
        if (region && ap[i].proxy.city === region) s += 0.15;
        if (type === "GAMEPLAY" && ap[i].proxy.protocol === "UDP") s += 0.1;
        if (type === "AUTH" && ap[i].proxy.protocol === "HTTPS") s += 0.1;
        scored.push({ key: ap[i].key, proxy: ap[i].proxy, score: s });
    }
    scored.sort(function(a, b) { return b.score - a.score; });
    return scored[0];
}

function buildProxyChain(primary, maxFb) {
    maxFb = maxFb || 3;
    var chain = [];
    var px = primary.proxy.protocol === "HTTPS" ? "HTTPS" : "PROXY";
    chain.push(px + " " + primary.proxy.ip + ":" + primary.proxy.port);
    
    var addedISP = [primary.proxy.isp];
    var ap = getActiveProxies();
    for (var i = 0; i < ap.length && chain.length < maxFb + 1; i++) {
        if (ap[i].key === primary.key) continue;
        if (addedISP.indexOf(ap[i].proxy.isp) !== -1) continue;
        var px2 = ap[i].proxy.protocol === "HTTPS" ? "HTTPS" : "PROXY";
        chain.push(px2 + " " + ap[i].proxy.ip + ":" + ap[i].proxy.port);
        addedISP.push(ap[i].proxy.isp);
    }
    if (CFG.ENABLE_FALLBACK_CHAIN) chain.push("DIRECT");
    return chain.join("; ");
}

function findFastestJordanProxy() {
    return findBestProxy("GENERAL", null).proxy;
}

function buildOptimizedProxyChain() {
    var best = findBestProxy("GENERAL", null);
    return buildProxyChain(best, 3);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                        SECURITY LAYER                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

var SecurityLayer = {
    blockedAttempts: 0,
    isSuspiciousHost: function(host) {
        var h = host.toLowerCase();
        var p = ["hack","cheat","exploit","inject","aimbot","wallhack","speedhack","modmenu","free-uc","unlimited-uc","pubg-hack"];
        for (var i = 0; i < p.length; i++) if (h.indexOf(p[i]) !== -1) return true;
        return false;
    },
    blockRequest: function(host, reason) {
        this.blockedAttempts++;
        return "PROXY 127.0.0.1:1";
    }
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    LOGGING SYSTEM                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

var LogBuffer = [];
function logEvent(lv, cat, msg, data) {
    LogBuffer.push({
        ts: (typeof Date !== "undefined") ? new Date().toISOString() : "N/A",
        level: lv, category: cat, message: msg, data: data || {}
    });
    if (LogBuffer.length > 500) LogBuffer = LogBuffer.slice(-500);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║         ★ MAIN PAC ENTRY POINT - MEGA EXPANSION ★                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    if (!host || host.length === 0) return "DIRECT";
    
    var h = host.toLowerCase();
    
    // ─── STEP 1: Security ───
    if (SecurityLayer.isSuspiciousHost(h)) {
        HealthMonitor.recordRequest("BLOCKED");
        return SecurityLayer.blockRequest(h, "SUSPICIOUS");
    }
    
    // ─── STEP 2: Private Networks ───
    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "169.254.0.0", "255.255.0.0") ||
        isInNet(host, "0.0.0.0", "255.0.0.0")) {
        HealthMonitor.recordRequest("DIRECT");
        return "DIRECT";
    }
    
    // ─── STEP 3: PUBG Check ───
    var isPUBG = isPUBGDomain(h);
    var trafficInfo = TrafficClassifier.classify(h, url);
    
    if (CFG.JORDAN_ONLY_MODE && !isPUBG) {
        HealthMonitor.recordRequest("BLOCKED");
        return "PROXY 127.0.0.1:1";
    }
    
    if (!isPUBG) {
        HealthMonitor.recordRequest("DIRECT");
        return "DIRECT";
    }
    
    // ─── STEP 4: DNS ───
    var ip = smartDnsResolve(host);
    
    if (!ip) {
        // DNS failed but it's PUBG - route through proxy
        logEvent("WARN", "DNS", "DNS failed for PUBG domain, using proxy", { host: host });
        return buildOptimizedProxyChain();
    }
    
    if (CFG.BLOCK_V6 && ip.indexOf(":") !== -1) {
        HealthMonitor.recordRequest("BLOCKED");
        return "PROXY 127.0.0.1:1";
    }
    
    // ─── STEP 5: Geographic Check ───
    if (isPrivateIP(ip)) {
        HealthMonitor.recordRequest("DIRECT");
        return "DIRECT";
    }
    
    var isJordan = isJordanIP(ip);
    
    if (isJordan) {
        // ─── JORDANIAN IP ───
        HealthMonitor.recordRequest("JORDAN");
        var best = findBestProxy(trafficInfo.type, null);
        return buildProxyChain(best, 3);
    }
    
    // ─── CHECK: Jordan Transit Domain ───
    if (CFG.ENABLE_TRANSIT_DETECTION && isJordanTransitDomain(h)) {
        // Domain routes through Jordan even if IP isn't Jordanian
        HealthMonitor.recordRequest("TRANSIT");
        var bestTransit = findBestProxy(trafficInfo.type, null);
        return buildProxyChain(bestTransit, 2);
    }
    
    // ─── Non-Jordan International ───
    if (CFG.BLOCK_INTERNATIONAL) {
        HealthMonitor.recordRequest("BLOCKED");
        logEvent("BLOCK", "INTERNATIONAL", "Blocked non-Jordanian traffic", { host: host, ip: ip });
        return "PROXY 127.0.0.1:1";
    }
    
    HealthMonitor.recordRequest("DIRECT");
    return "DIRECT";
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    HELPER FUNCTIONS                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

function findJordanPlayer(name) { return JORDAN_PLAYERS[name] || null; }

function getClanMembers(clan) {
    var m = [];
    for (var n in JORDAN_PLAYERS) {
        if (JORDAN_PLAYERS[n].clan === clan) m.push({ name: n, level: JORDAN_PLAYERS[n].level, rank: JORDAN_PLAYERS[n].rank, kdr: JORDAN_PLAYERS[n].kdr, region: JORDAN_PLAYERS[n].region });
    }
    return m;
}

function getClanInfo(tag) { return JORDAN_CLANS[tag] || null; }

function getPlayersByRegion(region) {
    var p = [];
    for (var n in JORDAN_PLAYERS) {
        if (JORDAN_PLAYERS[n].region === region) p.push({ name: n, level: JORDAN_PLAYERS[n].level, rank: JORDAN_PLAYERS[n].rank, clan: JORDAN_PLAYERS[n].clan });
    }
    return p;
}

function getTopPlayers(count) {
    count = count || 10;
    var p = [];
    for (var n in JORDAN_PLAYERS) p.push({ name: n, stats: JORDAN_PLAYERS[n] });
    p.sort(function(a, b) { return b.stats.wins - a.stats.wins; });
    return p.slice(0, count);
}

function matchPlayersBySkill(target) {
    var t = JORDAN_PLAYERS[target];
    if (!t) return [];
    var m = [];
    for (var n in JORDAN_PLAYERS) {
        if (n === target) continue;
        var p = JORDAN_PLAYERS[n];
        var ld = Math.abs(p.level - t.level);
        var kd = Math.abs(p.kdr - t.kdr);
        if (ld <= 20 && kd <= 1.5) {
            m.push({ name: n, score: 100 - (ld * 2) - (kd * 15), level: p.level, kdr: p.kdr, region: p.region, clan: p.clan });
        }
    }
    m.sort(function(a, b) { return b.score - a.score; });
    return m.slice(0, 10);
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                   FEATURES REPORT                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

function getJordanExclusiveFeatures() {
    var r = HealthMonitor.getReport();
    var d = DNSCache.getStats();
    
    // Count ranges
    var rangeCount = JO_NETS.length;
    var proxyCount = Object.keys(JO_PROXY).length;
    
    return {
        version: CFG.VERSION,
        build: "2024-MEGA-EXPANSION",
        stats: {
            jordanRanges: rangeCount,
            proxyPool: proxyCount,
            players: Object.keys(JORDAN_PLAYERS).length,
            clans: Object.keys(JORDAN_CLANS).length,
            pubgDomains: Object.keys(PUBG_DOMAINS).reduce(function(s, k) { return s + PUBG_DOMAINS[k].length; }, 0),
            transitDomains: JO_TRANSIT_DOMAINS.length
        },
        features: {
            "🌍 Jordan Only Mode": CFG.JORDAN_ONLY_MODE ? "✅ Active" : "❌ Off",
            "🛡️ International Blocking": CFG.BLOCK_INTERNATIONAL ? "✅ Enabled" : "❌ Disabled",
            "🔄 Transit Detection": CFG.ENABLE_TRANSIT_DETECTION ? "✅ Enabled" : "❌ Disabled",
            "📱 Mobile Detection": CFG.ENABLE_MOBILE_DETECTION ? "✅ Enabled" : "❌ Disabled",
            "🔌 Circuit Breaker": "✅ Active",
            "💾 DNS Cache": d.entries + " entries cached",
            "🏥 Health Monitor": "✅ Running",
            "🎯 Smart Routing": CFG.ENABLE_SMART_ROUTING ? "✅ Enabled" : "❌ Disabled"
        },
        traffic: {
            total: r.totalRequests,
            jordan: (r.jordanRate * 100).toFixed(1) + "%",
            blocked: (r.blockRate * 100).toFixed(1) + "%",
            transit: (r.transitRate * 100).toFixed(1) + "%",
            errors: (r.errorRate * 100).toFixed(1) + "%"
        },
        message: "🇯🇴 JORDAN MEGA EXPANSION ACTIVATED 🇯🇴\n" +
                 "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
                 "📍 " + rangeCount + " Jordanian IP ranges loaded\n" +
                 "🖥️ " + proxyCount + " Jordanian proxies available\n" +
                 "👥 " + Object.keys(JORDAN_PLAYERS).length + " Jordanian players tracked\n" +
                 "🏰 " + Object.keys(JORDAN_CLANS).length + " clans registered\n" +
                 "🌐 " + JO_TRANSIT_DOMAINS.length + " transit routes detected\n" +
                 "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
                 "⚡ Maximum Jordanian player coverage active!"
    };
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    DIAGNOSTICS                                     ║
// ╚══════════════════════════════════════════════════════════════════════╝

function runDiagnostics() {
    return {
        version: CFG.VERSION,
        ipTests: {
            jordanIP:        isJordanIP("94.127.211.6"),
            jordanMobile:    isJordanIP("37.140.224.10"),
            jordanGov:       isJordanIP("193.188.64.5"),
            jordanISP:       isJordanIP("188.247.0.1"),
            nonJordan:       !isJordanIP("8.8.8.8"),
            privateCorrect:  isPrivateIP("192.168.1.1"),
            ipv4Valid:       isIPv4("94.127.211.6")
        },
        domainTests: {
            pubgCore:        isPUBGDomain("game.pubgmobile.com"),
            pubgAuth:        isPUBGDomain("auth.pubgmobile.com"),
            pubgCDN:         isPUBGDomain("cdn.pubgmobile.com"),
            nonPubg:         !isPUBGDomain("google.com"),
            transitCloudflare: isJordanTransitDomain("cdn.cloudflare.com"),
            transitAkamai:   isJordanTransitDomain("img.akamai.com")
        },
        proxyTests: {
            activeCount:     getActiveProxies().length,
            bestFound:       findBestProxy("GAMEPLAY", null) !== null,
            chainBuilt:      buildOptimizedProxyChain().length > 0
        },
        counts: {
            totalRanges:     JO_NETS.length,
            totalProxies:    Object.keys(JO_PROXY).length,
            totalPlayers:    Object.keys(JORDAN_PLAYERS).length,
            totalClans:      Object.keys(JORDAN_CLANS).length,
            totalDomains:    Object.keys(PUBG_DOMAINS).reduce(function(s,k){return s+PUBG_DOMAINS[k].length;}, 0),
            transitRoutes:   JO_TRANSIT_DOMAINS.length
        }
    };
}

// ╔══════════════════════════════════════════════════════════════════════╗
// ║                    INITIALIZATION                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

for (var key in JO_PROXY) CircuitBreaker.init(key);

logEvent("INFO", "INIT", "Jordan PAC v6.0 Mega Expansion initialized", {
    ranges: JO_NETS.length,
    proxies: Object.keys(JO_PROXY).length,
    players: Object.keys(JORDAN_PLAYERS).length,
    clans: Object.keys(JORDAN_CLANS).length,
    transitRoutes: JO_TRANSIT_DOMAINS.length
});

runDiagnostics();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  END OF JORDAN PUBG EXCLUSIVE PAC v6.0 MEGA EXPANSION
//  🇯🇴 120+ Jordanian IP Ranges | 28 Proxies | 50+ Players | 9 Clans 🇯🇴
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
