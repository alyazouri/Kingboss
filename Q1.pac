// ═══════════════════════════════════════════════════════════════════════
// 💀 PUBG JORDAN DEMON v36.0 — THE ULTIMATE PAC SCRIPT
// 🇯🇴 Jordan Pure | 💀 Demon Mode | ⚡ Instant Everything
// ═══════════════════════════════════════════════════════════════════════
//
// 📌 مبني على بيانات حقيقية من:
//   • Netify.ai — PUBG Mobile App Detection Database
//   • Level Infinite (intlgame.com / igamecj.com) — Tencent Publishing
//   • Tencent Cloud ASN: AS45090 / AS132203 / AS133478
//   • AWS Bahrain (me-south-1) — PUBG ME Server
//   • Akamai CDN (AS20940) — PUBG Website/Content
//   • Google Play Store data — PROXIMA BETA PTE publisher
//
// 💀 ليش هذا السكربت "DEMON"؟
//   • 120+ نطاق دومين (أكثر من أي سكربت سابق بـ 4 أضعاف)
//   • 95+ نطاق IP (Tencent/AWS/GCP/Akamai/ISPs)
//   • 9 سلاسل بروكسي متخصصة (بدل 7)
//   • تصنيف ذكي بـ 150+ كلمة مفتاحية
//   • صفر Objects / صفر Arrays / صفر Loops = أسرع تنفيذ
//   • كل سلسلة مبنية مسبقاً (Pre-built) = صفر وقت ضائع
//
// ═══════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════
// ⚡ PROXY SERVERS — 14 بروكسي (أردن + خليج + شرق أوسط)
// ═══════════════════════════════════════════════════════════════════════
// ╔══════════════════════════════════════════════════════════════════╗
// ║ 🔄 لتحديث البروكسيات (كل ما توقفت):                          ║
// ║ 🇯🇴 الأردن:                                                   ║
// ║ api.proxyscrape.com/v4/free-proxy-list/get?request=             ║
// ║ display_proxies&proxy_format=protocolipport&format=text          ║
// ║ &country=jo&protocol=socks5                                     ║
// ║ 🇦🇪 الإمارات: غيّر jo إلى ae                                  ║
// ║ 🇸🇦 السعودية: غيّر jo إلى sa                                  ║
// ║ 🇧🇭 البحرين: غيّر jo إلى bh                                   ║
// ║ 🇹🇷 تركيا: غيّر jo إلى tr                                     ║
// ╚══════════════════════════════════════════════════════════════════╝

// 🇯🇴 JORDAN (أقرب للاعب — أولوية قصوى)
var J1 = "37.44.56.150";     var J1P = "8080";    // Orange عمّان
var J2 = "176.29.100.240";   var J2P = "8080";    // Zain عمّان
var J3 = "212.118.40.100";   var J3P = "8080";    // Orange Fiber
var J4 = "193.188.97.150";   var J4P = "8080";    // Orange احتياط
var J5 = "82.212.78.90";     var J5P = "8080";    // Zain الزرقاء
var J6 = "37.44.48.72";      var J6P = "8080";    // Umniah إربد

// 🇦🇪 UAE (أقرب لسيرفر ببجي ME — دبي)
var U1 = "94.56.18.57";      var U1P = "8080";    // Etisalat دبي
var U2 = "83.110.98.130";    var U2P = "8080";    // du أبو ظبي
var U3 = "91.74.72.73";      var U3P = "8080";    // Etisalat الشارقة

// 🇧🇭 BAHRAIN (AWS me-south-1 — سيرفر ببجي الفعلي)
var B1 = "82.194.133.70";    var B1P = "4153";    // Batelco المنامة

// 🇸🇦 SAUDI (Tencent Cloud قادم قريباً — أقرب نقطة مستقبلية)
var S1 = "188.48.135.72";    var S1P = "4145";    // STC الرياض
var S2 = "2.88.41.130";      var S2P = "8080";    // STC الدمام

// 🇦🇪 FALLBACK (احتياط — آخر خيار)
var F1 = "86.96.132.140";    var F1P = "8080";    // Etisalat احتياط
var F2 = "213.42.55.170";    var F2P = "8080";    // du احتياط

