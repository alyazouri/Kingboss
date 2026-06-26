function FindProxyForURL(url, host) {
  var CONFIG = {
    PROXY_HOST: "91.106.109.12",

    USE_SOCKS5: false,
    FALLBACK_DIRECT: true,

    HTTP_PORTS: {
      AGGRESSIVE: 8080,
      DEFAULT: 8080
    },

    SOCKS5_PORTS: {
      AGGRESSIVE: 1080,
      DEFAULT: 1080
    }
  };

  var DIRECT_ALWAYS_HOSTS = [
    "*.youtube.com",
    "youtu.be",
    "*.googlevideo.com",
    "*.ytimg.com",
    "*.googleusercontent.com"
  ];

  var DIRECT_ALWAYS_URLS = [
    "*youtube*",
    "*googlevideo*",
    "*ytimg*"
  ];

  var DIRECT_HOSTS = [
    "cdn.pubgmobile.com",
    "cdn.igamecj.com",
    "cdn.me.pubgmobile.com",
    "updates.pubgmobile.com",
    "patch.igamecj.com",
    "*.akamaihd.net",
    "*.cloudfront.net"
  ];

  var DIRECT_URLS = [
    "*/cdn/*",
    "*/static/*",
    "*/assets/*",
    "*/patch*",
    "*/hotfix*",
    "*/download*",
    "*/update*"
  ];

  var AGGRESSIVE_HOSTS = [
    "*.pubgmobile.com",
    "*.pubgmobile.net",
    "*.proximabeta.com",
    "*.igamecj.com",
    "*.gcloud.qq.com",
    "lobby.me.pubgmobile.com",
    "recruit.me.pubgmobile.com",
    "teamfinder.me.pubgmobile.com",
    "teamfinder.igamecj.com",
    "match.me.pubgmobile.com"
  ];

  var AGGRESSIVE_URLS = [
    "*/account/login*",
    "*/client/version*",
    "*/status/heartbeat*",
    "*/presence/*",
    "*/lobby/*",
    "*/teamfinder/*",
    "*/clan/*",
    "*/recruit/*",
    "*/recruitment/*",
    "*/friend/*",
    "*/social/*",
    "*/member/*",
    "*/squad/*",
    "*/invite/*",
    "*/party/*",
    "*/room/*",
    "*/region*",
    "*/matchmaking/*",
    "*/mms/*"
  ];

  // --- إضافة نطاقات IPv6 للأردن والخليج (Prefixes /32) ---
  var ME_IPV6_PREFIXES = [
    // الأردن (Jordan)
    "2a02:8120", // Orange JO
    "2a00:1370", // Umniah
    "2a02:8128", // Zain JO
    
    // السعودية (Saudi Arabia)
    "2001:41f8", // STC
    "2a02:2a00", // Mobily
    "2a03:7e00", // Zain SA
    
    // الإمارات (UAE)
    "2a02:238",  // Etisalat
    "2a02:c78",  // Du
    
    // قطر (Qatar)
    "2001:4248", // Ooredoo
    
    // الكويت (Kuwait)
    "2a02:5b40", // Zain KW
    
    // عُمان (Oman)
    "2a02:8100", // Omantel
    
    // البحرين (Bahrain)
    "2a00:1378"  // Batelco
  ];

  function hostMatches(h, patterns) {
    for (var i = 0; i < patterns.length; i++) {
      var p = patterns[i];
      if (shExpMatch(h, p)) return true;
      if (p.indexOf("*.") === 0) {
        var suffix = p.substring(1);
        if (h.length >= suffix.length &&
            h.substring(h.length - suffix.length) === suffix) {
          return true;
        }
      }
    }
    return false;
  }

  function urlMatches(u, patterns) {
    for (var i = 0; i < patterns.length; i++) {
      if (shExpMatch(u, patterns[i])) return true;
    }
    return false;
  }

  function hasMiddleEastHint(h, u) {
    h = h.toLowerCase();
    u = u.toLowerCase();

    if (h.indexOf(".me.") !== -1) return true;
    if (h.indexOf("mena") !== -1) return true;
    if (h.indexOf("middleeast") !== -1) return true;
    if (u.indexOf("/me/") !== -1) return true;
    if (u.indexOf("region=me") !== -1) return true;
    if (u.indexOf("region=mena") !== -1) return true;

    return false;
  }

  function isPrivateIPv4(ip) {
    if (!ip) return false;
    if (isInNet(ip, "10.0.0.0", "255.0.0.0")) return true;
    if (isInNet(ip, "172.16.0.0", "255.240.0.0")) return true;
    if (isInNet(ip, "192.168.0.0", "255.255.0.0")) return true;
    if (isInNet(ip, "127.0.0.0", "255.0.0.0")) return true;
    if (isInNet(ip, "169.254.0.0", "255.255.0.0")) return true;
    return false;
  }

  // --- دالة جديدة للتحقق من عناوين IPv6 الخاصة بالشرق الأوسط ---
  function isMiddleEastIPv6(h) {
    var ipList = null;
    
    // dnsResolveEx تدعم جلب IPv6 في المتصفحات الحديثة
    if (typeof dnsResolveEx === 'function') {
      ipList = dnsResolveEx(h);
    } else {
      ipList = dnsResolve(h); // Fallback لـ IPv4 فقط
    }
    
    if (!ipList) return false;

    // تقسيم النتائج (بعض المتصفحات تفصل بفاصلة أو مسافة أو فاصلة منقوطة)
    var ips = ipList.split(/[\s;,]+/);
    
    for (var i = 0; i < ips.length; i++) {
      var currentIp = ips[i].toLowerCase();
      
      // التحقق مما إذا كان العنوان IPv6
      if (currentIp.indexOf(':') !== -1) {
        // مطابقة بادئة العنوان مع النطاقات المحددة
        for (var j = 0; j < ME_IPV6_PREFIXES.length; j++) {
          if (currentIp.indexOf(ME_IPV6_PREFIXES[j]) === 0) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function isLocalOrPrivateHost(h) {
    if (isPlainHostName(h)) return true;
    var ip = dnsResolve(h);
    if (ip && isPrivateIPv4(ip)) return true;
    return false;
  }

  function proxyString(category) {
    var proto, port;

    if (CONFIG.USE_SOCKS5) {
      proto = "SOCKS5";
      port = CONFIG.SOCKS5_PORTS[category] || CONFIG.SOCKS5_PORTS.DEFAULT;
    } else {
      proto = "PROXY";
      port = CONFIG.HTTP_PORTS[category] || CONFIG.HTTP_PORTS.DEFAULT;
    }

    if (CONFIG.FALLBACK_DIRECT) {
      return proto + " " + CONFIG.PROXY_HOST + ":" + port + "; DIRECT";
    }
    return proto + " " + CONFIG.PROXY_HOST + ":" + port;
  }

  host = host.toLowerCase();
  url = url.toLowerCase();

  if (hostMatches(host, DIRECT_ALWAYS_HOSTS) || urlMatches(url, DIRECT_ALWAYS_URLS)) {
    return "DIRECT";
  }

  if (isLocalOrPrivateHost(host)) {
    return "DIRECT";
  }

  if (hostMatches(host, DIRECT_HOSTS) || urlMatches(url, DIRECT_URLS)) {
    return "DIRECT";
  }

  // --- التحقق من نطاقات IPv6 (الأردن والخليج) ---
  // ملاحظة: تم توجيهها للبروكسي. إذا كنت تريدها مباشرة غيّر proxyString("AGGRESSIVE") إلى "DIRECT"
  if (isMiddleEastIPv6(host)) {
    return proxyString("AGGRESSIVE");
  }

  if (hostMatches(host, AGGRESSIVE_HOSTS) || urlMatches(url, AGGRESSIVE_URLS)) {
    return proxyString("AGGRESSIVE");
  }

  if (hasMiddleEastHint(host, url)) {
    return proxyString("AGGRESSIVE");
  }

  return "DIRECT";
}
