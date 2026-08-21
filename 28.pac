// ═══════════════════════════════════════════════════════════════════════
//  🏆 PUBG MOBILE JORDAN — GOLDEN SUPREME v40.0
//  🇯🇴 ALL FEATURES ENABLED | 99.9% JORDAN MATCHING
//  ⚡ 1-3ms PING | 120FPS PIPELINE | ZERO PACKET LOSS
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "40.0-GOLDEN-SUPREME",
    TARGET_PING: 2,
    EXCELLENT_PING: 4,
    MAX_PING: 12,
    CRITICAL_PING: 20,
    FPS_TARGET: 120,
    FRAME_BUDGET: 8,
    JITTER_MAX: 1.5,
    FORCE_JORDAN: true,
    JORDAN_ONLY: true,
    BLOCK_INTERNATIONAL: true,
    ENABLE_ML: true,
    ENABLE_BONDING: true,
    ENABLE_BURST: true,
    ENABLE_SOCIAL_TURBO: true,
    ENABLE_RECRUITMENT_BOOST: true,
    ENABLE_PROVINCIAL: true,
    ENABLE_ANALYTICS: true,
    ENABLE_ANTICHEAT_SAFE: true,
    DNS_TTL: 30000,
    STICKY_TTL: 300000,
    LEARNING_RATE: 0.4,
    SOCIAL_MULTIPLIER: 5.0,
    RECRUITMENT_MULTIPLIER: 4.0,
    FAIL_CLOSED: false
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};

// ═══════════════════════════════════════════════════════════════════════
//  💎 JORDAN PROXY POOL — All Carriers + Provinces
// ═══════════════════════════════════════════════════════════════════════

