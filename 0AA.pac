// ═══════════════════════════════════════════════════════════════
//  PUBG JORDAN ROUTING ENGINE v34.3 — OPTIMIZED REAL NODES
//  Updated with your latest scan results
// ═══════════════════════════════════════════════════════════════

var CONFIG = {
    VERSION:               "34.3-JO-OPTIMIZED",
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

    CREW_ULTRA_FAST:            true,
    CREW_MAX_PING:              25,
    CREW_CHAIN_LENGTH:          3,
    CREW_ULTRA_BURST_ONLY:      false,

    SOCIAL_CARRIER_DIVERSITY:   true,
    SOCIAL_MAX_CHAIN:           8,
    JORDAN_DISCOVERY_MAX:       true,   // لضمان أقصى انتشار

    MAX_PROXIES_PER_CHAIN:      6,
    FAIL_CLOSED:                true
};

// ═══════════════════════════════════════════════════════════════
// 🔥 REAL JORDAN OPTIMIZED PROXIES (from your scan)
// ═══════════════════════════════════════════════════════════════

var PROXY_REGISTRY = {

    // ===== CORE FAST (24–30ms) =====
    C01: { ip:"213.186.163.147", port:80,  carrier:"ORANGE", tier:0, targetPing:22, location:"JO", crewCore:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },
    C02: { ip:"213.186.163.24",  port:80,  carrier:"ZAIN",   tier:0, targetPing:24, location:"JO", crewCore:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },
    C03: { ip:"213.186.167.51",  port:80,  carrier:"ORANGE", tier:0, targetPing:24, location:"JO", crewCore:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },
    C04: { ip:"109.237.193.246", port:80,  carrier:"JO",     tier:0, targetPing:18, location:"JO", crewCore:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },

    // ===== LOBBY (25–35ms stable) =====
    L01: { ip:"213.186.162.154", port:80,  carrier:"ZAIN",   tier:0, targetPing:26, lobbyOptimized:true, burst:true, ultraBurst:false, socialOk:true },
    L02: { ip:"213.186.161.26",  port:80,  carrier:"ORANGE", tier:0, targetPing:24, lobbyOptimized:true, burst:true, ultraBurst:false, socialOk:true },
    L03: { ip:"213.186.164.146", port:80,  carrier:"JO",     tier:0, targetPing:25, lobbyOptimized:true, burst:true, ultraBurst:false, socialOk:true },
    L04: { ip:"213.186.169.251", port:80,  carrier:"JO",     tier:0, targetPing:21, lobbyOptimized:true, burst:true, ultraBurst:false, socialOk:true },

    // ===== SOCIAL / DISCOVERY =====
    S01: { ip:"213.186.160.242", port:80, carrier:"JO", tier:0, targetPing:25, socialOptimized:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },
    S02: { ip:"213.186.161.187", port:80, carrier:"JO", tier:0, targetPing:29, socialOptimized:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },
    S03: { ip:"213.186.174.174", port:80, carrier:"JO", tier:0, targetPing:24, socialOptimized:true, burst:true, ultraBurst:false, socialOk:true, crewOk:true },

    // ===== OPEN PORT GAME UDP STYLE NODES (20001-20005) =====
    U01: { ip:"109.237.197.184", port:20001, carrier:"JO", tier:0, targetPing:28, crewCore:true, ultraBurst:true, burst:true, socialOk:true, crewOk:true },
    U02: { ip:"109.237.205.83",  port:20003, carrier:"JO", tier:0, targetPing:30, crewCore:true, ultraBurst:true, burst:true, socialOk:true, crewOk:true },
    U03: { ip:"213.186.162.35",  port:20002, carrier:"JO", tier:0, targetPing:32, crewCore:true, ultraBurst:true, burst:true, socialOk:true, crewOk:true }
};

// ═══════════════════════════════════════════════════════════════
// POOLS
// ═══════════════════════════════════════════════════════════════

var POOL_LOBBY   = ["L01","L02","L03","L04"];
var POOL_SOCIAL  = ["S01","S02","S03"];
var POOL_CREW    = ["C01","C02","C03","C04","U01","U02","U03"];
var POOL_GENERAL = ["L01","L02","S01","C01"];

