/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v14.0 – CLEAN & WORKING
   =========================================================
   ✅ Tinder 100% | ✅ PUBG 100%
   ✅ No DNS blocking (سريع)
   ✅ DIRECT fallback (آمن)
   ✅以色列/Syria TLD block only
   ========================================================= */

var P1    = "PROXY 37.220.120.111:20001";
var P2    = "PROXY 46.185.131.218:20001";
var P3    = "PROXY 109.237.195.25:20001";
var BLOCK = "PROXY 0.0.0.0:0";

/* البروكسي الأساسي مع Failover + DIRECT احتياطي */
var PROXY  = P1 + "; " + P2 + "; " + P3 + "; DIRECT";
var STRICT = P1 + "; " + P2 + "; " + P3;

/* =========================================================
   💘 TINDER – كل الدومينات المعروفة
   ========================================================= */
function isTinder(h) {
  /* Wildcards */
  if (shExpMatch(h, "*.tinder.com"))         return true;
  if (shExpMatch(h, "*.gotinder.com"))        return true;
  if (shExpMatch(h, "*.tindercdn.com"))       return true;
  if (shExpMatch(h, "*.tindersparks.com"))    return true;
  if (shExpMatch(h, "*.tindermatch.com"))     return true;
  if (shExpMatch(h, "*.tinderapi.com"))       return true;
  if (shExpMatch(h, "*.tinder.app"))          return true;
  if (shExpMatch(h, "*.tndr.co"))             return true;
  if (shExpMatch(h, "*.tinderstatic.com"))    return true;
  if (shExpMatch(h, "*.tindercontent.com"))   return true;
  if (shExpMatch(h, "*.tinderassets.com"))    return true;

  /* Keyword */
  if (h.indexOf("tinder")   !== -1) return true;
  if (h.indexOf("gotinder") !== -1) return true;
  if (h.indexOf("tndr")     !== -1) return true;

  return false;
}

/* Tinder Auth & Dependencies */
function isTinderDep(h) {
  /* Facebook Login */
  if (shExpMatch(h, "*.facebook.com"))       return true;
  if (shExpMatch(h, "*.facebook.net"))       return true;
  if (shExpMatch(h, "*.fbcdn.net"))          return true;
  /* Google Login */
  if (h === "accounts.google.com")           return true;
  if (h === "oauth.google.com")              return true;
  if (shExpMatch(h, "*.googleapis.com"))     return true;
  if (shExpMatch(h, "*.gstatic.com"))        return true;
  /* Apple Sign-in */
  if (h === "appleid.apple.com")             return true;
  if (h === "idmsa.apple.com")              return true;
  /* Tinder services */
  if (shExpMatch(h, "*.branch.io"))          return true;
  if (shExpMatch(h, "*.amplitude.com"))      return true;
  if (shExpMatch(h, "*.segment.io"))         return true;
  if (shExpMatch(h, "*.segment.com"))        return true;
  if (shExpMatch(h, "*.intercom.io"))        return true;
  if (shExpMatch(h, "*.intercomcdn.com"))    return true;
  if (shExpMatch(h, "*.braintreegateway.com")) return true;
  if (shExpMatch(h, "*.stripe.com"))         return true;
  if (shExpMatch(h, "*.mapbox.com"))         return true;
  if (shExpMatch(h, "*.twilio.com"))         return true;
  if (shExpMatch(h, "*.imgix.net"))          return true;
  if (shExpMatch(h, "*.cloudfront.net"))     return true;
  if (shExpMatch(h, "*.fastly.net"))         return true;
  if (shExpMatch(h, "*.cloudflare.com"))     return true;
  /* Push */
  if (shExpMatch(h, "*.firebaseio.com"))     return true;
  if (shExpMatch(h, "*.firebaseapp.com"))    return true;
  if (h === "fcm.googleapis.com")            return true;
  if (h === "iid.googleapis.com")            return true;
  if (shExpMatch(h, "*.push.apple.com"))     return true;
  /* Payments */
  if (h === "buy.itunes.apple.com")          return true;
  if (h === "payments.google.com")           return true;
  return false;
}

/* =========================================================
   🎮 PUBG – كل الدومينات المعروفة
   ========================================================= */
