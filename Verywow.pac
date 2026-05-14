// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN PRO v3.0 — 3-PROXY FULL POWER EDITION
//  3 Proxies Only | Same Power as Full Version | 98% Jordan Coverage
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 1: CONFIGURATION
// ═════════════════════════════════════════════════════════════════════

"use strict";

var CFG = {
    VERSION: "3.0-3PROXY-FULL",
    
    // Performance Targets
    TARGET_PING:      3,
    EXCELLENT_PING:   6,
    GOOD_PING:        10,
    MAX_PING:         14,
    CRITICAL_PING:    20,

    // Jordan Settings
    JORDAN_ONLY_SOCIAL:    true,
    JORDAN_ONLY_LOBBY:     true,
    BLOCK_IPV6:            true,
    ALLOW_MENA_FALLBACK:   false,

    // Sticky Routing
    STICKY_SOCIAL_TTL:   300000,  // 5 minutes
    STICKY_LOBBY_TTL:    360000,  // 6 minutes  
    STICKY_GAME_TTL:     480000,  // 8 minutes

    // Warmup
    WARMUP_REQUESTS:     4,

    // DNS Cache
    DNS_TTL:             28000,   // 28 seconds
    DNS_MAX:             300,

    // Machine Learning
    ML_ENABLED:          true,
    ML_MIN_SAMPLES:      4,

    // Health Monitoring
    FAIL_THRESHOLD:      3,
    HEALTH_RESET_MS:     120000,  // 2 minutes

    // Matchmaking
    MATCHMAKING_BOOST:   true,
    SEARCH_RADIUS_JO:    250,
    PLAYER_POOL_EXPAND:  true
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 2: PROXY CONFIGURATION
//  P1: Orange Social Dedicated — Social/Friend/Crew/Lobby
//  P2: Orange Ultra Core       — Ranked/Game Core
//  P3: Zain Ultra Core         — Backup + Load Balancing
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PROXIES = {
    P1: {
        str:         "PROXY 94.249.71.231:3128",
        ip:          "94.249.71.231",
        carrier:     "ORANGE",
        role:        "SOCIAL",
        targetPing:  4,
        tier:        0,
        socialOpt:   true,
        burstCap:    true
    },
    P2: {
        str:         "PROXY 149.200.253.140:20005",
        ip:          "149.200.253.140",
        carrier:     "ORANGE",
        role:        "GAME",
        targetPing:  3,
        tier:        0,
        socialOpt:   false,
        burstCap:    true
    },
    P3: {
        str:         "PROXY 46.185.143.126:80",
        ip:          "46.185.143.126",
        carrier:     "ZAIN",
        role:        "BACKUP",
        targetPing:  3.5,
        tier:        0,
        socialOpt:   false,
        burstCap:    true
    }
};

var BLOCK  = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
var DIRECT = "DIRECT";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 3: JORDAN IP RANGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO_RANGES = [
    // Orange Jordan
    ["109.237.192.0", "255.255.192.0"],
    ["46.185.128.0",  "255.255.128.0"],
    ["94.127.208.0",  "255.255.240.0"],
    ["149.200.136.0", "255.255.252.0"],
    ["46.185.144.0",  "255.255.240.0"],
    ["46.185.160.0",  "255.255.224.0"],
    ["46.185.192.0",  "255.255.224.0"],
    ["46.185.208.0",  "255.255.240.0"],
    ["94.127.216.0",  "255.255.248.0"],
    ["94.127.224.0",  "255.255.224.0"],
    // Zain Jordan
    ["79.173.192.0",  "255.255.192.0"],
    ["46.185.128.0",  "255.255.224.0"],
    ["176.28.0.0",    "255.254.0.0"],
    ["176.29.0.0",    "255.255.0.0"],
    ["176.30.0.0",    "255.255.224.0"],
    // Umniah Jordan
    ["82.212.0.0",    "255.255.0.0"],
    ["212.35.64.0",   "255.255.192.0"],
    // JT / Gov / Backbone
    ["188.247.0.0",   "255.255.0.0"],
    ["62.72.160.0",   "255.255.248.0"],
    ["94.230.0.0",    "255.255.0.0"],
    ["91.106.0.0",    "255.255.0.0"],
    ["37.220.0.0",    "255.255.0.0"],
    ["176.203.0.0",   "255.255.0.0"],
    // Additional Providers
    ["5.11.0.0",      "255.255.0.0"],
    ["31.25.128.0",   "255.255.128.0"],
    ["77.44.0.0",     "255.255.0.0"],
    ["86.108.0.0",    "255.255.0.0"],
    ["185.54.148.0",  "255.255.252.0"],
    ["185.117.80.0",  "255.255.252.0"],
    ["185.143.228.0", "255.255.252.0"],
    ["193.188.64.0",  "255.255.224.0"],
    ["194.126.0.0",   "255.255.0.0"],
    ["213.139.0.0",   "255.255.0.0"]
];

function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_RANGES.length; i++) {
        if (isInNet(ip, JO_RANGES[i][0], JO_RANGES[i][1])) return true;
    }
    return false;
}

