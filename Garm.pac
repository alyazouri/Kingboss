function FindProxyForURL(url, host) {
    // البروكسي الأساسي (ألمانيا - فرانكفورت)
    var primaryProxy = "SOCKS5 185.244.164.186:1080";
    
    // البروكسي الاحتياطي (ألمانيا) في حال فشل الأول
    var backupProxy = "SOCKS5 45.155.68.45:1080";
    
    // دمج البروكسيات (سيفشل الاتصال تماماً إذا توقف الاثنان لأننا حذفنا DIRECT)
    var proxyChain = primaryProxy + "; " + backupProxy;

    // 1. فحص نطاقات الدومين الخاصة بببجي وتينسنت
    if (shExpMatch(host, "*.pubgmobile.com") || 
        shExpMatch(host, "*.igamecj.com") || 
        shExpMatch(host, "*.tencent.com") || 
        shExpMatch(host, "*.intlgame.com") ||
        shExpMatch(host, "*.proximabeta.com")) {
        return proxyChain;
    }

    // 2. فحص نطاقات IPv4 الخاصة بسيرفرات اللعبة (إجباري)
    if (isInNet(host, "101.32.0.0", "255.255.0.0") ||   
        isInNet(host, "129.226.0.0", "255.255.0.0") || 
        isInNet(host, "150.109.0.0", "255.255.0.0") || 
        isInNet(host, "43.152.0.0", "255.255.0.0") ||  
        isInNet(host, "119.28.0.0", "255.255.0.0") ||  
        isInNet(host, "49.51.0.0", "255.255.0.0") ||
        isInNet(host, "150.109.0.0", "255.255.0.0")) {
        return proxyChain;
    }

    // في حال كنت تريد إجبار كامل الهاتف على البروكسي (اختياري)
    // قم بتغيير السطر الأخير من "DIRECT" إلى proxyChain
    return proxyChain; 
}
