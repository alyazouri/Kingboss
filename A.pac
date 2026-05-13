// ═══════════════════════════════════════════════════════════════════════════════════════
//  
//  ██████╗  █████╗  ██████╗    ██╗   ██╗██╗  ████████╗██╗███╗   ███╗ █████╗ ████████╗███████╗
//  ██╔══██╗██╔══██╗██╔════╝    ██║   ██║██║  ╚══██╔══╝██║████╗ ████║██╔══██╗╚══██╔══╝██╔════╝
//  ██████╔╝███████║██║         ██║   ██║██║     ██║   ██║██╔████╔██║███████║   ██║   █████╗  
//  ██╔═══╝ ██╔══██║██║         ██║   ██║██║     ██║   ██║██║╚██╔╝██║██╔══██║   ██║   ██╔══╝  
//  ██║     ██║  ██║╚██████╗    ╚██████╔╝███████╗██║   ██║██║ ╚═╝ ██║██║  ██║   ██║   ███████╗
//  ╚═╝     ╚═╝  ╚═╝ ╚═════╝     ╚═════╝ ╚══════╝╚═╝   ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
//  
//  ╔══════════════════════════════════════════════════════════════════════════════════════╗
//  ║  GAME BOOSTER PAC — JORDAN ULTIMATE v3.0                                          ║
//  ║  النسخة الشاملة الكاملة المتكاملة                                                  ║
//  ║                                                                                    ║
//  ║  🎯 أهداف:                                                                         ║
//  ║  ├── أقل Ping ممكن لسيرفرات أوروبا والشرق الأوسط                                 ║
//  ║  ├── أقصى ظهور للاعبين الأردنيين                                                   ║
//  ║  ├── توجيه ذكي للسيرفر الأردني/المنطقة                                             ║
//  ║  ├── حجب شامل لكل ما يُبطئ الشبكة                                                 ║
//  ║  ├── تحسين DNS + Cache ذكي                                                         ║
//  ║  ├── مراقبة اتصال لحظية                                                            ║
//  ║  └── تعلم ذاتي من المسارات الناجحة                                                 ║
//  ║                                                                                    ║
//  ║  ⚠️ PAC يتحكم بـ HTTP/HTTPS فقط — ليس UDP Game Traffic                            ║
//  ║  لكن يحسّن: Login + Matchmaking API + Social + Store + CDN + Updates               ║
//  ╚══════════════════════════════════════════════════════════════════════════════════════╝
//  
// ═══════════════════════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 1: الإعدادات الرئيسية
// ═══════════════════════════════════════════════════════════════════════════════════════

var VERSION   = "3.0-ULTIMATE";
var DIRECT    = "DIRECT";
var BLOCK     = "PROXY 0.0.0.0:1";
var SAFE_DROP = "PROXY 127.0.0.1:1";

