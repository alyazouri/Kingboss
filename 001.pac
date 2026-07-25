// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 KingBoss v45.0 — TOTAL DOMINATION & VOICE ISOLATION EDITION
//  
//  🌟 WHAT'S NEW IN v45.0:
//  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎤 VOICE ISOLATION: Forces Voice/Chat to use the EXACT Match Proxy.
//  🕸️ EXHAUSTIVE CATCH-ALL: Routes 99.9% of ALL PUBG/Tencent APIs.
//  🧠 SUBNET SCRUB: Rotates Lobby IPs every 15m to break shadowbans.
//  🛑 STUN BLOCKER: Prevents WebRTC/STUN from leaking real IP.
//  🔄 MATCH ROTATOR & 🌐 LOBBY AGGREGATOR: Still active and optimized.
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
//  1. CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════
var CFG = {
    VERSION: "45.0-TOTAL-DOMINATION",
    AMMAN_LOCK: true,
    STRICT_JO_ONLY: true,
    BLOCK_REAL_PING: true,
    BLOCK_DISTANT_SERVERS: true,
    VOICE_ISOLATION: true,     // 🎤 Crucial: Matches Voice IP to Game IP
    SUBNET_SCRUB: true,        // 🧠 Rotates lobby to prevent shadowbans
    
    MATCH_STICKY_TTL: 2400000, // 40 mins
    LOBBY_SCRUB_TTL: 900000    // 15 mins (Forces new lobby subnet)
};

// ═══════════════════════════════════════════════════════════════════════
//  2. YOUR CUSTOM PROXY POOLS (Pure Jordanian)
// ═══════════════════════════════════════════════════════════════════════
var POOLS = {
    // 🌐 LOBBY POOL (9 Proxies - Aggregated)
    LOBBY: [
        { ip: "46.185.163.220", port: 443 },
        { ip: "37.220.117.23", port: 20001 },
        { ip: "37.220.121.71", port: 9050 },
        { ip: "109.237.193.178", port: 443 },
        { ip: "178.238.184.2", port: 9050 },
        { ip: "213.186.174.8", port: 443 },
        { ip: "82.212.125.120", port: 5000 },
        { ip: "188.123.169.22", port: 443 },
        { ip: "91.106.109.26", port: 443 }
    ],
    
    // 🔄 MATCH POOL (5 Proxies - Rotated per match)
    MATCH: [
        { ip: "46.185.138.151", port: 20001 },
        { ip: "109.237.205.83", port: 20001 },
        { ip: "178.238.184.2", port: 20001 },
        { ip: "91.106.109.63", port: 20001 },
        { ip: "188.123.169.5", port: 20001 }
    ]
};

var BLACKHOLE = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
var DIRECT = "DIRECT";

// ═══════════════════════════════════════════════════════════════════════
//  3. EXHAUSTIVE SIGNATURES (Total Domination)
// ═══════════════════════════════════════════════════════════════════════

// 🕸️ EXHAUSTIVE PUBG & TENCENT CATCH-ALL (Routes EVERYTHING)
var KEY_ALL_PUBG = [
    "pubgmobile", "pubgm", "pubg", "tencent", "igame", "intlgame", 
    "lightspeed", "tmgp", "gcloud", "tgpa", "levelinfinite", "proximabeta", 
    "igamecj", "bsgame", "anticheat", "tpns", "midas", "krafton", "bluehole",
    "yoho", "garena", "hotta", "recruit", "crew", "brmm", "frontsvr", 
    "worldsvr", "lobby", "match", "svrconn", "gcs", "gamecl", "arenamm",
    "finder", "pool", "queue", "room", "region", "config", "presence",
    "friend", "clan", "guild", "team", "squad", "social", "nearby", "chat"
];

// 🎤 VOICE & CHAT (Isolated to match proxy)
var KEY_VOICE_CHAT = ["trtc", "rtcvoc", "im", "voice", "rtc", "audio", "mic"];

// 🛡️ ANTI-LEAK & TELEMETRY
var KEY_STEALTH = ["telemetry", "analytics", "log", "report", "trace", "bugly", "beacon", "stun", "webrtc"];

// 🚫 DISTANT & REAL PING
var KEY_DISTANT_BLOCK = ["us-east", "us-west", "eu-central", "eu-west", "eu-north", "ap-southeast", "ap-northeast", "sa-east", "ca-central", "af-south", "relay-us", "relay-eu", "relay-ap", "gcs-us", "gcs-eu", "gcs-ap"];
var KEY_REAL_PING = ["speedtest", "pingtest", "latency-check", "global-ping", "fast.com"];

// ⚡ LOCAL JO & GEO
var KEY_LOCAL_JO = [".jo", "umniah.com", "zain.jo", "orange.jo"];
var KEY_GEO_CHECK = ["ipinfo", "ip-api", "whatismyip", "geoip", "ipify", "myip", "geolocation", "timezone", "ntp"];

// 🌐 TENCENT ECOSYSTEM
var KEY_TENCENT_NET = ["weixin", "wechat", "qq", "myqcloud", "gtimg", "qpic", "tencent-cloud"];

// 📦 SAFE DIRECT (Static assets only)
var KEY_DIRECT = ["cdn", "patch", "update", "download", "apple", "icloud", "google", "facebook", "instagram"];

// ═══════════════════════════════════════════════════════════════════════
//  4. ENGINE UTILITIES & LOGIC
// ═══════════════════════════════════════════════════════════════════════
var _now = 0;
function getTime() { if (!_now) _now = (new Date()).getTime(); return _now; }

