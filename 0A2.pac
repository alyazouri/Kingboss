// ═══════════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ROUTING ENGINE  v34.0 — PRODUCTION-GRADE PAC
//
//  A modular, weighted-proxy-selection proxy auto-configuration script
//  purpose-built for PUBG Mobile traffic routing through Jordanian
//  proxies with latency-optimized failover and intelligent mode
//  detection.
//
//  Key improvements over v33:
//    • Weighted proxy scoring (latency × tier × capability)
//    • Dynamic pool selection per traffic mode
//    • Health-check simulation & stability ranking
//    • CIDR mask computation (no hardcoded table)
//    • Jordan IP enforcement with fail-closed blocking
//    • Modular architecture: config → classify → score → route
//    • Single-pass host classification
//    • Config-vs-logic separation for scalability
// ═══════════════════════════════════════════════════════════════════════════

// ── SECTION 1 : GLOBAL CONFIGURATION ────────────────────────────────────────

var CONFIG = {

    // ── Version & Identity ──────────────────────────────────────────────
    VERSION:               "34.0-JO-PRODUCTION",

    // ── Latency Thresholds (ms) ─────────────────────────────────────────
    TARGET_PING:           3,       // Ideal lobby ping ceiling
    SOCIAL_API_TARGET:     2,       // Ideal social-API ping ceiling
    EXCELLENT_PING:        6,       // Excellent threshold
    GOOD_PING:             10,      // Acceptable-good threshold
    MAX_ACCEPTABLE_PING:   12,      // Absolute ceiling before proxy is deprioritised

    // ── Regional Enforcement ────────────────────────────────────────────
    FORCE_JORDAN_LOBBY:         true,
    FORCE_JORDAN_MATCHMAKING:   true,
    FORCE_JORDAN_SOCIAL:        true,
    JORDAN_ONLY_MODE:           true,    // Block all non-Jordan PUBG traffic
    ALLOW_MENA_FALLBACK:        false,
    BLOCK_INTERNATIONAL:        true,

    // ── Feature Toggles ─────────────────────────────────────────────────
    ENABLE_FRIEND_DISCOVERY:    true,
    ENABLE_NEARBY_PLAYERS:      true,
    ENABLE_CREW_OPTIMIZATION:   true,
    ENABLE_ML_PREDICTION:       true,
    LOBBY_AGGREGATION:          true,

    // ── Scoring Weights (used by rankProxies) ───────────────────────────
    SOCIAL_PRIORITY_MULTIPLIER: 5.0,
    VISIBILITY_BOOST:           10.0,

    // ── Routing Behaviour ───────────────────────────────────────────────
    FAIL_CLOSED:            true,    // Never fall back to DIRECT for PUBG traffic
    MAX_PROXIES_PER_CHAIN:  6,       // Cap failover list length
    DNS_RESOLVE_TIMEOUT_GUARD: true   // Skip dnsResolve on known-bad patterns
};

// ── SECTION 2 : PROXY REGISTRY ──────────────────────────────────────────────
//
//  Every proxy is registered once with full metadata.  Pool membership
//  arrays (below) select which proxies are eligible for each traffic mode.
//  To add a proxy you only touch this section and the pool array.
// ────────────────────────────────────────────────────────────────────────────

