// ═══════════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ROUTING ENGINE  v34.1 — "كل الأردنيين" EDITION
//
//  مصمم خصيصاً لتعظيم ظهور اللاعبين الأردنيين في:
//    • Friend Discovery   (اكتشاف الأصدقاء)
//    • Crew Recruitment   (تجنيد الكرو)
//    • Nearby Players     (اللاعبين القريبين)
//    • Player Search      (البحث عن لاعبين)
//    • Clan / Social API  (واجهات الكلان الاجتماعية)
//
//  يضمن تغطية جميع شركات الاتصالات الأردنية:
//    🇯🇴 ZAIN · ORANGE · UMNIAH · JT · MIX
//
//  Key enhancements over v34:
//    • JORDAN_DISCOVERY_MAX mode — social traffic hits ALL carriers
//    • Per-carrier social chains for full coverage
//    • Aggressive ultra-burst fallback on social
//    • No social proxy excluded — كل البروكسيات تشتغل للسوشيال
//    • Carrier-diversity scoring bonus
// ═══════════════════════════════════════════════════════════════════════════

// ── SECTION 1 : GLOBAL CONFIGURATION ────────────────────────────────────────

var CONFIG = {

    VERSION:               "34.1-JO-DISCOVERY-MAX",

    // ── Latency Thresholds ──────────────────────────────────────────────
    TARGET_PING:           3,
    SOCIAL_API_TARGET:     2,
    EXCELLENT_PING:        6,
    GOOD_PING:             10,
    MAX_ACCEPTABLE_PING:   12,

    // ── Regional Enforcement ────────────────────────────────────────────
    FORCE_JORDAN_LOBBY:         true,
    FORCE_JORDAN_MATCHMAKING:   true,
    FORCE_JORDAN_SOCIAL:        true,
    JORDAN_ONLY_MODE:           true,
    ALLOW_MENA_FALLBACK:        false,
    BLOCK_INTERNATIONAL:        true,

    // ── Feature Toggles ─────────────────────────────────────────────────
    ENABLE_FRIEND_DISCOVERY:    true,
    ENABLE_NEARBY_PLAYERS:      true,
    ENABLE_CREW_OPTIMIZATION:   true,
    ENABLE_ML_PREDICTION:       true,
    LOBBY_AGGREGATION:          true,

    // ── 🔥 SOCIAL DISCOVERY MAX ─────────────────────────────────────────
    //     عندما مفعّل، كل البروكسيات الأردنية تشتغل للسوشيال —
    //     مش بس البروكسيات المخصصة للسوشيال.
    //     هذا يضمن إنك تشوف كل الأردنيين بغض النظر عن شركة الاتصالات.
    JORDAN_DISCOVERY_MAX:       true,   // ⭐ الميزة الرئيسية
    SOCIAL_CARRIER_DIVERSITY:   true,   // ضمان تنوع شركات الاتصالات
    SOCIAL_MAX_CHAIN:           10,     // عدد البروكسيات في سلسلة السوشيال
    SOCIAL_BURST_REQUIRED:      false,  // لا تستثني بروكسيات بدون burst للسوشيال

    // ── Scoring Weights ─────────────────────────────────────────────────
    SOCIAL_PRIORITY_MULTIPLIER: 8.0,    // ⬆ رفعناها من 5.0 لـ 8.0
    VISIBILITY_BOOST:           15.0,   // ⬆ رفعناها من 10.0 لـ 15.0
    CARRIER_DIVERSITY_BONUS:    80,     // ⭐ مكافأة تنوع شركات الاتصالات

    // ── Routing Behaviour ───────────────────────────────────────────────
    FAIL_CLOSED:            true,
    MAX_PROXIES_PER_CHAIN:  6,
    DNS_RESOLVE_TIMEOUT_GUARD: true
};

// ── SECTION 2 : PROXY REGISTRY ──────────────────────────────────────────────
//
//  كل بروكسي مسجل مرة واحدة. تم إضافة حقل carrierDiversityWeight
//  لضمان توزيع عادل بين شركات الاتصالات في وضع JORDAN_DISCOVERY_MAX.
// ────────────────────────────────────────────────────────────────────────────

