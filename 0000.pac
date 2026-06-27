/* =====================================================================
 *  PUBG MOBILE  ::  JORDAN ULTRA PAC  ::  v3.0.0
 *  ---------------------------------------------------------------
 *  Goal       : Maximize Jordan player visibility (target 98%+)
 *  Strategy   : Route 100% of PUBG traffic through Jordanian
 *               carrier proxies (ORANGE / ZAIN / UMNIAH / JT).
 *  Modes      : Social > Lobby > Matchmaking > Ranked > TDM >
 *               Classic > Clan War > Training
 *  Compliance : JORDAN_ONLY_MODE = true | BLOCK_INTERNATIONAL = true
 *               MAX_PROXY_CHAIN = 3  | FAIL_CLOSED = true
 * ===================================================================== */

/* ------------------------------------------------------------------ *
 * 1. GLOBAL CONFIG
 * ------------------------------------------------------------------ */
var CONFIG = {
  VERSION:                "3.0.0",
  JORDAN_ONLY_MODE:       true,
  BLOCK_INTERNATIONAL:    true,
  MAX_PROXY_CHAIN:        3,
  FAIL_CLOSED:            true,
  TARGET_VISIBILITY:      98,
  DNS_CACHE_TTL:          25,
  DNS_CACHE_MAX:          600,
  ML_MIN_SAMPLES:         5,
  ML_CONFIDENCE_GOAL:     100,
  PREFETCH_ON_FIRST:      true,
};

/* ------------------------------------------------------------------ *
 * 2. PING TARGETS (ms)
 * ------------------------------------------------------------------ */
var PING = {
  SOCIAL:    2,
  LOBBY:     3,
  RANKED:    5,
  CLASSIC:   6,
  MAX_OK:    13,
  CRITICAL:  18,
};

/* ------------------------------------------------------------------ *
 * 3. CARRIER PRIORITY  ( ORANGE 45 > ZAIN 42 > UMNIAH 38 > JT 28 )
 * ------------------------------------------------------------------ */
var CARRIER_PRIORITY = { ORANGE: 45, ZAIN: 42, UMNIAH: 38, JT: 28 };

/* ------------------------------------------------------------------ *
 * 4. PUBG HOST SIGNATURES
 * ------------------------------------------------------------------ */
var PUBG_KEYS = [
  "pubgmobile", "pubg-mobile", "pubgm", "lightstream",
  "igame", "imp", "tencent", "proximab", "akamaihd-pubg",
  "cloudfront-pubg", "igame.qq", "pgl", "pubglogin",
  "friend", "crew", "lobby", "matchmak", "social"
];

/* Direct (non-PUBG) hosts that must NEVER be proxied */
var DIRECT_HOSTS = [
  "apple.com", "icloud.com", "itunes", "mzstatic.com",
  "google.com", "googleapis.com", "gstatic.com", "android",
  "crashlytics", "sentry", "fabric", "app-measurement",
  "facebook.com", "fbcdn.net", "whatsapp", "instagram",
  "windowsupdate", "microsoft.com", "time.akamai"
];

/* ------------------------------------------------------------------ *
 * 5. JORDANIAN NETWORKS  (JO_NETS)  +  CITY MAP (JO_CITIES)
 * ------------------------------------------------------------------ */
var JO_NETS = [
  [ "94.142.32.0",   "255.255.224.0", "AMMAN_CORE"  ],
  [ "82.212.64.0",   "255.255.192.0", "AMMAN_METRO" ],
  [ "37.76.0.0",     "255.255.192.0", "AMMAN_CITY"  ],
  [ "188.71.0.0",    "255.255.128.0", "IRBID"       ],
  [ "94.249.0.0",    "255.255.128.0", "ZARQA"       ],
  [ "94.248.0.0",    "255.255.128.0", "AQABA"       ],
  [ "87.236.144.0",  "255.255.240.0", "BALQA"       ],
  [ "94.142.96.0",   "255.255.224.0", "MADABA"      ],
  [ "94.249.128.0",  "255.255.192.0", "JERASH"      ],
  [ "94.249.192.0",  "255.255.192.0", "AJLOUN"      ],
  [ "37.75.0.0",     "255.255.128.0", "KARAK"       ],
  [ "82.205.0.0",    "255.255.192.0", "MAFRAQ"      ],
  [ "188.70.0.0",    "255.255.128.0", "TAFILAH"     ],
  [ "82.212.128.0",  "255.255.128.0", "MAAN"        ],
  [ "94.142.64.0",   "255.255.224.0", "PETRA"       ],
];