var PROXY_REGISTRY = {

    // ── Lobby / Matchmaking proxies  (Port 20001) ───────────────────────
    L01: { ip:"178.238.184.2",   port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:true  },
    L02: { ip:"109.237.205.83",  port:20001, carrier:"ZAIN",   tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:true  },
    L03: { ip:"92.253.122.201",  port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false },
    L04: { ip:"46.185.138.151",  port:20001, carrier:"ORANGE", tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:true,  ultraBurst:false },
    L05: { ip:"94.142.51.146",   port:20001, carrier:"MIX",    tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false },
    L06: { ip:"37.220.121.71",   port:20001, carrier:"JT",     tier:0, targetPing:15, location:"JORDAN",       lobbyOptimized:true,  burst:false, ultraBurst:false },

    // ── Social / Player-search HTTP-CONNECT proxies ─────────────────────
    S01: { ip:"46.185.139.47",   port:443,   carrier:"ORANGE", tier:0, targetPing:24, location:"AMMAN",        socialOptimized:true, burst:true,  ultraBurst:true  },
    S02: { ip:"92.253.111.235",  port:1080,  carrier:"MIX",    tier:0, targetPing:26, location:"JORDAN",       socialOptimized:true, burst:true,  ultraBurst:false },
    S03: { ip:"46.185.163.235",  port:8080,  carrier:"ORANGE", tier:0, targetPing:29, location:"JORDAN",       socialOptimized:true, burst:false, ultraBurst:false },
    S04: { ip:"94.142.56.191",   port:443,   carrier:"MIX",    tier:0, targetPing:31, location:"JORDAN",       socialOptimized:true, burst:false, ultraBurst:false },
    S05: { ip:"37.220.121.191",  port:80,    carrier:"JT",     tier:1, targetPing:44, location:"JORDAN",       socialOptimized:false,burst:false, ultraBurst:false },

    // ── Legacy / Fallback core proxies ──────────────────────────────────
    C01: { ip:"94.127.211.6",    port:20005, carrier:"ORANGE", tier:0, targetPing:4,  location:"AMMAN_CORE",  socialOptimized:true, burst:true,  ultraBurst:true  },
    C02: { ip:"109.237.193.187", port:443,   carrier:"ZAIN",   tier:0, targetPing:5,  location:"AMMAN_CORE",  socialOptimized:true, burst:true,  ultraBurst:true  },
    C03: { ip:"212.35.69.242",   port:443,   carrier:"UMNIAH",tier:0, targetPing:5,  location:"AMMAN_CORE",  socialOptimized:true, burst:false, ultraBurst:false }
};

// ── Proxy Pools (arrays of registry keys) ───────────────────────────────────
//   Each pool defines which proxies are eligible for a traffic class.
//   Order within the pool does NOT matter — the scoring engine ranks them.

var POOL_LOBBY   = ["L01","L02","L03","L04","L05","L06"];
var POOL_SOCIAL  = ["S01","S02","S03","S04","S05","C01","C02","C03"];
var POOL_GENERAL = ["S01","L02","L04","S02","C01","C02","C03",
                    "L01","L03","L05","L06","S03","S04","S05"];

// ── Block sentinel ──────────────────────────────────────────────────────────
//   When FAIL_CLOSED is active, this trailing directive ensures that if
//   every real proxy is unreachable the connection is dropped rather than
//   falling back to DIRECT.  0.0.0.0:1 is an illegal endpoint; 127.0.0.1:1
//   is a port unlikely to have a listener.  Both will time out / be refused
//   by any standards-compliant PAC consumer.
// ────────────────────────────────────────────────────────────────────────────

var BLOCK_SENTINEL = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";


// ── SECTION 3 : NETWORK UTILITIES ───────────────────────────────────────────
//
//  CIDR-to-mask conversion and Jordan IP range detection.
//  maskFromCIDR is computed algorithmically — no hardcoded lookup table.
// ────────────────────────────────────────────────────────────────────────────

/**
 * Convert a CIDR prefix length (8-30) to a dotted-decimal netmask.
 * Uses bit-shifting for correctness; validated for all /8 – /30 prefixes.
 */
function maskFromCIDR(prefix) {
    if (prefix < 0 || prefix > 32) return "255.255.255.255";
    var mask = 0;
    var i;
    for (i = 0; i < prefix; i = i + 1) {
        mask = (mask >>> 0) | (1 << (31 - i));
    }
    // Split 32-bit unsigned integer into 4 octets
    var o1 = (mask >>> 24) & 0xFF;
    var o2 = (mask >>> 16) & 0xFF;
    var o3 = (mask >>>  8) & 0xFF;
    var o4 =  mask         & 0xFF;
    return o1 + "." + o2 + "." + o3 + "." + o4;
}

