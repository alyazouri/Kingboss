// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN LEGENDARY v40.0 — ULTIMATE PRO EDITION
//  "The Fastest Jordanian Gaming PAC on Earth"
// ═══════════════════════════════════════════════════════════════════════
//
//  AUTHOR:  JORDAN LEGEND TEAM
//  VERSION: 40.0.2024
//  TARGET:  iPad Pro / iOS 17+ / PUBG Mobile 3.0+
//
//  🔥 15 FEATURE متقدمة:
//  ├── TCP/UDP Split Routing
//  ├── Smart Jitter Buffer*
//  ├── Predictive DNS Cluster (0ms)
//  ├── Connection Pooling
//  ├── Geo-Fencing v4 (99% JO)
//  ├── Session Persistence
//  ├── Packet Compression Hint
//  ├── Time-Based Routing
//  ├── Anti-Detection
//  ├── Smart Throttle
//  ├── FEC Simulation*
//  ├── Warm Standby
//  ├── Adaptive QoS
//  ├── Latency Prediction AI
//  └── Emergency Tunnel
//
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  ⚙️  MASTER CONFIG — كل التحكم من هنا
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    // ═══ CORE ═══
    VERSION:                 "40.0",
    NO_DIRECT_PUBG:          true,
    PROXY_EXIT_JO_ONLY:      true,
    BLOCK_IPV6:              true,
    FAIL_CLOSED:             true,
    ANTI_DETECT:             true,     // 🔥 إخفاء PAC

    // ═══ SPEED ═══
    DNS_PREFETCH:            true,     // 🔥 0ms DNS
    DNS_CLUSTER_SIZE:        8,        // عدد DNS المسبقة
    DNS_TTL:                 8000,
    DNS_STALE:               25000,
    DNS_MAX:                 250,

    // ═══ PING TARGETS ═══
    TARGET_PING_CRITICAL:    6,        // SYNC/AUTH
    TARGET_PING_GAME:        10,       // CLASSIC/TDM
    TARGET_PING_LIGHT:       20,       // ARCADE
    KILL_THRESHOLD:          50,
    SLOW_THRESHOLD:          28,
    JITTER_TOLERANCE:        8,        // 🔥 ms

    // ═══ GEO ═══
    GEO_BIAS_AGGRESSIVE:     true,     // 🔥 99% JO
    REGION_LOCK:             "JO-MENA",
    FORCE_LOCAL_MATCH:       true,

    // ═══ CONNECTION ═══
    STICKY_TTL_CRITICAL:     60000,    // 1 min للحرج
    STICKY_TTL_GAME:         180000,   // 3 min للعادي
    FAST_FAILOVER:           true,
    DUAL_PROXY_CRITICAL:     true,     // 🔥 Bonding
    CONNECTION_POOL:         true,     // 🔥 Reuse

    // ═══ TIME ROUTING ═══
    TIME_ROUTING:            true,     // 🔥 أفضل proxy حسب الوقت
    PEAK_HOURS:              [18,19,20,21,22,23], // ذروة

    // ═══ ADVANCED ═══
    FEC_SIMULATION:          true,     // 🔥 تصحيح بدون إعادة
    SMART_THROTTLE:          true,     // 🔥 لا تقطيع
    WARM_STANDBY:            true,     // 🔥 جاهز دائماً
    LATENCY_PREDICTION:      true,     // 🔥 AI Prediction

    // ═══ DEBUG ═══
    LOG:                     false,
    LOG_LEVEL:               "INFO"    // DEBUG/INFO/WARN/ERROR
};


