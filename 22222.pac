// PUBG JORDAN v39 ULTIMATE MAX PERFORMANCE +++
// ALL PUBG TRAFFIC = PROXY | NON-PUBG = DIRECT

var CFG = {
    VERSION: "39.0-ULTIMATE-MAX-PERFORMANCE+++",
    MODE: "PUBG_JORDAN_PRIORITY",
    PROXY_MODE: true,
    JORDAN_FIRST: true,
    MENA_FALLBACK: true,
    EUROPE_FALLBACK: false,
    FAILOVER: true,
    ANTI_JITTER: true,
    ROUTE_STICKY: true,
    DNS_CACHE: true,
    DNS_CACHE_TTL: 30000,
    MAX_PROXY_FAILURES: 2,
    PROXY_RETRY: true,
    DIRECT_FOR_NON_PUBG: true
};

var PUBG_KEYS = [
    "pubg",
    "pubgmobile",
    "pubgmobile.com",
    "tencent",
    "tencentgames",
    "krafton",
    "levelinfinite",
    "lightspeed",
    "proxima",
    "pubgmobile",
    "pubgmobileupdate",
    "pubgmobilegame",
    "match",
    "matchmaking",
    "lobby",
    "recruit",
    "recruitment",
    "team",
    "party",
    "friend",
    "friends",
    "social",
    "chat",
    "room",
    "queue",
    "battle",
    "game",
    "login",
    "account",
    "profile",
    "inventory",
    "clan",
    "guild"
];

var JORDAN_NETWORKS = [

    ["46.32.96.0", "19"],
    ["94.142.32.0", "19"],
    ["176.28.128.0", "17"],
    ["176.29.0.0", "16"],

    ["46.185.128.0", "17"],
    ["94.127.208.0", "20"],
    ["94.127.216.0", "21"],
    ["79.173.192.0", "18"],
    ["193.188.64.0", "18"],
    ["80.90.160.0", "19"],

    ["212.35.64.0", "20"],
    ["212.35.80.0", "20"],
    ["212.118.0.0", "20"],

    ["194.165.128.0", "19"],
    ["195.138.240.0", "20"]
];

var MENA_NETWORKS = [
    ["188.114.0.0", "16"],
    ["193.108.0.0", "16"],
    ["5.1.0.0", "16"],
    ["94.200.0.0", "16"]
];

var NETWORK_PRIORITY = {
    AS48832: 100,
    AS9038: 95,
    AS8697: 90,
    AS47887: 75
};

var PROXY_POOL = [

    {
        name: "ORANGE_JORDAN",
        ip: "94.127.211.6",
        port: 10010,
        region: "JORDAN",
        carrier: "ORANGE_JO",
        priority: 100,
        enabled: true
    },

    {
        name: "ZAIN_JORDAN",
        ip: "109.237.193.187",
        port: 443,
        region: "JORDAN",
        carrier: "ZAIN_JO",
        priority: 99,
        enabled: true
    },

    {
        name: "MENA",
        ip: "188.114.96.1",
        port: 443,
        region: "MENA",
        carrier: "CLOUDFLARE_MENA",
        priority: 60,
        enabled: true
    }

];

var PROXY_STATE = {
    current: -1,
    failures: {},
    lastSelection: 0
};

var DNS_CACHE_DATA = {};

function CIDR_MASK(cidr) {

    var mask = 0;

    for (var i = 0; i < cidr; i++) {
        mask |= (0x80000000 >>> i);
    }

    return (
        ((mask >>> 24) & 255) + "." +
        ((mask >>> 16) & 255) + "." +
        ((mask >>> 8) & 255) + "." +
        (mask & 255)
    );
}

function MATCH_NETWORK(ip, networks) {

    if (!ip) {
        return false;
    }

    for (var i = 0; i < networks.length; i++) {

        var network = networks[i][0];
        var cidr = parseInt(networks[i][1], 10);

        if (
            isInNet(
                ip,
                network,
                CIDR_MASK(cidr)
            )
        ) {
            return true;
        }
    }

    return false;
}

function IS_JORDAN(ip) {

    return MATCH_NETWORK(
        ip,
        JORDAN_NETWORKS
    );
}

function IS_MENA(ip) {

    return MATCH_NETWORK(
        ip,
        MENA_NETWORKS
    );
}

function IS_PUBG_HOST(host) {

    if (!host) {
        return false;
    }

    var h = host.toLowerCase();

    for (var i = 0; i < PUBG_KEYS.length; i++) {

        if (
            h.indexOf(
                PUBG_KEYS[i]
            ) !== -1
        ) {
            return true;
        }
    }

    return false;
}