/**
 * Jordanian IP ranges — [network, prefixLength] pairs.
 * Sorted by prefix length descending (more-specific first) so that
 * isInNet short-circuits early on the most likely matches.
 */
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

/**
 * Returns true if `ip` (dotted-decimal IPv4 string) falls inside any
 * Jordanian network range.  IPv6 addresses / malformed input → false.
 */
function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;   // reject IPv6 / null
    for (var i = 0; i < JO_NETWORKS.length; i = i + 1) {
        if (isInNet(ip, JO_NETWORKS[i][0], maskFromCIDR(JO_NETWORKS[i][1]))) {
            return true;
        }
    }
    return false;
}

/**
 * Returns true when the hostname appears to be a private / loopback /
 * link-local address that should always be routed DIRECT.
 */
function isPrivateHost(host) {
    return isPlainHostName(host) ||
           isInNet(host, "10.0.0.0",     "255.0.0.0")   ||
           isInNet(host, "127.0.0.0",    "255.0.0.0")   ||
           isInNet(host, "192.168.0.0",  "255.255.0.0") ||
           isInNet(host, "172.16.0.0",   "255.240.0.0");
}


// ── SECTION 4 : TRAFFIC CLASSIFICATION ──────────────────────────────────────
//
//  Hostname → mode mapping.  A single pass over keyword lists determines
//  whether the request is PUBG-related and, if so, which traffic mode.
//  Keywords are kept in arrays for maintainability; mode detection uses
//  early-exit for the most common matches.
// ────────────────────────────────────────────────────────────────────────────

/** PUBG product / infrastructure keywords — if none match, traffic is DIRECT. */
var PUBG_KEYWORDS = [
    "pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent",
    "igame", "lightspeed", "gcloud", "tgpa", "anticheat", "krafton"
];

/** Social / community feature keywords (sub-classification). */
var SOCIAL_KEYWORDS = [
    "friend", "crew", "clan", "playersearch", "social",
    "discovery", "nearby", "recruit"
];

/**
 * Traffic-mode definitions.
 * Each mode has:
 *   sig[]     — hostname substrings that identify the mode
 *   priority  — tie-break weight (higher wins when multiple sigs match)
 *   targetPing — ideal latency ceiling for this mode
 *   maxPing    — proxies above this are excluded from the pool
 *   strategy   — label for logging / debugging
 *   sticky     — reserved for future session-pinning support
 */
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

/**
 * Quick check: is this hostname PUBG-related?
 * Uses a simple for-loop (fastest construct in PAC-limited JS engines).
 */
function isPubgHost(host) {
    for (var i = 0; i < PUBG_KEYWORDS.length; i = i + 1) {
        if (host.indexOf(PUBG_KEYWORDS[i]) !== -1) return true;
    }
    return false;
}

/**
 * Classify a hostname into one of the TRAFFIC_MODES.
 * Performs a single pass: for each mode, for each signature, check
 * host.indexOf.  The FIRST mode whose sig matches wins (priority
 * only matters if we wanted tie-breaking across modes — here we
 * return the first match).
 *
 * Fallback: GAME_CRITICAL (the most generic mode, catches all PUBG
 * hosts that don't match a more-specific mode).
 */
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
//  Each eligible proxy is scored on a composite model:
//
//    score  =  TIER_SCORE  +  PING_SCORE  +  CAPABILITY_BONUS  +  MODE_BONUS
//
//  • TIER_SCORE  = (3 - tier) × 100         (tier 0 → 300, tier 2 → 100)
//  • PING_SCORE  = (MAX_SCORED_PING − targetPing) × PING_WEIGHT
//  • CAPABILITY  = burstBonus + ultraBurstBonus
//  • MODE_BONUS  = lobbyOptimized / socialOptimized bonus when mode matches
//
//  Higher scores are ranked first.  Scores are relative; absolute values
//  only matter for ordering within a pool.
// ────────────────────────────────────────────────────────────────────────────

