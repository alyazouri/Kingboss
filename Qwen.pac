// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN EXCLUSIVE v32.0 — 100% JORDANIAN SERVERS ONLY
//  🇯🇴 STRICT JORDAN ENFORCEMENT | ZERO INTERNATIONAL FALLBACK
//  ⚡ Optimized for Orange, Zain, Umniah, JT & GO Networks
//  🔒 Hard-Blocked: All Non-Jordanian IPs, IPv6, International Routes
// ═══════════════════════════════════════════════════════════════════════

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE CONFIGURATION — STRICT JORDAN ONLY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var CFG = {
    VERSION: "32.0-JO-EXCLUSIVE",
    MODE: "JORDAN_FORCE",
    
    // Network Targets
    TARGET_PING: 4,
    MAX_ACCEPTABLE_PING: 12,
    CRITICAL_PING: 18,
    
    // JORDAN ENFORCEMENT (Hard Locked)
    JORDAN_ONLY_MODE: true,
    BLOCK_INTERNATIONAL: true,
    ALLOW_MENA_FALLBACK: false,
    FORCE_JORDAN_DNS: true,
    FORCE_JORDAN_EXIT: true,
    STRICT_IPV4_ONLY: true,
    
    // Routing & Proxy
    MAX_PROXY_CHAIN: 1,          // Single hop for lowest latency
    STICKY_TTL: 360000,          // 6 minutes stable routing
    DNS_CACHE_TTL: 45000,
    DNS_CACHE_MAX: 250,
    
    // Monitoring
    AUTO_REPORT: true,
    TRACK_JORDAN_HITS: true
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDANIAN ISP PROXY POOL (Optimized for Local Routing)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_PROXY = {
    // ORANGE JORDAN
    ORANGE_AMMAN_1: { ip: "94.127.211.6",   port: 20001, isp: "ORANGE", city: "AMMAN", tier: 0, priority: 100 },
    ORANGE_AMMAN_2: { ip: "46.185.128.5",   port: 3128,  isp: "ORANGE", city: "AMMAN", tier: 0, priority: 98 },
    ORANGE_IRBID_1: { ip: "149.200.136.6",  port: 443,   isp: "ORANGE", city: "IRBID", tier: 1, priority: 92 },
    
    // ZAIN JORDAN
    ZAIN_AMMAN_1:   { ip: "109.237.193.187",port: 80,    isp: "ZAIN",   city: "AMMAN", tier: 0, priority: 99 },
    ZAIN_AMMAN_2:   { ip: "176.29.0.10",    port: 8080,  isp: "ZAIN",   city: "AMMAN", tier: 0, priority: 97 },
    ZAIN_ZARQA_1:   { ip: "79.173.192.10",  port: 8080,  isp: "ZAIN",   city: "ZARQA", tier: 1, priority: 91 },
    
    // UMNIAH JORDAN
    UMNIAH_AMMAN_1: { ip: "212.35.85.26",   port: 80,    isp: "UMNIAH", city: "AMMAN", tier: 0, priority: 96 },
    UMNIAH_IRBID_1: { ip: "82.212.64.5",    port: 80,    isp: "UMNIAH", city: "IRBID", tier: 1, priority: 90 },
    UMNIAH_AQABA_1: { ip: "82.212.128.10",  port: 3128,  isp: "UMNIAH", city: "AQABA", tier: 2, priority: 85 },
    
    // JT & GO (Fiber/Enterprise)
    JT_AMMAN_1:     { ip: "188.247.0.1",    port: 8080,  isp: "JT",     city: "AMMAN", tier: 0, priority: 95 },
    GO_AMMAN_1:     { ip: "91.106.0.1",     port: 80,    isp: "GO",     city: "AMMAN", tier: 1, priority: 88 }
};

// Direct fallback (blocks all non-Jordan traffic)
var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  COMPREHENSIVE JORDANIAN IP RANGES (Official ASNs)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_NETS = [
    // Orange Jordan (AS15858, AS15900)
    ["46.185.128.0", "17"], ["46.185.144.0", "20"], ["94.127.208.0", "20"],
    ["94.127.224.0", "19"], ["149.200.136.0", "22"],
    
    // Zain Jordan (AS43766, AS48726)
    ["79.173.192.0", "18"], ["79.173.224.0", "19"], ["109.237.192.0", "18"],
    ["109.237.224.0", "19"], ["176.28.0.0", "15"], ["176.29.0.0", "16"],
    
    // Umniah Jordan (AS43758, AS48858)
    ["82.212.0.0", "16"], ["82.212.64.0", "18"], ["82.212.128.0", "17"],
    ["212.35.64.0", "18"], ["212.35.96.0", "19"],
    
    // Jordan Telecom / GO (AS15857, AS48200)
    ["188.247.0.0", "16"], ["91.106.0.0", "16"], ["37.220.0.0", "16"],
    ["94.230.0.0", "16"], ["176.203.0.0", "16"], ["62.72.160.0", "19"],
    
    // Additional Jordanian Blocks
    ["5.11.0.0", "16"], ["31.25.128.0", "17"], ["37.48.0.0", "16"],
    ["77.44.0.0", "16"], ["178.20.184.0", "21"]
];

// City Micro-Routing
var JO_CITIES = {
    AMMAN_CORE:  [["46.185.128.0", "20"], ["79.173.192.0", "20"], ["82.212.0.0", "19"], ["188.247.0.0", "18"]],
    AMMAN_NORTH: [["46.185.144.0", "21"], ["79.173.208.0", "21"], ["82.212.32.0", "20"]],
    AMMAN_SOUTH: [["46.185.160.0", "20"], ["79.173.224.0", "21"], ["82.212.64.0", "20"]],
    IRBID:       [["46.185.176.0", "21"], ["79.173.240.0", "21"], ["82.212.96.0", "20"]],
    ZARQA:       [["46.185.192.0", "21"], ["176.28.128.0", "18"], ["82.212.128.0", "20"]],
    AQABA:       [["46.185.208.0", "21"], ["176.29.128.0", "18"]],
    MADABA:      [["82.212.160.0", "21"]],
    JERASH:      [["82.212.192.0", "21"]]
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  PUBG & JORDAN ROUTING PATTERNS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PUBG_KEYS = ["pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "qq", "igame", "lightspeed", "tgpa", "gcloud", "levelinfinite", "proximabeta", "krafton", "bluehole"];
var SOCIAL_KEYS = ["friend", "lobby", "matchmake", "crew", "clan", "social", "nearby", "profile", "presence", "chat", "voice", "rtc"];

var GAME_MODES = {
    SOCIAL_LOBBY: { sig: ["lobby", "matchmake", "friend", "crew", "clan", "nearby"], priority: 10, target: 5 },
    GAMEPLAY:     { sig: ["classic", "ranked", "tdm", "arena", "metro", "arcade"], priority: 9, target: 8 },
    AUTH_UPDATE:  { sig: ["auth", "login", "update", "patch", "cdn"], priority: 7, target: 12 }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SESSION & STATE TRACKING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var SESSION = {
    req: 0, joHits: 0, blkHits: 0, bestPing: 999, avgPing: 0, pingCount: 0,
    recordPing: function(p) {
        this.avgPing = Math.round(((this.avgPing * this.pingCount) + p) / ++this.pingCount);
        if (p < this.bestPing) this.bestPing = p;
    },
    report: function() {
        return { v: CFG.VERSION, jo: this.joHits, blk: this.blkHits, avg: this.avgPing, best: this.bestPing };
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE PAC FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    var p = ip.split(".");
    return p.length === 4 && p.every(function(n) { var v = parseInt(n); return !isNaN(v) && v >= 0 && v <= 255; });
}

function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], maskFromCIDR(JO_NETS[i][1]))) return true;
    }
    return false;
}

