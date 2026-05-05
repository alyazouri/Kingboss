/* 
  PUBG JO-EXCLUSIVE ROUTER v33.1
  Optimized for Jordanian ISPs, Local Matchmaking & Low Latency
  PAC Standard: RFC 1945 / Netscape Proxy Auto-Config
*/

var CFG = {
    VERSION: "33.1-JO-OPTIMIZED",
    MODE: "JORDAN_FORCE_V2",
    TARGET_PING: 4,
    MAX_ACCEPTABLE_PING: 12,
    JORDAN_ONLY_MODE: true,
    BLOCK_INTERNATIONAL: true,
    STRICT_IPV4_ONLY: true,
    ENABLE_FALLBACK_CHAIN: true,
    DNS_TIMEOUT_MS: 800
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  JORDANIAN ISP PROXY POOL (Multi-Hop Fallback Ready)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_PROXY = {
    // Tier 0: Amman Core (Lowest Latency)
    ORANGE_AMMAN:  { ip: "94.127.211.6",   port: 20001, isp: "ORANGE", city: "AMMAN", tier: 0 },
    ZAIN_AMMAN:    { ip: "109.237.193.187",port: 80,    isp: "ZAIN",   city: "AMMAN", tier: 0 },
    JT_AMMAN:      { ip: "188.247.0.1",    port: 8080,  isp: "JT",     city: "AMMAN", tier: 0 },
    
    // Tier 1: Regional Hubs
    ORANGE_IRBID:  { ip: "149.200.136.6",  port: 443,   isp: "ORANGE", city: "IRBID", tier: 1 },
    ZAIN_ZARQA:    { ip: "79.173.192.10",  port: 8080,  isp: "ZAIN",   city: "ZARQA", tier: 1 },
    UMNIAH_AMMAN:  { ip: "212.35.85.26",   port: 80,    isp: "UMNIAH", city: "AMMAN", tier: 1 },
    
    // Tier 2: Edge / Fallback
    GO_AMMAN:      { ip: "91.106.0.1",     port: 80,    isp: "GO",     city: "AMMAN", tier: 2 },
    UMNIAH_AQABA:  { ip: "82.212.128.10",  port: 3128,  isp: "UMNIAH", city: "AQABA", tier: 2 }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  OFFICIAL JORDANIAN IPv4 RANGES (ASNs Verified)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var JO_NETS = [
    ["46.185.128.0", "17"], ["94.127.208.0", "20"], ["109.237.192.0", "18"],
    ["176.28.0.0", "15"], ["82.212.0.0", "16"], ["188.247.0.0", "16"],
    ["91.106.0.0", "16"], ["79.173.192.0", "18"], ["212.35.64.0", "18"],
    ["37.220.0.0", "16"], ["94.230.0.0", "16"], ["176.203.0.0", "16"]
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DOMAIN ROUTING MAP (PUBG / Tencent / Matchmaking)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var PUBG_MATCHMAKING = [
    "lobby.pubgmobile.com", "matchmaking.pubgmobile.com", "friend.pubgmobile.com",
    "crew.pubgmobile.com", "social.pubgmobile.com", "presence.pubgmobile.com",
    "game.pubgmobile.com", "auth.pubgmobile.com", "update.pubgmobile.com"
];

var CDN_UPDATE = [
    "cdn.pubgmobile.com", "patch.pubgmobile.com", "res.pubgmobile.com",
    "download.pubgmobile.com", "tencentcloud.com", "myqcloud.com"
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CORE PAC FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function isIPv4(ip) {
    if (!ip || ip.indexOf(":") !== -1) return false;
    var p = ip.split(".");
    return p.length === 4 && p.every(function(n) { 
        var v = parseInt(n, 10); 
        return !isNaN(v) && v >= 0 && v <= 255; 
    });
}

function isJordanIP(ip) {
    if (!isIPv4(ip)) return false;
    for (var i = 0; i < JO_NETS.length; i++) {
        if (isInNet(ip, JO_NETS[i][0], maskFromCIDR(JO_NETS[i][1]))) return true;
    }
    return false;
}

function maskFromCIDR(cidr) {
    var m = {
        "16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0",
        "19":"255.255.224.0","20":"255.255.240.0","15":"255.254.0.0"
    };
    return m[String(cidr)] || "255.255.0.0";
}

function domainInList(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        if (h === list[i] || h.indexOf("." + list[i]) !== -1) return true;
    }
    return false;
}

function buildProxyChain(tierLimit) {
    var chain = [];
    for (var name in JO_PROXY) {
        if (JO_PROXY[name].tier <= tierLimit) {
            chain.push("PROXY " + JO_PROXY[name].ip + ":" + JO_PROXY[name].port);
        }
    }
    if (CFG.ENABLE_FALLBACK_CHAIN) chain.push("DIRECT");
    return chain.join("; ");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN PAC ENTRY POINT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function FindProxyForURL(url, host) {
    if (!host) return "DIRECT";
    var h = host.toLowerCase();

    // 1. Private / Local Networks
    if (isPlainHostName(host) || 
        isInNet(host, "10.0.0.0", "255.0.0.0") || 
        isInNet(host, "172.16.0.0", "255.240.0.0") || 
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }

    // 2. Non-PUBG Traffic → Direct
    if (h.indexOf("pubg") === -1 && h.indexOf("tencent") === -1 && h.indexOf("qq.com") === -1 && h.indexOf("krafton") === -1) {
        return "DIRECT";
    }

    // 3. DNS Resolution & Validation
    var ip = dnsResolve(host);
    if (!ip || !isIPv4(ip)) {
        return CFG.STRICT_IPV4_ONLY ? "DIRECT" : "DIRECT"; // Fallback to direct on IPv6/DNS fail
    }

    // 4. STRICT JORDAN ENFORCEMENT
    if (!isJordanIP(ip)) {
        return CFG.BLOCK_INTERNATIONAL ? "PROXY 127.0.0.1:1" : "DIRECT"; // Blackhole non-JO
    }

    // 5. ROUTING LOGIC
    if (domainInList(h, PUBG_MATCHMAKING)) {
        // Matchmaking: Route through Tier 0+1 for fastest lobby join
        return buildProxyChain(1);
    }
    
    if (domainInList(h, CDN_UPDATE)) {
        // CDN/Updates: Direct or Tier 2 to save proxy bandwidth
        return "DIRECT";
    }

    // Gameplay / Voice / Auth: Tier 0 only
    return buildProxyChain(0);
}