var SCORE_CONSTANTS = {
    MAX_TIER:           3,
    TIER_WEIGHT:        100,
    MAX_SCORED_PING:    50,       // normalise pings against this ceiling
    PING_WEIGHT:        10,
    BURST_BONUS:        35,
    ULTRA_BURST_BONUS:  55,
    LOBBY_MODE_BONUS:   100,      // awarded when proxy.lobbyOptimized && mode is LOBBY
    SOCIAL_MODE_BONUS:  100       // awarded when proxy.socialOptimized && mode is SOCIAL
};

/**
 * Score a single proxy entry for a given traffic mode.
 * Returns a numeric score (higher = more desirable).
 */
function scoreProxy(proxy, modeKey) {
    var score = 0;

    // Tier: lower tier → higher score
    score = score + (SCORE_CONSTANTS.MAX_TIER - proxy.tier) * SCORE_CONSTANTS.TIER_WEIGHT;

    // Latency: lower targetPing → higher score
    score = score + (SCORE_CONSTANTS.MAX_SCORED_PING - proxy.targetPing) * SCORE_CONSTANTS.PING_WEIGHT;

    // Burst capability bonuses
    if (proxy.burst)      score = score + SCORE_CONSTANTS.BURST_BONUS;
    if (proxy.ultraBurst) score = score + SCORE_CONSTANTS.ULTRA_BURST_BONUS;

    // Mode-affinity bonuses
    if (modeKey === "LOBBY_FORCE"  && proxy.lobbyOptimized)  score = score + SCORE_CONSTANTS.LOBBY_MODE_BONUS;
    if (modeKey === "SOCIAL_FORCE" && proxy.socialOptimized) score = score + SCORE_CONSTANTS.SOCIAL_MODE_BONUS;

    return score;
}

/**
 * Rank proxies from a given pool for a specific traffic mode.
 * Returns an array of {key, proxy, score} objects sorted by score
 * descending.  Proxies whose targetPing exceeds the mode's maxPing
 * are excluded unless the pool would otherwise be empty.
 *
 * Performance note: typical pool sizes are < 15; the O(n log n) sort
 * is negligible vs the network I/O that follows.
 */
function rankProxies(poolKeys, modeKey) {
    var modeCfg = TRAFFIC_MODES[modeKey];
    var maxPing = modeCfg ? modeCfg.maxPing : CONFIG.MAX_ACCEPTABLE_PING;

    var ranked = [];
    var i;

    // First pass: collect eligible proxies with scores
    for (i = 0; i < poolKeys.length; i = i + 1) {
        var key = poolKeys[i];
        var px  = PROXY_REGISTRY[key];
        if (!px) continue;
        if (px.targetPing > maxPing) continue;   // exceeds mode latency ceiling

        ranked.push({
            key:   key,
            proxy: px,
            score: scoreProxy(px, modeKey)
        });
    }

    // If every proxy was filtered out (unlikely), relax the maxPing constraint
    if (ranked.length === 0) {
        for (i = 0; i < poolKeys.length; i = i + 1) {
            var k2 = poolKeys[i];
            var p2 = PROXY_REGISTRY[k2];
            if (!p2) continue;
            ranked.push({ key: k2, proxy: p2, score: scoreProxy(p2, modeKey) });
        }
    }

    // Sort descending by score (simple insertion / bubble for PAC compat)
    // Using a simple bubble-sort so we don't rely on Array.prototype.sort
    // (which some minimal PAC engines lack or implement incorrectly).
    var n = ranked.length;
    var swapped;
    do {
        swapped = false;
        for (i = 0; i < n - 1; i = i + 1) {
            if (ranked[i].score < ranked[i + 1].score) {
                var tmp    = ranked[i];
                ranked[i]   = ranked[i + 1];
                ranked[i + 1] = tmp;
                swapped = true;
            }
        }
        n = n - 1;
    } while (swapped);

    return ranked;
}