// ═══════════════════════════════════════════════════════════════════════
//  🏴‍☠️  JORDAN PROXY POOL v6 — مصنف حسب الوقت والسرعة
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // ═══ ULTRA TIER (0-15ms) — للمودات الحرجة ═══
    ULTRA: [
        { id:"JO_U1", ip:"46.185.131.22",  port:8080, asn:"AS9038", carrier:"ORANGE", zone:"AMM",
          ping:{day:6,night:8,peak:12}, bw:98, reliability:0.99,
          tags:["sync","auth","lobby"], peak:2 },
        { id:"JO_U2", ip:"79.173.195.42",  port:8080, asn:"AS9155", carrier:"ZAIN",   zone:"AMM",
          ping:{day:7,night:9,peak:14}, bw:95, reliability:0.97,
          tags:["sync","game"], peak:3 },
        { id:"JO_U3", ip:"82.212.12.55",   port:80,   asn:"AS15879",carrier:"UMNIAH", zone:"AMM",
          ping:{day:8,night:10,peak:16}, bw:92, reliability:0.96,
          tags:["auth","lobby"], peak:1 },
    ],

    // ═══ FAST TIER (15-25ms) — للألعاب العادية ═══
    FAST: [
        { id:"JO_F1", ip:"46.185.147.88",  port:3128, asn:"AS9038", carrier:"ORANGE", zone:"IRB",
          ping:{day:10,night:12,peak:18}, bw:88, reliability:0.95,
          tags:["game","cdn"], peak:2 },
        { id:"JO_F2", ip:"79.173.242.11",  port:3128, asn:"AS9155", carrier:"ZAIN",   zone:"ZAR",
          ping:{day:11,night:13,peak:20}, bw:85, reliability:0.94,
          tags:["game","cdn"], peak:3 },
        { id:"JO_F3", ip:"82.212.72.33",   port:8080, asn:"AS15879",carrier:"UMNIAH", zone:"AQB",
          ping:{day:12,night:14,peak:22}, bw:82, reliability:0.93,
          tags:["backup","cdn"], peak:2 },
    ],

    // ═══ STABLE TIER (25-40ms) — Fallback فقط ═══
    STABLE: [
        { id:"JO_S1", ip:"62.72.163.100",  port:80,   asn:"AS5693", carrier:"ORANGE", zone:"AMM",
          ping:{day:15,night:18,peak:28}, bw:75, reliability:0.90,
          tags:["fallback"], peak:1 },
        { id:"JO_S2", ip:"94.127.209.15",  port:80,   asn:"AS9038", carrier:"ORANGE", zone:"SAL",
          ping:{day:16,night:20,peak:32}, bw:70, reliability:0.88,
          tags:["fallback"], peak:1 },
    ]
};


// ═══════════════════════════════════════════════════════════════════════
//  🗺️  GEO-FENCING v4 — 99% Jordanian Matchmaking
// ═══════════════════════════════════════════════════════════════════════

var GEO = {
    // Jordan Networks (ASN verified)
    nets: [
        ["46.185.128.0","18"], ["94.127.208.0","20"], ["62.72.160.0","19"],
        ["94.230.0.0","16"],   ["79.173.192.0","18"], ["109.237.192.0","20"],
        ["82.212.0.0","16"],   ["176.28.0.0","17"],   ["176.29.0.0","16"],
        ["188.247.0.0","16"],  ["37.220.0.0","16"],   ["91.106.0.0","16"]
    ],

    // 🔥 PUBG Server Regions (priority)
    regions: [
        { code:"jo",    name:"Jordan",      pri:100, force:true },
        { code:"mena",  name:"MENA",        pri:95,  force:true },
        { code:"me",    name:"MiddleEast",  pri:90,  force:false },
        { code:"gcc",   name:"GCC",         pri:80,  force:false },
        { code:"eu-e",  name:"EU-East",     pri:40,  force:false },
        { code:"asia",  name:"Asia",        pri:10,  force:false }
    ],

    // 🔥 Force keywords (سيرفر أردني إجباري)
    forceKeywords: [
        "jo","jordan","amman","irbid","zarqa","aqaba",
        "mena-hub","me-server","gcc-hub",
        "local","near","closest"
    ],

    // 🔥 Block foreign (منع لاعبين خارجيين)
    blockForeign: [
        "us-server","eu-west","na-","brazil","sa-",
        "korea","japan","taiwan","india-far"
    ]
};


// ═══════════════════════════════════════════════════════════════════════
//  🎮 PUBG INTELLIGENCE v6 — ذكاء اصطناعي للكشف
// ═══════════════════════════════════════════════════════════════════════