var BLOCK_SENTINEL = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";

// ── Network utilities ─────────────────────────────────────────

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
    for (var i = 0; i < JO_NETWORKS.length; i++) {
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

// ── PUBG Classification ──────────────────────────────────────

var PUBG_KEYWORDS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

var TRAFFIC_MODES = {
    CREW_FORCE: {
        sig:        ["crew","recruit","invite","apply","joinsquad","squadjoin"],
        priority:   11,
        targetPing: 2,
        maxPing:    CONFIG.CREW_MAX_PING,
        strategy:   "CREW_BLITZ",
        sticky:     true
    },
    LOBBY_FORCE: {
        sig:        ["lobby","matchmake","queue","roomlist","serverlist"],
        priority:   10,
        targetPing: 3,
        maxPing:    8,
        strategy:   "LOBBY_ULTRA_FORCE",
        sticky:     true
    },
    SOCIAL_FORCE: {
        sig:        ["friend","clan","playersearch","social","nearby","discovery"],
        priority:   10,
        targetPing: 2,
        maxPing:    6,
        strategy:   "SOCIAL_ULTRA_FORCE",
        sticky:     true
    },
    GAME_CRITICAL: {
        sig:        ["ranked","classic","tdm","arena","battle_royale","erangel","miramar"],
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
    for (var i = 0; i < PUBG_KEYWORDS.length; i++) {
        if (host.indexOf(PUBG_KEYWORDS[i]) !== -1) return true;
    }
    return false;
}

function classifyTraffic(host) {
    var crewSigs = TRAFFIC_MODES.CREW_FORCE.sig;
    for (var c = 0; c < crewSigs.length; c++) {
        if (host.indexOf(crewSigs[c]) !== -1) return "CREW_FORCE";
    }
    for (var modeKey in TRAFFIC_MODES) {
        if (!TRAFFIC_MODES.hasOwnProperty(modeKey)) continue;
        if (modeKey === "CREW_FORCE") continue;
        var sigs = TRAFFIC_MODES[modeKey].sig;
        for (var s = 0; s < sigs.length; s++) {
            if (host.indexOf(sigs[s]) !== -1) {
                return modeKey;
            }
        }
    }
    return "GAME_CRITICAL";
}

// ── Scoring Engine ───────────────────────────────────────────

var SCORE_CONSTANTS = {
    MAX_TIER:                3,
    TIER_WEIGHT:             100,
    MAX_SCORED_PING:         50,
    PING_WEIGHT:             10,
    BURST_BONUS:             35,
    ULTRA_BURST_BONUS:       55,
    LOBBY_MODE_BONUS:        100,
    SOCIAL_MODE_BONUS:       100,
    CARRIER_DIVERSITY_BONUS: 80,
    CREW_SPEED_BONUS:        200,
    CREW_CORE_BONUS:         150
};

function scoreProxy(proxy, modeKey, usedCarriers) {
    var score = 0;
    score = score + (SCORE_CONSTANTS.MAX_TIER - proxy.tier) * SCORE_CONSTANTS.TIER_WEIGHT;
    score = score + (SCORE_CONSTANTS.MAX_SCORED_PING - proxy.targetPing) * SCORE_CONSTANTS.PING_WEIGHT;
    if (proxy.burst)      score = score + SCORE_CONSTANTS.BURST_BONUS;
    if (proxy.ultraBurst) score = score + SCORE_CONSTANTS.ULTRA_BURST_BONUS;
    if (modeKey === "LOBBY_FORCE"  && proxy.lobbyOptimized)  score = score + SCORE_CONSTANTS.LOBBY_MODE_BONUS;
    if (modeKey === "SOCIAL_FORCE" && proxy.socialOptimized) score = score + SCORE_CONSTANTS.SOCIAL_MODE_BONUS;
    if (modeKey === "CREW_FORCE") {
        score = score + (SCORE_CONSTANTS.MAX_SCORED_PING - proxy.targetPing) * 8;
        if (proxy.crewCore) score = score + SCORE_CONSTANTS.CREW_CORE_BONUS;
        score = score + SCORE_CONSTANTS.CREW_SPEED_BONUS;
    }
    if (modeKey === "SOCIAL_FORCE" && usedCarriers && proxy.carrier && !usedCarriers[proxy.carrier]) {
        score = score + SCORE_CONSTANTS.CARRIER_DIVERSITY_BONUS;
    }
    return score;
}

function rankProxies(poolKeys, modeKey) {
    var modeCfg = TRAFFIC_MODES[modeKey];
    var maxPing = modeCfg ? modeCfg.maxPing : CONFIG.MAX_ACCEPTABLE_PING;
    var isSocialMax = (modeKey === "SOCIAL_FORCE" && CONFIG.JORDAN_DISCOVERY_MAX);
    var isCrewBlitz = (modeKey === "CREW_FORCE" && CONFIG.CREW_ULTRA_FAST);
    var ranked = [];
    for (var i = 0; i < poolKeys.length; i++) {
        var key = poolKeys[i];
        var px  = PROXY_REGISTRY[key];
        if (!px) continue;
        if (isCrewBlitz) {
            if (px.targetPing > CONFIG.CREW_MAX_PING) continue;
            if (CONFIG.CREW_ULTRA_BURST_ONLY && !px.ultraBurst) continue;
        } else if (!isSocialMax && px.targetPing > maxPing) {
            continue;
        }
        ranked.push({
            key:   key,
            proxy: px,
            score: scoreProxy(px, modeKey, null)
        });
    }
    if (ranked.length === 0) {
        for (var j = 0; j < poolKeys.length; j++) {
            var k2 = poolKeys[j];
            var p2 = PROXY_REGISTRY[k2];
            if (!p2) continue;
            ranked.push({ key: k2, proxy: p2, score: scoreProxy(p2, modeKey, null) });
        }
    }
    var n = ranked.length;
    var swapped;
    do {
        swapped = false;
        for (i = 0; i < n - 1; i++) {
            if (ranked[i].score < ranked[i + 1].score) {
                var tmp = ranked[i];
                ranked[i] = ranked[i + 1];
                ranked[i + 1] = tmp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    if (modeKey === "SOCIAL_FORCE" && CONFIG.SOCIAL_CARRIER_DIVERSITY) {
        ranked = ensureCarrierDiversity(ranked);
    }
    return ranked;
}

function ensureCarrierDiversity(ranked) {
    var result = [];
    var seenCarriers = {};
    var remaining = [];
    for (var i = 0; i < ranked.length; i++) {
        var carrier = ranked[i].proxy.carrier;
        if (carrier && !seenCarriers[carrier]) {
            result.push(ranked[i]);
            seenCarriers[carrier] = true;
        } else {
            remaining.push(ranked[i]);
        }
    }
    for (var j = 0; j < remaining.length; j++) {
        result.push(remaining[j]);
    }
    return result;
}

// ── Route Building ──────────────────────────────────────────

function proxyDirective(proxy) {
    return "PROXY " + proxy.ip + ":" + proxy.port;
}

function poolForMode(modeKey) {
    if (modeKey === "CREW_FORCE")   return POOL_CREW;
    if (modeKey === "LOBBY_FORCE")  return POOL_LOBBY;
    if (modeKey === "SOCIAL_FORCE") return POOL_SOCIAL;
    return POOL_GENERAL;
}

function buildRoute(modeKey) {
    var pool   = poolForMode(modeKey);
    var ranked = rankProxies(pool, modeKey);
    var maxCount = CONFIG.MAX_PROXIES_PER_CHAIN;
    if (modeKey === "CREW_FORCE" && CONFIG.CREW_ULTRA_FAST) {
        maxCount = CONFIG.CREW_CHAIN_LENGTH;
    } else if (modeKey === "SOCIAL_FORCE" && CONFIG.JORDAN_DISCOVERY_MAX) {
        maxCount = CONFIG.SOCIAL_MAX_CHAIN;
    }
    if (ranked.length < maxCount) maxCount = ranked.length;
    var parts = [];
    for (var i = 0; i < maxCount; i++) {
        parts.push(proxyDirective(ranked[i].proxy));
    }
    if (CONFIG.FAIL_CLOSED) {
        parts.push(BLOCK_SENTINEL);
    } else {
        parts.push("DIRECT");
    }
    return parts.join("; ");
}

// ── Main Entry Point ────────────────────────────────────────

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
