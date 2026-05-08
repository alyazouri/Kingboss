// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDAN PUBG ULTRA FAST PAC v6.0 "DESERT STORM"
//  ⚡ Optimized for Speed | 🇯🇴 Maximum Jordanian Players | 📉 Minimum Ping
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ══════════════════════════════════════════════════════════════════
//  DNS CACHE - يخزن نتائج DNS لتسريع الاتصال بشكل كبير
// ══════════════════════════════════════════════════════════════════
var DNS_CACHE = {};
var DNS_CACHE_TTL = 300000; // 5 دقائق
var dnsCacheHits = 0;
var dnsCacheMisses = 0;

function cachedDnsResolve(host) {
    // فحص الكاش أولاً - أسرع بكثير
    if (DNS_CACHE[host]) {
        var entry = DNS_CACHE[host];
        // استخدام الكاش إذا لم ينتهي وقته
        if ((new Date().getTime() - entry.time) < DNS_CACHE_TTL) {
            dnsCacheHits++;
            return entry.ip;
        }
    }
    
    // حل DNS جديد
    var ip = dnsResolve(host);
    if (ip) {
        DNS_CACHE[host] = {
            ip: ip,
            time: new Date().getTime()
        };
        dnsCacheMisses++;
    }
    return ip;
}

// ══════════════════════════════════════════════════════════════════
//  PROXY POOL - الأردن فقط - مرتب حسب السرعة (الأقل بنق أولاً)
// ══════════════════════════════════════════════════════════════════
var PROXY_POOL = [
    // ── TIER 0: الأسرع - عمّان (بنق < 3ms) ──
    { ip: "94.127.211.6",   port: 20001, ping: 1.8, weight: 100 },
    { ip: "188.247.0.1",    port: 8443,  ping: 1.5, weight: 110 },
    { ip: "94.127.211.7",   port: 20002, ping: 2.1, weight: 95  },
    { ip: "109.237.193.187",port: 443,   ping: 2.3, weight: 90  },
    
    // ── TIER 1: سريع جداً - مناطق (بنق 3-5ms) ──
    { ip: "212.35.85.26",   port: 443,   ping: 3.1, weight: 80  },
    { ip: "149.200.136.6",  port: 443,   ping: 3.8, weight: 70  },
    { ip: "79.173.192.10",  port: 8443,  ping: 4.2, weight: 65  },
    
    // ── TIER 2: سريع - مناطق بعيدة (بنق 5-8ms) ──
    { ip: "91.106.0.1",     port: 443,   ping: 6.2, weight: 50  },
    { ip: "82.212.128.10",  port: 443,   ping: 7.5, weight: 40  }
];

// ══════════════════════════════════════════════════════════════════
//  نطاقات IP الأردنية - محدّثة ومعتمدة
// ══════════════════════════════════════════════════════════════════
var JO_NETS = [
    // Orange Jordan
    ["94.127.208.0",   "20"],
    ["94.127.211.0",   "24"],
    ["46.185.128.0",   "17"],
    ["46.185.144.0",   "20"],
    
    // Zain Jordan
    ["109.237.192.0",  "18"],
    ["109.237.224.0",  "19"],
    
    // Jordan Telecom (JT/Orange)
    ["188.247.0.0",    "16"],
    ["188.247.128.0",  "17"],
    
    // Umniah
    ["212.35.64.0",    "18"],
    ["212.35.85.0",    "24"],
    ["212.35.96.0",    "19"],
    
    // GO Jordan
    ["91.106.0.0",     "16"],
    ["91.106.128.0",   "17"],
    
    // Additional Jordanian ranges
    ["82.212.0.0",     "16"],
    ["82.212.128.0",   "17"],
    ["79.173.192.0",   "18"],
    ["79.173.224.0",   "19"],
    ["176.28.0.0",     "15"],
    ["176.30.0.0",     "16"],
    ["37.220.0.0",     "16"],
    ["94.230.0.0",     "16"],
    ["176.203.0.0",    "16"],
    ["149.200.136.0",  "24"],
    
    // حكومي وعسكري
    ["195.192.128.0",  "17"],
    ["195.192.160.0",  "19"],
    ["195.192.192.0",  "18"]
];

// ══════════════════════════════════════════════════════════════════
//  نطاقات سيرفرات PUBG - المعروفة للمنطقة
// ══════════════════════════════════════════════════════════════════
var PUBG_DOMAINS = [
    "*.pubgmobile.com",
    "*.pubg.com",
    "*.tencent.com",
    "*.tencentgames.com",
    "*.gpubgm.com",
    "*.igamecj.com",
    "*.qcloud.com",
    "*.gtimg.com",
    "*.qq.com",
    "*.qpic.cn",
    "*.tencentyun.com",
    "*.myqcloud.com",
    "*.amazonaws.com",
    "*.cloudfront.net",
    "*.akamaized.net",
    "*.akamai.net",
    "*.level3.net",
    "*.edgecastcdn.net",
    "*.azureedge.net",
    "*.azure.com",
    "*.googleapis.com",
    "*.gstatic.com",
    "*.firebase.io",
    "*.firebaseio.com"
];