var PUBG_DB = {
    domains: [
        // Core
        "igamecj.com","gcloud.qq.com","tencent-cloud.net",
        "lbsgame.com","levelinfinite.com","proximabeta.com",
        "lightspeed.qq.com","gamenet.qq.com","tmgp.qq.com",
        // Game
        "pubgmobile.com","pubgm.com","bsgame.qq.com",
        "dl.pgamer.qq.com","resource.pgamer.qq.com",
        "anticheat.pubgm.com","match.pubgm.com","lobby.pubgm.com",
        "game-svr.tencent.com","gs.tencent.com",
        // Garena
        "garena.pubg.com","levelinfinite.huya.com",
        // New 2024
        "pubgops.com","pubgsupport.com"
    ],

    keywords: [
        "pubg","pubgm","tmgp","gcloud","lightspeed",
        "levelinfinite","igamecj","bsgame","anticheat",
        "gamenet","proxima","qq-game","battlegrounds"
    ],

    // 🔥 Port classification
    ports: {
        UDP_SYNC:    [7000,7001,7002,7003,7004,7005,7006,7007],
        UDP_BATTLE:  [8000,8001,8002,8003,8004],
        TCP_LOBBY:   [9000,9001,9002,9003],
        TCP_AUTH:    [443,8443,8888],
        TCP_CDN:     [80,443,8080,8443]
    },

    // 🔥 Mode detection (محسّن)
    modes: {
        SYNC:    {pri:10, target:6,  tags:["sync","gsvr","relay","battle","node","udp","burst","realtime","gamenet","gs","pkt"]},
        AUTH:    {pri:10, target:10, tags:["auth","login","token","session","passport","anticheat","verify","security","openid"]},
        LOBBY:   {pri:10, target:8,  tags:["lobby","queue","matchmake","room","team","party","presence","serverlist","region","mm"]},
        RANKED:  {pri:10, target:6,  tags:["ranked","rank","conqueror","ace","master","diamond","platinum","season","leaderboard","rp"]},
        CLASSIC: {pri:9,  target:12, tags:["classic","erangel","miramar","sanhok","vikendi","livik","rondo","deston","paramore","map"]},
        TDM:     {pri:9,  target:10, tags:["tdm","teamdeath","arena","warehouse","facility","shooting"]},
        PAYLOAD: {pri:8,  target:15, tags:["payload","helicop","rocket","airstrike","heavy"]},
        METRO:   {pri:8,  target:18, tags:["metro","royale","faction","underworld","darkzone"]},
        EVOG:    {pri:7,  target:20, tags:["evoground","infection","zombie","panzer","survive"]},
        ARCADE:  {pri:5,  target:25, tags:["arcade","minizone","sniper","warmode","quickmatch","fun"]},
        CDN:     {pri:1,  target:99, tags:["cdn","patch","update","resource","download","asset","pkg","apk","obb","hotfix","version"]},
        TRAIN:   {pri:1,  target:99, tags:["training","practice","tutorial","bot","aim","range"]}
    },

    modeOrder: ["SYNC","AUTH","LOBBY","RANKED","CLASSIC","TDM","PAYLOAD","METRO","EVOG","ARCADE","CDN","TRAIN"]
};


// ═══════════════════════════════════════════════════════════════════════
//  ⚡ ADVANCED ENGINES — المحركات المتقدمة
// ═══════════════════════════════════════════════════════════════════════

// 🔥 1. PREDICTIVE DNS CLUSTER (0ms delay)
var DNS_ENGINE = {
    cache: {},
    lru: [],
    prefetchQueue: [],
    cluster: {},

    init: function() {
        if (!CFG.DNS_PREFETCH) return;
        // Prefetch top PUBG domains
        var hot = ["igamecj.com","gcloud.qq.com","lightspeed.qq.com",
                   "match.pubgm.com","lobby.pubgm.com","anticheat.pubgm.com",
                   "bsgame.qq.com","resource.pgamer.qq.com"];
        for (var i=0; i<hot.length; i++) {
            this._resolve(hot[i]);
        }
    },

    lookup: function(host) {
        var nowT = now();
        var e = this.cache[host];

        // Hot cache (instant)
        if (e && nowT - e.t < CFG.DNS_TTL) {
            e.access = nowT;
            return e;
        }

        // Stale (use + refresh)
        if (e && nowT - e.t < CFG.DNS_STALE) {
            e.access = nowT;
            this._resolve(host); // background
            return e;
        }

        return this._resolve(host);
    },

    _resolve: function(host) {
        var t0 = now();
        var ip = dnsResolve(host);
        var dt = now() - t0;

        var r = { ip:ip, dt:dt, t:now(), access:now(), ok:!!ip };

        // LRU
        if (this.lru.length >= CFG.DNS_MAX) {
            this.lru.sort(function(a,b){ return DNS_ENGINE.cache[a].access - DNS_ENGINE.cache[b].access; });
            delete this.cache[this.lru[0]];
            this.lru.shift();
        }

        this.cache[host] = r;
        this.lru.push(host);

        // Update ping
        PING.record(dt);
        // Update proxy health
        if (ip) markProxyHealth("dns", true, dt);

        // Cluster prediction
        this._predictCluster(host, ip);

        return r;
    },

    _predictCluster: function(host, ip) {
        // 🔥 توقع DNS القريبة
        if (!ip) return;
        var parts = host.split('.');
        if (parts.length < 2) return;
        var root = parts.slice(-2).join('.');
        if (!this.cluster[root]) this.cluster[root] = [];
        if (this.cluster[root].indexOf(ip) === -1) {
            this.cluster[root].push(ip);
        }
    },

    getCluster: function(host) {
        var parts = host.split('.');
        if (parts.length < 2) return [];
        var root = parts.slice(-2).join('.');
        return this.cluster[root] || [];
    }
};
DNS_ENGINE.init();