// 🌐 LOBBY AGGREGATOR
var _lobbyChain = null;
var _lobbyScrubTime = 0;
function getLobbyChain() {
    // Subnet Scrub: Rebuilds the chain order every 15 mins to shuffle subnets
    if (CFG.SUBNET_SCRUB && _lobbyChain && (getTime() - _lobbyScrubTime > CFG.LOBBY_SCRUB_TTL)) {
        _lobbyChain = null; // Force rebuild with new random order
    }
    if (_lobbyChain) return _lobbyChain;
    
    var chain = "";
    var pool = POOLS.LOBBY.slice(); // Clone array
    
    // Shuffle pool for Subnet Scrub
    for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pool[i]; pool[i] = pool[j]; pool[j] = temp;
    }
    
    for (var k = 0; k < pool.length; k++) {
        chain += "PROXY " + pool[k].ip + ":" + pool[k].port + "; ";
    }
    _lobbyChain = chain + BLACKHOLE;
    _lobbyScrubTime = getTime();
    return _lobbyChain;
}

// 🔄 MATCH ROTATOR (Sticky per match)
var MATCH_STICKY = null;
var MATCH_STICKY_TIME = 0;

function getMatchProxy(forceRefresh) {
    if (forceRefresh || !MATCH_STICKY || (getTime() - MATCH_STICKY_TIME > CFG.MATCH_STICKY_TTL)) {
        var pool = POOLS.MATCH;
        var p = pool[Math.floor(Math.random() * pool.length)];
        MATCH_STICKY = "PROXY " + p.ip + ":" + p.port;
        MATCH_STICKY_TIME = getTime();
    }
    return MATCH_STICKY + "; " + BLACKHOLE;
}

function containsAny(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════════════
//  5. TOTAL DOMINATION ROUTING ENGINE
// ═══════════════════════════════════════════════════════════════════════

function getRoute(host) {
    var h = host.toLowerCase();

    // 1. 🛑 STUN & WEBRTC BLOCKER (Prevents IP leak via voice/browser)
    if (containsAny(h, ["stun", "webrtc", "turn.", "coturn"])) return BLACKHOLE;

    // 2. 🚫 ANTI-DISTANT SHIELD
    if (CFG.BLOCK_DISTANT_SERVERS && containsAny(h, KEY_DISTANT_BLOCK)) return BLACKHOLE;

    // 3. 🚫 BLOCK REAL PING
    if (CFG.BLOCK_REAL_PING && containsAny(h, KEY_REAL_PING)) return BLACKHOLE;

    // 4. 🎤 VOICE & CHAT ISOLATION (CRITICAL: Must match Game IP)
    if (CFG.VOICE_ISOLATION && containsAny(h, KEY_VOICE_CHAT)) {
        return getMatchProxy(false); // Uses the EXACT proxy as the current match
    }

    // 5. 🔄 MATCHMAKING START (Force refresh)
    if (containsAny(h, ["brmm", "arenamm"])) return getMatchProxy(true); 

    // 6. 🔄 MATCHMAKING & IN-GAME (Keep sticky)
    if (containsAny(h, ["match", "finder", "pool", "queue", "room", "gcs", "svrconn", "relay", "gamecl", "udp"])) {
        return getMatchProxy(false);
    }

    // 7. 🕸️ EXHAUSTIVE PUBG CATCH-ALL (Routes EVERYTHING else)
    if (containsAny(h, KEY_ALL_PUBG)) return getLobbyChain();

    // 8. 🌐 TENCENT ECOSYSTEM
    if (containsAny(h, KEY_TENCENT_NET)) return getLobbyChain();

    // 9. ⚡ LOCAL JO & 📍 GEO
    if (containsAny(h, KEY_LOCAL_JO) || (CFG.AMMAN_LOCK && containsAny(h, KEY_GEO_CHECK))) return getLobbyChain();

    // 10. 🛡️ STEALTH & TELEMETRY
    if (containsAny(h, KEY_STEALTH)) return getLobbyChain();

    // 11. STRICT JO-ONLY FALLBACK (If it's not direct, force proxy)
    if (CFG.STRICT_JO_ONLY) return getLobbyChain();
    
    return DIRECT;
}

// ═══════════════════════════════════════════════════════════════════════
//  6. MAIN PAC EXECUTION
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    _now = 0; 
    if (!host) return DIRECT;
    
    var h = host.toLowerCase();
    
    // 1. Local & Private IPs -> Direct
    if (isPlainHostName(host) || 
        isInNet(host, "127.0.0.0", "255.0.0.0") || 
        isInNet(host, "10.0.0.0", "255.0.0.0") || 
        isInNet(host, "192.168.0.0", "255.255.0.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0")) {
        return DIRECT;
    }
    
    // 2. Safe CDN Bypass (Strictly verified)
    if (containsAny(h, KEY_DIRECT) && 
       !containsAny(h, KEY_ALL_PUBG) && 
       !containsAny(h, KEY_TENCENT_NET) && 
       !containsAny(h, KEY_VOICE_CHAT)) {
        return DIRECT;
    }
    
    // 3. Route through Total Domination Engine
    return getRoute(h);
}

// ═══════════════════════════════════════════════════════════════════════
//  END OF KingBoss v45.0 — TOTAL DOMINATION 🇯🇴👑🕸️
// ═══════════════════════════════════════════════════════════════════════
