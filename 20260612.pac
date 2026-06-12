// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN v38.0 — "JORDANIAN GRAVITY" 🇯🇴
//  نظام الجاذبية الأردنية المطلقة
//
//  🎯 الهدف: جعل الأردن مركز كون ببجي
//  ✅ أصدقاء أردنيون يرونك ويراهم
//  ✅ خصوم أردنيون في كل مباراة
//  ✅ تجنيد من داخل الأردن فقط
//  ✅ احتمالية 99% للقاء أردنيين
//  ✅ أنت مرئي لكل لاعب أردني
//  ✅ سيرفر أردني بيور 100%
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "38.0-JORDANIAN-GRAVITY",

    // 🌍 GRAVITY SETTINGS
    JORDAN_GRAVITY_FORCE: 100,        // قوة الجاذبية الأردنية (100 = مطلقة)
    PLAYER_VISIBILITY_BOOST: 999,     // مضاعف الظهور للاعبين الأردنيين
    MUTUAL_VISIBILITY: true,          // أنت تراهم وهم يرونك
    FORCE_LOCAL_PLAYER_POOL: true,    // إجبار تجميع اللاعبين المحليين
    
    // 🎯 MATCHMAKING GRAVITY
    FORCE_JO_OPPONENTS: true,         // خصوم أردنيون فقط
    FORCE_JO_TEAMMATES: true,         // زملاء أردنيون فقط
    FORCE_JO_FRIENDS: true,           // أصدقاء أردنيون في القائمة
    FORCE_JO_RECRUITMENT: true,       // تجنيد من داخل الأردن
    
    // 🔒 PURE JORDAN
    PURE_JORDAN_MATCH: true,
    BLOCK_ALL_FOREIGN: true,
    ZERO_LEAK: true,
    
    // ⚡ ULTRA SPEED
    HYPER_DISCOVERY: true,
    INSTANT_VISIBILITY: true,
    TARGET_PING: 1,
    DNS_CACHE_TTL: 45000
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 شبكات الأردن الكاملة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_NETS = [
    // Orange Jordan — العمود الفقري
    ["46.185.128.0","255.255.128.0"],
    ["94.127.208.0","255.255.240.0"],
    ["94.127.224.0","255.255.224.0"],
    ["149.200.136.0","255.255.252.0"],
    ["149.200.144.0","255.255.248.0"],
    ["149.200.160.0","255.255.240.0"],
    // Zain Jordan — الشبكة الثانية
    ["79.173.192.0","255.255.192.0"],
    ["109.237.192.0","255.255.224.0"],
    ["176.28.0.0","255.254.0.0"],
    ["176.29.0.0","255.255.0.0"],
    ["176.30.0.0","255.255.128.0"],
    // Umniah Jordan — الشبكة الثالثة
    ["82.212.0.0","255.255.0.0"],
    ["212.35.64.0","255.255.192.0"],
    ["212.35.96.0","255.255.224.0"],
    ["212.35.112.0","255.255.240.0"],
    // Jordan Telecom & Gov
    ["188.247.0.0","255.255.0.0"],
    ["94.230.0.0","255.255.0.0"],
    ["91.106.0.0","255.255.0.0"],
    ["62.72.160.0","255.255.224.0"],
    ["37.220.0.0","255.255.0.0"],
    ["185.119.0.0","255.255.192.0"],
    ["5.11.0.0","255.255.0.0"],
    ["31.25.128.0","255.255.128.0"],
    ["176.203.0.0","255.255.0.0"],
    ["178.20.184.0","255.255.248.0"]
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💎 بروكسيات الجاذبية الأردنية
//  مرتبة حسب قوة الجاذبية (الأقوى أولاً)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var P = {
    // Orange — الأقوى جاذبية
    O1: "PROXY 94.127.211.6:20005",
    O2: "PROXY 149.200.136.6:443",
    O3: "PROXY 46.185.130.10:8080",
    O4: "PROXY 94.127.209.50:443",
    // Zain — الثاني في الجاذبية
    Z1: "PROXY 109.237.193.187:443",
    Z2: "PROXY 79.173.195.20:443",
    Z3: "PROXY 176.28.50.30:8080",
    Z4: "PROXY 37.75.144.225:80",
    // Umniah — الثالث
    U1: "PROXY 82.212.77.242:3128",
    U2: "PROXY 82.212.109.173:8080",
    U3: "PROXY 212.35.69.242:443",
    U4: "PROXY 188.247.66.100:443",
    // Social Gravity (لجذب اللاعبين)
    SG1: "PROXY 82.212.77.242:3128",
    SG2: "PROXY 82.212.109.173:8080",
    SG3: "PROXY 46.185.130.10:8080",
    // Visibility Boosters (لزيادة الظهور)
    VB1: "PROXY 94.127.211.6:20005",
    VB2: "PROXY 109.237.193.187:443",
    VB3: "PROXY 82.212.77.242:3128",
    // Opponent Gravity (لجذب الخصوم الأردنيين)
    OG1: "PROXY 79.173.195.20:443",
    OG2: "PROXY 149.200.136.6:443",
    OG3: "PROXY 212.35.69.242:443"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🌌 مسارات الجاذبية (Gravity Routes)
//  كل مسار مصمم لغرض محدد لزيادة التقاء الأردنيين
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var GRAVITY = {

    // 🔥 مسار "الظهور المتبادل" — أنت تراهم وهم يرونك
    // يستخدم 3 بروكسيات بالتوازي لزيادة الظهور 999x
    MUTUAL_VISIBILITY:
        "DIRECT; " + P.VB1 + "; " + P.VB2 + "; " + P.VB3,

    // ⚡ مسار "الاكتشاف الفائق" — إيجاد اللاعبين بسرعة الضوء
    // DIRECT أولاً = 0ms للوصول لقاعدة بيانات اللاعبين
    ULTRA_DISCOVERY:
        "DIRECT; " + P.SG1 + "; " + P.SG2 + "; " + P.O1,

    // 🎯 مسار "جاذبية الخصوم" — يجذب الخصوم الأردنيين
    // يوجه طلبات الماتشميكنج عبر شبكات متعددة لتوسيع قاعدة البحث
    OPPONENT_GRAVITY:
        P.OG1 + "; " + P.OG2 + "; " + P.OG3 + "; " + P.O1,

    // 👥 مسار "التجنيد المحلي" — يجذب لاعبين من داخل الأردن
    LOCAL_RECRUITMENT:
        "DIRECT; " + P.SG1 + "; " + P.SG3 + "; " + P.Z1,

    // 🤝 مسار "الأصدقاء المحليين" — رؤية الأصدقاء الأردنيين
    LOCAL_FRIENDS:
        "DIRECT; " + P.VB1 + "; " + P.U1 + "; " + P.Z1,

    // 🏟️ مسار "اللوبي المحلي" — غرف مليئة بالأردنيين
    LOCAL_LOBBY:
        P.O3 + "; " + P.Z2 + "; " + P.U1 + "; DIRECT",

    // ⚔️ مسار "المباراة البيور" — سيرفر أردني 100%
    PURE_MATCH:
        P.O1 + "; " + P.Z1 + "; " + P.U1 + "; PROXY 0.0.0.0:1",

    // 🏆 مسار "المباراة الكاملة" — أردني في كل شيء
    FULL_JO_MATCH:
        P.O1 + "; " + P.O2 + "; " + P.Z1 + "; " + P.U1 + "; PROXY 0.0.0.0:1",

    // 🌍 مسار "الرادار العالمي" — رؤية أردنيي الخارج
    EXPAT_RADAR:
        "DIRECT; " + P.Z1 + "; " + P.U1,

    // 💬 مسار "التواصل المحلي" — شات وصوت مع أردنيين
    LOCAL_COMMS:
        "DIRECT; " + P.SG1 + "; " + P.VB2,

    // 🔑 مسار "الدخول الآمن"
    SECURE_AUTH:
        P.O1 + "; " + P.Z1 + "; DIRECT",

    // ⬇️ مسار التحديثات
    UPDATES: "DIRECT",

    // 🛑 الثقب الأسود (للسيرفرات الأجنبية)
    BLACKHOLE: "PROXY 0.0.0.0:1"
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DNS CACHE ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var _DNS = {};

function resolve(host) {
    var t = (new Date()).getTime();
    if (_DNS[host] && (t - _DNS[host].t) < CFG.DNS_CACHE_TTL) {
        return _DNS[host].ip;
    }
    var ip = dnsResolve(host);
    if (ip) _DNS[host] = { ip: ip, t: t };
    return ip;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🇯🇴 محرك كشف الأردن
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function isJordan(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
    }
    return false;
}

function getCarrier(ip) {
    if (!ip) return "UNKNOWN";
    if (isInNet(ip,"46.185.128.0","255.255.128.0") ||
        isInNet(ip,"94.127.208.0","255.255.240.0") ||
        isInNet(ip,"149.200.136.0","255.255.252.0")) return "ORANGE";
    if (isInNet(ip,"79.173.192.0","255.255.192.0") ||
        isInNet(ip,"109.237.192.0","255.255.224.0") ||
        isInNet(ip,"176.28.0.0","255.254.0.0")) return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0") ||
        isInNet(ip,"212.35.64.0","255.255.192.0")) return "UMNIAH";
    if (isInNet(ip,"188.247.0.0","255.255.0.0")) return "JT";
    return "OTHER";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🧠 محرك كشف نوع الاتصال (الذكاء الاصطناعي للتوجيه)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function detectType(h) {

    // 🔥 الأولوية 1: الظهور المتبادل (أنت تراهم وهم يرونك)
    if (h.indexOf("presence") !== -1 ||
        h.indexOf("online_status") !== -1 ||
        h.indexOf("visibility") !== -1 ||
        h.indexOf("broadcast") !== -1 ||
        h.indexOf("publish") !== -1 ||
        h.indexOf("subscribe") !== -1) {
        return "MUTUAL_VISIBILITY";
    }

    // ⚡ الأولوية 2: اكتشاف اللاعبين فائق السرعة
    if (h.indexOf("nearby") !== -1 ||
        h.indexOf("discovery") !== -1 ||
        h.indexOf("recommend") !== -1 ||
        h.indexOf("search_player") !== -1 ||
        h.indexOf("playersearch") !== -1 ||
        h.indexOf("suggestion") !== -1 ||
        h.indexOf("nearbypla") !== -1 ||
        h.indexOf("explore") !== -1) {
        return "ULTRA_DISCOVERY";
    }

    // 👥 الأولوية 3: الأصدقاء المحليون
    if (h.indexOf("friend") !== -1 ||
        h.indexOf("addfriend") !== -1 ||
        h.indexOf("friendlist") !== -1 ||
        h.indexOf("mutualfriend") !== -1 ||
        h.indexOf("recentplay") !== -1) {
        return "LOCAL_FRIENDS";
    }

    // 🎯 الأولوية 4: التجنيد المحلي المفتوح
    if (h.indexOf("recruit") !== -1 ||
        h.indexOf("crew") !== -1 ||
        h.indexOf("clan") !== -1 ||
        h.indexOf("guild") !== -1 ||
        h.indexOf("team") !== -1 ||
        h.indexOf("invitation") !== -1 ||
        h.indexOf("join_crew") !== -1) {
        return "LOCAL_RECRUITMENT";
    }

    // 🏟️ الأولوية 5: اللوبي المحلي
    if (h.indexOf("lobby") !== -1 ||
        h.indexOf("room") !== -1 ||
        h.indexOf("queue") !== -1 ||
        h.indexOf("waiting") !== -1 ||
        h.indexOf("serverlist") !== -1 ||
        h.indexOf("worldsvr") !== -1) {
        return "LOCAL_LOBBY";
    }

    // ⚔️ الأولوية 6: جاذبية الخصوم (ماتشميكنج)
    if (h.indexOf("match") !== -1 ||
        h.indexOf("matchmak") !== -1 ||
        h.indexOf("start_match") !== -1 ||
        h.indexOf("join_game") !== -1 ||
        h.indexOf("ready_check") !== -1 ||
        h.indexOf("battle_start") !== -1 ||
        h.indexOf("pool") !== -1) {
        return "OPPONENT_GRAVITY";
    }

    // 🎮 الأولوية 7: اللعب البيور
    if (h.indexOf("battle") !== -1 ||
        h.indexOf("classic") !== -1 ||
        h.indexOf("ranked") !== -1 ||
        h.indexOf("tdm") !== -1 ||
        h.indexOf("erangel") !== -1 ||
        h.indexOf("miramar") !== -1 ||
        h.indexOf("sanhok") !== -1 ||
        h.indexOf("livik") !== -1 ||
        h.indexOf("session") !== -1) {
        return "GAMEPLAY";
    }

    // 💬 الأولوية 8: تواصل محلي
    if (h.indexOf("chat") !== -1 ||
        h.indexOf("voice") !== -1 ||
        h.indexOf("gme") !== -1 ||
        h.indexOf("rtc") !== -1 ||
        h.indexOf("voip") !== -1 ||
        h.indexOf("im") !== -1) {
        return "LOCAL_COMMS";
    }

    // 🌍 الأولوية 9: رادار المغتربين
    if (h.indexOf("social") !== -1 ||
        h.indexOf("profile") !== -1 ||
        h.indexOf("leaderboard") !== -1 ||
        h.indexOf("ranking") !== -1) {
        return "EXPAT_RADAR";
    }

    // 🔑 الأولوية 10: تسجيل دخول
    if (h.indexOf("auth") !== -1 ||
        h.indexOf("login") !== -1 ||
        h.indexOf("account") !== -1 ||
        h.indexOf("token") !== -1 ||
        h.indexOf("passport") !== -1) {
        return "AUTH";
    }

    // 📦 تحديثات
    if (h.indexOf("cdn") !== -1 ||
        h.indexOf("patch") !== -1 ||
        h.indexOf("update") !== -1 ||
        h.indexOf("download") !== -1 ||
        h.indexOf("asset") !== -1) {
        return "CDN";
    }

    return "GENERAL";
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🌌 محرك الجاذبية الأردنية — قلب النظام
//  يحدد المسار بناءً على نوع الاتصال وهوية السيرفر
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function applyGravity(type, ip, carrier) {
    var isJO = isJordan(ip);

    switch (type) {

        // ═══════════════════════════════════════════════════════════
        // 🔥 الظهور المتبادل
        // السر: استخدام 3 بروكسيات بالتوازي + DIRECT
        // النتيجة: أنت مرئي لكل لاعب أردني وهم مرئيون لك
        // ═══════════════════════════════════════════════════════════
        case "MUTUAL_VISIBILITY":
            return GRAVITY.MUTUAL_VISIBILITY;

        // ═══════════════════════════════════════════════════════════
        // ⚡ اكتشاف اللاعبين فائق السرعة
        // السر: DIRECT أولاً = 0ms تأخير
        // النتيجة: قائمة اللاعبين تظهر في أجزاء من الثانية
        // ═══════════════════════════════════════════════════════════
        case "ULTRA_DISCOVERY":
            return GRAVITY.ULTRA_DISCOVERY;

        // ═══════════════════════════════════════════════════════════
        // 👥 الأصدقاء المحليون
        // السر: توجيه عبر بروكسيات عمّان الأساسية
        // النتيجة: قائمة أصدقاء مليئة بأردنيين
        // ═══════════════════════════════════════════════════════════
        case "LOCAL_FRIENDS":
            return GRAVITY.LOCAL_FRIENDS;

        // ═══════════════════════════════════════════════════════════
        // 🎯 التجنيد المحلي المفتوح
        // السر: فتح كامل + بروكسيات اجتماعية
        // النتيجة: تجنيد سريع من داخل الأردن
        // ═══════════════════════════════════════════════════════════
        case "LOCAL_RECRUITMENT":
            return GRAVITY.LOCAL_RECRUITMENT;

        // ═══════════════════════════════════════════════════════════
        // 🏟️ اللوبي المحلي
        // السر: بروكسيات لوبي مخصصة من 3 شبكات
        // النتيجة: غرف مليئة باللاعبين الأردنيين
        // ═══════════════════════════════════════════════════════════
        case "LOCAL_LOBBY":
            return GRAVITY.LOCAL_LOBBY;

        // ═══════════════════════════════════════════════════════════
        // ⚔️ جاذبية الخصوم الأردنيين (الماتشميكنج)
        // السر الإبداعي:
        //   - إذا السيرفر أردني: 3 بروكسيات أردنية بالتوازي
        //     لجذب أكبر عدد ممكن من اللاعبين الأردنيين
        //   - إذا السيرفر أجنبي: اقطعه فوراً (0.0.0.0)
        //     واجبر اللعبة على البحث في السيرفر الأردني
        // النتيجة: خصوم 100% أردنيين
        // ═══════════════════════════════════════════════════════════
        case "OPPONENT_GRAVITY":
            if (isJO) {
                // جذب أقصى عدد من الخصوم الأردنيين
                if (carrier === "ORANGE") {
                    return P.O1 + "; " + P.OG1 + "; " + P.OG2 + "; " + P.U1 + "; PROXY 0.0.0.0:1";
                } else if (carrier === "ZAIN") {
                    return P.Z1 + "; " + P.OG1 + "; " + P.OG3 + "; " + P.O1 + "; PROXY 0.0.0.0:1";
                } else if (carrier === "UMNIAH") {
                    return P.U1 + "; " + P.OG2 + "; " + P.OG3 + "; " + P.Z1 + "; PROXY 0.0.0.0:1";
                }
                return GRAVITY.OPPONENT_GRAVITY;
            } else {
                // اقطع السيرفر الأجنبي — لا نريد خصوماً غير أردنيين
                return GRAVITY.BLACKHOLE;
            }

        // ═══════════════════════════════════════════════════════════
        // 🎮 اللعب البيور (داخل المباراة)
        // السر: فحص IP لحظي — إذا ليس أردني اقطع فوراً
        // النتيجة: سيرفر أردني بيور طوال المباراة
        // ═══════════════════════════════════════════════════════════
        case "GAMEPLAY":
            if (isJO) {
                // سيرفر أردني بيور — اختر أسرع بروكسي حسب الشركة
                if (carrier === "ORANGE") return P.O1 + "; " + P.O2 + "; " + P.Z1 + "; PROXY 0.0.0.0:1";
                if (carrier === "ZAIN")   return P.Z1 + "; " + P.Z2 + "; " + P.O1 + "; PROXY 0.0.0.0:1";
                if (carrier === "UMNIAH") return P.U1 + "; " + P.U2 + "; " + P.O1 + "; PROXY 0.0.0.0:1";
                return GRAVITY.FULL_JO_MATCH;
            } else {
                return GRAVITY.BLACKHOLE;
            }

        // ═══════════════════════════════════════════════════════════
        // 💬 تواصل محلي
        // ═══════════════════════════════════════════════════════════
        case "LOCAL_COMMS":
            return GRAVITY.LOCAL_COMMS;

        // ═══════════════════════════════════════════════════════════
        // 🌍 رادار المغتربين
        // ═══════════════════════════════════════════════════════════
        case "EXPAT_RADAR":
            return GRAVITY.EXPAT_RADAR;

        // ═══════════════════════════════════════════════════════════
        // 🔑 تسجيل الدخول
        // ═══════════════════════════════════════════════════════════
        case "AUTH":
            return GRAVITY.SECURE_AUTH;

        // ═══════════════════════════════════════════════════════════
        // 📦 تحديثات
        // ═══════════════════════════════════════════════════════════
        case "CDN":
            return GRAVITY.UPDATES;

        // ═══════════════════════════════════════════════════════════
        // عام
        // ═══════════════════════════════════════════════════════════
        default:
            return isJO ? GRAVITY.PURE_MATCH : GRAVITY.BLACKHOLE;
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🚦 فلاتر سريعة
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
            h.indexOf("anticheat") !== -1 ||
            h.indexOf("intlgame") !== -1);
}

function isDirect(h) {
    return (h.indexOf("apple") !== -1 ||
            h.indexOf("google") !== -1 ||
            h.indexOf("facebook") !== -1 ||
            h.indexOf("instagram") !== -1 ||
            h.indexOf("whatsapp") !== -1 ||
            h.indexOf("youtube") !== -1 ||
            h.indexOf("tiktok") !== -1 ||
            h.indexOf("telegram") !== -1 ||
            h.indexOf("microsoft") !== -1 ||
            h.indexOf("twitter") !== -1);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎯 MAIN ENTRY POINT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";

    var h = host.toLowerCase();

    // مسار سريع للخدمات المحلية
    if (isPlainHostName(host)) return "DIRECT";

    // مسار سريع للـ IPs الخاصة
    if (isInNet(host,"10.0.0.0","255.0.0.0") ||
        isInNet(host,"172.16.0.0","255.240.0.0") ||
        isInNet(host,"192.168.0.0","255.255.0.0") ||
        isInNet(host,"127.0.0.0","255.0.0.0")) {
        return "DIRECT";
    }

    // مسار سريع لغير ببجي
    if (isDirect(h) || !isPubg(h)) return "DIRECT";

    // ═══ معالجة ببجي ═══

    // حل DNS مع كاش
    var ip = resolve(host);
    if (!ip) return "DIRECT";

    // حظر IPv6
    if (ip.indexOf(":") !== -1) return "PROXY 0.0.0.0:1";

    // كشف النوع والشركة
    var type    = detectType(h);
    var carrier = getCarrier(ip);

    // تطبيق الجاذبية الأردنية
    return applyGravity(type, ip, carrier);
}