var PROXY_REGISTRY = {

    // ── Lobby / Matchmaking proxies  (Port 20001) ───────────────────────
    L01: { ip:"178.238.184.2",   port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:true,  socialOk:true  },
    L02: { ip:"109.237.205.83",  port:20001, carrier:"ZAIN",   tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:true,  socialOk:true  },
    L03: { ip:"92.253.122.201",  port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false, socialOk:true  },
    L04: { ip:"46.185.138.151",  port:20001, carrier:"ORANGE", tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:false, socialOk:true  },
    L05: { ip:"94.142.51.146",   port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false, socialOk:true  },
    L06: { ip:"37.220.121.71",   port:20001, carrier:"JT",     tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false, socialOk:true  },

    // ── Social / Player-search HTTP-CONNECT proxies ─────────────────────
    S01: { ip:"46.185.139.47",   port:443,   carrier:"ORANGE", tier:0, targetPing:24, location:"AMMAN",        socialOptimized:true, burst:true,  ultraBurst:true,  socialOk:true  },
    S02: { ip:"92.253.111.235",  port:1080,  carrier:"MIX",    tier:0, targetPing:26, location:"JORDAN",       socialOptimized:true, burst:true,  ultraBurst:false, socialOk:true  },
    S03: { ip:"46.185.163.235",  port:8080,  carrier:"ORANGE", tier:0, targetPing:29, location:"JORDAN",       socialOptimized:true, burst:false, ultraBurst:false, socialOk:true  },
    S04: { ip:"94.142.56.191",   port:443,   carrier:"MIX",    tier:0, targetPing:31, location:"JORDAN",       socialOptimized:true, burst:false, ultraBurst:false, socialOk:true  },
    S05: { ip:"37.220.121.191",  port:80,    carrier:"JT",     tier:1, targetPing:44, location:"JORDAN",       socialOptimized:false,burst:false, ultraBurst:false, socialOk:true  },

    // ── Legacy / Fallback core proxies ──────────────────────────────────
    C01: { ip:"94.127.211.6",    port:20005, carrier:"ORANGE", tier:0, targetPing:4,  location:"AMMAN_CORE",  socialOptimized:true, burst:true,  ultraBurst:true,  socialOk:true  },
    C02: { ip:"109.237.193.187", port:443,   carrier:"ZAIN",   tier:0, targetPing:5,  location:"AMMAN_CORE",  socialOptimized:true, burst:true,  ultraBurst:true,  socialOk:true  },
    C03: { ip:"212.35.69.242",   port:443,   carrier:"UMNIAH",tier:0, targetPing:5,  location:"AMMAN_CORE",  socialOptimized:true, burst:false, ultraBurst:false, socialOk:true  }
};

// ── Proxy Pools ─────────────────────────────────────────────────────────────

var POOL_LOBBY   = ["L01","L02","L03","L04","L05","L06"];

// 🔥 SOCIAL POOL — في وضع JORDAN_DISCOVERY_MAX، كل البروكسيات مشتركة
var POOL_SOCIAL  = ["S01","S02","S03","S04","S05","C01","C02","C03"];

// 🔥 SOCIAL MAX POOL — كل البروكسيات الأردنية بدون استثناء
//    (يُستخدم عند تفعيل JORDAN_DISCOVERY_MAX)
var POOL_SOCIAL_MAX = [
    "S01","S02","S03","S04","S05",   // social-dedicated
    "C01","C02","C03",               // core
    "L01","L02","L03","L04","L05","L06"  // lobby — تشتغل للسوشيال كمان
];

var POOL_GENERAL = ["S01","L02","L04","S02","C01","C02","C03",
                    "L01","L03","L05","L06","S03","S04","S05"];

// ── Block sentinel ──────────────────────────────────────────────────────────
var BLOCK_SENTINEL = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";


// ── SECTION 3 : NETWORK UTILITIES ───────────────────────────────────────────

function maskFromCIDR(prefix) {
    if (prefix < 0 || prefix > 32) return "255.255.255.255";
    var mask = 0;
    var i;
    for (i = 0; i < prefix; i = i + 1) {
        mask = (mask >>> 0) | (1 << (31 - i));
    }
    var o1 = (mask >>> 24) & 0xFF;
    var o2 = (mask >>> 16) & 0xFF;
    var o3 = (mask >>>  8) & 0xFF;
    var o4 =  mask         & 0xFF;
    return o1 + "." + o2 + "." + o3 + "." + o4;
}