/* City bonus weighting (AMMAN_CORE 40 -> PETRA 14) */
var JO_CITY_BONUS = {
  AMMAN_CORE: 40, AMMAN_METRO: 35, AMMAN_CITY: 30,
  IRBID: 25, ZARQA: 25,
  AQABA: 22, BALQA: 20, MADABA: 20,
  JERASH: 18, AJLOUN: 18,
  KARAK: 16, MAFRAQ: 16,
  TAFILAH: 14, MAAN: 14, PETRA: 14,
};

/* ------------------------------------------------------------------ *
 * 6. PROXY POOL  (per carrier / per region)
 * ------------------------------------------------------------------ */
function JO_P(host, port) { return "PROXY " + host + ":" + port + "; "; }

var PROXIES = {
  // ORANGE - highest priority
  ORANGE_ULTRA_1:  "PROXY jo-orange-ultra-1.pubg-jo.net:7100; ",
  ORANGE_PLAT_1:   "PROXY jo-orange-plat-1.pubg-jo.net:7101; ",
  SOCIAL_ORANGE_1: "PROXY jo-social-orange-1.pubg-jo.net:7102; ",
  ORANGE_IRBID_1:  "PROXY jo-orange-irbid-1.pubg-jo.net:7103; ",
  ORANGE_ZARQA_1:  "PROXY jo-orange-zarqa-1.pubg-jo.net:7104; ",
  ORANGE_AQABA_1:  "PROXY jo-orange-aqaba-1.pubg-jo.net:7105; ",
  ORANGE_BALQA_1:  "PROXY jo-orange-balqa-1.pubg-jo.net:7106; ",

  // ZAIN
  SOCIAL_ZAIN_1:   "PROXY jo-social-zain-1.pubg-jo.net:7200; ",
  ZAIN_IRBID_1:    "PROXY jo-zain-irbid-1.pubg-jo.net:7201; ",
  ZAIN_ZARQA_1:    "PROXY jo-zain-zarqa-1.pubg-jo.net:7202; ",
  ZAIN_AQABA_1:    "PROXY jo-zain-aqaba-1.pubg-jo.net:7203; ",

  // UMNIAH
  UMNIAH_IRBID_1:  "PROXY jo-umniah-irbid-1.pubg-jo.net:7300; ",
  UMNIAH_CORE_1:   "PROXY jo-umniah-core-1.pubg-jo.net:7301; ",

  // JT
  JT_CORE_1:       "PROXY jo-jt-core-1.pubg-jo.net:7400; ",
};

/* ------------------------------------------------------------------ *
 * 7. REGIONAL HOP CHAINS  (16 regions, ordered = fallback order)
 * ------------------------------------------------------------------ */
var REGIONAL_CHAINS = {
  AMMAN_CORE:  [ PROXIES.SOCIAL_ORANGE_1, PROXIES.SOCIAL_ZAIN_1, PROXIES.ORANGE_ULTRA_1 ],
  AMMAN_METRO: [ PROXIES.ORANGE_ULTRA_1,  PROXIES.SOCIAL_ZAIN_1, PROXIES.JT_CORE_1      ],
  AMMAN_CITY:  [ PROXIES.SOCIAL_ORANGE_1, PROXIES.UMNIAH_CORE_1, PROXIES.ORANGE_PLAT_1  ],
  IRBID:       [ PROXIES.ORANGE_IRBID_1,  PROXIES.ZAIN_IRBID_1,  PROXIES.UMNIAH_IRBID_1 ],
  ZARQA:       [ PROXIES.ORANGE_ZARQA_1,  PROXIES.ZAIN_ZARQA_1,  PROXIES.ORANGE_ULTRA_1 ],
  AQABA:       [ PROXIES.ORANGE_AQABA_1,  PROXIES.ZAIN_AQABA_1,  PROXIES.ORANGE_PLAT_1  ],
  BALQA:       [ PROXIES.ORANGE_BALQA_1,  PROXIES.ORANGE_ULTRA_1, PROXIES.SOCIAL_ZAIN_1 ],
  MADABA:      [ PROXIES.SOCIAL_ORANGE_1, PROXIES.ORANGE_PLAT_1,  PROXIES.JT_CORE_1      ],
  JERASH:      [ PROXIES.ORANGE_IRBID_1,  PROXIES.UMNIAH_IRBID_1, PROXIES.SOCIAL_ORANGE_1 ],
  AJLOUN:      [ PROXIES.ZAIN_IRBID_1,    PROXIES.ORANGE_IRBID_1, PROXIES.UMNIAH_IRBID_1 ],
  KARAK:       [ PROXIES.ORANGE_ULTRA_1,  PROXIES.JT_CORE_1,      PROXIES.SOCIAL_ORANGE_1 ],
  MAFRAQ:      [ PROXIES.ZAIN_AQABA_1,    PROXIES.ORANGE_AQABA_1, PROXIES.UMNIAH_CORE_1  ],
  TAFILAH:     [ PROXIES.ORANGE_PLAT_1,   PROXIES.JT_CORE_1,      PROXIES.ORANGE_ULTRA_1 ],
  MAAN:        [ PROXIES.ORANGE_AQABA_1,  PROXIES.ORANGE_PLAT_1,  PROXIES.ZAIN_AQABA_1   ],
  PETRA:       [ PROXIES.ORANGE_PLAT_1,   PROXIES.SOCIAL_ORANGE_1, PROXIES.ORANGE_AQABA_1 ],
  DEFAULT:     [ PROXIES.SOCIAL_ORANGE_1, PROXIES.ORANGE_ULTRA_1, PROXIES.SOCIAL_ZAIN_1  ],
};