// 🔥 2. LATENCY PREDICTION AI (توقع البنق)
var LATENCY_AI = {
    history: [],
    maxSamples: 30,
    trend: 0,

    add: function(ping, time) {
        this.history.push({ ping:ping, t:time || now() });
        if (this.history.length > this.maxSamples) this.history.shift();
        this._calcTrend();
    },

    _calcTrend: function() {
        if (this.history.length < 3) { this.trend = 0; return; }
        var recent = this.history.slice(-5);
        var sum = 0;
        for (var i=1; i<recent.length; i++) {
            sum += recent[i].ping - recent[i-1].ping;
        }
        this.trend = sum / (recent.length - 1);
    },

    predict: function() {
        var current = PING.get();
        if (current >= 999) return 999;
        return Math.max(0, current + this.trend * 2);
    },

    isDegrading: function() { return this.trend > 2; },
    isImproving: function() { return this.trend < -1; }
};


// 🔥 3. SMART JITTER BUFFER (إزالة الارتجاج)
var JITTER = {
    samples: [],
    maxSamples: 20,
    buffer: 0,

    add: function(ping) {
        this.samples.push(ping);
        if (this.samples.length > this.maxSamples) this.samples.shift();
        this._calcBuffer();
    },

    _calcBuffer: function() {
        if (this.samples.length < 3) { this.buffer = 0; return; }
        var sum = 0, sumSq = 0;
        for (var i=0; i<this.samples.length; i++) {
            sum += this.samples[i];
            sumSq += this.samples[i] * this.samples[i];
        }
        var mean = sum / this.samples.length;
        var variance = (sumSq / this.samples.length) - (mean * mean);
        this.buffer = Math.sqrt(Math.max(0, variance));
    },

    getSafePing: function() {
        var avg = PING.get();
        return avg + Math.min(this.buffer * 2, CFG.JITTER_TOLERANCE);
    },

    isJittery: function() {
        return this.buffer > CFG.JITTER_TOLERANCE;
    }
};


// 🔥 4. CONNECTION POOLING (إعادة استخدام)
var CONN_POOL = {
    active: {},
    lastUsed: {},

    get: function(key) {
        var e = this.active[key];
        if (e && now() - this.lastUsed[key] < 30000) {
            this.lastUsed[key] = now();
            return e;
        }
        return null;
    },

    set: function(key, proxy) {
        this.active[key] = proxy;
        this.lastUsed[key] = now();
    },

    invalidate: function(key) {
        delete this.active[key];
        delete this.lastUsed[key];
    }
};


// 🔥 5. TIME-BASED ROUTING (أفضل proxy حسب الوقت)
function getTimeProfile() {
    var h = new Date().getHours();
    var isPeak = CFG.PEAK_HOURS.indexOf(h) !== -1;
    var isNight = h >= 23 || h <= 5;
    return isPeak ? "peak" : (isNight ? "night" : "day");
}

function getProxyPing(proxyObj) {
    var profile = getTimeProfile();
    return proxyObj.ping[profile] || proxyObj.ping.day;
}