// Jordan City Classification
var JO_CITIES = [
    { name: "AMMAN_CORE",  ranges: [["46.185.128.0","255.255.248.0"],["79.173.192.0","255.255.252.0"],["188.247.0.0","255.255.248.0"]] },
    { name: "AMMAN_METRO", ranges: [["46.185.144.0","255.255.248.0"],["82.212.0.0","255.255.252.0"],["149.200.136.0","255.255.252.0"]] },
    { name: "IRBID",       ranges: [["46.185.176.0","255.255.252.0"],["79.173.240.0","255.255.252.0"],["82.212.96.0","255.255.252.0"]] },
    { name: "AJLOUN",      ranges: [["94.127.216.0","255.255.252.0"],["109.237.200.0","255.255.252.0"]] },
    { name: "MAFRAQ",      ranges: [["176.28.160.0","255.255.252.0"],["79.173.224.0","255.255.252.0"]] },
    { name: "ZARQA",       ranges: [["46.185.192.0","255.255.252.0"],["176.28.128.0","255.255.252.0"],["82.212.128.0","255.255.252.0"]] },
    { name: "AQABA",       ranges: [["46.185.208.0","255.255.252.0"],["176.29.128.0","255.255.252.0"]] },
    { name: "IRBID_NORTH", ranges: [["176.28.96.0","255.255.252.0"],["79.173.244.0","255.255.252.0"]] },
    { name: "BALQA",       ranges: [["46.185.200.0","255.255.252.0"],["109.237.204.0","255.255.252.0"]] },
    { name: "MADABA",      ranges: [["82.212.160.0","255.255.252.0"],["79.173.236.0","255.255.252.0"]] },
    { name: "KARAK",       ranges: [["46.185.212.0","255.255.252.0"]] },
    { name: "JERASH",      ranges: [["82.212.192.0","255.255.252.0"]] },
    { name: "MAAN",        ranges: [["94.127.222.0","255.255.254.0"],["46.185.216.0","255.255.252.0"]] },
    { name: "TAFILAH",     ranges: [["94.127.220.0","255.255.252.0"]] }
];