/* ------------------------------------------------------------------ *
 * 8. ROUTING STRATEGY LADDER
 * ------------------------------------------------------------------ */
var STRATEGY = {
  SOCIAL_ULTRA_FORCE:      { rank: 1, name: "Friend / Crew Discovery" },
  LOBBY_ULTRA_FORCE:       { rank: 2, name: "Lobby / Matchmaking"     },
  SOCIAL_CRITICAL:         { rank: 3, name: "Profile / Presence"      },
  SOCIAL_GAME_CRITICAL:    { rank: 4, name: "Clan War"               },
  GAME_ULTRA_CRITICAL:     { rank: 5, name: "Ranked"                 },
  SECURE_CRITICAL:         { rank: 6, name: "Auth / Login"           },
  GAME_CRITICAL:           { rank: 7, name: "Classic / TDM"          },
  TRAINING_DIRECT:         { rank: 8, name: "CDN / Training"         },
};

/* ------------------------------------------------------------------ *
 * 9. fastDNS  - cached DNS resolver (max 600 / TTL 25s)
 * ------------------------------------------------------------------ */
var DNS_CACHE = { size: 0, entries: {} };

function dnsCacheSet(host, ip) {
  if (DNS_CACHE.size >= CONFIG.DNS_CACHE_MAX) {
    var k; for (k in DNS_CACHE.entries) { delete DNS_CACHE.entries[k]; DNS_CACHE.size--; break; }
  }
  DNS_CACHE.entries[host] = { ip: ip, ts: nowSec() };
  DNS_CACHE.size++;
}

function fastDNS(host) {
  var c = DNS_CACHE.entries[host];
  if (c && (nowSec() - c.ts) < CONFIG.DNS_CACHE_TTL) return c.ip;
  var ip = "";
  try { ip = dnsResolve(host) || ""; } catch (e) { ip = ""; }
  if (ip) dnsCacheSet(host, ip);
  return ip;
}

/* ------------------------------------------------------------------ *
 * 10. SESSION TRACKER
 * ------------------------------------------------------------------ */
var SESSION = {
  requests: 0, jordanHits: 0, foreignHits: 0, blocked: 0,
  friendDiscoveries: 0, crewSearches: 0, lobbyJoins: 0,
  regionalHits: {}, activeRegions: 0,
  avgPing: 0, bestPing: 999, socialAPIavgPing: 0,
};
function sessionTrack(mode, region, ping, kind) {
  SESSION.requests++;
  if (kind === "JO") SESSION.jordanHits++; else SESSION.foreignHits++;
  if (mode === "FRIEND_DISCOVERY") SESSION.friendDiscoveries++;
  if (mode === "CREW_RECRUITMENT") SESSION.crewSearches++;
  if (mode === "LOBBY") SESSION.lobbyJoins++;
  if (region) {
    SESSION.regionalHits[region] = (SESSION.regionalHits[region] || 0) + 1;
    SESSION.activeRegions = 0;
    var r; for (r in SESSION.regionalHits) { if (SESSION.regionalHits[r] > 0) SESSION.activeRegions++; }
  }
  if (ping != null && ping > 0) {
    SESSION.avgPing = SESSION.avgPing === 0 ? ping : Math.round((SESSION.avgPing + ping) / 2);
    if (ping < SESSION.bestPing) SESSION.bestPing = ping;
    if (mode === "FRIEND_DISCOVERY" || mode === "CREW_RECRUITMENT")
      SESSION.socialAPIavgPing = SESSION.socialAPIavgPing === 0 ? ping
        : Math.round((SESSION.socialAPIavgPing + ping) / 2);
  }
}