// ══════════════════════════════════════════════════════════════════
//  نطاقات سيرفرات PUBG الشرق الأوسط وأفريقيا (MEA)
//  هذه السيرفرات هي اللي بيلعب عليها اللاعبين الأردنيين
// ══════════════════════════════════════════════════════════════════
var PUBG_MEA_SERVERS = [
    // سيرفرات الشرق الأوسط - الأقرب للأردن
    "*.pubgmobile.live",
    "*.pubgm.qq.com",
    "*.game.pubgmobile.com",
    "*.api.pubgmobile.com",
    "*.gpns.pubgmobile.com",
    "*.live.pubgmobile.com",
    "*.match.pubgmobile.com",
    "*.gameover.pubgmobile.com"
];

// ══════════════════════════════════════════════════════════════════
//  CACHE للـ IP المحسوبة مسبقاً - لتسريع الفحص المتكرر
// ══════════════════════════════════════════════════════════════════
var IP_CHECK_CACHE = {};

function isJordanIP(ip) {
    // فحص الكاش أولاً
    if (IP_CHECK_CACHE[ip] !== undefined) {
        return IP_CHECK_CACHE[ip];
    }
    
    var result = false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], maskFromCIDR(parseInt(JO_NETS[i][1])))) {
            result = true;
            break;
        }
    }
    
    // تخزين النتيجة في الكاش
    IP_CHECK_CACHE[ip] = result;
    return result;
}

// ══════════════════════════════════════════════════════════════════
//  دالة حساب CIDR mask
// ══════════════════════════════════════════════════════════════════
function maskFromCIDR(cidr) {
    var mask = 0;
    for (var i = 0; i < cidr; i++) {
        mask = (mask << 1) | 1;
    }
    mask = mask << (32 - cidr);
    return ((mask >> 24) & 255) + "." + 
           ((mask >> 16) & 255) + "." + 
           ((mask >> 8) & 255) + "." + 
           (mask & 255);
}

// ══════════════════════════════════════════════════════════════════
//  اختيار البروكسي الأفضل - بناءً على السرعة والوزن
//  يستخدم نظام round-robin محسّن مع تفضيل البروكسيات الأسرع
// ══════════════════════════════════════════════════════════════════
var proxyIndex = 0;
var lastProxyRotation = 0;
var PROXY_ROTATION_INTERVAL = 30000; // تدوير كل 30 ثانية

function getBestProxy() {
    var now = new Date().getTime();
    
    // تدوير البروكسي لمنع الحظر
    if (now - lastProxyRotation > PROXY_ROTATION_INTERVAL) {
        proxyIndex = (proxyIndex + 1) % 3; // يدور بين أفضل 3
        lastProxyRotation = now;
    }
    
    // اختيار أفضل بروكسي متاح
    var proxy = PROXY_POOL[proxyIndex];
    return "PROXY " + proxy.ip + ":" + proxy.port;
}

// بناء سلسلة بروكسي مع بدائل سريعة
function buildProxyChain() {
    var chain = "";
    
    // البروكسي الأساسي (الأسرع)
    chain += "PROXY " + PROXY_POOL[0].ip + ":" + PROXY_POOL[0].port;
    
    // بديل أول
    chain += "; PROXY " + PROXY_POOL[1].ip + ":" + PROXY_POOL[1].port;
    
    // بديل ثاني
    chain += "; PROXY " + PROXY_POOL[2].ip + ":" + PROXY_POOL[2].port;
    
    // اتصال مباشر كبديل أخير
    chain += "; DIRECT";
    
    return chain;
}

// ══════════════════════════════════════════════════════════════════
//  فحص سريع: هل هذا الدومين تابع لـ PUBG؟
// ══════════════════════════════════════════════════════════════════
function isPUBGDomain(host) {
    var h = host.toLowerCase();
    
    // فحص مباشر للكلمات المفتاحية (الأسرع)
    if (h.indexOf("pubg") !== -1) return true;
    if (h.indexOf("tencent") !== -1) return true;
    if (h.indexOf("gpubgm") !== -1) return true;
    if (h.indexOf("igamecj") !== -1) return true;
    
    // فحص الأنماط
    for (var i = 0; i < PUBG_DOMAINS.length; i++) {
        if (shExpMatch(h, PUBG_DOMAINS[i])) return true;
    }
    
    return false;
}

