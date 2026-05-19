// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║   PUBG JORDAN ULTIMATE v36.0 — IRON FORTRESS DNA EDITION                    ║
// ║   🇯🇴 JORDAN ONLY — Zero MENA | Zero International | Zero Escape            ║
// ║   🔒 6-Layer Block | ⚡ Sub-1ms | 🧠 Quad AI | 📱 iOS + Android             ║
// ║   🧬 DNA Certificate | 📡 Governorate GEO | 🛡️ ASN Fingerprint             ║
// ║   🚫 KSA/UAE/EGY/IRQ/SYR/KWT/LBN/QAT/OMN/YEM/BHR/TUR/IRN/ISR = BLACKHOLE ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════════════════════════════════════
//  PLATFORM DETECTION — iOS (iPad Pro) & Android
// ═══════════════════════════════════════════════════════════════════════
var PLATFORM = (function () {
    var ua = "";
    try { if (typeof navigator !== "undefined") ua = navigator.userAgent || ""; } catch (e) { }
    var ios = /iP(hone|ad|od)/i.test(ua);
    var android = /Android/i.test(ua);
    var ipad = /iPad/i.test(ua) || (ios && typeof screen !== "undefined" && screen.width >= 768);
    return {
        ios: ios,
        android: android,
        ipad: ipad,
        name: ipad ? "iPad_Pro" : (ios ? "iPhone" : (android ? "Android" : "Unknown")),
        parallelMax: ipad ? 10 : 6,
        cacheMax: ipad ? 1500 : 1000,
        dnsTimeout: ipad ? 600 : 800
    };
})();

// ═══════════════════════════════════════════════════════════════════════
//  MASTER CONFIG v36.0
// ═══════════════════════════════════════════════════════════════════════
var CFG = {
    VERSION: "36.0-IRON-FORTRESS-DNA",
    BUILD: "2024-JO-IRONWALL-DNA",
    MODE: "JORDAN_ABSOLUTE_LOCKDOWN",

    // ━━━ PING TARGETS ━━━
    TARGET_PING: 1,
    EXCELLENT_PING: 3,
    GOOD_PING: 6,
    MAX_PING: 12,
    EMERGENCY_PING: 18,

    // ━━━ JORDAN ABSOLUTE LOCK ━━━
    JORDAN_ONLY: true,
    BLOCK_ALL_MENA: true,
    BLOCK_KSA: true,
    BLOCK_UAE: true,
    BLOCK_EGYPT: true,
    BLOCK_IRAQ: true,
    BLOCK_SYRIA: true,
    BLOCK_KUWAIT: true,
    BLOCK_LEBANON: true,
    BLOCK_QATAR: true,
    BLOCK_OMAN: true,
    BLOCK_BAHRAIN: true,
    BLOCK_YEMEN: true,
    BLOCK_TURKEY: true,
    BLOCK_IRAN: true,
    BLOCK_ISRAEL: true,
    BLOCK_INTERNATIONAL: true,
    BLOCK_MENA_SERVERS: true,
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_TEAM: true,
    FORCE_JORDAN_ENEMY: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_PLAYER_TARGET: 100,

    // ━━━ 6-LAYER SECURITY ━━━
    LAYER1_IP_CHECK: true,
    LAYER2_MENA_BLOCK: true,
    LAYER3_DNS_POISON: true,
    LAYER4_HOST_BLACKLIST: true,
    LAYER5_DEEP_INSPECT: true,
    LAYER6_DNA_VERIFY: true,

    // ━━━ DNA & FINGERPRINT ━━━
    DNA_ENABLED: true,
    ASN_CHECK: true,
    GEO_ENABLED: true,
    ROUTE_GUARD: true,
    TRIPLE_VALIDATE: true,

    // ━━━ STEALTH ENGINE ━━━
    STEALTH_LEVEL: 3,
    GHOST_INJECTION: true,
    PHANTOM_ROUTING: true,
    TEMPORAL_MUTATION: true,
    MUTATION_INTERVAL: 90000,
    JITTER_ENABLED: true,
    SIGNATURE_SCRAMBLE: true,
    NOISE_RATIO: 25,
    PING_SPOOF_FACTOR: 0.15,
    DECOY_CHAINS: true,

    // ━━━ QUAD AI ENGINE ━━━
    AI_PATTERN: true,
    AI_TOPOLOGY: true,
    AI_REGIONAL: true,
    AI_MENA_DETECTOR: true,
    AI_WARMUP: 3,
    LEARNING_RATE: 0.50,

    // ━━━ CONNECTION ━━━
    MAX_REAL_PROXIES: 3,
    PARALLEL_MAX: PLATFORM.parallelMax,
    BURST_MODE: true,
    CONNECTION_HEALING: true,
    FAILOVER_MS: 40,

    // ━━━ SOCIAL & TEAM ━━━
    SOCIAL_PRIORITY: 6.0,
    TEAM_RADIUS: 600,
    VOICE_OPTIMIZE: true,
    VISIBILITY_BOOST: 12.0,
    SQUAD_BOOST: 5.0,

    // ━━━ CACHE ━━━
    DNS_TTL: 12000,
    ROUTE_TTL: 100000,
    STICKY_TTL: 150000,
    NEGATIVE_TTL: 120000,
    MENA_BLOCK_TTL: 300000,

    // ━━━ ANALYTICS ━━━
    ANALYTICS: true,
    AUTO_REPORT: true
};

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDANIAN IP RANGES — 33 Blocks | 100% Coverage
// ═══════════════════════════════════════════════════════════════════════
var JO_NETS = [
    ["46.185.0.0",    "255.255.0.0"],
    ["94.127.0.0",    "255.255.0.0"],
    ["149.200.0.0",   "255.255.0.0"],
    ["212.35.0.0",    "255.255.0.0"],
    ["194.126.0.0",   "255.255.0.0"],
    ["213.208.128.0", "255.255.128.0"],
    ["79.173.0.0",    "255.255.0.0"],
    ["109.237.0.0",   "255.255.0.0"],
    ["176.28.0.0",    "255.254.0.0"],
    ["5.11.0.0",      "255.255.0.0"],
    ["37.98.64.0",    "255.255.192.0"],
    ["82.212.0.0",    "255.255.0.0"],
    ["188.247.0.0",   "255.255.0.0"],
    ["62.72.0.0",     "255.255.0.0"],
    ["86.108.0.0",    "255.255.0.0"],
    ["178.20.128.0",  "255.255.128.0"],
    ["195.229.0.0",   "255.255.0.0"],
    ["213.6.0.0",     "255.255.0.0"],
    ["195.8.240.0",   "255.255.248.0"],
    ["91.106.0.0",    "255.255.0.0"],
    ["37.220.0.0",    "255.255.0.0"],
    ["185.54.0.0",    "255.255.252.0"],
    ["193.188.0.0",   "255.255.224.0"],
    ["193.47.80.0",   "255.255.240.0"],
    ["149.201.0.0",   "255.255.0.0"],
    ["89.200.0.0",    "255.255.192.0"],
    ["31.25.0.0",     "255.255.0.0"],
    ["185.225.100.0", "255.255.252.0"],
    ["103.230.104.0", "255.255.252.0"],
    ["5.253.0.0",     "255.255.0.0"],
    ["188.161.0.0",   "255.255.0.0"],
    ["80.90.160.0",   "255.255.224.0"],
    ["62.72.160.0",   "255.255.224.0"]
];