var JO_NETWORKS = [
    ["178.20.184.0",   21],
    ["46.185.128.0",   17],
    ["31.25.128.0",    17],
    ["82.212.128.0",   17],
    ["62.72.160.0",    19],
    ["94.127.208.0",   20],
    ["149.200.136.0",  22],
    ["79.173.192.0",   18],
    ["109.237.192.0",  18],
    ["212.35.64.0",    18],
    ["176.28.0.0",     15],
    ["82.212.0.0",     16],
    ["188.247.0.0",    16],
    ["94.230.0.0",     16],
    ["91.106.0.0",     16],
    ["37.220.0.0",     16],
    ["176.203.0.0",    16],
    ["5.11.0.0",       16],
    ["37.75.0.0",      16],
    ["77.44.0.0",      16]
];

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETWORKS.length; i = i + 1) {
        if (isInNet(ip, JO_NETWORKS[i][0], maskFromCIDR(JO_NETWORKS[i][1]))) {
            return true;
        }
    }
    return false;
}

function isPrivateHost(host) {
    return isPlainHostName(host) ||
           isInNet(host, "10.0.0.0",     "255.0.0.0")   ||
           isInNet(host, "127.0.0.0",    "255.0.0.0")   ||
           isInNet(host, "192.168.0.0",  "255.255.0.0") ||
           isInNet(host, "172.16.0.0",   "255.240.0.0");
}


// ── SECTION 4 : TRAFFIC CLASSIFICATION ──────────────────────────────────────

var PUBG_KEYWORDS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

var TRAFFIC_MODES = {

    LOBBY_FORCE: {
        sig:        ["lobby","matchmake","queue","roomlist","serverlist"],
        priority:   10,
        targetPing: 3,
        maxPing:    8,
        strategy:   "LOBBY_ULTRA_FORCE",
        sticky:     true
    },

    SOCIAL_FORCE: {
        sig:        ["friend","crew","clan","playersearch","social","nearby"],
        priority:   10,
        targetPing: 2,
        maxPing:    6,
        strategy:   "SOCIAL_ULTRA_FORCE",
        sticky:     true
    },

    GAME_CRITICAL: {
        sig:        ["ranked","classic","tdm","arena","battle_royale",
                     "erangel","miramar"],
        priority:   9,
        targetPing: 5,
        maxPing:    12,
        strategy:   "GAME_CRITICAL",
        sticky:     true
    },

    AUTH: {
        sig:        ["auth","login","passport"],
        priority:   10,
        targetPing: 6,
        maxPing:    15,
        strategy:   "SECURE_CRITICAL",
        sticky:     true
    }
};

function isPubgHost(host) {
    for (var i = 0; i < PUBG_KEYWORDS.length; i = i + 1) {
        if (host.indexOf(PUBG_KEYWORDS[i]) !== -1) return true;
    }
    return false;
}

function classifyTraffic(host) {
    var modeKey;
    for (modeKey in TRAFFIC_MODES) {
        if (TRAFFIC_MODES.hasOwnProperty(modeKey)) {
            var sigs = TRAFFIC_MODES[modeKey].sig;
            for (var s = 0; s < sigs.length; s = s + 1) {
                if (host.indexOf(sigs[s]) !== -1) {
                    return modeKey;
                }
            }
        }
    }
    return "GAME_CRITICAL";
}


// ── SECTION 5 : PROXY SCORING ENGINE ────────────────────────────────────────
//
//  🔥 تم إضافة مكافأة تنوع شركات الاتصالات (Carrier Diversity Bonus)
//     لضمان توزيع البروكسيات على جميع الشركات الأردنية في وضع
//     JORDAN_DISCOVERY_MAX.
//
//  آلية التنوع:
//    • يتم تتبع الشركات المستخدمة في السلسلة
//    • أول بروكسي من كل شركة يحصل على CARRIER_DIVERSITY_BONUS
//    • هذا يضمن وجود ZAIN + ORANGE + UMNIAH + JT + MIX في السلسلة
// ────────────────────────────────────────────────────────────────────────────

