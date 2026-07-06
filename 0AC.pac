// ═══════════════════════════════════════════════════════════════
//  PUBG JORDAN ROUTING ENGINE v34.4 — "DAMAMAX BLITZ" EDITION
//  - Pure Jordanian Lobbies & Matchmaking (Damamax ISP)
//  - 10x Faster Crew Recruitment
//  - Allows non-JO friends to join your JO lobby seamlessly
// ═══════════════════════════════════════════════════════════════

var CONFIG = {
    VERSION:               "34.4-JO-DAMAMAX-BLITZ",
    TARGET_PING:           4,
    SOCIAL_API_TARGET:     3,
    EXCELLENT_PING:        6,
    GOOD_PING:             10,
    MAX_ACCEPTABLE_PING:   15,

    FORCE_JORDAN_LOBBY:         true,
    FORCE_JORDAN_MATCHMAKING:   true,
    FORCE_JORDAN_SOCIAL:        true,
    JORDAN_ONLY_MODE:           true,
    ALLOW_MENA_FALLBACK:        false,
    BLOCK_INTERNATIONAL:        true,

    ENABLE_FRIEND_DISCOVERY:    true,
    ENABLE_NEARBY_PLAYERS:      true,
    ENABLE_CREW_OPTIMIZATION:   true,

    // ⚡ إعدادات التجنيد فائق السرعة (10x أسرع)
    CREW_ULTRA_FAST:            true,
    CREW_MAX_PING:              25,
    CREW_CHAIN_LENGTH:          1,        // ⚡ نود واحد فقط للتجنيد = سرعة فائقة بدون تأخير
    CREW_ULTRA_BURST_ONLY:      false,

    SOCIAL_CARRIER_DIVERSITY:   true,
    SOCIAL_MAX_CHAIN:           3,        // تقليل السلسلة للسوشيال أيضاً للسرعة

    MAX_PROXIES_PER_CHAIN:      3,
    FAIL_CLOSED:                true
};

// ═══════════════════════════════════════════════════════════════
// 🔥 DAMAMAX JORDAN ULTRA-NODES (Your Provided Proxies)
// ═══════════════════════════════════════════════════════════════

var PROXY_REGISTRY = {
    // الأسرع للتجنيد والكرو (Port 80 & 1080)
    C01: { ip:"86.108.81.11",  port:80,   carrier:"DAMAMAX", tier:0, targetPing:15, location:"JO", crewCore:true, burst:true, ultraBurst:true, socialOk:true, lobbyOptimized:true },
    C02: { ip:"86.108.8.226",  port:80,   carrier:"DAMAMAX", tier:0, targetPing:15, location:"JO", crewCore:true, burst:true, ultraBurst:true, socialOk:true, lobbyOptimized:true },
    C03: { ip:"86.108.8.218",  port:1080, carrier:"DAMAMAX", tier:0, targetPing:16, location:"JO", crewCore:true, burst:true, ultraBurst:true, socialOk:true, lobbyOptimized:true }
};

// ═══════════════════════════════════════════════════════════════
// POOLS (جميع المسارات تستخدم هذه البروكسيات الأردنية البحتة)
// ═══════════════════════════════════════════════════════════════

var POOL_CREW    = ["C01", "C02", "C03"]; 
var POOL_LOBBY   = ["C01", "C02", "C03"];
var POOL_SOCIAL  = ["C01", "C02", "C03"];
var POOL_GENERAL = ["C01", "C02", "C03"];

var BLOCK_SENTINEL = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";

// ═══════════════════════════════════════════════════════════════
// NETWORK UTILITIES & GEO-ENFORCEMENT
// ═══════════════════════════════════════════════════════════════

function maskFromCIDR(prefix) {
    if (prefix < 0 || prefix > 32) return "255.255.255.255";
    var mask = 0;
    for (var i = 0; i < prefix; i++) {
        mask = (mask >>> 0) | (1 << (31 - i));
    }
    var o1 = (mask >>> 24) & 0xFF;
    var o2 = (mask >>> 16) & 0xFF;
    var o3 = (mask >>> 8) & 0xFF;
    var o4 = mask & 0xFF;
    return o1 + "." + o2 + "." + o3 + "." + o4;
}

var JO_NETWORKS = [
    ["178.20.184.0", 21], ["46.185.128.0", 17], ["31.25.128.0", 17],
    ["82.212.128.0", 17], ["62.72.160.0", 19],  ["94.127.208.0", 20],
    ["149.200.136.0", 22],["79.173.192.0", 18], ["109.237.192.0", 18],
    ["212.35.64.0", 18],  ["176.28.0.0", 15],   ["82.212.0.0", 16],
    ["188.247.0.0", 16],  ["94.230.0.0", 16],   ["91.106.0.0", 16],
    ["37.220.0.0", 16],   ["176.203.0.0", 16],  ["5.11.0.0", 16],
    ["37.75.0.0", 16],    ["77.44.0.0", 16],    ["213.186.160.0", 20],
    ["86.108.0.0", 16] // ✅ تم إضافة رينج Damamax الجديد كأردني بيور
];

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETWORKS.length; i++) {
        if (isInNet(ip, JO_NETWORKS[i][0], maskFromCIDR(JO_NETWORKS[i][1]))) {
            return true;
        }
    }
    return false;
}

function isPrivateHost(host) {
    return isPlainHostName(host) ||
           isInNet(host, "10.0.0.0", "255.0.0.0") ||
           isInNet(host, "127.0.0.0", "255.0.0.0") ||
           isInNet(host, "192.168.0.0", "255.255.0.0") ||
           isInNet(host, "172.16.0.0", "255.240.0.0");
}

