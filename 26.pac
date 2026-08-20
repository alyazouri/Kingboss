// PUBG JORDAN v41 ULTIMATE PRIMARY PROXY ENGINE

var CFG = {
    VERSION: "41.0-PRIMARY-94.127.211.6",
    ENABLED: true,
    PUBG_ONLY: true,
    NON_PUBG_DIRECT: true,

    PRIMARY_PROXY_IP: "94.127.211.6",
    PRIMARY_PROXY_PORT: 10010,

    FAILOVER_ENABLED: true,

    FAILOVER_1_IP: "109.237.193.187",
    FAILOVER_1_PORT: 443,

    FAILOVER_2_IP: "188.114.96.1",
    FAILOVER_2_PORT: 443
};

var PUBG_DOMAINS = [

    "pubg",
    "pubgmobile",
    "pubgmobile.com",
    "tencent",
    "tencentgames",
    "krafton",
    "levelinfinite",
    "lightspeed",
    "proxima"

];

var PUBG_SERVICES = [

    "login",
    "auth",
    "account",
    "profile",

    "lobby",
    "room",

    "match",
    "matchmaking",
    "queue",

    "recruit",
    "recruitment",

    "team",
    "party",

    "friend",
    "friends",

    "social",
    "chat",

    "clan",
    "guild",

    "inventory",
    "battle",
    "game",
    "combat",

    "download",
    "update",
    "patch"

];

var JORDAN_NETWORKS = [

    // Zain Jordan — AS48832
    ["46.32.96.0", "19"],
    ["77.245.0.0", "20"],
    ["176.28.128.0", "17"],
    ["176.29.0.0", "16"],
    ["185.109.192.0", "22"],
    ["188.247.64.0", "19"],

    // Jordan Data Communications — AS8376
    ["87.236.192.0", "18"],
    ["94.142.0.0", "16"],
    ["212.118.128.0", "17"],

    // Umniah Jordan — AS9038
    ["212.35.64.0", "20"],
    ["212.35.80.0", "20"],
    ["212.118.0.0", "20"],

    // Orange Jordan — AS8697
    ["46.185.128.0", "17"],
    ["79.173.192.0", "18"],
    ["80.90.160.0", "19"],
    ["94.127.208.0", "20"],
    ["94.127.216.0", "21"],
    ["193.188.64.0", "18"],

    // DamaMAX — AS47887
    ["194.165.128.0", "19"],
    ["195.138.240.0", "20"]

];

var JORDAN_DNS = [
    "46.185.129.130",
    "94.127.208.1"
];

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

function IS_IN_NETWORK(ip, networks) {

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

function IS_JORDAN_IP(ip) {

    return IS_IN_NETWORK(
        ip,
        JORDAN_NETWORKS
    );

}

function IS_PUBG_HOST(host) {

    if (!host) {
        return false;
    }

    var h = host.toLowerCase();

    for (var i = 0; i < PUBG_DOMAINS.length; i++) {

        if (
            h.indexOf(
                PUBG_DOMAINS[i]
            ) !== -1
        ) {
            return true;
        }

    }

    for (var j = 0; j < PUBG_SERVICES.length; j++) {

        if (
            h.indexOf(
                PUBG_SERVICES[j]
            ) !== -1
        ) {
            return true;
        }

    }

    return false;
}

function GET_PUBG_MODE(host) {

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
        return "RECRUITMENT";
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
        h.indexOf("combat") !== -1 ||
        h.indexOf("game") !== -1
    ) {
        return "GAME";
    }

    if (
        h.indexOf("login") !== -1 ||
        h.indexOf("auth") !== -1 ||
        h.indexOf("account") !== -1
    ) {
        return "AUTH";
    }

    if (
        h.indexOf("download") !== -1 ||
        h.indexOf("update") !== -1 ||
        h.indexOf("patch") !== -1
    ) {
        return "UPDATE";
    }

    return "PUBG_GENERAL";
}

function IS_LOCAL_HOST(host) {

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

    if (dnsDomainIs(host, ".home")) {
        return true;
    }

    return false;
}

function PRIMARY_PROXY() {

    return (
        "PROXY " +
        CFG.PRIMARY_PROXY_IP +
        ":" +
        CFG.PRIMARY_PROXY_PORT
    );

}

function FAILOVER_PROXY_1() {

    return (
        "PROXY " +
        CFG.FAILOVER_1_IP +
        ":" +
        CFG.FAILOVER_1_PORT
    );

}

function FAILOVER_PROXY_2() {

    return (
        "PROXY " +
        CFG.FAILOVER_2_IP +
        ":" +
        CFG.FAILOVER_2_PORT
    );

}

function GET_PUBG_ROUTE(host) {

    var mode = GET_PUBG_MODE(host);

    if (mode === "GAME") {
        return PRIMARY_PROXY();
    }

    if (mode === "MATCHMAKING") {
        return PRIMARY_PROXY();
    }

    if (mode === "LOBBY") {
        return PRIMARY_PROXY();
    }

    if (mode === "RECRUITMENT") {
        return PRIMARY_PROXY();
    }

    if (mode === "SOCIAL") {
        return PRIMARY_PROXY();
    }

    if (mode === "AUTH") {
        return PRIMARY_PROXY();
    }

    if (mode === "UPDATE") {
        return PRIMARY_PROXY();
    }

    return PRIMARY_PROXY();
}

function FindProxyForURL(url, host) {

    if (!CFG.ENABLED) {
        return "DIRECT";
    }

    if (!host) {
        return "DIRECT";
    }

    var h = host.toLowerCase();

    if (IS_LOCAL_HOST(h)) {
        return "DIRECT";
    }

    if (!IS_PUBG_HOST(h)) {
        return "DIRECT";
    }

    return GET_PUBG_ROUTE(h);
}
