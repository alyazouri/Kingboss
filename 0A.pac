// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v33.0 — CUSTOM PROXY EDITION (ببروكسياتك)
//  
//  🇯🇴 مُحسَّن بأحدث IPs أردنية (24ms-44ms) مقدمة من المستخدم
//  🎯 إجبار كامل على سيرفرات PUBG الأردنية
//  🔥 مزيج بين بروكسيات اللوبي (Port 20001) وبروكسيات HTTP فائقة السرعة
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-CUSTOM-JO",
    TARGET_PING: 3,
    SOCIAL_API_TARGET: 2,
    EXCELLENT_PING: 6,
    GOOD_PING: 10,
    MAX_ACCEPTABLE_PING: 12,
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_ONLY_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    LOBBY_AGGREGATION: true,
    VISIBILITY_BOOST: 10.0,
    ENABLE_ML_PREDICTION: true,
    FAIL_CLOSED: true
};

// ═══════════════════════════════════════════════════════════════════════
//  🔥 تجمع البروكسيات (بروكسياتك الجديدة + الأصلية)
// ═══════════════════════════════════════════════════════════════════════
var PROXY = {
    // ─────────────────────────────────────────────────────────────────
    // 🅰 بروكسيات اللوبي والمباريات (من قائمتك الأولى - Port 20001)
    //    كلها Tier 0 - تستخدم لأي اتصال خاص باللعب
    // ─────────────────────────────────────────────────────────────────
    LOBBY_NEW_1: {
        ip: "178.238.184.2", port: 20001, carrier: "MIX", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    LOBBY_NEW_2: {
        ip: "109.237.205.83", port: 20001, carrier: "ZAIN", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    LOBBY_NEW_3: {
        ip: "92.253.122.201", port: 20001, carrier: "MIX", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true
    },
    LOBBY_NEW_4: {
        ip: "46.185.138.151", port: 20001, carrier: "ORANGE", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true,
        burstCapable: true
    },
    LOBBY_NEW_5: {
        ip: "94.142.51.146", port: 20001, carrier: "MIX", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true
    },
    LOBBY_NEW_6: {
        ip: "37.220.121.71", port: 20001, carrier: "JT", tier: 0,
        targetPing: 15, location: "JORDAN", lobbyOptimized: true
    },

    // ─────────────────────────────────────────────────────────────────
    // 🅱 بروكسيات HTTP-CONNECT فائقة السرعة (من قائمتك الثانية)
    //    تُستخدم للميزات الاجتماعية والبحث عن لاعبين
    // ─────────────────────────────────────────────────────────────────
    ULTRA_FAST_1: {
        ip: "46.185.139.47", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 24, location: "AMMAN", socialOptimized: true,
        socialDedicated: true, burstCapable: true, ultraBurst: true
    },
    FAST_2: {
        ip: "92.253.111.235", port: 1080, carrier: "MIX", tier: 0,
        targetPing: 26, location: "JORDAN", socialOptimized: true,
        burstCapable: true
    },
    FAST_3: {
        ip: "46.185.163.235", port: 8080, carrier: "ORANGE", tier: 0,
        targetPing: 29, location: "JORDAN", socialOptimized: true
    },
    FAST_4: {
        ip: "94.142.56.191", port: 443, carrier: "MIX", tier: 0,
        targetPing: 31, location: "JORDAN", socialOptimized: true
    },
    STABLE_1: {
        ip: "37.220.121.191", port: 80, carrier: "JT", tier: 1,
        targetPing: 44, location: "JORDAN"  // احتياطي ممتاز
    },

    // ─────────────────────────────────────────────────────────────────
    // 🅲 البروكسيات الأصلية (للاحتياط والتنويع)
    // ─────────────────────────────────────────────────────────────────
    ORANGE_ULTRA_1: {
        ip: "94.127.211.6", port: 20005, carrier: "ORANGE", tier: 0,
        targetPing: 4, location: "AMMAN_CORE", socialOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    ZAIN_ULTRA_1: {
        ip: "109.237.193.187", port: 443, carrier: "ZAIN", tier: 0,
        targetPing: 4.5, location: "AMMAN_CORE", socialOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    UMNIAH_ULTRA_1: {
        ip: "212.35.69.242", port: 443, carrier: "UMNIAH", tier: 0,
        targetPing: 5, location: "AMMAN_CORE", socialOptimized: true
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  نطاقات IP الأردنية (مُحدثة)
// ═══════════════════════════════════════════════════════════════════════
var JO_NETS = [
    ["46.185.128.0","17"], ["94.127.208.0","20"], ["149.200.136.0","22"],
    ["79.173.192.0","18"], ["109.237.192.0","18"], ["176.28.0.0","15"],
    ["82.212.0.0","16"], ["212.35.64.0","18"], ["188.247.0.0","16"],
    ["62.72.160.0","19"], ["94.230.0.0","16"], ["91.106.0.0","16"],
    ["37.220.0.0","16"], ["176.203.0.0","16"], ["5.11.0.0","16"],
    ["31.25.128.0","17"], ["37.75.0.0","16"], ["77.44.0.0","16"],
    ["82.212.128.0","17"], ["178.20.184.0","21"]
];

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};

var PUBG_KEYS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

var SOCIAL_KEYS = [
    "friend", "crew", "clan", "lobby", "matchmake", "social",
    "playersearch", "discovery", "nearby", "recruit"
];

var MODES = {
    LOBBY_FORCE: {
        sig: ["lobby","matchmake","queue","roomlist","serverlist"],
        priority: 10, targetPing: 3, maxPing: 8,
        strategy: "LOBBY_ULTRA_FORCE", sticky: true
    },
    SOCIAL_FORCE: {
        sig: ["friend","crew","clan","playersearch","social","nearby"],
        priority: 10, targetPing: 2, maxPing: 6,
        strategy: "SOCIAL_ULTRA_FORCE", sticky: true
    },
    GAME_CRITICAL: {
        sig: ["ranked","classic","tdm","arena","battle_royale","erangel","miramar"],
        priority: 9, targetPing: 5, maxPing: 12,
        strategy: "GAME_CRITICAL", sticky: true
    },
    AUTH: {
        sig: ["auth","login","passport"],
        priority: 10, targetPing: 6, maxPing: 15,
        strategy: "SECURE_CRITICAL", sticky: true
    }
};

function maskFromCIDR(c) {
    var m = {
        "8":"255.0.0.0","10":"255.192.0.0","11":"255.224.0.0",
        "12":"255.240.0.0","13":"255.248.0.0","14":"255.252.0.0",
        "15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
        "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0",
        "21":"255.255.248.0","22":"255.255.252.0"
    };
    return m[c] || "255.255.0.0";
}

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i=0; i<JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], maskFromCIDR(JO_NETS[i][1]))) return true;
    }
    return false;
}