var SCORE_CONSTANTS = {
    MAX_TIER:               3,
    TIER_WEIGHT:            100,
    MAX_SCORED_PING:        50,
    PING_WEIGHT:            10,
    BURST_BONUS:            35,
    ULTRA_BURST_BONUS:      55,
    LOBBY_MODE_BONUS:       100,
    SOCIAL_MODE_BONUS:      100,
    CARRIER_DIVERSITY_BONUS: 80    // ⭐ مكافأة أول ظهور لكل شركة
};

/**
 * Score a single proxy for a given mode, with optional carrier-diversity
 * tracking.  `usedCarriers` is an object whose keys are carrier names
 * already placed earlier in the chain; if this proxy's carrier hasn't
 * been used yet, it gets a bonus.
 */
function scoreProxy(proxy, modeKey, usedCarriers) {
    var score = 0;

    // Tier
    score = score + (SCORE_CONSTANTS.MAX_TIER - proxy.tier) * SCORE_CONSTANTS.TIER_WEIGHT;

    // Latency
    score = score + (SCORE_CONSTANTS.MAX_SCORED_PING - proxy.targetPing) * SCORE_CONSTANTS.PING_WEIGHT;

    // Burst
    if (proxy.burst)      score = score + SCORE_CONSTANTS.BURST_BONUS;
    if (proxy.ultraBurst) score = score + SCORE_CONSTANTS.ULTRA_BURST_BONUS;

    // Mode affinity
    if (modeKey === "LOBBY_FORCE"  && proxy.lobbyOptimized)  score = score + SCORE_CONSTANTS.LOBBY_MODE_BONUS;
    if (modeKey === "SOCIAL_FORCE" && proxy.socialOptimized) score = score + SCORE_CONSTANTS.SOCIAL_MODE_BONUS;

    // ⭐ Carrier diversity: bonus if this carrier hasn't appeared yet
    if (usedCarriers && proxy.carrier && !usedCarriers[proxy.carrier]) {
        score = score + SCORE_CONSTANTS.CARRIER_DIVERSITY_BONUS;
    }

    return score;
}

/**
 * Rank proxies for a given pool and mode.
 *
 * 🔥 في وضع JORDAN_DISCOVERY_MAX مع SOCIAL_FORCE:
 *    • لا يتم استبعاد أي بروكسي بناءً على maxPing
 *    • الجميع مشترك لضمان أقصى ظهور للاعبين الأردنيين
 */
function rankProxies(poolKeys, modeKey) {
    var modeCfg = TRAFFIC_MODES[modeKey];
    var maxPing = modeCfg ? modeCfg.maxPing : CONFIG.MAX_ACCEPTABLE_PING;

    // 🔥 SOCIAL MAX: لا تستثني أحد
    var isSocialMax = (modeKey === "SOCIAL_FORCE" && CONFIG.JORDAN_DISCOVERY_MAX);

    var ranked = [];
    var i;

    for (i = 0; i < poolKeys.length; i = i + 1) {
        var key = poolKeys[i];
        var px  = PROXY_REGISTRY[key];
        if (!px) continue;

        // في وضع SOCIAL MAX، لا تستثني أي بروكسي
        if (!isSocialMax && px.targetPing > maxPing) continue;

        // أول scoring بدون usedCarriers — بنجمّع الكل أول
        ranked.push({
            key:   key,
            proxy: px,
            score: scoreProxy(px, modeKey, null)
        });
    }

    // إذا الكل انرشح (حماية)
    if (ranked.length === 0) {
        for (i = 0; i < poolKeys.length; i = i + 1) {
            var k2 = poolKeys[i];
            var p2 = PROXY_REGISTRY[k2];
            if (!p2) continue;
            ranked.push({ key: k2, proxy: p2, score: scoreProxy(p2, modeKey, null) });
        }
    }

    // Bubble sort descending
    var n = ranked.length;
    var swapped;
    do {
        swapped = false;
        for (i = 0; i < n - 1; i = i + 1) {
            if (ranked[i].score < ranked[i + 1].score) {
                var tmp      = ranked[i];
                ranked[i]     = ranked[i + 1];
                ranked[i + 1] = tmp;
                swapped = true;
            }
        }
        n = n - 1;
    } while (swapped);

    // ⭐ CARRIER DIVERSITY RE-RANK (للسوشيال فقط)
    //    بعد الترتيب الأساسي، نضمن أن أول 5 بروكسيات تغطي
    //    5 شركات مختلفة إن أمكن.
    if (modeKey === "SOCIAL_FORCE" && CONFIG.SOCIAL_CARRIER_DIVERSITY) {
        ranked = ensureCarrierDiversity(ranked);
    }

    return ranked;
}

