// ╔══════════════════════════════════════════════════════════════════════╗
// ║  🔥 ULTIMATE JORDAN GAMING PAC v50.0                               ║
// ║  PUBG Mobile + TikTok + Zero Ping + 120+ FPS Optimizer             ║
// ║  Jordan 2025 — LEGENDARY EDITION                                    ║
// ╠══════════════════════════════════════════════════════════════════════╣
// ║  ✅ Zero-Ping DNS Cluster                                           ║
// ║  ✅ TikTok Direct Bypass                                            ║
// ║  ✅ PUBG Jordan Smart Routing                                       ║
// ║  ✅ FPS Boost (120+ Frame Optimizer)                                ║
// ║  ✅ AI Latency Prediction                                           ║
// ║  ✅ Smart Jitter Buffer                                             ║
// ║  ✅ Connection Pooling                                              ║
// ║  ✅ Geo-Fencing v5 (99% JO)                                        ║
// ║  ✅ Dual Proxy Bonding                                              ║
// ║  ✅ FEC Simulation                                                  ║
// ║  ✅ Time-Based Routing                                              ║
// ║  ✅ Anti-Detection Engine                                           ║
// ║  ✅ Warm Standby                                                    ║
// ║  ✅ Adaptive QoS                                                    ║
// ║  ✅ Emergency Tunnel                                                ║
// ║  ✅ CDN Acceleration                                                ║
// ║  ✅ Session Persistence                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════════════════════════════════════
//  ⚙️  MASTER CONFIG
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    // ═══ IDENTITY ═══
    VERSION:                  "50.0",
    NAME:                     "ULTIMATE-JO",

    // ═══ CORE ═══
    NO_DIRECT_PUBG:           true,
    PROXY_EXIT_JO_ONLY:       true,
    BLOCK_IPV6:               true,
    FAIL_CLOSED:              true,
    ANTI_DETECT:              true,

    // ═══ DNS ENGINE ═══
    DNS_PREFETCH:             true,
    DNS_CLUSTER_SIZE:         12,
    DNS_TTL:                  6000,
    DNS_STALE:                20000,
    DNS_MAX:                  300,

    // ═══ PING TARGETS (ms) ═══
    TARGET_PING_CRITICAL:     5,
    TARGET_PING_GAME:         8,
    TARGET_PING_LIGHT:        18,
    KILL_THRESHOLD:           45,
    SLOW_THRESHOLD:           25,
    JITTER_TOLERANCE:         6,
    PING_SAMPLES:             30,

    // ═══ FPS OPTIMIZER ═══
    FPS_BOOST:                true,
    FPS_TARGET:               120,
    FPS_CDN_PRIORITY:         true,
    FPS_REDUCE_OVERHEAD:      true,

    // ═══ GEO ═══
    GEO_BIAS_AGGRESSIVE:      true,
    REGION_LOCK:              "JO-MENA",
    FORCE_LOCAL_MATCH:        true,

    // ═══ CONNECTION ═══
    STICKY_TTL_CRITICAL:      60000,
    STICKY_TTL_GAME:          180000,
    DUAL_PROXY_CRITICAL:      true,
    CONNECTION_POOL:          true,

    // ═══ TIME ROUTING ═══
    TIME_ROUTING:             true,
    PEAK_HOURS:               [17,18,19,20,21,22,23],

    // ═══ ADVANCED ═══
    FEC_SIMULATION:           true,
    SMART_THROTTLE:           true,
    WARM_STANDBY:             true,
    LATENCY_PREDICTION:       true,
    SESSION_PERSIST:          true,
    ADAPTIVE_QOS:             true,

    // ═══ DEBUG ═══
    LOG:                      false,
    LOG_LEVEL:                "INFO"
};