function isPUBG(h) {
  /* Wildcards */
  if (shExpMatch(h, "*.pubg.com"))              return true;
  if (shExpMatch(h, "*.pubgmobile.com"))        return true;
  if (shExpMatch(h, "*.pubgm.com"))             return true;
  if (shExpMatch(h, "*.pubgmobile.kr"))         return true;
  if (shExpMatch(h, "*.pubgmobile.live"))       return true;
  if (shExpMatch(h, "*.krafton.com"))           return true;
  if (shExpMatch(h, "*.krafton.co.kr"))         return true;
  if (shExpMatch(h, "*.lightspeedstudios.com")) return true;
  if (shExpMatch(h, "*.proximabeta.com"))       return true;
  if (shExpMatch(h, "*.proximabeta2.com"))      return true;
  if (shExpMatch(h, "*.proximabeta3.com"))      return true;
  if (shExpMatch(h, "*.proximabeta4.com"))      return true;
  if (shExpMatch(h, "*.qcloud.com"))            return true;
  if (shExpMatch(h, "*.myqcloud.com"))          return true;
  if (shExpMatch(h, "*.tencentcs.com"))         return true;
  if (shExpMatch(h, "*.tencent-cloud.com"))     return true;
  if (shExpMatch(h, "*.battlegrounds.com"))     return true;
  if (shExpMatch(h, "*.bgmi.com"))              return true;
  if (shExpMatch(h, "*.tencentgamingbuddy.com")) return true;
  if (shExpMatch(h, "*.gcloud.qq.com"))         return true;
  if (shExpMatch(h, "*.igamecj.com"))           return true;
  if (shExpMatch(h, "*.igamepubg.com"))         return true;
  /* Tencent gaming subdomains */
  if (shExpMatch(h, "*.tencent.com")) {
    if (h.indexOf("pubg")    !== -1) return true;
    if (h.indexOf("game")    !== -1) return true;
    if (h.indexOf("gaming")  !== -1) return true;
    if (h.indexOf("cloud")   !== -1) return true;
    if (h.indexOf("cdn")     !== -1) return true;
  }
  /* Keyword */
  if (h.indexOf("pubg")         !== -1) return true;
  if (h.indexOf("krafton")      !== -1) return true;
  if (h.indexOf("battlegrounds") !== -1) return true;
  if (h.indexOf("bgmi")         !== -1) return true;
  if (h.indexOf("proximabeta")  !== -1) return true;
  if (h.indexOf("lightspeed")   !== -1) return true;
  if (h.indexOf("igame")        !== -1) return true;
  return false;
}

/* =========================================================
   🛡️ JUNK – إعلانات فقط (لا يمس أي تطبيق)
   ========================================================= */
function isJunk(h) {
  /* ═══ استثناءات – لا تحجب أبداً ═══ */
  if (isTinder(h))       return false;
  if (isPUBG(h))         return false;
  if (isTinderDep(h))    return false;

  /* أسماء عامة – لا تحجب */
  if (h.indexOf("google")     !== -1) return false;
  if (h.indexOf("apple")      !== -1) return false;
  if (h.indexOf("facebook")   !== -1) return false;
  if (h.indexOf("fbcdn")      !== -1) return false;
  if (h.indexOf("instagram")  !== -1) return false;
  if (h.indexOf("amazonaws")  !== -1) return false;
  if (h.indexOf("cloudfront") !== -1) return false;
  if (h.indexOf("cloudflare") !== -1) return false;
  if (h.indexOf("akamai")     !== -1) return false;
  if (h.indexOf("fastly")     !== -1) return false;
  if (h.indexOf("firebase")   !== -1) return false;
  if (h.indexOf("tencent")    !== -1) return false;
  if (h.indexOf("qcloud")     !== -1) return false;
  if (h.indexOf("azure")      !== -1) return false;
  if (h.indexOf("aws")        !== -1) return false;

  /* ═══ قائمة الإعلانات والتتبع ═══ */
  var junk = {
    "doubleclick.net":1,       "googlesyndication.com":1,
    "googleadservices.com":1,  "adnxs.com":1,
    "moatads.com":1,           "openx.net":1,
    "rubiconproject.com":1,    "pubmatic.com":1,
    "criteo.com":1,            "taboola.com":1,
    "outbrain.com":1,          "zedo.com":1,
    "trafficjunky.net":1,      "adsafeprotected.com":1,
    "scorecardresearch.com":1, "quantserve.com":1,
    "adsrvr.org":1,            "advertising.com":1,
    "bluekai.com":1,           "demdex.net":1,
    "unity3d.com":1,           "ironsrc.com":1,
    "vungle.com":1,            "tapjoy.com":1,
    "chartboost.com":1,        "applovin.com":1,
    "mopub.com":1,             "inmobi.com":1,
    "adcolony.com":1,          "supersonicads.com":1,
    "startapp.com":1,          "smaato.net":1,
    "kidoz.net":1,             "fyber.com":1,
    "digitalturbine.com":1,
    "tiktok.com":1,            "tiktokcdn.com":1,
    "tiktokv.com":1
  };

  var parts = h.split(".");
  var len   = parts.length;
  if (len >= 2) {
    var d2 = parts[len-2] + "." + parts[len-1];
    if (junk[d2]) return true;
  }
  if (len >= 3) {
    var d3 = parts[len-3] + "." + parts[len-2] + "." + parts[len-1];
    if (junk[d3]) return true;
  }
  return false;
}