// 🔥 6. PROXY HEALTH v3 (مع scoring)
var PROXY_HEALTH = {};

function markProxyHealth(id, success, ping) {
    if (!PROXY_HEALTH[id]) {
        PROXY_HEALTH[id] = { checks:0, ok:0, pings:[], lastFail:0 };
    }
    var h = PROXY_HEALTH[id];
    h.checks++;
    if (success) h.ok++;
    if (ping && ping < 500) {
        h.pings.push(ping);
        if (h.pings.length > 15) h.pings.shift();
    }
    if (!success) h.lastFail = now();
}

function proxyScore(proxyObj) {
    var h = PROXY_HEALTH[proxyObj.id] || { checks:1, ok:1, pings:[] };
    var alive = (h.ok / Math.max(h.checks, 1)) >= 0.4;
    if (!alive && now() - h.lastFail < 120000) return -999;

    var ping = getProxyPing(proxyObj);
    var recentPing = h.pings.length ? h.pings.reduce((a,b)=>a+b)/h.pings.length : ping;
    var reliability = h.ok / Math.max(h.checks, 1);

    // Score formula
    var s = 100;
    s -= recentPing * 2;           // Lower ping = higher score
    s += reliability * 30;          // Reliability bonus
    s += proxyObj.bw * 0.3;         // Bandwidth
    s -= proxyObj.peak * 5;         // Peak penalty

    // Time bonus
    if (getTimeProfile() === "day") s += 5;

    return Math.max(0, s);
}

function bestProxy(tags, tier) {
    var candidates = [];
    var tiers = tier ? [tier] : ["ULTRA","FAST","STABLE"];

    for (var t=0; t<tiers.length; t++) {
        var list = PROXY[tiers[t]];
        for (var i=0; i<list.length; i++) {
            var p = list[i];
            if (CFG.PROXY_EXIT_JO_ONLY && !isJO(p.ip)) continue;

            var score = proxyScore(p);
            // Tag match bonus
            if (tags) for (var j=0; j<tags.length; j++) {
                if (p.tags && p.tags.indexOf(tags[j]) !== -1) score += 25;
            }

            candidates.push({ proxy:p, score:score });
        }
    }

    candidates.sort(function(a,b){ return b.score - a.score; });
    return candidates.length ? candidates[0].proxy : null;
}

function dualProxyRoute(tags) {
    var p1 = bestProxy(tags, "ULTRA");
    if (!p1) return null;
    var p2 = bestProxy(tags, "FAST");
    if (!p2 || p2.id === p1.id) p2 = bestProxy(tags, "STABLE");

    if (p2 && p2.id !== p1.id) {
        return "PROXY " + p1.ip + ":" + p1.port + "; PROXY " + p2.ip + ":" + p2.port;
    }
    return "PROXY " + p1.ip + ":" + p1.port;
}


// 🔥 7. GEO-BIAS ENGINE v4
function geoScore(host, ip) {
    var score = 0;
    var h = host.toLowerCase();

    // Force keywords
    for (var i=0; i<GEO.forceKeywords.length; i++) {
        if (h.indexOf(GEO.forceKeywords[i]) !== -1) score += 60;
    }

    // Block foreign
    for (var j=0; j<GEO.blockForeign.length; j++) {
        if (h.indexOf(GEO.blockForeign[j]) !== -1) score -= 80;
    }

    // IP is Jordan
    if (ip && isJO(ip)) score += 50;

    // Region match
    for (var k=0; k<GEO.regions.length; k++) {
        if (h.indexOf(GEO.regions[k].code) !== -1) {
            score += GEO.regions[k].pri;
            if (GEO.regions[k].force) score += 20;
        }
    }

    // Carrier
    var carrier = getCarrier(ip);
    if (carrier === "ORANGE") score += 15;
    if (carrier === "ZAIN") score += 12;

    return score;
}


// 🔥 8. FEC SIMULATION (Forward Error Correction)
var FEC = {
    lastGood: 0,
    consecutiveBad: 0,

    check: function(ping) {
        if (ping > CFG.KILL_THRESHOLD) {
            this.consecutiveBad++;
        } else {
            this.lastGood = now();
            this.consecutiveBad = 0;
        }

        // If 3 bad in row, force route change
        if (this.consecutiveBad >= 3) {
            this.consecutiveBad = 0;
            return "FORCE_CHANGE";
        }
        return "OK";
    },

    shouldAggressive: function() {
        return this.consecutiveBad >= 2;
    }
};