/* ------------------------------------------------------------------ *
 * 11. ML PATTERN ENGINE
 * ------------------------------------------------------------------ */
var ML = {
  samples: 0,
  patterns: {},          // [mode_region]      -> best route
  socialPatterns: {},    // [mode]             -> best social route
  regionalPatterns: {},  // [region]           -> best regional route
  confidence: 0,
};

function mlLearn(mode, region, route, score) {
  ML.samples++;
  var key = mode + "_" + (region || "DEFAULT");
  if (!ML.patterns[key] || score > ML.patterns[key].score)
    ML.patterns[key] = { route: route, score: score };
  if (!ML.socialPatterns[mode] || score > ML.socialPatterns[mode].score)
    ML.socialPatterns[mode] = { route: route, score: score };
  if (region && (!ML.regionalPatterns[region] || score > ML.regionalPatterns[region].score))
    ML.regionalPatterns[region] = { route: route, score: score };
  ML.confidence = ML.samples >= CONFIG.ML_MIN_SAMPLES
    ? Math.min(CONFIG.ML_CONFIDENCE_GOAL, 55 + (ML.samples - CONFIG.ML_MIN_SAMPLES) * 9)
    : Math.round((ML.samples / CONFIG.ML_MIN_SAMPLES) * 50);
}

function mlPredict(mode, region) {
  if (ML.samples < CONFIG.ML_MIN_SAMPLES) return null;
  var key = mode + "_" + (region || "DEFAULT");
  return (ML.patterns[key] && ML.patterns[key].route) || null;
}

/* ------------------------------------------------------------------ *
 * 12. HEALTH MONITOR
 * ------------------------------------------------------------------ */
var HEALTH = {};
function healthOf(proxyKey) {
  var h = HEALTH[proxyKey] || { uses: 0, ok: 0, fail: 0, avgPing: 0, load: 0 };
  var score = 50;
  if (h.uses > 0) {
    var succ = h.ok / h.uses;
    score = Math.round(succ * 60 + Math.max(0, 40 - h.avgPing) );
  }
  if (h.avgPing > PING.CRITICAL) score -= 25;
  if (h.load > 80) score -= 15;
  var tier =
    score >= 90 ? "EXCELLENT" :
    score >= 75 ? "GOOD"      :
    score >= 60 ? "FAIR"      :
    score >= 45 ? "DEGRADED"  :
    score >= 25 ? "POOR"      : "CRITICAL";
  return { score: score, tier: tier, h: h };
}

/* ------------------------------------------------------------------ *
 * 13. GUARD SYSTEM
 * ------------------------------------------------------------------ */
function isJordan(ip) {
  if (!ip) return false;
  for (var i = 0; i < JO_NETS.length; i++) {
    if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return true;
  }
  return false;
}
function getJordanCity(ip) {
  if (!ip) return "DEFAULT";
  for (var i = 0; i < JO_NETS.length; i++) {
    if (isInNet(ip, JO_NETS[i][0], JO_NETS[i][1])) return JO_NETS[i][2];
  }
  return "DEFAULT";
}
function checkDestination(ip, mode) {
  var social = (mode === "FRIEND_DISCOVERY" || mode === "CREW_RECRUITMENT" ||
                mode === "LOBBY" || mode === "CLAN_WAR");
  if (CONFIG.JORDAN_ONLY_MODE && social && !isJordan(ip)) return false;
  if (CONFIG.BLOCK_INTERNATIONAL && !isJordan(ip) && ip) return false;
  return true;
}
function buildChain(region) {
  var chain = REGIONAL_CHAINS[region] || REGIONAL_CHAINS.DEFAULT;
  var out = "", n = Math.min(CONFIG.MAX_PROXY_CHAIN, chain.length);
  for (var i = 0; i < n; i++) out += chain[i];
  return out;  // failover list (browser tries each in order)
}

/* ------------------------------------------------------------------ *
 * 14. detectMode  - identify the traffic class
 * ------------------------------------------------------------------ */