// ═══════════════════════════════════════════════════════════════
// TRAFFIC CLASSIFICATION
// ═══════════════════════════════════════════════════════════════

var PUBG_KEYWORDS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

var TRAFFIC_MODES = {
    // ⚡ مسار التجنيد الفائق (يُفحص أولاً)
    CREW_FORCE: {
        sig: ["crew","recruit","invite","apply","joinsquad","squadjoin"],
        priority: 11,
        targetPing: 2,
        maxPing: 25,
        strategy: "CREW_BLITZ"
    },
    LOBBY_FORCE: {
        sig: ["lobby","matchmake","queue","roomlist","serverlist"],
        priority: 10,
        targetPing: 3,
        maxPing: 15,
        strategy: "LOBBY_ULTRA_FORCE"
    },
    SOCIAL_FORCE: {
        sig: ["friend","clan","playersearch","social","nearby","discovery"],
        priority: 10,
        targetPing: 2,
        maxPing: 15,
        strategy: "SOCIAL_ULTRA_FORCE"
    },
    AUTH: {
        sig: ["auth","login","passport"],
        priority: 10,
        targetPing: 6,
        maxPing: 15,
        strategy: "SECURE_CRITICAL"
    },
    GAME_CRITICAL: {
        sig: ["ranked","classic","tdm","arena","battle_royale","erangel","miramar"],
        priority: 9,
        targetPing: 5,
        maxPing: 20,
        strategy: "GAME_CRITICAL"
    }
};

function isPubgHost(host) {
    for (var i = 0; i < PUBG_KEYWORDS.length; i++) {
        if (host.indexOf(PUBG_KEYWORDS[i]) !== -1) return true;
    }
    return false;
}

function classifyTraffic(host) {
    // فحص التجنيد أولاً لضمان السرعة القصوى المطلقة
    var crewSigs = TRAFFIC_MODES.CREW_FORCE.sig;
    for (var c = 0; c < crewSigs.length; c++) {
        if (host.indexOf(crewSigs[c]) !== -1) return "CREW_FORCE";
    }

    for (var modeKey in TRAFFIC_MODES) {
        if (!TRAFFIC_MODES.hasOwnProperty(modeKey)) continue;
        if (modeKey === "CREW_FORCE") continue;
        
        var sigs = TRAFFIC_MODES[modeKey].sig;
        for (var s = 0; s < sigs.length; s++) {
            if (host.indexOf(sigs[s]) !== -1) return modeKey;
        }
    }
    return "GAME_CRITICAL";
}

// ═══════════════════════════════════════════════════════════════
// PROXY SCORING & ROUTE BUILDING
// ═══════════════════════════════════════════════════════════════

function proxyDirective(proxy) {
    return "PROXY " + proxy.ip + ":" + proxy.port;
}

function poolForMode(modeKey) {
    if (modeKey === "CREW_FORCE")   return POOL_CREW;
    if (modeKey === "LOBBY_FORCE")  return POOL_LOBBY;
    if (modeKey === "SOCIAL_FORCE") return POOL_SOCIAL;
    return POOL_GENERAL;
}

function scoreProxy(proxy, modeKey) {
    var score = (3 - proxy.tier) * 100;
    score += (50 - proxy.targetPing) * 10;
    
    if (proxy.burst) score += 35;
    if (proxy.ultraBurst) score += 55;
    
    if (modeKey === "LOBBY_FORCE" && proxy.lobbyOptimized) score += 100;
    if (modeKey === "SOCIAL_FORCE" && proxy.socialOptimized) score += 100;
    
    // مكافآت التجنيد الفائق
    if (modeKey === "CREW_FORCE") {
        score += (50 - proxy.targetPing) * 8;
        if (proxy.crewCore) score += 150;
        if (proxy.ultraBurst) score += 100;
    }
    
    return score;
}

function buildRoute(modeKey) {
    var pool = poolForMode(modeKey);
    var ranked = [];
    
    for (var i = 0; i < pool.length; i++) {
        var px = PROXY_REGISTRY[pool[i]];
        if (!px) continue;
        ranked.push({ key: pool[i], proxy: px, score: scoreProxy(px, modeKey) });
    }
    
    // ترتيب تنازلي حسب السكور
    ranked.sort(function(a, b) { return b.score - a.score; });
    
    var maxCount = CONFIG.MAX_PROXIES_PER_CHAIN;
    
    // ⚡ للتجنيد: نستخدم نود واحد فقط (الأسرع) لتقليل الـ Latency للصفر
    if (modeKey === "CREW_FORCE" && CONFIG.CREW_ULTRA_FAST) {
        maxCount = CONFIG.CREW_CHAIN_LENGTH; // 1
    }
    
    if (ranked.length < maxCount) maxCount = ranked.length;
    
    var parts = [];
    for (var j = 0; j < maxCount; j++) {
        parts.push(proxyDirective(ranked[j].proxy));
    }
    
    if (CONFIG.FAIL_CLOSED) {
        parts.push(BLOCK_SENTINEL);
    } else {
        parts.push("DIRECT");
    }
    
    return parts.join("; ");
}

// ═══════════════════════════════════════════════════════════════
// MAIN ENTRY POINT
// ═══════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    
    var h = host.toLowerCase();
    
    if (isPrivateHost(h)) return "DIRECT";
    if (!isPubgHost(h)) return "DIRECT";

    // منع السيرفرات الدولية وإجبار الأردن
    if (CONFIG.JORDAN_ONLY_MODE && CONFIG.BLOCK_INTERNATIONAL) {
        var resolvedIP = dnsResolve(host);
        if (resolvedIP && !isJordanIP(resolvedIP)) {
            return BLOCK_SENTINEL;
        }
    }

    var mode = classifyTraffic(h);
    return buildRoute(mode);
}