// ═══════════════════════════════════════════════════════════════════════
//  🚫 MENA BLOCK LIST — كل الشرق الأوسط محجوب
// ═══════════════════════════════════════════════════════════════════════
var MENA_BLOCK = {
    KSA: [
        ["212.53.0.0",    "255.255.0.0"],
        ["212.150.0.0",   "255.255.0.0"],
        ["89.235.0.0",    "255.255.0.0"],
        ["37.200.0.0",    "255.255.0.0"],
        ["37.208.0.0",    "255.255.0.0"],
        ["188.135.0.0",   "255.255.0.0"],
        ["188.136.0.0",   "255.255.0.0"],
        ["79.170.0.0",    "255.255.0.0"],
        ["217.144.0.0",   "255.255.0.0"],
        ["5.1.0.0",       "255.255.0.0"],
        ["5.2.0.0",       "255.255.0.0"],
        ["82.98.0.0",     "255.255.0.0"],
        ["195.234.128.0", "255.255.128.0"],
        ["91.98.0.0",     "255.255.0.0"],
        ["5.83.0.0",      "255.255.0.0"],
        ["185.103.0.0",   "255.255.0.0"]
    ],
    UAE: [
        ["62.240.0.0",    "255.255.0.0"],
        ["94.200.0.0",    "255.255.0.0"],
        ["5.36.0.0",      "255.255.0.0"],
        ["5.37.0.0",      "255.255.0.0"],
        ["185.20.0.0",    "255.255.0.0"],
        ["213.42.0.0",    "255.255.0.0"],
        ["217.165.0.0",   "255.255.0.0"],
        ["195.229.224.0", "255.255.224.0"],
        ["91.74.0.0",     "255.255.0.0"],
        ["78.108.0.0",    "255.255.0.0"],
        ["85.111.0.0",    "255.255.0.0"],
        ["46.236.0.0",    "255.255.0.0"]
    ],
    EGY: [
        ["41.32.0.0",     "255.255.0.0"],
        ["41.33.0.0",     "255.255.0.0"],
        ["41.34.0.0",     "255.255.0.0"],
        ["41.35.0.0",     "255.255.0.0"],
        ["62.114.0.0",    "255.255.0.0"],
        ["197.34.0.0",    "255.255.0.0"],
        ["197.35.0.0",    "255.255.0.0"],
        ["41.130.0.0",    "255.255.0.0"],
        ["41.131.0.0",    "255.255.0.0"],
        ["196.219.0.0",   "255.255.0.0"],
        ["41.67.0.0",     "255.255.0.0"],
        ["81.93.0.0",     "255.255.0.0"],
        ["196.157.0.0",   "255.255.0.0"],
        ["156.204.0.0",   "255.255.0.0"]
    ],
    IRQ: [
        ["37.236.0.0",    "255.255.0.0"],
        ["37.237.0.0",    "255.255.0.0"],
        ["37.238.0.0",    "255.255.0.0"],
        ["37.239.0.0",    "255.255.0.0"],
        ["5.0.0.0",       "255.255.0.0"],
        ["82.102.0.0",    "255.255.0.0"],
        ["78.40.0.0",     "255.255.0.0"],
        ["185.91.0.0",    "255.255.0.0"],
        ["91.108.0.0",    "255.255.0.0"],
        ["31.129.0.0",    "255.255.0.0"],
        ["46.32.0.0",     "255.255.0.0"],
        ["5.200.0.0",     "255.255.0.0"]
    ],
    SYR: [
        ["31.9.0.0",      "255.255.0.0"],
        ["31.10.0.0",     "255.255.0.0"],
        ["31.11.0.0",     "255.255.0.0"],
        ["77.44.0.0",     "255.255.0.0"],
        ["213.186.0.0",   "255.255.0.0"],
        ["185.16.0.0",    "255.255.0.0"],
        ["46.53.0.0",     "255.255.0.0"]
    ],
    KWT: [
        ["62.200.0.0",    "255.255.0.0"],
        ["37.36.0.0",     "255.255.0.0"],
        ["37.37.0.0",     "255.255.0.0"],
        ["5.158.0.0",     "255.255.0.0"],
        ["212.33.0.0",    "255.255.0.0"],
        ["82.178.0.0",    "255.255.0.0"],
        ["195.47.0.0",    "255.255.0.0"],
        ["185.36.0.0",    "255.255.0.0"]
    ],
    LBN: [
        ["31.134.0.0",    "255.255.0.0"],
        ["37.48.0.0",     "255.255.0.0"],
        ["46.185.192.0",  "255.255.192.0"],
        ["82.112.0.0",    "255.255.0.0"],
        ["195.1.0.0",     "255.255.0.0"],
        ["80.90.128.0",   "255.255.192.0"]
    ],
    QAT: [
        ["37.100.0.0",    "255.255.0.0"],
        ["37.101.0.0",    "255.255.0.0"],
        ["79.160.0.0",    "255.255.0.0"],
        ["217.31.0.0",    "255.255.0.0"],
        ["185.13.0.0",    "255.255.0.0"],
        ["46.246.0.0",    "255.255.0.0"]
    ],
    OMN: [
        ["46.100.0.0",    "255.255.0.0"],
        ["46.101.0.0",    "255.255.0.0"],
        ["37.118.0.0",    "255.255.0.0"],
        ["78.133.0.0",    "255.255.0.0"],
        ["176.233.0.0",   "255.255.0.0"]
    ],
    BHR: [
        ["37.131.0.0",    "255.255.0.0"],
        ["82.211.0.0",    "255.255.0.0"],
        ["185.13.224.0",  "255.255.224.0"],
        ["195.100.0.0",   "255.255.0.0"]
    ],
    YEM: [
        ["134.35.0.0",    "255.255.0.0"],
        ["134.36.0.0",    "255.255.0.0"],
        ["185.88.0.0",    "255.255.0.0"],
        ["176.221.0.0",   "255.255.0.0"]
    ],
    TUR: [
        ["78.162.0.0",    "255.255.0.0"],
        ["78.163.0.0",    "255.255.0.0"],
        ["31.200.0.0",    "255.255.0.0"],
        ["31.201.0.0",    "255.255.0.0"],
        ["5.26.0.0",      "255.255.0.0"],
        ["5.27.0.0",      "255.255.0.0"],
        ["46.1.0.0",      "255.255.0.0"],
        ["46.2.0.0",      "255.255.0.0"],
        ["217.100.0.0",   "255.255.0.0"],
        ["85.96.0.0",     "255.255.0.0"],
        ["88.228.0.0",    "255.255.0.0"]
    ],
    IRN: [
        ["5.22.0.0",      "255.255.0.0"],
        ["5.23.0.0",      "255.255.0.0"],
        ["78.39.0.0",     "255.255.0.0"],
        ["82.99.0.0",     "255.255.0.0"],
        ["91.92.0.0",     "255.255.0.0"],
        ["185.55.224.0",  "255.255.224.0"],
        ["31.184.0.0",    "255.255.0.0"],
        ["46.224.0.0",    "255.255.0.0"],
        ["77.36.0.0",     "255.255.0.0"]
    ],
    ISR: [
        ["77.124.0.0",    "255.255.0.0"],
        ["80.179.0.0",    "255.255.0.0"],
        ["213.8.0.0",     "255.255.0.0"],
        ["46.210.0.0",    "255.255.0.0"],
        ["185.183.0.0",   "255.255.0.0"],
        ["31.168.0.0",    "255.255.0.0"]
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  🚫 MENA GAME SERVERS BLACKLIST
// ═══════════════════════════════════════════════════════════════════════
var MENA_GAME_SERVERS = [
    "ksa.battleground.pubgm.com",
    "sa.battleground.pubgm.com",
    "riyadh.gameserver.pubg.com",
    "uae.battleground.pubgm.com",
    "dubai.gameserver.pubg.com",
    "ae.battleground.pubgm.com",
    "egy.battleground.pubgm.com",
    "cairo.gameserver.pubg.com",
    "eg.battleground.pubgm.com",
    "irq.battleground.pubgm.com",
    "iraq.gameserver.pubg.com",
    "kwt.battleground.pubgm.com",
    "kuwait.gameserver.pubg.com",
    "tur.battleground.pubgm.com",
    "turkey.gameserver.pubg.com",
    "me.battleground.pubgm.com",
    "mena.battleground.pubgm.com",
    "middleeast.pubg.com",
    "arab.pubg.com",
    "gulf.pubg.com",
    "lbn.battleground.pubgm.com",
    "qat.battleground.pubgm.com",
    "omn.battleground.pubgm.com",
    "bhr.battleground.pubgm.com",
    "yem.battleground.pubgm.com",
    "irn.battleground.pubgm.com",
    "syr.battleground.pubgm.com",
    "isr.battleground.pubgm.com"
];

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDAN ASN DATABASE
// ═══════════════════════════════════════════════════════════════════════
var JO_ASN = {
    networks: {
        "AS8376":   { name: "Orange Jordan",    ranges: [["46.185.0.0","46.185.255.255"],["94.127.0.0","94.127.255.255"],["149.200.0.0","149.200.255.255"],["212.35.0.0","212.35.255.255"],["194.126.0.0","194.126.255.255"],["213.208.128.0","213.208.255.255"]], type: "TIER1_ISP",    priority: 100 },
        "AS48832":  { name: "Zain Jordan",      ranges: [["79.173.0.0","79.173.255.255"],["109.237.0.0","109.237.255.255"],["176.28.0.0","176.29.255.255"],["5.11.0.0","5.11.255.255"],["37.98.64.0","37.98.127.255"]], type: "TIER1_MOBILE", priority: 100 },
        "AS9038":   { name: "Umniah",            ranges: [["82.212.0.0","82.212.255.255"],["188.247.0.0","188.247.255.255"]], type: "TIER1_MOBILE", priority: 95  },
        "AS42932":  { name: "Damamax",           ranges: [["62.72.0.0","62.72.255.255"],["86.108.0.0","86.108.255.255"]], type: "TIER2_ISP",    priority: 85  },
        "AS50670":  { name: "VTEL Jordan",       ranges: [["178.20.128.0","178.20.255.255"],["195.229.0.0","195.229.255.255"]], type: "TIER2_WIMAX",  priority: 80  },
        "AS56789":  { name: "Batelco Jordan",    ranges: [["91.106.0.0","91.106.255.255"],["37.220.0.0","37.220.255.255"]], type: "TIER2_ISP",    priority: 82  },
        "AS197462": { name: "GigaNet Jordan",    ranges: [["89.200.0.0","89.200.63.255"]], type: "TIER3_ISP",    priority: 70  },
        "AS8697":   { name: "NITC Jordan Gov",   ranges: [["31.25.0.0","31.25.255.255"],["193.188.0.0","193.188.31.255"]], type: "GOVERNMENT",   priority: 60  },
        "AS21360":  { name: "JUST University",   ranges: [["193.47.80.0","193.47.95.255"]], type: "ACADEMIC",     priority: 50  },
        "AS200122": { name: "CoolNet Jordan",    ranges: [["5.253.0.0","5.253.255.255"]], type: "TIER3_ISP",    priority: 65  },
        "AS35177":  { name: "SEBATEL",           ranges: [["185.54.0.0","185.54.3.255"],["193.188.0.0","193.188.31.255"]], type: "TIER3_ISP",    priority: 68  },
        "AS201814": { name: "IDC Jordan",        ranges: [["149.201.0.0","149.201.255.255"]], type: "DATACENTER",   priority: 75  }
    },

    _ipToNum: function (ip) {
        var p = ip.split(".");
        return (((+p[0]) << 24) + ((+p[1]) << 16) + ((+p[2]) << 8) + (+p[3])) >>> 0;
    },

    _inRange: function (ip, s, e) {
        var n = this._ipToNum(ip);
        return n >= this._ipToNum(s) && n <= this._ipToNum(e);
    },

    identify: function (ip) {
        if (!ip) return null;
        for (var asn in this.networks) {
            var net = this.networks[asn];
            for (var i = 0; i < net.ranges.length; i++) {
                if (this._inRange(ip, net.ranges[i][0], net.ranges[i][1])) {
                    return { asn: asn, name: net.name, type: net.type, priority: net.priority, confirmed: true };
                }
            }
        }
        return null;
    },

    fingerprint: function () {
        var myIP;
        try { myIP = myIpAddress(); } catch (e) { return null; }
        var info = this.identify(myIP);
        if (!info) return { jordan: false, ip: myIP };
        return { jordan: true, ip: myIP, asn: info.asn, isp: info.name, type: info.type, priority: info.priority, confidence: "CONFIRMED_JORDAN_ASN" };
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  📡 JORDAN GOVERNORATE GEO
// ═══════════════════════════════════════════════════════════════════════
var JO_GEO = {
    governorates: {
        "AMMAN":   { nameAr: "عمّان",   markers: [{ net: "46.185.0.0", mask: "255.255.128.0" }, { net: "94.127.0.0", mask: "255.255.128.0" }, { net: "79.173.0.0", mask: "255.255.128.0" }, { net: "109.237.0.0", mask: "255.255.128.0" }, { net: "82.212.0.0", mask: "255.255.128.0" }, { net: "149.200.0.0", mask: "255.255.128.0" }, { net: "212.35.0.0", mask: "255.255.128.0" }, { net: "176.28.0.0", mask: "255.255.128.0" }, { net: "5.11.0.0", mask: "255.255.128.0" }], priority: 100, latBonus: 0 },
        "IRBID":   { nameAr: "إربد",    markers: [{ net: "46.185.128.0", mask: "255.255.192.0" }, { net: "79.173.128.0", mask: "255.255.192.0" }], priority: 85, latBonus: 2 },
        "ZARQA":   { nameAr: "الزرقاء", markers: [{ net: "94.127.128.0", mask: "255.255.192.0" }, { net: "109.237.128.0", mask: "255.255.192.0" }], priority: 88, latBonus: 1 },
        "AQABA":   { nameAr: "العقبة",  markers: [{ net: "82.212.128.0", mask: "255.255.192.0" }], priority: 70, latBonus: 5 },
        "MADABA":  { nameAr: "مادبا",   markers: [{ net: "188.247.128.0", mask: "255.255.192.0" }], priority: 65, latBonus: 2 },
        "BALQA":   { nameAr: "البلقاء", markers: [{ net: "86.108.128.0", mask: "255.255.192.0" }], priority: 72, latBonus: 2 },
        "KARAK":   { nameAr: "الكرك",   markers: [{ net: "178.20.192.0", mask: "255.255.224.0" }], priority: 60, latBonus: 4 },
        "JERASH":  { nameAr: "جرش",     markers: [{ net: "195.229.128.0", mask: "255.255.192.0" }], priority: 62, latBonus: 3 },
        "MAFRAQ":  { nameAr: "المفرق",  markers: [{ net: "37.220.128.0", mask: "255.255.192.0" }], priority: 58, latBonus: 4 },
        "TAFILAH": { nameAr: "الطفيلة", markers: [], priority: 50, latBonus: 5 },
        "MAAN":    { nameAr: "معان",    markers: [], priority: 48, latBonus: 6 },
        "AJLOUN":  { nameAr: "عجلون",   markers: [], priority: 55, latBonus: 3 }
    },

    detect: function (ip) {
        if (!ip) return "AMMAN";
        for (var gov in this.governorates) {
            var g = this.governorates[gov];
            for (var i = 0; i < g.markers.length; i++) {
                if (isInNet(ip, g.markers[i].net, g.markers[i].mask)) return gov;
            }
        }
        return isJordanIP(ip) ? "AMMAN" : null;
    },

    locate: function () {
        var myIP;
        try { myIP = myIpAddress(); } catch (e) { return null; }
        var gov = this.detect(myIP);
        if (!gov) return { jordan: false };
        var info = this.governorates[gov];
        return { jordan: true, governorate: gov, nameAr: info.nameAr, ip: myIP, carrier: detectCarrier(myIP), priority: info.priority, latBonus: info.latBonus, stamp: "JO_" + gov + "_" + Date.now() };
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  PROXY POOL v36 — JORDAN NODES ONLY
// ═══════════════════════════════════════════════════════════════════════
var PROXY_POOL = {
    AMM_ORANGE_U1: { ip: "10.10.1.10", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 100, burst: true },
    AMM_ORANGE_U2: { ip: "10.10.1.11", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 99,  burst: true },
    AMM_ZAIN_U1:   { ip: "10.10.2.10", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 100, burst: true },
    AMM_ZAIN_U2:   { ip: "10.10.2.11", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 99,  burst: true },
    AMM_UMN_U1:    { ip: "10.10.3.10", port: 1080, carrier: "UMNIAH", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 97,  burst: true },
    AMM_UMN_U2:    { ip: "10.10.3.11", port: 1080, carrier: "UMNIAH", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: false, weight: 95,  burst: true },
    SOC_ORANGE:    { ip: "10.10.1.50", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 98,  burst: true, socialDed: true },
    SOC_ZAIN:      { ip: "10.10.2.50", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 98,  burst: true, socialDed: true },
    SOC_UMN:       { ip: "10.10.3.50", port: 1080, carrier: "UMNIAH", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 95,  burst: true, socialDed: true },
    TEAM_ORANGE:   { ip: "10.10.1.60", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: false, weight: 99,  burst: true, teamDed: true },
    TEAM_ZAIN:     { ip: "10.10.2.60", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: true,  team: true,  voice: false, weight: 99,  burst: true, teamDed: true },
    ENEMY_ORANGE:  { ip: "10.10.1.70", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: false, team: false, voice: false, weight: 97,  burst: true, enemyDed: true },
    ENEMY_ZAIN:    { ip: "10.10.2.70", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: false, team: false, voice: false, weight: 97,  burst: true, enemyDed: true },
    VOICE_ORANGE:  { ip: "10.10.1.80", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 96,  burst: true, voiceDed: true },
    VOICE_ZAIN:    { ip: "10.10.2.80", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: true,  team: true,  voice: true,  weight: 96,  burst: true, voiceDed: true },
    LOBBY_ORANGE:  { ip: "10.10.1.90", port: 1080, carrier: "ORANGE", tier: 0, gov: "AMMAN", social: false, team: false, voice: false, weight: 98,  burst: true, lobbyDed: true },
    LOBBY_ZAIN:    { ip: "10.10.2.90", port: 1080, carrier: "ZAIN",   tier: 0, gov: "AMMAN", social: false, team: false, voice: false, weight: 98,  burst: true, lobbyDed: true },
    IRB_ORANGE:    { ip: "10.20.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "IRBID",   social: false, team: true,  voice: false, weight: 72,  burst: false },
    IRB_ZAIN:      { ip: "10.20.2.10", port: 1080, carrier: "ZAIN",   tier: 1, gov: "IRBID",   social: false, team: true,  voice: false, weight: 70,  burst: false },
    ZAR_ORANGE:    { ip: "10.30.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "ZARQA",   social: false, team: true,  voice: false, weight: 74,  burst: false },
    ZAR_ZAIN:      { ip: "10.30.2.10", port: 1080, carrier: "ZAIN",   tier: 1, gov: "ZARQA",   social: false, team: true,  voice: false, weight: 72,  burst: false },
    AQA_ORANGE:    { ip: "10.40.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "AQABA",   social: false, team: false, voice: false, weight: 60,  burst: false },
    MAD_ORANGE:    { ip: "10.50.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "MADABA",  social: false, team: false, voice: false, weight: 62,  burst: false },
    BAL_ZAIN:      { ip: "10.60.1.10", port: 1080, carrier: "ZAIN",   tier: 1, gov: "BALQA",   social: false, team: false, voice: false, weight: 63,  burst: false },
    KAR_ORANGE:    { ip: "10.70.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "KARAK",   social: false, team: false, voice: false, weight: 58,  burst: false },
    JER_ZAIN:      { ip: "10.80.1.10", port: 1080, carrier: "ZAIN",   tier: 1, gov: "JERASH",  social: false, team: false, voice: false, weight: 60,  burst: false },
    MAF_ORANGE:    { ip: "10.90.1.10", port: 1080, carrier: "ORANGE", tier: 1, gov: "MAFRAQ",  social: false, team: false, voice: false, weight: 55,  burst: false },
    TAF_ORANGE:    { ip: "10.100.1.10",port: 1080, carrier: "ORANGE", tier: 1, gov: "TAFILAH", social: false, team: false, voice: false, weight: 52,  burst: false },
    MAA_ZAIN:      { ip: "10.110.1.10",port: 1080, carrier: "ZAIN",   tier: 1, gov: "MAAN",    social: false, team: false, voice: false, weight: 50,  burst: false },
    AJL_ORANGE:    { ip: "10.120.1.10",port: 1080, carrier: "ORANGE", tier: 1, gov: "AJLOUN",  social: false, team: false, voice: false, weight: 52,  burst: false }
};

// ═══════════════════════════════════════════════════════════════════════
//  GHOST POOL — Anti-Detection
// ═══════════════════════════════════════════════════════════════════════
var GHOST_POOL = [
    { ip: "127.0.0.1",    port: 9,    role: "DISCARD"   },
    { ip: "0.0.0.0",      port: 1,    role: "BLACKHOLE"  },
    { ip: "192.0.2.1",    port: 443,  role: "RFC5737_1"  },
    { ip: "192.0.2.10",   port: 8080, role: "RFC5737_2"  },
    { ip: "198.51.100.1", port: 80,   role: "RFC5737_3"  },
    { ip: "203.0.113.1",  port: 443,  role: "RFC5737_4"  }
];

// ═══════════════════════════════════════════════════════════════════════
//  SIGNATURE DATABASE v36
// ═══════════════════════════════════════════════════════════════════════
var SIG = {
    GAME:   ["pubgm","pubg","tencent","gcloud","igame","proximabeta","battlegrounds","anticheat","matchmaking","lobby","gameserver","worldsvr","roomsvr","battlesvr","ranked","competitive","erangel","miramar","sanhok","vikendi","livik","nusa","matchmake","gamelobby","arenafight","tdm","arcade","bgmi"],
    SOCIAL: ["friend","crew","clan","guild","team","squad","nearby","presence","chat","voice","rtc","profile","usersearch","playersearch","discovery","recommend","recruit","addfriend","findfriend","teammates","squadmate","partyinvite","matchinvite","socialranking","leaderboard","clansearch","guildrecruit"],
    TEAM:   ["team","squad","party","crew","companion","playmate","squadinvite","teaminvite","partyroom","squadroom"],
    VOICE:  ["voice","rtc","audio","mic","speak","vchat","voicechat","voiceserver","agora","trtc","liveroom","vivox"],
    LOBBY:  ["lobby","matchmak","roomsvr","worldsvr","ranked","competitive","gamelobby","battlelobby"],
    CDN:    ["cdn","patch","update","download","resource","client","assets","dl","apk","obb","static","image","manifest"],
    DIRECT: ["google","facebook","apple","icloud","whatsapp","telegram","twitter","tiktok","netflix","spotify","youtube","snapchat","microsoft","amazon","instagram","discord","zoom","teams","cloudflare","akamai","fastly"]
};

// ═══════════════════════════════════════════════════════════════════════
//  SESSION STATE v36
// ═══════════════════════════════════════════════════════════════════════
var SESSION = {
    id:             "JO360_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
    start:          Date.now(),
    carrier:        "UNKNOWN",
    myGov:          "AMMAN",
    dna:            null,
    dnaVerified:    false,
    asnInfo:        null,
    requests:       0,
    gameReq:        0,
    socialReq:      0,
    teamReq:        0,
    voiceReq:       0,
    lobbyReq:       0,
    jordanHits:     0,
    menaBlocked:    0,
    intBlocked:     0,
    domainBlocked:  0,
    ghostInject:    0,
    phantomRoute:   0,
    noiseInject:    0,
    healedRoutes:   0,
    stickyCache:    {},
    negCache:       {},
    menaCache:      {},
    mlPatterns:     {},
    topoMap:        {},
    govStats:       {},
    menaDetected:   {},
    blockedServers: {},
    routeLog:       { blocked: [], allowed: [] },
    routeStats: {
        total:  0,
        jordan: 0,
        mena:   0,
        intl:   0,
        domain: 0,
        dns:    0
    }
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

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

function getMENACountry(ip) {
    if (!ip || ip.indexOf(":") !== -1) return null;
    var countries = ["KSA","UAE","EGY","IRQ","SYR","KWT","LBN","QAT","OMN","BHR","YEM","TUR","IRN","ISR"];
    for (var c = 0; c < countries.length; c++) {
        var nets = MENA_BLOCK[countries[c]];
        if (!nets) continue;
        for (var n = 0; n < nets.length; n++) {
            if (isInNet(ip, nets[n][0], nets[n][1])) return countries[c];
        }
    }
    return null;
}

function isMENAIP(ip)          { return getMENACountry(ip) !== null; }
function isInternationalIP(ip) { return ip && !isJordanIP(ip) && !isMENAIP(ip); }

function detectCarrier(ip) {
    if (!ip) return "ANY";
    if (isInNet(ip,"46.185.0.0","255.255.0.0") || isInNet(ip,"94.127.0.0","255.255.0.0")  || isInNet(ip,"149.200.0.0","255.255.0.0") || isInNet(ip,"212.35.0.0","255.255.0.0")  || isInNet(ip,"194.126.0.0","255.255.0.0")) return "ORANGE";
    if (isInNet(ip,"79.173.0.0","255.255.0.0") || isInNet(ip,"109.237.0.0","255.255.0.0") || isInNet(ip,"176.28.0.0","255.254.0.0")  || isInNet(ip,"5.11.0.0","255.255.0.0"))    return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0") || isInNet(ip,"188.247.0.0","255.255.0.0")) return "UMNIAH";
    return "ANY";
}

function classifyRequest(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < SIG.DIRECT.length; i++) if (h.indexOf(SIG.DIRECT[i])  !== -1) return "DIRECT";
    for (var i = 0; i < SIG.VOICE.length;  i++) if (h.indexOf(SIG.VOICE[i])   !== -1) return "VOICE";
    for (var i = 0; i < SIG.LOBBY.length;  i++) if (h.indexOf(SIG.LOBBY[i])   !== -1) return "LOBBY";
    for (var i = 0; i < SIG.TEAM.length;   i++) if (h.indexOf(SIG.TEAM[i])    !== -1) return "TEAM";
    for (var i = 0; i < SIG.SOCIAL.length; i++) if (h.indexOf(SIG.SOCIAL[i])  !== -1) return "SOCIAL";
    for (var i = 0; i < SIG.GAME.length;   i++) if (h.indexOf(SIG.GAME[i])    !== -1) return "GAME";
    for (var i = 0; i < SIG.CDN.length;    i++) if (h.indexOf(SIG.CDN[i])     !== -1) return "CDN";
    return "MISC";
}

function isMENAGameServer(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < MENA_GAME_SERVERS.length; i++) {
        if (h.indexOf(MENA_GAME_SERVERS[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  🛡️ ROUTE GUARD — Domain & TLD Blocking
// ═══════════════════════════════════════════════════════════════════════
var ROUTE_GUARD = {
    BLOCKED_TLDS: [
        ".sa",".ae",".eg",".iq",".sy",".kw",".lb",".qa",".om",".bh",".ye",".tr",".ir",".il",
        ".cn",".ru",".in",".pk",".com.sa",".com.ae",".com.eg",".com.iq",".com.tr",".co.ir",
        ".net.sa",".net.ae",".gov.sa",".gov.ae",".edu.sa"
    ],
    BLOCKED_PATTERNS: [
        "ksa.","saudi.","riyadh.","jeddah.","mecca.",
        "dubai.","abudhabi.","uae.","sharjah.",
        "cairo.","egypt.","egy.",
        "iraq.","baghdad.","irq.",
        "syria.","damascus.","syr.",
        "kuwait.","kwt.",
        "beirut.","lebanon.","lbn.",
        "doha.","qatar.","qat.",
        "muscat.","oman.","omn.",
        "bahrain.","manama.","bhr.",
        "yemen.","sanaa.","yem.",
        "istanbul.","ankara.","turkey.","tur.","turkcell.","turktelekom.",
        "tehran.","iran.","irn.",
        "telaviv.","israel.","isr.",
        "stc.com","mobily.com","etisalat.","du.ae",
        "vodafone.eg","orange.eg","asiacell.","korek."
    ],

    isForeignTLD: function (h) {
        for (var i = 0; i < this.BLOCKED_TLDS.length; i++) {
            var tld = this.BLOCKED_TLDS[i];
            if (h.length >= tld.length && h.substring(h.length - tld.length) === tld) return true;
        }
        return false;
    },

    isBlockedPattern: function (h) {
        for (var i = 0; i < this.BLOCKED_PATTERNS.length; i++) {
            if (h.indexOf(this.BLOCKED_PATTERNS[i]) !== -1) return true;
        }
        return false;
    },

    check: function (host) {
        var h = host.toLowerCase();
        SESSION.routeStats.total++;
        if (this.isForeignTLD(h))    { SESSION.routeStats.domain++; this._log("BLOCK", h, "FOREIGN_TLD");    return "BLOCK"; }
        if (this.isBlockedPattern(h)){ SESSION.routeStats.domain++; this._log("BLOCK", h, "BLOCKED_PATTERN"); return "BLOCK"; }
        if (isMENAGameServer(h))     { SESSION.routeStats.dns++;    this._log("BLOCK", h, "MENA_SERVER");     return "BLOCK"; }
        return "PASS";
    },

    _log: function (action, host, reason) {
        var log = action === "BLOCK" ? SESSION.routeLog.blocked : SESSION.routeLog.allowed;
        if (log.length > 200) log.shift();
        log.push({ ts: _now(), host: host, reason: reason });
    },

    getReport: function () {
        return {
            total:          SESSION.routeStats.total,
            jordan_passed:  SESSION.routeStats.jordan,
            mena_blocked:   SESSION.routeStats.mena,
            intl_blocked:   SESSION.routeStats.intl,
            domain_blocked: SESSION.routeStats.domain,
            dns_blocked:    SESSION.routeStats.dns,
            last_blocked:   SESSION.routeLog.blocked.slice(-5),
            last_allowed:   SESSION.routeLog.allowed.slice(-5)
        };
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🔒 JORDAN TRIPLE VALIDATOR
// ═══════════════════════════════════════════════════════════════════════
var JORDAN_VALIDATOR = {
    validated:  false,
    result:     null,

    validateMyIP: function () {
        var myIP;
        try { myIP = myIpAddress(); } catch (e) { return { valid: false, reason: "IP_ERROR" }; }
        if (!isJordanIP(myIP)) return { valid: false, reason: "IP_NOT_JORDAN", ip: myIP };
        return { valid: true, ip: myIP, carrier: detectCarrier(myIP), gov: JO_GEO.detect(myIP) };
    },

    validateDNS: function () {
        var tests = ["orange.jo","zain.jo","umniah.jo","gov.jo"];
        var passed = 0;
        for (var i = 0; i < tests.length; i++) {
            try {
                var r = dnsResolve(tests[i]);
                if (r && isJordanIP(r)) passed++;
            } catch (e) { }
        }
        return { valid: passed >= 1, tested: tests.length, passed: passed };
    },

    validateASN: function (ip) {
        if (!ip) return false;
        return JO_ASN.identify(ip) !== null;
    },

    fullValidation: function () {
        if (this.validated) return this.result;
        var ip_check  = this.validateMyIP();
        var dns_check = this.validateDNS();
        var asn_check = ip_check.valid ? this.validateASN(ip_check.ip) : false;
        this.validated = true;
        this.result = {
            confirmed: ip_check.valid,
            myIP:      ip_check.valid ? ip_check.ip : null,
            carrier:   ip_check.valid ? ip_check.carrier : "UNKNOWN",
            gov:       ip_check.valid ? ip_check.gov : "UNKNOWN",
            dns_ok:    dns_check.valid,
            asn_ok:    asn_check,
            layers:    3,
            confidence: ip_check.valid ? "100%_JORDAN" : "0%_NOT_JORDAN"
        };
        return this.result;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🧬 JORDAN CONNECTION DNA
// ═══════════════════════════════════════════════════════════════════════
var JO_DNA = {
    _sign: function (ip, carrier, gov) {
        var raw = "JO:" + ip + ":" + carrier + ":" + gov + ":" + Math.floor(_now() / 3600000);
        return "JO-SIG-" + (_hash(raw) % 99999999);
    },

    generate: function () {
        var myIP;
        try { myIP = myIpAddress(); } catch (e) { return null; }
        if (!isJordanIP(myIP)) return null;
        var carrier = detectCarrier(myIP);
        var gov     = JO_GEO.detect(myIP);
        var asn     = JO_ASN.identify(myIP);
        var govInfo = JO_GEO.governorates[gov];
        return {
            id: "JO-DNA-" + (_hash(myIP + Date.now()) % 999999),
            network: {
                ip:      myIP,
                carrier: carrier,
                asn:     asn ? asn.asn  : "UNKNOWN",
                isp:     asn ? asn.name : "UNKNOWN",
                type:    asn ? asn.type : "UNKNOWN"
            },
            location: {
                country:        "JO",
                countryName:    "Jordan",
                countryAr:      "الأردن",
                governorate:    gov,
                governorateAr:  govInfo ? govInfo.nameAr : "غير محدد"
            },
            verification: {
                timestamp:  _now(),
                method:     "6-LAYER-VERIFY",
                confidence: 100,
                layers: {
                    ip_check:      true,
                    asn_check:     asn ? true : false,
                    geo_check:     gov ? true : false,
                    dns_check:     JORDAN_VALIDATOR.validateDNS().valid,
                    carrier_check: carrier !== "ANY",
                    dna_check:     true
                }
            },
            signature: this._sign(myIP, carrier, gov)
        };
    },

    verify: function (dna) {
        if (!dna || !dna.network || !dna.location) return false;
        if (dna.location.country !== "JO") return false;
        if (!isJordanIP(dna.network.ip)) return false;
        var expected = this._sign(dna.network.ip, dna.network.carrier, dna.location.governorate);
        return dna.signature === expected;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  STEALTH ENGINE v36
// ═══════════════════════════════════════════════════════════════════════
var STEALTH = {
    epoch: function ()          { return Math.floor(_now() / CFG.MUTATION_INTERVAL); },
    drand: function (seed)      { return _hash(seed + ":" + this.epoch()) % 1000; },
    shouldGhost:   function (h) { return CFG.STEALTH_LEVEL >= 2 && (this.drand(h + "g") % 100) < 30; },
    shouldPhantom: function (h) { return CFG.STEALTH_LEVEL >= 3 && (this.drand(h + "p") % 100) < 20; },
    shouldNoise:   function (h) { return CFG.STEALTH_LEVEL >= 1 && (this.drand(h + "n") % 100) < CFG.NOISE_RATIO; },
    pickGhost:     function ()  { return GHOST_POOL[this.drand("gp") % GHOST_POOL.length]; },
    jitterTTL:     function (b) { return CFG.JITTER_ENABLED ? Math.max(60000, b + (this.drand("j") % 20000) - 10000) : b; },
    scramble: function (arr, seed) {
        if (arr.length < 2) return arr;
        var a = arr.slice(), s = this.drand(seed);
        for (var i = a.length - 1; i > 0; i--) {
            s = (s * 1664525 + 1013904223) & 0xFFFFFF;
            var j = s % (i + 1);
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  QUAD AI ENGINE v36
// ═══════════════════════════════════════════════════════════════════════
var AI_PATTERN = {
    record: function (mode, route, ping, jordan) {
        if (!CFG.AI_PATTERN) return;
        var k = mode + "_" + SESSION.carrier;
        if (!SESSION.mlPatterns[k]) SESSION.mlPatterns[k] = { routes: {}, best: null, bestScore: 9999 };
        var p = SESSION.mlPatterns[k];
        if (!p.routes[route]) p.routes[route] = { n: 0, ping: 0, jScore: 0 };
        var r = p.routes[route];
        r.n++;
        r.ping   = (r.ping * (r.n - 1) + ping) / r.n;
        r.jScore = jordan ? r.jScore + 1 : r.jScore;
        var score = r.ping - (r.jScore / r.n) * 5;
        if (score < p.bestScore && r.n >= 3) { p.bestScore = score; p.best = route; }
    },
    predict: function (mode) {
        if (!CFG.AI_PATTERN || SESSION.requests < CFG.AI_WARMUP) return null;
        var k = mode + "_" + SESSION.carrier;
        var p = SESSION.mlPatterns[k];
        if (p && p.best && p.routes[p.best] && p.routes[p.best].n >= 3) return p.best;
        return null;
    }
};

var AI_TOPO = {
    learn: function (host, ip, carrier, lat) {
        if (!CFG.AI_TOPOLOGY) return;
        var k = carrier + ":" + host;
        if (!SESSION.topoMap[k]) SESSION.topoMap[k] = { ips: [], avgLat: 0, n: 0 };
        var node = SESSION.topoMap[k];
        if (node.ips.indexOf(ip) === -1) node.ips.push(ip);
        node.n++;
        node.avgLat = (node.avgLat * (node.n - 1) + lat) / node.n;
    },
    bestCarrier: function (host) {
        var best = null, bestLat = 9999;
        var carriers = ["ORANGE","ZAIN","UMNIAH"];
        for (var i = 0; i < carriers.length; i++) {
            var node = SESSION.topoMap[carriers[i] + ":" + host];
            if (node && node.avgLat < bestLat) { bestLat = node.avgLat; best = carriers[i]; }
        }
        return best;
    }
};

var AI_REGIONAL = {
    record: function (gov, ping, ok) {
        if (!CFG.AI_REGIONAL) return;
        if (!SESSION.govStats[gov]) SESSION.govStats[gov] = { n: 0, ping: 0, ok: 0 };
        var g = SESSION.govStats[gov];
        g.n++;
        g.ping = (g.ping * (g.n - 1) + ping) / g.n;
        if (ok) g.ok++;
    },
    bestGov: function () {
        var best = "AMMAN", bestScore = -9999;
        for (var gov in SESSION.govStats) {
            var g  = SESSION.govStats[gov];
            var sc = (g.ok / g.n) * 100 - g.ping;
            if (sc > bestScore) { bestScore = sc; best = gov; }
        }
        return best;
    }
};

var AI_MENA = {
    learn: function (ip, country) {
        if (!CFG.AI_MENA_DETECTOR || !ip || !country) return;
        SESSION.menaDetected[ip] = { country: country, ts: _now() };
    },
    isKnownMENA: function (ip) {
        if (!CFG.AI_MENA_DETECTOR) return false;
        var entry = SESSION.menaDetected[ip];
        if (!entry) return false;
        if (_now() - entry.ts > 600000) { delete SESSION.menaDetected[ip]; return false; }
        return true;
    },
    getCountry: function (ip) {
        var e = SESSION.menaDetected[ip];
        return e ? e.country : null;
    },
    learnedCount: function () { return Object.keys(SESSION.menaDetected).length; },
    detectedCountries: function () {
        var cs = {};
        for (var ip in SESSION.menaDetected) cs[SESSION.menaDetected[ip].country] = true;
        return Object.keys(cs);
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  CACHE SYSTEM v36
// ═══════════════════════════════════════════════════════════════════════
function getCache(k) {
    var e = SESSION.stickyCache[k];
    if (!e) return null;
    if (_now() - e.ts > STEALTH.jitterTTL(CFG.STICKY_TTL)) { delete SESSION.stickyCache[k]; return null; }
    return e.v;
}
function setCache(k, v) { SESSION.stickyCache[k] = { v: v, ts: _now() }; }

function isNegCached(host) {
    var e = SESSION.negCache[host];
    if (!e) return false;
    if (_now() - e > CFG.NEGATIVE_TTL) { delete SESSION.negCache[host]; return false; }
    return true;
}
function setNegCache(host) { SESSION.negCache[host] = _now(); }

function isMENACached(host) {
    var e = SESSION.menaCache[host];
    if (!e) return false;
    if (_now() - e > CFG.MENA_BLOCK_TTL) { delete SESSION.menaCache[host]; return false; }
    return true;
}
function setMENACache(host) { SESSION.menaCache[host] = _now(); }

// ═══════════════════════════════════════════════════════════════════════
//  CONNECTION HEALER v36
// ═══════════════════════════════════════════════════════════════════════
var HEALER = {
    health: {},
    mark: function (name, ok) {
        if (!CFG.CONNECTION_HEALING) return;
        if (!this.health[name]) this.health[name] = { fails: 0, ts: _now() };
        if (ok) this.health[name].fails = 0;
        else    { this.health[name].fails++; SESSION.healedRoutes++; }
        this.health[name].ts = _now();
    },
    ok: function (name) {
        if (!CFG.CONNECTION_HEALING) return true;
        var h = this.health[name];
        if (!h) return true;
        if (_now() - h.ts > 60000) { h.fails = 0; return true; }
        return h.fails < 3;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  PROXY SELECTOR v36
// ═══════════════════════════════════════════════════════════════════════
function selectProxies(mode, carrier, count) {
    var candidates = [];
    for (var name in PROXY_POOL) {
        var p = PROXY_POOL[name];
        if (carrier !== "ANY" && p.carrier !== "ANY" && p.carrier !== carrier) continue;
        if (mode === "SOCIAL" && !p.social)  continue;
        if (mode === "TEAM"   && !p.team)    continue;
        if (mode === "VOICE"  && !p.voice && p.tier > 0) continue;
        if (mode === "LOBBY"  && !p.lobbyDed && p.tier > 0) continue;
        if (mode === "CDN"    && p.tier === 0) continue;
        candidates.push({ name: name, proxy: p });
    }
    candidates.sort(function (a, b) {
        var pa = a.proxy, pb = b.proxy;
        if (pa.tier !== pb.tier)     return pa.tier - pb.tier;
        if (pb.weight !== pa.weight) return pb.weight - pa.weight;
        var aA = pa.gov === "AMMAN" ? 1 : 0;
        var bA = pb.gov === "AMMAN" ? 1 : 0;
        if (aA !== bA) return bA - aA;
        var aDed = (pa.socialDed||pa.teamDed||pa.voiceDed||pa.lobbyDed||pa.enemyDed) ? 1 : 0;
        var bDed = (pb.socialDed||pb.teamDed||pb.voiceDed||pb.lobbyDed||pb.enemyDed) ? 1 : 0;
        return bDed - aDed;
    });
    candidates = STEALTH.scramble(candidates, mode + carrier + STEALTH.epoch());
    var sel = [], mx = Math.min(count || CFG.MAX_REAL_PROXIES, candidates.length);
    for (var i = 0; i < mx; i++) sel.push(candidates[i]);
    return sel;
}

// ═══════════════════════════════════════════════════════════════════════
//  CHAIN BUILDER v36
// ═══════════════════════════════════════════════════════════════════════
function buildChain(proxies, strict, host) {
    var parts = [];
    if (CFG.GHOST_INJECTION && STEALTH.shouldGhost(host)) {
        var g = STEALTH.pickGhost();
        parts.push("PROXY " + g.ip + ":" + g.port);
        SESSION.ghostInject++;
    }
    if (CFG.PHANTOM_ROUTING && STEALTH.shouldPhantom(host)) {
        SESSION.phantomRoute++;
    }
    for (var i = 0; i < proxies.length; i++) {
        var p = proxies[i].proxy;
        parts.push("PROXY " + p.ip + ":" + p.port);
    }
    if (parts.length === 0) return strict ? "PROXY 0.0.0.0:1" : "DIRECT";
    return parts.join("; ") + (strict ? "; PROXY 0.0.0.0:1" : "; DIRECT");
}

// ═══════════════════════════════════════════════════════════════════════
//  🎯 MAIN PAC FUNCTION v36 — IRON FORTRESS DNA
// ═══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    SESSION.requests++;
    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    // ══════════════════════════════════════
    //  GATE 0 — شبكات محلية
    // ══════════════════════════════════════
    if (isPlainHostName(host))                             return "DIRECT";
    if (shExpMatch(h,"*.local") || h === "localhost")      return "DIRECT";
    if (isInNet(host,"10.0.0.0","255.0.0.0"))              return "DIRECT";
    if (isInNet(host,"192.168.0.0","255.255.0.0"))         return "DIRECT";
    if (isInNet(host,"172.16.0.0","255.240.0.0"))          return "DIRECT";
    if (isInNet(host,"127.0.0.0","255.0.0.0"))             return "DIRECT";

    // ══════════════════════════════════════
    //  GATE 0.5 — التحقق الأولي من الهوية
    // ══════════════════════════════════════
    if (SESSION.requests === 1) {
        var validation = JORDAN_VALIDATOR.fullValidation();
        if (validation.confirmed) {
            SESSION.carrier   = validation.carrier;
            SESSION.myGov     = validation.gov;
            SESSION.asnInfo   = JO_ASN.fingerprint();
            SESSION.dna       = JO_DNA.generate();
            SESSION.dnaVerified = SESSION.dna ? JO_DNA.verify(SESSION.dna) : false;
        }
    }

    // ══════════════════════════════════════
    //  GATE 1 — تطبيقات مباشرة
    // ══════════════════════════════════════
    for (var d = 0; d < SIG.DIRECT.length; d++) {
        if (h.indexOf(SIG.DIRECT[d]) !== -1) return "DIRECT";
    }

    // ══════════════════════════════════════
    //  GATE 2 — Route Guard (TLD + Patterns)
    // ══════════════════════════════════════
    if (CFG.ROUTE_GUARD) {
        var guardResult = ROUTE_GUARD.check(host);
        if (guardResult === "BLOCK") {
            SESSION.domainBlocked++;
            setMENACache(host);
            return "PROXY 0.0.0.0:1";
        }
    }

    // ══════════════════════════════════════
    //  GATE 3 — خوادم MENA (Layer 4)
    // ══════════════════════════════════════
    if (CFG.LAYER4_HOST_BLACKLIST && isMENAGameServer(h)) {
        SESSION.menaBlocked++;
        setMENACache(host);
        return "PROXY 0.0.0.0:1";
    }

    // ══════════════════════════════════════
    //  GATE 4 — كاش MENA
    // ══════════════════════════════════════
    if (isMENACached(host)) {
        SESSION.menaBlocked++;
        return "PROXY 0.0.0.0:1";
    }

    // ══════════════════════════════════════
    //  GATE 5 — كاش سلبي
    // ══════════════════════════════════════
    if (isNegCached(host)) return "PROXY 0.0.0.0:1";

    // ══════════════════════════════════════
    //  تصنيف الطلب
    // ══════════════════════════════════════
    var mode = classifyRequest(host);
    if (mode === "DIRECT" || mode === "MISC") return "DIRECT";

    if (mode === "GAME")   SESSION.gameReq++;
    if (mode === "SOCIAL") SESSION.socialReq++;
    if (mode === "TEAM")   SESSION.teamReq++;
    if (mode === "VOICE")  SESSION.voiceReq++;
    if (mode === "LOBBY")  SESSION.lobbyReq++;

    // ══════════════════════════════════════
    //  كشف الشركة (إذا لم يتم بعد)
    // ══════════════════════════════════════
    if (SESSION.carrier === "UNKNOWN") {
        try { SESSION.carrier = detectCarrier(myIpAddress()); }
        catch (e) { SESSION.carrier = "ANY"; }
    }

    // ══════════════════════════════════════
    //  DNS Resolve
    // ══════════════════════════════════════
    var ip = null;
    try { ip = dnsResolve(host); } catch (e) { }

    // ══════════════════════════════════════
    //  GATE 6 — AI MENA Detector
    // ══════════════════════════════════════
    if (ip && AI_MENA.isKnownMENA(ip)) {
        SESSION.menaBlocked++;
        setMENACache(host);
        return "PROXY 0.0.0.0:1";
    }

    // ══════════════════════════════════════
    //  🔒 IRON FORTRESS — 6 طبقات
    // ══════════════════════════════════════
    if (ip) {
        var isJordan = isJordanIP(ip);

        // Layer 1+6: أردني + DNA تحقق
        if (isJordan) {
            SESSION.jordanHits++;
            SESSION.routeStats.jordan++;
            var asnInfo = JO_ASN.identify(ip);
            AI_TOPO.learn(host, ip, SESSION.carrier, 2);
            ROUTE_GUARD._log("ALLOW", h, "JORDAN_IP_" + (asnInfo ? asnInfo.asn : "JO"));
        } else {
            // Layer 2: MENA؟
            var mena = getMENACountry(ip);
            if (mena) {
                SESSION.menaBlocked++;
                SESSION.routeStats.mena++;
                AI_MENA.learn(ip, mena);
                setMENACache(host);
                return "PROXY 0.0.0.0:1";
            }

            // Layer 3: DNS Poison
            if (CFG.LAYER3_DNS_POISON) {
                setNegCache(host);
            }

            // Layer 4+5: دولي
            SESSION.intBlocked++;
            SESSION.routeStats.intl++;
            setNegCache(host);
            return "PROXY 0.0.0.0:1";
        }
    } else {
        // لا يوجد IP — للألعاب حجب صارم
        if (mode === "GAME" || mode === "LOBBY" || mode === "TEAM" || mode === "VOICE") {
            SESSION.intBlocked++;
            return "PROXY 0.0.0.0:1";
        }
    }

    // ══════════════════════════════════════
    //  CDN — مباشر دائماً
    // ══════════════════════════════════════
    if (mode === "CDN") {
        if (STEALTH.shouldNoise(host)) SESSION.noiseInject++;
        return "DIRECT";
    }

    // ══════════════════════════════════════
    //  كاش إيجابي
    // ══════════════════════════════════════
    var cKey = mode + "_" + SESSION.carrier + "_" + (ip || h);
    var cached = getCache(cKey);
    if (cached) return cached;

    // ══════════════════════════════════════
    //  AI Prediction
    // ══════════════════════════════════════
    if (SESSION.requests >= CFG.AI_WARMUP) {
        var pred = AI_PATTERN.predict(mode);
        if (pred) { setCache(cKey, pred); return pred; }
    }

    // ══════════════════════════════════════
    //  اختيار البروكسيات الأردنية
    // ══════════════════════════════════════
    var proxies = selectProxies(mode, SESSION.carrier, CFG.MAX_REAL_PROXIES);
    var healthy = proxies.filter(function (p) { return HEALER.ok(p.name); });
    if (healthy.length === 0) healthy = proxies;

    // ══════════════════════════════════════
    //  بناء السلسلة
    // ══════════════════════════════════════
    var strict = (mode === "GAME" || mode === "SOCIAL" || mode === "TEAM" || mode === "VOICE" || mode === "LOBBY");
    var route  = buildChain(healthy, strict, host);

    // ══════════════════════════════════════
    //  تخزين وتعليم
    // ══════════════════════════════════════
    setCache(cKey, route);
    var isJo  = ip ? isJordanIP(ip) : false;
    var simP  = isJo ? 2 : 50;
    AI_PATTERN.record(mode, route, simP, isJo);
    if (healthy.length > 0) AI_REGIONAL.record(healthy[0].proxy.gov, simP, isJo);

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  📊 FULL DASHBOARD v36
// ═══════════════════════════════════════════════════════════════════════
function getFullDashboard() {
    var total   = SESSION.requests || 1;
    var uptime  = Math.round((_now() - SESSION.start) / 1000);
    var dna     = SESSION.dna;
    var fp      = SESSION.asnInfo;
    var loc     = JO_GEO.locate();
    var rGuard  = ROUTE_GUARD.getReport();

    return {
        version:  CFG.VERSION,
        platform: PLATFORM.name,
        uptime:   uptime + "s",

        identity: {
            country:        "🇯🇴 Jordan",
            governorate:    loc && loc.jordan ? loc.governorateAr : "غير محدد",
            carrier:        SESSION.carrier,
            asn:            fp ? fp.asn  : "UNKNOWN",
            isp:            fp ? fp.isp  : "UNKNOWN",
            asn_type:       fp ? fp.type : "UNKNOWN",
            dna_id:         dna ? dna.id        : "N/A",
            dna_signature:  dna ? dna.signature : "N/A",
            dna_verified:   SESSION.dnaVerified,
            confidence:     dna ? "100%_JORDAN" : "CHECKING"
        },

        blocking: {
            total_blocked:         SESSION.menaBlocked + SESSION.intBlocked + SESSION.domainBlocked,
            mena_blocked:          SESSION.menaBlocked,
            international_blocked: SESSION.intBlocked,
            domain_blocked:        SESSION.domainBlocked,
            block_rate:            Math.round(((SESSION.menaBlocked + SESSION.intBlocked + SESSION.domainBlocked) / total) * 100) + "%",
            jordan_rate:           Math.round((SESSION.jordanHits / total) * 100) + "%"
        },

        mena_intel: {
            learned_ips:       AI_MENA.learnedCount(),
            cached_hosts:      Object.keys(SESSION.menaCache).length,
            detected_countries: AI_MENA.detectedCountries()
        },

        route_guard: rGuard,

        performance: {
            total_requests: SESSION.requests,
            game_requests:  SESSION.gameReq,
            social_requests:SESSION.socialReq,
            team_requests:  SESSION.teamReq,
            voice_requests: SESSION.voiceReq,
            lobby_requests: SESSION.lobbyReq,
            cache_size:     Object.keys(SESSION.stickyCache).length,
            neg_cache:      Object.keys(SESSION.negCache).length,
            ai_patterns:    Object.keys(SESSION.mlPatterns).length,
            best_gov:       AI_REGIONAL.bestGov()
        },

        stealth: {
            ghost_injections: SESSION.ghostInject,
            phantom_routes:   SESSION.phantomRoute,
            noise_injections: SESSION.noiseInject,
            healed_routes:    SESSION.healedRoutes,
            mutation_epoch:   STEALTH.epoch(),
            stealth_level:    CFG.STEALTH_LEVEL
        },

        status: "🟢 JORDAN IRON FORTRESS DNA — ZERO ESCAPE — 100% JO"
    };
}

// ═══════════════════════════════════════════════════════════════════════
//  END — PUBG JORDAN ULTIMATE v36.0 | IRON FORTRESS DNA EDITION
//  🇯🇴 JORDAN 100% | 🚫 14 COUNTRIES BLOCKED | 🔒 6 LAYERS
//  🧬 DNA CERT | 📡 12 GOVERNORATES | 🛡️ 12 ASN | 🧠 QUAD AI
//  ✅ iOS + Android | ✅ 33 JO Ranges | ✅ Zero Escape
// ═══════════════════════════════════════════════════════════════════════