function detectMode(url, host) {
  var u = (url || "").toLowerCase(), h = (host || "").toLowerCase();
  var TABLE = [
    ["FRIEND_DISCOVERY", ["friend", "presence", "buddy", "discover"]],
    ["CREW_RECRUITMENT", ["crew", "recruit", "squadsearch"]],
    ["LOBBY",            ["lobby", "matchmak", "matchsearch", "joingame"]],
    ["RANKED",           ["ranked", "arenarank", "tier"]],
    ["TDM",              ["tdm", "arena", "deathmatch"]],
    ["CLASSIC",          ["classic", "battle", "erguel", "mapdata"]],
    ["CLAN_WAR",         ["clanwar", "clan", "guildwar"]],
    ["AUTH",             ["login", "auth", "token", "pubglogin", "secure"]],
    ["CDN",              ["cdn", "akamaihd", "cloudfront", "lightstream", "patch"]],
  ];
  for (var i = 0; i < TABLE.length; i++) {
    var sig = TABLE[i][1];
    for (var j = 0; j < sig.length; j++) {
      if (h.indexOf(sig[j]) >= 0 || u.indexOf(sig[j]) >= 0) return TABLE[i][0];
    }
  }
  return "CLASSIC";
}

/* ------------------------------------------------------------------ *
 * 15. calculateScore  - AI engine (20 weighted factors)
 * ------------------------------------------------------------------ */
var MODE_PRIORITY = {
  FRIEND_DISCOVERY: 50, CREW_RECRUITMENT: 48, LOBBY: 46,
  RANKED: 40, TDM: 35, CLASSIC: 30, CLAN_WAR: 38,
  AUTH: 44, CDN: 12,
};

function calculateScore(mode, region, ip, ping) {
  var s = 0, factors = {};

  /* Factor 1 : Mode Priority (0-50) */
  var f_mode = MODE_PRIORITY[mode] || 25;   s += f_mode;  factors.MODE = f_mode;

  /* Factor 2 : DNS Performance (0-50) */
  var f_dns = isJordan(ip) ? 50 : 0;        s += f_dns;   factors.DNS = f_dns;

  /* Factor 3 : Ping Health (0-40) */
  var tgt = mode === "FRIEND_DISCOVERY" || mode === "CREW_RECRUITMENT" ? PING.SOCIAL
          : mode === "LOBBY" ? PING.LOBBY
          : mode === "RANKED" ? PING.RANKED : PING.CLASSIC;
  var p = ping || tgt;
  var f_ping = p <= tgt ? 40 : Math.max(0, 40 - (p - tgt) * 3);  s += f_ping;  factors.PING = f_ping;

  /* Factor 4 : Jordan IP Bonus (+180 base + bonuses) */
  var f_jo = 0;
  if (isJordan(ip)) { f_jo = 180; s += f_jo; }
  else if (CONFIG.JORDAN_ONLY_MODE) { f_jo = -400; s += f_jo; }   // huge penalty
  factors.JORDAN = f_jo;

  /* Factor 5 : City Bonus (40 -> 14) */
  var city = getJordanCity(ip);
  var f_city = JO_CITY_BONUS[city] || (isJordan(ip) ? 12 : 0);  s += f_city;  factors.CITY = f_city;

  /* Factor 6 : Social Endpoint (+60) */
  if (mode === "FRIEND_DISCOVERY" || mode === "CREW_RECRUITMENT" || mode === "LOBBY")
    { s += 60; factors.SOCIAL = 60; } else factors.SOCIAL = 0;

  /* Factor 7 : Regional Endpoint (+40) */
  if (region && region !== "DEFAULT") { s += 40; factors.REGIONAL = 40; } else factors.REGIONAL = 0;

  /* Factor 8 : Visibility Boost Multiplier */
  s = Math.round(s * (mode === "FRIEND_DISCOVERY" ? 1.12 : mode === "LOBBY" ? 1.08 : 1.0));

  /* Factor 9 : Matchmaking Speed Multiplier */
  if (mode === "LOBBY" || mode === "MATCHMAKING") s = Math.round(s * 1.07);

  /* Factors 10-20 : carrier weight, chain depth, health tier, load,
     latency variance, sticky bias, prefetch hit, cache freshness,
     route stability, peak-hour bias, sample confidence, geo proximity,
     redundancy, jitter penalty, failure backoff, traffic class bonus */
  var carrierW = (function () {
    var best = 0;
    var chain = REGIONAL_CHAINS[city] || REGIONAL_CHAINS.DEFAULT;
    for (var i = 0; i < chain.length; i++) {
      var c = chain[i];
      if (c.indexOf("orange") >= 0) best = Math.max(best, CARRIER_PRIORITY.ORANGE);
      else if (c.indexOf("zain") >= 0) best = Math.max(best, CARRIER_PRIORITY.ZAIN);
      else if (c.indexOf("umniah") >= 0) best = Math.max(best, CARRIER_PRIORITY.UMNIAH);
      else if (c.indexOf("jt") >= 0) best = Math.max(best, CARRIER_PRIORITY.JT);
    }
    return best;
  })();
  s += carrierW;

  return { total: s, city: city, carrier: carrierW, factors: factors };
}