/**
 * ⭐ إعادة ترتيب لضمان تنوع شركات الاتصالات في مقدمة السلسلة.
 *    هذا يضمن وجود ZAIN + ORANGE + UMNIAH + JT + MIX
 *    في أول السلسلة بحيث تغطي كل اللاعبين الأردنيين.
 */
function ensureCarrierDiversity(ranked) {
    var result = [];
    var seenCarriers = {};
    var remaining = [];
    var i;

    // Pass 1: take the first occurrence of each unique carrier
    for (i = 0; i < ranked.length; i = i + 1) {
        var carrier = ranked[i].proxy.carrier;
        if (carrier && !seenCarriers[carrier]) {
            result.push(ranked[i]);
            seenCarriers[carrier] = true;
        } else {
            remaining.push(ranked[i]);
        }
    }

    // Pass 2: append everything else
    for (i = 0; i < remaining.length; i = i + 1) {
        result.push(remaining[i]);
    }

    return result;
}


// ── SECTION 6 : ROUTE BUILDING ──────────────────────────────────────────────

function proxyDirective(proxy) {
    return "PROXY " + proxy.ip + ":" + proxy.port;
}

/**
 * 🔥 اختيار البول المناسب:
 *    • SOCIAL_FORCE + JORDAN_DISCOVERY_MAX → POOL_SOCIAL_MAX (كل البروكسيات)
 *    • SOCIAL_FORCE عادي → POOL_SOCIAL (المخصصة للسوشيال فقط)
 *    • LOBBY_FORCE → POOL_LOBBY
 *    • الباقي → POOL_GENERAL
 */
function poolForMode(modeKey) {
    if (modeKey === "LOBBY_FORCE")  return POOL_LOBBY;

    if (modeKey === "SOCIAL_FORCE") {
        // 🔥 SOCIAL MAX: كل البروكسيات الأردنية تشتغل للسوشيال
        if (CONFIG.JORDAN_DISCOVERY_MAX) return POOL_SOCIAL_MAX;
        return POOL_SOCIAL;
    }

    return POOL_GENERAL;
}

function buildRoute(modeKey) {
    var pool   = poolForMode(modeKey);
    var ranked = rankProxies(pool, modeKey);

    // 🔥 للسوشيال في وضع MAX، نسمح بسلسلة أطول
    var maxCount = CONFIG.MAX_PROXIES_PER_CHAIN;
    if (modeKey === "SOCIAL_FORCE" && CONFIG.JORDAN_DISCOVERY_MAX) {
        maxCount = CONFIG.SOCIAL_MAX_CHAIN;
    }

    if (ranked.length < maxCount) maxCount = ranked.length;

    var parts = [];
    var i;

    for (i = 0; i < maxCount; i = i + 1) {
        parts.push(proxyDirective(ranked[i].proxy));
    }

    if (CONFIG.FAIL_CLOSED) {
        parts.push(BLOCK_SENTINEL);
    } else {
        parts.push("DIRECT");
    }

    return parts.join("; ");
}


// ── SECTION 7 : MAIN ENTRY POINT ────────────────────────────────────────────

function FindProxyForURL(url, host) {

    if (!host) return "DIRECT";

    var h = host.toLowerCase();

    if (isPrivateHost(host)) return "DIRECT";

    if (!isPubgHost(h)) return "DIRECT";

    if (CONFIG.JORDAN_ONLY_MODE && CONFIG.BLOCK_INTERNATIONAL) {
        var resolvedIP = dnsResolve(host);
        if (resolvedIP && !isJordanIP(resolvedIP)) {
            return BLOCK_SENTINEL;
        }
    }

    var mode = classifyTraffic(h);

    return buildRoute(mode);
}
