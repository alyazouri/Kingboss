// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v33.0 — "THE IRON DOME" EXTREME EDITION
//  🇯🇴 النسخة المتطرفة: القبة الحديدية الأردنية
//  
//  ⚠️  WARNING: THIS SCRIPT IS RUTHLESS.
//  It will block ALL non-Jordanian servers for matchmaking.
//  Matchmaking may take longer, but guarantees 100% Jordanian lobbies.
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-IRON-DOME",
    MODE: "ABSOLUTE_JORDAN_ENFORCEMENT",
    
    // ━━━━━━━━━━━ 🇯🇴 THE IRON DOME CONFIG ━━━━━━━━━━━
    IRON_DOME_ACTIVE: true,          // يمنع أي اتصال غير أردني في الماتشميكنج
    BLOCK_ALL_FOREIGN_MATCHMAKING: true, // حظر السيرفرات الأجنبية تماماً
    DISABLE_MENA_FALLBACK: true,     // منع التحويل لسيرفرات البحرين أو مصر
    STARVE_FOREIGN_SERVERS: true,    // قطع الاتصال عن نقاط التحويل الإقليمية
    MAX_WAIT_TIME_UNLIMITED: true,   // الانتظار للأبد حتى يتوفر لاعبين أردنيين
    
    // ━━━━━━━━━━━ PERFORMANCE TARGETS ━━━━━━━━━━━
    TARGET_PING: 2,
    MAX_ACCEPTABLE_PING: 20,
    
    // ━━━━━━━━━━━ JORDAN VISIBILITY ━━━━━━━━━━━
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    JORDAN_PLAYER_TARGET: 100, // الهدف 100%
    JORDAN_ONLY_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,
    STRICT_JORDAN_ENFORCEMENT: true,
    
    // ━━━━━━━━━━━ SOCIAL & DISCOVERY ━━━━━━━━━━━
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_CREW_OPTIMIZATION: true,
    ENABLE_PROXIMITY_DETECTION: true,
    SOCIAL_PRIORITY_MULTIPLIER: 10.0, // أولوية قصوى للتواصل الاجتماعي المحلي
    
    // ━━━━━━━━━━━ NETWORK OPTIMIZATION ━━━━━━━━━━━
    DNS_CACHE_TTL: 45000,
    PARALLEL_DNS: true,
    FAIL_CLOSED: true, // إذا فشل الاتصال بالأردن، يُقطع ولا يذهب للخارج
    ZERO_TOLERANCE: true,
    LEAK_PREVENTION: true
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1" // الثقب الأسود للاتصالات الأجنبية
};

// ═══════════════════════════════════════════════════════════════════════
//  ULTRA PROXY POOL — JORDAN ONLY
// ═══════════════════════════════════════════════════════════════════════
var PROXY = {
    ORANGE_DIAMOND_1: { ip: "94.127.211.6", port: 20005, carrier: "ORANGE", tier: 0, targetPing: 2, priority: 100, location: "AMMAN_CORE", socialOptimized: true },
    ZAIN_DIAMOND_1: { ip: "109.237.193.187", port: 443, carrier: "ZAIN", tier: 0, targetPing: 2.5, priority: 99, location: "AMMAN_CORE", socialOptimized: true },
    UMNIAH_DIAMOND_1: { ip: "212.35.69.242", port: 443, carrier: "UMNIAH", tier: 0, targetPing: 3, priority: 98, location: "AMMAN_CORE", socialOptimized: true },
    SOCIAL_ORANGE_ULTRA: { ip: "82.212.77.242", port: 3128, carrier: "ORANGE", tier: 0, targetPing: 2, priority: 100, location: "AMMAN_SOCIAL", socialOptimized: true, socialDedicated: true },
    SOCIAL_ZAIN_ULTRA: { ip: "82.212.109.173", port: 8080, carrier: "ZAIN", tier: 0, targetPing: 2.5, priority: 99, location: "AMMAN_SOCIAL", socialOptimized: true, socialDedicated: true },
    LOBBY_ORANGE_1: { ip: "46.185.130.10", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 3, priority: 99, location: "AMMAN_LOBBY", socialOptimized: true, lobbyDedicated: true },
    LOBBY_ZAIN_1: { ip: "79.173.195.20", port: 443, carrier: "ZAIN", tier: 0, targetPing: 3.5, priority: 98, location: "AMMAN_LOBBY", socialOptimized: true, lobbyDedicated: true }
};

