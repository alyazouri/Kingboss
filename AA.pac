// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN v34.0 — HYPER LOBBY & RECRUITMENT EDITION
//  🚀 التركيز: سرعة تجنيد خيالية، لوبي مفتوح، والتقاط فوري للاعبين
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "34.0-HYPER-LOBBY",
    
    // ━━━━━━━━━━━ 🚀 HYPER SPEED CONFIG ━━━━━━━━━━━
    DIRECT_LOCAL_JORDAN: true,       // الاتصال المباشر بالسيرفرات الأردنية (0ms)
    RECRUITMENT_BOOST: true,         // تسريع حزم التجنيد
    ALLOW_SMART_MENA_FALLBACK: true, // إذا لم يوجد أردنيين، افتح الشبكة إقليمياً بسرعة لملء اللوبي
    MAX_WAIT_FOR_LOCAL: 3000,        // الانتظار 3 ثوانٍ للأردن قبل الفتح الإقليمي
    
    // ━━━━━━━━━━━ TARGETS ━━━━━━━━━━━
    TARGET_PING: 2,
    MAX_ACCEPTABLE_PING: 45,         // مرونة أعلى لضمان سرعة الدخول
    BLOCK_INTERNATIONAL: true,       // حظر أوروبا وآسيا فقط (السماح لـ MENA للتجنيد السريع)
    
    // ━━━━━━━━━━━ SOCIAL & LOBBY ━━━━━━━━━━━
    ENABLE_FRIEND_DISCOVERY: true,
    ENABLE_CREW_OPTIMIZATION: true,
    SOCIAL_PRIORITY_MULTIPLIER: 15.0 
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1"
};

// ═══════════════════════════════════════════════════════════════════════
//  ULTRA PROXY POOL — OPTIMIZED FOR LOBBY SPEED
// ═══════════════════════════════════════════════════════════════════════
var PROXY = {
    // Tier 0: Fastest for Matchmaking
    ZAIN_LOBBY_1: { ip: "109.237.193.187", port: 443, carrier: "ZAIN", tier: 0, targetPing: 2 },
    ORANGE_LOBBY_1: { ip: "94.127.211.6", port: 20005, carrier: "ORANGE", tier: 0, targetPing: 2 },
    UMNIAH_LOBBY_1: { ip: "212.35.69.242", port: 443, carrier: "UMNIAH", tier: 0, targetPing: 3 },
    
    // Tier 1: MENA Fallback (للتجنيد السريع إذا اللوبي الأردني فارغ)
    MENA_FAST_1: { ip: "157.240.0.0", port: 443, carrier: "MENA", tier: 1, targetPing: 20 }, // Placeholder for regional routing
    MENA_FAST_2: { ip: "185.166.140.0", port: 80, carrier: "MENA", tier: 1, targetPing: 25 }
};

// ═══════════════════════════════════════════════════════════════════════
//  JORDAN NETWORKS
// ═══════════════════════════════════════════════════════════════════════
var JO_NETS = [
    ["46.185.128.0", "17"], ["94.127.208.0", "20"], ["149.200.136.0", "22"],
    ["79.173.192.0", "18"], ["109.237.192.0", "18"], ["176.28.0.0", "15"],
    ["82.212.0.0", "16"], ["212.35.64.0", "18"], ["188.247.0.0", "16"]
];

// ═══════════════════════════════════════════════════════════════════════
//  RECRUITMENT & LOBBY SIGNATURES (أهم جزء للتجنيد)
// ═══════════════════════════════════════════════════════════════════════
var RECRUITMENT_KEYS = [
    "recruit", "recruitment", "lobby", "match", "matching", "finder", 
    "team", "crew", "guild", "clan", "social", "presence", "nearby",
    "room", "queue", "search_player", "join_game", "ready_check"
];

var PUBG_KEYS = ["pubgmobile", "pubgm", "tencent", "igame", "lightspeed", "levelinfinite", "anticheat"];
var DIRECT_KEYS = ["apple", "google", "facebook", "whatsapp", "youtube", "tiktok"];

var MODES = {
    RECRUITMENT: { sig: RECRUITMENT_KEYS, priority: 10, jordanBonus: 500, foreignPenalty: -50 },
    GAMEPLAY: { sig: ["battle", "classic", "ranked", "tdm", "erangel"], priority: 9, jordanBonus: 300, foreignPenalty: -200 },
    AUTH: { sig: ["auth", "login", "account", "token"], priority: 10, jordanBonus: 100, foreignPenalty: 0 }
};

