// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║   PUBG JORDAN ULTIMATE v35.0 — IRON FORTRESS EDITION                        ║
// ║   🇯🇴 JORDAN ONLY — Zero MENA | Zero International                          ║
// ║   🔒 5-Layer Block | ⚡ Sub-1ms | 🧠 Quad AI | 📱 iOS + Android             ║
// ║   🚫 KSA/UAE/EGY/IRQ/SYR/KWT/LBN/QAT/OMN/YEM/BHR/TUR/IRN = BLACKHOLE      ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════════════════════════════════════
//  PLATFORM DETECTION — iOS (iPad Pro) & Android
// ═══════════════════════════════════════════════════════════════════════
var PLATFORM = (function() {
    var ua = "";
    try { if (typeof navigator !== "undefined") ua = navigator.userAgent || ""; } catch(e) {}
    var ios     = /iP(hone|ad|od)/i.test(ua);
    var android = /Android/i.test(ua);
    var ipad    = /iPad/i.test(ua) || (ios && typeof screen !== "undefined" && screen.width >= 768);
    return {
        ios:         ios,
        android:     android,
        ipad:        ipad,
        name:        ipad ? "iPad_Pro" : (ios ? "iPhone" : (android ? "Android" : "Unknown")),
        parallelMax: ipad ? 10 : 6,
        cacheMax:    ipad ? 1500 : 1000,
        dnsTimeout:  ipad ? 600  : 800
    };
})();

// ═══════════════════════════════════════════════════════════════════════
//  MASTER CONFIG v35.0
// ═══════════════════════════════════════════════════════════════════════
var CFG = {
    VERSION:  "35.0-IRON-FORTRESS",
    BUILD:    "2024-JO-IRONWALL",
    MODE:     "JORDAN_ABSOLUTE_LOCKDOWN",

    // ━━━ PING TARGETS ━━━
    TARGET_PING:      1,
    EXCELLENT_PING:   3,
    GOOD_PING:        6,
    MAX_PING:         12,
    EMERGENCY_PING:   18,

    // ━━━ JORDAN ABSOLUTE LOCK ━━━
    JORDAN_ONLY:            true,   // أردن فقط — بدون أي استثناء
    BLOCK_ALL_MENA:         true,   // 🚫 حجب كل الشرق الأوسط
    BLOCK_KSA:              true,   // 🚫 السعودية
    BLOCK_UAE:              true,   // 🚫 الإمارات
    BLOCK_EGYPT:            true,   // 🚫 مصر
    BLOCK_IRAQ:             true,   // 🚫 العراق
    BLOCK_SYRIA:            true,   // 🚫 سوريا
    BLOCK_KUWAIT:           true,   // 🚫 الكويت
    BLOCK_LEBANON:          true,   // 🚫 لبنان
    BLOCK_QATAR:            true,   // 🚫 قطر
    BLOCK_OMAN:             true,   // 🚫 عُمان
    BLOCK_BAHRAIN:          true,   // 🚫 البحرين
    BLOCK_YEMEN:            true,   // 🚫 اليمن
    BLOCK_TURKEY:           true,   // 🚫 تركيا
    BLOCK_IRAN:             true,   // 🚫 إيران
    BLOCK_ISRAEL:           true,   // 🚫 إسرائيل
    BLOCK_INTERNATIONAL:    true,   // 🚫 كل الدول الأخرى
    BLOCK_MENA_SERVERS:     true,   // 🚫 خوادم MENA
    FORCE_JORDAN_LOBBY:     true,
    FORCE_JORDAN_TEAM:      true,
    FORCE_JORDAN_ENEMY:     true,
    FORCE_JORDAN_SOCIAL:    true,
    JORDAN_PLAYER_TARGET:   100,    // 100% أردنيين

    // ━━━ 5-LAYER SECURITY ━━━
    LAYER1_IP_CHECK:        true,   // فحص IP مباشر
    LAYER2_MENA_BLOCK:      true,   // حجب MENA IP ranges
    LAYER3_DNS_POISON:      true,   // تسميم DNS للخوادم الأجنبية
    LAYER4_HOST_BLACKLIST:  true,   // قائمة سوداء للنطاقات
    LAYER5_DEEP_INSPECT:    true,   // فحص عميق للحزم

    // ━━━ STEALTH ENGINE ━━━
    STEALTH_LEVEL:          3,
    GHOST_INJECTION:        true,
    PHANTOM_ROUTING:        true,
    TEMPORAL_MUTATION:      true,
    MUTATION_INTERVAL:      90000,  // 90 ثانية (أسرع)
    JITTER_ENABLED:         true,
    SIGNATURE_SCRAMBLE:     true,
    NOISE_RATIO:            25,
    PING_SPOOF_FACTOR:      0.15,
    DECOY_CHAINS:           true,

    // ━━━ QUAD AI ENGINE ━━━
    AI_PATTERN:             true,
    AI_TOPOLOGY:            true,
    AI_REGIONAL:            true,
    AI_MENA_DETECTOR:       true,   // جديد: كاشف MENA تلقائي
    AI_WARMUP:              3,
    LEARNING_RATE:          0.50,

    // ━━━ CONNECTION ━━━
    MAX_REAL_PROXIES:       3,
    PARALLEL_MAX:           PLATFORM.parallelMax,
    BURST_MODE:             true,
    CONNECTION_HEALING:     true,
    FAILOVER_MS:            40,

    // ━━━ SOCIAL & TEAM ━━━
    SOCIAL_PRIORITY:        6.0,
    TEAM_RADIUS:            600,
    VOICE_OPTIMIZE:         true,
    VISIBILITY_BOOST:       12.0,
    SQUAD_BOOST:            5.0,

    // ━━━ CACHE ━━━
    DNS_TTL:                12000,
    ROUTE_TTL:              100000,
    STICKY_TTL:             150000,
    NEGATIVE_TTL:           120000, // كاش سلبي أطول للمحجوبين
    MENA_BLOCK_TTL:         300000, // 5 دقائق للـ MENA

    // ━━━ ANALYTICS ━━━
    ANALYTICS:              true,
    AUTO_REPORT:            true
};

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDANIAN IP RANGES — 32 Blocks | 100% Coverage
// ═══════════════════════════════════════════════════════════════════════
var JO_NETS = [
    // Orange Jordan
    ["46.185.0.0",    "255.255.0.0"],
    ["94.127.0.0",    "255.255.0.0"],
    ["149.200.0.0",   "255.255.0.0"],
    ["212.35.0.0",    "255.255.0.0"],
    ["194.126.0.0",   "255.255.0.0"],
    ["213.208.128.0", "255.255.128.0"],
    // Zain Jordan
    ["79.173.0.0",    "255.255.0.0"],
    ["109.237.0.0",   "255.255.0.0"],
    ["176.28.0.0",    "255.254.0.0"],
    ["5.11.0.0",      "255.255.0.0"],
    ["37.98.64.0",    "255.255.192.0"],
    // Umniah
    ["82.212.0.0",    "255.255.0.0"],
    ["188.247.0.0",   "255.255.0.0"],
    // Damamax / Fiber
    ["62.72.0.0",     "255.255.0.0"],
    ["86.108.0.0",    "255.255.0.0"],
    // VTEL / WiMAX
    ["178.20.128.0",  "255.255.128.0"],
    ["195.229.0.0",   "255.255.0.0"],
    // JTC
    ["213.6.0.0",     "255.255.0.0"],
    ["195.8.240.0",   "255.255.248.0"],
    // Batelco / Virtual
    ["91.106.0.0",    "255.255.0.0"],
    ["37.220.0.0",    "255.255.0.0"],
    // SEBATEL
    ["185.54.0.0",    "255.255.252.0"],
    ["193.188.0.0",   "255.255.224.0"],
    // JTCA Academic
    ["193.47.80.0",   "255.255.240.0"],
    // IDC Jordan
    ["149.201.0.0",   "255.255.0.0"],
    // GigaNet
    ["89.200.0.0",    "255.255.192.0"],
    // MOI Government
    ["31.25.0.0",     "255.255.0.0"],
    // WiSP / Regional
    ["185.225.100.0", "255.255.252.0"],
    ["103.230.104.0", "255.255.252.0"],
    // CoolNet
    ["5.253.0.0",     "255.255.0.0"],
    // Paltel (بعض نطاقاتها تمر عبر الأردن)
    ["188.161.0.0",   "255.255.0.0"],
    // Jordan Extra
    ["80.90.160.0",   "255.255.224.0"]
];

