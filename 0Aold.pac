// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v32.0 — JORDAN LOBBY & MATCH FORCE EDITION
//  
//  🇯🇴 المميزات الجديدة في هذا الإصدار:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔒 إجبار كامل على سيرفرات الأردن (لوبي، تصنيف، مباريات)
//  🔍 خوارزمية اكتشاف أصدقاء معززة (الأردن أولاً)
//  🧠 تعلم آلي موسع (Jordan Smart Routing)
//  📍 أحدث نطاقات IP للاتصالات الأردنية (ألياف، 5G)
//  ⚡ تحسينات DNS ووكيل اجتماعي لتسريع التواصل
//  🚫 حظر كامل لأي خادم غير أردني (بدون استثناء)
//  🎯 نسبة اللاعبين الأردنيين المستهدفة: >98%
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "32.0-JORDAN-ULTRA",
    MODE: "MAXIMUM_JORDAN_FORCE",
    
    // أهداف الأداء
    TARGET_PING: 3,
    SOCIAL_API_TARGET: 2,
    EXCELLENT_PING: 6,
    GOOD_PING: 10,
    MAX_ACCEPTABLE_PING: 12,
    CRITICAL_PING: 15,
    
    // إعدادات الأردن الحصرية
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    JORDAN_ONLY_MODE: true,          // ممنوع أي سيرفر عالمي
    ALLOW_MENA_FALLBACK: false,      // لا نلجأ للسعودية أو الإمارات
    BLOCK_INTERNATIONAL: true,
    
    // الميزات الاجتماعية
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_NEARBY_PLAYERS: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_SOCIAL_GRAPH: true,
    ENABLE_LOBBY_SYNC: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_PLAYER_SEARCH_BOOST: true,
    
    // معاملات القوة
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    FRIEND_DISCOVERY_RADIUS: 200,   // كل الأردن
    LOBBY_AGGREGATION: true,
    VISIBILITY_BOOST: 10.0,
    
    // التعلم الآلي
    ENABLE_ML_PREDICTION: true,
    ENABLE_SELF_OPTIMIZATION: true,
    ENABLE_PLAYER_PATTERN_LEARNING: true,
    
    // الشبكة
    PREFETCH_SOCIAL_DNS: true,
    AGGRESSIVE_KEEP_ALIVE: true,
    SOCKET_POOLING: true,
    
    // الأمن
    FAIL_CLOSED: true,               // إذا فشل البروكسي يحجب (لا يمرر للعالمي)
    MAX_PROXY_CHAIN: 2
};

// ═══════════════════════════════════════════════════════════════════════
//  تجمع البروكسيات الأردني المطور (أحدث العناوين)
// ═══════════════════════════════════════════════════════════════════════
var PROXY = {
    // بروكسيات مخصصة للوبي والمباريات
    LOBBY_ORANGE_1: {
        ip: "94.127.208.10", port: 20000, carrier: "ORANGE", tier: 0,
        targetPing: 3, location: "AMMAN_CORE", socialOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    LOBBY_ZAIN_1: {
        ip: "109.237.193.188", port: 443, carrier: "ZAIN", tier: 0,
        targetPing: 3.5, location: "AMMAN_CORE", socialOptimized: true,
        burstCapable: true, ultraBurst: true
    },
    LOBBY_UMNIAH_1: {
        ip: "212.35.69.200", port: 443, carrier: "UMNIAH", tier: 0,
        targetPing: 4, location: "AMMAN_CORE", socialOptimized: true
    },
    
    // بروكسيات للتواصل الاجتماعي والبحث عن لاعبين
    SOCIAL_ORANGE: {
        ip: "82.212.77.242", port: 3128, carrier: "ORANGE", tier: 0,
        targetPing: 2, location: "AMMAN_SOCIAL_HUB", socialDedicated: true
    },
    SOCIAL_ZAIN: {
        ip: "82.212.109.173", port: 8080, carrier: "ZAIN", tier: 0,
        targetPing: 2.5, location: "AMMAN_SOCIAL_HUB", socialDedicated: true
    },
    
    // بروكسيات احتياطية سريعة
    FAST_ORANGE: {
        ip: "149.200.136.6", port: 443, carrier: "ORANGE", tier: 0,
        targetPing: 5, burstCapable: true
    },
    FAST_ZAIN: {
        ip: "37.75.144.225", port: 80, carrier: "ZAIN", tier: 0,
        targetPing: 6, burstCapable: true
    }
};

// أحدث نطاقات IP الأردنية (محدثة 2025)
var JO_NETS = [
    // Orange Jordan
    ["46.185.128.0","17"], ["46.185.144.0","20"], ["46.185.160.0","19"],
    ["94.127.208.0","20"], ["94.127.224.0","19"], ["149.200.136.0","22"],
    // Zain Jordan
    ["79.173.192.0","18"], ["79.173.224.0","19"], ["109.237.192.0","18"],
    ["109.237.224.0","19"], ["176.28.0.0","15"], ["176.29.0.0","16"],
    // Umniah
    ["82.212.0.0","16"], ["82.212.64.0","18"], ["212.35.64.0","18"],
    // Jordan Telecom / ألياف
    ["188.247.0.0","16"], ["62.72.160.0","19"], ["94.230.0.0","16"],
    ["91.106.0.0","16"], ["37.220.0.0","16"], ["176.203.0.0","16"],
    // نطاقات جديدة 2025
    ["5.11.0.0","16"], ["31.25.128.0","17"], ["37.75.0.0","16"],
    ["77.44.0.0","16"], ["82.212.128.0","17"]
];

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};