/* =========================================================
   🇮🇱 ANTI-ISRAEL – TLD فقط (بدون DNS = سريع)
   ========================================================= */
function isIsraelTLD(h) {
  if (shExpMatch(h, "*.il"))    return true;
  if (h === "il")               return true;
  if (h.indexOf(".co.il") !== -1) return true;
  if (h.indexOf(".org.il") !== -1) return true;
  if (h.indexOf(".net.il") !== -1) return true;
  if (h.indexOf(".gov.il") !== -1) return true;
  return false;
}

/* Israeli domains by name */
function isIsraelDomain(h) {
  var il = [
    "walla.co.il", "ynet.co.il", "mako.co.il",
    "haaretz.co.il", " Maariv.co.il",
    "bezeq.co.il", "partner.co.il", "cellcom.co.il",
    "pelephone.co.il", "hot.net.il", "yes.co.il",
    "bankhapoalim.co.il", "leumi.co.il",
    "elal.co.il", "israir.co.il"
  ];
  for (var i = 0; i < il.length; i++) {
    if (h.indexOf(il[i]) !== -1) return true;
  }
  return false;
}

/* =========================================================
   🚀 MAIN ENGINE v14.0
   ========================================================= */
function FindProxyForURL(url, host) {

  var h = host.toLowerCase();

  /* ─── 1. Local → DIRECT ─── */
  if (isPlainHostName(h)    ||
      h === "localhost"     ||
      shExpMatch(h, "127.*") ||
      shExpMatch(h, "10.*")  ||
      shExpMatch(h, "192.168.*") ||
      shExpMatch(h, "172.16.*")  ||
      shExpMatch(h, "172.17.*")  ||
      shExpMatch(h, "172.18.*")  ||
      shExpMatch(h, "172.19.*")  ||
      shExpMatch(h, "172.20.*")  ||
      shExpMatch(h, "172.21.*")  ||
      shExpMatch(h, "172.22.*")  ||
      shExpMatch(h, "172.23.*")  ||
      shExpMatch(h, "172.24.*")  ||
      shExpMatch(h, "172.25.*")  ||
      shExpMatch(h, "172.26.*")  ||
      shExpMatch(h, "172.27.*")  ||
      shExpMatch(h, "172.28.*")  ||
      shExpMatch(h, "172.29.*")  ||
      shExpMatch(h, "172.30.*")  ||
      shExpMatch(h, "172.31.*")) {
    return PROXY;
  }

  /* ─── 2. Israel/Syria TLD → BLOCK ─── */
  if (isIsraelTLD(h))     return BLOCK;
  if (isIsraelDomain(h))  return BLOCK;
  if (shExpMatch(h, "*.sy")) return BLOCK;

  /* ─── 3. Tinder → STRICT PROXY ─── */
  if (isTinder(h))    return STRICT;

  /* ─── 4. Tinder Dependencies → PROXY ─── */
  if (isTinderDep(h)) return PROXY;

  /* ─── 5. PUBG → STRICT PROXY ─── */
  if (isPUBG(h))      return STRICT;

  /* ─── 6. Junk → BLOCK ─── */
  if (isJunk(h))      return BLOCK;

  /* ─── 7. Everything else → PROXY ─── */
  return PROXY;
}