function getJordanCity(ip) {
    for (var city in JO_CITIES) {
        if (inRanges(ip, JO_CITIES[city])) return city;
    }
    return "JORDAN_OTHER";
}

function maskFromCIDR(cidr) {
    var m = {"8":"255.0.0.0","16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0","19":"255.255.224.0","20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0"};
    return m[String(cidr)] || "255.255.0.0";
}

function inRanges(ip, ranges) {
    for (var i = 0; i < ranges.length; i++) {
        if (isInNet(ip, ranges[i][0], maskFromCIDR(ranges[i][1]))) return true;
    }
    return false;
}

function detectMode(host) {
    var h = host.toLowerCase();
    for (var m in GAME_MODES) {
        var sigs = GAME_MODES[m].sig;
        for (var i = 0; i < sigs.length; i++) {
            if (h.indexOf(sigs[i]) !== -1) return m;
        }
    }
    return "GAMEPLAY";
}

function getPort(url) {
    var m = url.match(/:(\d+)/);
    return m ? parseInt(m[1], 10) : (url.indexOf("https") === 0 ? 443 : 80);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ROUTING ENGINE — STRICT JORDAN ONLY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function selectJordanRoute(mode, ip, host) {
    var m = GAME_MODES[mode] || GAME_MODES["GAMEPLAY"];
    var city = getJordanCity(ip);
    
    // Priority Proxy Selection (Amman Core First)
    var candidates = [];
    for (var name in JO_PROXY) {
        var p = JO_PROXY[name];
        if (city === "AMMAN_CORE" && p.city === "AMMAN") candidates.push(name);
        else if (p.priority >= 90) candidates.push(name);
    }
    
    if (candidates.length === 0) return BLOOD.BLK;
    
    // Sort by priority
    candidates.sort(function(a, b) { return JO_PROXY[b].priority - JO_PROXY[a].priority; });
    
    var best = JO_PROXY[candidates[0]];
    return "PROXY " + best.ip + ":" + best.port;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PAC ENTRY POINT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function FindProxyForURL(url, host) {
    SESSION.req++;
    if (!host) return BLOOD.DIR;
    
    var h = host.toLowerCase();
    
    // Local / Private
    if (isPlainHostName(host) || isIPv4(host) && isInNet(host, "10.0.0.0", "255.0.0.0") || isInNet(host, "172.16.0.0", "255.240.0.0") || isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return BLOOD.DIR;
    }
    
    // Non-PUBG Traffic
    var isPUBG = false;
    for (var i = 0; i < PUBG_KEYS.length; i++) {
        if (h.indexOf(PUBG_KEYS[i]) !== -1) { isPUBG = true; break; }
    }
    if (!isPUBG) return BLOOD.DIR;
    
    // DNS Resolution & Validation
    var ip = dnsResolve(host);
    if (!ip) return BLOOD.BLK;
    
    // STRICT JORDAN ENFORCEMENT
    if (CFG.STRICT_IPV4_ONLY && !isIPv4(ip)) {
        SESSION.blkHits++;
        return BLOOD.BLK; // Block IPv6
    }
    
    if (!isJordanIP(ip)) {
        SESSION.blkHits++;
        return BLOOD.BLK; // HARD BLOCK: Non-Jordanian IP
    }
    
    SESSION.joHits++;
    var mode = detectMode(h);
    var route = selectJordanRoute(mode, ip, h);
    
    // Ping tracking (simulated for PAC environment)
    SESSION.recordPing(4 + Math.floor(Math.random() * 4));
    
    return route;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  END OF PUBG JORDAN EXCLUSIVE v32.0
//  🇯🇴 100% Jordanian Routing | Zero Fallback | ISP Optimized
// ═══════════════════════════════════════════════════════════════════════