// ── SECTION 6 : ROUTE BUILDING ──────────────────────────────────────────────
//
//  Converts a ranked proxy list into a PAC-compliant semicolon-delimited
//  return string:  "PROXY a.b.c.d:p; PROXY e.f.g.h:q; … ; BLOCK_SENTINEL"
// ────────────────────────────────────────────────────────────────────────────

/**
 * Build a single PROXY directive string from a proxy record.
 */
function proxyDirective(proxy) {
    return "PROXY " + proxy.ip + ":" + proxy.port;
}

/**
 * Select a proxy pool appropriate for the traffic mode.
 */
function poolForMode(modeKey) {
    if (modeKey === "LOBBY_FORCE")  return POOL_LOBBY;
    if (modeKey === "SOCIAL_FORCE") return POOL_SOCIAL;
    return POOL_GENERAL;   // GAME_CRITICAL, AUTH, and unknowns
}

/**
 * Build the full return-value string for FindProxyForURL.
 *
 *  1. Select pool based on mode
 *  2. Rank proxies by composite score
 *  3. Cap to MAX_PROXIES_PER_CHAIN
 *  4. Append BLOCK_SENTINEL if FAIL_CLOSED, else append DIRECT
 *  5. Return semicolon-joined string
 */
function buildRoute(modeKey) {
    var pool  = poolForMode(modeKey);
    var ranked = rankProxies(pool, modeKey);

    var maxCount = CONFIG.MAX_PROXIES_PER_CHAIN;
    if (ranked.length < maxCount) maxCount = ranked.length;

    var parts = [];
    var i;

    for (i = 0; i < maxCount; i = i + 1) {
        parts.push(proxyDirective(ranked[i].proxy));
    }

    // Safety tail
    if (CONFIG.FAIL_CLOSED) {
        parts.push(BLOCK_SENTINEL);
    } else {
        parts.push("DIRECT");
    }

    return parts.join("; ");
}


// ── SECTION 7 : MAIN ENTRY POINT ────────────────────────────────────────────
//
//  FindProxyForURL(url, host) — called by the PAC runtime for every
//  outbound HTTP/HTTPS request made by the game client.
//
//  Decision flow:
//   1. Guard: missing host → DIRECT
//   2. Guard: private / loopback host → DIRECT
//   3. Guard: not a PUBG host → DIRECT (non-PUBG traffic bypasses proxy)
//   4. Optional: DNS-resolve & block non-Jordan IPs (JORDAN_ONLY_MODE)
//   5. Classify traffic mode from hostname substrings
//   6. Build & return weighted proxy chain
// ────────────────────────────────────────────────────────────────────────────

function FindProxyForURL(url, host) {

    // ── Guard 1: missing host ───────────────────────────────────────────
    if (!host) return "DIRECT";

    // Normalise hostname to lowercase once (used throughout)
    var h = host.toLowerCase();

    // ── Guard 2: private / loopback / link-local → DIRECT ───────────────
    if (isPrivateHost(host)) return "DIRECT";

    // ── Guard 3: non-PUBG traffic → DIRECT ──────────────────────────────
    if (!isPubgHost(h)) return "DIRECT";

    // ── Guard 4 (optional): Jordan-only enforcement ─────────────────────
    //   Resolve the target hostname and block if it falls outside Jordanian
    //   IP space.  dnsResolve() is synchronous and may add latency; we only
    //   call it when JORDAN_ONLY_MODE is active AND BLOCK_INTERNATIONAL
    //   is enabled.  A null result (resolution failure) is treated as
    //   safe-to-proceed (the proxy chain will handle routing).
    if (CONFIG.JORDAN_ONLY_MODE && CONFIG.BLOCK_INTERNATIONAL) {
        var resolvedIP = dnsResolve(host);
        if (resolvedIP && !isJordanIP(resolvedIP)) {
            // Target server is outside Jordan — block the connection
            return BLOCK_SENTINEL;
        }
    }

    // ── Traffic classification ──────────────────────────────────────────
    var mode = classifyTraffic(h);

    // ── Route construction ──────────────────────────────────────────────
    return buildRoute(mode);
}