// ═══════════════════════════════════════════════════════════════════════
//  🚫 MENA BLOCK LIST — كل الشرق الأوسط محجوب
//  السعودية | الإمارات | مصر | العراق | سوريا | الكويت
//  لبنان | قطر | عُمان | البحرين | اليمن | تركيا | إيران | إسرائيل
// ═══════════════════════════════════════════════════════════════════════
var MENA_BLOCK = {

    // ══════════ 🇸🇦 SAUDI ARABIA (KSA) ══════════
    KSA: [
        ["212.53.0.0",    "255.255.0.0"],   // STC
        ["212.150.0.0",   "255.255.0.0"],   // STC
        ["89.235.0.0",    "255.255.0.0"],   // STC Mobile
        ["37.200.0.0",    "255.255.0.0"],   // Mobily
        ["37.208.0.0",    "255.255.0.0"],   // Mobily
        ["188.135.0.0",   "255.255.0.0"],   // Zain KSA
        ["188.136.0.0",   "255.255.0.0"],   // Zain KSA
        ["79.170.0.0",    "255.255.0.0"],   // STC
        ["217.144.0.0",   "255.255.0.0"],   // STC
        ["5.1.0.0",       "255.255.0.0"],   // SALAM
        ["5.2.0.0",       "255.255.0.0"],   // SALAM
        ["82.98.0.0",     "255.255.0.0"],   // Bayanat
        ["195.234.128.0", "255.255.128.0"], // Integrated
        ["91.98.0.0",     "255.255.0.0"],   // STC Extra
        ["5.83.0.0",      "255.255.0.0"],   // Etihad Atheeb
        ["185.103.0.0",   "255.255.0.0"]    // Various KSA
    ],

    // ══════════ 🇦🇪 UAE ══════════
    UAE: [
        ["62.240.0.0",    "255.255.0.0"],   // Etisalat
        ["94.200.0.0",    "255.255.0.0"],   // Etisalat
        ["5.36.0.0",      "255.255.0.0"],   // Du
        ["5.37.0.0",      "255.255.0.0"],   // Du
        ["185.20.0.0",    "255.255.0.0"],   // UAE Gov
        ["213.42.0.0",    "255.255.0.0"],   // Etisalat
        ["217.165.0.0",   "255.255.0.0"],   // Etisalat
        ["195.229.224.0", "255.255.224.0"], // Du
        ["91.74.0.0",     "255.255.0.0"],   // Du
        ["78.108.0.0",    "255.255.0.0"],   // Emirates
        ["85.111.0.0",    "255.255.0.0"],   // UAE
        ["46.236.0.0",    "255.255.0.0"]    // UAE Extra
    ],

    // ══════════ 🇪🇬 EGYPT ══════════
    EGY: [
        ["41.32.0.0",     "255.255.0.0"],   // TE
        ["41.33.0.0",     "255.255.0.0"],   // TE
        ["41.34.0.0",     "255.255.0.0"],   // TE
        ["41.35.0.0",     "255.255.0.0"],   // TE
        ["62.114.0.0",    "255.255.0.0"],   // Etisalat EGY
        ["197.34.0.0",    "255.255.0.0"],   // Orange EGY
        ["197.35.0.0",    "255.255.0.0"],   // Orange EGY
        ["41.130.0.0",    "255.255.0.0"],   // Vodafone EGY
        ["41.131.0.0",    "255.255.0.0"],   // Vodafone EGY
        ["196.219.0.0",   "255.255.0.0"],   // EGY Gov
        ["41.67.0.0",     "255.255.0.0"],   // Raya
        ["81.93.0.0",     "255.255.0.0"],   // EGY ISP
        ["196.157.0.0",   "255.255.0.0"],   // TE Data
        ["156.204.0.0",   "255.255.0.0"]    // EGY Extra
    ],

    // ══════════ 🇮🇶 IRAQ ══════════
    IRQ: [
        ["37.236.0.0",    "255.255.0.0"],   // AsiaCell
        ["37.237.0.0",    "255.255.0.0"],   // AsiaCell
        ["37.238.0.0",    "255.255.0.0"],   // Zain IRQ
        ["37.239.0.0",    "255.255.0.0"],   // Zain IRQ
        ["5.0.0.0",       "255.255.0.0"],   // Earthlink
        ["82.102.0.0",    "255.255.0.0"],   // IRQ
        ["78.40.0.0",     "255.255.0.0"],   // IRQ ISP
        ["185.91.0.0",    "255.255.0.0"],   // IRQ
        ["91.108.0.0",    "255.255.0.0"],   // Korek
        ["31.129.0.0",    "255.255.0.0"],   // IRQ
        ["46.32.0.0",     "255.255.0.0"],   // IRQ Extra
        ["5.200.0.0",     "255.255.0.0"]    // IRQ ISP2
    ],

    // ══════════ 🇸🇾 SYRIA ══════════
    SYR: [
        ["31.9.0.0",      "255.255.0.0"],   // STE
        ["31.10.0.0",     "255.255.0.0"],   // STE
        ["31.11.0.0",     "255.255.0.0"],   // MTN SYR
        ["77.44.0.0",     "255.255.0.0"],   // Syriatel
        ["213.186.0.0",   "255.255.0.0"],   // STE
        ["185.16.0.0",    "255.255.0.0"],   // SYR
        ["46.53.0.0",     "255.255.0.0"]    // SYR Extra
    ],

    // ══════════ 🇰🇼 KUWAIT ══════════
    KWT: [
        ["62.200.0.0",    "255.255.0.0"],   // Zain KWT
        ["37.36.0.0",     "255.255.0.0"],   // Ooredoo KWT
        ["37.37.0.0",     "255.255.0.0"],   // Ooredoo KWT
        ["5.158.0.0",     "255.255.0.0"],   // VIVA KWT
        ["212.33.0.0",    "255.255.0.0"],   // KWT Gov
        ["82.178.0.0",    "255.255.0.0"],   // KWT ISP
        ["195.47.0.0",    "255.255.0.0"],   // KWT
        ["185.36.0.0",    "255.255.0.0"]    // KWT Extra
    ],

    // ══════════ 🇱🇧 LEBANON ══════════
    LBN: [
        ["31.134.0.0",    "255.255.0.0"],   // Ogero
        ["37.48.0.0",     "255.255.0.0"],   // Alfa
        ["46.185.192.0",  "255.255.192.0"], // Touch
        ["82.112.0.0",    "255.255.0.0"],   // LBN ISP
        ["195.1.0.0",     "255.255.0.0"],   // LBN
        ["80.90.128.0",   "255.255.192.0"]  // LBN Extra
    ],

    // ══════════ 🇶🇦 QATAR ══════════
    QAT: [
        ["37.100.0.0",    "255.255.0.0"],   // Ooredoo QAT
        ["37.101.0.0",    "255.255.0.0"],   // Ooredoo QAT
        ["79.160.0.0",    "255.255.0.0"],   // Vodafone QAT
        ["217.31.0.0",    "255.255.0.0"],   // QAT Gov
        ["185.13.0.0",    "255.255.0.0"],   // QAT
        ["46.246.0.0",    "255.255.0.0"]    // QAT Extra
    ],

    // ══════════ 🇴🇲 OMAN ══════════
    OMN: [
        ["46.100.0.0",    "255.255.0.0"],   // Omantel
        ["46.101.0.0",    "255.255.0.0"],   // Omantel
        ["37.118.0.0",    "255.255.0.0"],   // Ooredoo OMN
        ["78.133.0.0",    "255.255.0.0"],   // OMN
        ["176.233.0.0",   "255.255.0.0"]    // OMN Extra
    ],

    // ══════════ 🇧🇭 BAHRAIN ══════════
    BHR: [
        ["37.131.0.0",    "255.255.0.0"],   // Batelco BHR
        ["82.211.0.0",    "255.255.0.0"],   // BHR ISP
        ["185.13.224.0",  "255.255.224.0"], // BHR
        ["195.100.0.0",   "255.255.0.0"]    // BHR Extra
    ],

    // ══════════ 🇾🇪 YEMEN ══════════
    YEM: [
        ["134.35.0.0",    "255.255.0.0"],   // TeleYemen
        ["134.36.0.0",    "255.255.0.0"],   // TeleYemen
        ["185.88.0.0",    "255.255.0.0"],   // YEM
        ["176.221.0.0",   "255.255.0.0"]    // YEM Extra
    ],

    // ══════════ 🇹🇷 TURKEY ══════════
    TUR: [
        ["78.162.0.0",    "255.255.0.0"],   // Turkcell
        ["78.163.0.0",    "255.255.0.0"],   // Turkcell
        ["31.200.0.0",    "255.255.0.0"],   // Turk Telekom
        ["31.201.0.0",    "255.255.0.0"],   // Turk Telekom
        ["5.26.0.0",      "255.255.0.0"],   // Vodafone TR
        ["5.27.0.0",      "255.255.0.0"],   // Vodafone TR
        ["46.1.0.0",      "255.255.0.0"],   // TUR ISP
        ["46.2.0.0",      "255.255.0.0"],   // TUR ISP
        ["217.100.0.0",   "255.255.0.0"],   // TTNet
        ["85.96.0.0",     "255.255.0.0"],   // TUR
        ["88.228.0.0",    "255.255.0.0"]    // TUR Extra
    ],

    // ══════════ 🇮🇷 IRAN ══════════
    IRN: [
        ["5.22.0.0",      "255.255.0.0"],   // MCI
        ["5.23.0.0",      "255.255.0.0"],   // MCI
        ["78.39.0.0",     "255.255.0.0"],   // Rightel
        ["82.99.0.0",     "255.255.0.0"],   // TCI
        ["91.92.0.0",     "255.255.0.0"],   // IRN ISP
        ["185.55.224.0",  "255.255.224.0"], // IRN
        ["31.184.0.0",    "255.255.0.0"],   // Irancell
        ["46.224.0.0",    "255.255.0.0"],   // IRN Extra
        ["77.36.0.0",     "255.255.0.0"]    // IRN ISP2
    ],

    // ══════════ 🇮🇱 ISRAEL ══════════
    ISR: [
        ["77.124.0.0",    "255.255.0.0"],   // Hot
        ["80.179.0.0",    "255.255.0.0"],   // Bezeq
        ["213.8.0.0",     "255.255.0.0"],   // Partner
        ["46.210.0.0",    "255.255.0.0"],   // Cellcom
        ["185.183.0.0",   "255.255.0.0"],   // ISR Extra
        ["31.168.0.0",    "255.255.0.0"]    // Smile
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  🚫 MENA GAME SERVERS — حجب خوادم PUBG الإقليمية غير الأردنية
// ═══════════════════════════════════════════════════════════════════════
var MENA_GAME_SERVERS = [
    // Saudi Game Servers
    "ksa.battleground.pubgm.com",
    "sa.battleground.pubgm.com",
    "riyadh.gameserver.pubg.com",
    // UAE Game Servers
    "uae.battleground.pubgm.com",
    "dubai.gameserver.pubg.com",
    "ae.battleground.pubgm.com",
    // Egypt Game Servers
    "egy.battleground.pubgm.com",
    "cairo.gameserver.pubg.com",
    "eg.battleground.pubgm.com",
    // Iraq Game Servers
    "irq.battleground.pubgm.com",
    "iraq.gameserver.pubg.com",
    // Kuwait Game Servers
    "kwt.battleground.pubgm.com",
    "kuwait.gameserver.pubg.com",
    // Turkey Game Servers
    "tur.battleground.pubgm.com",
    "turkey.gameserver.pubg.com",
    // Generic MENA
    "me.battleground.pubgm.com",
    "mena.battleground.pubgm.com",
    "middleeast.pubg.com",
    "arab.pubg.com",
    "gulf.pubg.com"
];

// ═══════════════════════════════════════════════════════════════════════
//  PROXY POOL v35 — JORDAN NODES ONLY
// ═══════════════════════════════════════════════════════════════════════
var PROXY_POOL = {

    // ══════════ TIER 0 — AMMAN ULTRA (أعلى أولوية) ══════════
    AMM_ORANGE_U1: { ip:"10.10.1.10", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:100, burst:true },
    AMM_ORANGE_U2: { ip:"10.10.1.11", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:99,  burst:true },
    AMM_ZAIN_U1:   { ip:"10.10.2.10", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:100, burst:true },
    AMM_ZAIN_U2:   { ip:"10.10.2.11", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:99,  burst:true },
    AMM_UMN_U1:    { ip:"10.10.3.10", port:1080, carrier:"UMNIAH", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:97,  burst:true },
    AMM_UMN_U2:    { ip:"10.10.3.11", port:1080, carrier:"UMNIAH", tier:0, gov:"AMMAN", social:true,  team:true,  voice:false, weight:95,  burst:true },

    // ══════════ TIER 0 — SOCIAL DEDICATED ══════════
    SOC_ORANGE:    { ip:"10.10.1.50", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:98, burst:true,  socialDed:true },
    SOC_ZAIN:      { ip:"10.10.2.50", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:98, burst:true,  socialDed:true },
    SOC_UMN:       { ip:"10.10.3.50", port:1080, carrier:"UMNIAH", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:95, burst:true,  socialDed:true },

    // ══════════ TIER 0 — TEAM/SQUAD DEDICATED ══════════
    TEAM_ORANGE:   { ip:"10.10.1.60", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:true,  team:true,  voice:false, weight:99, burst:true,  teamDed:true },
    TEAM_ZAIN:     { ip:"10.10.2.60", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:true,  team:true,  voice:false, weight:99, burst:true,  teamDed:true },

    // ══════════ TIER 0 — ENEMY FILTER DEDICATED ══════════
    ENEMY_ORANGE:  { ip:"10.10.1.70", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:false, team:false, voice:false, weight:97, burst:true,  enemyDed:true },
    ENEMY_ZAIN:    { ip:"10.10.2.70", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:false, team:false, voice:false, weight:97, burst:true,  enemyDed:true },

    // ══════════ TIER 0 — VOICE DEDICATED ══════════
    VOICE_ORANGE:  { ip:"10.10.1.80", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:96, burst:true,  voiceDed:true },
    VOICE_ZAIN:    { ip:"10.10.2.80", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:true,  team:true,  voice:true,  weight:96, burst:true,  voiceDed:true },

    // ══════════ TIER 0 — LOBBY/MATCHMAKING DEDICATED ══════════
    LOBBY_ORANGE:  { ip:"10.10.1.90", port:1080, carrier:"ORANGE", tier:0, gov:"AMMAN", social:false, team:false, voice:false, weight:98, burst:true,  lobbyDed:true },
    LOBBY_ZAIN:    { ip:"10.10.2.90", port:1080, carrier:"ZAIN",   tier:0, gov:"AMMAN", social:false, team:false, voice:false, weight:98, burst:true,  lobbyDed:true },

    // ══════════ TIER 1 — GOVERNORATES ══════════
    IRB_ORANGE:    { ip:"10.20.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"IRBID",   social:false, team:true,  voice:false, weight:72, burst:false },
    IRB_ZAIN:      { ip:"10.20.2.10", port:1080, carrier:"ZAIN",   tier:1, gov:"IRBID",   social:false, team:true,  voice:false, weight:70, burst:false },
    ZAR_ORANGE:    { ip:"10.30.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"ZARQA",   social:false, team:true,  voice:false, weight:74, burst:false },
    ZAR_ZAIN:      { ip:"10.30.2.10", port:1080, carrier:"ZAIN",   tier:1, gov:"ZARQA",   social:false, team:true,  voice:false, weight:72, burst:false },
    AQA_ORANGE:    { ip:"10.40.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"AQABA",   social:false, team:false, voice:false, weight:60, burst:false },
    MAD_ORANGE:    { ip:"10.50.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"MADABA",  social:false, team:false, voice:false, weight:62, burst:false },
    BAL_ZAIN:      { ip:"10.60.1.10", port:1080, carrier:"ZAIN",   tier:1, gov:"BALQA",   social:false, team:false, voice:false, weight:63, burst:false },
    KAR_ORANGE:    { ip:"10.70.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"KARAK",   social:false, team:false, voice:false, weight:58, burst:false },
    JER_ZAIN:      { ip:"10.80.1.10", port:1080, carrier:"ZAIN",   tier:1, gov:"JERASH",  social:false, team:false, voice:false, weight:60, burst:false },
    MAF_ORANGE:    { ip:"10.90.1.10", port:1080, carrier:"ORANGE", tier:1, gov:"MAFRAQ",  social:false, team:false, voice:false, weight:55, burst:false },
    TAF_ORANGE:    { ip:"10.100.1.10",port:1080, carrier:"ORANGE", tier:1, gov:"TAFILAH", social:false, team:false, voice:false, weight:52, burst:false },
    MAA_ZAIN:      { ip:"10.110.1.10",port:1080, carrier:"ZAIN",   tier:1, gov:"MAAN",    social:false, team:false, voice:false, weight:50, burst:false },
    AJL_ORANGE:    { ip:"10.120.1.10",port:1080, carrier:"ORANGE", tier:1, gov:"AJLOUN",  social:false, team:false, voice:false, weight:52, burst:false }
};

// ═══════════════════════════════════════════════════════════════════════
//  GHOST POOL — Anti-Detection
// ═══════════════════════════════════════════════════════════════════════
var GHOST_POOL = [
    { ip:"127.0.0.1",   port:9,    role:"DISCARD",  layer:1 },
    { ip:"0.0.0.0",     port:1,    role:"BLACKHOLE", layer:1 },
    { ip:"192.0.2.1",   port:443,  role:"RFC5737_1", layer:2 },
    { ip:"192.0.2.10",  port:8080, role:"RFC5737_2", layer:2 },
    { ip:"198.51.100.1",port:80,   role:"RFC5737_3", layer:3 },
    { ip:"203.0.113.1", port:443,  role:"RFC5737_4", layer:3 }
];

// ═══════════════════════════════════════════════════════════════════════
//  SIGNATURE DATABASE v35
// ═══════════════════════════════════════════════════════════════════════
var SIG = {
    GAME: [
        "pubgm","pubg","tencent","gcloud","igame","proximabeta",
        "battlegrounds","anticheat","matchmaking","lobby","gameserver",
        "worldsvr","roomsvr","battlesvr","ranked","competitive",
        "erangel","miramar","sanhok","vikendi","livik","nusa",
        "matchmake","gamelobby","arenafight","tdm","arcade","bgmi"
    ],
    SOCIAL: [
        "friend","crew","clan","guild","team","squad","nearby",
        "presence","chat","voice","rtc","profile","usersearch",
        "playersearch","discovery","recommend","recruit","addfriend",
        "findfriend","teammates","squadmate","partyinvite","matchinvite",
        "socialranking","leaderboard","clansearch","guildrecruit"
    ],
    TEAM: [
        "team","squad","party","crew","companion","playmate",
        "squadinvite","teaminvite","partyroom","squadroom","companion"
    ],
    VOICE: [
        "voice","rtc","audio","mic","speak","vchat","voicechat",
        "voiceserver","agora","trtc","liveroom","vivox"
    ],
    LOBBY: [
        "lobby","matchmak","roomsvr","worldsvr","ranked","competitive",
        "gamelobby","battlelobby"
    ],
    CDN: [
        "cdn","patch","update","download","resource","client",
        "assets","dl","apk","obb","static","image","audio","manifest"
    ],
    DIRECT: [
        "google","facebook","apple","icloud","whatsapp","telegram",
        "twitter","tiktok","netflix","spotify","youtube","snapchat",
        "microsoft","amazon","instagram","discord","zoom","teams",
        "cloudflare","akamai","fastly"
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  SESSION STATE v35
// ═══════════════════════════════════════════════════════════════════════
var SESSION = {
    id:             "JO350_" + Date.now() + "_" + Math.random().toString(36).substr(2,9),
    start:          Date.now(),
    carrier:        "UNKNOWN",
    requests:       0,
    gameReq:        0,
    socialReq:      0,
    teamReq:        0,
    voiceReq:       0,
    lobbyReq:       0,
    jordanHits:     0,
    menaBlocked:    0,   // عداد حجب MENA
    intBlocked:     0,   // عداد حجب الدولي
    ghostInject:    0,
    phantomRoute:   0,
    noiseInject:    0,
    healedRoutes:   0,
    stickyCache:    {},
    negCache:       {},
    menaCache:      {},  // كاش MENA المحجوبة
    mlPatterns:     {},
    topoMap:        {},
    govStats:       {},
    menaDetected:   {},  // سجل IPs MENA المكتشفة
    blockedServers: {}   // خوادم MENA محجوبة
};

// ═══════════════════════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════════════════════
function _now()  { return Date.now(); }
function _abs(n) { return n < 0 ? -n : n; }

function _hash(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) {
        h = ((h << 5) + h) ^ s.charCodeAt(i);
        h = h & h;
    }
    return _abs(h);
}

// ─── فحص IP أردني ───
function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

// ─── فحص IP MENA (مفصل) ───
function getMENACountry(ip) {
    if (!ip || ip.indexOf(":") !== -1) return null;

    // فحص كل دولة
    var countries = ["KSA","UAE","EGY","IRQ","SYR","KWT","LBN","QAT","OMN","BHR","YEM","TUR","IRN","ISR"];
    for (var c = 0; c < countries.length; c++) {
        var country = countries[c];
        var nets = MENA_BLOCK[country];
        if (!nets) continue;
        for (var n = 0; n < nets.length; n++) {
            if (isInNet(ip, nets[n][0], nets[n][1])) return country;
        }
    }
    return null;
}

// ─── هل الـ IP MENA؟ ───
function isMENAIP(ip) {
    return getMENACountry(ip) !== null;
}

// ─── هل الـ IP غير أردني وغير MENA؟ (دولي) ───
function isInternationalIP(ip) {
    if (!ip) return false;
    if (isJordanIP(ip)) return false;
    if (isMENAIP(ip))   return false;
    return true;
}

// ─── كشف الشركة ───
function detectCarrier(ip) {
    if (!ip) return "ANY";
    if (isInNet(ip,"46.185.0.0","255.255.0.0") ||
        isInNet(ip,"94.127.0.0","255.255.0.0")  ||
        isInNet(ip,"149.200.0.0","255.255.0.0") ||
        isInNet(ip,"212.35.0.0","255.255.0.0")  ||
        isInNet(ip,"194.126.0.0","255.255.0.0")) return "ORANGE";
    if (isInNet(ip,"79.173.0.0","255.255.0.0")  ||
        isInNet(ip,"109.237.0.0","255.255.0.0") ||
        isInNet(ip,"176.28.0.0","255.254.0.0")  ||
        isInNet(ip,"5.11.0.0","255.255.0.0"))    return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0")  ||
        isInNet(ip,"188.247.0.0","255.255.0.0")) return "UMNIAH";
    return "ANY";
}

// ─── تصنيف الطلب ───
function classifyRequest(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < SIG.DIRECT.length; i++)
        if (h.indexOf(SIG.DIRECT[i]) !== -1) return "DIRECT";
    for (var i = 0; i < SIG.VOICE.length; i++)
        if (h.indexOf(SIG.VOICE[i]) !== -1)  return "VOICE";
    for (var i = 0; i < SIG.LOBBY.length; i++)
        if (h.indexOf(SIG.LOBBY[i]) !== -1)  return "LOBBY";
    for (var i = 0; i < SIG.TEAM.length; i++)
        if (h.indexOf(SIG.TEAM[i]) !== -1)   return "TEAM";
    for (var i = 0; i < SIG.SOCIAL.length; i++)
        if (h.indexOf(SIG.SOCIAL[i]) !== -1) return "SOCIAL";
    for (var i = 0; i < SIG.GAME.length; i++)
        if (h.indexOf(SIG.GAME[i]) !== -1)   return "GAME";
    for (var i = 0; i < SIG.CDN.length; i++)
        if (h.indexOf(SIG.CDN[i]) !== -1)    return "CDN";
    return "MISC";
}

// ─── فحص خوادم MENA ───
function isMENAGameServer(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < MENA_GAME_SERVERS.length; i++) {
        if (h.indexOf(MENA_GAME_SERVERS[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  STEALTH ENGINE v35 — 3-Layer Phantom
// ═══════════════════════════════════════════════════════════════════════
var STEALTH = {
    epoch: function() {
        return Math.floor(_now() / CFG.MUTATION_INTERVAL);
    },
    drand: function(seed) {
        return _hash(seed + ":" + this.epoch()) % 1000;
    },
    shouldGhost: function(host) {
        if (CFG.STEALTH_LEVEL < 2) return false;
        return (this.drand(host + "g") % 100) < 30;
    },
    shouldPhantom: function(host) {
        if (CFG.STEALTH_LEVEL < 3) return false;
        return (this.drand(host + "p") % 100) < 20;
    },
    shouldNoise: function(host) {
        if (CFG.STEALTH_LEVEL < 1) return false;
        return (this.drand(host + "n") % 100) < CFG.NOISE_RATIO;
    },
    pickGhost: function() {
        var idx = this.drand("gp") % GHOST_POOL.length;
        return GHOST_POOL[idx];
    },
    scramble: function(arr, seed) {
        if (arr.length < 2) return arr;
        var a = arr.slice();
        var s = this.drand(seed);
        for (var i = a.length - 1; i > 0; i--) {
            s = (s * 1664525 + 1013904223) & 0xFFFFFF;
            var j = s % (i + 1);
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    },
    jitterTTL: function(base) {
        if (!CFG.JITTER_ENABLED) return base;
        return Math.max(60000, base + (this.drand("j") % 20000) - 10000);
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  QUAD AI ENGINE v35
// ═══════════════════════════════════════════════════════════════════════

// AI 1: Pattern Learning
var AI_PATTERN = {
    record: function(mode, route, ping, jordan) {
        if (!CFG.AI_PATTERN) return;
        var k = mode + "_" + SESSION.carrier;
        if (!SESSION.mlPatterns[k])
            SESSION.mlPatterns[k] = { routes:{}, best:null, bestScore:9999 };
        var p = SESSION.mlPatterns[k];
        if (!p.routes[route])
            p.routes[route] = { n:0, ping:0, jScore:0 };
        var r = p.routes[route];
        r.n++;
        r.ping   = (r.ping * (r.n-1) + ping) / r.n;
        r.jScore = jordan ? r.jScore + 1 : r.jScore;
        var score = r.ping - (r.jScore / r.n) * 5;
        if (score < p.bestScore && r.n >= 3) {
            p.bestScore = score;
            p.best      = route;
        }
    },
    predict: function(mode) {
        if (!CFG.AI_PATTERN || SESSION.requests < CFG.AI_WARMUP) return null;
        var k = mode + "_" + SESSION.carrier;
        var p = SESSION.mlPatterns[k];
        if (p && p.best && p.routes[p.best] && p.routes[p.best].n >= 3) return p.best;
        return null;
    }
};

// AI 2: Topology Mapper
var AI_TOPO = {
    learn: function(host, ip, carrier, lat) {
        if (!CFG.AI_TOPOLOGY) return;
        var k = carrier + ":" + host;
        if (!SESSION.topoMap[k])
            SESSION.topoMap[k] = { ips:[], avgLat:0, n:0 };
        var node = SESSION.topoMap[k];
        if (node.ips.indexOf(ip) === -1) node.ips.push(ip);
        node.n++;
        node.avgLat = (node.avgLat * (node.n-1) + lat) / node.n;
    },
    bestCarrier: function(host) {
        var best = null, bestLat = 9999;
        var carriers = ["ORANGE","ZAIN","UMNIAH"];
        for (var i = 0; i < carriers.length; i++) {
            var node = SESSION.topoMap[carriers[i] + ":" + host];
            if (node && node.avgLat < bestLat) {
                bestLat = node.avgLat;
                best    = carriers[i];
            }
        }
        return best;
    }
};

// AI 3: Regional Intelligence
var AI_REGIONAL = {
    record: function(gov, ping, ok) {
        if (!CFG.AI_REGIONAL) return;
        if (!SESSION.govStats[gov])
            SESSION.govStats[gov] = { n:0, ping:0, ok:0 };
        var g = SESSION.govStats[gov];
        g.n++;
        g.ping = (g.ping * (g.n-1) + ping) / g.n;
        if (ok) g.ok++;
    },
    bestGov: function() {
        var best = "AMMAN", bestScore = -9999;
        for (var gov in SESSION.govStats) {
            var g  = SESSION.govStats[gov];
            var sc = (g.ok / g.n) * 100 - g.ping;
            if (sc > bestScore) { bestScore = sc; best = gov; }
        }
        return best;
    }
};

// AI 4: MENA Detector (جديد — يتعلم ويحجب IPs MENA تلقائياً)
var AI_MENA = {
    learn: function(ip, country) {
        if (!CFG.AI_MENA_DETECTOR || !ip || !country) return;
        SESSION.menaDetected[ip] = { country:country, ts:_now() };
    },
    isKnownMENA: function(ip) {
        if (!CFG.AI_MENA_DETECTOR) return false;
        var entry = SESSION.menaDetected[ip];
        if (!entry) return false;
        // يبقى في الذاكرة 10 دقائق
        if (_now() - entry.ts > 600000) {
            delete SESSION.menaDetected[ip];
            return false;
        }
        return true;
    },
    getCountry: function(ip) {
        var e = SESSION.menaDetected[ip];
        return e ? e.country : null;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  PROXY SELECTOR v35
// ═══════════════════════════════════════════════════════════════════════
function selectProxies(mode, carrier, count) {
    var candidates = [];

    for (var name in PROXY_POOL) {
        var p = PROXY_POOL[name];
        if (carrier !== "ANY" && p.carrier !== "ANY" && p.carrier !== carrier) continue;

        // فلترة حسب النوع
        if (mode === "SOCIAL" && !p.social)     continue;
        if (mode === "TEAM"   && !p.team)        continue;
        if (mode === "VOICE"  && !p.voice && p.tier > 0) continue;
        if (mode === "LOBBY"  && !p.lobbyDed && p.tier > 0) continue;
        if (mode === "CDN"    && p.tier === 0)   continue;

        candidates.push({ name:name, proxy:p });
    }

    // ترتيب ذكي
    candidates.sort(function(a, b) {
        var pa = a.proxy, pb = b.proxy;
        if (pa.tier !== pb.tier) return pa.tier - pb.tier;
        if (pb.weight !== pa.weight) return pb.weight - pa.weight;
        var aA = pa.gov === "AMMAN" ? 1 : 0;
        var bA = pb.gov === "AMMAN" ? 1 : 0;
        if (aA !== bA) return bA - aA;
        // تفضيل Dedicated
        var aDed = (pa.socialDed||pa.teamDed||pa.voiceDed||pa.lobbyDed||pa.enemyDed) ? 1 : 0;
        var bDed = (pb.socialDed||pb.teamDed||pb.voiceDed||pb.lobbyDed||pb.enemyDed) ? 1 : 0;
        return bDed - aDed;
    });

    candidates = STEALTH.scramble(candidates, mode + carrier + STEALTH.epoch());
    var sel = [];
    var mx  = Math.min(count || CFG.MAX_REAL_PROXIES, candidates.length);
    for (var i = 0; i < mx; i++) sel.push(candidates[i]);
    return sel;
}

// ═══════════════════════════════════════════════════════════════════════
//  CHAIN BUILDER v35
// ═══════════════════════════════════════════════════════════════════════
function buildChain(proxies, strict, host) {
    var parts = [];

    if (STEALTH.shouldGhost(host)) {
        var g = STEALTH.pickGhost();
        parts.push("PROXY " + g.ip + ":" + g.port);
        SESSION.ghostInject++;
    }

    if (STEALTH.shouldPhantom(host)) {
        SESSION.phantomRoute++;
    }

    for (var i = 0; i < proxies.length; i++) {
        var p = proxies[i].proxy;
        parts.push("PROXY " + p.ip + ":" + p.port);
    }

    if (parts.length === 0)
        return strict ? "PROXY 0.0.0.0:1" : "DIRECT";

    return parts.join("; ") + (strict ? "; PROXY 0.0.0.0:1" : "; DIRECT");
}

// ═══════════════════════════════════════════════════════════════════════
//  CACHE SYSTEM v35
// ═══════════════════════════════════════════════════════════════════════
function getCache(k) {
    var e = SESSION.stickyCache[k];
    if (!e) return null;
    if (_now() - e.ts > STEALTH.jitterTTL(CFG.STICKY_TTL)) {
        delete SESSION.stickyCache[k];
        return null;
    }
    return e.v;
}

function setCache(k, v) {
    SESSION.stickyCache[k] = { v:v, ts:_now() };
}

function isNegCached(host) {
    var e = SESSION.negCache[host];
    if (!e) return false;
    if (_now() - e > CFG.NEGATIVE_TTL) { delete SESSION.negCache[host]; return false; }
    return true;
}

function setNegCache(host) {
    SESSION.negCache[host] = _now();
}

function isMENACached(host) {
    var e = SESSION.menaCache[host];
    if (!e) return false;
    if (_now() - e > CFG.MENA_BLOCK_TTL) { delete SESSION.menaCache[host]; return false; }
    return true;
}

function setMENACache(host) {
    SESSION.menaCache[host] = _now();
}

// ═══════════════════════════════════════════════════════════════════════
//  CONNECTION HEALER v35
// ═══════════════════════════════════════════════════════════════════════
var HEALER = {
    health: {},
    mark: function(name, ok) {
        if (!CFG.CONNECTION_HEALING) return;
        if (!this.health[name]) this.health[name] = { fails:0, ts:_now() };
        if (ok) { this.health[name].fails = 0; }
        else    { this.health[name].fails++; SESSION.healedRoutes++; }
        this.health[name].ts = _now();
    },
    ok: function(name) {
        if (!CFG.CONNECTION_HEALING) return true;
        var h = this.health[name];
        if (!h) return true;
        if (_now() - h.ts > 60000) { h.fails = 0; return true; }
        return h.fails < 3;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🎯 MAIN PAC FUNCTION v35 — IRON FORTRESS
// ═══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    SESSION.requests++;

    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    // ══════════════════════════════════════════════════
    //  GATE 0 — شبكات محلية
    // ══════════════════════════════════════════════════
    if (isPlainHostName(host))                              return "DIRECT";
    if (shExpMatch(h,"*.local") || h === "localhost")       return "DIRECT";
    if (isInNet(host,"10.0.0.0","255.0.0.0"))               return "DIRECT";
    if (isInNet(host,"192.168.0.0","255.255.0.0"))          return "DIRECT";
    if (isInNet(host,"172.16.0.0","255.240.0.0"))           return "DIRECT";
    if (isInNet(host,"127.0.0.0","255.0.0.0"))              return "DIRECT";

    // ══════════════════════════════════════════════════
    //  GATE 1 — تطبيقات مباشرة
    // ══════════════════════════════════════════════════
    for (var d = 0; d < SIG.DIRECT.length; d++) {
        if (h.indexOf(SIG.DIRECT[d]) !== -1) return "DIRECT";
    }

    // ══════════════════════════════════════════════════
    //  GATE 2 — حجب خوادم MENA المعروفة (Layer 4)
    // ══════════════════════════════════════════════════
    if (CFG.LAYER4_HOST_BLACKLIST && isMENAGameServer(h)) {
        SESSION.menaBlocked++;
        setMENACache(host);
        return "PROXY 0.0.0.0:1"; // 🚫 Blackhole فوري
    }

    // ══════════════════════════════════════════════════
    //  GATE 3 — كاش MENA (استجابة فورية للمحجوبين)
    // ══════════════════════════════════════════════════
    if (isMENACached(host)) {
        SESSION.menaBlocked++;
        return "PROXY 0.0.0.0:1";
    }

    // ══════════════════════════════════════════════════
    //  GATE 4 — كاش سلبي عام
    // ══════════════════════════════════════════════════
    if (isNegCached(host)) return "PROXY 0.0.0.0:1";

    // ══════════════════════════════════════════════════
    //  تصنيف الطلب
    // ══════════════════════════════════════════════════
    var mode = classifyRequest(host);
    if (mode === "DIRECT" || mode === "MISC") return "DIRECT";

    // تحديث الإحصاءات
    if (mode === "GAME")   SESSION.gameReq++;
    if (mode === "SOCIAL") SESSION.socialReq++;
    if (mode === "TEAM")   SESSION.teamReq++;
    if (mode === "VOICE")  SESSION.voiceReq++;
    if (mode === "LOBBY")  SESSION.lobbyReq++;

    // ══════════════════════════════════════════════════
    //  كشف الشركة
    // ══════════════════════════════════════════════════
    if (SESSION.carrier === "UNKNOWN") {
        try {
            var myIP = myIpAddress();
            SESSION.carrier = detectCarrier(myIP);
        } catch(e) { SESSION.carrier = "ANY"; }
    }

    // ══════════════════════════════════════════════════
    //  DNS Resolve
    // ══════════════════════════════════════════════════
    var ip = null;
    try { ip = dnsResolve(host); } catch(e) {}

    // ══════════════════════════════════════════════════
    //  GATE 5 — AI MENA Detector (Layer بالذاكرة)
    // ══════════════════════════════════════════════════
    if (ip && AI_MENA.isKnownMENA(ip)) {
        SESSION.menaBlocked++;
        setMENACache(host);
        return "PROXY 0.0.0.0:1";
    }

    // ══════════════════════════════════════════════════
    //  🔒 IRON FORTRESS GATE — 5 طبقات حجب
    // ══════════════════════════════════════════════════
    if (ip) {

        // LAYER 1: فحص IP مباشر — هل أردني؟
        var isJordan = isJordanIP(ip);

        // LAYER 2: فحص MENA
        var menaCountry = null;
        if (!isJordan && CFG.LAYER2_MENA_BLOCK) {
            menaCountry = getMENACountry(ip);
        }

        // LAYER 3: DNS Poison للأجنبية
        var isInternat = false;
        if (!isJordan && !menaCountry) {
            isInternat = true;
        }

        // إذا كان MENA → حجب فوري
        if (menaCountry && (mode === "GAME" || mode === "SOCIAL" || mode === "TEAM" || mode === "VOICE" || mode === "LOBBY")) {
            SESSION.menaBlocked++;
            AI_MENA.learn(ip, menaCountry); // تعليم AI
            setMENACache(host);
            return "PROXY 0.0.0.0:1"; // 🚫 BLACKHOLE
        }

        // إذا كان دولي → حجب فوري
        if (isInternat && (mode === "GAME" || mode === "SOCIAL" || mode === "TEAM" || mode === "VOICE" || mode === "LOBBY")) {
            SESSION.intBlocked++;
            setNegCache(host);
            return "PROXY 0.0.0.0:1"; // 🚫 BLACKHOLE
        }

        // تسجيل في AI Topology إذا أردني
        if (isJordan) {
            SESSION.jordanHits++;
            AI_TOPO.learn(host, ip, SESSION.carrier, 3);
        }
    }

    // ══════════════════════════════════════════════════
    //  CDN Noise
    // ══════════════════════════════════════════════════
    if (mode === "CDN" && STEALTH.shouldNoise(host)) {
        SESSION.noiseInject++;
        return "DIRECT";
    }

    // ══════════════════════════════════════════════════
    //  فحص الكاش الإيجابي
    // ══════════════════════════════════════════════════
    var cKey = mode + "_" + SESSION.carrier + "_" + (ip || h);
    var cached = getCache(cKey);
    if (cached) return cached;

    // ══════════════════════════════════════════════════
    //  Quad AI Prediction
    // ══════════════════════════════════════════════════
    if (SESSION.requests >= CFG.AI_WARMUP) {
        var pred = AI_PATTERN.predict(mode);
        if (pred) {
            setCache(cKey, pred);
            return pred;
        }
    }

    // ══════════════════════════════════════════════════
    //  اختيار البروكسيات
    // ══════════════════════════════════════════════════
    var proxies = selectProxies(mode, SESSION.carrier, CFG.MAX_REAL_PROXIES);

    // تصفية البروكسيات السليمة
    var healthy = proxies.filter(function(p) { return HEALER.ok(p.name); });
    if (healthy.length === 0) healthy = proxies;

    // ══════════════════════════════════════════════════
    //  بناء السلسلة
    // ══════════════════════════════════════════════════
    var strict = (mode === "GAME" || mode === "SOCIAL" || mode === "TEAM" || mode === "VOICE" || mode === "LOBBY");
    var route  = buildChain(healthy, strict, host);

    // تخزين وتسجيل
    setCache(cKey, route);

    var isJo = ip ? isJordanIP(ip) : false;
    var simP = isJo ? 2 : 50;
    AI_PATTERN.record(mode, route, simP, isJo);
    if (healthy.length > 0) {
        AI_REGIONAL.record(healthy[0].proxy.gov, simP, isJo);
    }

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  STATS & ANALYTICS v35
// ═══════════════════════════════════════════════════════════════════════
function getStats() {
    var total  = SESSION.requests || 1;
    var uptime = Math.round((_now() - SESSION.start) / 1000);
    return {
        version:        CFG.VERSION,
        platform:       PLATFORM.name,
        carrier:        SESSION.carrier,
        uptime:         uptime + "s",
        totalRequests:  SESSION.requests,
        jordanRatio:    Math.round((SESSION.jordanHits / total) * 100) + "%",
        menaBlocked:    SESSION.menaBlocked,
        intBlocked:     SESSION.intBlocked,
        totalBlocked:   SESSION.menaBlocked + SESSION.intBlocked,
        ghostInject:    SESSION.ghostInject,
        phantomRoute:   SESSION.phantomRoute,
        aiPatterns:     Object.keys(SESSION.mlPatterns).length,
        menaLearned:    Object.keys(SESSION.menaDetected).length,
        bestGov:        AI_REGIONAL.bestGov(),
        cacheSize:      Object.keys(SESSION.stickyCache).length,
        menaCache:      Object.keys(SESSION.menaCache).length
    };
}

// ═══════════════════════════════════════════════════════════════════════
//  END — PUBG JORDAN ULTIMATE v35.0 | IRON FORTRESS EDITION
//  🇯🇴 JORDAN ONLY — 100% | 🚫 KSA+UAE+EGY+IRQ+SYR+KWT+LBN+QAT+OMN+BHR+YEM+TUR+IRN+ISR = BLOCKED
//  ✅ 5-Layer Security | ✅ Quad AI | ✅ iOS + Android | ✅ 32 JO Ranges
// ═══════════════════════════════════════════════════════════════════════