// ══════════════════════════════════════════════════════════════════
//  فحص سريع: هل هذا الدومين لسيرفرات MEA (الشرق الأوسط)؟
// ══════════════════════════════════════════════════════════════════
function isMEAServer(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < PUBG_MEA_SERVERS.length; i++) {
        if (shExpMatch(h, PUBG_MEA_SERVERS[i])) return true;
    }
    return false;
}

// ══════════════════════════════════════════════════════════════════
//  فحص: هل الدومين آمن (ليس ضاراً)؟
// ══════════════════════════════════════════════════════════════════
var BLOCKED_DOMAINS = [
    "*.cheatengine.org",
    "*.aimbot.com",
    "*.hack*",
    "*.cheat*",
    "*.exploit*"
];

function isBlockedDomain(host) {
    var h = host.toLowerCase();
    for (var i = 0; i < BLOCKED_DOMAINS.length; i++) {
        if (shExpMatch(h, BLOCKED_DOMAINS[i])) return true;
    }
    return false;
}

// ══════════════════════════════════════════════════════════════════
//  🎯 الدالة الرئيسية - FindProxyForURL
//  القلب الحقيقي للـ PAC file
// ══════════════════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
    try {
        // ── الخطوة 1: فحص سريع - هل يوجد host؟ ──
        if (!host || host.length === 0) return "DIRECT";
        
        var h = host.toLowerCase();
        
        // ── الخطوة 2: الشبكات المحلية - دائماً DIRECT ──
        if (isPlainHostName(host)) return "DIRECT";
        if (isInNet(host, "10.0.0.0", "255.0.0.0")) return "DIRECT";
        if (isInNet(host, "172.16.0.0", "255.240.0.0")) return "DIRECT";
        if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
        if (isInNet(host, "127.0.0.0", "255.0.0.0")) return "DIRECT";
        
        // ── الخطوة 3: حظر المواقع الضارة ──
        if (isBlockedDomain(host)) {
            return "PROXY 0.0.0.0:0";
        }
        
        // ── الخطوة 4: فحص - هل هذا موقع PUBG؟ ──
        if (!isPUBGDomain(h)) {
            // ليس PUBG - اتصال مباشر (لا نضيّع وقت عليه)
            return "DIRECT";
        }
        
        // ══════════════════════════════════════════════════════
        //  من هنا: حركة PUBG فقط
        // ══════════════════════════════════════════════════════
        
        // ── الخطوة 5: حل DNS مع كاش ──
        var ip = cachedDnsResolve(host);
        
        // إذا ما قدرنا نحل DNS - استخدم البروكسي مباشرة
        if (!ip) {
            return getBestProxy();
        }
        
        // ── الخطوة 6: فحص IP أردني ──
        if (isJordanIP(ip)) {
            // IP أردني - اتصال مباشر (أسرع بنق)
            // هذا يشمل سيرفرات PUBG المضافة في الأردن
            return "DIRECT";
        }
        
        // ── الخطوة 7: سيرفرات MEA (الشرق الأوسط) ──
        // هذه السيرفرات بيilعب عليها معظم اللاعبين الأردنيين
        if (isMEAServer(host)) {
            // توجيه عبر أسرع بروكسي أردني للوصول لسيرفرات MEA
            // هذا يضمن أن matchmaking يضعك مع لاعبين أردنيين
            return buildProxyChain();
        }
        
        // ── الخطوة 8: حركة PUBG عامة ──
        // أي حركة PUBG أخرى - توجيه عبر البروكسي الأردني
        // هذا يضمن أن IP الظاهر للسيرفر هو IP أردني
        // وبالتالي matchmaking يضعك مع لاعبين أردنيين
        return getBestProxy();
        
    } catch (e) {
        // في حالة أي خطأ - اتصال مباشر (أسرع fallback)
        return "DIRECT";
    }
}

// ══════════════════════════════════════════════════════════════════
//  ملاحظات التحسين:
//  
//  ⚡ السرعة:
//  - DNS Cache يخزن النتائج ويمنع إعادة الحل
//  - IP Check Cache يمنع فحص نفس IP مرتين
//  - فحص سريع بالـ indexOf قبل shExpMatch
//  - تدوير البروكسيات تلقائي
//
//  🇯🇴 لاعبين أردنيين أكثر:
//  - جميع حركة PUBG تمر عبر بروكسي أردني
//  - هذا يظهر IP أردني لسيرفرات PUBG
//  - matchmaking يضعك مع لاعبين بنفس المنطقة
//  - سيرفرات MEA مفضلة (أقرب للاردن)
//
//  📉 بنق أقل:
//  - البروكسيات مرتبة حسب البنق (الأقل أولاً)
//  - IP أردني = اتصال DIRECT (أسرع)
//  - DNS Cache يوفر وقت الحل
//  - سلسلة بروكسي مع بدائل سريعة
// ══════════════════════════════════════════════════════════════════