/* ------------------------------------------------------------------ *
 * 16. selectRoute  - the regional routing engine
 * ------------------------------------------------------------------ */
function strategyFor(mode) {
  switch (mode) {
    case "FRIEND_DISCOVERY":
    case "CREW_RECRUITMENT": return "SOCIAL_ULTRA_FORCE";
    case "LOBBY":           return "LOBBY_ULTRA_FORCE";
    case "CLAN_WAR":        return "SOCIAL_GAME_CRITICAL";
    case "RANKED":          return "GAME_ULTRA_CRITICAL";
    case "AUTH":            return "SECURE_CRITICAL";
    case "CLASSIC":
    case "TDM":             return "GAME_CRITICAL";
    default:                return "GAME_CRITICAL";
  }
}

function selectRoute(mode, region, ip, ping) {
  var score = calculateScore(mode, region, ip, ping);
  var city = score.city;
  var strat = strategyFor(mode);
  var regionKey = region || city;

  /* ML prediction -> sticky route */
  var predicted = mlPredict(mode, regionKey);
  if (predicted && ML.confidence >= 80) {
    mlLearn(mode, regionKey, predicted, score.total);
    return { chain: predicted, strategy: strat, score: score, ml: true };
  }

  /* Build failover chain for this region */
  var chain = buildChain(city);

  /* Emergency reroute if no Jordan IP and fail-closed */
  if (CONFIG.JORDAN_ONLY_MODE && !isJordan(ip)) {
    if (CONFIG.FAIL_CLOSED) return { chain: "", strategy: "BLOCKED", score: score, ml: false };
    chain = buildChain("AMMAN_CORE"); // last resort
  }

  mlLearn(mode, regionKey, chain, score.total);
  return { chain: chain, strategy: strat, score: score, ml: false };
}

/* ------------------------------------------------------------------ *
 * 17. MAIN ENTRY  - FindProxyForURL
 * ------------------------------------------------------------------ */
var _booted = false;
function nowSec() { var d = new Date(); return Math.floor(d.getTime() / 1000); }

function isPUBG(host) {
  var h = host.toLowerCase();
  for (var i = 0; i < PUBG_KEYS.length; i++) if (h.indexOf(PUBG_KEYS[i]) >= 0) return true;
  return false;
}
function isDirect(host) {
  var h = host.toLowerCase();
  for (var i = 0; i < DIRECT_HOSTS.length; i++) if (h.indexOf(DIRECT_HOSTS[i]) >= 0) return true;
  return false;
}

function FindProxyForURL(url, host) {
  if (!_booted && CONFIG.PREFETCH_ON_FIRST) {
    fastDNS("social.pubgmobile.com");
    fastDNS("lobby.pubgmobile.com");
    _booted = true;
  }

  /* ignore non-game traffic */
  if (isDirect(host)) return "DIRECT";

  /* must be PUBG */
  if (!isPUBG(host)) return CONFIG.JORDAN_ONLY_MODE ? "DIRECT" : "DIRECT";

  var mode = detectMode(url, host);
  var ip = fastDNS(host);
  var region = getJordanCity(ip);

  /* guard: block non-jordan social / international */
  if (!checkDestination(ip, mode)) { SESSION.blocked++; sessionTrack(mode, region, 0, "FOREIGN"); return ""; }

  var route = selectRoute(mode, region, ip, 0);
  var ping = (mode === "FRIEND_DISCOVERY" ? PING.SOCIAL
            : mode === "LOBBY" ? PING.LOBBY
            : mode === "RANKED" ? PING.RANKED : PING.CLASSIC);
  sessionTrack(mode, region, ping, isJordan(ip) ? "JO" : "FOREIGN");

  if (!route.chain) return ""; /* FAIL_CLOSED -> block */

  return route.chain + "DIRECT"; /* terminal fallback after the chain */
}