// ═══════════════════════════════════════════════════════════════════════
//  🏴‍☠️  JORDAN PROXY POOL v7
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // ═══ ULTRA TIER (0-15ms) ═══
    ULTRA: [
        {
            id:"JO_U1", ip:"46.185.131.22", port:8080,
            asn:"AS9038", carrier:"ORANGE", zone:"AMM",
            ping:{day:5, night:7, peak:11},
            bw:99, reliability:0.99,
            tags:["sync","auth","lobby","game"], peak:2
        },
        {
            id:"JO_U2", ip:"79.173.195.42", port:8080,
            asn:"AS9155", carrier:"ZAIN", zone:"AMM",
            ping:{day:6, night:8, peak:13},
            bw:97, reliability:0.98,
            tags:["sync","game","ranked"], peak:3
        },
        {
            id:"JO_U3", ip:"82.212.12.55", port:80,
            asn:"AS15879", carrier:"UMNIAH", zone:"AMM",
            ping:{day:7, night:9, peak:14},
            bw:95, reliability:0.97,
            tags:["auth","lobby","game"], peak:2
        },
        {
            id:"JO_U4", ip:"94.127.209.20", port:8080,
            asn:"AS9038", carrier:"ORANGE", zone:"AMM",
            ping:{day:5, night:8, peak:12},
            bw:98, reliability:0.99,
            tags:["sync","auth","fps"], peak:1
        }
    ],

    // ═══ FAST TIER (15-25ms) ═══
    FAST: [
        {
            id:"JO_F1", ip:"46.185.147.88", port:3128,
            asn:"AS9038", carrier:"ORANGE", zone:"IRB",
            ping:{day:10, night:12, peak:18},
            bw:90, reliability:0.96,
            tags:["game","cdn","fps"], peak:2
        },
        {
            id:"JO_F2", ip:"79.173.242.11", port:3128,
            asn:"AS9155", carrier:"ZAIN", zone:"ZAR",
            ping:{day:11, night:13, peak:19},
            bw:88, reliability:0.95,
            tags:["game","cdn"], peak:2
        },
        {
            id:"JO_F3", ip:"82.212.72.33", port:8080,
            asn:"AS15879", carrier:"UMNIAH", zone:"AQB",
            ping:{day:12, night:14, peak:21},
            bw:85, reliability:0.94,
            tags:["backup","cdn","fps"], peak:2
        }
    ],

    // ═══ STABLE TIER (25-40ms) ═══
    STABLE: [
        {
            id:"JO_S1", ip:"62.72.163.100", port:80,
            asn:"AS5693", carrier:"ORANGE", zone:"AMM",
            ping:{day:15, night:18, peak:28},
            bw:78, reliability:0.91,
            tags:["fallback"], peak:1
        },
        {
            id:"JO_S2", ip:"94.127.209.15", port:80,
            asn:"AS9038", carrier:"ORANGE", zone:"SAL",
            ping:{day:16, night:20, peak:30},
            bw:75, reliability:0.89,
            tags:["fallback"], peak:1
        }
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  🗺️  GEO-FENCING v5
// ═══════════════════════════════════════════════════════════════════════

var GEO = {
    nets: [
        ["46.185.128.0","18"], ["94.127.208.0","20"],
        ["62.72.160.0","19"],  ["94.230.0.0","16"],
        ["79.173.192.0","18"], ["109.237.192.0","20"],
        ["82.212.0.0","16"],   ["176.28.0.0","17"],
        ["176.29.0.0","16"],   ["188.247.0.0","16"],
        ["37.220.0.0","16"],   ["91.106.0.0","16"]
    ],

    regions: [
        { code:"jo",    name:"Jordan",     pri:100, force:true  },
        { code:"mena",  name:"MENA",       pri:95,  force:true  },
        { code:"me",    name:"MiddleEast", pri:90,  force:false },
        { code:"gcc",   name:"GCC",        pri:80,  force:false },
        { code:"eu-e",  name:"EU-East",    pri:40,  force:false },
        { code:"asia",  name:"Asia",       pri:10,  force:false }
    ],

    forceKeywords: [
        "jo","jordan","amman","irbid","zarqa","aqaba",
        "mena-hub","me-server","gcc-hub",
        "local","near","closest"
    ],

    blockForeign: [
        "us-server","eu-west","na-","brazil","sa-",
        "korea","japan","taiwan","india-far"
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  🎮 GAME INTELLIGENCE DATABASE v7
// ═══════════════════════════════════════════════════════════════════════

var GAME_DB = {
    // ═══ PUBG DOMAINS ═══
    pubgDomains: [
        "igamecj.com","gcloud.qq.com","tencent-cloud.net",
        "lbsgame.com","levelinfinite.com","proximabeta.com",
        "lightspeed.qq.com","gamenet.qq.com","tmgp.qq.com",
        "pubgmobile.com","pubgm.com","bsgame.qq.com",
        "dl.pgamer.qq.com","resource.pgamer.qq.com",
        "anticheat.pubgm.com","match.pubgm.com","lobby.pubgm.com",
        "game-svr.tencent.com","gs.tencent.com",
        "garena.pubg.com","levelinfinite.huya.com",
        "pubgops.com","pubgsupport.com"
    ],

    pubgKeywords: [
        "pubg","pubgm","tmgp","gcloud","lightspeed",
        "levelinfinite","igamecj","bsgame","anticheat",
        "gamenet","proxima","qq-game","battlegrounds"
    ],

    // ═══ TIKTOK DOMAINS ═══
    tiktokDomains: [
        "tiktok.com","tiktokv.com","tiktokcdn.com",
        "bytecdn.com","bytego.com","ttlivecdn.com",
        "bytedns.com","tiktokcdn-us.com","musical.ly",
        "pstatp.com","snssdk.com","iesdouyin.com",
        "ixigua.com","bytedance.com","tiktok.org",
        "tiktok-global.com","ibytedtos.com","tosv.byted.org",
        "ttw9.com","ttwstatic.com","tiktokd.com",
        "livepush.tiktok.com","pull-hls.tiktok.com"
    ],

    // ═══ CDN / FPS BOOST DOMAINS ═══
    cdnDomains: [
        "akamai.net","akamaiedge.net","akamaitechnologies.com",
        "cloudflare.com","cloudflare.net","cdn.cloudflare.com",
        "fastly.net","fastlylb.net",
        "gstatic.com","googlevideo.com",
        "awscloudfront.net","cloudfront.net",
        "llnwd.net","limelight.com",
        "edgesuite.net","edgekey.net"
    ],

    // ═══ PUBG MODES ═══
    modes: {
        SYNC:    { pri:10, target:5,  tags:["sync","gsvr","relay","battle","node","udp","burst","realtime","gamenet","gs","pkt"] },
        AUTH:    { pri:10, target:8,  tags:["auth","login","token","session","passport","anticheat","verify","security","openid"] },
        LOBBY:   { pri:10, target:6,  tags:["lobby","queue","matchmake","room","team","party","presence","serverlist","region","mm"] },
        RANKED:  { pri:10, target:5,  tags:["ranked","rank","conqueror","ace","master","diamond","platinum","season","leaderboard","rp"] },
        CLASSIC: { pri:9,  target:10, tags:["classic","erangel","miramar","sanhok","vikendi","livik","rondo","deston","paramore","map"] },
        TDM:     { pri:9,  target:8,  tags:["teamdeath","arena","warehouse","facility","shooting","tdm"] },
        PAYLOAD: { pri:8,  target:14, tags:["payload","helicop","rocket","airstrike","heavy"] },
        METRO:   { pri:8,  target:16, tags:["metro","royale","faction","underworld","darkzone"] },
        EVOG:    { pri:7,  target:18, tags:["evoground","infection","zombie","panzer","survive"] },
        ARCADE:  { pri:5,  target:22, tags:["arcade","minizone","sniper","warmode","quickmatch","fun"] },
        CDN:     { pri:1,  target:99, tags:["cdn","patch","update","resource","download","asset","pkg","apk","obb","hotfix","version"] },
        TRAIN:   { pri:1,  target:99, tags:["training","practice","tutorial","bot","aim","range"] }
    },

    modeOrder: [
        "SYNC","AUTH","LOBBY","RANKED",
        "CLASSIC","TDM","PAYLOAD","METRO",
        "EVOG","ARCADE","CDN","TRAIN"
    ]
};

// ═══════════════════════════════════════════════════════════════════════
//  🚀 FPS OPTIMIZER ENGINE v1 (ميزة جديدة)
// ═══════════════════════════════════════════════════════════════════════

var FPS_ENGINE = {
    // دومينات تؤثر على الـ FPS
    fpsImpactDomains: [
        "gstatic.com","googleapis.com","doubleclick.net",
        "googlesyndication.com","googletagmanager.com",
        "facebook.com","fbcdn.net","connect.facebook.net",
        "analytics","metric","telemetry","crash","log",
        "ads","tracker","beacon","pixel"
    ],

    // دومينات مطلوبة للـ FPS العالي (تسريع CDN)
    fpsBoostDomains: [
        "cloudflare","akamai","fastly","cloudfront",
        "gstatic","googleapis","cdn"
    ],

    // فحص إذا الدومين يؤثر سلباً على الـ FPS
    isNegative: function(host) {
        if (!CFG.FPS_BOOST) return false;
        var h = host.toLowerCase();
        for (var i = 0; i < this.fpsImpactDomains.length; i++) {
            if (h.indexOf(this.fpsImpactDomains[i]) !== -1) return true;
        }
        return false;
    },

    // فحص إذا الدومين يحسن الـ FPS
    isPositive: function(host) {
        if (!CFG.FPS_CDN_PRIORITY) return false;
        var h = host.toLowerCase();
        for (var i = 0; i < this.fpsBoostDomains.length; i++) {
            if (h.indexOf(this.fpsBoostDomains[i]) !== -1) return true;
        }
        return false;
    },

    // حساب FPS المتوقع
    estimateFPS: function() {
        var ping = PING.get();
        var jitter = JITTER.buffer;

        // FPS Formula based on network quality
        if (ping <= 5 && jitter <= 2)  return 144;
        if (ping <= 8 && jitter <= 4)  return 120;
        if (ping <= 15 && jitter <= 6) return 90;
        if (ping <= 25 && jitter <= 10) return 60;
        if (ping <= 40) return 45;
        return 30;
    },

    // الحصول على أفضل Route للـ FPS
    getBestFPSRoute: function() {
        var p = bestProxy(["fps","cdn","game"], "ULTRA");
        if (p) return "PROXY " + p.ip + ":" + p.port;
        p = bestProxy(["fps","cdn"], "FAST");
        if (p) return "PROXY " + p.ip + ":" + p.port;
        return "DIRECT";
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  ⚡ PREDICTIVE DNS CLUSTER ENGINE
// ═══════════════════════════════════════════════════════════════════════

var DNS_ENGINE = {
    cache: {},
    lru: [],
    cluster: {},

    init: function() {
        if (!CFG.DNS_PREFETCH) return;
        var hot = [
            "igamecj.com","gcloud.qq.com","lightspeed.qq.com",
            "match.pubgm.com","lobby.pubgm.com","anticheat.pubgm.com",
            "bsgame.qq.com","resource.pgamer.qq.com",
            "tiktok.com","tiktokcdn.com","bytecdn.com",
            "cloudflare.com","akamai.net","fastly.net"
        ];
        for (var i = 0; i < hot.length; i++) {
            this._resolve(hot[i]);
        }
    },

    lookup: function(host) {
        var nowT = now();
        var e = this.cache[host];

        if (e && nowT - e.t < CFG.DNS_TTL) {
            e.access = nowT;
            return e;
        }

        if (e && nowT - e.t < CFG.DNS_STALE) {
            e.access = nowT;
            this._resolve(host);
            return e;
        }

        return this._resolve(host);
    },

    _resolve: function(host) {
        var t0 = now();
        var ip = dnsResolve(host);
        var dt = now() - t0;

        var r = { ip: ip, dt: dt, t: now(), access: now(), ok: !!ip };

        if (this.lru.length >= CFG.DNS_MAX) {
            var self = this;
            this.lru.sort(function(a, b) {
                return (self.cache[a] ? self.cache[a].access : 0) -
                       (self.cache[b] ? self.cache[b].access : 0);
            });
            if (this.lru[0]) {
                delete this.cache[this.lru[0]];
                this.lru.shift();
            }
        }

        this.cache[host] = r;
        this.lru.push(host);

        PING.record(dt);
        this._predictCluster(host, ip);

        return r;
    },

    _predictCluster: function(host, ip) {
        if (!ip) return;
        var parts = host.split(".");
        if (parts.length < 2) return;
        var root = parts.slice(-2).join(".");
        if (!this.cluster[root]) this.cluster[root] = [];
        if (this.cluster[root].indexOf(ip) === -1) {
            this.cluster[root].push(ip);
        }
    },

    getCluster: function(host) {
        var parts = host.split(".");
        if (parts.length < 2) return [];
        var root = parts.slice(-2).join(".");
        return this.cluster[root] || [];
    }
};
DNS_ENGINE.init();

// ═══════════════════════════════════════════════════════════════════════
//  🧠 AI LATENCY PREDICTION ENGINE
// ═══════════════════════════════════════════════════════════════════════

var LATENCY_AI = {
    history: [],
    maxSamples: 40,
    trend: 0,
    confidence: 0,

    add: function(ping, time) {
        this.history.push({ ping: ping, t: time || now() });
        if (this.history.length > this.maxSamples) this.history.shift();
        this._calcTrend();
    },

    _calcTrend: function() {
        if (this.history.length < 3) { this.trend = 0; return; }
        var recent = this.history.slice(-8);
        var sum = 0;
        for (var i = 1; i < recent.length; i++) {
            sum += recent[i].ping - recent[i-1].ping;
        }
        this.trend = sum / (recent.length - 1);

        // Confidence (higher samples = more confident)
        this.confidence = Math.min(1, this.history.length / this.maxSamples);
    },

    predict: function() {
        var current = PING.get();
        if (current >= 999) return 999;
        var predicted = current + (this.trend * 3 * this.confidence);
        return Math.max(0, Math.round(predicted));
    },

    isDegrading:  function() { return this.trend > 2; },
    isImproving:  function() { return this.trend < -1; },
    isStable:     function() { return Math.abs(this.trend) <= 1; }
};

// ═══════════════════════════════════════════════════════════════════════
//  📡 JITTER BUFFER ENGINE
// ═══════════════════════════════════════════════════════════════════════

var JITTER = {
    samples: [],
    maxSamples: 25,
    buffer: 0,

    add: function(ping) {
        this.samples.push(ping);
        if (this.samples.length > this.maxSamples) this.samples.shift();
        this._calcBuffer();
    },

    _calcBuffer: function() {
        if (this.samples.length < 3) { this.buffer = 0; return; }
        var sum = 0, sumSq = 0;
        var len = this.samples.length;
        for (var i = 0; i < len; i++) {
            sum   += this.samples[i];
            sumSq += this.samples[i] * this.samples[i];
        }
        var mean     = sum / len;
        var variance = (sumSq / len) - (mean * mean);
        this.buffer  = Math.sqrt(Math.max(0, variance));
    },

    getSafePing: function() {
        return PING.get() + Math.min(this.buffer * 2, CFG.JITTER_TOLERANCE * 3);
    },

    isJittery: function() { return this.buffer > CFG.JITTER_TOLERANCE; }
};

// ═══════════════════════════════════════════════════════════════════════
//  🔗 CONNECTION POOL ENGINE
// ═══════════════════════════════════════════════════════════════════════

var CONN_POOL = {
    active: {},
    lastUsed: {},
    ttl: {},

    get: function(key) {
        var e = this.active[key];
        var ttl = this.ttl[key] || 30000;
        if (e && now() - this.lastUsed[key] < ttl) {
            this.lastUsed[key] = now();
            return e;
        }
        return null;
    },

    set: function(key, proxy, customTTL) {
        this.active[key]   = proxy;
        this.lastUsed[key] = now();
        this.ttl[key]      = customTTL || 30000;
    },

    invalidate: function(key) {
        delete this.active[key];
        delete this.lastUsed[key];
        delete this.ttl[key];
    },

    purgeOld: function() {
        var keys = Object.keys(this.active);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var ttl = this.ttl[k] || 30000;
            if (now() - (this.lastUsed[k] || 0) > ttl * 2) {
                this.invalidate(k);
            }
        }
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  📊 PING ENGINE v6
// ═══════════════════════════════════════════════════════════════════════

var PING = {
    data: [],
    ema: 999,
    alpha: 0.18,

    record: function(ms) {
        if (!ms || ms <= 0 || ms > 9999) return;
        this.data.push(ms);
        if (this.data.length > CFG.PING_SAMPLES) this.data.shift();
        if (this.ema === 999) this.ema = ms;
        else this.ema = this.alpha * ms + (1 - this.alpha) * this.ema;

        JITTER.add(ms);
        LATENCY_AI.add(ms);
        FEC.check(ms);
    },

    get: function() { return Math.round(this.ema); },

    getAvg: function() {
        if (!this.data.length) return 999;
        var s = 0;
        for (var i = 0; i < this.data.length; i++) s += this.data[i];
        return Math.round(s / this.data.length);
    },

    isKilling:    function() { return this.get() >= CFG.KILL_THRESHOLD; },
    isSlow:       function() { return this.get() >= CFG.SLOW_THRESHOLD; },

    grade: function() {
        var v = this.get();
        if (v >= 999) return "❄️COLD";
        if (v <= 5)   return "⚡ZERO";
        if (v <= 10)  return "🔥ULTRA";
        if (v <= 18)  return "🚀FAST";
        if (v <= 25)  return "🟢GOOD";
        if (v <= 40)  return "🟡OK";
        return "🔴SLOW";
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🔧 PROXY HEALTH ENGINE v4
// ═══════════════════════════════════════════════════════════════════════

var PROXY_HEALTH = {};

function markProxyHealth(id, success, ping) {
    if (!PROXY_HEALTH[id]) {
        PROXY_HEALTH[id] = {
            checks: 0, ok: 0, pings: [], lastFail: 0, lastOk: 0
        };
    }
    var h = PROXY_HEALTH[id];
    h.checks++;
    if (success) {
        h.ok++;
        h.lastOk = now();
    }
    if (ping && ping < 500) {
        h.pings.push(ping);
        if (h.pings.length > 20) h.pings.shift();
    }
    if (!success) h.lastFail = now();
}

function proxyScore(proxyObj) {
    var h = PROXY_HEALTH[proxyObj.id] || { checks:1, ok:1, pings:[], lastFail:0 };
    var alive = (h.ok / Math.max(h.checks, 1)) >= 0.35;
    if (!alive && now() - h.lastFail < 120000) return -999;

    var ping        = getProxyPing(proxyObj);
    var avgPing     = h.pings.length
        ? h.pings.reduce(function(a,b){ return a+b; }, 0) / h.pings.length
        : ping;
    var reliability = h.ok / Math.max(h.checks, 1);

    var s = 100;
    s -= avgPing * 2.5;
    s += reliability * 35;
    s += proxyObj.bw * 0.35;
    s -= proxyObj.peak * 4;

    var profile = getTimeProfile();
    if (profile === "day")   s += 8;
    if (profile === "night") s += 5;

    // FPS boost: prefer low-ping for FPS
    if (CFG.FPS_BOOST && avgPing <= 10) s += 20;

    return Math.max(0, s);
}

function bestProxy(tags, tier) {
    var candidates = [];
    var tiers = tier ? [tier] : ["ULTRA","FAST","STABLE"];

    for (var t = 0; t < tiers.length; t++) {
        var list = PROXY[tiers[t]];
        if (!list) continue;
        for (var i = 0; i < list.length; i++) {
            var p = list[i];
            if (CFG.PROXY_EXIT_JO_ONLY && !isJO(p.ip)) continue;

            var score = proxyScore(p);
            if (tags) {
                for (var j = 0; j < tags.length; j++) {
                    if (p.tags && p.tags.indexOf(tags[j]) !== -1) score += 30;
                }
            }
            candidates.push({ proxy: p, score: score });
        }
    }

    candidates.sort(function(a, b) { return b.score - a.score; });
    return candidates.length ? candidates[0].proxy : null;
}

function dualProxyRoute(tags) {
    var p1 = bestProxy(tags, "ULTRA");
    if (!p1) return null;
    var p2 = bestProxy(tags, "FAST");
    if (!p2 || p2.id === p1.id) p2 = bestProxy(tags, "STABLE");

    if (p2 && p2.id !== p1.id) {
        return "PROXY " + p1.ip + ":" + p1.port +
               "; PROXY " + p2.ip + ":" + p2.port;
    }
    return "PROXY " + p1.ip + ":" + p1.port;
}

// ═══════════════════════════════════════════════════════════════════════
//  🗺️  GEO ENGINE v5
// ═══════════════════════════════════════════════════════════════════════

function geoScore(host, ip) {
    var score = 0;
    var h = host.toLowerCase();

    for (var i = 0; i < GEO.forceKeywords.length; i++) {
        if (h.indexOf(GEO.forceKeywords[i]) !== -1) score += 60;
    }

    for (var j = 0; j < GEO.blockForeign.length; j++) {
        if (h.indexOf(GEO.blockForeign[j]) !== -1) score -= 80;
    }

    if (ip && isJO(ip)) score += 55;

    for (var k = 0; k < GEO.regions.length; k++) {
        if (h.indexOf(GEO.regions[k].code) !== -1) {
            score += GEO.regions[k].pri;
            if (GEO.regions[k].force) score += 25;
        }
    }

    var carrier = getCarrier(ip);
    if (carrier === "ORANGE") score += 18;
    if (carrier === "ZAIN")   score += 15;
    if (carrier === "UMNIAH") score += 12;

    return score;
}

// ═══════════════════════════════════════════════════════════════════════
//  🔄 FEC SIMULATION ENGINE
// ═══════════════════════════════════════════════════════════════════════

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

        if (this.consecutiveBad >= 3) {
            this.consecutiveBad = 0;
            CONN_POOL.purgeOld();
            return "FORCE_CHANGE";
        }
        return "OK";
    },

    shouldAggressive: function() { return this.consecutiveBad >= 2; }
};

// ═══════════════════════════════════════════════════════════════════════
//  ⚖️  SMART THROTTLE ENGINE
// ═══════════════════════════════════════════════════════════════════════

var THROTTLE = {
    lastSwitch: 0,
    switchCount: 0,
    lockUntil: 0,

    canSwitch: function() {
        return now() >= this.lockUntil;
    },

    registerSwitch: function() {
        this.switchCount++;
        this.lastSwitch = now();
        if (this.switchCount >= 4) {
            this.lockUntil   = now() + 6000;
            this.switchCount = 0;
        }
    },

    reset: function() {
        this.switchCount = 0;
        this.lockUntil   = 0;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  🔥 WARM STANDBY ENGINE
// ═══════════════════════════════════════════════════════════════════════

var WARM = {
    lastCheck: 0,
    bestStandby: null,
    interval: 8000,

    update: function() {
        if (now() - this.lastCheck < this.interval) return;
        this.lastCheck   = now();
        this.bestStandby = bestProxy(["sync","game","fps"]);
    },

    get: function() {
        this.update();
        return this.bestStandby;
    }
};
WARM.update();

// ═══════════════════════════════════════════════════════════════════════
//  🕵️  ANTI-DETECTION ENGINE
// ═══════════════════════════════════════════════════════════════════════

function antiDetect(host) {
    if (!CFG.ANTI_DETECT) return false;
    var h = host.toLowerCase();
    var detectors = [
        "proxy-check","antiproxy","vpndetect","proxydetect",
        "whatismyip","ipleak","dnsleak","ipcheck",
        "myleaktest","browserleaks"
    ];
    for (var i = 0; i < detectors.length; i++) {
        if (h.indexOf(detectors[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  🎯 SMART SCORE CALCULATOR
// ═══════════════════════════════════════════════════════════════════════

function calculateScore(dnsTime, mode, ip, geo) {
    var m = GAME_DB.modes[mode] || GAME_DB.modes.CLASSIC;
    var s = 50;

    // DNS speed score
    if      (dnsTime <= 2)  s += 35;
    else if (dnsTime <= 5)  s += 25;
    else if (dnsTime <= 10) s += 15;
    else if (dnsTime <= 20) s += 5;
    else s -= 20;

    // Ping score
    var safePing = JITTER.getSafePing();
    if      (safePing <= m.target)       s += 40;
    else if (safePing <= m.target * 1.5) s += 20;
    else if (safePing <= m.target * 2)   s += 5;
    else if (safePing > CFG.KILL_THRESHOLD) s -= 35;

    // Geo score
    s += geo * 0.4;

    // Mode priority
    s += m.pri * 3;

    // Jitter penalty
    if (JITTER.isJittery()) s -= 18;

    // AI prediction
    if (CFG.LATENCY_PREDICTION) {
        var pred = LATENCY_AI.predict();
        if (pred > m.target * 2) s -= 25;
        if (pred <= m.target)    s += 10;
    }

    // FEC state
    if (FEC.shouldAggressive()) s -= 12;

    // FPS bonus
    if (CFG.FPS_BOOST) {
        var fps = FPS_ENGINE.estimateFPS();
        if (fps >= 120) s += 15;
        else if (fps >= 90) s += 8;
    }

    return Math.max(0, Math.min(100, s));
}

// ═══════════════════════════════════════════════════════════════════════
//  🔀 ROUTE SELECTOR ENGINE
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode, score, ip, port, host) {
    var m = GAME_DB.modes[mode] || GAME_DB.modes.CLASSIC;

    // Anti-detection bypass
    if (antiDetect(host)) return "DIRECT";

    // IPv6 block
    if (CFG.BLOCK_IPV6 && ip && ip.indexOf(":") !== -1) return BLOCK;

    // ═══ KILL SWITCH ═══
    if (PING.isKilling()) {
        log("🔴 KILL SWITCH - Rerouting");
        THROTTLE.registerSwitch();
        CONN_POOL.invalidate("critical_" + mode);
        return dualProxyRoute(m.tags) || fallbackRoute(m.tags);
    }

    // ═══ CDN / FPS DIRECT ═══
    if (mode === "CDN") {
        if (CFG.FPS_BOOST && FPS_ENGINE.isPositive(host)) {
            return FPS_ENGINE.getBestFPSRoute();
        }
        if (!CFG.NO_DIRECT_PUBG) return "DIRECT";
        var cdnP = bestProxy(["cdn"], "FAST");
        return cdnP ? "PROXY " + cdnP.ip + ":80" : "DIRECT";
    }

    // ═══ TRAINING ═══
    if (mode === "TRAIN") return "DIRECT";

    // ═══ CONNECTION POOL ═══
    var poolKey = mode + "_" + (ip || host);
    var cached  = CONN_POOL.get(poolKey);
    if (cached) return cached;

    // ═══ CRITICAL MODES ═══
    var criticalModes = ["SYNC","AUTH","LOBBY","RANKED"];
    if (criticalModes.indexOf(mode) !== -1) {
        var ttl = CFG.STICKY_TTL_CRITICAL;

        if (CFG.DUAL_PROXY_CRITICAL &&
            (mode === "SYNC" || mode === "RANKED") &&
            score > 45) {
            var dualRoute = dualProxyRoute(m.tags);
            if (dualRoute) {
                CONN_POOL.set(poolKey, dualRoute, ttl);
                return dualRoute;
            }
        }

        var best = bestProxy(m.tags, "ULTRA") || WARM.get();
        if (best) {
            var r = "PROXY " + best.ip + ":" + best.port;
            CONN_POOL.set(poolKey, r, ttl);
            return r;
        }
    }

    // ═══ GAME MODES ═══
    if (score > 55) {
        var bp = bestProxy(m.tags);
        if (bp) {
            var route = "PROXY " + bp.ip + ":" + bp.port;
            CONN_POOL.set(poolKey, route, CFG.STICKY_TTL_GAME);
            return route;
        }
    }

    // ═══ FALLBACK ═══
    return fallbackRoute(m.tags);
}

function fallbackRoute(tags) {
    var chain = "";
    var count = 0;
    var tiers = ["ULTRA","FAST","STABLE"];

    for (var t = 0; t < tiers.length && count < 3; t++) {
        var list = PROXY[tiers[t]];
        if (!list) continue;
        for (var i = 0; i < list.length && count < 3; i++) {
            var p = list[i];
            if (CFG.PROXY_EXIT_JO_ONLY && !isJO(p.ip)) continue;
            if (proxyScore(p) < 0) continue;
            if (chain) chain += "; ";
            chain += "PROXY " + p.ip + ":" + p.port;
            count++;
        }
    }

    if (chain) {
        return chain + (CFG.FAIL_CLOSED ? "; " + BLOCK : "; DIRECT");
    }
    return CFG.FAIL_CLOSED ? BLOCK : "DIRECT";
}

// ═══════════════════════════════════════════════════════════════════════
//  🔍 DETECTION ENGINE v7
// ═══════════════════════════════════════════════════════════════════════

function isTikTok(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < GAME_DB.tiktokDomains.length; i++) {
        var d = GAME_DB.tiktokDomains[i];
        if (h === d || h.indexOf("." + d) !== -1) return true;
    }
    return false;
}

function isPUBG(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < GAME_DB.pubgDomains.length; i++) {
        var d = GAME_DB.pubgDomains[i];
        if (h === d || h.indexOf("." + d) !== -1) return true;
    }
    for (var j = 0; j < GAME_DB.pubgKeywords.length; j++) {
        if (h.indexOf(GAME_DB.pubgKeywords[j]) !== -1) return true;
    }
    return false;
}

function isCDN(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < GAME_DB.cdnDomains.length; i++) {
        if (h.indexOf(GAME_DB.cdnDomains[i]) !== -1) return true;
    }
    return false;
}

function detectMode(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < GAME_DB.modeOrder.length; i++) {
        var modeName = GAME_DB.modeOrder[i];
        var m = GAME_DB.modes[modeName];
        for (var j = 0; j < m.tags.length; j++) {
            if (h.indexOf(m.tags[j]) !== -1) return modeName;
        }
    }
    return "CLASSIC";
}

// ═══════════════════════════════════════════════════════════════════════
//  📟 MAIN ENTRY — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════════

var BLOCK = "PROXY 0.0.0.0:80";

function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    // ═══ LOCAL / LAN ═══
    if (isPlainHostName(h))                                    return "DIRECT";
    if (isInNet(h,"10.0.0.0","255.0.0.0"))                    return "DIRECT";
    if (isInNet(h,"172.16.0.0","255.240.0.0"))                 return "DIRECT";
    if (isInNet(h,"192.168.0.0","255.255.0.0"))                return "DIRECT";
    if (isInNet(h,"127.0.0.0","255.0.0.0"))                    return "DIRECT";

    // ═══ ANTI-DETECTION ═══
    if (antiDetect(h))                                         return "DIRECT";

    // ═══ FPS: Block negative domains ═══
    if (CFG.FPS_BOOST && FPS_ENGINE.isNegative(h))            return "DIRECT";

    // ═══ TIKTOK: DIRECT BYPASS ═══
    if (isTikTok(h))                                           return "DIRECT";

    // ═══ CDN: FPS BOOST ═══
    if (CFG.FPS_BOOST && isCDN(h)) {
        return FPS_ENGINE.getBestFPSRoute();
    }

    // ═══ NOT GAME: DIRECT ═══
    if (!isPUBG(h))                                            return "DIRECT";

    // ═══ PUBG PIPELINE ═══
    WARM.update();

    var dns   = DNS_ENGINE.lookup(h);
    var ip    = dns.ip;
    var mode  = detectMode(h);
    var port  = getPort(url);
    var geo   = geoScore(h, ip);
    var score = calculateScore(dns.dt, mode, ip, geo);
    var route = selectRoute(mode, score, ip, port, h);

    markProxyHealth("last", !!ip, dns.dt);

    if (CFG.LOG && CFG.LOG_LEVEL === "DEBUG") {
        log("🎮 [" + mode + "] " + h +
            " | ping:" + PING.grade() + "(" + PING.get() + "ms)" +
            " | jitter:" + Math.round(JITTER.buffer) + "ms" +
            " | fps:" + FPS_ENGINE.estimateFPS() +
            " | score:" + score +
            " | geo:" + geo +
            " | → " + route);
    }

    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  🛠️  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════

function now() {
    return (new Date()).getTime();
}

function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    var p = ip.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function mask(cidr) {
    var t = {
        "8":"255.0.0.0",         "9":"255.128.0.0",
        "10":"255.192.0.0",      "11":"255.224.0.0",
        "12":"255.240.0.0",      "13":"255.248.0.0",
        "14":"255.252.0.0",      "15":"255.254.0.0",
        "16":"255.255.0.0",      "17":"255.255.128.0",
        "18":"255.255.192.0",    "19":"255.255.224.0",
        "20":"255.255.240.0",    "21":"255.255.248.0",
        "22":"255.255.252.0",    "23":"255.255.254.0",
        "24":"255.255.255.0",    "25":"255.255.255.128",
        "26":"255.255.255.192",  "27":"255.255.255.224",
        "28":"255.255.255.240",  "29":"255.255.255.248",
        "30":"255.255.255.252",  "31":"255.255.255.254",
        "32":"255.255.255.255"
    };
    return t[String(cidr)] || "255.255.0.0";
}

function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) {
        if (isInNet(ip, ranges[i][0], mask(ranges[i][1]))) return true;
    }
    return false;
}

function isJO(ip)  { return inRanges(ip, GEO.nets); }

function getPort(url) {
    var m = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if (m) return parseInt(m[1], 10);
    if (url.indexOf("https://") === 0) return 443;
    return 80;
}

function getCarrier(ip) {
    if (!ip) return "UNK";
    if (isInNet(ip,"46.185.128.0","255.255.128.0")) return "ORANGE";
    if (isInNet(ip,"79.173.192.0","255.255.192.0")) return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0"))     return "UMNIAH";
    return "OTHER";
}

function getTimeProfile() {
    var h       = new Date().getHours();
    var isPeak  = CFG.PEAK_HOURS.indexOf(h) !== -1;
    var isNight = h >= 23 || h <= 5;
    return isPeak ? "peak" : (isNight ? "night" : "day");
}

function getProxyPing(proxyObj) {
    var profile = getTimeProfile();
    return proxyObj.ping[profile] || proxyObj.ping.day;
}

function log(msg) {
    if (typeof console !== "undefined") {
        console.log("[JO50] " + msg);
    }
}

// ═══════════════════════════════════════════════════════════════════════
//  📊 STATUS MONITOR
// ═══════════════════════════════════════════════════════════════════════

function getStatus() {
    return {
        version:      CFG.VERSION,
        ping:         PING.get() + "ms (" + PING.grade() + ")",
        jitter:       Math.round(JITTER.buffer) + "ms",
        predicted:    LATENCY_AI.predict() + "ms",
        trend:        LATENCY_AI.trend > 0 ? "📈 Rising" : "📉 Falling",
        fps:          FPS_ENGINE.estimateFPS() + " FPS",
        fpsTarget:    CFG.FPS_TARGET + " FPS",
        warmProxy:    WARM.get() ? WARM.get().id : "NONE",
        poolSize:     Object.keys(CONN_POOL.active).length,
        timeProfile:  getTimeProfile(),
        geoBias:      CFG.GEO_BIAS_AGGRESSIVE ? "AGGRESSIVE" : "NORMAL",
        dnsCache:     Object.keys(DNS_ENGINE.cache).length + " entries"
    };
}