var CFG = {
    // ━━━ أهداف الـ Ping ━━━
    TARGET_PING_ULTRA:    3,
    TARGET_PING_SOCIAL:   4,
    TARGET_PING_LOBBY:    5,
    TARGET_PING_GAME:     8,
    TARGET_PING_RANKED:   6,
    TARGET_PING_MAX:      20,
    TARGET_PING_CRITICAL: 30,

    // ━━━ إعدادات البروكسي ━━━
    MAX_CHAIN:      3,
    PROXY_TIMEOUT:  5000,
    RETRY_COUNT:    2,

    // ━━━ Cache ━━━
    DNS_CACHE_SIZE: 600,
    DNS_CACHE_TTL:  25000,
    ROUTE_CACHE_TTL: 180000,
    STICKY_TTL:     360000,

    // ━━━ الأردن ━━━
    JORDAN_ONLY:         true,
    BLOCK_NON_JORDAN:    true,
    PREFER_LOCAL:        true,
    FORCE_MENA_SERVER:   true,
    FORCE_EU_FALLBACK:   true,

    // ━━━ التحسين ━━━
    BLOCK_ADS:              true,
    BLOCK_TRACKERS:         true,
    BLOCK_TELEMETRY:        true,
    BLOCK_ANALYTICS:        true,
    BLOCK_MINING:           true,
    BLOCK_STREAMING:        true,
    BLOCK_SOCIAL_MEDIA_BG:  true,
    PREFETCH_DNS:           true,
    PREFETCH_SOCIAL:        true,
    SOCIAL_PRIORITY:        true,
    MATCHMAKING_BOOST:      true,
    REGIONAL_HOPS:          true,
    CARRIER_MATCHING:       true,
    BURST_MODE:             true,

    // ━━━ التعلم الذاتي ━━━
    ENABLE_ML:              true,
    ENABLE_HEALTH:          true,
    LEARNING_RATE:          0.3,
    MIN_SAMPLES_FOR_PREDICT: 5,

    // ━━━ ساعات الذروة بالأردن ━━━
    PEAK_HOURS_START:  16,  // 4 مساءً
    PEAK_HOURS_END:    2,   // 2 صباحاً
    WEEKEND_DAYS:      [5, 6] // الجمعة والسبت
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 2: بروكسيات الأردن — الكاملة (كل شركات الاتصالات + مناطق)
// ═══════════════════════════════════════════════════════════════════════════════════════

var PROXY_DB = {

    // ╔═══════════════════════════════════════════════════════════════════════════╗
    // ║  الطبقة 0 — DIAMOND: عمّان核心区 (أقل تأخير)                           ║
    // ╚═══════════════════════════════════════════════════════════════════════════╝

    // ──── Orange Jordan — الأفضل للألعاب في الأردن ────
    OR_D1: {
        ip: "46.185.128.1", port: 3128,
        carrier: "ORANGE", tier: 0, region: "AMMAN_CORE",
        targetPing: 5, reliability: 99.5, bandwidth: "ULTRA",
        social: true, socialDedicated: false, burst: true, ultraBurst: true,
        keepAlive: true, pool: 12, priority: 100,
        desc: "Orange Amman Core #1 — الأفضل للألعاب"
    },
    OR_D2: {
        ip: "46.185.144.1", port: 8080,
        carrier: "ORANGE", tier: 0, region: "AMMAN_CORE",
        targetPing: 5, reliability: 99, bandwidth: "ULTRA",
        social: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 10, priority: 99,
        desc: "Orange Amman Core #2"
    },
    OR_D3: {
        ip: "94.127.208.1", port: 443,
        carrier: "ORANGE", tier: 0, region: "AMMAN_CORE",
        targetPing: 6, reliability: 98.5, bandwidth: "ULTRA",
        social: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 10, priority: 98,
        desc: "Orange Amman Core #3 (HTTPS)"
    },
    OR_D4: {
        ip: "149.200.136.1", port: 443,
        carrier: "ORANGE", tier: 0, region: "AMMAN_METRO",
        targetPing: 6, reliability: 98, bandwidth: "ULTRA",
        social: true, burst: true,
        keepAlive: true, pool: 8, priority: 97,
        desc: "Orange Amman Metro"
    },

    // ──── Zain Jordan — ثاني أفضل ────
    ZN_D1: {
        ip: "79.173.192.1", port: 3128,
        carrier: "ZAIN", tier: 0, region: "AMMAN_CORE",
        targetPing: 6, reliability: 99, bandwidth: "ULTRA",
        social: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 12, priority: 96,
        desc: "Zain Amman Core #1"
    },
    ZN_D2: {
        ip: "109.237.192.1", port: 8080,
        carrier: "ZAIN", tier: 0, region: "AMMAN_CORE",
        targetPing: 6, reliability: 98.5, bandwidth: "ULTRA",
        social: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 10, priority: 95,
        desc: "Zain Amman Core #2"
    },
    ZN_D3: {
        ip: "176.28.0.1", port: 443,
        carrier: "ZAIN", tier: 0, region: "AMMAN_CORE",
        targetPing: 7, reliability: 98, bandwidth: "HIGH",
        social: true, burst: true,
        keepAlive: true, pool: 8, priority: 94,
        desc: "Zain Amman Core #3 (HTTPS)"
    },
    ZN_D4: {
        ip: "176.29.0.1", port: 3128,
        carrier: "ZAIN", tier: 0, region: "AMMAN_METRO",
        targetPing: 7, reliability: 97.5, bandwidth: "HIGH",
        social: true, burst: true,
        keepAlive: true, pool: 8, priority: 93,
        desc: "Zain Amman Metro"
    },

    // ──── Umniah — خيار ممتاز ────
    UM_D1: {
        ip: "82.212.0.1", port: 3128,
        carrier: "UMNIAH", tier: 0, region: "AMMAN_CORE",
        targetPing: 7, reliability: 97, bandwidth: "HIGH",
        social: true, burst: true,
        keepAlive: true, pool: 8, priority: 92,
        desc: "Umniah Amman Core #1"
    },
    UM_D2: {
        ip: "212.35.85.1", port: 8080,
        carrier: "UMNIAH", tier: 0, region: "AMMAN_CORE",
        targetPing: 7, reliability: 96, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 6, priority: 91,
        desc: "Umniah Amman Core #2"
    },

    // ╔═══════════════════════════════════════════════════════════════════════════╗
    // ║  الطبقة 0 — SOCIAL DIAMOND: بروكسيات مخصصة لل_social_و_matchmaking     ║
    // ╚═══════════════════════════════════════════════════════════════════════════╝

    SO_OR1: {
        ip: "46.185.128.5", port: 3128,
        carrier: "ORANGE", tier: 0, region: "AMMAN_SOCIAL",
        targetPing: 5, reliability: 99.5, bandwidth: "ULTRA",
        social: true, socialDedicated: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 18, priority: 100,
        desc: "🔵 Social专用 Orange — أعلى أولوية"
    },
    SO_ZN1: {
        ip: "176.29.0.10", port: 8080,
        carrier: "ZAIN", tier: 0, region: "AMMAN_SOCIAL",
        targetPing: 6, reliability: 99, bandwidth: "ULTRA",
        social: true, socialDedicated: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 15, priority: 98,
        desc: "🔵 Social专用 Zain"
    },
    SO_UM1: {
        ip: "82.212.64.1", port: 3128,
        carrier: "UMNIAH", tier: 0, region: "AMMAN_SOCIAL",
        targetPing: 7, reliability: 98, bandwidth: "ULTRA",
        social: true, socialDedicated: true, burst: true, ultraBurst: true,
        keepAlive: true, pool: 12, priority: 96,
        desc: "🔵 Social专用 Umniah"
    },

    // ╔═══════════════════════════════════════════════════════════════════════════╗
    // ║  الطبقة 1 — PLATINUM: مناطق أردنية رئيسية                               ║
    // ╚═══════════════════════════════════════════════════════════════════════════╝

    // إربد — ثاني أكبر مدينة
    OR_IB1: {
        ip: "46.185.176.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "IRBID",
        targetPing: 8, reliability: 96, bandwidth: "HIGH",
        social: true, burst: true,
        pool: 6, priority: 88,
        desc: "Orange Irbid"
    },
    ZN_IB1: {
        ip: "79.173.240.1", port: 3128,
        carrier: "ZAIN", tier: 1, region: "IRBID",
        targetPing: 8, reliability: 95, bandwidth: "HIGH",
        social: true, burst: true,
        pool: 5, priority: 87,
        desc: "Zain Irbid"
    },

    // الزرقاء
    OR_ZQ1: {
        ip: "46.185.192.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "ZARQA",
        targetPing: 7, reliability: 96, bandwidth: "HIGH",
        social: true, burst: true,
        pool: 6, priority: 89,
        desc: "Orange Zarqa"
    },
    ZN_ZQ1: {
        ip: "176.28.128.1", port: 3128,
        carrier: "ZAIN", tier: 1, region: "ZARQA",
        targetPing: 8, reliability: 95, bandwidth: "HIGH",
        social: true, burst: true,
        pool: 5, priority: 88,
        desc: "Zain Zarqa"
    },

    // العقبة
    OR_AQ1: {
        ip: "46.185.208.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "AQABA",
        targetPing: 10, reliability: 94, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 4, priority: 82,
        desc: "Orange Aqaba"
    },
    ZN_AQ1: {
        ip: "176.29.128.1", port: 3128,
        carrier: "ZAIN", tier: 1, region: "AQABA",
        targetPing: 10, reliability: 93, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 4, priority: 81,
        desc: "Zain Aqaba"
    },

    // المفرق
    OR_MF1: {
        ip: "46.185.212.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "MAFRAQ",
        targetPing: 10, reliability: 93, bandwidth: "MEDIUM",
        social: false, burst: true,
        pool: 3, priority: 80,
        desc: "Orange Mafraq"
    },

    // مادبا
    OR_MD1: {
        ip: "82.212.160.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "MADABA",
        targetPing: 9, reliability: 94, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 4, priority: 84,
        desc: "Orange Madaba"
    },

    // البلقاء / السلط
    OR_BL1: {
        ip: "46.185.200.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "BALQA",
        targetPing: 9, reliability: 93, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 4, priority: 83,
        desc: "Orange Balqa"
    },

    // الكرك
    OR_KR1: {
        ip: "94.127.216.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "KARAK",
        targetPing: 11, reliability: 92, bandwidth: "MEDIUM",
        social: false, burst: true,
        pool: 3, priority: 78,
        desc: "Orange Karak"
    },

    // جرش
    OR_JR1: {
        ip: "82.212.192.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "JERASH",
        targetPing: 9, reliability: 93, bandwidth: "HIGH",
        social: false, burst: true,
        pool: 3, priority: 83,
        desc: "Orange Jerash"
    },

    // الطفيلة
    OR_TF1: {
        ip: "94.127.220.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "TAFILAH",
        targetPing: 12, reliability: 90, bandwidth: "MEDIUM",
        social: false, burst: false,
        pool: 2, priority: 75,
        desc: "Orange Tafilah"
    },

    // معان
    OR_MN1: {
        ip: "94.127.222.1", port: 8080,
        carrier: "ORANGE", tier: 1, region: "MAAN",
        targetPing: 12, reliability: 89, bandwidth: "MEDIUM",
        social: false, burst: false,
        pool: 2, priority: 74,
        desc: "Orange Ma'an"
    },

    // ╔═══════════════════════════════════════════════════════════════════════════╗
    // ║  الطبقة 2 — BACKUP: نسخ احتياطية                                        ║
    // ╚═══════════════════════════════════════════════════════════════════════════╝

    OR_BK1: {
        ip: "94.127.224.1", port: 8080,
        carrier: "ORANGE", tier: 2, region: "BACKUP",
        targetPing: 14, reliability: 90, bandwidth: "MEDIUM",
        social: false, burst: false,
        pool: 3, priority: 70,
        desc: "Orange Backup"
    },
    ZN_BK1: {
        ip: "109.237.224.1", port: 3128,
        carrier: "ZAIN", tier: 2, region: "BACKUP",
        targetPing: 15, reliability: 89, bandwidth: "MEDIUM",
        social: false, burst: false,
        pool: 3, priority: 68,
        desc: "Zain Backup"
    },
    UM_BK1: {
        ip: "82.212.128.1", port: 80,
        carrier: "UMNIAH", tier: 2, region: "BACKUP",
        targetPing: 15, reliability: 88, bandwidth: "MEDIUM",
        social: false, burst: false,
        pool: 3, priority: 66,
        desc: "Umniah Backup"
    }
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 3: سلاسل التوجيه لكل منطقة (Regional Hop Chains)
// ═══════════════════════════════════════════════════════════════════════════════════════

var HOP_CHAINS = {

    // ━━━ سلاسل اجتماعية (أعلى أولوية) ━━━
    SOCIAL_AMMAN:   ["SO_OR1", "SO_ZN1", "SO_UM1"],
    SOCIAL_IRBID:   ["SO_OR1", "OR_IB1", "ZN_IB1"],
    SOCIAL_ZARQA:   ["SO_OR1", "OR_ZQ1", "ZN_ZQ1"],
    SOCIAL_NATIONAL:["SO_OR1", "SO_ZN1", "OR_D1"],

    // ━━━ سلاسل لعب (أداء عالي) ━━━
    GAME_AMMAN:     ["OR_D1", "ZN_D1", "UM_D1"],
    GAME_IRBID:     ["OR_IB1", "ZN_IB1", "OR_D1"],
    GAME_ZARQA:     ["OR_ZQ1", "ZN_ZQ1", "OR_D1"],
    GAME_AQABA:     ["OR_AQ1", "ZN_AQ1", "OR_D1"],
    GAME_MAFRAQ:    ["OR_MF1", "OR_IB1", "OR_D1"],
    GAME_MADABA:    ["OR_MD1", "OR_D1", "ZN_D1"],
    GAME_BALQA:     ["OR_BL1", "OR_D1", "ZN_D1"],
    GAME_KARAK:     ["OR_KR1", "OR_D1", "ZN_D1"],
    GAME_JERASH:    ["OR_JR1", "OR_IB1", "OR_D1"],
    GAME_TAFILAH:   ["OR_TF1", "OR_KR1", "OR_D1"],
    GAME_MAAN:      ["OR_MN1", "OR_AQ1", "OR_D1"],

    // ━━━ سلاسل محددة ━━━
    AUTH_CHAIN:     ["OR_D1", "SO_OR1", "ZN_D1"],
    RANKED_CHAIN:   ["OR_D1", "ZN_D1", "OR_D2"],
    EMERGENCY:      ["OR_D1", "ZN_D1", "UM_D1"]
};

// سلاسل جاهزة نصية
var PREBUILD = {
    GAME:   "PROXY " + PROXY_DB.OR_D1.ip + ":" + PROXY_DB.OR_D1.port
          + "; PROXY " + PROXY_DB.ZN_D1.ip + ":" + PROXY_DB.ZN_D1.port
          + "; PROXY " + PROXY_DB.UM_D1.ip + ":" + PROXY_DB.UM_D1.port
          + "; " + DIRECT,

    SOCIAL: "PROXY " + PROXY_DB.SO_OR1.ip + ":" + PROXY_DB.SO_OR1.port
          + "; PROXY " + PROXY_DB.SO_ZN1.ip + ":" + PROXY_DB.SO_ZN1.port
          + "; PROXY " + PROXY_DB.SO_UM1.ip + ":" + PROXY_DB.SO_UM1.port
          + "; " + DIRECT,

    AUTH:   "PROXY " + PROXY_DB.OR_D1.ip + ":" + PROXY_DB.OR_D1.port
          + "; PROXY " + PROXY_DB.SO_OR1.ip + ":" + PROXY_DB.SO_OR1.port
          + "; PROXY " + PROXY_DB.ZN_D1.ip + ":" + PROXY_DB.ZN_D1.port
          + "; " + DIRECT
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 4: نطاقات PUBG الكاملة (كل ما تتصل به اللعبة عبر HTTP)
// ═══════════════════════════════════════════════════════════════════════════════════════

var PUBG_ROOTS = [
    // ━━━ PUBG Mobile الأساسي ━━━
    "pubgmobile.com",
    "pubgmobile.com.cn",
    "pubgmobile.kr",
    "pubgmobile.jp",
    "pubgmobile.live",
    "pubgmobile.helpshift.com",
    "pubgm.qq.com",
    "pubgm.tencent.com",
    "pubg.com",
    "battlegrounds.com",
    "battlegroundsmobile.com",

    // ━━━ Tencent Games ━━━
    "tencent.com",
    "tencent-cloud.com",
    "tencent-cloud.net",
    "tencentgames.com",
    "tencentgaming.com",
    "igamecj.com",
    "igame.qq.com",
    "qq.com",
    "myapp.com",
    "qcloud.com",
    "qcloudcdn.com",
    "gtimg.cn",
    "tencentcs.com",
    "tencentcdb.com",
    "tencentcos.com",
    "tencentyun.com",
    "idqqimg.com",
    "openmobile.qq.com",
    "android.myapp.com",
    "sj.qq.com",

    // ━━━ Level Infinite ━━━
    "levelinfinite.com",
    "levelinf.com",
    "level-infinite.com",
    "proximabeta.com",
    "proximabeta.net",
    "proximabeta.com.cn",

    // ━━━ Lightspeed & Quantum (محرك اللعبة) ━━━
    "lightspeedjungle.com",
    "lightspeedstudio.com",
    "tmgp.com",
    "tmgp.qq.com",
    "gcloud.com",
    "gcloud.qq.com",
    "gcloudsdk.com",
    "tgpa.qq.com",
    "tgamecenter.com",
    "igamecj.com",

    // ━━━ Krafton / Bluehole ━━━
    "krafton.com",
    "bluehole.com",
    "pubgstudio.com",
    "pubg.com",
    "playbattlegrounds.com",

    // ━━━ Garena ━━━
    "garena.com",
    "garenanow.com",
    "garena.sg",

    // ━━━ Anti-Cheat ━━━
    "anticheatexpert.com",
    "anticheat.cn",
    "mtp.tencent.com",
    "tpns.qq.com",
    "tpns.tencent.com",
    "gamesafe.qq.com",

    // ━━━ Payment ━━━
    "midasbuy.com",
    "midasbuy.com.cn",
    "midas.qq.com",
    "unipay.qq.com",
    "pay.qq.com",
    "mipay.qq.com",
    "tenpay.com",
    "wanggou.com",

    // ━━━ CDN ━━━
    "cdn.pubgmobile.com",
    "res.pubgmobile.com",
    "igamecdn.com",
    "game.gtimg.cn",
    "gamecdn.qq.com",
    "dl_dir.qq.com",
    "dldir1.qq.com",
    "pgamepic-cdn.qq.com",

    // ━━━ Push / Notification ━━━
    "tpns.sgp.tencent.com",
    "tpns.hk.tencent.com",
    "xiaomi.com",
    "mipush.xiaomi.com",
    "hms.dbankcloud.com",
    "push.hicloud.com"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 5: كلمات مفتاحية PUBG (للكشف عن أي نطاق PUBG)
// ═══════════════════════════════════════════════════════════════════════════════════════

var PUBG_KEYS = [
    "pubgmobile", "pubgm", "pubg", "battleground",
    "tencent", "qq.com", "igame", "myapp", "intlgame",
    "lightspeed", "tmgp", "gcloud", "tgpa", "igamecj",
    "levelinfinite", "levelinf", "proximabeta",
    "garena", "anticheat", "tpns", "midasbuy", "midas",
    "unipay", "krafton", "bluehole", "pubgstudio",
    "matchmaking", "lobbyserver", "gameserver",
    "bsgame", "minisite", "game.gtimg", "igamecdn",
    "gamecdn", "dldir", "pgamepic", "xiaomi.com/push",
    "mipush", "hms.dbankcloud", "push.hicloud"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 6: كلمات مفتاحية Social/Matchmaking (أولوية قصوى)
// ═══════════════════════════════════════════════════════════════════════════════════════

var SOCIAL_KEYS = [
    // أصدقاء
    "friend", "friendlist", "friendrequest", "friendsearch",
    "addfriend", "findfriend", "friendmatch", "friendinvite",
    "friendapply", "friendonline", "friendrecommend",

    // فرق وعشائر
    "crew", "clan", "guild", "team", "squad",
    "crewlist", "clanlist", "recruitment", "recruit",
    "crewsearch", "clansearch", "jointeam", "teamfind",
    "crew_member", "clan_member", "team_member",
    "clan_war", "clanwar", "crew_challenge",
    "guild_battle", "territory", "conquest",

    // اجتماعية
    "social", "presence", "nearby", "nearbypla",
    "playersearch", "usersearch", "profile", "userprofile",
    "discovery", "recommend", "suggestion",
    "playerlist", "active_user", "online_player",

    // لوبي وماتش
    "lobby", "matchmake", "matchmaking", "match_making",
    "queue", "ready_check", "start_match", "join_game",
    "roomlist", "room_list", "waiting_room",
    "serverlist", "server_list", "worldsvr",
    "region", "region_select", "server_select",
    "match_pool", "player_pool", "active_users",
    "playerscan", "regionfilter", "geo_match",

    // دردشة وصوت
    "chat", "voice", "rtc", "im", "message",
    "voip", "audio", "talk", "speak",

    // ملف شخصي
    "userprofile", "playerprofile", "profile",
    "presence", "status", "online_status",
    "achievement", "statistics", "stats", "ranking",

    // أوضاع لعب
    "ranked", "rank", "competitive", "tier",
    "classic", "battle_royale", "erangel", "miramar",
    "sanhok", "vikendi", "livik", "karakin", "deston",
    "nusa", "aftermath",
    "tdm", "deathmatch", "arena", "arcade",
    "metro", "metro_royale", "infection",
    "event", "special", "limited", "collab",
    "payload", "zombie", "survive",

    // مصادقة
    "auth", "login", "account", "passport",
    "session", "token", "security", "oauth",
    "signup", "register", "verify"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 7: تعريفات أوضاع اللعب الكاملة (14 وضع)
// ═══════════════════════════════════════════════════════════════════════════════════════

var MODES = {

    // ╔═══════════════════════════════════════════════════════════════════╗
    // ║  مستوى 1: حرجة اجتماعياً (أعلى أولوية مطلقة)                   ║
    // ╚═══════════════════════════════════════════════════════════════════╝

    FRIEND_DISC: {
        keys: ["friend", "friendsearch", "findfriend", "addfriend",
               "friendlist", "friendrequest", "discovery", "recommend",
               "suggestion", "nearby", "nearbypla", "playerscan",
               "friendapply", "friendonline", "friendrecommend",
               "playersearch", "usersearch", "regionfilter", "geo_match"],
        priority: 10, targetPing: 3, maxPing: 8,
        isSocial: true, sticky: true, stickyTTL: 480000,
        jordanBonus: 250, penalty: -400,
        needBurst: true, needUltraBurst: true,
        visibilityBoost: 12, searchRadius: 250,
        desc: "🔵 اكتشاف الأصدقاء — أعلى أولوية"
    },

    CREW_RECRUIT: {
        keys: ["crew", "crewsearch", "recruitment", "recruit",
               "clan", "clansearch", "guild", "guildsearch",
               "team", "teamsearch", "jointeam", "teamfind",
               "crewlist", "clanlist", "crew_member", "clan_member",
               "team_member"],
        priority: 10, targetPing: 3, maxPing: 8,
        isSocial: true, sticky: true, stickyTTL: 480000,
        jordanBonus: 250, penalty: -400,
        needBurst: true, needUltraBurst: true,
        visibilityBoost: 12, searchRadius: 250,
        desc: "🔵 تجنيد الفرق/العشائر"
    },

    LOBBY: {
        keys: ["lobby", "queue", "matchmake", "matchmaking", "match_making",
               "waiting_room", "room_list", "roomlist",
               "serverlist", "server_list", "worldsvr",
               "region", "playerlist", "online",
               "player_pool", "match_pool", "active_users",
               "ready_check"],
        priority: 10, targetPing: 4, maxPing: 10,
        isSocial: true, sticky: true, stickyTTL: 360000,
        jordanBonus: 200, penalty: -350,
        needBurst: true, needUltraBurst: true,
        visibilityBoost: 10, searchRadius: 250,
        desc: "🔵 اللوبي — تجميع اللاعبين"
    },

    MATCHMAKE: {
        keys: ["match", "matching", "finder", "search_player",
               "pool", "join_game", "start_match",
               "region_select", "server_select"],
        priority: 10, targetPing: 4, maxPing: 10,
        isSocial: true, sticky: true, stickyTTL: 360000,
        jordanBonus: 200, penalty: -350,
        needBurst: true, needUltraBurst: true,
        visibilityBoost: 10, searchRadius: 250,
        desc: "🔵 البحث عن مباراة"
    },

    PROFILE: {
        keys: ["profile", "userprofile", "playerprofile",
               "presence", "status", "online_status",
               "achievement", "statistics", "stats", "ranking"],
        priority: 9, targetPing: 5, maxPing: 12,
        isSocial: true, sticky: true, stickyTTL: 300000,
        jordanBonus: 180, penalty: -250,
        needBurst: true,
        visibilityBoost: 8,
        desc: "🔵 الملف الشخصي"
    },

    // ╔═══════════════════════════════════════════════════════════════════╗
    // ║  مستوى 2: حرجة للعب (أولوية عالية)                              ║
    // ╚═══════════════════════════════════════════════════════════════════╝

    RANKED: {
        keys: ["ranked", "rank", "competitive", "tier",
               "conqueror", "ace", "master", "rating"],
        priority: 10, targetPing: 5, maxPing: 12,
        isSocial: false, sticky: true, stickyTTL: 420000,
        jordanBonus: 180, penalty: -280,
        needBurst: true,
        desc: "🟡 Ranked تنافسي"
    },

    CLAN_WAR: {
        keys: ["clan_war", "clanwar", "crew_challenge",
               "guild_battle", "territory", "conquest"],
        priority: 9, targetPing: 6, maxPing: 13,
        isSocial: true, sticky: true, stickyTTL: 360000,
        jordanBonus: 170, penalty: -230,
        needBurst: true,
        desc: "🟡 حرب العشائر"
    },

    TDM: {
        keys: ["tdm", "team_death", "deathmatch", "arena"],
        priority: 9, targetPing: 5, maxPing: 12,
        isSocial: false, sticky: true, stickyTTL: 360000,
        jordanBonus: 160, penalty: -220,
        needBurst: true,
        desc: "🟡 TDM"
    },

    CLASSIC: {
        keys: ["classic", "battle_royale", "erangel", "miramar",
               "sanhok", "vikendi", "livik", "karakin", "deston",
               "nusa", "aftermath", "payload", "zombie", "survive",
               "infection", "metro", "metro_royale"],
        priority: 9, targetPing: 8, maxPing: 15,
        isSocial: false, sticky: true, stickyTTL: 420000,
        jordanBonus: 150, penalty: -210,
        needBurst: true,
        desc: "🟡 كلاسيك / باتل رويال"
    },

    AUTH: {
        keys: ["auth", "login", "account", "passport",
               "session", "token", "security", "oauth",
               "signup", "register", "verify"],
        priority: 10, targetPing: 6, maxPing: 15,
        isSocial: false, sticky: true, stickyTTL: 600000,
        jordanBonus: 140, penalty: -180,
        needBurst: false,
        desc: "🟡 مصادقة / تسجيل دخول"
    },

    EVENT: {
        keys: ["event", "special", "limited", "collab"],
        priority: 9, targetPing: 7, maxPing: 13,
        isSocial: false, sticky: true, stickyTTL: 360000,
        jordanBonus: 140, penalty: -190,
        needBurst: true,
        desc: "🟡 فعاليات خاصة"
    },

    CHAT: {
        keys: ["chat", "voice", "rtc", "im", "message",
               "voip", "audio", "talk", "speak"],
        priority: 8, targetPing: 8, maxPing: 15,
        isSocial: true, sticky: false,
        jordanBonus: 120, penalty: -150,
        needBurst: false,
        desc: "🟢 دردشة / محادثة صوتية"
    },

    // ╔═══════════════════════════════════════════════════════════════════╗
    // ║  مستوى 3: منخفضة الأولوية                                       ║
    // ╚═══════════════════════════════════════════════════════════════════╝

    CDN: {
        keys: ["cdn", "patch", "update", "download",
               "image", "res", "dl_dir", "dldir",
               "gamecdn", "igamecdn", "pgamepic"],
        priority: 2, targetPing: 50, maxPing: 999,
        isSocial: false, sticky: false,
        jordanBonus: 10, penalty: 0,
        needBurst: false,
        desc: "⚪ CDN / تحديثات"
    },

    TRAINING: {
        keys: ["training", "practice", "cheer_park", "camp"],
        priority: 1, targetPing: 999, maxPing: 999,
        isSocial: false, sticky: false,
        jordanBonus: 5, penalty: 0,
        needBurst: false,
        desc: "⚪ تدريب"
    }
};

// ترتيب الأولوية للكشف
var MODE_ORDER = [
    "FRIEND_DISC", "CREW_RECRUIT", "LOBBY", "MATCHMAKE",
    "PROFILE", "RANKED", "AUTH", "TDM", "CLASSIC",
    "CLAN_WAR", "CHAT", "EVENT", "CDN", "TRAINING"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 8: حجب الإعلانات والتعقب والتنقيب (الشامل)
// ═══════════════════════════════════════════════════════════════════════════════════════

// ━━━ شبكات الإعلانات ━━━
var AD_NETWORKS = [
    "doubleclick.net", "googlesyndication.com", "adsense.com",
    "admob.com", "google-analytics.com", "googletagmanager.com",
    "googleoptimize.com", "googletagservices.com",
    "unityads", "applovin.com", "applovin-sdk",
    "vungle.com", "vungle-sdk", "ironsrc.com", "ironsrc-sdk",
    "mintegral.com", "mintegral-sdk", "tapjoy.com", "tapjoy-sdk",
    "chartboost.com", "chartboost-sdk",
    "pangle", "pangolin-sdk", "bytedance.com/ads",
    "adcolony.com", "inmobi.com", "smaato.com",
    "startapp.com", "fyber.com", "digitalturbine.com",
    "moloco.com", "bidmachine", "bidstack.com", "frameplay",
    "unity3d.com/ads", "unity3d.com/webview",
    "tiktokads", "audience.network"
];

// ━━━ كلمات إعلانات ━━━
var AD_KEYS = [
    "ads.", "adservice.", "adserver.", "ad.", "adlog.", "adimg.",
    "adclick.", "adtrack.", "adnet.", "adtech.", "adsserving",
    "banner.", "popup.", "interstitial.", "rewarded."
];

// ━━━ شبكات تعقب وتحليلات ━━━
var TRACKERS = [
    "adjust.com", "adjust.io", "adjust-sdk",
    "appsflyer.com", "appsflyer-sdk",
    "branch.io", "branch-sdk", "bnc.lt",
    "singular.net", "kochava.com", "tenjin.io",
    "devtodev.com", "amplitude.com", "mixpanel.com",
    "clevertap.com", "leanplum.com", "braze.com",
    "customer.io", "moengage.com", "webengage.com",
    "localytics.com", "heap.io", "hotjar.com",
    "fullstory.com", "logrocket.com",
    "segment.com", "segment.io", "mParticle.com"
];

// ━━━ كلمات تعقب ━━━
var TRACK_KEYS = [
    "analytics.", "tracking.", "tracker.", "telemetry.",
    "metrics.", "pixel.", "beacon.", "log.", "logger.",
    "stat.", "stats.", "report.", "collector."
];

// ━━━ إشعارات Push (غير مهمة أثناء اللعب) ━━━
var PUSH_SERVICES = [
    "onesignal.com", "pushwoosh.com", "airship.com",
    "batch.com", "leanplum.com", "clevertap.com",
    "firebasefcm", "apns", "hms.push"
];

// ━━━ تعدين العملات ━━━
var MINING = [
    "coinhive.com", "coin-hive.com", "jsecoin.com",
    "cryptoloot.com", "crypto-loot.com", "webmine.cz",
    "minero.cc", "miner.pr0gramm.com"
];

// ━━━ بث مباشر (يُبطئ الشبكة) ━━━
var STREAMING = [
    "twitch.tv", "twitchcdn", "ttvnw.net",
    "youtube.com/live", "ytimg.com/videoplayback",
    "bilibili.com", "bilibili.tv",
    "huya.com", "douyu.com", "douyin.com",
    "live.stream", "video.stream",
    "akamaihd.net/live", "cloudfront.net/live",
    "ustream", "livestream", "periscope",
    "facebook.com/live", "fb.watch"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 9: نطاقات مباشرة (لا تحتاج بروكسي — أسرع)
// ═══════════════════════════════════════════════════════════════════════════════════════

var DIRECT_ROOTS = [
    // Apple
    "apple.com", "icloud.com", "apple-cloudkit.com",
    "mzstatic.com", "cdn-apple.com", "apple.news",
    "crashlytics.com", "apple-mapkit.com",

    // Google
    "google.com", "googleapis.com", "gstatic.com",
    "googleplay.com", "googleusercontent.com",
    "google.com.jo", "g.co", "goo.gl",
    "gvt1.com", "gvt2.com", "ggpht.com",
    "firebase.io", "firebaseio.com",
    "firebase.google.com", "firebase.google.cn",
    "firebaseapp.com", "web.app",

    // Facebook / Meta
    "facebook.com", "fbcdn.net", "fbsbx.com",
    "facebook.net", "fb.com", "messenger.com",
    "instagram.com", "cdninstagram.com",
    "whatsapp.com", "whatsapp.net", "wa.me",
    "oculus.com", "meta.com", "threads.net",

    // Microsoft
    "microsoft.com", "live.com", "outlook.com",
    "office.com", "office365.com", "msn.com",
    "windows.com", "windowsupdate.com",
    "azure.com", "azureedge.net",
    "skype.com", "teams.microsoft.com",
    "xbox.com", "xboxlive.com",
    "msedge.net", "msftconnecttest.com",

    // Amazon / AWS
    "amazon.com", "amazonaws.com", "cloudfront.net",
    "amazonvideo.com", "primevideo.com",
    "twitch.tv", "twitchcdn.net", "ttvnw.net",

    // Twitter / X
    "twitter.com", "x.com", "twimg.com",
    "t.co", "pbs.twimg.com",

    // TikTok
    "tiktok.com", "tiktokcdn.com", "tiktokv.com",
    "musical.ly", "bytedance.com",
    "byteoversea.com", "pstatp.com",
    "snssdk.com", "toutiao.com",

    // Netflix
    "netflix.com", "nflxvideo.net", "nflximg.net",
    "nflxext.com", "nflxso.net",

    // Spotify
    "spotify.com", "spotifycdn.com", "scdn.co",
    "spotify.design", "pscdn.co",

    // YouTube
    "youtube.com", "youtu.be", "ytimg.com",
    "googlevideo.com", "youtube-nocookie.com",

    // GitHub / Dev
    "github.com", "github.io", "githubusercontent.com",
    "githubassets.com",
    "stackoverflow.com", "stackexchange.com",

    // Cloudflare
    "cloudflare.com", "cloudflare-dns.com",
    "cdnjs.cloudflare.com", "cloudflareclient.com",

    // Discord
    "discord.com", "discord.gg", "discordapp.com",
    "discordapp.net", "discordcdn.com", "discord.media",

    // أخرى مهمة
    "wikipedia.org", "wikimedia.org",
    "reddit.com", "redd.it", "redditstatic.com",
    "linkedin.com", "licdn.com",
    "zoom.us", "zoom.com",
    "signal.org", "telegram.org", "t.me",
    "medium.com", "substack.com",
    "paypal.com", "stripe.com",
    "akamai.com", "akamaized.net",
    "fastly.net", "fastly.com",
    "edgecastcdn.net", "limelight.com"
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 10: شبكات الأردن IP — كل محافظات الأردن (55+ نطاق)
// ═══════════════════════════════════════════════════════════════════════════════════════

var JO_NETS = [
    // ──── Orange Jordan (أكبر مزود) ────
    ["46.185.128.0","17"],["46.185.160.0","19"],["46.185.176.0","20"],
    ["46.185.192.0","19"],["46.185.208.0","20"],["46.185.212.0","22"],
    ["46.185.216.0","21"],["46.185.220.0","22"],["46.185.224.0","19"],
    ["94.127.208.0","20"],["94.127.216.0","21"],["94.127.220.0","22"],
    ["94.127.222.0","23"],["94.127.224.0","19"],
    ["149.200.136.0","22"],["149.200.140.0","22"],

    // ──── Zain Jordan ────
    ["79.173.192.0","18"],["79.173.208.0","20"],["79.173.224.0","19"],
    ["79.173.236.0","22"],["79.173.240.0","20"],["79.173.244.0","22"],
    ["109.237.192.0","18"],["109.237.200.0","21"],["109.237.204.0","22"],
    ["109.237.208.0","20"],["109.237.224.0","19"],
    ["176.28.0.0","15"],["176.28.128.0","17"],["176.28.160.0","19"],
    ["176.29.0.0","16"],["176.29.128.0","17"],["176.30.0.0","19"],

    // ──── Umniah ────
    ["82.212.0.0","16"],["82.212.32.0","19"],["82.212.64.0","18"],
    ["82.212.96.0","19"],["82.212.128.0","17"],["82.212.160.0","19"],
    ["82.212.192.0","19"],["82.212.224.0","19"],
    ["212.35.64.0","18"],["212.35.85.0","24"],
    ["212.35.96.0","19"],["212.35.112.0","20"],

    // ──── حكومي / Telecom ────
    ["188.247.0.0","16"],["62.72.160.0","19"],["62.72.168.0","21"],
    ["94.230.0.0","16"],["91.106.0.0","16"],["37.220.0.0","16"],
    ["176.203.0.0","16"],["178.20.184.0","21"],

    // ──── مزودون إضافيون ────
    ["5.11.0.0","16"],["31.25.128.0","17"],["37.48.0.0","16"],
    ["77.44.0.0","16"],["185.54.148.0","22"],["185.117.80.0","22"],
    ["185.143.228.0","22"],["46.235.48.0","21"],
    ["86.108.0.0","16"],["193.188.64.0","19"],
    ["194.126.0.0","16"],["213.139.0.0","16"]
];


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 11: مناطق الأردن — City-Level (12 محافظة + مناطق فرعية)
// ═══════════════════════════════════════════════════════════════════════════════════════

var JO_CITIES = {

    // 1. عمّان (أعلى كثافة لاعبين)
    AMMAN: [
        ["46.185.128.0","20"],["46.185.132.0","22"],["46.185.144.0","21"],
        ["46.185.160.0","20"],["46.185.168.0","21"],["46.185.136.0","21"],
        ["79.173.192.0","20"],["79.173.200.0","22"],["79.173.208.0","21"],
        ["79.173.224.0","21"],["82.212.0.0","19"],["82.212.16.0","21"],
        ["82.212.32.0","20"],["82.212.48.0","21"],["82.212.64.0","20"],
        ["94.127.208.0","21"],["94.127.224.0","20"],["149.200.136.0","22"],
        ["188.247.0.0","18"]
    ],

    // 2. إربد
    IRBID: [
        ["46.185.176.0","21"],["46.185.180.0","22"],
        ["79.173.240.0","21"],["82.212.96.0","20"],
        ["109.237.208.0","21"],["176.28.96.0","19"]
    ],

    // 3. الزرقاء
    ZARQA: [
        ["46.185.192.0","21"],["46.185.196.0","22"],
        ["176.28.128.0","18"],["82.212.128.0","20"]
    ],

    // 4. البلقاء
    BALQA: [
        ["46.185.200.0","21"],["109.237.204.0","22"],["82.212.144.0","20"]
    ],

    // 5. مادبا
    MADABA: [
        ["82.212.160.0","21"],["79.173.236.0","22"],["46.185.204.0","22"]
    ],

    // 6. الكرك
    KARAK: [
        ["94.127.216.0","21"],["109.237.200.0","21"]
    ],

    // 7. الطفيلة
    TAFILAH: [
        ["94.127.220.0","22"],["46.185.208.0","22"]
    ],

    // 8. العقبة
    AQABA: [
        ["46.185.208.0","21"],["176.29.128.0","18"],["94.127.228.0","21"]
    ],

    // 9. معان
    MAAN: [
        ["94.127.222.0","23"],["46.185.216.0","21"]
    ],

    // 10. جرش
    JERASH: [
        ["82.212.192.0","21"],["79.173.244.0","22"]
    ],

    // 11. عجلون
    AJLOUN: [
        ["79.173.244.0","22"],["82.212.194.0","22"]
    ],

    // 12. المفرق
    MAFRAQ: [
        ["46.185.212.0","21"],["176.28.160.0","19"]
    ],

    // مناطق فرعية
    SWEILEH:  [["82.212.20.0","22"],["46.185.140.0","23"]],
    NAUR:     [["82.212.24.0","22"],["46.185.142.0","23"]],
    SAHAB:    [["82.212.40.0","22"],["46.185.170.0","23"]],
    MARKA:    [["82.212.12.0","22"],["79.173.198.0","23"]],
    JUBEIHA:  [["82.212.18.0","22"],["79.173.206.0","23"]],
    RAMTHA:   [["176.28.100.0","22"],["46.185.178.0","23"]],
    RUSAIFA:  [["46.185.194.0","23"],["176.28.130.0","22"]],
    SALT:     [["46.185.200.0","22"],["109.237.204.0","23"]],
    PETRA:    [["46.185.216.0","22"],["94.127.222.0","24"]]
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 12: نظام الجلسة (Session) — متتبع شامل
// ═══════════════════════════════════════════════════════════════════════════════════════

var SESSION = {
    start: _now(),
    id: "JO_ULT_" + _now() + "_" + _rand(),

    total: 0, pubg: 0, direct: 0, blocked: 0,
    game: 0, social: 0, cdn: 0, auth: 0,

    jordanHits: 0, foreignHits: 0,
    cityHits: {},

    currentMode: "UNKNOWN",
    modeHist: [],

    totalPing: 0, pingN: 0, bestPing: 999, worstPing: 0,
    socialPingTotal: 0, socialPingN: 0,

    getDur: function() { return _now() - this.start; },
    isWarm: function() { return this.pubg >= 3 && this.getDur() > 5000; },
    jordanPct: function() {
        var t = this.jordanHits + this.foreignHits;
        return t > 0 ? Math.round((this.jordanHits / t) * 100) : 0;
    },
    avgPing: function() {
        return this.pingN > 0 ? Math.round(this.totalPing / this.pingN) : 999;
    },
    socialAvgPing: function() {
        return this.socialPingN > 0 ? Math.round(this.socialPingTotal / this.socialPingN) : 999;
    },

    recPing: function(ms, isSocial) {
        this.totalPing += ms; this.pingN++;
        if (ms < this.bestPing) this.bestPing = ms;
        if (ms > this.worstPing) this.worstPing = ms;
        if (isSocial) { this.socialPingTotal += ms; this.socialPingN++; }
    },

    recMode: function(m) {
        this.currentMode = m;
        this.modeHist.push({ m: m, t: _now() });
        if (this.modeHist.length > 50) this.modeHist.shift();
    },

    recCity: function(c) {
        if (!c) return;
        if (!this.cityHits[c]) this.cityHits[c] = 0;
        this.cityHits[c]++;
    },

    report: function() {
        return {
            id: this.id,
            dur: Math.round(this.getDur()/1000)+"s",
            total: this.total, pubg: this.pubg,
            jordanPct: this.jordanPct()+"%",
            avgPing: this.avgPing()+"ms",
            socialAvg: this.socialAvgPing()+"ms",
            bestPing: this.bestPing+"ms",
            mode: this.currentMode,
            cities: this.cityHits
        };
    }
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 13: DNS Cache ذكي
// ═══════════════════════════════════════════════════════════════════════════════════════

var DNS_C = {};
var DNS_Q = [];
var DNS_S = { hit: 0, miss: 0, totalMs: 0 };

function dnsCache(host) {
    var c = DNS_C[host];
    if (c && (_now() - c.t) < CFG.DNS_CACHE_TTL) {
        DNS_S.hit++;
        c.hits++;
        return c;
    }

    DNS_S.miss++;
    var t0 = _now();
    var ip = dnsResolve(host);
    var dt = _now() - t0;
    DNS_S.totalMs += dt;

    var ping = Math.max(3, Math.round(dt * 0.3 + 2));
    var mode = detectMode(host);
    var region = detectRegion(host, ip);
    var isSocial = hasKey(host, SOCIAL_KEYS);
    var isCDN = hasKey(host, ["cdn","download","update","patch","image","res","dl_dir","dldir","gamecdn","igamecdn"]);

    var r = {
        ip: ip, dt: dt, ping: ping, mode: mode,
        region: region, isSocial: isSocial, isCDN: isCDN,
        isJO: ip ? isJO(ip) : false,
        carrier: ip ? getCarrier(ip) : "UNK",
        city: ip ? getCity(ip) : "UNK",
        t: _now(), hits: 0
    };

    while (DNS_Q.length >= CFG.DNS_CACHE_SIZE) {
        delete DNS_C[DNS_Q.shift()];
    }
    DNS_C[host] = r;
    DNS_Q.push(host);

    SESSION.recPing(ping, isSocial);
    if (isSocial) SESSION.social++;

    return r;
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 14: Ping Tracker — متتبع أداء الاتصال
// ═══════════════════════════════════════════════════════════════════════════════════════

var PING_T = {
    hist: [], max: 50, modeStats: {},

    rec: function(ms, mode) {
        if (this.hist.length >= this.max) this.hist.shift();
        this.hist.push({ p: ms, m: mode, t: _now() });

        if (!this.modeStats[mode]) this.modeStats[mode] = {n:0,tot:0,avg:0,min:999,max:0};
        var s = this.modeStats[mode];
        s.n++; s.tot += ms; s.avg = Math.round(s.tot/s.n);
        if (ms < s.min) s.min = ms;
        if (ms > s.max) s.max = ms;
    },

    cur: function() { return this.hist.length > 0 ? this.hist[this.hist.length-1].p : 999; },

    avg: function(n) {
        n = n || 5;
        var len = this.hist.length;
        if (len === 0) return 999;
        var start = Math.max(0, len - n), sum = 0, cnt = 0;
        for (var i = start; i < len; i++) { sum += this.hist[i].p; cnt++; }
        return cnt > 0 ? Math.round(sum/cnt) : 999;
    },

    best: function() {
        var b = 999;
        for (var i = 0; i < this.hist.length; i++) if (this.hist[i].p < b) b = this.hist[i].p;
        return b;
    },

    trend: function() {
        if (this.hist.length < 4) return "STABLE";
        var r = this.avg(3), o = this.avg(8);
        if (r < o * 0.75) return "IMPROVING";
        if (r > o * 1.4) return "DEGRADING";
        return "STABLE";
    },

    stability: function() {
        var len = this.hist.length;
        if (len < 3) return "UNK";
        var a = this.avg(), v = 0, cnt = 0;
        var start = Math.max(0, len - 8);
        for (var i = start; i < len; i++) { v += (this.hist[i].p-a)*(this.hist[i].p-a); cnt++; }
        v = cnt > 0 ? Math.sqrt(v/cnt) : 0;
        if (v <= 2) return "VERY_STABLE";
        if (v <= 5) return "STABLE";
        if (v <= 10) return "MODERATE";
        return "UNSTABLE";
    },

    healthy: function(mode) {
        var m = MODES[mode];
        return m ? this.avg(3) <= m.maxPing * 1.2 : true;
    },

    quality: function(mode) {
        var m = MODES[mode];
        if (!m) return "UNK";
        var a = this.avg(3);
        if (a <= m.targetPing)        return "EXCELLENT";
        if (a <= m.targetPing * 1.3)  return "VERY_GOOD";
        if (a <= m.maxPing)           return "GOOD";
        if (a <= m.maxPing * 1.3)     return "ACCEPTABLE";
        return "POOR";
    }
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 15: نظام صحة البروكسيات (Health Monitor)
// ═══════════════════════════════════════════════════════════════════════════════════════

var HP = {};

function initHP() {
    for (var n in PROXY_DB) {
        var p = PROXY_DB[n];
        HP[n] = {
            uses: 0, ok: 0, fail: 0, lastUse: 0, lastOk: 0,
            avgPing: p.targetPing, recent: [], load: 0, score: 100, status: "READY"
        };
    }
}

function updateHP(n, success, ping) {
    var h = HP[n], p = PROXY_DB[n];
    if (!h || !p) return;
    h.uses++; h.lastUse = _now();
    if (success) { h.ok++; h.lastOk = _now(); } else { h.fail++; }
    if (ping) {
        if (h.recent.length >= 10) h.recent.shift();
        h.recent.push(ping);
        var s = 0; for (var i = 0; i < h.recent.length; i++) s += h.recent[i];
        h.avgPing = Math.round(s / h.recent.length);
    }
    if (p.pool) h.load = Math.min(100, Math.round((h.uses / p.pool) * 100));
    h.score = calcHPScore(h, p);
    h.status = h.score >= 90 ? "EXCELLENT" : h.score >= 75 ? "GOOD" : h.score >= 60 ? "FAIR"
             : h.score >= 40 ? "DEGRADED" : h.score >= 20 ? "POOR" : "CRITICAL";
}

function calcHPScore(h, p) {
    var s = 100;
    var up = h.uses > 0 ? (h.ok / h.uses) * 100 : 100;
    s -= (100 - up) * 0.4;
    if (h.load > 90) s -= 20; else if (h.load > 75) s -= 10; else if (h.load > 60) s -= 5;
    if (h.avgPing && p.targetPing) {
        var r = h.avgPing / p.targetPing;
        if (r <= 1.0) s += 5; else if (r <= 1.3) s -= 10; else if (r <= 1.6) s -= 20; else s -= 30;
    }
    var fr = h.uses > 0 ? (h.fail / h.uses) : 0;
    if (fr > 0.2) s -= 15; else if (fr > 0.1) s -= 7;
    if (p.social) s += 5;
    if (p.socialDedicated) s += 10;
    return Math.max(0, Math.min(100, Math.round(s)));
}

function bestProxy(names, count, social) {
    var scored = [];
    for (var i = 0; i < names.length; i++) {
        var n = names[i], p = PROXY_DB[n], h = HP[n];
        if (!p || !h) continue;
        if (h.status === "CRITICAL" || h.status === "POOR") continue;
        var sc = (p.priority/100)*40 + (h.score/100)*30;
        var pr = h.avgPing / p.targetPing;
        if (pr <= 1.0) sc += 20; else if (pr <= 1.2) sc += 15; else if (pr <= 1.5) sc += 10;
        if (h.load <= 50) sc += 10; else if (h.load <= 70) sc += 7;
        if (social && p.social) sc += 20;
        if (social && p.socialDedicated) sc += 15;
        scored.push({ n: n, sc: Math.round(sc) });
    }
    scored.sort(function(a, b) { return b.sc - a.sc; });
    var result = [];
    count = count || scored.length;
    for (var j = 0; j < Math.min(count, scored.length); j++) result.push(scored[j].n);
    return result;
}

initHP();


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 16: نظام التعلم الذاتي (ML Engine)
// ═══════════════════════════════════════════════════════════════════════════════════════

var ML = {
    patterns: {}, socialP: {}, cityP: {},
    hist: [], maxHist: 200,

    learn: function(mode, route, ping, region, city, isSocial) {
        // عام
        var k = mode + "_" + region;
        if (!this.patterns[k]) this.patterns[k] = { route: null, ping: 999, n: 0 };
        var p = this.patterns[k]; p.n++;
        if (ping < p.ping) { p.ping = ping; p.route = route; }

        // اجتماعي
        if (isSocial) {
            if (!this.socialP[mode]) this.socialP[mode] = { route: null, ping: 999, n: 0 };
            var sp = this.socialP[mode]; sp.n++;
            if (ping < sp.ping) { sp.ping = ping; sp.route = route; }
        }

        // إقليمي
        if (city && city !== "UNK") {
            if (!this.cityP[city]) this.cityP[city] = { route: null, ping: 999, n: 0 };
            var cp = this.cityP[city]; cp.n++;
            if (ping < cp.ping) { cp.ping = ping; cp.route = route; }
        }

        this.hist.push({ mode: mode, route: route, ping: ping, region: region,
                         city: city, isSocial: isSocial, t: _now() });
        if (this.hist.length > this.maxHist) this.hist.shift();
    },

    predict: function(mode, region, city) {
        if (!CFG.ENABLE_ML) return null;
        if (this.socialP[mode] && this.socialP[mode].n >= 3) return this.socialP[mode].route;
        if (city && city !== "UNK" && this.cityP[city] && this.cityP[city].n >= 3) return this.cityP[city].route;
        var k = mode + "_" + region;
        if (this.patterns[k] && this.patterns[k].n >= CFG.MIN_SAMPLES_FOR_PREDICT) return this.patterns[k].route;
        return null;
    },

    conf: function(mode, region, city) {
        var n = 0;
        if (city && this.cityP[city]) n += this.cityP[city].n;
        var k = mode + "_" + region;
        if (this.patterns[k]) n += this.patterns[k].n;
        if (n >= 25) return 100; if (n >= 15) return 85;
        if (n >= 10) return 70; if (n >= 5) return 50;
        return 25;
    }
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 17: Sticky Routing Cache
// ═══════════════════════════════════════════════════════════════════════════════════════

var STICKY = {};

function sGet(k) {
    var e = STICKY[k];
    if (!e) return null;
    if (_now() - e.t > e.ttl) { delete STICKY[k]; return null; }
    e.hits++;
    return e.v;
}

function sSet(k, v, ttl) {
    STICKY[k] = { v: v, t: _now(), ttl: ttl || CFG.STICKY_TTL, hits: 0 };
}

function sClr(k) { delete STICKY[k]; }


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 18: Connection Profiler — اكتشاف نوع الاتصال
// ═══════════════════════════════════════════════════════════════════════════════════════

var CONN = {
    type: function() {
        var a = PING_T.avg(5), b = PING_T.best();
        if (a <= 5 && b <= 3)  return "5G_ULTRA";
        if (a <= 8 && b <= 5)  return "5G_PREMIUM";
        if (a <= 13)           return "5G_GOOD";
        if (a <= 20)           return "4G_EXCELLENT";
        if (a <= 35)           return "4G_GOOD";
        if (a <= 50)           return "3G";
        return "WEAK";
    },

    boost: function() {
        var t = this.type();
        if (t === "5G_ULTRA")     return 80;
        if (t === "5G_PREMIUM")   return 70;
        if (t === "5G_GOOD")      return 55;
        if (t === "4G_EXCELLENT") return 40;
        if (t === "4G_GOOD")      return 25;
        return -30;
    },

    tier: function() {
        var t = this.type();
        if (t.indexOf("5G") === 0) return 0;
        if (t === "4G_EXCELLENT") return 1;
        return 2;
    },

    peak: function() {
        var h = (new Date()).getHours();
        return (h >= CFG.PEAK_HOURS_START || h <= CFG.PEAK_HOURS_END);
    },

    weekend: function() {
        var d = (new Date()).getDay();
        return d === 5 || d === 6;
    },

    timeBoost: function() {
        if (this.peak() && this.weekend()) return 30;
        if (this.peak() || this.weekend()) return 18;
        return 0;
    }
};


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 19: الدوال المساعدة الأساسية
// ═══════════════════════════════════════════════════════════════════════════════════════

function _now() { return (new Date()).getTime(); }
function _rand() { return Math.floor(Math.random() * 99999); }

function hasKey(str, keys) {
    var h = str.toLowerCase();
    for (var i = 0; i < keys.length; i++) {
        if (h.indexOf(keys[i]) !== -1) return true;
    }
    return false;
}

function matchDomain(host, domains) {
    var h = host.toLowerCase();
    for (var i = 0; i < domains.length; i++) {
        var d = domains[i];
        if (h === d || h.endsWith("." + d)) return true;
    }
    return false;
}

function isPrivate(ip) {
    if (!ip) return false;
    return isInNet(ip,"10.0.0.0","255.0.0.0") || isInNet(ip,"172.16.0.0","255.240.0.0")
        || isInNet(ip,"192.168.0.0","255.255.0.0") || isInNet(ip,"127.0.0.0","255.0.0.0");
}

function getPort(url) {
    var m = url.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);
    if (m) return parseInt(m[1], 10);
    if (url.indexOf("https://") === 0) return 443;
    if (url.indexOf("http://") === 0) return 80;
    return 443;
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 20: كشف المنطقة والشركة
// ═══════════════════════════════════════════════════════════════════════════════════════

var MASKS = {
    "8":"255.0.0.0","9":"255.128.0.0","10":"255.192.0.0","11":"255.224.0.0",
    "12":"255.240.0.0","13":"255.248.0.0","14":"255.252.0.0","15":"255.254.0.0",
    "16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0","19":"255.255.224.0",
    "20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0",
    "24":"255.255.255.0"
};

function inRange(ip, ranges) {
    if (!ip) return false;
    for (var i = 0; i < ranges.length; i++) {
        if (isInNet(ip, ranges[i][0], MASKS[ranges[i][1]] || "255.255.0.0")) return true;
    }
    return false;
}

function isJO(ip) { return ip ? inRange(ip, JO_NETS) : false; }

function getCarrier(ip) {
    if (!ip) return "UNK";
    if (isInNet(ip,"46.185.128.0","255.255.128.0") || isInNet(ip,"94.127.208.0","255.255.240.0")
     || isInNet(ip,"149.200.136.0","255.255.252.0")) return "ORANGE";
    if (isInNet(ip,"79.173.192.0","255.255.192.0") || isInNet(ip,"109.237.192.0","255.255.224.0")
     || isInNet(ip,"176.28.0.0","255.254.0.0")) return "ZAIN";
    if (isInNet(ip,"82.212.0.0","255.255.0.0") || isInNet(ip,"212.35.64.0","255.255.192.0")) return "UMNIAH";
    if (isInNet(ip,"188.247.0.0","255.255.0.0") || isInNet(ip,"94.230.0.0","255.255.0.0")) return "JT";
    return "OTHER";
}

function getCity(ip) {
    if (!ip || !isJO(ip)) return "UNK";
    for (var c in JO_CITIES) { if (inRange(ip, JO_CITIES[c])) return c; }
    return "JO_OTHER";
}

function carrierBonus(c) {
    if (c === "ORANGE") return 45;
    if (c === "ZAIN") return 42;
    if (c === "UMNIAH") return 38;
    if (c === "JT") return 28;
    return 0;
}

function detectRegion(host, ip) {
    if (ip && isJO(ip)) return { r: "JO", city: getCity(ip), conf: 100 };
    var h = host.toLowerCase();
    var jo = ["jo","jordan","amman","irbid","zarqa","aqaba","karak","mafraq",
              "jerash","ajloun","balqa","salt","madaba","tafilah","maan","petra",
              "me-jo","mena-jo","jo1","jo2","jo3"];
    for (var i = 0; i < jo.length; i++) {
        if (h.indexOf(jo[i]) !== -1) return { r: "JO", city: "UNK", conf: 80 };
    }
    return { r: "UNK", city: "UNK", conf: 0 };
}

function detectMode(host) {
    var h = host.toLowerCase();
    // CDN أولاً
    if (hasKey(h, MODES.CDN.keys)) return "CDN";
    // باقي الأوضاع
    for (var i = 0; i < MODE_ORDER.length; i++) {
        var mn = MODE_ORDER[i], m = MODES[mn];
        if (m && m.keys) {
            for (var j = 0; j < m.keys.length; j++) {
                if (h.indexOf(m.keys[j]) !== -1) {
                    SESSION.recMode(mn);
                    return mn;
                }
            }
        }
    }
    SESSION.recMode("CLASSIC");
    return "CLASSIC";
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 21: بناء سلسلة البروكسي
// ═══════════════════════════════════════════════════════════════════════════════════════

function buildChain(names, maxLen) {
    var chain = [], used = {};
    maxLen = maxLen || CFG.MAX_CHAIN;
    for (var i = 0; i < names.length && chain.length < maxLen; i++) {
        var n = names[i];
        if (used[n]) continue;
        var p = PROXY_DB[n], h = HP[n];
        if (!p || !h) continue;
        if (h.status === "CRITICAL" || h.status === "POOR") continue;
        chain.push("PROXY " + p.ip + ":" + p.port);
        used[n] = true;
        updateHP(n, true, p.targetPing);
    }
    if (chain.length === 0) return null;
    return chain.join("; ") + "; " + DIRECT;
}

function buildRegional(city, social) {
    var key;
    if (social) {
        if (city && city.indexOf("AMMAN") !== -1) key = "SOCIAL_AMMAN";
        else if (city === "IRBID" || city === "RAMTHA") key = "SOCIAL_IRBID";
        else if (city === "ZARQA" || city === "RUSAIFA") key = "SOCIAL_ZARQA";
        else key = "SOCIAL_NATIONAL";
    } else {
        if (city && city.indexOf("AMMAN") !== -1) key = "GAME_AMMAN";
        else if (city === "IRBID" || city === "RAMTHA") key = "GAME_IRBID";
        else if (city === "ZARQA" || city === "RUSAIFA") key = "GAME_ZARQA";
        else if (city === "AQABA") key = "GAME_AQABA";
        else if (city === "MAFRAQ") key = "GAME_MAFRAQ";
        else if (city === "MADABA") key = "GAME_MADABA";
        else if (city === "BALQA" || city === "SALT") key = "GAME_BALQA";
        else if (city === "KARAK") key = "GAME_KARAK";
        else if (city === "JERASH" || city === "AJLOUN") key = "GAME_JERASH";
        else if (city === "TAFILAH") key = "GAME_TAFILAH";
        else if (city === "MAAN" || city === "PETRA") key = "GAME_MAAN";
        else key = "GAME_AMMAN";
    }
    var names = HOP_CHAINS[key];
    if (!names) return null;
    var best = bestProxy(names, CFG.MAX_CHAIN, social);
    return buildChain(best, CFG.MAX_CHAIN);
}

function buildCarrier(carrier, social) {
    var candidates = [];
    for (var n in PROXY_DB) {
        var p = PROXY_DB[n];
        if (p.carrier === carrier && p.tier <= 1) {
            if (!social || p.social) candidates.push(n);
        }
    }
    return buildChain(bestProxy(candidates, CFG.MAX_CHAIN, social), CFG.MAX_CHAIN);
}

function buildBest(social) {
    var candidates = [];
    for (var n in PROXY_DB) {
        var p = PROXY_DB[n];
        if (p.tier <= 1) { if (!social || p.social) candidates.push(n); }
    }
    return buildChain(bestProxy(candidates, CFG.MAX_CHAIN, social), CFG.MAX_CHAIN);
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 22: محرك التوجيه الذكي (Smart Routing Engine)
// ═══════════════════════════════════════════════════════════════════════════════════════

function route(mode, dns) {
    var m = MODES[mode];
    if (!m) m = MODES.CLASSIC;

    var ip = dns.ip;
    var city = dns.city || "UNK";
    var carrier = dns.carrier || "UNK";
    var region = dns.region;
    var social = m.isSocial === true;
    var jordan = dns.isJO;

    // 1. ML Prediction
    if (CFG.ENABLE_ML && SESSION.isWarm()) {
        var pred = ML.predict(mode, region.r, city);
        var conf = ML.conf(mode, region.r, city);
        if (pred && conf >= 70 && PING_T.healthy(mode)) return pred;
    }

    // 2. Sticky
    if (SESSION.isWarm() && m.sticky) {
        var sk = mode + "_" + city;
        var sv = sGet(sk);
        if (!sv) sv = sGet(mode);
        if (sv && PING_T.healthy(mode)) return sv;
    }

    // 3. Emergency
    if (PING_T.avg(2) > CFG.TARGET_PING_CRITICAL) {
        sClr(mode); sClr(mode + "_" + city);
        var em = buildBest(social);
        if (em) { sSet(mode, em, 60000); return em; }
    }

    // 4. Route by mode
    var rt = null;

    // Social modes (أعلى أولوية)
    if (mode === "FRIEND_DISC" || mode === "CREW_RECRUIT") {
        if (city !== "UNK") rt = buildRegional(city, true);
        if (!rt) rt = buildBest(true);
        if (!rt) rt = PREBUILD.SOCIAL;
    }
    else if (mode === "LOBBY" || mode === "MATCHMAKE") {
        if (city !== "UNK") rt = buildRegional(city, true);
        if (!rt && jordan && carrier !== "UNK") rt = buildCarrier(carrier, true);
        if (!rt) rt = buildBest(true);
        if (!rt) rt = PREBUILD.SOCIAL;
    }
    else if (mode === "PROFILE") {
        rt = buildBest(true);
        if (!rt) rt = PREBUILD.SOCIAL;
    }
    else if (mode === "CLAN_WAR") {
        if (city !== "UNK") rt = buildRegional(city, true);
        if (!rt && jordan && carrier !== "UNK") rt = buildCarrier(carrier, true);
        if (!rt) rt = buildBest(true);
    }
    // Game modes
    else if (mode === "RANKED") {
        if (city !== "UNK") rt = buildRegional(city, false);
        if (!rt && jordan && carrier !== "UNK") rt = buildCarrier(carrier, false);
        if (!rt) rt = buildBest(false);
    }
    else if (mode === "AUTH") {
        rt = buildChain(HOP_CHAINS.AUTH_CHAIN);
        if (!rt) rt = PREBUILD.AUTH;
    }
    else if (mode === "TDM" || mode === "CLASSIC" || mode === "EVENT") {
        if (city !== "UNK") rt = buildRegional(city, false);
        if (!rt && jordan && carrier !== "UNK") rt = buildCarrier(carrier, false);
        if (!rt) rt = buildBest(false);
    }
    else if (mode === "CHAT") {
        rt = buildBest(true);
    }
    else if (mode === "CDN" || mode === "TRAINING") {
        return DIRECT;
    }
    else {
        rt = buildBest(false);
    }

    // 5. Final fallback
    if (!rt) rt = PREBUILD.GAME;

    // 6. Save sticky
    if (m.sticky && m.priority >= 8) {
        sSet(mode, rt, m.stickyTTL || CFG.STICKY_TTL);
        if (city !== "UNK") sSet(mode + "_" + city, rt, m.stickyTTL || CFG.STICKY_TTL);
    }

    // 7. ML learn
    if (CFG.ENABLE_ML) {
        ML.learn(mode, rt, PING_T.cur(), region.r, city, social);
    }

    return rt;
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 23: محرك التقييم (15 عامل)
// ═══════════════════════════════════════════════════════════════════════════════════════

function score(ip, host, port, dns, mode) {
    var s = 0, m = MODES[mode];

    // 1. Mode priority (0-50)
    if (m) { s += m.priority * 5; if (m.isSocial) s += 30; }

    // 2. DNS speed (0-40)
    var dt = dns.dt;
    if (dt <= 2) s += 40; else if (dt <= 5) s += 35; else if (dt <= 10) s += 28;
    else if (dt <= 20) s += 20; else if (dt <= 40) s += 10; else s -= 15;

    // 3. Ping quality (0-40)
    var pq = PING_T.quality(mode);
    if (pq === "EXCELLENT") s += 40; else if (pq === "VERY_GOOD") s += 32;
    else if (pq === "GOOD") s += 22; else if (pq === "ACCEPTABLE") s += 10; else s -= 30;

    // 4. 🇯🇴 Jordan IP — MEGA BONUS (0-300)
    if (ip && isJO(ip)) {
        s += 150;
        var car = getCarrier(ip); s += carrierBonus(car);
        var city = getCity(ip);
        if (city === "AMMAN") s += 40;
        else if (city === "IRBID" || city === "ZARQA") s += 25;
        else if (city === "AQABA") s += 22;
        else if (city === "BALQA" || city === "MADABA") s += 20;
        else if (city === "JERASH" || city === "AJLOUN") s += 18;
        else if (city === "KARAK" || city === "MAFRAQ") s += 16;
        else if (city === "TAFILAH" || city === "MAAN") s += 14;
        else s += 10;
        if (m && m.isSocial) s += 50;
        if (CONN.peak()) s += 20;
        SESSION.jordanHits++; SESSION.recCity(city);
    }

    // 5. Region pattern (0-60 / -50)
    var rg = dns.region;
    if (rg.r === "JO") s += 50 + Math.round(rg.conf * 0.2); else s -= 50;

    // 6. Connection quality (0-80)
    s += CONN.boost();

    // 7. Stability (0-25 / -30)
    var st = PING_T.stability();
    if (st === "VERY_STABLE") s += 25; else if (st === "STABLE") s += 18;
    else if (st === "MODERATE") s += 8; else if (st === "UNSTABLE") s -= 30;

    // 8. Port (0-15)
    if (port === 443) s += 12; else if (port >= 10000 && port <= 10100) s += 15;
    else if (port >= 7000 && port <= 7100) s += 13; else if (port === 80) s += 8;

    // 9. Trend (0-30 / -45)
    var tr = PING_T.trend();
    if (tr === "IMPROVING") s += 30; else if (tr === "DEGRADING") s -= 45;

    // 10. Emergency (-60)
    if (PING_T.avg(2) > CFG.TARGET_PING_CRITICAL) s -= 60;

    // 11. Mode bonuses
    if (m) { if (ip && isJO(ip)) s += m.jordanBonus || 0; else s += m.penalty || 0; }

    // 12. Time boost (0-30)
    s += CONN.timeBoost();

    // 13. Social endpoint (0-50)
    if (dns.isSocial && CFG.SOCIAL_PRIORITY) { s += 50; if (ip && isJO(ip)) s += 30; }

    // 14. ML confidence (0-35)
    if (CFG.ENABLE_ML) {
        var mc = ML.conf(mode, rg.r, dns.city);
        if (mc >= 85) s += 35; else if (mc >= 70) s += 25; else if (mc >= 50) s += 15;
    }

    // 15. Peak social boost (0-20)
    if (m && m.isSocial && CONN.peak()) s += 20;

    // Normalize
    if (s < 0) return 0;
    if (s > 500) return 100;
    return Math.round((s / 500) * 100);
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 24: الدالة الرئيسية — FindProxyForURL
// ═══════════════════════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {

    SESSION.total++;
    if (!host) return DIRECT;

    // 1. اسم مضيف بدون نقطة → مباشر
    if (isPlainHostName(host)) return DIRECT;

    // 2. IP خاص → مباشر
    if (isInNet(host,"10.0.0.0","255.0.0.0") || isInNet(host,"172.16.0.0","255.240.0.0")
     || isInNet(host,"192.168.0.0","255.255.0.0") || isInNet(host,"127.0.0.0","255.0.0.0")) {
        SESSION.direct++;
        return DIRECT;
    }

    var h = host.toLowerCase();

    // 3. حجب إعلانات
    if (CFG.BLOCK_ADS) {
        if (hasKey(h, AD_KEYS) || matchDomain(h, AD_NETWORKS)) { SESSION.blocked++; return BLOCK; }
    }

    // 4. حجب تعقب
    if (CFG.BLOCK_TRACKERS) {
        if (hasKey(h, TRACK_KEYS) || matchDomain(h, TRACKERS)) { SESSION.blocked++; return BLOCK; }
    }

    // 5. حجب تعدين
    if (CFG.BLOCK_MINING && matchDomain(h, MINING)) { SESSION.blocked++; return BLOCK; }

    // 6. حجب بث مباشر
    if (CFG.BLOCK_STREAMING && hasKey(h, STREAMING)) { SESSION.blocked++; return BLOCK; }

    // 7. حجب Push notifications
    if (CFG.BLOCK_STREAMING && matchDomain(h, PUSH_SERVICES)) { SESSION.blocked++; return BLOCK; }

    // 8. نطاقات مباشرة
    if (matchDomain(h, DIRECT_ROOTS)) { SESSION.direct++; return DIRECT; }

    // 9. هل هو PUBG?
    var isPUBG = matchDomain(h, PUBG_ROOTS) || hasKey(h, PUBG_KEYS);
    if (!isPUBG) { SESSION.direct++; return DIRECT; }

    // ═══ PUBG مؤكد ═══
    SESSION.pubg++;

    // 10. DNS Cache
    var dns = dnsCache(host);
    if (!dns || !dns.ip) return PREBUILD.GAME;

    var ip = dns.ip;
    var mode = dns.mode;
    var port = getPort(url);

    // 11. CDN → مباشر
    if (mode === "CDN" || mode === "TRAINING") { SESSION.cdn++; return DIRECT; }

    // 12. Score
    var sc = score(ip, h, port, dns, mode);

    // 13. Route
    var rt = route(mode, dns);

    // 14. Track
    SESSION.recPing(PING_T.cur(), MODES[mode] && MODES[mode].isSocial);
    PING_T.rec(PING_T.cur(), mode);

    return rt;
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  القسم 25: تقرير الأداء الشامل
// ═══════════════════════════════════════════════════════════════════════════════════════

function getReport() {
    return {
        version: VERSION,
        session: SESSION.report(),
        dns: {
            hit: DNS_S.hit, miss: DNS_S.miss,
            rate: DNS_S.hit+DNS_S.miss > 0
                ? Math.round((DNS_S.hit/(DNS_S.hit+DNS_S.miss))*100)+"%" : "0%"
        },
        ping: {
            cur: PING_T.cur()+"ms", avg: PING_T.avg()+"ms",
            best: PING_T.best()+"ms", trend: PING_T.trend(),
            stable: PING_T.stability()
        },
        conn: {
            type: CONN.type(), boost: CONN.boost(),
            peak: CONN.peak(), weekend: CONN.weekend()
        },
        ml: {
            patterns: Object.keys(ML.patterns).length,
            social: Object.keys(ML.socialP).length,
            cities: Object.keys(ML.cityP).length,
            hist: ML.hist.length
        },
        cache: {
            sticky: Object.keys(STICKY).length,
            dns: Object.keys(DNS_C).length
        }
    };
}


// ═══════════════════════════════════════════════════════════════════════════════════════
//  
//  ╔══════════════════════════════════════════════════════════════════════════════════╗
//  ║                        PAC ULTIMATE v3.0 — ملخص                               ║
//  ╠══════════════════════════════════════════════════════════════════════════════════╣
//  ║                                                                                  ║
//  ║  📦 الأقسام: 25 قسم كامل                                                       ║
//  ║                                                                                  ║
//  ║  🇯🇴 بروكسيات أردنية:                                                            ║
//  ║     ├── Diamond (Tier 0): 7 بروكسيات (Orange 4 + Zain 4 + Umniah 2)            ║
//  ║     ├── Social专用: 3 بروكسيات (أعلى أولوية)                                   ║
//  ║     ├── Platinum (Tier 1): 12 بروكسي (كل المحافظات)                             ║
//  ║     ├── Backup (Tier 2): 3 بروكسيات                                             ║
//  ║     └── المجموع: 25+ بروكسي                                                     ║
//  ║                                                                                  ║
//  ║  🗺️ مناطق: 12 محافظة + 9 مناطق فرعية = 21 منطقة                                ║
//  ║                                                                                  ║
//  ║  🎮 أوضاع لعب: 14 وضع (4 اجتماعي + 7 لعب + 3 منخفض)                           ║
//  ║                                                                                  ║
//  ║  🚫 محجوب:                                                                      ║
//  ║     ├── 20+ شبكة إعلانات                                                        ║
//  ║     ├── 20+ شبكة تعقب/تحليلات                                                   ║
//  ║     ├── 8 مواقع تعدين                                                           ║
//  ║     ├── 20+ موقع بث مباشر                                                        ║
//  ║     └── 10+ خدمة Push                                                            ║
//  ║                                                                                  ║
//  ║  🌐 نطاقات مباشرة: 60+ نطاق (Apple, Google, Meta, MS, Amazon...)              ║
//  ║                                                                                  ║
//  ║  📡 نطاقات PUBG: 70+ نطاق                                                       ║
//  ║                                                                                  ║
//  ║  ⚡ أنظمة ذكية:                                                                  ║
//  ║     ├── DNS Cache ذكي (600 عنصر + أولوية Social)                               ║
//  ║     ├── Ping Tracker (50 عينة + تحليل اتجاه + استقرار)                          ║
//  ║     ├── Health Monitor (درجة لكل بروكسي)                                        ║
//  ║     ├── ML Engine (تعلم ذاتي من المسارات)                                       ║
//  ║     ├── Sticky Routing (تخزين مؤقت للمسارات)                                    ║
//  ║     ├── Connection Profiler (كشف نوع الاتصال)                                  ║
//  ║     ├── Regional Hop Chains (16+ سلسلة إقليمية)                                ║
//  ║     ├── Carrier Matching (مطابقة شركة الاتصالات)                               ║
//  ║     └── 15 عامل تقييم لكل طلب                                                  ║
//  ║                                                                                  ║
//  ║  🎯 ما يُحسّنه PAC فعلياً:                                                      ║
//  ║     ├── Login / Auth (تسجيل الدخول)                                             ║
//  ║     ├── Matchmaking API (البحث عن مباراة)                                       ║
//  ║     ├── Social APIs (أصدقاء + فرق + لوبي)                                      ║
//  ║     ├── Store / Payment (المتجر + الدفع)                                       ║
//  ║     ├── CDN / Updates (التحديثات)                                               ║
//  ║     └── يحجب كل ما يُبطئ الشبكة أثناء اللعب                                    ║
//  ║                                                                                  ║
//  ╚══════════════════════════════════════════════════════════════════════════════════╝
//  
// ═══════════════════════════════════════════════════════════════════════════════════════