function detectMode(host) {
    var h = host.toLowerCase();
    for (var mode in MODES) {
        var sigs = MODES[mode].sig;
        for (var i=0; i<sigs.length; i++) {
            if (h.indexOf(sigs[i]) !== -1) return mode;
        }
    }
    return "GAME_CRITICAL";
}

// ═══════════════════════════════════════════════════════════════════════
//  خوارزمية التوجيه (تستخدم بروكسياتك الجديدة بشكل أساسي)
// ═══════════════════════════════════════════════════════════════════════
function selectBestRoute(mode) {
    switch (mode) {
        case "SOCIAL_FORCE":
            // الأسرع للبحث عن لاعبين (24ms - 31ms)
            return "PROXY " + PROXY.ULTRA_FAST_1.ip + ":" + PROXY.ULTRA_FAST_1.port +
                   "; PROXY " + PROXY.FAST_2.ip + ":" + PROXY.FAST_2.port +
                   "; PROXY " + PROXY.FAST_3.ip + ":" + PROXY.FAST_3.port +
                   "; PROXY " + PROXY.FAST_4.ip + ":" + PROXY.FAST_4.port +
                   "; PROXY " + PROXY.STABLE_1.ip + ":" + PROXY.STABLE_1.port +
                   "; " + BLOOD.BLK;

        case "LOBBY_FORCE":
            // بروكسيات اللوبي Port 20001 (مخصصة)
            return "PROXY " + PROXY.LOBBY_NEW_2.ip + ":" + PROXY.LOBBY_NEW_2.port +
                   "; PROXY " + PROXY.LOBBY_NEW_4.ip + ":" + PROXY.LOBBY_NEW_4.port +
                   "; PROXY " + PROXY.LOBBY_NEW_1.ip + ":" + PROXY.LOBBY_NEW_1.port +
                   "; PROXY " + PROXY.LOBBY_NEW_3.ip + ":" + PROXY.LOBBY_NEW_3.port +
                   "; PROXY " + PROXY.LOBBY_NEW_5.ip + ":" + PROXY.LOBBY_NEW_5.port +
                   "; PROXY " + PROXY.LOBBY_NEW_6.ip + ":" + PROXY.LOBBY_NEW_6.port +
                   "; " + BLOOD.BLK;

        case "GAME_CRITICAL":
        case "AUTH":
            // مزيج بين اللوبي والخوادم فائقة السرعة
            return "PROXY " + PROXY.ULTRA_FAST_1.ip + ":" + PROXY.ULTRA_FAST_1.port +
                   "; PROXY " + PROXY.LOBBY_NEW_2.ip + ":" + PROXY.LOBBY_NEW_2.port +
                   "; PROXY " + PROXY.LOBBY_NEW_4.ip + ":" + PROXY.LOBBY_NEW_4.port +
                   "; PROXY " + PROXY.FAST_2.ip + ":" + PROXY.FAST_2.port +
                   "; PROXY " + PROXY.ORANGE_ULTRA_1.ip + ":" + PROXY.ORANGE_ULTRA_1.port +
                   "; " + BLOOD.BLK;

        default:
            return "PROXY " + PROXY.ORANGE_ULTRA_1.ip + ":" + PROXY.ORANGE_ULTRA_1.port +
                   "; PROXY " + PROXY.ZAIN_ULTRA_1.ip + ":" + PROXY.ZAIN_ULTRA_1.port +
                   "; " + BLOOD.BLK;
    }
}

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0")) return "DIRECT";

    var isPubg = false;
    for (var i=0; i<PUBG_KEYS.length; i++) {
        if (h.indexOf(PUBG_KEYS[i]) !== -1) { isPubg = true; break; }
    }
    if (!isPubg) return "DIRECT";

    var ip = dnsResolve(host);
    var mode = detectMode(host);

    var route = selectBestRoute(mode);
    return route;
}