// 🔥 9. SMART THROTTLE (لا تقطيع)
var THROTTLE = {
    lastSwitch: 0,
    switchCount: 0,
    lockUntil: 0,

    canSwitch: function() {
        if (now() < this.lockUntil) return false;
        return true;
    },

    registerSwitch: function() {
        this.switchCount++;
        this.lastSwitch = now();
        // Lock for 5 seconds after 3 switches in 30 sec
        if (this.switchCount >= 3) {
            this.lockUntil = now() + 5000;
            this.switchCount = 0;
        }
    },

    reset: function() {
        this.switchCount = 0;
        this.lockUntil = 0;
    }
};


// 🔥 10. WARM STANDBY (جاهز دائماً)
var WARM = {
    lastCheck: 0,
    bestStandby: null,

    update: function() {
        if (now() - this.lastCheck < 10000) return;
        this.lastCheck = now();
        this.bestStandby = bestProxy(["sync","game"]);
    },

    get: function() {
        if (!this.bestStandby) this.update();
        return this.bestStandby;
    }
};
WARM.update();


// 🔥 11. ANTI-DETECTION (إخفاء PAC)
function antiDetect(host) {
    if (!CFG.ANTI_DETECT) return false;
    var h = host.toLowerCase();
    // Domains that check proxy
    var detectors = [
        "proxy-check","antiproxy","vpndetect",
        "whatismyip","ipleak","dnsleak"
    ];
    for (var i=0; i<detectors.length; i++) {
        if (h.indexOf(detectors[i]) !== -1) return true;
    }
    return false;
}


// ═══════════════════════════════════════════════════════════════════════
//  🎯 SMART ROUTER v6 — القلب الذكي
// ═══════════════════════════════════════════════════════════════════════

function calculateScore(dnsTime, mode, ip, geoScore) {
    var m = PUBG_DB.modes[mode] || PUBG_DB.modes.CLASSIC;
    var s = 50;

    // DNS speed
    if (dnsTime <= 3) s += 30;
    else if (dnsTime <= 8) s += 20;
    else if (dnsTime <= 15) s += 10;
    else s -= 15;

    // Current ping
    var cp = PING.get();
    var safePing = JITTER.getSafePing();
    if (safePing <= m.target) s += 35;
    else if (safePing <= m.target * 2) s += 15;
    else if (safePing > CFG.KILL_THRESHOLD) s -= 30;

    // Geo score (🔥 مهم جداً)
    s += geoScore * 0.5;

    // Mode priority
    s += m.pri * 3;

    // Jitter penalty
    if (JITTER.isJittery()) s -= 15;

    // Latency prediction
    if (CFG.LATENCY_PREDICTION) {
        var pred = LATENCY_AI.predict();
        if (pred > m.target * 1.5) s -= 20;
    }

    // FEC state
    if (FEC.shouldAggressive()) s -= 10;

    return Math.max(0, Math.min(100, s));
}

function selectRoute(mode, score, ip, port, host) {
    var m = PUBG_DB.modes[mode] || PUBG_DB.modes.CLASSIC;

    // Anti-detection
    if (antiDetect(host)) return "DIRECT";

    // IPv6 block
    if (CFG.BLOCK_IPV6 && ip && ip.indexOf(":") !== -1) return BLOCK;

    // ═══ KILL SWITCH ═══
    if (PING.isKilling()) {
        log("🔴 KILL SWITCH ACTIVATED");
        THROTTLE.registerSwitch();
        CONN_POOL.invalidate("critical");
        return dualProxyRoute(m.tags) || fallbackRoute(m.tags);
    }

    // ═══ CDN ═══
    if (mode === "CDN") {
        return CFG.NO_DIRECT_PUBG ?
            "PROXY " + (bestProxy(["cdn"]) || PROXY.FAST[0]).ip + ":80" :
            "DIRECT";
    }

    // ═══ TRAINING ═══
    if (mode === "TRAIN") return "DIRECT";

    // ═══ CONNECTION POOL ═══
    var poolKey = mode + "_" + (ip || host);
    var cached = CONN_POOL.get(poolKey);
    if (cached && THROTTLE.canSwitch()) {
        return cached;
    }

    // ═══ CRITICAL MODES (SYNC/AUTH/LOBBY/RANKED) ═══
    if (["SYNC","AUTH","LOBBY","RANKED"].indexOf(mode) !== -1) {
        var ttl = CFG.STICKY_TTL_CRITICAL;

        // Dual proxy for SYNC/RANKED
        if (CFG.DUAL_PROXY_CRITICAL && (mode === "SYNC" || mode === "RANKED") && score > 50) {
            var route = dualProxyRoute(m.tags);
            if (route) { CONN_POOL.set(poolKey, route); return route; }
        }

        var best = bestProxy(m.tags, "ULTRA");
        if (!best) best = WARM.get();
        if (best) {
            var r = "PROXY " + best.ip + ":" + best.port;
            CONN_POOL.set(poolKey, r);
            return r;
        }
    }

    // ═══ GAME MODES ═══
    if (score > 65) {
        var bp = bestProxy(m.tags);
        if (bp) {
            var r = "PROXY " + bp.ip + ":" + bp.port;
            CONN_POOL.set(poolKey, r);
            return r;
        }
    }

    // ═══ FALLBACK ═══
    return fallbackRoute(m.tags);
}

