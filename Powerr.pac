// =====================================================================
// 🇯🇴 PAC SCRIPT - JORDAN REGION LOCK + TEAM FINDER BOOSTER (v3.0)
// Optimized for: PUBG Mobile | Team Finder | Jordan ISPs
// ISPs Covered: Orange JO, Umniah, Zain JO, Fastlink, Mada, TEData
// =====================================================================

function FindProxyForURL(url, host) {
  // ============================================================
  // [1] الإعدادات الرئيسية - CORE CONFIG
  // ============================================================
  var CONFIG = {
    // البروكسي الأردني الرئيسي
    PROXY_HOST: "91.106.109.12",

    // بروكسي احتياطي (يمكن تعديله)
    BACKUP_PROXY_HOST: "91.106.109.12",

    USE_SOCKS5: false,

    // منافذ HTTP
    HTTP_PORT_STRICT: 8080,
    HTTP_PORT_SOFT: 8080,
    HTTP_PORT_TEAMFINDER: 8080,  // منفذ خاص بفريق Team Finder

    // منافذ SOCKS5
    SOCKS5_PORT_STRICT: 1080,
    SOCKS5_PORT_SOFT: 1080,
    SOCKS5_PORT_TEAMFINDER: 1080,

    // سياسات الـ Fallback
    STRICT_FALLBACK_DIRECT: false,      // قفل صارم - لا fallback
    TEAMFINDER_FALLBACK_DIRECT: false,  // فريق - لا fallback (قفل كامل)
    SOFT_FALLBACK_DIRECT: true,         // مرن - يسمح بـ DIRECT

    // تفعيل/تعطيل ميزات
    ENABLE_MULTI_PROXY: true,           // استخدام بروكسي احتياطي
    ENABLE_GHOST_MODE: true,            // إخفاء أي تسريب غير أردني
    FORCE_JORDAN_ONLY: true             // إجبار الترافيك على الأردن فقط
  };

  // ============================================================
  // [2] DIRECT دائماً - منصات لا تحتاج بروكسي
  // ============================================================
  var DIRECT_ALWAYS_HOSTS = [
    "*.youtube.com", "youtu.be", "*.googlevideo.com", "*.ytimg.com",
    "*.googleusercontent.com", "*.googleapis.com", "*.gstatic.com",
    "*.google.com", "*.google.jo",
    "*.facebook.com", "*.fbcdn.net", "*.fb.com", "*.messenger.com",
    "*.instagram.com", "*.cdninstagram.com",
    "*.whatsapp.net", "*.whatsapp.com",
    "*.telegram.org", "*.t.me", "*.tdesktop.com", "*.telesco.pe",
    "*.x.com", "*.twitter.com", "*.twimg.com",
    "*.tiktok.com", "*.tiktokcdn.com", "*.musical.ly",
    "*.snapchat.com", "*.sc-cdn.net",
    "*.discord.com", "*.discord.gg", "*.discordapp.net",
    "*.netflix.com", "*.nflxvideo.net", "*.nflxso.net",
    "*.spotify.com", "*.scdn.co",
    "*.twitch.tv", "*.ttvnw.net"
  ];

  var DIRECT_ALWAYS_URLS = [
    "*youtube*", "*googlevideo*", "*ytimg*", "*gstatic*",
    "*facebook*", "*instagram*", "*whatsapp*", "*telegram*",
    "*twitter*", "*x.com*", "*tiktok*", "*snapchat*",
    "*discord*", "*netflix*", "*spotify*", "*twitch*"
  ];

  // ============================================================
  // [3] CDN الألعاب - DIRECT لتسريع التحميل
  // ============================================================
  var DIRECT_GAME_CDN_HOSTS = [
    "cdn.pubgmobile.com", "cdn.igamecj.com", "cdn.me.pubgmobile.com",
    "updates.pubgmobile.com", "patch.igamecj.com",
    "cdn-global.pubgmobile.com", "static.pubgmobile.com",
    "dl.pubgmobile.com", "download.pubgmobile.com",
    "*.akamaihd.net", "*.akamai.net", "*.akamaized.net",
    "*.cloudfront.net", "*.fastly.net", "*.fastlylb.net",
    "*.hwcdn.net", "*.cdn77.org", "*.cachefly.net",
    "*.edgesuite.net", "*.edgekey.net", "*.azureedge.net",
    "*.bdydns.com", "*.kunlun*.com",
    "*.cdnetworks.net", "*.cdnetworks.com"
  ];

  var DIRECT_GAME_CDN_URLS = [
    "*/cdn/*", "*/static/*", "*/assets/*",
    "*/resource/*", "*/resources/*", "*/res/*",
    "*/patch*", "*/hotfix*", "*/download*", "*/update*",
    "*/file/*", "*/files/*",
    "*/image/*", "*/images/*", "*/img/*",
    "*/video/*", "*/videos/*", "*/audio/*",
    "*/apk/*", "*.pak*", "*.obb*", "*.zip*",
    "*.png*", "*.jpg*", "*.jpeg*", "*.webp*",
    "*.mp4*", "*.m4a*", "*.ogg*"
  ];

  // ============================================================
  // [4] ⭐ Team Finder - أعلى أولوية (HIGHEST PRIORITY)
  // ============================================================
  var TEAMFINDER_HOSTS = [
    "teamfinder.me.pubgmobile.com",
    "teamfinder.igamecj.com",
    "teamfinder.pubgmobile.com",
    "tf.me.pubgmobile.com",
    "tf.igamecj.com",
    "recruit.me.pubgmobile.com",
    "recruit.igamecj.com",
    "recruitment.pubgmobile.com",
    "clan.me.pubgmobile.com",
    "clan.igamecj.com",
    "guild.me.pubgmobile.com",
    "social.me.pubgmobile.com",
    "social.igamecj.com",
    "friend.me.pubgmobile.com",
    "friends.igamecj.com",
    "community.pubgmobile.com",
    "community.igamecj.com"
  ];

  var TEAMFINDER_URLS = [
    "*/teamfinder/*", "*/team_finder/*", "*/team-finder/*",
    "*/tf/*", "*/tf-api/*",
    "*/recruit/*", "*/recruitment/*", "*/recruits/*",
    "*/clan/*", "*/clans/*", "*/guild/*", "*/guilds/*",
    "*/community/*", "*/communities/*",
    "*/social/feed*", "*/social/post*", "*/social/match*",
    "*/findteam*", "*/find_team*", "*/find-team*",
    "*/joinclan*", "*/join_clan*", "*/leavclan*",
    "*/applyclan*", "*/applyteam*",
    "*/teamlist*", "*/clanlist*", "*/clanrank*",
    "*/teamrank*", "*/clansearch*", "*/teamsearch*"
  ];

  // ============================================================
  // [5] STRICT - مسارات حرجة جداً (Lobby/Match/Login)
  // ============================================================
  var STRICT_HOSTS = [
    "lobby.me.pubgmobile.com", "lobby.igamecj.com",
    "match.me.pubgmobile.com", "match.igamecj.com",
    "matchmaking.pubgmobile.com", "mms.pubgmobile.com",
    "gateway.pubgmobile.com", "gateway.igamecj.com",
    "api.pubgmobile.com", "api.igamecj.com",
    "login.pubgmobile.com", "login.igamecj.com",
    "auth.pubgmobile.com", "auth.igamecj.com",
    "account.pubgmobile.com", "account.igamecj.com",
    "presence.pubgmobile.com", "session.pubgmobile.com",
    "region.pubgmobile.com", "geo.pubgmobile.com",
    "*.proximabeta.com",
    "*.pubgmobile.com", "*.pubgmobile.net",
    "*.igamecj.com", "*.igamecj.net",
    "*.gcloud.qq.com", "*.tencentcs.com"
  ];

  var STRICT_URLS = [
    "*/account/login*", "*/login*", "*/logout*", "*/auth*",
    "*/client/version*", "*/status/heartbeat*", "*/heartbeat*",
    "*/presence/*", "*/online/*", "*/keepalive*",
    "*/lobby/*", "*/lobby_*",
    "*/match/*", "*/matchmaking/*", "*/matchmake/*",
    "*/mms/*", "*/mm/*",
    "*/gateway/*", "*/gw/*",
    "*/session/*", "*/sess/*",
    "*/region*", "*/server_list*", "*/serverlist*",
    "*/geo*", "*/locale*", "*/zone*",
    "*/friend/*", "*/friends/*",
    "*/member/*", "*/members/*",
    "*/squad/*", "*/squads/*",
    "*/invite/*", "*/invites/*", "*/invitation*",
    "*/party/*", "*/parties/*",
    "*/room/*", "*/rooms/*", "*/customroom*",
    "*/team/*", "*/teams/*",
    "*/group/*", "*/groups/*",
    "*/rank/*", "*/ranking/*", "*/leaderboard*",
    "*/season/*", "*/tier*"
  ];

  // ============================================================
  // [6] اكتشاف ترافيك اللعبة - GAME DETECTION
  // ============================================================
  var GAME_HOSTS = [
    "*.pubgmobile.com", "*.pubgmobile.net",
    "*.proximabeta.com",
    "*.igamecj.com", "*.igamecj.net",
    "*.gcloud.qq.com", "*.tencent.com", "*.tencentcs.com",
    "*.whecloud.com", "*.cdnetworks.net",
    "*.krafton.com", "*.krafton.net",
    "*.battlegrounds.com", "*.pubg.com"
  ];

  var GAME_URL_HINTS = [
    "*pubg*", "*proximabeta*", "*igamecj*",
    "*tencent*", "*gcloud*", "*krafton*",
    "*teamfinder*", "*matchmaking*", "*lobby*",
    "*recruit*", "*clan*", "*friend*",
    "*party*", "*room*", "*squad*"
  ];

  // ============================================================
  // [7] 🇯🇴 إشارات الأردن - JORDAN HINTS (محسّنة)
  // ============================================================
  var JORDAN_HOST_HINTS = [
    ".jo", ".com.jo", ".net.jo", ".gov.jo", ".edu.jo",
    "jordan", "amman", "irbid", "aqaba", "zarqa",
    "orange", "orange-jo", "orangejo",
    "umniah", "umniahjo",
    "zain", "zain-jo", "zainjo",
    "fastlink", "fast-link",
    "mada", "tedata", "te-data",
    "jordantelecom", "jt-jo",
    "nepco", "batelco-jo"
  ];

  var JORDAN_URL_HINTS = [
    "country=jo", "country=jor", "country=jordan",
    "countrycode=jo", "country_code=jo",
    "region=jo", "region=jor", "region=jordan",
    "region=amman", "region=me-jo", "region=mena-jo",
    "/jo/", "/jor/", "/jordan/",
    "locale=ar_jo", "locale=ar-jo",
    "lang=ar-jo", "lang=ar_jo",
    "cc=jo", "loc=jo", "zone=jo",
    "server=jordan", "server=jo", "server=me",
    "timezone=asia/amman", "tz=asia%2famman",
    "jordan", "amman"
  ];

  // ============================================================
  // [8] 🇯🇴 IPv4 الأردني الكامل - ALL JORDAN IPv4 RANGES
  // (Orange JO + Umniah + Zain JO + Fastlink + Mada + TEData)
  // ============================================================
  var JO_IPV4_RANGES = [
    // Orange Jordan (JTC)
    { ip: "5.45.128.0",   mask: "255.255.128.0"  },  // /17
    { ip: "37.130.0.0",   mask: "255.255.0.0"    },
    { ip: "46.185.128.0", mask: "255.255.128.0"  },
    { ip: "62.215.0.0",   mask: "255.255.0.0"    },
    { ip: "77.66.128.0",  mask: "255.255.128.0"  },
    { ip: "78.100.0.0",   mask: "255.255.0.0"    },
    { ip: "80.10.0.0",    mask: "255.255.0.0"    },
    { ip: "82.205.0.0",   mask: "255.255.0.0"    },
    { ip: "85.114.32.0",  mask: "255.255.224.0"  },
    { ip: "86.108.0.0",   mask: "255.252.0.0"    },
    { ip: "87.236.232.0", mask: "255.255.248.0"  },
    { ip: "89.40.224.0",  mask: "255.255.240.0"  },
    { ip: "91.106.96.0",  mask: "255.255.224.0"  },
    { ip: "92.241.160.0", mask: "255.255.240.0"  },
    { ip: "93.91.32.0",   mask: "255.255.224.0"  },
    { ip: "94.127.0.0",   mask: "255.255.128.0"  },
    { ip: "95.172.0.0",   mask: "255.255.128.0"  },

    // Umniah Mobile
    { ip: "31.6.0.0",     mask: "255.255.0.0"    },
    { ip: "37.18.0.0",    mask: "255.255.128.0"  },
    { ip: "37.75.0.0",    mask: "255.255.0.0"    },
    { ip: "94.142.0.0",   mask: "255.255.128.0"  },
    { ip: "176.29.0.0",   mask: "255.255.0.0"    },
    { ip: "185.16.0.0",   mask: "255.255.252.0"  },
    { ip: "188.247.64.0", mask: "255.255.224.0"  },

    // Zain Jordan
    { ip: "37.34.0.0",    mask: "255.255.128.0"  },
    { ip: "37.123.96.0",  mask: "255.255.224.0"  },
    { ip: "85.117.144.0", mask: "255.255.240.0"  },
    { ip: "89.32.96.0",   mask: "255.255.224.0"  },
    { ip: "109.107.224.0",mask: "255.255.224.0"  },
    { ip: "188.247.64.0", mask: "255.255.192.0"  },
    { ip: "193.188.64.0", mask: "255.255.192.0"  },

    // Fastlink (Now Orange)
    { ip: "62.215.128.0", mask: "255.255.128.0"  },
    { ip: "85.114.0.0",   mask: "255.255.224.0"  },

    // Public Government & Telecom JO
    { ip: "193.188.96.0", mask: "255.255.224.0"  },
    { ip: "195.229.0.0",  mask: "255.255.128.0"  },
    { ip: "212.34.0.0",   mask: "255.255.0.0"    },
    { ip: "213.139.0.0",  mask: "255.255.128.0"  },
    { ip: "213.186.112.0",mask: "255.255.240.0"  },
    { ip: "213.244.144.0",mask: "255.255.240.0"  },
    { ip: "217.144.96.0", mask: "255.255.224.0"  }
  ];

  // ============================================================
  // [9] 🇯🇴 IPv6 الأردني الكامل - ALL JORDAN IPv6 RANGES
  // ============================================================
  var JO_IPV6_RANGES = [
    { base: "2001:32c0::",   prefix: 29 },
    { base: "2001:67c:2124::", prefix: 48 },
    { base: "2a00:18d0::",   prefix: 32 },
    { base: "2a00:18d8::",   prefix: 29 },
    { base: "2a00:4620::",   prefix: 32 },
    { base: "2a00:76e0::",   prefix: 32 },
    { base: "2a00:b860::",   prefix: 32 },
    { base: "2a00:caa0::",   prefix: 32 },
    { base: "2a01:1d0::",    prefix: 29 },
    { base: "2a01:9700::",   prefix: 29 },
    { base: "2a01:e240::",   prefix: 29 },
    { base: "2a01:ee40::",   prefix: 29 },
    { base: "2a02:9c0::",    prefix: 29 },
    { base: "2a02:2558::",   prefix: 29 },
    { base: "2a02:25d8::",   prefix: 32 },
    { base: "2a02:5b60::",   prefix: 32 },
    { base: "2a02:c040::",   prefix: 29 },
    { base: "2a02:e680::",   prefix: 29 },
    { base: "2a02:f0c0::",   prefix: 29 },
    { base: "2a03:6b00::",   prefix: 29 },
    { base: "2a03:6d00::",   prefix: 32 },
    { base: "2a03:b640::",   prefix: 32 },
    { base: "2a04:6200::",   prefix: 29 },
    { base: "2a05:74c0::",   prefix: 29 },
    { base: "2a05:7500::",   prefix: 29 },
    { base: "2a06:9bc0::",   prefix: 29 },
    { base: "2a06:bd80::",   prefix: 29 },
    { base: "2a07:140::",    prefix: 29 },
    { base: "2a0a:2740::",   prefix: 29 },
    { base: "2a0c:39c0::",   prefix: 29 },
    { base: "2a0d:cf40::",   prefix: 29 },
    { base: "2a10:1100::",   prefix: 29 },
    { base: "2a10:9740::",   prefix: 29 },
    { base: "2a10:d800::",   prefix: 29 },
    { base: "2a11:d180::",   prefix: 29 },
    { base: "2a13:1f00::",   prefix: 29 },
    { base: "2a13:5c00::",   prefix: 29 },
    { base: "2a13:8d40::",   prefix: 29 },
    { base: "2a14:1a40::",   prefix: 29 },
    { base: "2a14:2840::",   prefix: 29 }
  ];

  // ============================================================
  // [10] دوال المطابقة - MATCHING HELPERS
  // ============================================================
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

  function containsAny(text, hints) {
    for (var i = 0; i < hints.length; i++) {
      if (text.indexOf(hints[i]) !== -1) return true;
    }
    return false;
  }

  // ============================================================
  // [11] الشبكات الخاصة - PRIVATE NETWORKS
  // ============================================================
  function isPrivateIPv4(ip) {
    if (!ip) return false;
    if (isInNet(ip, "10.0.0.0", "255.0.0.0")) return true;
    if (isInNet(ip, "172.16.0.0", "255.240.0.0")) return true;
    if (isInNet(ip, "192.168.0.0", "255.255.0.0")) return true;
    if (isInNet(ip, "127.0.0.0", "255.0.0.0")) return true;
    if (isInNet(ip, "169.254.0.0", "255.255.0.0")) return true;
    if (isInNet(ip, "100.64.0.0", "255.192.0.0")) return true; // CGNAT
    return false;
  }

  function isLocalOrPrivateHost(h) {
    if (isPlainHostName(h)) return true;
    if (h === "localhost") return true;
    if (shExpMatch(h, "*.local")) return true;
    if (shExpMatch(h, "*.lan")) return true;
    if (shExpMatch(h, "*.home")) return true;

    var ip = dnsResolve(h);
    if (ip && isPrivateIPv4(ip)) return true;
    return false;
  }

  // ============================================================
  // [12] IPv4 الأردن - JORDAN IPv4 CHECK
  // ============================================================
  function isJordanIPv4(ip) {
    if (!ip) return false;
    for (var i = 0; i < JO_IPV4_RANGES.length; i++) {
      if (isInNet(ip, JO_IPV4_RANGES[i].ip, JO_IPV4_RANGES[i].mask)) {
        return true;
      }
    }
    return false;
  }

  function isJordanIPv4Host(h) {
    var ip = dnsResolve(h);
    if (ip && isJordanIPv4(ip)) return true;
    return false;
  }

  // ============================================================
  // [13] IPv6 الأردن - JORDAN IPv6 CHECK
  // ============================================================
  function stripIPv6Decorations(ip) {
    if (!ip) return "";
    ip = ("" + ip).toLowerCase();
    if (ip.charAt(0) === "[" && ip.charAt(ip.length - 1) === "]") {
      ip = ip.substring(1, ip.length - 1);
    }
    var percent = ip.indexOf("%");
    if (percent !== -1) ip = ip.substring(0, percent);
    return ip;
  }

  function parseHex16(part) {
    if (part === "") return 0;
    return parseInt(part, 16);
  }

  function expandIPv6(ip) {
    ip = stripIPv6Decorations(ip);
    if (ip.indexOf(":") === -1) return null;
    if (ip.indexOf(".") !== -1) return null;

    var halves = ip.split("::");
    if (halves.length > 2) return null;

    var left = halves[0] ? halves[0].split(":") : [];
    var right = (halves.length === 2 && halves[1]) ? halves[1].split(":") : [];

    if (left.length === 1 && left[0] === "") left = [];
    if (right.length === 1 && right[0] === "") right = [];

    var missing = 8 - (left.length + right.length);
    if (missing < 0) return null;

    var out = [], i;
    for (i = 0; i < left.length; i++) {
      if (left[i] === "") return null;
      out.push(parseHex16(left[i]));
    }
    for (i = 0; i < missing; i++) out.push(0);
    for (i = 0; i < right.length; i++) {
      if (right[i] === "") return null;
      out.push(parseHex16(right[i]));
    }
    if (out.length !== 8) return null;
    return out;
  }

  function ipv6MatchesPrefix(ip, base, prefixLen) {
    var a = expandIPv6(ip);
    var b = expandIPv6(base);
    if (!a || !b) return false;

    var fullBlocks = Math.floor(prefixLen / 16);
    var remainBits = prefixLen % 16;
    var i;
    for (i = 0; i < fullBlocks; i++) {
      if (a[i] !== b[i]) return false;
    }
    if (remainBits > 0) {
      var mask = (0xFFFF << (16 - remainBits)) & 0xFFFF;
      if ((a[fullBlocks] & mask) !== (b[fullBlocks] & mask)) return false;
    }
    return true;
  }

  function isLiteralIPv6(h) {
    h = stripIPv6Decorations(h);
    return h.indexOf(":") !== -1;
  }

  function isJordanIPv6Address(ip) {
    for (var i = 0; i < JO_IPV6_RANGES.length; i++) {
      if (ipv6MatchesPrefix(ip, JO_IPV6_RANGES[i].base, JO_IPV6_RANGES[i].prefix)) {
        return true;
      }
    }
    return false;
  }

  function splitIPs(ipList) {
    if (!ipList) return [];
    return ("" + ipList).split(/[\s,;]+/);
  }

  function isJordanIPv6Host(h) {
    if (isLiteralIPv6(h)) return isJordanIPv6Address(h);

    if (typeof dnsResolveEx === "function") {
      var ipList = dnsResolveEx(h);
      var ips = splitIPs(ipList);
      for (var i = 0; i < ips.length; i++) {
        var currentIp = stripIPv6Decorations(ips[i]);
        if (currentIp.indexOf(":") !== -1 && isJordanIPv6Address(currentIp)) {
          return true;
        }
      }
    }
    return false;
  }

  // ============================================================
  // [14] فحص شامل للأردن - COMPREHENSIVE JORDAN CHECK
  // ============================================================
  function isJordanHost(h) {
    if (isJordanIPv4Host(h)) return true;
    if (isJordanIPv6Host(h)) return true;
    return false;
  }

  function isGameTraffic(h, u) {
    if (hostMatches(h, GAME_HOSTS)) return true;
    if (urlMatches(u, GAME_URL_HINTS)) return true;
    return false;
  }

  function isTeamFinderTraffic(h, u) {
    if (hostMatches(h, TEAMFINDER_HOSTS)) return true;
    if (urlMatches(u, TEAMFINDER_URLS)) return true;
    return false;
  }

  function hasJordanHint(h, u) {
    if (containsAny(h, JORDAN_HOST_HINTS)) return true;
    if (containsAny(u, JORDAN_URL_HINTS)) return true;
    return false;
  }

  // ============================================================
  // [15] بناء سلسلة البروكسي - PROXY STRING BUILDER
  // ============================================================
  function proxyString(mode) {
    var proto, port, fallbackDirect, primary, backup;

    if (CONFIG.USE_SOCKS5) {
      proto = "SOCKS5";
      if (mode === "STRICT") port = CONFIG.SOCKS5_PORT_STRICT;
      else if (mode === "TEAMFINDER") port = CONFIG.SOCKS5_PORT_TEAMFINDER;
      else port = CONFIG.SOCKS5_PORT_SOFT;
    } else {
      proto = "PROXY";
      if (mode === "STRICT") port = CONFIG.HTTP_PORT_STRICT;
      else if (mode === "TEAMFINDER") port = CONFIG.HTTP_PORT_TEAMFINDER;
      else port = CONFIG.HTTP_PORT_SOFT;
    }

    if (mode === "STRICT") fallbackDirect = CONFIG.STRICT_FALLBACK_DIRECT;
    else if (mode === "TEAMFINDER") fallbackDirect = CONFIG.TEAMFINDER_FALLBACK_DIRECT;
    else fallbackDirect = CONFIG.SOFT_FALLBACK_DIRECT;

    primary = proto + " " + CONFIG.PROXY_HOST + ":" + port;

    // دعم البروكسي الاحتياطي
    if (CONFIG.ENABLE_MULTI_PROXY &&
        CONFIG.BACKUP_PROXY_HOST !== CONFIG.PROXY_HOST) {
      backup = proto + " " + CONFIG.BACKUP_PROXY_HOST + ":" + port;
      if (fallbackDirect) {
        return primary + "; " + backup + "; DIRECT";
      }
      return primary + "; " + backup;
    }

    if (fallbackDirect) return primary + "; DIRECT";
    return primary;
  }

  // ============================================================
  // [16] المنطق الرئيسي - MAIN DECISION LOGIC
  // ============================================================
  host = ("" + host).toLowerCase();
  url = ("" + url).toLowerCase();

  // (1) منصات DIRECT دائماً
  if (hostMatches(host, DIRECT_ALWAYS_HOSTS) ||
      urlMatches(url, DIRECT_ALWAYS_URLS)) {
    return "DIRECT";
  }

  // (2) الشبكات المحلية والخاصة
  if (isLocalOrPrivateHost(host)) {
    return "DIRECT";
  }

  // (3) CDN الألعاب - DIRECT لتسريع التحميل
  if (hostMatches(host, DIRECT_GAME_CDN_HOSTS) ||
      urlMatches(url, DIRECT_GAME_CDN_URLS)) {
    return "DIRECT";
  }

  // (4) ⭐ TEAM FINDER - أعلى أولوية (قفل صارم بدون fallback)
  if (isTeamFinderTraffic(host, url)) {
    return proxyString("TEAMFINDER");
  }

  // (5) المسارات الحرجة (Lobby/Match/Login) - قفل صارم
  if (hostMatches(host, STRICT_HOSTS) || urlMatches(url, STRICT_URLS)) {
    return proxyString("STRICT");
  }

  // (6) منطق ترافيك اللعبة العام
  if (isGameTraffic(host, url)) {
    // أي إشارة أردنية → قفل صارم
    if (hasJordanHint(host, url)) {
      return proxyString("STRICT");
    }
    // IP أردني (v4 أو v6) → قفل صارم
    if (isJordanHost(host)) {
      return proxyString("STRICT");
    }
    // وضع Ghost Mode: إجبار كل ترافيك اللعبة على الأردن
    if (CONFIG.FORCE_JORDAN_ONLY) {
      return proxyString("STRICT");
    }
    return proxyString("SOFT");
  }

  // (7) ترافيك غير اللعبة لكن IP أردني → SOFT
  if (hasJordanHint(host, url) || isJordanHost(host)) {
    return proxyString("SOFT");
  }

  // (8) أي شيء آخر → DIRECT
  return "DIRECT";
}