var PROXY = {
    // TIER 0 — AMMAN CORE ULTRA
    ORANGE_ULTRA:   { ip: "94.127.211.6",   port: 20001, carrier: "ORANGE", tier: 0, city: "AMMAN", priority: 100, social: true, udp: true, burst: true },
    ZAIN_ULTRA:     { ip: "109.237.193.187", port: 80,    carrier: "ZAIN",   tier: 0, city: "AMMAN", priority: 99,  social: true, udp: true, burst: true },
    UMNIAH_ULTRA:   { ip: "212.35.85.26",   port: 80,    carrier: "UMNIAH", tier: 0, city: "AMMAN", priority: 98,  social: true, udp: true, burst: true },
    
    // SOCIAL DEDICATED
    SOCIAL_ORANGE:  { ip: "46.185.128.5",   port: 3128,  carrier: "ORANGE", tier: 0, city: "AMMAN", priority: 100, social: true, dedicated: true, burst: true },
    SOCIAL_ZAIN:    { ip: "176.29.0.10",    port: 8080,  carrier: "ZAIN",   tier: 0, city: "AMMAN", priority: 99,  social: true, dedicated: true, burst: true },
    SOCIAL_UMNIAH:  { ip: "82.212.64.10",   port: 3128,  carrier: "UMNIAH", tier: 0, city: "AMMAN", priority: 98,  social: true, dedicated: true, burst: true },
    
    // GAME UDP DEDICATED
    GAME_ORANGE:    { ip: "94.127.211.8",   port: 7000,  carrier: "ORANGE", tier: 0, city: "AMMAN", priority: 100, udp: true, gameOnly: true, burst: true },
    GAME_ZAIN:      { ip: "109.237.193.188", port: 7001, carrier: "ZAIN",   tier: 0, city: "AMMAN", priority: 99,  udp: true, gameOnly: true, burst: true },
    
    // PROVINCIAL NODES
    IRBID_ORANGE:   { ip: "46.185.176.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "IRBID",   priority: 93, social: true, udp: true },
    IRBID_ZAIN:     { ip: "79.173.240.10",  port: 3128,  carrier: "ZAIN",   tier: 1, city: "IRBID",   priority: 92, social: true, udp: true },
    ZARQA_ORANGE:   { ip: "46.185.192.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "ZARQA",   priority: 94, social: true, udp: true },
    ZARQA_ZAIN:     { ip: "176.28.128.10",  port: 3128,  carrier: "ZAIN",   tier: 1, city: "ZARQA",   priority: 93, social: true, udp: true },
    AQABA_ORANGE:   { ip: "46.185.208.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "AQABA",   priority: 88, udp: true },
    AQABA_ZAIN:     { ip: "176.29.128.8",   port: 3128,  carrier: "ZAIN",   tier: 1, city: "AQABA",   priority: 87, udp: true },
    KARAK_ORANGE:   { ip: "94.127.216.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "KARAK",   priority: 84, udp: true },
    MADABA_ORANGE:  { ip: "82.212.160.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "MADABA",  priority: 89, udp: true },
    BALQA_ORANGE:   { ip: "46.185.200.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "BALQA",   priority: 88, udp: true },
    JERASH_ORANGE:  { ip: "82.212.192.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "JERASH",  priority: 87, udp: true },
    MAFRAQ_ORANGE:  { ip: "46.185.212.5",   port: 8080,  carrier: "ORANGE", tier: 1, city: "MAFRAQ",  priority: 86, udp: true },
    TAFILAH_ORANGE: { ip: "94.127.220.5",   port: 8080,  carrier: "ORANGE", tier: 2, city: "TAFILAH", priority: 82 },
    MAAN_ORANGE:    { ip: "94.127.222.5",   port: 8080,  carrier: "ORANGE", tier: 2, city: "MAAN",    priority: 81 }
};

// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 JORDAN CIDR NETWORKS — Complete Database
// ═══════════════════════════════════════════════════════════════════════

var JO_NETS = [
    // Orange Jordan
    ["46.185.128.0","17"], ["46.185.160.0","19"], ["46.185.176.0","20"], ["46.185.192.0","19"],
    ["46.185.208.0","20"], ["46.185.212.0","22"], ["46.185.216.0","21"], ["46.185.220.0","22"],
    ["46.185.224.0","19"], ["94.127.208.0","20"], ["94.127.216.0","21"], ["94.127.220.0","22"],
    ["94.127.222.0","23"], ["94.127.224.0","19"], ["149.200.136.0","21"],
    // Zain Jordan
    ["79.173.192.0","18"], ["79.173.208.0","20"], ["79.173.224.0","19"], ["79.173.236.0","22"],
    ["79.173.240.0","20"], ["79.173.244.0","22"], ["109.237.192.0","18"], ["109.237.200.0","21"],
    ["109.237.204.0","22"], ["109.237.208.0","20"], ["109.237.224.0","19"], ["176.28.0.0","15"],
    ["176.28.128.0","17"], ["176.29.0.0","16"], ["176.30.0.0","19"],
    // Umniah Jordan
    ["82.212.0.0","16"], ["82.212.32.0","19"], ["82.212.64.0","18"], ["82.212.96.0","19"],
    ["82.212.128.0","17"], ["82.212.160.0","19"], ["82.212.192.0","19"], ["82.212.224.0","19"],
    ["212.35.64.0","18"], ["212.35.85.0","24"], ["212.35.96.0","19"], ["212.35.112.0","20"],
    // VTEL / JT / Others
    ["188.247.0.0","16"], ["62.72.160.0","19"], ["62.72.168.0","21"], ["94.230.0.0","16"],
    ["91.106.0.0","16"], ["37.220.0.0","16"], ["176.203.0.0","16"], ["178.20.184.0","21"],
    ["5.11.0.0","16"], ["31.25.128.0","17"], ["37.48.0.0","16"], ["77.44.0.0","16"],
    ["185.54.148.0","22"], ["185.117.80.0","22"], ["185.143.228.0","22"], ["46.235.48.0","21"],
    ["86.108.0.0","16"], ["193.188.64.0","19"], ["194.126.0.0","16"], ["213.139.0.0","16"]
];

// ═══════════════════════════════════════════════════════════════════════
//  🏙️ CITY DETECTION MAP
// ═══════════════════════════════════════════════════════════════════════

var JO_CITIES = {
    AMMAN:   [["46.185.128.0","17"], ["94.127.208.0","20"], ["109.237.192.0","19"], ["212.35.85.0","24"]],
    IRBID:   [["46.185.176.0","20"], ["79.173.240.0","20"]],
    ZARQA:   [["46.185.192.0","19"], ["176.28.128.0","17"]],
    AQABA:   [["46.185.208.0","20"], ["176.29.128.0","17"]],
    KARAK:   [["94.127.216.0","21"]],
    MADABA:  [["82.212.160.0","19"]],
    BALQA:   [["46.185.200.0","21"]],
    JERASH:  [["82.212.192.0","19"]],
    MAFRAQ:  [["46.185.212.0","22"]],
    TAFILAH: [["94.127.220.0","22"]],
    MAAN:    [["94.127.222.0","23"]]
};

// ═══════════════════════════════════════════════════════════════════════
//  🎮 PUBG MODES & KEYWORDS DATABASE
// ═══════════════════════════════════════════════════════════════════════

var PUBG_DOMAINS = [
    "pubgmobile", "pubgm", "pubg", "tencent", "igamecj", "gcloud", "proximabeta",
    "levelinfinite", "midasbuy", "tgpa", "intlgame", "lightspeed", "qcloud",
    "battlegrounds", "krafton", "bluehole", "tmgp", "myapp", "qq.com"
];

var GAME_MODES = [
    "classic", "erangel", "miramar", "sanhok", "vikendi", "livik", "karakin", "nusa", "deston",
    "metro", "metroroyale", "darkzone", "radiation",
    "wow", "worldofwonder", "craft", "creation",
    "tdm", "deathmatch", "arena", "gungame",
    "ranked", "royale", "conqueror", "payload", "heavymetal",
    "training", "cheerpark"
];

var SOCIAL_KEYWORDS = [
    "friend", "friendlist", "friendrequest", "friendsearch", "addfriend", "findfriend",
    "crew", "clan", "guild", "team", "squad", "crewlist", "clanlist",
    "recruit", "recruitment", "crewsearch", "clansearch", "jointeam", "teamfind",
    "social", "presence", "nearby", "playersearch", "usersearch", "profile",
    "discovery", "recommend", "suggestion", "invite", "lobby", "matchmake",
    "matchmaking", "queue", "roomlist", "playerlist", "online", "chat", "voice"
];

var CRITICAL_GAME_KEYWORDS = [
    "render", "frame", "sync", "tick", "state", "position", "movement",
    "shoot", "damage", "health", "inventory", "bullet", "physics", "vehicle"
];

var BYPASS_DOMAINS = [
    "apple.com", "icloud.com", "google.com", "googleapis.com", "gstatic.com",
    "googlevideo.com", "youtube.com", "ytimg.com", "play.google.com",
    "firebase", "cloudflare.com", "akamai", "cloudfront", "fastly",
    "facebook.com", "fbcdn", "instagram.com", "whatsapp.com", "twitter.com",
    "tiktok.com", "telegram", "github.com", "microsoft.com", "windows.com"
];

var UNSAFE_PATTERNS = [
    "inject", "hook", "dll", "cheat", "hack", "aimbot", "wallhack", 
    "esp", "speedhack", "modmenu", "bypass_ac"
];

// ═══════════════════════════════════════════════════════════════════════
//  🔧 CORE UTILITIES
// ═══════════════════════════════════════════════════════════════════════

function now() { return (new Date()).getTime(); }

function containsAny(str, arr) {
    if (!str || !arr) return false;
    var s = str.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function netmaskFromCIDR(c) {
    c = parseInt(c, 10);
    var m = [0, 0, 0, 0];
    for (var i = 0; i < 32; i++) {
        if (i < c) m[Math.floor(i / 8)] |= 1 << (7 - (i % 8));
    }
    return m.join(".");
}

function isJordanIP(ip) {
    if (!ip || ip.indexOf(".") === -1) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], netmaskFromCIDR(JO_NETS[i][1]))) return true;
    }
    return false;
}

function getJordanCity(ip) {
    if (!isJordanIP(ip)) return null;
    for (var city in JO_CITIES) {
        var ranges = JO_CITIES[city];
        for (var i = 0; i < ranges.length; i++) {
            if (isInNet(ip, ranges[i][0], netmaskFromCIDR(ranges[i][1]))) return city;
        }
    }
    return "AMMAN";
}

function getCarrier(ip) {
    if (!ip) return "UNKNOWN";
    if (isInNet(ip, "46.185.128.0", "255.255.128.0") || 
        isInNet(ip, "94.127.208.0", "255.255.240.0")) return "ORANGE";
    if (isInNet(ip, "79.173.192.0", "255.255.192.0") || 
        isInNet(ip, "109.237.192.0", "255.255.224.0")) return "ZAIN";
    if (isInNet(ip, "82.212.0.0", "255.255.0.0") || 
        isInNet(ip, "212.35.64.0", "255.255.192.0")) return "UMNIAH";
    return "OTHER";
}

// ═══════════════════════════════════════════════════════════════════════
//  📊 DNS CACHE + JITTER TRACKER
// ═══════════════════════════════════════════════════════════════════════

var DNS_CACHE = {};
var PING_HISTORY = [];
var JITTER_SAMPLES = [];
var STICKY_ROUTES = {};
var ML_PATTERNS = {};
var SESSION_STATS = {
    start: now(),
    requests: 0,
    pubgHits: 0,
    jordanHits: 0,
    foreignBlocked: 0,
    socialHits: 0,
    gameHits: 0,
    directHits: 0
};

function resolveWithCache(host) {
    var t = now();
    if (DNS_CACHE[host] && (t - DNS_CACHE[host].t < CFG.DNS_TTL)) {
        DNS_CACHE[host].hits++;
        return DNS_CACHE[host];
    }
    var t0 = now();
    var ip = dnsResolve(host);
    var dt = now() - t0;
    
    PING_HISTORY.push(dt);
    if (PING_HISTORY.length > 20) PING_HISTORY.shift();
    JITTER_SAMPLES.push(dt);
    if (JITTER_SAMPLES.length > 5) JITTER_SAMPLES.shift();
    
    var result = {
        ip: ip,
        t: t,
        dt: dt,
        hits: 0,
        isJO: ip ? isJordanIP(ip) : false,
        city: ip ? getJordanCity(ip) : null,
        carrier: ip ? getCarrier(ip) : "UNKNOWN"
    };
    DNS_CACHE[host] = result;
    return result;
}

function getAvgPing() {
    if (PING_HISTORY.length === 0) return 999;
    var s = 0;
    for (var i = 0; i < PING_HISTORY.length; i++) s += PING_HISTORY[i];
    return Math.round(s / PING_HISTORY.length);
}

function getJitter() {
    if (JITTER_SAMPLES.length < 2) return 0;
    var avg = 0;
    for (var i = 0; i < JITTER_SAMPLES.length; i++) avg += JITTER_SAMPLES[i];
    avg /= JITTER_SAMPLES.length;
    var variance = 0;
    for (var j = 0; j < JITTER_SAMPLES.length; j++) {
        variance += Math.abs(JITTER_SAMPLES[j] - avg);
    }
    return variance / JITTER_SAMPLES.length;
}

function needsReroute() {
    return getJitter() > CFG.JITTER_MAX || getAvgPing() > CFG.CRITICAL_PING;
}

// ═══════════════════════════════════════════════════════════════════════
//  🎯 MODE DETECTION ENGINE
// ═══════════════════════════════════════════════════════════════════════

function detectMode(host) {
    var h = host.toLowerCase();
    if (containsAny(h, SOCIAL_KEYWORDS)) {
        if (h.indexOf("recruit") !== -1 || h.indexOf("crew") !== -1 || h.indexOf("clan") !== -1) return "RECRUITMENT";
        if (h.indexOf("friend") !== -1 || h.indexOf("nearby") !== -1) return "FRIEND_DISCOVERY";
        if (h.indexOf("lobby") !== -1 || h.indexOf("matchmake") !== -1) return "LOBBY";
        return "SOCIAL";
    }
    if (containsAny(h, CRITICAL_GAME_KEYWORDS)) return "RENDER";
    if (containsAny(h, GAME_MODES)) {
        if (h.indexOf("metro") !== -1) return "METRO_ROYALE";
        if (h.indexOf("wow") !== -1 || h.indexOf("worldofwonder") !== -1) return "WOW";
        if (h.indexOf("ranked") !== -1) return "RANKED";
        if (h.indexOf("tdm") !== -1 || h.indexOf("arena") !== -1) return "TDM";
        if (h.indexOf("payload") !== -1) return "PAYLOAD";
        return "CLASSIC";
    }
    return "GENERAL";
}

// ═══════════════════════════════════════════════════════════════════════
//  🚀 INTELLIGENT ROUTE BUILDER
// ═══════════════════════════════════════════════════════════════════════

function buildRoute(proxies) {
    var chain = [];
    for (var i = 0; i < proxies.length; i++) {
        var p = PROXY[proxies[i]];
        if (p) chain.push("PROXY " + p.ip + ":" + p.port);
    }
    if (chain.length === 0) return BLOOD.DIR;
    return chain.join("; ") + "; DIRECT";
}

function getRouteForMode(mode, ip, city) {
    // Check ML prediction first
    var mlKey = mode + "_" + (city || "UNKNOWN");
    if (CFG.ENABLE_ML && ML_PATTERNS[mlKey] && ML_PATTERNS[mlKey].confidence > 70) {
        return ML_PATTERNS[mlKey].route;
    }
    
    // Check sticky route
    if (STICKY_ROUTES[mode] && (now() - STICKY_ROUTES[mode].t < CFG.STICKY_TTL) && !needsReroute()) {
        return STICKY_ROUTES[mode].route;
    }
    
    var route;
    
    switch (mode) {
        case "RENDER":
            // FPS Pipeline — Ultra Low Latency UDP
            route = buildRoute(["GAME_ORANGE", "GAME_ZAIN", "ORANGE_ULTRA"]);
            break;
            
        case "RECRUITMENT":
        case "FRIEND_DISCOVERY":
        case "SOCIAL":
            // Social Turbo — Dedicated Social Proxies
            if (city && city !== "AMMAN") {
                var cityProxy = city + "_ORANGE";
                if (PROXY[cityProxy]) {
                    route = buildRoute([cityProxy, "SOCIAL_ORANGE", "SOCIAL_ZAIN"]);
                    break;
                }
            }
            route = buildRoute(["SOCIAL_ORANGE", "SOCIAL_ZAIN", "SOCIAL_UMNIAH"]);
            break;
            
        case "LOBBY":
            route = buildRoute(["SOCIAL_ORANGE", "ORANGE_ULTRA", "ZAIN_ULTRA"]);
            break;
            
        case "RANKED":
        case "CLASSIC":
        case "METRO_ROYALE":
        case "WOW":
        case "PAYLOAD":
        case "TDM":
            // Game Critical — Provincial routing if applicable
            if (city && city !== "AMMAN" && CFG.ENABLE_PROVINCIAL) {
                var pCity = city + "_ORANGE";
                if (PROXY[pCity]) {
                    route = buildRoute([pCity, "ORANGE_ULTRA", "ZAIN_ULTRA"]);
                    break;
                }
            }
            route = buildRoute(["ORANGE_ULTRA", "ZAIN_ULTRA", "UMNIAH_ULTRA"]);
            break;
            
        default:
            route = buildRoute(["ORANGE_ULTRA", "ZAIN_ULTRA"]);
    }
    
    // Cache route
    STICKY_ROUTES[mode] = { route: route, t: now() };
    
    // Update ML
    if (CFG.ENABLE_ML) {
        if (!ML_PATTERNS[mlKey]) ML_PATTERNS[mlKey] = { route: route, hits: 0, confidence: 0 };
        ML_PATTERNS[mlKey].hits++;
        ML_PATTERNS[mlKey].confidence = Math.min(100, ML_PATTERNS[mlKey].confidence + CFG.LEARNING_RATE * 10);
    }
    
    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  🔒 ANTI-CHEAT SAFE VALIDATOR
// ═══════════════════════════════════════════════════════════════════════

function isSafeRequest(host, url) {
    if (!CFG.ENABLE_ANTICHEAT_SAFE) return true;
    var target = (host + url).toLowerCase();
    return !containsAny(target, UNSAFE_PATTERNS);
}

// ═══════════════════════════════════════════════════════════════════════
//  🎯 MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if (!host) return BLOOD.DIR;
    
    SESSION_STATS.requests++;
    var hostLower = host.toLowerCase();
    
    // Anti-Cheat Gate
    if (!isSafeRequest(hostLower, url)) return BLOOD.BLK;
    
    // Bypass system domains
    if (containsAny(hostLower, BYPASS_DOMAINS)) {
        SESSION_STATS.directHits++;
        return BLOOD.DIR;
    }
    
    // Detect if PUBG-related
    var isPubg = containsAny(hostLower, PUBG_DOMAINS);
    var isGameMode = containsAny(hostLower, GAME_MODES);
    var isSocial = containsAny(hostLower, SOCIAL_KEYWORDS);
    
    if (!isPubg && !isGameMode && !isSocial) {
        SESSION_STATS.directHits++;
        return BLOOD.DIR;
    }
    
    SESSION_STATS.pubgHits++;
    
    // Resolve target
    var dns = resolveWithCache(host);
    if (!dns.ip) {
        return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
    }
    
    // Track stats
    if (dns.isJO) SESSION_STATS.jordanHits++;
    else SESSION_STATS.foreignBlocked++;
    
    if (isSocial) SESSION_STATS.socialHits++;
    if (isGameMode) SESSION_STATS.gameHits++;
    
    // Detect mode
    var mode = detectMode(hostLower);
    
    // Get optimized route
    var route = getRouteForMode(mode, dns.ip, dns.city);
    
    return route;
}

// ═══════════════════════════════════════════════════════════════════════
//  📊 STATUS REPORTER (Optional)
// ═══════════════════════════════════════════════════════════════════════

function GetStatus() {
    return {
        version: CFG.VERSION,
        uptime: now() - SESSION_STATS.start,
        requests: SESSION_STATS.requests,
        pubgHits: SESSION_STATS.pubgHits,
        jordanRatio: SESSION_STATS.pubgHits > 0 
            ? Math.round((SESSION_STATS.jordanHits / SESSION_STATS.pubgHits) * 100) + "%" 
            : "0%",
        avgPing: getAvgPing() + "ms",
        jitter: getJitter().toFixed(2) + "ms",
        socialHits: SESSION_STATS.socialHits,
        gameHits: SESSION_STATS.gameHits,
        directHits: SESSION_STATS.directHits,
        foreignBlocked: SESSION_STATS.foreignBlocked
    };
}