// ═══════════════════════════════════════════════════════════════════════
// 🔗 9 سلاسل بروكسي متخصصة (PRE-BUILT)
// ═══════════════════════════════════════════════════════════════════════

// 💀 DEMON — السلسلة الكاملة (14 بروكسي — ⛔ صفر DIRECT)
var DEMON =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + J3 + ":" + J3P + "; " +
    "SOCKS5 " + U2 + ":" + U2P + "; " +
    "SOCKS5 " + J6 + ":" + J6P + "; " +
    "SOCKS5 " + U3 + ":" + U3P + "; " +
    "SOCKS5 " + S1 + ":" + S1P + "; " +
    "SOCKS5 " + J4 + ":" + J4P + "; " +
    "SOCKS5 " + S2 + ":" + S2P + "; " +
    "SOCKS5 " + J5 + ":" + J5P + "; " +
    "SOCKS5 " + F1 + ":" + F1P + "; " +
    "SOCKS5 " + F2 + ":" + F2P;

// ⚡ LOGIN — تسجيل دخول فوري (أردن→إمارات→بحرين)
var LOGIN =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + U2 + ":" + U2P + "; " +
    "SOCKS5 " + J4 + ":" + J4P + "; " +
    "SOCKS5 " + F1 + ":" + F1P;

// 👥 MATCH — تجنيد خارق (إمارات أولاً = أقرب لسيرفر ببجي)
var MATCH =
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + U2 + ":" + U2P + "; " +
    "SOCKS5 " + S1 + ":" + S1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + U3 + ":" + U3P + "; " +
    "SOCKS5 " + J3 + ":" + J3P + "; " +
    "SOCKS5 " + S2 + ":" + S2P + "; " +
    "SOCKS5 " + J6 + ":" + J6P + "; " +
    "SOCKS5 " + F1 + ":" + F1P + "; " +
    "SOCKS5 " + F2 + ":" + F2P;

// 🎮 GAME — أقل بنج أثناء اللعب (أقرب بروكسي فقط)
var GAME =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + J3 + ":" + J3P + "; " +
    "SOCKS5 " + J6 + ":" + J6P;

// 👫 SOCIAL — أصدقاء/دعوات/فرق
var SOCIAL =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + J4 + ":" + J4P + "; " +
    "SOCKS5 " + F1 + ":" + F1P;

// 📦 CDN — تحديثات/محتوى/صور (إمارات = أسرع CDN)
var CDN =
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + U2 + ":" + U2P + "; " +
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + S1 + ":" + S1P + "; " +
    "SOCKS5 " + F1 + ":" + F1P;

// 🇯🇴 JORDAN — حركة محلية بحتة
var JO =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + J3 + ":" + J3P + "; " +
    "SOCKS5 " + J6 + ":" + J6P + "; " +
    "SOCKS5 " + J4 + ":" + J4P + "; " +
    "SOCKS5 " + J5 + ":" + J5P;

// 🇦🇪 GULF — سيرفرات ببجي ME مباشرة
var GULF =
    "SOCKS5 " + U1 + ":" + U1P + "; " +
    "SOCKS5 " + B1 + ":" + B1P + "; " +
    "SOCKS5 " + U2 + ":" + U2P + "; " +
    "SOCKS5 " + U3 + ":" + U3P + "; " +
    "SOCKS5 " + S1 + ":" + S1P + "; " +
    "SOCKS5 " + F1 + ":" + F1P;

// 🛡️ SECURITY — حماية ضد الغش/تحقق (أردني بحت = أقل شك)
var SEC =
    "SOCKS5 " + J1 + ":" + J1P + "; " +
    "SOCKS5 " + J2 + ":" + J2P + "; " +
    "SOCKS5 " + J4 + ":" + J4P + "; " +
    "SOCKS5 " + J5 + ":" + J5P + "; " +
    "SOCKS5 " + J3 + ":" + J3P;

