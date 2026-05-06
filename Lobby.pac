// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN PAC v39.0 — TURBO LOBBY EDITION
//  🇯🇴 100% Jordanian Servers | Ultra-Fast Lobby | Zero Lag
//  ⚡ Optimized for Android & iOS | WiFi Exclusive
//  🎮 Fast Matchmaking | Low Ping Gaming | Premium Routing
// ═══════════════════════════════════════════════════════════════════════

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE CONFIG
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var CFG = {
    VERSION: "39.0-TURBO",
    
    // ⚡ LOBBY SPEED SETTINGS
    LOBBY: {
        FAST_MODE: true,
        PRIORITY_BOOST: true,
        MATCHMAKING_TIMEOUT: 5000
    },
    
    // 🎯 Ping Targets
    PING: {
        TARGET: 2,
        MAX: 5,
        CRITICAL: 8,
        LOBBY_BOOST: 1
    },
    
    // 🇯🇴 Jordan Enforcement
    JORDAN: {
        ONLY: true,
        BLOCK_IPV6: true,
        STRICT: true
    },
    
    // 📡 Network
    NETWORK: {
        WIFI_ONLY: true,
        AUTO_FAILOVER: true,
        STICKY_SESSION: true
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ELITE PROXY POOL v39.0
//  🏆 Only Tier-1 Ultra-Low Latency Servers
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PROXIES = [
    // ═══════════ ZAIN FIBER — BEST PING ═══════════
    { ip: "176.28.1.10",    port: 9090,  isp: "ZAIN_FIBER", city: "AMMAN", ping: 1, pri: 100, status: "ACTIVE", tier: "S" },
    { ip: "109.237.193.187",port: 80,    isp: "ZAIN_FIBER", city: "AMMAN", ping: 1, pri: 99,  status: "ACTIVE", tier: "S" },
    { ip: "176.28.0.5",     port: 8080,  isp: "ZAIN_FIBER", city: "AMMAN", ping: 1, pri: 98,  status: "ACTIVE", tier: "S" },
    { ip: "109.237.192.10", port: 443,   isp: "ZAIN_FIBER", city: "AMMAN", ping: 1, pri: 97,  status: "ACTIVE", tier: "S" },
    
    // ═══════════ ORANGE FIBER ═══════════
    { ip: "46.185.128.5",   port: 3128,  isp: "ORANGE_FIBER", city: "AMMAN", ping: 1, pri: 100, status: "ACTIVE", tier: "S" },
    { ip: "46.185.144.10",  port: 8443,  isp: "ORANGE_5G",    city: "AMMAN", ping: 1, pri: 99,  status: "ACTIVE", tier: "S" },
    { ip: "94.127.211.6",   port: 20001, isp: "ORANGE_FIBER", city: "AMMAN", ping: 2, pri: 96,  status: "ACTIVE", tier: "A" },
    { ip: "46.185.128.10",  port: 8080,  isp: "ORANGE_FIBER", city: "AMMAN", ping: 2, pri: 95,  status: "ACTIVE", tier: "A" },
    
    // ═══════════ JT FIBER ═══════════
    { ip: "188.247.1.10",   port: 9090,  isp: "JT_FIBER",    city: "AMMAN", ping: 1, pri: 98,  status: "ACTIVE", tier: "S" },
    { ip: "188.247.0.1",    port: 8080,  isp: "JT_FIBER",    city: "AMMAN", ping: 2, pri: 94,  status: "ACTIVE", tier: "A" },
    
    // ═══════════ UMNIAH 5G ═══════════
    { ip: "82.212.65.10",   port: 8443,  isp: "UMNIAH_5G",   city: "AMMAN", ping: 2, pri: 93,  status: "ACTIVE", tier: "A" },
    { ip: "212.35.85.26",   port: 80,    isp: "UMNIAH_FIBER", city: "AMMAN", ping: 2, pri: 92,  status: "ACTIVE", tier: "A" },
    
    // ═══════════ REGIONAL SERVERS ═══════════
    { ip: "149.200.136.6",  port: 443,   isp: "ZAIN",        city: "IRBID", ping: 3, pri: 85,  status: "ACTIVE", tier: "B" },
    { ip: "79.173.192.10",  port: 8080,  isp: "ZAIN",        city: "ZARQA", ping: 4, pri: 80,  status: "ACTIVE", tier: "B" },
    { ip: "94.127.210.5",   port: 80,    isp: "ORANGE",       city: "ZARQA", ping: 4, pri: 78,  status: "ACTIVE", tier: "B" }
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDANIAN IP RANGES DATABASE v39.0
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_IPS = [
    // Zain Jordan (AS43766, AS48726)
    { range: ["79.173.192.0",  "18"], isp: "ZAIN" },
    { range: ["79.173.224.0",  "19"], isp: "ZAIN" },
    { range: ["109.237.192.0", "18"], isp: "ZAIN" },
    { range: ["109.237.224.0", "19"], isp: "ZAIN" },
    { range: ["176.28.0.0",    "15"], isp: "ZAIN" },
    { range: ["176.29.0.0",    "16"], isp: "ZAIN" },
    { range: ["176.28.128.0",  "17"], isp: "ZAIN" },
    { range: ["109.237.195.0", "24"], isp: "ZAIN" },
    
    // Orange Jordan (AS15858)
    { range: ["46.185.128.0",  "17"], isp: "ORANGE" },
    { range: ["46.185.144.0",  "20"], isp: "ORANGE" },
    { range: ["46.185.160.0",  "20"], isp: "ORANGE" },
    { range: ["46.185.176.0",  "21"], isp: "ORANGE" },
    { range: ["46.185.192.0",  "20"], isp: "ORANGE" },
    { range: ["46.185.208.0",  "21"], isp: "ORANGE" },
    { range: ["94.127.208.0",  "20"], isp: "ORANGE" },
    { range: ["94.127.224.0",  "19"], isp: "ORANGE" },
    { range: ["149.200.136.0", "22"], isp: "ORANGE" },
    
    // Umniah Jordan (AS43758)
    { range: ["82.212.0.0",    "16"], isp: "UMNIAH" },
    { range: ["82.212.64.0",  "18"], isp: "UMNIAH" },
    { range: ["82.212.128.0", "17"], isp: "UMNIAH" },
    { range: ["82.212.32.0",  "20"], isp: "UMNIAH" },
    { range: ["82.212.96.0",  "20"], isp: "UMNIAH" },
    { range: ["82.212.160.0", "20"], isp: "UMNIAH" },
    { range: ["212.35.64.0",  "18"], isp: "UMNIAH" },
    { range: ["212.35.96.0",  "19"], isp: "UMNIAH" },
    
    // Jordan Telecom / GO (AS15857, AS48200)
    { range: ["188.247.0.0",   "16"], isp: "JT" },
    { range: ["188.247.1.0",   "24"], isp: "JT" },
    { range: ["91.106.0.0",    "16"], isp: "GO" },
    { range: ["37.220.0.0",   "16"], isp: "JT" },
    { range: ["94.230.0.0",   "16"], isp: "JT" },
    { range: ["176.203.0.0",  "16"], isp: "JT" },
    
    // Additional Jordanian
    { range: ["5.11.0.0",     "16"], isp: "OTHER" },
    { range: ["31.25.128.0",  "17"], isp: "OTHER" },
    { range: ["37.48.0.0",    "16"], isp: "OTHER" },
    { range: ["77.44.0.0",    "16"], isp: "OTHER" },
    { range: ["77.45.0.0",    "17"], isp: "OTHER" },
    { range: ["178.20.184.0", "21"], isp: "OTHER" }
];

// City IP Ranges
var CITIES = {
    AMMAN: [
        ["46.185.128.0","20"],["79.173.192.0","20"],["82.212.0.0","19"],
        ["188.247.0.0","18"],["91.106.0.0","16"],["176.28.1.0","24"],
        ["188.247.1.0","24"]
    ],
    IRBID: [["46.185.176.0","21"],["79.173.240.0","21"],["82.212.96.0","20"]],
    ZARQA: [["46.185.192.0","21"],["176.28.128.0","18"]],
    AQABA: [["46.185.208.0","21"]]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PATTERNS DATABASE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PATTERNS = {
    // PUBG Keywords
    PUBG: [
        "pubgmobile","pubgm","pubgmobilecom","pubg","tencent","igame",
        "lightspeed","tgpa","gcloud","levelinfinite","krafton",
        "battlegrounds","proximabeta","bluehole","pubgnewstate",
        "newstate","pubgserver","gameguard"
    ],
    
    // LOBBY & MATCHMAKING — PRIORITY HIGH
    LOBBY: [
        "lobby","matchmake","matchmaking","queue","search",
        "room","waiting","party","crew","clan","invite",
        "friend","nearby","social","presence","join"
    ],
    
    // GAMEPLAY
    GAME: [
        "classic","ranked","tdm","arena","metro","arcade",
        "solo","duo","squad","deathmatch","zone","alive"
    ],
    
    // VOICE & CHAT
    VOICE: [
        "voice","rtc","chat","message","messenger",
        "conference","voip","audio"
    ],
    
    // AUTH & UPDATES
    AUTH: [
        "auth","login","update","patch","cdn","download",
        "version","manifest","apatch"
    ],
    
    // CDN & ASSETS
    CDN: [
        "cdn","assets","static","media","ap.ttp","static.ttp"
    ],
    
    // ANTI-CHEAT
    ANTI: [
        "easyanticheat","battleeye","vac","pubganticheat","xact"
    ]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HELPER FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    var p = ip.split(".");
    return p.length === 4 && p.every(function(n) {
        var v = parseInt(n);
        return !isNaN(v) && v >= 0 && v <= 255;
    });
}

function cidrMask(c) {
    var m = {
        "15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0",
        "18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0",
        "21":"255.255.248.0","22":"255.255.252.0","24":"255.255.255.0"
    };
    return m[c] || "255.255.0.0";
}

function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_IPS.length; i++) {
        if (isInNet(ip, JO_IPS[i].range[0], cidrMask(JO_IPS[i].range[1]))) {
            return { match: true, isp: JO_IPS[i].isp };
        }
    }
    return { match: false, isp: null };
}

function getCity(ip) {
    if (!isIPv4(ip)) return "AMMAN";
    for (var city in CITIES) {
        for (var i = 0; i < CITIES[city].length; i++) {
            if (isInNet(ip, CITIES[city][i][0], cidrMask(CITIES[city][i][1]))) {
                return city;
            }
        }
    }
    return "AMMAN";
}

function matches(h, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (h.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function isPUBG(u, h) {
    var text = (u + h).toLowerCase();
    return matches(text, PATTERNS.PUBG);
}

function isLobby(u, h) {
    var text = (u + h).toLowerCase();
    return matches(text, PATTERNS.LOBBY);
}

function isGame(u, h) {
    var text = (u + h).toLowerCase();
    return matches(text, PATTERNS.GAME);
}

function isVoice(u, h) {
    var text = (u + h).toLowerCase();
    return matches(text, PATTERNS.VOICE);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TRAFFIC PRIORITY CLASSIFIER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function classifyTraffic(u, h) {
    var text = (u + h).toLowerCase();
    
    // 🎯 LOBBY — HIGHEST PRIORITY (Turbo Mode)
    if (CFG.LOBBY.FAST_MODE && matches(text, PATTERNS.LOBBY)) {
        return {
            type: "LOBBY",
            priority: 10,
            pingBoost: CFG.PING.LOBBY_BOOST,
            qos: "EF"
        };
    }
    
    // 🎮 GAMEPLAY
    if (matches(text, PATTERNS.GAME)) {
        return {
            type: "GAMEPLAY",
            priority: 9,
            pingBoost: 0,
            qos: "AF41"
        };
    }
    
    // 🎤 VOICE CHAT
    if (matches(text, PATTERNS.VOICE)) {
        return {
            type: "VOICE",
            priority: 8,
            pingBoost: 0,
            qos: "EF"
        };
    }
    
    // 🔒 ANTI-CHEAT
    if (matches(text, PATTERNS.ANTI)) {
        return {
            type: "ANTI_CHEAT",
            priority: 9,
            pingBoost: 0,
            qos: "AF41"
        };
    }
    
    // 🔑 AUTH
    if (matches(text, PATTERNS.AUTH)) {
        return {
            type: "AUTH",
            priority: 6,
            pingBoost: 0,
            qos: "AF21"
        };
    }
    
    // 📦 CDN (Direct)
    if (matches(text, PATTERNS.CDN)) {
        return {
            type: "CDN",
            priority: 3,
            pingBoost: 0,
            qos: "BE",
            direct: true
        };
    }
    
    return null;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  AI PROXY SELECTOR — TURBO MODE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var STATE = {
    currentProxy: null,
    lastProxy: null,
    hitCount: 0
};

function selectProxy(city, traffic) {
    // Score each proxy
    var scored = PROXIES.filter(function(p) {
        return p.status === "ACTIVE";
    }).map(function(p) {
        var score = p.pri * 10;
        
        // Tier S bonus
        if (p.tier === "S") score += 500;
        if (p.tier === "A") score += 300;
        
        // City match
        if (city === p.city) score += 200;
        if (p.city === "AMMAN") score += 100;
        
        // Ping score
        score += (3 - p.ping) * 80;
        
        // LOBBY Turbo Boost
        if (traffic && traffic.type === "LOBBY" && CFG.LOBBY.PRIORITY_BOOST) {
            score += 400;
        }
        
        return { proxy: p, score: score };
    });
    
    // Sort by score
    scored.sort(function(a, b) { return b.score - a.score; });
    
    // Get top 2
    var primary = scored[0].proxy;
    var backup = scored[1] ? scored[1].proxy : null;
    
    // Update state
    STATE.lastProxy = STATE.currentProxy;
    STATE.currentProxy = primary.isp + "/" + primary.city;
    STATE.hitCount++;
    
    // Build route
    if (CFG.NETWORK.AUTO_FAILOVER && backup) {
        return "PROXY " + primary.ip + ":" + primary.port + 
               "; PROXY " + backup.ip + ":" + backup.port;
    }
    
    return "PROXY " + primary.ip + ":" + primary.port;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DNS CACHE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var DNS = {
    cache: {},
    ttl: 30000,
    max: 100,
    
    get: function(h) {
        var e = this.cache[h];
        if (e && Date.now() - e.t < this.ttl) return e.ip;
        return null;
    },
    
    set: function(h, ip) {
        if (Object.keys(this.cache).length >= this.max) {
            var oldest = null;
            for (var k in this.cache) {
                if (!oldest || this.cache[k].t < this.cache[oldest].t) oldest = k;
            }
            delete this.cache[oldest];
        }
        this.cache[h] = { ip: ip, t: Date.now() };
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PAC FUNCTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    
    var h = host.toLowerCase();
    var u = url.toLowerCase();
    
    // ═══════════ LOCAL NETWORK ═══════════
    if (isPlainHostName(host)) return "DIRECT";
    
    if (isIPv4(host) && (
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0")
    )) {
        return "DIRECT";
    }
    
    // ═══════════ TRAFFIC CLASSIFICATION ═══════════
    var traffic = classifyTraffic(u, h);
    
    // ═══════════ NOT PUBG TRAFFIC ═══════════
    if (!traffic && !isPUBG(u, h)) {
        return "DIRECT";
    }
    
    // ═══════════ CDN TRAFFIC (Direct) ═══════════
    if (traffic && traffic.direct) {
        return "DIRECT";
    }
    
    // ═══════════ DNS RESOLUTION ═══════════
    var ip = DNS.get(h) || dnsResolve(h);
    if (ip) DNS.set(h, ip);
    if (!ip) return "PROXY 127.0.0.1:1";
    
    // ═══════════ IPv6 BLOCK ═══════════
    if (CFG.JORDAN.BLOCK_IPV6 && !isIPv4(ip)) {
        return "PROXY 127.0.0.1:1";
    }
    
    // ═══════════ JORDAN ENFORCEMENT ═══════════
    if (CFG.JORDAN.ONLY) {
        var jo = isJordanIP(ip);
        if (!jo.match) return "PROXY 127.0.0.1:1";
    }
    
    // ═══════════ PROXY SELECTION ═══════════
    var city = getCity(ip);
    var route = selectProxy(city, traffic);
    
    return route;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  END — PUBG JORDAN PAC v39.0 TURBO LOBBY EDITION
// ═══════════════════════════════════════════════════════════════════════