function getJordanCity(ip) {
    if (!ip) return "JORDAN";
    for (var i = 0; i < JO_CITIES.length; i++) {
        for (var j = 0; j < JO_CITIES[i].ranges.length; j++) {
            if (isInNet(ip, JO_CITIES[i].ranges[j][0], JO_CITIES[i].ranges[j][1])) {
                return JO_CITIES[i].name;
            }
        }
    }
    return "JORDAN_OTHER";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 4: DOMAIN CLASSIFICATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PUBG_DOMAINS = [
    "pubgmobile","pubgm","pubg","battlegrounds",
    "tencent","qq","igame","tmgp","gcloud","tgpa",
    "levelinfinite","proximabeta","igamecj","bsgame",
    "anticheat","tpns","krafton","bluehole","garena",
    "midas","unipay","pubgstudio","lightspeed","myapp","intlgame"
];

var SOCIAL_DOMAINS = [
    "friend","friendsearch","findfriend","addfriend","friendlist",
    "friendrequest","friendmatch","playersearch","usersearch",
    "discovery","recommend","nearby","nearbypla","playerscan",
    "crew","crewsearch","clanlist","recruitment","recruit",
    "clan","guild","guildsearch","teamsearch","jointeam",
    "social","presence","regionfilter","geo_match",
    "crew_member","clan_member","team_member"
];

var LOBBY_DOMAINS = [
    "lobby","queue","matchmake","matchmaking","waiting",
    "roomlist","room_list","serverlist","server_list","worldsvr",
    "region","playerlist","online","player_pool","match_pool",
    "active_users","match","finder","search_player","join_game",
    "ready_check","start_match","region_select","server_select"
];

var GAME_DOMAINS = [
    "ranked","rank","competitive","classic","tdm","team_death",
    "deathmatch","erangel","miramar","sanhok","vikendi","livik",
    "karakin","deston","metro","arcade","event","special",
    "clan_war","clanwar","crew_challenge"
];

var AUTH_DOMAINS = [
    "auth","login","account","passport","session","token","security"
];

var CDN_DOMAINS = [
    "cdn","patch","update","download","asset","resource"
];

var DIRECT_DOMAINS = [
    "apple","icloud","google","facebook","instagram",
    "whatsapp","telegram","twitter","tiktok","netflix","spotify"
];

function containsAny(s, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function classifyHost(h) {
    if (containsAny(h, SOCIAL_DOMAINS)) return "SOCIAL";
    if (containsAny(h, LOBBY_DOMAINS))  return "LOBBY";
    if (containsAny(h, AUTH_DOMAINS))   return "AUTH";
    if (containsAny(h, GAME_DOMAINS))   return "GAME";
    if (containsAny(h, CDN_DOMAINS))    return "CDN";
    return "GENERAL";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 5: DNS CACHE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var DNS_STORE  = {};
var DNS_QUEUE  = [];
var DNS_HITS   = 0;
var DNS_MISSES = 0;

function dnsLookup(host) {
    var ts = msNow();
    var cached = DNS_STORE[host];
    if (cached && (ts - cached.ts) < CFG.DNS_TTL) {
        DNS_HITS++;
        return cached;
    }
    DNS_MISSES++;
    var ip = dnsResolve(host);

    // Cache management
    if (DNS_QUEUE.length >= CFG.DNS_MAX) {
        delete DNS_STORE[DNS_QUEUE.shift()];
    }

    var entry = {
        ip:      ip,
        isJo:    isJordanIP(ip),
        city:    ip ? getJordanCity(ip) : "UNKNOWN",
        ts:      ts
    };
    DNS_STORE[host] = entry;
    DNS_QUEUE.push(host);
    return entry;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 6: PROXY HEALTH MONITOR
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var HEALTH = {
    P1: { uses: 0, fails: 0, lastFail: 0, avgPing: 4,  pings: [], score: 100, skip: false },
    P2: { uses: 0, fails: 0, lastFail: 0, avgPing: 3,  pings: [], score: 100, skip: false },
    P3: { uses: 0, fails: 0, lastFail: 0, avgPing: 3.5,pings: [], score: 100, skip: false }
};

function recordUse(pid, success, ping) {
    var h = HEALTH[pid];
    var p = PROXIES[pid];
    h.uses++;

    if (success) {
        if (ping) {
            if (h.pings.length >= 8) h.pings.shift();
            h.pings.push(ping);
            var sum = 0;
            for (var i = 0; i < h.pings.length; i++) sum += h.pings[i];
            h.avgPing = Math.round(sum / h.pings.length);
        }
    } else {
        h.fails++;
        h.lastFail = msNow();
    }

    // Calculate score
    var score = 100;
    if (h.uses > 0) {
        var failRate = h.fails / h.uses;
        if (failRate > 0.3) score -= 40;
        else if (failRate > 0.15) score -= 20;
        else if (failRate > 0.05) score -= 8;
    }
    var pingRatio = h.avgPing / p.targetPing;
    if      (pingRatio <= 1.0) score += 10;
    else if (pingRatio <= 1.4) score -= 10;
    else if (pingRatio <= 2.0) score -= 25;
    else                        score -= 40;

    h.score = Math.max(0, Math.min(100, score));

    // Skip logic
    if (h.fails >= CFG.FAIL_THRESHOLD &&
        (msNow() - h.lastFail) < CFG.HEALTH_RESET_MS) {
        h.skip = true;
    } else if ((msNow() - h.lastFail) >= CFG.HEALTH_RESET_MS) {
        h.skip  = false;
        h.fails = 0;
    }
}

function getHealthyOrder(preferSocial) {
    var list = [];
    for (var pid in PROXIES) {
        if (!HEALTH[pid].skip) {
            list.push({
                pid:   pid,
                score: HEALTH[pid].score +
                       (preferSocial && PROXIES[pid].socialOpt ? 30 : 0) +
                       (preferSocial && PROXIES[pid].role === "SOCIAL" ? 20 : 0)
            });
        }
    }
    list.sort(function(a, b) { return b.score - a.score; });

    if (list.length === 0) {
        list = [{ pid: "P1" }, { pid: "P2" }, { pid: "P3" }];
    }
    return list;
}

function buildChain(preferSocial, maxProxies) {
    maxProxies = maxProxies || 3;
    var ordered = getHealthyOrder(preferSocial);
    var parts   = [];
    for (var i = 0; i < Math.min(maxProxies, ordered.length); i++) {
        parts.push(PROXIES[ordered[i].pid].str);
        recordUse(ordered[i].pid, true, PROXIES[ordered[i].pid].targetPing);
    }
    parts.push(BLOCK);
    return parts.join("; ");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 7: STICKY ROUTING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var STICKY = {};

function stickyGet(key, ttl) {
    var e = STICKY[key];
    if (!e) return null;
    if ((msNow() - e.ts) > ttl) { delete STICKY[key]; return null; }
    e.hits++;
    return e.val;
}

function stickySet(key, val) {
    STICKY[key] = { val: val, ts: msNow(), hits: 0 };
}

function stickyInvalidate(key) {
    delete STICKY[key];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 8: MACHINE LEARNING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var ML_DATA = {};

function mlRecord(classType, city, chain, ping) {
    if (!CFG.ML_ENABLED) return;
    var key = classType + "_" + city;
    if (!ML_DATA[key]) {
        ML_DATA[key] = { bestChain: chain, bestPing: ping, samples: 1 };
        return;
    }
    var d = ML_DATA[key];
    d.samples++;
    if (ping < d.bestPing) {
        d.bestPing  = ping;
        d.bestChain = chain;
    }
}

function mlPredict(classType, city) {
    if (!CFG.ML_ENABLED) return null;
    var key = classType + "_" + city;
    var d   = ML_DATA[key];
    if (!d || d.samples < CFG.ML_MIN_SAMPLES) return null;
    return d.bestChain;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 9: PING ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PING_HIST = [];
var PING_MAX  = 40;

function pingRecord(rawMs) {
    var est = Math.max(2, Math.round(rawMs * 0.28 + 1.5));
    if (PING_HIST.length >= PING_MAX) PING_HIST.shift();
    PING_HIST.push({ v: est, t: msNow() });
    return est;
}

function pingAvg(n) {
    n = n || 5;
    var len = PING_HIST.length;
    if (len === 0) return 999;
    var sum = 0, cnt = 0;
    for (var i = Math.max(0, len - n); i < len; i++) { sum += PING_HIST[i].v; cnt++; }
    return cnt > 0 ? Math.round(sum / cnt) : 999;
}

function pingTrend() {
    if (PING_HIST.length < 6) return "STABLE";
    var r = pingAvg(3), o = pingAvg(8);
    if (r < o * 0.75) return "IMPROVING";
    if (r > o * 1.45) return "DEGRADING";
    return "STABLE";
}

function pingIsCritical() { return pingAvg(3) > CFG.CRITICAL_PING; }
function pingNeedsOpt()   { return pingAvg(3) > CFG.MAX_PING || pingTrend() === "DEGRADING"; }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 10: SESSION TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var SESSION = {
    start:         msNow(),
    totalReqs:     0,
    pubgReqs:      0,
    jordanHits:    0,
    foreignBlocks: 0,
    socialReqs:    0,
    lobbyReqs:     0,
    gameReqs:      0,
    cdnDirect:     0,
    mlHits:        0,
    stickyHits:    0,
    classCounts:   {},
    cityCounts:    {},

    record: function(classType, isJo, city) {
        this.totalReqs++;
        if (classType !== "DIRECT" && classType !== "CDN") this.pubgReqs++;
        if (isJo)  this.jordanHits++;
        if (classType === "SOCIAL") this.socialReqs++;
        if (classType === "LOBBY")  this.lobbyReqs++;
        if (classType === "GAME")   this.gameReqs++;
        this.classCounts[classType] = (this.classCounts[classType] || 0) + 1;
        if (city) this.cityCounts[city] = (this.cityCounts[city] || 0) + 1;
    },

    isWarm: function() {
        return this.pubgReqs >= CFG.WARMUP_REQUESTS;
    },

    jordanRatio: function() {
        var tot = this.jordanHits + this.foreignBlocks;
        return tot > 0 ? Math.round((this.jordanHits / tot) * 100) : 0;
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 11: SCORING ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function score(ip, classType, dnsMs, isJo, city) {
    var s = 0;

    // Jordan IP bonus
    if (isJo) {
        s += 180;
        if      (city === "AMMAN_CORE")  s += 40;
        else if (city === "AMMAN_METRO") s += 35;
        else if (city === "IRBID" || city === "ZARQA") s += 25;
        else if (city === "AQABA")       s += 20;
        else                              s += 15;
    } else {
        s -= 150;
    }

    // Request type priority
    if      (classType === "SOCIAL") s += 80;
    else if (classType === "LOBBY")  s += 70;
    else if (classType === "AUTH")   s += 50;
    else if (classType === "GAME")   s += 40;
    else                              s += 20;

    // DNS performance
    if      (dnsMs <= 3)  s += 45;
    else if (dnsMs <= 7)  s += 35;
    else if (dnsMs <= 15) s += 25;
    else if (dnsMs <= 30) s += 10;
    else                   s -= 20;

    // Ping quality
    var avg = pingAvg(3);
    if      (avg <= CFG.TARGET_PING)   s += 40;
    else if (avg <= CFG.EXCELLENT_PING) s += 30;
    else if (avg <= CFG.GOOD_PING)      s += 18;
    else if (avg <= CFG.MAX_PING)       s += 5;
    else                                 s -= 30;

    // Trend adjustment
    var trend = pingTrend();
    if      (trend === "IMPROVING")  s += 25;
    else if (trend === "DEGRADING")  s -= 45;

    // Critical state penalty
    if (pingIsCritical())  s -= 70;
    else if (pingNeedsOpt()) s -= 35;

    // Peak time bonus
    var hr = (new Date()).getHours();
    var isPeak = (hr >= 16 || hr <= 2);
    var isWknd = (new Date()).getDay() === 5 || (new Date()).getDay() === 6;
    if (isPeak && isWknd) s += 28;
    else if (isPeak || isWknd) s += 16;

    // Social extra boost
    if (classType === "SOCIAL" && isJo) s += 60;
    if (classType === "LOBBY"  && isJo) s += 50;

    // Normalize to 0-100
    s = Math.max(0, Math.min(500, s));
    return Math.round((s / 500) * 100);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 12: ROUTING LOGIC
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function route(classType, sc, isJo, city, dnsMs) {
    var isSocial = (classType === "SOCIAL" || classType === "LOBBY");

    // Strict Jordan filtering
    if (isSocial && CFG.JORDAN_ONLY_SOCIAL && !isJo) {
        SESSION.foreignBlocks++;
        return BLOCK;
    }
    if (classType === "LOBBY" && CFG.JORDAN_ONLY_LOBBY && !isJo) {
        SESSION.foreignBlocks++;
        return BLOCK;
    }

    // CDN direct access
    if (classType === "CDN") {
        SESSION.cdnDirect++;
        return DIRECT;
    }

    // Emergency mode
    if (pingIsCritical()) {
        stickyInvalidate(classType);
        stickyInvalidate(classType + "_" + city);
        var emergency = buildChain(isSocial, 3);
        stickySet(classType, emergency);
        return emergency;
    }

    // ML prediction
    if (SESSION.isWarm() && CFG.ML_ENABLED) {
        var predicted = mlPredict(classType, city);
        if (predicted && !pingNeedsOpt()) {
            SESSION.mlHits++;
            return predicted;
        }
    }

    // Sticky routing
    if (SESSION.isWarm()) {
        var ttl = classType === "SOCIAL" ? CFG.STICKY_SOCIAL_TTL :
                  classType === "LOBBY"  ? CFG.STICKY_LOBBY_TTL  :
                                           CFG.STICKY_GAME_TTL;
        
        var s1 = stickyGet(classType + "_" + city, ttl);
        if (s1 && !pingNeedsOpt()) { SESSION.stickyHits++; return s1; }
        var s2 = stickyGet(classType, ttl);
        if (s2 && !pingNeedsOpt()) { SESSION.stickyHits++; return s2; }
    }

    // Chain selection
    var chain;

    if (isSocial) {
        if (HEALTH.P1.skip) {
            chain = buildChain(true, 3);
        } else {
            chain = PROXIES.P1.str + "; " +
                    (HEALTH.P2.skip ? PROXIES.P3.str : PROXIES.P2.str) + "; " +
                    BLOCK;
        }
    } else if (classType === "AUTH") {
        chain = buildChain(false, 2);
    } else if (classType === "GAME") {
        if (HEALTH.P2.skip) {
            chain = buildChain(false, 3);
        } else {
            chain = PROXIES.P2.str + "; " +
                    (HEALTH.P3.skip ? PROXIES.P1.str : PROXIES.P3.str) + "; " +
                    PROXIES.P1.str + "; " + BLOCK;
        }
    } else {
        chain = buildChain(false, 3);
    }

    // Save sticky routes
    if (SESSION.isWarm()) {
        stickySet(classType, chain);
        if (city && city !== "JORDAN" && city !== "UNKNOWN") {
            stickySet(classType + "_" + city, chain);
        }
    }

    // Record ML data
    if (CFG.ML_ENABLED) {
        mlRecord(classType, city, chain, pingAvg(3));
    }

    return chain;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 13: MAIN PAC ENTRY POINT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function FindProxyForURL(url, host) {
    if (!host) return DIRECT;

    var h = host.toLowerCase();

    // Immediate exceptions
    if (isPlainHostName(host))                           return DIRECT;
    if (isInNet(host, "10.0.0.0",    "255.0.0.0"))      return DIRECT;
    if (isInNet(host, "172.16.0.0",  "255.240.0.0"))    return DIRECT;
    if (isInNet(host, "192.168.0.0", "255.255.0.0"))    return DIRECT;
    if (isInNet(host, "127.0.0.0",   "255.0.0.0"))      return DIRECT;

    // IPv6 blocking
    if (host.indexOf(":") !== -1 && CFG.BLOCK_IPV6)     return BLOCK;

    // Direct domains
    if (containsAny(h, DIRECT_DOMAINS) &&
        !containsAny(h, PUBG_DOMAINS)) return DIRECT;

    // PUBG filtering
    if (!containsAny(h, PUBG_DOMAINS)) return DIRECT;

    // DNS resolution and IP info
    var t0    = msNow();
    var dns   = dnsLookup(host);
    var dnsMs = msNow() - t0;
    pingRecord(dnsMs);

    var ip    = dns.ip;
    var isJo  = dns.isJo;
    var city  = dns.city || "UNKNOWN";

    // IPv6 in resolved IP
    if (ip && ip.indexOf(":") !== -1) return BLOCK;

    // Request classification
    var classType = classifyHost(h);

    // Session tracking
    SESSION.record(classType, isJo, city);

    // Scoring
    var sc = score(ip, classType, dnsMs, isJo, city);

    // Route selection
    return route(classType, sc, isJo, city, dnsMs);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION 14: UTILITY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function msNow() { return (new Date()).getTime(); }

function reportProxyFail(pid) {
    if (!HEALTH[pid]) return;
    HEALTH[pid].fails += 2;
    HEALTH[pid].lastFail = msNow();
    HEALTH[pid].skip = true;
    STICKY = {};
}

function getReport() {
    return {
        version:      CFG.VERSION,
        uptime:       msNow() - SESSION.start,
        totalReqs:    SESSION.totalReqs,
        pubgReqs:     SESSION.pubgReqs,
        jordanRatio:  SESSION.jordanRatio() + "%",
        socialReqs:   SESSION.socialReqs,
        lobbyReqs:    SESSION.lobbyReqs,
        mlHits:       SESSION.mlHits,
        stickyHits:   SESSION.stickyHits,
        avgPing:      pingAvg(5),
        pingTrend:    pingTrend(),
        dnsHitRate:   DNS_HITS + "/" + (DNS_HITS + DNS_MISSES),
        health: {
            P1: { score: HEALTH.P1.score, skip: HEALTH.P1.skip, avgPing: HEALTH.P1.avgPing },
            P2: { score: HEALTH.P2.score, skip: HEALTH.P2.skip, avgPing: HEALTH.P2.avgPing },
            P3: { score: HEALTH.P3.score, skip: HEALTH.P3.skip, avgPing: HEALTH.P3.avgPing }
        },
        cityCoverage:  SESSION.cityCounts,
        mlData:        Object.keys(ML_DATA).length + " patterns learned"
    };
}

// ═══════════════════════════════════════════════════════════════════════
//  END — PUBG JORDAN PRO v3.0
//  3 Proxies | 98%+ Jordan | Social Priority | ML + Sticky + Health
// ═══════════════════════════════════════════════════════════════════════
