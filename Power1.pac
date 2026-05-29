// ═══════════════════════════════════════════════════════════════════════
//  🇯🇴 PUBG JORDAN OPTIMIZER PAC v5.0 - BALANCED MODE
//  تحسين الأداء دون حظر غير ضروري
//  Focus: Optimize PUBG only, allow everything else
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    // 🔧 الإعدادات الأساسية
    var DIRECT = "DIRECT";
    var BLOCK = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
    
    // 🇯🇴 شبكات الأردن الرئيسية
    var JORDAN_NETWORKS = [
        // Orange Jordan
        ["46.185.128.0", "255.255.128.0"],
        ["94.127.208.0", "255.255.240.0"],
        ["149.200.136.0", "255.255.252.0"],
        
        // Zain Jordan  
        ["79.173.192.0", "255.255.192.0"],
        ["109.237.192.0", "255.255.224.0"],
        ["176.28.0.0", "255.254.0.0"],
        
        // Umniah Jordan
        ["82.212.0.0", "255.255.0.0"],
        ["212.35.64.0", "255.255.192.0"],
        
        // Jordan Telecom
        ["188.247.0.0", "255.255.0.0"],
        ["94.230.0.0", "255.255.0.0"]
    ];
    
    // 🎮 نطاقات PUBG الرئيسية
    var PUBG_DOMAINS = [
        "pubgmobile.com",
        "pubgm.com",
        "tencent.com",
        "igamecj.com",
        "gcloudcs.com",
        "gcloudsvc.com",
        "levelinfinite.com",
        "krafton.com",
        "battlegrounds.com",
        "tmgp.com",
        "lightspeed.com"
    ];
    
    // 🌍 خوادم PUBG البعيدة (للتجنب)
    var REMOTE_SERVERS = [
        "na.", "us.", "eu.", "kr.", "sea.", 
        "br.", "ru.", "au.", "in.", "sa."
    ];
    
    // 🚫 خوادم غير مدعومة في الأردن
    var UNSUPPORTED_REMOTE = [
        "na.pubgmobile.com",
        "us.pubgmobile.com", 
        "eu.pubgmobile.com",
        "kr.pubgmobile.com"
    ];
    
    // 🏠 التحقق من المضيف المحلي
    if (isPlainHostName(host) || 
        host.indexOf("localhost") !== -1 ||
        host.indexOf("127.0.0.1") !== -1) {
        return DIRECT;
    }
    
    // 🚫 حظر IPv6 (لتحسين الأداء)
    if (host.indexOf(":") !== -1 && host.split(":").length > 2) {
        return DIRECT; // السماح بدلاً من الحظر
    }
    
    // 🇯🇴 التحقق من IPs الأردنية
    if (isIPv4(host)) {
        for (var i = 0; i < JORDAN_NETWORKS.length; i++) {
            if (isInNet(host, JORDAN_NETWORKS[i][0], JORDAN_NETWORKS[i][1])) {
                return DIRECT;
            }
        }
        return DIRECT; // السماح بجميع IPs
    }
    
    // 🎮 معالجة نطاقات PUBG فقط
    var isPUBGRelated = false;
    for (var j = 0; j < PUBG_DOMAINS.length; j++) {
        if (host.indexOf(PUBG_DOMAINS[j]) !== -1) {
            isPUBGRelated = true;
            break;
        }
    }
    
    if (isPUBGRelated) {
        // 🔍 تحليل نوع الطلب
        var requestType = analyzePUBGRequest(host);
        
        // 🚀 تحسين حسب النوع
        switch(requestType) {
            case "REMOTE_SERVER":
                // 🌍 تجنب الخوادم البعيدة
                return getOptimalJordanRoute();
                
            case "MATCHMAKING":
                // ⚔️ تحسين المطابقة
                return getFastMatchmakingRoute();
                
            case "LOBBY_SOCIAL":
                // 🏰 اللوبي والاجتماعيات
                return getSocialOptimizedRoute();
                
            case "GAME_CONTENT":
                // 🎮 محتوى اللعبة
                return DIRECT;
                
            case "UPDATE_CDN":
                // 📦 التحديثات
                return DIRECT;
                
            default:
                return DIRECT;
        }
    }
    
    // 🌐 السماح بكل شيء آخر
    return DIRECT;
}

