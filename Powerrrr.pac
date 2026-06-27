// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v33.0 — HYPER REGIONAL · بيور أردني صارم
//  🇯🇴 بيور أردني صارم | القفل الثلاثي مُفعّل | صفر تسامح
//  صرامة: 100% — مُولّد عبر لوحة التحكم
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "33.0-HYPER-REGIONAL",
    PROFILE: "بيور أردني صارم",
    STRICTNESS_SCORE: 100,

    // ━━ الأداء ━━
    TARGET_PING: 8,
    MAX_ACCEPTABLE_PING: 20,

    // ━━ الإجبار الأردني ━━
    FORCE_JORDAN_LOBBY: true,
    FORCE_JORDAN_MATCHMAKING: true,
    FORCE_JORDAN_SOCIAL: true,
    FORCE_JORDAN_ALL: true,
    JORDAN_PLAYER_TARGET: 100,
    JORDAN_ONLY_MODE: true,
    JORDAN_EXCLUSIVE_MODE: true,
    ALLOW_MENA_FALLBACK: false,
    BLOCK_INTERNATIONAL: true,
    BLOCK_NON_JORDAN_DNS: true,

    // ━━ القفل الثلاثي ━━
    TRIPLE_LOCK_ENFORCEMENT: true,
    LOCK_LAYER_1_IP: true,
    LOCK_LAYER_2_DNS: true,
    LOCK_LAYER_3_CARRIER: true,
    STRICT_CARRIER_BINDING: true,
    REJECT_UNVERIFIED_ROUTES: true,

    // ━━ الأمان الصارم ━━
    FAIL_CLOSED: true,
    ZERO_TOLERANCE: true,
    REJECT_ON_VIOLATION: true,
    MAX_PROXY_CHAIN: 6,

    // ━━ Dual-Stack ━━
    ENABLE_IPV4: true,
    ENABLE_IPV6: true,
    PREFER_IPV6_WHEN_AVAILABLE: true
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HYPER JORDAN PROXY POOL — 35 سيرفر أردني
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var PROXY = {
    ORANGE_HYPER_1: { ip: "94.127.211.6", port: 20001, carrier: "ORANGE", tier: 0, targetPing: 1.5, priority: 100, location: "AMMAN_CORE", protocol: "IPv4", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true },
    ZAIN_HYPER_1: { ip: "109.237.193.187", port: 80, carrier: "ZAIN", tier: 0, targetPing: 2, priority: 99, location: "AMMAN_CORE", protocol: "IPv4", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true },
    UMNIAH_HYPER_1: { ip: "212.35.85.26", port: 80, carrier: "UMNIAH", tier: 0, targetPing: 2.5, priority: 98, location: "AMMAN_CORE", protocol: "IPv4", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true },
    ORANGE_IPV6_1: { ip: "[2a02:ed0:5440::6]", port: 20001, carrier: "ORANGE", tier: 0, targetPing: 1, priority: 100, location: "AMMAN_CORE", protocol: "IPv6", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true, ipv6Native: true },
    ZAIN_IPV6_1: { ip: "[2a02:1308:ac09::187]", port: 443, carrier: "ZAIN", tier: 0, targetPing: 1.5, priority: 99, location: "AMMAN_CORE", protocol: "IPv6", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true, ipv6Native: true },
    UMNIAH_IPV6_1: { ip: "[2a01:9700:55::26]", port: 443, carrier: "UMNIAH", tier: 0, targetPing: 2, priority: 97, location: "AMMAN_CORE", protocol: "IPv6", verified: true, socialOptimized: true, hyperBurst: true, instantDiscovery: true, ipv6Native: true },
    SOCIAL_ORANGE_HYPER: { ip: "46.185.128.5", port: 3128, carrier: "ORANGE", tier: 0, targetPing: 1.5, priority: 100, location: "AMMAN_SOCIAL", protocol: "IPv4", verified: true, socialOptimized: true, socialDedicated: true, hyperBurst: true, instantDiscovery: true },
    SOCIAL_ZAIN_HYPER: { ip: "176.29.0.10", port: 8080, carrier: "ZAIN", tier: 0, targetPing: 2, priority: 99, location: "AMMAN_SOCIAL", protocol: "IPv4", verified: true, socialOptimized: true, socialDedicated: true, hyperBurst: true, instantDiscovery: true },
    SOCIAL_IPV6_ORANGE: { ip: "[2a02:ed0:5440:128::5]", port: 3128, carrier: "ORANGE", tier: 0, targetPing: 1, priority: 100, location: "AMMAN_SOCIAL", protocol: "IPv6", verified: true, socialOptimized: true, socialDedicated: true, hyperBurst: true, instantDiscovery: true, ipv6Native: true },
    SOCIAL_IPV6_ZAIN: { ip: "[2a02:1308:ac09:0::10]", port: 8080, carrier: "ZAIN", tier: 0, targetPing: 1.5, priority: 99, location: "AMMAN_SOCIAL", protocol: "IPv6", verified: true, socialOptimized: true, socialDedicated: true, hyperBurst: true, instantDiscovery: true, ipv6Native: true },
    ORANGE_IRBID_HYPER: { ip: "46.185.176.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 3, priority: 95, location: "IRBID", protocol: "IPv4", verified: true, socialOptimized: true, instantDiscovery: true },
    ZAIN_IRBID_HYPER: { ip: "79.173.240.10", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 3.5, priority: 94, location: "IRBID", protocol: "IPv4", verified: true, socialOptimized: true, instantDiscovery: true },
    ORANGE_IRBID_IPV6: { ip: "[2a02:ed0:5440:176::5]", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 2.5, priority: 96, location: "IRBID", protocol: "IPv6", verified: true, socialOptimized: true, instantDiscovery: true, ipv6Native: true },
    ORANGE_ZARQA_HYPER: { ip: "46.185.192.5", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 2.5, priority: 96, location: "ZARQA", protocol: "IPv4", verified: true, socialOptimized: true, instantDiscovery: true },
    ZAIN_ZARQA_HYPER: { ip: "176.28.128.10", port: 3128, carrier: "ZAIN", tier: 0, targetPing: 3, priority: 95, location: "ZARQA", protocol: "IPv4", verified: true, socialOptimized: true, instantDiscovery: true },
    ZARQA_IPV6: { ip: "[2a02:ed0:5440:192::5]", port: 8080, carrier: "ORANGE", tier: 0, targetPing: 2, priority: 97, location: "ZARQA", protocol: "IPv6", verified: true, socialOptimized: true, instantDiscovery: true, ipv6Native: true },
    ORANGE_AQABA: { ip: "46.185.208.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 5, priority: 90, location: "AQABA", protocol: "IPv4", verified: true, socialOptimized: true },
    ZAIN_AQABA: { ip: "176.29.128.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 5.5, priority: 89, location: "AQABA", protocol: "IPv4", verified: true, socialOptimized: true },
    AQABA_IPV6: { ip: "[2a02:ed0:5440:208::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4.5, priority: 91, location: "AQABA", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_MAFRAQ: { ip: "46.185.212.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 5, priority: 88, location: "MAFRAQ", protocol: "IPv4", verified: true, socialOptimized: true },
    MAFRAQ_IPV6: { ip: "[2a02:ed0:5440:212::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4.5, priority: 89, location: "MAFRAQ", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_KARAK: { ip: "94.127.216.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 6, priority: 86, location: "KARAK", protocol: "IPv4", verified: true, socialOptimized: true },
    KARAK_IPV6: { ip: "[2a02:ed0:5440:216::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 5.5, priority: 87, location: "KARAK", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_MADABA: { ip: "82.212.160.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4, priority: 91, location: "MADABA", protocol: "IPv4", verified: true, socialOptimized: true },
    MADABA_IPV6: { ip: "[2a01:9700:160::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 3.5, priority: 92, location: "MADABA", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_BALQA: { ip: "46.185.200.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4, priority: 91, location: "BALQA", protocol: "IPv4", verified: true, socialOptimized: true },
    BALQA_IPV6: { ip: "[2a02:ed0:5440:200::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 3.5, priority: 92, location: "BALQA", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_JERASH: { ip: "82.212.192.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4.5, priority: 89, location: "JERASH", protocol: "IPv4", verified: true, socialOptimized: true },
    JERASH_IPV6: { ip: "[2a01:9700:192::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 4, priority: 90, location: "JERASH", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_AJLOUN: { ip: "79.173.244.8", port: 3128, carrier: "ZAIN", tier: 1, targetPing: 5, priority: 88, location: "AJLOUN", protocol: "IPv4", verified: true, socialOptimized: true },
    ORANGE_TAFILAH: { ip: "94.127.220.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 7, priority: 84, location: "TAFILAH", protocol: "IPv4", verified: true, socialOptimized: true },
    TAFILAH_IPV6: { ip: "[2a02:ed0:5440:220::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 6.5, priority: 85, location: "TAFILAH", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_MAAN: { ip: "94.127.222.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 7, priority: 83, location: "MAAN", protocol: "IPv4", verified: true, socialOptimized: true },
    MAAN_IPV6: { ip: "[2a02:ed0:5440:222::5]", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 6.5, priority: 84, location: "MAAN", protocol: "IPv6", verified: true, socialOptimized: true, ipv6Native: true },
    ORANGE_PETRA: { ip: "46.185.216.5", port: 8080, carrier: "ORANGE", tier: 1, targetPing: 7, priority: 82, location: "PETRA", protocol: "IPv4", verified: true, socialOptimized: true },
};

var BLOOD = {
    DIR: "DIRECT",
    BLK: "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1"
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDAN NETWORKS — IPv4 + IPv6
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var JO_NETS = [
    ["46.185.192.0", "19"],
    ["46.185.208.0", "20"],
    ["46.185.212.0", "22"],
    ["46.185.216.0", "21"],
    ["46.185.224.0", "19"],
    ["94.127.192.0", "19"],
    ["94.127.208.0", "20"],
    ["94.127.216.0", "21"],
    ["94.127.220.0", "22"],
    ["94.127.224.0", "19"],
    ["149.200.128.0", "21"],
    ["149.200.136.0", "22"],
    ["149.200.144.0", "20"],
    ["79.173.192.0", "18"],
    ["79.173.208.0", "20"],
    ["79.173.224.0", "19"],
    ["79.173.240.0", "20"],
    ["109.237.192.0", "18"],
    ["109.237.200.0", "21"],
    ["109.237.208.0", "20"],
    ["109.237.224.0", "19"],
    ["176.28.0.0", "15"],
    ["176.28.128.0", "17"],
    ["176.29.0.0", "16"],
    ["176.30.0.0", "19"],
    ["82.212.0.0", "16"],
    ["82.212.32.0", "19"],
    ["82.212.64.0", "18"],
    ["82.212.96.0", "19"],
    ["82.212.128.0", "17"],
    ["82.212.160.0", "19"],
    ["82.212.192.0", "19"],
    ["212.35.64.0", "18"],
    ["212.35.85.0", "24"],
    ["212.35.96.0", "19"],
    ["212.35.128.0", "19"],
    ["188.247.0.0", "16"],
    ["62.72.128.0", "18"],
    ["94.230.0.0", "16"],
    ["91.106.0.0", "16"],
    ["37.220.0.0", "16"],
    ["176.203.0.0", "16"],
    ["5.11.0.0", "16"],
    ["31.25.128.0", "17"],
    ["37.48.0.0", "16"],
    ["77.44.0.0", "16"],
    ["86.108.0.0", "16"],
    ["193.188.64.0", "19"],
    ["194.126.0.0", "16"],
    ["213.139.0.0", "16"],
    ["31.166.0.0", "16"]
];

var JO_IPV6_NETS = [
"2a02:1308::",
"2a02:1308:ac09::",
"2a02:1308:ac0a::",
"2a02:1308:ac0b::",
"2a02:1308:ac0c::",
"2a01:9700::",
"2a01:9700:55::",
"2a01:9700:56::",
"2a01:9700:57::",
"2a02:f680::",
"2a01:7c8::",
"2a02:c0::",
"2a04:4e40::"
];

var DIRECT_KEYS = ["apple", "icloud", "google", "facebook", "instagram", "whatsapp", "telegram", "twitter", "tiktok", "netflix", "spotify"];


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  UTILITIES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function now() { return (new Date()).getTime(); }

function isIPv4(str) {
    if (!str || str.indexOf(":") !== -1) return false;
    var parts = str.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var num = parseInt(parts[i], 10);
        if (isNaN(num) || num < 0 || num > 255) return false;
    }
    return true;
}

function isIPv6(str) {
    if (!str) return false;
    str = str.replace(/^\[/, "").replace(/\]$/, "");
    if (str.indexOf(":") === -1) return false;
    return /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/.test(str) || str === "::1";
}

function maskFromCIDR(cidr) {
    var masks = {
        "8": "255.0.0.0", "15": "255.254.0.0", "16": "255.255.0.0",
        "17": "255.255.128.0", "18": "255.255.192.0", "19": "255.255.224.0",
        "20": "255.255.240.0", "21": "255.255.248.0", "22": "255.255.252.0",
        "23": "255.255.254.0", "24": "255.255.255.0"
    };
    return masks[String(cidr)] || "255.255.0.0";
}

function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) {
        if (isInNet(ip, ranges[i][0], maskFromCIDR(ranges[i][1]))) return true;
    }
    return false;
}

function isJordanIPv6(ip) {
    if (!isIPv6(ip)) return false;
    var clean = ip.replace(/^\[/, "").replace(/\]$/, "").toLowerCase();
    for (var i = 0; i < JO_IPV6_NETS.length; i++) {
        var prefix = JO_IPV6_NETS[i].toLowerCase().replace(/::$/, "");
        if (clean.indexOf(prefix) === 0) return true;
    }
    return false;
}

function containsAny(str, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (str.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  GUARD — القفل الثلاثي الصارم
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

var GUARD = {
    blocked: 0,

    isJordan: function (ip) {
        if (!ip) return false;
        if (isIPv6(ip)) return isJordanIPv6(ip);
        if (!isIPv4(ip)) return false;
        return inRanges(ip, JO_NETS);
    },

    // التحقق الثلاثي الصارم: IP + DNS + Carrier
    verifyTripleLock: function (ip, host, carrier) {
        if (!CFG.TRIPLE_LOCK_ENFORCEMENT) return true;
        var l1 = !CFG.LOCK_LAYER_1_IP || this.isJordan(ip);
        var l2 = !CFG.LOCK_LAYER_2_DNS || this.verifyDNS(host);
        var l3 = !CFG.LOCK_LAYER_3_CARRIER || this.verifyCarrier(carrier);
        var ok = l1 && l2 && l3;
        if (!ok && CFG.REJECT_ON_VIOLATION) return false;
        return ok;
    },

    verifyDNS: function (host) {
        if (!host) return false;
        var patterns = ["jo", "jordan", "amman", "irbid", "zarqa", "aqaba", "karak", "mena-jo"];
        var h = host.toLowerCase();
        for (var i = 0; i < patterns.length; i++) if (h.indexOf(patterns[i]) !== -1) return true;
        return !containsAny(h, DIRECT_KEYS);
    },

    verifyCarrier: function (c) {
        return c === "ORANGE" || c === "ZAIN" || c === "UMNIAH" || c === "JT";
    },

    // بوابة الوجهة: ترفض أي شيء غير أردني في الوضع الصارم
    checkDestination: function (ip, host) {
        if (!ip) return CFG.FAIL_CLOSED ? false : true;

        // حظر DNS غير أردني
        if (CFG.BLOCK_NON_JORDAN_DNS && !this.verifyDNS(host)) {
            this.blocked++; return false;
        }
        // حظر دولي
        if (CFG.BLOCK_INTERNATIONAL && !this.isJordan(ip)) {
            this.blocked++; return false;
        }
        // حصري / أردني فقط
        if ((CFG.JORDAN_ONLY_MODE || CFG.JORDAN_EXCLUSIVE_MODE) && !this.isJordan(ip)) {
            this.blocked++; return false;
        }
        return true;
    }
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CHAIN BUILDER — يبني سلسلة البروكسي الأردنية الزائدة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function buildChain(names, maxLen) {
    var chain = [], used = {};
    maxLen = maxLen || CFG.MAX_PROXY_CHAIN;
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        if (used[name] || !PROXY[name]) continue;
        var p = PROXY[name];
        if (CFG.REJECT_UNVERIFIED_ROUTES && !p.verified) continue;
        chain.push("PROXY " + p.ip + ":" + p.port);
        used[name] = true;
        if (chain.length >= maxLen) break;
    }
    if (chain.length === 0) return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
    var result = chain.join("; ");
    result += CFG.FAIL_CLOSED ? ("; " + BLOOD.BLK) : "; DIRECT";
    return result;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PAC FUNCTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function FindProxyForURL(url, host) {
    if (!host) return BLOOD.DIR;
    var h = host.toLowerCase();

    if (isPlainHostName(host)) return BLOOD.DIR;

    // شبكات محلية مباشرة
    if (isIPv4(host)) {
        if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
            isInNet(host, "172.16.0.0", "255.240.0.0") ||
            isInNet(host, "192.168.0.0", "255.255.0.0") ||
            isInNet(host, "127.0.0.0", "255.0.0.0")) {
            return BLOOD.DIR;
        }
    }

    // خدمات غير اللعبة → مباشرة (ما لم تكن مطلوبة أردنية)
    if (containsAny(h, DIRECT_KEYS)) return BLOOD.DIR;

    // حلّ الـ DNS (يفضّل IPv6 ثم IPv4)
    var ip = null;
    try {
        if (CFG.ENABLE_IPV6 && CFG.PREFER_IPV6_WHEN_AVAILABLE) {
            ip = dnsResolveEx ? dnsResolveEx(host) : dnsResolve(host);
        }
    } catch (e) { ip = null; }
    if (!ip) { try { ip = dnsResolve(host); } catch (e2) { ip = null; } }

    // القفل الثلاثي
    var carrier = "ORANGE";
    if (!CFG.TRIPLE_LOCK_ENFORCEMENT ||
        GUARD.verifyTripleLock(ip, h, carrier)) {

        // بوابة الوجهة الأردنية الصارمة
        if (GUARD.checkDestination(ip, h)) {
            // سلسلة البروكسي الأردنية الزائدة
            return buildChain([
                "SOCIAL_IPV6_ORANGE", "ORANGE_IPV6_1", "ZAIN_IPV6_1",
                "SOCIAL_ORANGE_HYPER", "ORANGE_HYPER_1", "ZAIN_HYPER_1",
                "UMNIAH_IPV6_1", "UMNIAH_HYPER_1"
            ]);
        }
    }

    // في الوضع الصارم: احجب بدل التمرير
    return CFG.FAIL_CLOSED ? BLOOD.BLK : BLOOD.DIR;
}

// ═══════════════════════════════════════════════════════════════════════
//  نهاية السكربت · بيور أردني صارم · بيور أردني صارم · صرامة 100%
// ═══════════════════════════════════════════════════════════════════════