function GET_MODE(host) {

    var h = host.toLowerCase();

    if (
        h.indexOf("matchmaking") !== -1 ||
        h.indexOf("match") !== -1 ||
        h.indexOf("queue") !== -1
    ) {
        return "MATCHMAKING";
    }

    if (
        h.indexOf("lobby") !== -1 ||
        h.indexOf("room") !== -1
    ) {
        return "LOBBY";
    }

    if (
        h.indexOf("recruit") !== -1 ||
        h.indexOf("team") !== -1 ||
        h.indexOf("party") !== -1
    ) {
        return "RECRUITMENT_TEAM";
    }

    if (
        h.indexOf("friend") !== -1 ||
        h.indexOf("social") !== -1 ||
        h.indexOf("chat") !== -1
    ) {
        return "SOCIAL";
    }

    if (
        h.indexOf("battle") !== -1 ||
        h.indexOf("game") !== -1 ||
        h.indexOf("combat") !== -1
    ) {
        return "GAME";
    }

    if (
        h.indexOf("login") !== -1 ||
        h.indexOf("account") !== -1 ||
        h.indexOf("profile") !== -1
    ) {
        return "AUTH";
    }

    return "PUBG_GENERAL";
}

function GET_DNS(host) {

    if (!CFG.DNS_CACHE) {
        return dnsResolve(host);
    }

    var now = new Date().getTime();
    var cached = DNS_CACHE_DATA[host];

    if (
        cached &&
        (now - cached.time) < CFG.DNS_CACHE_TTL
    ) {
        return cached.ip;
    }

    var ip = dnsResolve(host);

    if (ip) {

        DNS_CACHE_DATA[host] = {
            ip: ip,
            time: now
        };

    }

    return ip;
}

function PROXY_SCORE(proxy, ip, mode) {

    if (!proxy || !proxy.enabled) {
        return -999999;
    }

    var score = proxy.priority || 0;

    if (proxy.region === "JORDAN") {
        score += 1000;
    }

    if (
        proxy.region === "MENA" &&
        CFG.MENA_FALLBACK
    ) {
        score += 400;
    }

    if (
        proxy.region === "EUROPE" &&
        !CFG.EUROPE_FALLBACK
    ) {
        score -= 10000;
    }

    if (
        mode === "MATCHMAKING" &&
        proxy.region === "JORDAN"
    ) {
        score += 100;
    }

    if (
        mode === "LOBBY" &&
        proxy.region === "JORDAN"
    ) {
        score += 100;
    }

    if (
        mode === "RECRUITMENT_TEAM" &&
        proxy.region === "JORDAN"
    ) {
        score += 100;
    }

    if (
        mode === "GAME" &&
        proxy.region === "JORDAN"
    ) {
        score += 150;
    }

    if (CFG.ANTI_JITTER) {
        score += 50;
    }

    var failures =
        PROXY_STATE.failures[proxy.ip] || 0;

    score -= failures * 500;

    return score;
}

function GET_BEST_PROXY(ip, mode) {

    var best = null;
    var bestScore = -999999;

    for (var i = 0; i < PROXY_POOL.length; i++) {

        var proxy = PROXY_POOL[i];

        var score =
            PROXY_SCORE(
                proxy,
                ip,
                mode
            );

        if (score > bestScore) {

            bestScore = score;
            best = proxy;

        }
    }

    return best;
}

function GET_FAILOVER_PROXY(current, ip, mode) {

    var best = null;
    var bestScore = -999999;

    for (var i = 0; i < PROXY_POOL.length; i++) {

        var proxy = PROXY_POOL[i];

        if (
            !proxy ||
            !proxy.enabled ||
            proxy.ip === current.ip
        ) {
            continue;
        }

        var score =
            PROXY_SCORE(
                proxy,
                ip,
                mode
            );

        if (score > bestScore) {

            bestScore = score;
            best = proxy;

        }
    }

    return best;
}

function BUILD_PROXY(proxy) {

    if (!proxy) {
        return "DIRECT";
    }

    return (
        "PROXY " +
        proxy.ip +
        ":" +
        proxy.port
    );
}

function LOCAL_HOST(host) {

    if (!host) {
        return true;
    }

    if (isPlainHostName(host)) {
        return true;
    }

    if (dnsDomainIs(host, ".local")) {
        return true;
    }

    if (dnsDomainIs(host, ".lan")) {
        return true;
    }

    return false;
}

function FindProxyForURL(url, host) {

    if (!host) {
        return "DIRECT";
    }

    var h = host.toLowerCase();

    if (LOCAL_HOST(h)) {
        return "DIRECT";
    }

    if (!IS_PUBG_HOST(h)) {
        return "DIRECT";
    }

    var mode = GET_MODE(h);

    var ip = GET_DNS(h);

    var proxy =
        GET_BEST_PROXY(
            ip,
            mode
        );

    if (proxy) {
        return BUILD_PROXY(proxy);
    }

    if (CFG.FAILOVER) {

        var fallback =
            GET_FAILOVER_PROXY(
                proxy,
                ip,
                mode
            );

        if (fallback) {
            return BUILD_PROXY(fallback);
        }
    }

    return "DIRECT";
}