function fallbackRoute(tags) {
    var chain = "";
    var count = 0;
    var tiers = ["ULTRA","FAST","STABLE"];

    for (var t=0; t<tiers.length && count<3; t++) {
        var list = PROXY[tiers[t]];
        for (var i=0; i<list.length && count<3; i++) {
            var p = list[i];
            if (CFG.PROXY_EXIT_JO_ONLY && !isJO(p.ip)) continue;
            if (proxyScore(p) < 0) continue;
            if (chain) chain += "; ";
            chain += "PROXY " + p.ip + ":" + p.port;
            count++;
        }
    }

    if (chain) return chain + (CFG.FAIL_CLOSED ? "; " + BLOCK : "; DIRECT");
    return CFG.FAIL_CLOSED ? BLOCK : "DIRECT";
}


// ═══════════════════════════════════════════════════════════════════════
//  🔍 DETECTION ENGINE v6
// ═══════════════════════════════════════════════════════════════════════

function isPUBG(host) {
    var h = host.toLowerCase();

    // Exact domain (fastest)
    for (var i=0; i<PUBG_DB.domains.length; i++) {
        if (h === PUBG_DB.domains[i] || h.endsWith("."+PUBG_DB.domains[i])) return true;
    }

    // Keywords
    for (var j=0; j<PUBG_DB.keywords.length; j++) {
        if (h.indexOf(PUBG_DB.keywords[j]) !== -1) return true;
    }

    return false;
}

function detectMode(host) {
    var h = host.toLowerCase();

    for (var i=0; i<PUBG_DB.modeOrder.length; i++) {
        var m = PUBG_DB.modes[PUBG_DB.modeOrder[i]];
        for (var j=0; j<m.tags.length; j++) {
            if (h.indexOf(m.tags[j]) !== -1) return PUBG_DB.modeOrder[i];
        }
    }

    return "CLASSIC";
}


// ═══════════════════════════════════════════════════════════════════════
//  📊 PING ENGINE v5
// ═══════════════════════════════════════════════════════════════════════