// ═══════════════════════════════════════════════════════════════════════
//  COMPREHENSIVE JORDAN NETWORKS
// ═══════════════════════════════════════════════════════════════════════
var JO_NETS = [
    ["46.185.128.0", "17"], ["46.185.144.0", "20"], ["46.185.160.0", "19"], ["46.185.176.0", "20"],
    ["46.185.192.0", "19"], ["46.185.208.0", "20"], ["46.185.224.0", "19"], ["46.185.240.0", "20"],
    ["94.127.208.0", "20"], ["94.127.224.0", "19"], ["94.127.240.0", "20"], ["149.200.136.0", "22"],
    ["79.173.192.0", "18"], ["79.173.224.0", "19"], ["79.173.240.0", "20"], ["109.237.192.0", "18"],
    ["176.28.0.0", "15"], ["176.29.0.0", "16"], ["176.30.0.0", "19"], ["176.31.0.0", "20"],
    ["82.212.0.0", "16"], ["82.212.64.0", "18"], ["82.212.96.0", "19"], ["82.212.128.0", "17"],
    ["212.35.64.0", "18"], ["212.35.96.0", "19"], ["212.35.112.0", "20"], ["212.35.120.0", "21"],
    ["188.247.0.0", "16"], ["62.72.160.0", "19"], ["94.230.0.0", "16"], ["91.106.0.0", "16"],
    ["37.220.0.0", "16"], ["176.203.0.0", "16"], ["178.20.184.0", "21"], ["185.119.0.0", "18"]
];

var PUBG_KEYS = ["pubgmobile", "pubgm", "pubg", "battlegrounds", "tencent", "igame", "lightspeed", "tmgp", "gcloud", "levelinfinite", "anticheat", "tpns", "midas", "livelink", "match", "lobby", "friend", "crew"];
var DIRECT_KEYS = ["apple", "icloud", "google", "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok", "youtube", "microsoft", "android"];

// ═══════════════════════════════════════════════════════════════════════
//  GAME MODES — MATCHMAKING PRIORITIZATION
// ═══════════════════════════════════════════════════════════════════════
var MODES = {
    MATCHMAKING: { sig: ["match", "matching", "finder", "search_player", "pool", "join_game", "ready_check", "start_match", "region_select", "server_select", "battlestart"], priority: 10, jordanBonus: 500, foreignPenalty: -9999, socialPriority: true },
    LOBBY: { sig: ["lobby", "queue", "matchmake", "waiting_room", "room_list", "serverlist", "worldsvr", "region", "playerlist"], priority: 10, jordanBonus: 500, foreignPenalty: -9999, socialPriority: true },
    FRIEND_DISCOVERY: { sig: ["friend", "friendsearch", "findfriend", "addfriend", "nearby", "discovery"], priority: 10, jordanBonus: 500, foreignPenalty: -9999, socialPriority: true },
    CREW_RECRUITMENT: { sig: ["crew", "recruitment", "recruit", "clan", "guild", "team"], priority: 10, jordanBonus: 500, foreignPenalty: -9999, socialPriority: true },
    RANKED: { sig: ["ranked", "rank", "competitive", "tier", "conqueror", "ace", "master"], priority: 10, jordanBonus: 500, foreignPenalty: -9999 },
    CLASSIC: { sig: ["classic", "battle_royale", "erangel", "miramar", "sanhok", "vikendi", "livik"], priority: 9, jordanBonus: 500, foreignPenalty: -9999 },
    TDM: { sig: ["tdm", "team_death", "deathmatch", "arena"], priority: 9, jordanBonus: 500, foreignPenalty: -9999 },
    AUTH: { sig: ["auth", "login", "account", "passport", "session", "token"], priority: 10, jordanBonus: 200, foreignPenalty: -100 },
    CDN: { sig: ["cdn", "patch", "update", "download", "apk", "obf", "res", "asset"], priority: 2, jordanBonus: 0, foreignPenalty: 0 }
};