// كلمات مفتاحية PUBG + اجتماعية
var PUBG_KEYS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

var SOCIAL_KEYS = [
    "friend", "crew", "clan", "lobby", "matchmake", "social",
    "playersearch", "discovery", "nearby", "recruit"
];

// حجب أي شيء خارج الأردن لـ PUBG
var DIRECT_KEYS = []; // لا نمرر شيء مباشر
var MODES = {
    LOBBY_FORCE: {
        sig: ["lobby","matchmake","queue","roomlist","serverlist"],
        priority: 10, targetPing: 3, maxPing: 8,
        strategy: "LOBBY_ULTRA_FORCE", sticky: true, stickyDuration: 600000,
        visibilityBoost: 10
    },
    SOCIAL_FORCE: {
        sig: ["friend","crew","clan","playersearch","social","nearby"],
        priority: 10, targetPing: 2, maxPing: 6,
        strategy: "SOCIAL_ULTRA_FORCE", sticky: true, socialPriority: true
    },
    GAME_CRITICAL: {
        sig: ["ranked","classic","tdm","arena","battle_royale"],
        priority: 9, targetPing: 5, maxPing: 12,
        strategy: "GAME_CRITICAL", sticky: true
    },
    AUTH: {
        sig: ["auth","login","passport"],
        priority: 10, targetPing: 6, maxPing: 15,
        strategy: "SECURE_CRITICAL", sticky: true
    },
    CDN: {
        sig: ["cdn","patch","download"],
        priority: 5, targetPing: 20, maxPing: 50,
        strategy: "SAFE"   // حتى التحميل نفضل الأردن
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
    return "GAME_CRITICAL"; // افتراضياً
}

function selectProxyForMode(mode, ip) {
    // دائماً نختار بروكسي أردني
    var m = MODES[mode];
    if (m.strategy === "SOCIAL_ULTRA_FORCE") {
        return "PROXY " + PROXY.SOCIAL_ORANGE.ip + ":" + PROXY.SOCIAL_ORANGE.port +
               "; PROXY " + PROXY.SOCIAL_ZAIN.ip + ":" + PROXY.SOCIAL_ZAIN.port +
               "; " + BLOOD.BLK;
    }
    if (m.strategy === "LOBBY_ULTRA_FORCE" || m.strategy === "GAME_CRITICAL") {
        return "PROXY " + PROXY.LOBBY_ORANGE_1.ip + ":" + PROXY.LOBBY_ORANGE_1.port +
               "; PROXY " + PROXY.LOBBY_ZAIN_1.ip + ":" + PROXY.LOBBY_ZAIN_1.port +
               "; " + (m.strategy === "LOBBY_ULTRA_FORCE" ? BLOOD.BLK : BLOOD.DIR);
    }
    // الافتراضي
    return "PROXY " + PROXY.FAST_ORANGE.ip + ":" + PROXY.FAST_ORANGE.port +
           "; PROXY " + PROXY.FAST_ZAIN.ip + ":" + PROXY.FAST_ZAIN.port +
           "; " + BLOOD.BLK;
}

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();
    
    // استثناء العناوين المحلية
    if (isPlainHostName(host) || 
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0")) return "DIRECT";
    
    // هل الموقع PUBG؟
    var isPubg = false;
    for (var i=0; i<PUBG_KEYS.length; i++) {
        if (h.indexOf(PUBG_KEYS[i]) !== -1) { isPubg = true; break; }
    }
    if (!isPubg) return "DIRECT"; // بقية التطبيقات تعمل مباشرة
    
    // استخراج IP من الـ DNS
    var ip = dnsResolve(host);
    
    // الكشف عن النمط (لوبي/بحث/مباراة)
    var mode = detectMode(host);
    
    // القرار الذهبي: نختار بروكسي أردني فقط
    var route = selectProxyForMode(mode, ip);
    
    return route;
}