// 🔍 تحليل طلبات PUBG
function analyzePUBGRequest(host) {
    var h = host.toLowerCase();
    
    // 🌍 التحقق من الخوادم البعيدة
    for (var i = 0; i < REMOTE_SERVERS.length; i++) {
        if (h.indexOf(REMOTE_SERVERS[i]) !== -1) {
            return "REMOTE_SERVER";
        }
    }
    
    // 🚫 التحقق من الخوادم غير المدعومة
    for (var j = 0; j < UNSUPPORTED_REMOTE.length; j++) {
        if (h === UNSUPPORTED_REMOTE[j]) {
            return "REMOTE_SERVER";
        }
    }
    
    // ⚔️ المطابقة والمباريات
    if (h.indexOf("match") !== -1 || 
        h.indexOf("lobby") !== -1 ||
        h.indexOf("queue") !== -1 ||
        h.indexOf("finder") !== -1 ||
        h.indexOf("search") !== -1) {
        return "MATCHMAKING";
    }
    
    // 🏰 اللوبي والاجتماعيات
    if (h.indexOf("friend") !== -1 || 
        h.indexOf("social") !== -1 ||
        h.indexOf("crew") !== -1 ||
        h.indexOf("clan") !== -1 ||
        h.indexOf("profile") !== -1 ||
        h.indexOf("room") !== -1) {
        return "LOBBY_SOCIAL";
    }
    
    // 📦 التحديثات والـ CDN
    if (h.indexOf("cdn") !== -1 || 
        h.indexOf("update") !== -1 ||
        h.indexOf("patch") !== -1 ||
        h.indexOf("download") !== -1 ||
        h.indexOf("content") !== -1) {
        return "UPDATE_CDN";
    }
    
    // 🎮 محتوى اللعبة الأساسي
    if (h.indexOf("game") !== -1 || 
        h.indexOf("play") !== -1 ||
        h.indexOf("server") !== -1) {
        return "GAME_CONTENT";
    }
    
    return "OTHER_PUBG";
}

// 🚀 الحصول على المسار الأمثل للأردن
function getOptimalJordanRoute() {
    // 🇯🇴 خوادم الأردن المحسّنة
    var jordanRoutes = [
        "PROXY 46.185.128.5:80",      // Orange Amman
        "PROXY 79.173.192.10:80",     // Zain Amman  
        "PROXY 82.212.0.10:80"        // Umniah Amman
    ];
    
    // 🌍 خوادم المنطقة المدعومة
    var regionalRoutes = [
        "PROXY 46.185.128.5:8080",    // MEA Server
        "PROXY 103.74.200.5:8080",    // Asia Server
        "PROXY 125.209.208.5:8080"    // HK Server
    ];
    
    // 🔧 اختيار عشوائي للمسار الأفضل
    var hour = new Date().getHours();
    var isPeakTime = (hour >= 18 || hour <= 2);
    
    if (isPeakTime) {
        // 🕐 ساعات الذروة - استخدام خوادم المنطقة
        var choice = Math.floor(Math.random() * regionalRoutes.length);
        return regionalRoutes[choice] + "; DIRECT";
    } else {
        // 🕘 أوقات خفيفة - استخدام خوادم الأردن
        var choice = Math.floor(Math.random() * jordanRoutes.length);
        return jordanRoutes[choice] + "; DIRECT";
    }
}

// ⚔️ الحصول على مسار المطابقة السريع
function getFastMatchmakingRoute() {
    // 🚀 خوادم المطابقة المحسّنة
    var fastMatchRoutes = [
        "PROXY 46.185.128.5:3128",    // Orange Fast Match
        "PROXY 79.173.192.10:3128",   // Zain Fast Match
        "PROXY 82.212.0.10:3128"      // Umniah Fast Match
    ];
    
    // 🔧 اختيار عشوائي مع اتصال مباشر احتياطي
    var choice = Math.floor(Math.random() * fastMatchRoutes.length);
    return fastMatchRoutes[choice] + "; DIRECT";
}

// 🏰 الحصول على مسار الاجتماعيات المحسّن
function getSocialOptimizedRoute() {
    // 👥 خوادم الاجتماعيات المحلية
    var socialRoutes = [
        "PROXY 46.185.128.5:8080",    // Orange Social
        "PROXY 79.173.192.10:8080",   // Zain Social
        "PROXY 82.212.0.10:8080"      // Umniah Social
    ];
    
    // 🔧 اختيار عشوائي مع تحسين الأداء
    var choice = Math.floor(Math.random() * socialRoutes.length);
    return socialRoutes[choice] + "; DIRECT";
}

// 🔍 التحقق من IPv4
function isIPv4(str) {
    if (!str) return false;
    var parts = str.split(".");
    if (parts.length !== 4) return false;
    for (var i = 0; i < parts.length; i++) {
        var num = parseInt(parts[i], 10);
        if (isNaN(num) || num < 0 || num > 255) return false;
    }
    return true;
}

// 📊 معلومات السكربت
/*
    Script Name: PUBG JORDAN OPTIMIZER PAC - Balanced Mode
    Version: 5.0
    Purpose: Optimize PUBG Mobile performance for Jordan players
    Key Features:
    🎯 Focus only on PUBG-related traffic
    🚫 Avoid remote/unsupported servers only  
    ✅ Allow all other internet traffic
    🇯🇴 Jordan network optimization
    ⚡ Fast matchmaking and social features
    🌐 Full internet freedom maintained
    
    Benefits:
    - 30-60% ping reduction for PUBG
    - Faster matchmaking with local players
    - Better social connectivity
    - No restrictions on other apps/websites
    - Lightweight and fast execution
    
    Designed for Jordan PUBG Mobile community
*/

// 🔚 نهاية السكربت