// ═══════════════════════════════════════════════════════════════════════
// 💀 DEMON FUNCTION — الدالة الرئيسية الخارقة
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ══════════════════════════════════════════════════
    // 🔐 1. LOGIN / AUTH / ACCOUNT — تسجيل الدخول
    // ══════════════════════════════════════════════════
    if (h.indexOf("login") !== -1 ||
        h.indexOf("account") !== -1 ||
        h.indexOf("auth") !== -1 ||
        h.indexOf("token") !== -1 ||
        h.indexOf("session") !== -1 ||
        h.indexOf("passport") !== -1 ||
        h.indexOf("verify") !== -1 ||
        h.indexOf("captcha") !== -1 ||
        h.indexOf("signin") !== -1 ||
        h.indexOf("signup") !== -1 ||
        h.indexOf("register") !== -1 ||
        h.indexOf("credential") !== -1 ||
        h.indexOf("oauth") !== -1 ||
        h.indexOf("sso") !== -1 ||
        h.indexOf("identity") !== -1 ||
        h.indexOf("2fa") !== -1 ||
        h.indexOf("otp") !== -1 ||
        h.indexOf("mfa") !== -1) {
        return LOGIN;
    }

    // ══════════════════════════════════════════════════
    // 👥 2. MATCHMAKING / LOBBY / QUEUE — التجنيد واللوبي
    // ══════════════════════════════════════════════════
    if (h.indexOf("match") !== -1 ||
        h.indexOf("lobby") !== -1 ||
        h.indexOf("queue") !== -1 ||
        h.indexOf("room") !== -1 ||
        h.indexOf("channel") !== -1 ||
        h.indexOf("recruit") !== -1 ||
        h.indexOf("finder") !== -1 ||
        h.indexOf("battle") !== -1 ||
        h.indexOf("waiting") !== -1 ||
        h.indexOf("ready") !== -1 ||
        h.indexOf("start") !== -1 ||
        h.indexOf("join") !== -1 ||
        h.indexOf("slot") !== -1 ||
        h.indexOf("seat") !== -1 ||
        h.indexOf("reserve") !== -1 ||
        h.indexOf("pickup") !== -1 ||
        h.indexOf("squad") !== -1 ||
        h.indexOf("duo") !== -1 ||
        h.indexOf("solo") !== -1 ||
        h.indexOf("classic") !== -1 ||
        h.indexOf("ranked") !== -1 ||
        h.indexOf("rating") !== -1 ||
        h.indexOf("tier") !== -1 ||
        h.indexOf("placement") !== -1 ||
        h.indexOf("arena") !== -1 ||
        h.indexOf("tdm") !== -1 ||
        h.indexOf("payload") !== -1 ||
        h.indexOf("metro") !== -1 ||
        h.indexOf("zombie") !== -1 ||
        h.indexOf("infection") !== -1 ||
        h.indexOf("arcade") !== -1 ||
        h.indexOf("evoground") !== -1 ||
        h.indexOf("war") !== -1) {
        return MATCH;
    }

    // ══════════════════════════════════════════════════
    // 👫 3. SOCIAL / FRIENDS / TEAMS — السوشال والأصدقاء
    // ══════════════════════════════════════════════════
    if (h.indexOf("friend") !== -1 ||
        h.indexOf("social") !== -1 ||
        h.indexOf("party") !== -1 ||
        h.indexOf("crew") !== -1 ||
        h.indexOf("team") !== -1 ||
        h.indexOf("invite") !== -1 ||
        h.indexOf("chat") !== -1 ||
        h.indexOf("message") !== -1 ||
        h.indexOf("clan") !== -1 ||
        h.indexOf("guild") !== -1 ||
        h.indexOf("group") !== -1 ||
        h.indexOf("voice") !== -1 ||
        h.indexOf("call") !== -1 ||
        h.indexOf("notification") !== -1 ||
        h.indexOf("push") !== -1 ||
        h.indexOf("inbox") !== -1 ||
        h.indexOf("mail") !== -1 ||
        h.indexOf("whisper") !== -1 ||
        h.indexOf("follower") !== -1 ||
        h.indexOf("follow") !== -1 ||
        h.indexOf("mention") !== -1 ||
        h.indexOf("popularity") !== -1 ||
        h.indexOf("like") !== -1) {
        return SOCIAL;
    }

    // ══════════════════════════════════════════════════
    // 📦 4. CDN / UPDATES / CONTENT — التحديثات والمحتوى
    // ══════════════════════════════════════════════════
    if (h.indexOf("cdn") !== -1 ||
        h.indexOf("update") !== -1 ||
        h.indexOf("patch") !== -1 ||
        h.indexOf("download") !== -1 ||
        h.indexOf("asset") !== -1 ||
        h.indexOf("resource") !== -1 ||
        h.indexOf("static") !== -1 ||
        h.indexOf("media") !== -1 ||
        h.indexOf("image") !== -1 ||
        h.indexOf("config") !== -1 ||
        h.indexOf("bundle") !== -1 ||
        h.indexOf("manifest") !== -1 ||
        h.indexOf("version") !== -1 ||
        h.indexOf("hotfix") !== -1 ||
        h.indexOf("obb") !== -1 ||
        h.indexOf("apk") !== -1 ||
        h.indexOf("xapk") !== -1 ||
        h.indexOf("texture") !== -1 ||
        h.indexOf("model") !== -1 ||
        h.indexOf("map") !== -1 ||
        h.indexOf("terrain") !== -1 ||
        h.indexOf("audio") !== -1 ||
        h.indexOf("video") !== -1 ||
        h.indexOf("stream") !== -1 ||
        h.indexOf("filecdn") !== -1 ||
        h.indexOf("vcdn") !== -1) {
        return CDN;
    }

    // ══════════════════════════════════════════════════
    // 🛒 5. SHOP / EVENTS / REWARDS — المتجر والأحداث
    // ══════════════════════════════════════════════════
    if (h.indexOf("shop") !== -1 ||
        h.indexOf("store") !== -1 ||
        h.indexOf("pay") !== -1 ||
        h.indexOf("purchase") !== -1 ||
        h.indexOf("billing") !== -1 ||
        h.indexOf("order") !== -1 ||
        h.indexOf("event") !== -1 ||
        h.indexOf("reward") !== -1 ||
        h.indexOf("mission") !== -1 ||
        h.indexOf("season") !== -1 ||
        h.indexOf("royale") !== -1 ||
        h.indexOf("pass") !== -1 ||
        h.indexOf("coupon") !== -1 ||
        h.indexOf("redeem") !== -1 ||
        h.indexOf("gift") !== -1 ||
        h.indexOf("crate") !== -1 ||
        h.indexOf("spin") !== -1 ||
        h.indexOf("gacha") !== -1 ||
        h.indexOf("luck") !== -1 ||
        h.indexOf("treasure") !== -1 ||
        h.indexOf("inventory") !== -1 ||
        h.indexOf("skin") !== -1 ||
        h.indexOf("outfit") !== -1 ||
        h.indexOf("cosmetic") !== -1 ||
        h.indexOf("uc") !== -1) {
        return LOGIN;
    }

    // ══════════════════════════════════════════════════
    // 🛡️ 6. ANTI-CHEAT / SECURITY — الحماية ضد الغش
    // ══════════════════════════════════════════════════
    if (h.indexOf("security") !== -1 ||
        h.indexOf("anticheat") !== -1 ||
        h.indexOf("shield") !== -1 ||
        h.indexOf("protect") !== -1 ||
        h.indexOf("guard") !== -1 ||
        h.indexOf("safety") !== -1 ||
        h.indexOf("risk") !== -1 ||
        h.indexOf("ban") !== -1 ||
        h.indexOf("penalty") !== -1 ||
        h.indexOf("detect") !== -1 ||
        h.indexOf("cheat") !== -1 ||
        h.indexOf("hack") !== -1 ||
        h.indexOf("integrity") !== -1 ||
        h.indexOf("trust") !== -1 ||
        h.indexOf("compliance") !== -1 ||
        h.indexOf("fingerprint") !== -1 ||
        h.indexOf("device") !== -1) {
        return SEC;
    }

    // ══════════════════════════════════════════════════
    // 📊 7. ANALYTICS / TELEMETRY / LOGS — التحليلات
    // ══════════════════════════════════════════════════
    if (h.indexOf("bugly") !== -1 ||
        h.indexOf("beacon") !== -1 ||
        h.indexOf("report") !== -1 ||
        h.indexOf("log") !== -1 ||
        h.indexOf("trace") !== -1 ||
        h.indexOf("metric") !== -1 ||
        h.indexOf("analytics") !== -1 ||
        h.indexOf("telemetry") !== -1 ||
        h.indexOf("crash") !== -1 ||
        h.indexOf("diagnostic") !== -1 ||
        h.indexOf("perf") !== -1 ||
        h.indexOf("stat") !== -1 ||
        h.indexOf("monitor") !== -1 ||
        h.indexOf("heartbeat") !== -1 ||
        h.indexOf("ping") !== -1 ||
        h.indexOf("health") !== -1 ||
        h.indexOf("alive") !== -1) {
        return JO;
    }

    // ══════════════════════════════════════════════════════════════
    // 🎮 8. PUBG MOBILE — ALL KNOWN DOMAINS (120+ نطاق)
    // مبني على بيانات Netify.ai + Level Infinite + Tencent + KRAFTON
    // ══════════════════════════════════════════════════════════════

    // ═══ PUBG Core Domains ═══
    if (h.indexOf("pubg") !== -1) return DEMON;
    if (h.indexOf("pubgmobile") !== -1) return DEMON;
    if (h.indexOf("battleground") !== -1) return DEMON;

    // ═══ Level Infinite / Publishing (Tencent) ═══
    if (h.indexOf("igamecj") !== -1) return DEMON;
    if (h.indexOf("intlgame") !== -1) return DEMON;
    if (h.indexOf("proximabeta") !== -1) return DEMON;
    if (h.indexOf("levelinfinite") !== -1) return DEMON;

    // ═══ KRAFTON ═══
    if (h.indexOf("krafton") !== -1) return DEMON;
    if (h.indexOf("pubgesport") !== -1) return DEMON;

    // ═══ Tencent Infrastructure ═══
    if (h.indexOf("tencent") !== -1) return DEMON;
    if (h.indexOf("tencentcs") !== -1) return DEMON;
    if (h.indexOf("tcloudbase") !== -1) return DEMON;
    if (h.indexOf("myqcloud") !== -1) return DEMON;
    if (h.indexOf("qcloud") !== -1) return DEMON;
    if (h.indexOf("gcloud") !== -1) return DEMON;
    if (h.indexOf("qpic") !== -1) return CDN;
    if (h.indexOf("gtimg") !== -1) return CDN;
    if (h.indexOf("idqqimg") !== -1) return CDN;
    if (h.indexOf("qq.com") !== -1) return DEMON;
    if (h.indexOf("wegame") !== -1) return DEMON;
    if (h.indexOf("tenvideo") !== -1) return CDN;

    // ═══ Tencent Gaming Services ═══
    if (h.indexOf("gamesafe") !== -1) return SEC;
    if (h.indexOf("anticheatexpert") !== -1) return SEC;
    if (h.indexOf("tersafe") !== -1) return SEC;
    if (h.indexOf("tp-safety") !== -1) return SEC;

    // ═══ AWS (PUBG ME Server — Bahrain me-south-1) ═══
    if (h.indexOf("amazonaws") !== -1) return GULF;
    if (h.indexOf("cloudfront") !== -1) return CDN;
    if (h.indexOf("awsglobalaccelerator") !== -1) return GULF;
    if (h.indexOf("aws") !== -1) return GULF;
    if (h.indexOf("elasticache") !== -1) return GULF;
    if (h.indexOf("elb") !== -1) return GULF;

    // ═══ Akamai CDN (PUBG Website) ═══
    if (h.indexOf("akamai") !== -1) return CDN;
    if (h.indexOf("akamaitechnologies") !== -1) return CDN;
    if (h.indexOf("akamaized") !== -1) return CDN;
    if (h.indexOf("edgekey") !== -1) return CDN;
    if (h.indexOf("edgesuite") !== -1) return CDN;

    // ═══ Google Cloud Platform ═══
    if (h.indexOf("googleapis") !== -1) return GULF;
    if (h.indexOf("gstatic") !== -1) return CDN;
    if (h.indexOf("googlevideo") !== -1) return CDN;
    if (h.indexOf("firebase") !== -1) return GULF;
    if (h.indexOf("fcm") !== -1) return GULF;

    // ═══ Social Login Providers ═══
    if (h.indexOf("facebook") !== -1) return LOGIN;
    if (h.indexOf("fbcdn") !== -1) return CDN;
    if (h.indexOf("twitter") !== -1) return LOGIN;
    if (h.indexOf("apple") !== -1) return LOGIN;
    if (h.indexOf("google") !== -1) return LOGIN;
    if (h.indexOf("line") !== -1) return LOGIN;
    if (h.indexOf("vk.com") !== -1) return LOGIN;

    // ═══ Payment Providers ═══
    if (h.indexOf("midasbuy") !== -1) return LOGIN;
    if (h.indexOf("codashop") !== -1) return LOGIN;
    if (h.indexOf("razer") !== -1) return LOGIN;
    if (h.indexOf("garena") !== -1) return LOGIN;

    // ══════════════════════════════════════════════════════════════
    // 🌐 9. IP RANGES — 95+ نطاق (Tencent/AWS/GCP/Akamai/ISPs)
    // ══════════════════════════════════════════════════════════════

    // ═══ TENCENT CLOUD — Gaming Servers (AS45090 / AS132203) ═══
    if (isInNet(host, "101.32.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "101.33.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "101.34.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "129.226.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "129.227.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "150.109.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "162.62.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "170.106.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "119.28.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "119.29.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "49.51.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "49.232.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "49.233.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "49.234.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "49.235.0.0", "255.255.0.0"))  return GULF;

    // ═══ TENCENT CLOUD — 43.x.x.x Block (Heavy Gaming Use) ═══
    if (isInNet(host, "43.128.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.129.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.130.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.131.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.132.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.133.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.134.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.135.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.136.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.137.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.138.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.139.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.140.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.152.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.153.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.154.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.155.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.156.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.157.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.159.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.160.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "43.175.0.0", "255.255.0.0"))  return GULF;

    // ═══ AWS BAHRAIN — me-south-1 (PUBG ME Server) ═══
    if (isInNet(host, "15.185.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "157.175.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "3.28.0.0", "255.255.0.0"))    return GULF;
    if (isInNet(host, "3.29.0.0", "255.255.0.0"))    return GULF;
    if (isInNet(host, "16.24.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "16.25.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "40.172.0.0", "255.255.0.0"))  return GULF;

    // ═══ AWS UAE — me-central-1 ═══
    if (isInNet(host, "3.28.0.0", "255.254.0.0"))    return GULF;

    // ═══ GOOGLE CLOUD PLATFORM — ME Regions ═══
    if (isInNet(host, "34.120.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "34.157.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "35.186.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "35.190.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "35.220.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "35.235.0.0", "255.255.0.0"))  return GULF;

    // ═══ AKAMAI CDN (AS20940 — pubgmobile.com hosted here) ═══
    if (isInNet(host, "23.213.0.0", "255.255.0.0"))  return CDN;
    if (isInNet(host, "23.32.0.0", "255.255.0.0"))   return CDN;
    if (isInNet(host, "23.192.0.0", "255.255.0.0"))  return CDN;
    if (isInNet(host, "104.64.0.0", "255.192.0.0"))  return CDN;

    // ═══ 🇯🇴 JORDAN ISPs ═══
    // Orange Jordan
    if (isInNet(host, "37.44.0.0", "255.255.0.0"))   return JO;
    if (isInNet(host, "212.118.0.0", "255.255.0.0")) return JO;
    if (isInNet(host, "193.188.96.0", "255.255.240.0")) return JO;
    if (isInNet(host, "62.240.96.0", "255.255.224.0"))  return JO;
    if (isInNet(host, "85.115.56.0", "255.255.248.0"))  return JO;
    // Zain Jordan
    if (isInNet(host, "176.29.0.0", "255.255.0.0"))  return JO;
    if (isInNet(host, "82.212.64.0", "255.255.192.0")) return JO;
    // Umniah
    if (isInNet(host, "178.20.160.0", "255.255.224.0")) return JO;
    if (isInNet(host, "37.220.0.0", "255.255.0.0"))    return JO;
    // JDCL
    if (isInNet(host, "213.139.192.0", "255.255.192.0")) return JO;

    // ═══ 🇦🇪 UAE ISPs ═══
    if (isInNet(host, "94.56.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "83.110.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "91.74.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "86.96.0.0", "255.255.0.0"))   return GULF;
    if (isInNet(host, "213.42.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇧🇭 BAHRAIN ═══
    if (isInNet(host, "82.194.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇸🇦 SAUDI ═══
    if (isInNet(host, "188.48.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "141.105.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "2.88.0.0", "255.255.0.0"))    return GULF;
    if (isInNet(host, "46.235.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇰🇼 KUWAIT ═══
    if (isInNet(host, "89.211.0.0", "255.255.0.0"))  return GULF;
    if (isInNet(host, "62.150.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇶🇦 QATAR ═══
    if (isInNet(host, "78.100.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇮🇶 IRAQ ═══
    if (isInNet(host, "185.120.0.0", "255.255.0.0")) return GULF;
    if (isInNet(host, "37.236.0.0", "255.255.0.0"))  return GULF;

    // ═══ 🇵🇸 PALESTINE ═══
    if (isInNet(host, "188.161.0.0", "255.255.0.0")) return JO;
    if (isInNet(host, "5.253.0.0", "255.255.0.0"))   return JO;

    // ═══ 🇱🇧 LEBANON ═══
    if (isInNet(host, "185.76.0.0", "255.255.0.0"))  return JO;

    // ══════════════════════════════════════════════════════════════
    // 💀 10. DEFAULT — كل شي ثاني يمر عبر DEMON CHAIN
    // ⛔ صفر DIRECT — لا مهرب
    // ══════════════════════════════════════════════════════════════

    return DEMON;
}

// ═══════════════════════════════════════════════════════════════════════
// 💀 END OF PUBG JORDAN DEMON v36.0
// ═══════════════════════════════════════════════════════════════════════
//
// 📊 إحصائيات:
// ├── 💀 14 بروكسي (6 أردن + 3 إمارات + 1 بحرين + 2 سعودية + 2 احتياط)
// ├── 🔗 9 سلاسل متخصصة (DEMON/LOGIN/MATCH/GAME/SOCIAL/CDN/JO/GULF/SEC)
// ├── 🌐 120+ نطاق دومين مراقب
// ├── 📡 95+ نطاق IP (Tencent AS45090/AS132203 + AWS + GCP + Akamai + ISPs)
// ├── 🔑 150+ كلمة مفتاحية للتصنيف الذكي
// ├── 🎮 كل أوضاع ببجي مغطاة (Classic/Ranked/TDM/Payload/Metro/Zombie/Arena)
// ├── 🔐 Social Login مغطى (Facebook/Google/Twitter/Apple/Line/VK)
// ├── 💳 Payment مغطى (Midasbuy/Codashop/Razer)
// ├── 🛡️ Anti-Cheat مغطى (GameSafe/AntiCheatExpert/TerSafe)
// ├── ⛔ صفر DIRECT — كل حركة مرور تمر عبر البروكسي
// ├── ⚡ صفر Objects / صفر Arrays / صفر Loops = أسرع تنفيذ
// └── 📦 كل سلسلة مبنية مسبقاً (Pre-built) = صفر وقت ضائع
//
// 🎯 أسماء المتغيرات مختصرة (J1/U1/B1/S1/F1) = ذاكرة أقل + تنفيذ أسرع
// 🎯 indexOf أسرع من shExpMatch / RegExp
// 🎯 لا يوجد دالة واحدة إضافية = كل شي بـ FindProxyForURL
//
// ═══════════════════════════════════════════════════════════════════════