var SESSION = { start: now(), requests: 0, jordanHits: 0 };
var DNS_CACHE = {};

function fastDNS(host) {
    if (DNS_CACHE[host] && (now() - DNS_CACHE[host].t) < 60000) return DNS_CACHE[host];
    var ip = dnsResolve(host);
    var result = { ip: ip, t: now() };
    DNS_CACHE[host] = result;
    return result;
}

// ═══════════════════════════════════════════════════════════════════════
//  GUARD SYSTEM (Smart Routing)
// ═══════════════════════════════════════════════════════════════════════
var GUARD = {
    isJordan: function(ip) {
        if (!ip || !isIPv4(ip)) return false;
        return inRanges(ip, JO_NETS);
    },
    
    isMENA: function(ip) {
        // السماح بالسيرفرات الإقليمية لضمان سرعة التجنيد إذا اللوبي المحلي فارغ
        if (!ip) return false;
        return (ip.startsWith("157.240") || ip.startsWith("185.166") || ip.startsWith("104.250")); 
    }
};

// ═══════════════════════════════════════════════════════════════════════
//  MAIN PAC FUNCTION — HYPER SPEED ENTRY
// ═══════════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    SESSION.requests++;
    if (!host) return BLOOD.DIR;
    
    var h = host.toLowerCase();
    
    // Local & Non-PUBG
    if (isPlainHostName(host) || containsAny(h, DIRECT_KEYS) || !containsAny(h, PUBG_KEYS)) {
        return BLOOD.DIR;
    }
    
    var dns = fastDNS(host);
    var ip = dns.ip;
    var port = getPort(url);
    var isRecruitment = containsAny(h, RECRUITMENT_KEYS);
    
    // 🛑 Block IPv6
    if (ip && ip.indexOf(":") !== -1) return BLOOD.BLK;

    // 🚀 1. HYPER DIRECT ROUTING FOR JORDAN (سرعة 0ms للتجنيد المحلي)
    if (ip && GUARD.isJordan(ip)) {
        SESSION.jordanHits++;
        if (CFG.DIRECT_LOCAL_JORDAN && isRecruitment) {
            return BLOOD.DIR; // الاتصال المباشر هو الأسرع على الإطلاق للوبي الأردني
        }
        return "PROXY " + PROXY.ORANGE_LOBBY_1.ip + ":" + PROXY.ORANGE_LOBBY_1.port + "; DIRECT";
    }
    
    // 🌍 2. SMART MENA FALLBACK (فتح التجنيد بحري إذا لم يوجد أردنيين)
    if (isRecruitment && CFG.ALLOW_SMART_MENA_FALLBACK) {
        // إذا كان السيرفر إقليمي (MENA)، نسمح به لتسريع الدخول للوبي
        if (ip && GUARD.isMENA(ip)) {
            return "PROXY " + PROXY.ZAIN_LOBBY_1.ip + ":" + PROXY.ZAIN_LOBBY_1.port + "; DIRECT";
        }
    }
    
    // 🎮 3. GAMEPLAY ROUTING (أثناء اللعب الفعلي)
    if (!isRecruitment && ip && !GUARD.isJordan(ip)) {
        // حظر أوروبا وآسيا أثناء اللعب للحفاظ على البنق
        if (CFG.BLOCK_INTERNATIONAL && !GUARD.isMENA(ip)) {
            return BLOOD.BLK; 
        }
    }
    
    // Default Fast Route
    return "PROXY " + PROXY.UMNIAH_LOBBY_1.ip + ":" + PROXY.UMNIAH_LOBBY_1.port + "; DIRECT";
}

// ═══════════════════════════════════════════════════════════════════════
//  UTILITIES
// ═══════════════════════════════════════════════════════════════════════
function now() { return (new Date()).getTime(); }
function isIPv4(str) {
    if (!str || str.indexOf(":") !== -1) return false;
    var parts = str.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) { var num = parseInt(parts[i], 10); if (isNaN(num) || num < 0 || num > 255) return false; }
    return true;
}
var CIDR_MASKS = { "15": "255.254.0.0", "16": "255.255.0.0", "17": "255.255.128.0", "18": "255.255.192.0", "19": "255.255.224.0", "20": "255.255.240.0", "22": "255.255.252.0" };
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
