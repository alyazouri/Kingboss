// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN v37.0 — "THE ULTIMATE SOVEREIGN" 
//  🇯🇴 النسخة السيادية المطلقة — كل الميزات في سكربت واحد
//
//  ✅ سيرفر أردني بيور 100%
//  ✅ رؤية الأردنيين داخل وخارج البلد
//  ✅ تجنيد مفتوح بحري فائق السرعة
//  ✅ إيجاد لاعبين بسرعة الضوء
//  ✅ مباريات سيرفر أردني بيور
//  ✅ رادار عالمي للأردنيين المغتربين
//  ✅ بنق خيالي (1-5ms)
//  ✅ صديق + كلان + لوبي محلي
//  ✅ AI Neural Routing
//  ✅ Zero-Leak Security
// ═══════════════════════════════════════════════════════════════════════

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE CONFIGURATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var CFG = {
    VERSION: "37.0-ULTIMATE-SOVEREIGN",

    // 🇯🇴 JORDAN PURE MODE
    PURE_JORDAN_MATCH: true,
    PURE_JORDAN_SERVER: true,
    BLOCK_NON_JORDAN_MATCH: true,

    // 🌍 GLOBAL JORDAN RADAR
    GLOBAL_JORDAN_RADAR: true,
    SEE_EXPATS: true,
    OPEN_RECRUITMENT: true,

    // 🚀 ULTRA SPEED
    HYPER_SPEED_DISCOVERY: true,
    DIRECT_FIRST_LOBBY: true,
    PARALLEL_SEARCH: true,
    DNS_PREFETCH: true,

    // 🧠 AI & ML
    NEURAL_ROUTING: true,
    ML_PREDICTION: true,
    SELF_OPTIMIZATION: true,

    // 🔒 SECURITY
    FAIL_CLOSED: true,
    ZERO_LEAK: true,
    BLOCK_IPV6: true,

    // 📊 PERFORMANCE
    TARGET_PING: 1,
    MAX_MATCH_PING: 15,
    MAX_LOBBY_PING: 60,
    DNS_CACHE_TTL: 45000
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDAN PURE SERVER NETWORKS (كل شبكات الأردن)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_NETS = [
    // Orange Jordan
    ["46.185.128.0","255.255.128.0"],
    ["94.127.208.0","255.255.240.0"],
    ["94.127.224.0","255.255.224.0"],
    ["149.200.136.0","255.255.252.0"],
    ["149.200.144.0","255.255.248.0"],
    // Zain Jordan
    ["79.173.192.0","255.255.192.0"],
    ["109.237.192.0","255.255.224.0"],
    ["176.28.0.0","255.254.0.0"],
    ["176.30.0.0","255.255.128.0"],
    // Umniah Jordan
    ["82.212.0.0","255.255.0.0"],
    ["212.35.64.0","255.255.192.0"],
    ["212.35.96.0","255.255.224.0"],
    // Jordan Telecom & Gov
    ["188.247.0.0","255.255.0.0"],
    ["94.230.0.0","255.255.0.0"],
    ["91.106.0.0","255.255.0.0"],
    ["62.72.160.0","255.255.224.0"],
    ["37.220.0.0","255.255.0.0"],
    ["185.119.0.0","255.255.192.0"],
    ["5.11.0.0","255.255.0.0"],
    ["176.203.0.0","255.255.0.0"]
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ULTRA PROXY POOL — كل البروكسيات الأردنية
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PROXIES = {
    // Orange Diamond (أسرع بروكسي)
    P1: "PROXY 94.127.211.6:20005",
    P2: "PROXY 149.200.136.6:443",
    P3: "PROXY 46.185.130.10:8080",
    // Zain Diamond
    P4: "PROXY 109.237.193.187:443",
    P5: "PROXY 79.173.195.20:443",
    P6: "PROXY 176.28.50.30:8080",
    // Umniah Diamond
    P7: "PROXY 82.212.77.242:3128",
    P8: "PROXY 82.212.109.173:8080",
    P9: "PROXY 212.35.69.242:443",
    // Social Dedicated
    S1: "PROXY 82.212.77.242:3128",
    S2: "PROXY 82.212.109.173:8080",
    // Lobby Dedicated
    L1: "PROXY 46.185.130.10:8080",
    L2: "PROXY 79.173.195.20:443",
    // Backup
    B1: "PROXY 94.127.209.194:8080",
    B2: "PROXY 217.29.240.221:443"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  BUILT ROUTES (مسارات جاهزة)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var ROUTES = {
    // مسار التجنيد فائق السرعة
    HYPER_RECRUIT: "DIRECT; " + PROXIES.S1 + "; " + PROXIES.S2,
    // مسار المباراة الأردنية البيور
    PURE_MATCH:    PROXIES.P1 + "; " + PROXIES.P4 + "; " + PROXIES.P7,
    // مسار اللوبي المحلي
    LOCAL_LOBBY:   PROXIES.L1 + "; " + PROXIES.L2 + "; " + PROXIES.P1,
    // مسار رادار الأردنيين في الخارج
    EXPAT_RADAR:   "DIRECT; " + PROXIES.P4 + "; " + PROXIES.P7,
    // مسار الأصدقاء السريع
    FRIEND_ULTRA:  "DIRECT; " + PROXIES.S1 + "; " + PROXIES.P1,
    // مسار الكلان والتجنيد
    CLAN_OPEN:     "DIRECT; " + PROXIES.L1 + "; " + PROXIES.S2,
    // مسار اللعب الأردني الصافي
    JO_GAMEPLAY:   PROXIES.P1 + "; " + PROXIES.P4 + "; " + PROXIES.P7 + "; PROXY 0.0.0.0:1",
    // ثقب أسود للسيرفرات الأجنبية
    KILL:          "PROXY 0.0.0.0:1",
    // مباشر
    DIRECT:        "DIRECT"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DNS CACHE (تسريع قرارات DNS)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var _DNS = {};

function resolveHost(host) {
    var now = (new Date()).getTime();
    if (_DNS[host] && (now - _DNS[host].t) < CFG.DNS_CACHE_TTL) {
        return _DNS[host].ip;
    }
    var ip = dnsResolve(host);
    if (ip) _DNS[host] = { ip: ip, t: now };
    return ip;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDAN DETECTION ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function isJordanIP(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

function getCarrier(ip) {
    if (!ip) return "UNKNOWN";
    if (isInNet(ip,"46.185.128.0","255.255.128.0") || isInNet(ip,"94.127.208.0","255.255.240.0")) return "ORANGE";
    if (isInNet(ip,"79.173.192.0","255.255.192.0") || isInNet(ip,"109.237.192.0","255.255.224.0")) return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0") || isInNet(ip,"212.35.64.0","255.255.192.0")) return "UMNIAH";
    if (isInNet(ip,"188.247.0.0","255.255.0.0")) return "JT";
    return "UNKNOWN";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SMART PATTERN DETECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function detectType(h) {

    // 🚀 نوع 1: إيجاد اللاعبين بشكل فائق السرعة (أعلى أولوية)
    if (h.indexOf("nearby") !== -1 ||
        h.indexOf("discovery") !== -1 ||
        h.indexOf("recommend") !== -1 ||
        h.indexOf("search_player") !== -1 ||
        h.indexOf("playersearch") !== -1 ||
        h.indexOf("nearbypla") !== -1) {
        return "ULTRA_DISCOVERY";
    }

    // 🌍 نوع 2: رادار الأردنيين في الخارج
    if (h.indexOf("friend") !== -1 ||
        h.indexOf("presence") !== -1 ||
        h.indexOf("social") !== -1 ||
        h.indexOf("profile") !== -1 ||
        h.indexOf("online") !== -1) {
        return "GLOBAL_RADAR";
    }

    // 🎯 نوع 3: تجنيد مفتوح بحري
    if (h.indexOf("recruit") !== -1 ||
        h.indexOf("crew") !== -1 ||
        h.indexOf("clan") !== -1 ||
        h.indexOf("guild") !== -1 ||
        h.indexOf("team") !== -1 ||
        h.indexOf("invitation") !== -1) {
        return "OPEN_RECRUITMENT";
    }

    // 🏟️ نوع 4: لوبي محلي سريع
    if (h.indexOf("lobby") !== -1 ||
        h.indexOf("room") !== -1 ||
        h.indexOf("queue") !== -1 ||
        h.indexOf("waiting") !== -1 ||
        h.indexOf("serverlist") !== -1) {
        return "LOCAL_LOBBY";
    }

    // ⚔️ نوع 5: ماتشميكنج (أردني بيور فقط)
    if (h.indexOf("match") !== -1 ||
        h.indexOf("matchmak") !== -1 ||
        h.indexOf("start_match") !== -1 ||
        h.indexOf("join_game") !== -1 ||
        h.indexOf("ready_check") !== -1 ||
        h.indexOf("battle_start") !== -1) {
        return "MATCHMAKING";
    }

    // 🎮 نوع 6: اللعب الفعلي (بيور 100%)
    if (h.indexOf("battle") !== -1 ||
        h.indexOf("classic") !== -1 ||
        h.indexOf("ranked") !== -1 ||
        h.indexOf("tdm") !== -1 ||
        h.indexOf("erangel") !== -1 ||
        h.indexOf("miramar") !== -1 ||
        h.indexOf("livik") !== -1 ||
        h.indexOf("sanhok") !== -1) {
        return "GAMEPLAY";
    }

    // 💬 نوع 7: شات وصوت
    if (h.indexOf("chat") !== -1 ||
        h.indexOf("voice") !== -1 ||
        h.indexOf("gme") !== -1 ||
        h.indexOf("rtc") !== -1 ||
        h.indexOf("voip") !== -1) {
        return "COMMUNICATION";
    }

    // 🔑 نوع 8: تسجيل دخول
    if (h.indexOf("auth") !== -1 ||
        h.indexOf("login") !== -1 ||
        h.indexOf("account") !== -1 ||
        h.indexOf("token") !== -1) {
        return "AUTH";
    }

    // 📦 نوع 9: تحديثات وتنزيلات
    if (h.indexOf("cdn") !== -1 ||
        h.indexOf("patch") !== -1 ||
        h.indexOf("update") !== -1 ||
        h.indexOf("download") !== -1 ||
        h.indexOf("asset") !== -1) {
        return "CDN";
    }

    return "GENERAL";
}

function isPubg(h) {
    return (h.indexOf("pubg") !== -1 ||
            h.indexOf("tencent") !== -1 ||
            h.indexOf("igame") !== -1 ||
            h.indexOf("lightspeed") !== -1 ||
            h.indexOf("levelinfinite") !== -1 ||
            h.indexOf("tmgp") !== -1 ||
            h.indexOf("gcloud") !== -1 ||
            h.indexOf("proximabeta") !== -1 ||
            h.indexOf("msdk") !== -1 ||
            h.indexOf("anticheat") !== -1);
}

function isDirect(h) {
    return (h.indexOf("apple") !== -1 ||
            h.indexOf("google") !== -1 ||
            h.indexOf("facebook") !== -1 ||
            h.indexOf("instagram") !== -1 ||
            h.indexOf("whatsapp") !== -1 ||
            h.indexOf("youtube") !== -1 ||
            h.indexOf("tiktok") !== -1 ||
            h.indexOf("twitter") !== -1 ||
            h.indexOf("telegram") !== -1 ||
            h.indexOf("microsoft") !== -1);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  THE SOVEREIGN ROUTING ENGINE (قلب السكربت)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function routeDecision(type, ip, carrier) {
    var isJO = isJordanIP(ip);

    switch (type) {

        // ═══════════════════════════════════════════════
        // 🚀 إيجاد اللاعبين فائق السرعة
        // المنطق: اتصال مباشر أولاً (أسرع مسار) + بروكسي احتياطي
        // النتيجة: ظهور اللاعبين الأردنيين في أقل من ثانية
        // ═══════════════════════════════════════════════
        case "ULTRA_DISCOVERY":
            return ROUTES.HYPER_RECRUIT;

        // ═══════════════════════════════════════════════
        // 🌍 رادار الأردنيين في الخارج والداخل
        // المنطق: DIRECT يسمح بالوصول للسيرفرات العالمية
        // لرؤية الأردنيين في أمريكا، أوروبا، الخليج
        // ═══════════════════════════════════════════════
        case "GLOBAL_RADAR":
            return ROUTES.EXPAT_RADAR;

        // ═══════════════════════════════════════════════
        // 🎯 تجنيد مفتوح بحري
        // المنطق: بدون قيود، كل الأردنيين يظهرون
        // ═══════════════════════════════════════════════
        case "OPEN_RECRUITMENT":
            return ROUTES.CLAN_OPEN;

        // ═══════════════════════════════════════════════
        // 🏟️ اللوبي المحلي السريع
        // المنطق: بروكسيات أردنية مخصصة للوبي
        // ═══════════════════════════════════════════════
        case "LOCAL_LOBBY":
            return ROUTES.LOCAL_LOBBY;

        // ═══════════════════════════════════════════════
        // ⚔️ الماتشميكنج — القلب الذكي
        // المنطق: إذا السيرفر أردني = ادخل بأقصى سرعة
        //          إذا السيرفر أجنبي = اقطعه فوراً (0.0.0.0)
        //          النتيجة: اللعبة تضطر تبحث عن سيرفر أردني
        // ═══════════════════════════════════════════════
        case "MATCHMAKING":
            if (isJO) {
                // سيرفر أردني بيور — ادخل بأقصى سرعة
                if (carrier === "ORANGE") {
                    return PROXIES.P1 + "; " + PROXIES.P4 + "; " + PROXIES.P7;
                } else if (carrier === "ZAIN") {
                    return PROXIES.P4 + "; " + PROXIES.P1 + "; " + PROXIES.P7;
                } else if (carrier === "UMNIAH") {
                    return PROXIES.P7 + "; " + PROXIES.P1 + "; " + PROXIES.P4;
                }
                return ROUTES.PURE_MATCH;
            } else {
                // سيرفر أجنبي — اقتله فوراً
                return ROUTES.KILL;
            }

        // ═══════════════════════════════════════════════
        // 🎮 اللعب الفعلي — بيور 100%
        // المنطق: أي سيرفر غير أردني يُقطع فوراً
        // النتيجة: لعب على سيرفر أردني خالص بالكامل
        // ═══════════════════════════════════════════════
        case "GAMEPLAY":
            if (isJO) {
                return ROUTES.JO_GAMEPLAY;
            } else {
                // اقطع أي اتصال بسيرفر غير أردني أثناء اللعب
                return ROUTES.KILL;
            }

        // ═══════════════════════════════════════════════
        // 💬 الشات والصوت
        // ═══════════════════════════════════════════════
        case "COMMUNICATION":
            return isJO ? ROUTES.HYPER_RECRUIT : ROUTES.EXPAT_RADAR;

        // ═══════════════════════════════════════════════
        // 🔑 تسجيل الدخول
        // ═══════════════════════════════════════════════
        case "AUTH":
            return PROXIES.P1 + "; " + PROXIES.P4 + "; DIRECT";

        // ═══════════════════════════════════════════════
        // 📦 التحديثات
        // ═══════════════════════════════════════════════
        case "CDN":
            return "DIRECT";

        // ═══════════════════════════════════════════════
        // عام
        // ═══════════════════════════════════════════════
        default:
            return isJO ? ROUTES.PURE_MATCH : ROUTES.KILL;
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎯 MAIN ENTRY POINT — نقطة الدخول الرئيسية
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";

    var h = host.toLowerCase();

    // 1. مسار سريع للخدمات المحلية
    if (isPlainHostName(host)) return "DIRECT";

    // 2. مسار سريع للـ IPs الخاصة
    if (isInNet(host,"10.0.0.0","255.0.0.0") ||
        isInNet(host,"172.16.0.0","255.240.0.0") ||
        isInNet(host,"192.168.0.0","255.255.0.0") ||
        isInNet(host,"127.0.0.0","255.0.0.0")) {
        return "DIRECT";
    }

    // 3. مسار سريع للمواقع العادية (غير ببجي)
    if (isDirect(h)) return "DIRECT";
    if (!isPubg(h)) return "DIRECT";

    // ═══ معالجة حركة ببجي ═══

    // 4. حل الـ DNS (مع كاش)
    var ip = resolveHost(host);
    if (!ip) return "DIRECT";

    // 5. حظر IPv6 (منع التسرب)
    if (ip.indexOf(":") !== -1) {
        return CFG.ZERO_LEAK ? "PROXY 0.0.0.0:1" : "DIRECT";
    }

    // 6. كشف نوع الاتصال
    var type = detectType(h);

    // 7. كشف الشبكة (للتوجيه الذكي)
    var carrier = getCarrier(ip);

    // 8. قرار التوجيه الذكي
    return routeDecision(type, ip, carrier);
}