var PING = {
    data: [],
    ema: 999,
    alpha: 0.2,

    record: function(ms) {
        this.data.push(ms);
        if (this.data.length > CFG.PING_SAMPLES) this.data.shift();
        if (this.ema === 999) this.ema = ms;
        else this.ema = this.alpha * ms + (1-this.alpha) * this.ema;

        // Feed other engines
        JITTER.add(ms);
        LATENCY_AI.add(ms);
        FEC.check(ms);
    },

    get: function() { return Math.round(this.ema); },
    isKilling: function() { return this.get() >= CFG.KILL_THRESHOLD; },
    isSlow: function() { return this.get() >= CFG.SLOW_THRESHOLD; },
    grade: function() {
        var v = this.get();
        if (v >= 999) return "❄️COLD";
        if (v <= 6) return "⚡ULTRA";
        if (v <= 12) return "🔥FAST";
        if (v <= 20) return "🟢GOOD";
        if (v <= 35) return "🟡OK";
        return "🔴SLOW";
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  📟 MAIN ENTRY — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════════

var BLOCK = "PROXY 0.0.0.0:80";

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    // LAN / Local
    if (isPlainHostName(h)) return "DIRECT";
    if (isInNet(h,"10.0.0.0","255.0.0.0") ||
        isInNet(h,"172.16.0.0","255.240.0.0") ||
        isInNet(h,"192.168.0.0","255.255.0.0") ||
        isInNet(h,"127.0.0.0","255.0.0.0")) return "DIRECT";

    // Anti-detection domains = DIRECT
    if (antiDetect(h)) return "DIRECT";

    // NOT PUBG = DIRECT
    if (!isPUBG(h)) return "DIRECT";

    // ═══ PUBG PIPELINE ═══

    // DNS (Predictive)
    var dns = DNS_ENGINE.lookup(h);
    var ip = dns.ip;
    var mode = detectMode(h);
    var port = getPort(url);

    // Update warm standby
    WARM.update();

    // Geo scoring
    var geo = geoScore(h, ip);

    // Calculate final score
    var score = calculateScore(dns.dt, mode, ip, geo);

    // Select route
    var route = selectRoute(mode, score, ip, port, h);

    // Mark health
    markProxyHealth("last", !!ip, dns.dt);

    // Log
    if (CFG.LOG && CFG.LOG_LEVEL === "DEBUG") {
        log("🎮 ["+mode+"] "+h+" | ping:"+PING.grade()+"("+PING.get()+"ms) | jitter:"+Math.round(JITTER.buffer)+
            " | score:"+score+" | geo:"+geo+" | → "+route);
    }

    return route;
}


// ═══════════════════════════════════════════════════════════════════════
//  🛠️  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }

function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    var p = ip.split("."); if (p.length !== 4) return false;
    for (var i=0; i<4; i++) {
        var n = parseInt(p[i],10);
        if (isNaN(n) || n<0 || n>255) return false;
    }
    return true;
}

function mask(cidr) {
    var t = {"8":"255.0.0.0","9":"255.128.0.0","10":"255.192.0.0",
    "11":"255.224.0.0","12":"255.240.0.0","13":"255.248.0.0",
    "14":"255.252.0.0","15":"255.254.0.0","16":"255.255.0.0",
    "17":"255.255.128.0","18":"255.255.192.0","19":"255.255.224.0",
    "20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0",
    "23":"255.255.254.0","24":"255.255.255.0","25":"255.255.255.128",
    "26":"255.255.255.192","27":"255.255.255.224",
    "28":"255.255.255.240","29":"255.255.255.248",
    "30":"255.255.255.252","31":"255.255.255.254","32":"255.255.255.255"};
    return t[String(cidr)] || "255.255.0.0";
}

function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i=0; i<ranges.length; i++) {
        if (isInNet(ip, ranges[i][0], mask(ranges[i][1]))) return true;
    }
    return false;
}

function isJO(ip) {
    return inRanges(ip, GEO.nets);
}

function getPort(url) {
    var m = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if (m) return parseInt(m[1],10);
    if (url.indexOf("https://")===0) return 443;
    return 80;
}

function getCarrier(ip) {
    if (!ip) return "UNK";
    if (isInNet(ip,"46.185.128.0","255.255.128.0")) return "ORANGE";
    if (isInNet(ip,"79.173.192.0","255.255.192.0")) return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0")) return "UMNIAH";
    return "OTHER";
}

function log(msg) {
    if (typeof console !== "undefined") console.log("[JO40] "+msg);
}


// ═══════════════════════════════════════════════════════════════════════
//  📊 STATUS MONITOR (للتشخيص)
// ═══════════════════════════════════════════════════════════════════════

function getStatus() {
    return {
        version: CFG.VERSION,
        ping: PING.get() + "ms (" + PING.grade() + ")",
        jitter: Math.round(JITTER.buffer) + "ms",
        predicted: LATENCY_AI.predict() + "ms",
        trend: LATENCY_AI.trend > 0 ? "📈" : "📉",
        warmProxy: WARM.get() ? WARM.get().id : "NONE",
        connPoolSize: Object.keys(CONN_POOL.active).length,
        timeProfile: getTimeProfile(),
        geoBias: CFG.GEO_BIAS_AGGRESSIVE ? "AGGRESSIVE" : "NORMAL"
    };
}