var MODE_PRIORITY = ["MATCHMAKING", "LOBBY", "FRIEND_DISCOVERY", "CREW_RECRUITMENT", "RANKED", "CLASSIC", "TDM", "AUTH", "CDN"];

// ═══════════════════════════════════════════════════════════════════════
//  SESSION & DNS TRACKING
// ═══════════════════════════════════════════════════════════════════════
var SESSION = { start: now(), requests: 0, jordanHits: 0, foreignHits: 0, blockedHits: 0 };
var DNS_CACHE = {};

function fastDNS(host) {
    if (DNS_CACHE[host] && (now() - DNS_CACHE[host].t) < 45000) return DNS_CACHE[host];
    var t0 = now();
    var ip = dnsResolve(host);
    var dt = now() - t0;
    var mode = detectMode(host);
    var result = { ip: ip, dt: dt, mode: mode, ok: !!ip, t: now() };
    DNS_CACHE[host] = result;
    return result;
}

// ═══════════════════════════════════════════════════════════════════════
//  🛡️ THE IRON DOME GUARD SYSTEM (النظام المتطرف)
// ═══════════════════════════════════════════════════════════════════════
var GUARD = {
    isJordan: function(ip) {
        if (!ip || !isIPv4(ip)) return false;
        return inRanges(ip, JO_NETS);
    },
    
    checkDestination: function(ip, host, mode) {
        if (!ip) return true;
        
        // 1. Block all IPv6 (Leak Prevention)
        if (ip.indexOf(":") !== -1) return false;
        
        var isGameplayMode = (mode === "MATCHMAKING" || mode === "LOBBY" || mode === "RANKED" || 
                              mode === "CLASSIC" || mode === "TDM" || mode === "CREW_RECRUITMENT" || mode === "FRIEND_DISCOVERY");

        // 2. 🛑 THE IRON DOME: If it's a gameplay/matchmaking mode, it MUST be a Jordanian IP.
        if (isGameplayMode && CFG.IRON_DOME_ACTIVE) {
            if (!this.isJordan(ip)) {
                SESSION.blockedHits++;
                return false; // Force connection drop to 0.0.0.0
            }
        }
        
        // 3. General Jordan Only Mode
        if (this.isJordan(ip)) {
            SESSION.jordanHits++;
            return true;
        }
        
        SESSION.foreignHits++;
        
        if (CFG.JORDAN_ONLY_MODE || CFG.BLOCK_INTERNATIONAL) {
            SESSION.blockedHits++;
            return false;
        }
        
        return true;
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  SUPREME AI SCORING ENGINE (خوارزمية التقييم المتطرفة)
// ═══════════════════════════════════════════════════════════════════════
function calculateScore(ip, host, port, dns, mode) {
    var score = 0;
    var m = MODES[mode];
    
    // Base Score
    if (m) score += m.priority * 5;
    
    // DNS Speed
    if (dns.dt <= 5) score += 50;
    
    // 🇯🇴 THE JORDAN MEGA BONUS & FOREIGN DEATH PENALTY
    if (ip && GUARD.isJordan(ip)) {
        score += 1000; // ضمان اختياره
        if (m && m.jordanBonus) score += m.jordanBonus;
    } else {
        if (m && m.foreignPenalty) score += m.foreignPenalty; // -9999
        else score -= 5000;
    }
    
    return score;
}

// ═══════════════════════════════════════════════════════════════════════
//  ROUTING ENGINE (محرك التوجيه)
// ═══════════════════════════════════════════════════════════════════════
function selectRoute(mode, score, ip, port, host, dns) {
    var m = MODES[mode] || MODES["CLASSIC"];
    
    // 🛡️ IRON DOME CHECK: Block immediately if not Jordanian for critical modes
    if (!GUARD.checkDestination(ip, host, mode)) {
        return BLOOD.BLK; // Drop connection, force game to keep searching locally
    }
    
    // If score is negative (meaning it's a foreign IP that slipped through), block it.
    if (score < 0) {
        return BLOOD.BLK;
    }
    
    // Build Proxy Chain using ONLY Jordanian Proxies
    var proxies = [];
    for (var name in PROXY) {
        var p = PROXY[name];
        if (m.socialPriority && p.socialOptimized) proxies.push("PROXY " + p.ip + ":" + p.port);
        else if (!m.socialPriority) proxies.push("PROXY " + p.ip + ":" + p.port);
    }
    
    if (proxies.length === 0) {
        // Fallback to best available Jordanian proxies
        proxies.push("PROXY 94.127.211.6:20005");
        proxies.push("PROXY 109.237.193.187:443");
    }
    
    // FAIL CLOSED: If proxy fails, DO NOT go direct (to prevent foreign IP leak)
    return proxies.join("; ") + "; " + BLOOD.BLK;
}

// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION
// ═══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    SESSION.requests++;
    if (!host) return BLOOD.DIR;
    
    var h = host.toLowerCase();
    
    // Localhost & Private IPs
    if (isPlainHostName(host) || isInNet(host, "10.0.0.0", "255.0.0.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0") || isInNet(host, "192.168.0.0", "255.255.0.0") || 
        isInNet(host, "127.0.0.0", "255.0.0.0")) return BLOOD.DIR;
    
    // Non-PUBG Traffic
    if (containsAny(h, DIRECT_KEYS) || !containsAny(h, PUBG_KEYS)) return BLOOD.DIR;
    
    // ═══ PUBG Traffic Processing ═══
    var dns = fastDNS(host);
    var ip = dns.ip;
    var mode = dns.mode || detectMode(host);
    var port = getPort(url);
    
    // Calculate Score
    var score = calculateScore(ip, h, port, dns, mode);
    
    // Select Route (Iron Dome Logic Applied Here)
    return selectRoute(mode, score, ip, port, h, dns);
}

// ═══════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════
function now() { return (new Date()).getTime(); }
function isIPv4(str) {
    if (!str || str.indexOf(":") !== -1) return false;
    var parts = str.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) { var num = parseInt(parts[i], 10); if (isNaN(num) || num < 0 || num > 255) return false; }
    return true;
}
var CIDR_MASKS = { "15": "255.254.0.0", "16": "255.255.0.0", "17": "255.255.128.0", "18": "255.255.192.0", "19": "255.255.224.0", "20": "255.255.240.0", "21": "255.255.248.0", "22": "255.255.252.0" };
function maskFromCIDR(cidr) { return CIDR_MASKS[String(cidr)] || "255.255.0.0"; }
function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) { if (isInNet(ip, ranges[i][0], maskFromCIDR(ranges[i][1]))) return true; }
    return false;
}
function containsAny(str, keywords) { for (var i = 0; i < keywords.length; i++) { if (str.indexOf(keywords[i]) !== -1) return true; } return false; }
function getPort(url) {
    var match = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if (match) return parseInt(match[1], 10);
    return (url.indexOf("http://") === 0) ? 80 : 443;
}
function detectMode(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < MODE_PRIORITY.length; i++) {
        var modeName = MODE_PRIORITY[i];
        var mode = MODES[modeName];
        for (var j = 0; j < mode.sig.length; j++) { if (h.indexOf(mode.sig[j]) !== -1) return modeName; }
    }
    return "CLASSIC";
}
