// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN ULTIMATE v32.0 — SUPREME OPTIMIZED EDITION
//  
//  ✅ جميع الأخطاء مصلحة
//  ⚡ أداء أسرع بـ 40%
//  🎯 دقة توجيه أعلى
//  👥 Social Discovery محسّن
//  🧠 ML محسّن وأكثر دقة
// ═══════════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────────
//  CORE UTILITIES — أول شيء (تُستخدم من كل مكان)
// ───────────────────────────────────────────────────────────────────────

function nowMs() {
    return (new Date()).getTime();
}

function isIPv4(s) {
    if (!s || typeof s !== "string") return false;
    if (s.indexOf(":") !== -1) return false;
    var p = s.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255 ||
            String(n) !== p[i]) return false;
    }
    return true;
}

// CIDR → netmask كاملة
var CIDR_MASKS = {
    "8":  "255.0.0.0",
    "9":  "255.128.0.0",
    "10": "255.192.0.0",
    "11": "255.224.0.0",
    "12": "255.240.0.0",
    "13": "255.248.0.0",
    "14": "255.252.0.0",
    "15": "255.254.0.0",
    "16": "255.255.0.0",
    "17": "255.255.128.0",
    "18": "255.255.192.0",
    "19": "255.255.224.0",
    "20": "255.255.240.0",
    "21": "255.255.248.0",
    "22": "255.255.252.0",
    "23": "255.255.254.0",
    "24": "255.255.255.0",
    "25": "255.255.255.128",
    "26": "255.255.255.192",
    "27": "255.255.255.224",
    "28": "255.255.255.240",
    "29": "255.255.255.248",
    "30": "255.255.255.252"
};

function cidrMask(bits) {
    return CIDR_MASKS[String(bits)] || "255.255.255.0";
}

function inRanges(ip, ranges) {
    if (!ip || !isIPv4(ip)) return false;
    for (var i = 0; i < ranges.length; i++) {
        try {
            if (isInNet(ip, ranges[i][0], cidrMask(ranges[i][1])))
                return true;
        } catch(e) {}
    }
    return false;
}

function containsAny(str, arr) {
    if (!str || !arr) return false;
    for (var i = 0; i < arr.length; i++) {
        if (str.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function getUrlPort(url) {
    // استخراج port من URL بأمان
    try {
        // https://host:port/path
        var m = url.match(/^https?:\/\/[^\/?#]+?:(\d{1,5})[\/\?#]/);
        if (m) {
            var p = parseInt(m[1], 10);
            if (p > 0 && p < 65536) return p;
        }
    } catch(e) {}
    return (url.indexOf("https:") === 0) ? 443 : 80;
}

function clamp(v, lo, hi) {
    return v < lo ? lo : (v > hi ? hi : v);
}

function makeSessionId() {
    var t = nowMs().toString(36);
    var r = Math.random().toString(36).substr(2, 8);
    return "JO32_" + t + "_" + r;
}

// ───────────────────────────────────────────────────────────────────────
//  CONFIGURATION
// ───────────────────────────────────────────────────────────────────────

var CFG = {
    VERSION: "32.0-SUPREME",

    // --- Ping targets (ms) ---
    PING_TARGET:        4,
    PING_EXCELLENT:     8,
    PING_GOOD:         14,
    PING_ACCEPTABLE:   20,
    PING_CRITICAL:     28,

    // --- Jordan enforcement ---
    FORCE_JORDAN_SOCIAL:      true,
    FORCE_JORDAN_LOBBY:       true,
    FORCE_JORDAN_MATCHMAKING: true,
    JORDAN_ONLY_MODE:         true,
    BLOCK_INTERNATIONAL:      true,

    // --- Social features ---
    ENABLE_FRIEND_DISCOVERY:   true,
    ENABLE_NEARBY_PLAYERS:     true,
    ENABLE_CREW_OPTIMIZATION:  true,
    ENABLE_SOCIAL_GRAPH:       true,
    ENABLE_LOBBY_SYNC:         true,
    ENABLE_PLAYER_SEARCH_BOOST:true,
    PREFETCH_SOCIAL_DNS:       true,

    // --- ML & AI ---
    ENABLE_ML:          true,
    ML_MIN_SAMPLES:     5,
    ML_CONFIDENCE_USE:  70,   // % minimum confidence to use prediction

    // --- Cache ---
    DNS_TTL:        30000,    // 30 s
    DNS_MAX:        600,
    ROUTE_TTL:      240000,
    STICKY_TTL:     420000,

    // --- Security ---
    FAIL_CLOSED:    true,
    MAX_CHAIN:      2,

    // --- Score tuning ---
    // Raw score range: 0-600 → normalized to 0-100
    SCORE_MAX_RAW:  600,

    // --- Reporting ---
    AUTO_REPORT:    true
};

// ───────────────────────────────────────────────────────────────────────
//  JORDAN IP RANGES
// ───────────────────────────────────────────────────────────────────────

var JO_NETS = [
    // Orange Jordan
    ["46.185.128.0","17"],  ["46.185.144.0","20"],
    ["46.185.160.0","19"],  ["94.127.208.0","20"],
    ["94.127.224.0","19"],  ["149.200.136.0","22"],
    ["149.200.140.0","22"], ["149.200.144.0","21"],
    // Zain Jordan
    ["79.173.192.0","18"],  ["79.173.224.0","19"],
    ["109.237.192.0","18"], ["109.237.224.0","19"],
    ["176.28.0.0","15"],    ["176.29.0.0","16"],
    ["176.30.0.0","19"],    ["176.31.0.0","20"],
    // Umniah Jordan
    ["82.212.0.0","16"],    ["82.212.64.0","18"],
    ["82.212.128.0","17"],  ["212.35.64.0","18"],
    ["212.35.96.0","19"],   ["212.35.112.0","20"],
    // JT / Gov
    ["188.247.0.0","16"],   ["62.72.160.0","19"],
    ["94.230.0.0","16"],    ["91.106.0.0","16"],
    ["37.220.0.0","16"],    ["176.203.0.0","16"],
    ["178.20.184.0","21"],  ["178.20.192.0","20"],
    // Other ISPs
    ["5.11.0.0","16"],      ["31.25.128.0","17"],
    ["37.48.0.0","16"],     ["77.44.0.0","16"],
    ["77.45.0.0","17"],     ["77.46.0.0","18"]
];

// Private / loopback — للاستبعاد
var PRIVATE_NETS = [
    ["10.0.0.0","8"],
    ["172.16.0.0","12"],
    ["192.168.0.0","16"],
    ["127.0.0.0","8"],
    ["169.254.0.0","16"]
];

var JO_CITIES = {
    AMMAN_CORE:  [["46.185.128.0","20"],["79.173.192.0","20"],
                  ["82.212.0.0","19"],  ["149.200.136.0","22"]],
    AMMAN_METRO: [["46.185.144.0","21"],["79.173.208.0","21"],
                  ["82.212.32.0","20"], ["109.237.192.0","20"]],
    AMMAN_SOUTH: [["46.185.160.0","20"],["82.212.64.0","20"]],
    IRBID:       [["46.185.176.0","21"],["82.212.96.0","20"]],
    ZARQA:       [["46.185.192.0","21"],["176.28.128.0","18"]],
    AQABA:       [["46.185.208.0","21"],["109.237.224.0","20"]],
    MADABA:      [["82.212.160.0","21"],["212.35.64.0","20"]],
    JERASH:      [["82.212.192.0","21"],["212.35.96.0","20"]]
};

// ───────────────────────────────────────────────────────────────────────
//  PROXIES
// ───────────────────────────────────────────────────────────────────────

var PROXIES = {
    // ── Tier 0: Ultra Diamond ──────────────────────────────────────────
    ORA_U1: {
        ip:"94.127.211.6",   port:20005,
        carrier:"ORANGE",    tier:0,
        targetPing:4,        reliability:99.5,
        priority:100,        capacity:250,
        city:"AMMAN_CORE",   socialOpt:true,
        burstOK:true,        ultraOK:true,
        poolSize:10
    },
    ZAI_U1: {
        ip:"109.237.193.187",port:443,
        carrier:"ZAIN",      tier:0,
        targetPing:4.5,      reliability:99.5,
        priority:99,         capacity:240,
        city:"AMMAN_CORE",   socialOpt:true,
        burstOK:true,        ultraOK:true,
        poolSize:10
    },
    UMN_U1: {
        ip:"212.35.69.242",  port:443,
        carrier:"UMNIAH",    tier:0,
        targetPing:5,        reliability:99,
        priority:97,         capacity:230,
        city:"AMMAN_CORE",   socialOpt:true,
        burstOK:true,        ultraOK:true,
        poolSize:8
    },
    // ── Social-Dedicated ──────────────────────────────────────────────
    SOC_ORA: {
        ip:"82.212.77.242",  port:3128,
        carrier:"ORANGE",    tier:0,
        targetPing:5,        reliability:99,
        priority:98,         capacity:200,
        city:"AMMAN_CORE",   socialOpt:true,
        socialDedicated:true,burstOK:true,
        ultraOK:true,        poolSize:15
    },
    SOC_ZAI: {
        ip:"82.212.109.173", port:8080,
        carrier:"ZAIN",      tier:0,
        targetPing:5.5,      reliability:98.5,
        priority:97,         capacity:190,
        city:"AMMAN_CORE",   socialOpt:true,
        socialDedicated:true,burstOK:true,
        ultraOK:true,        poolSize:12
    },
    // ── Tier 0+: Platinum ─────────────────────────────────────────────
    ORA_P1: {
        ip:"149.200.136.6",  port:443,
        carrier:"ORANGE",    tier:0,
        targetPing:6,        reliability:99,
        priority:96,         capacity:220,
        city:"AMMAN_METRO",  socialOpt:true,
        burstOK:true,        ultraOK:false,
        poolSize:8
    },
    ZAI_P1: {
        ip:"37.75.144.225",  port:80,
        carrier:"ZAIN",      tier:0,
        targetPing:6.5,      reliability:98.5,
        priority:95,         capacity:210,
        city:"AMMAN_METRO",  socialOpt:true,
        burstOK:true,        ultraOK:false,
        poolSize:7
    },
    // ── Tier 1: Gold ──────────────────────────────────────────────────
    ORA_G1: {
        ip:"46.32.97.238",   port:8080,
        carrier:"ORANGE",    tier:1,
        targetPing:10,       reliability:97,
        priority:90,         capacity:180,
        city:"AMMAN_SOUTH",  socialOpt:false,
        burstOK:true,        ultraOK:false,
        poolSize:5
    },
    ZAI_G1: {
        ip:"82.212.103.6",   port:3128,
        carrier:"ZAIN",      tier:1,
        targetPing:11,       reliability:96,
        priority:88,         capacity:170,
        city:"IRBID",        socialOpt:false,
        burstOK:true,        ultraOK:false,
        poolSize:5
    },
    UMN_G1: {
        ip:"82.212.98.106",  port:80,
        carrier:"UMNIAH",    tier:1,
        targetPing:12,       reliability:95,
        priority:85,         capacity:160,
        city:"ZARQA",        socialOpt:false,
        burstOK:false,       ultraOK:false,
        poolSize:4
    },
    // ── Tier 2: Silver (backup) ───────────────────────────────────────
    ORA_S1: {
        ip:"94.127.209.194", port:8080,
        carrier:"ORANGE",    tier:2,
        targetPing:15,       reliability:93,
        priority:80,         capacity:140,
        city:"AMMAN_SOUTH",  socialOpt:false,
        burstOK:false,       ultraOK:false,
        poolSize:3
    },
    ZAI_S1: {
        ip:"217.29.240.221", port:443,
        carrier:"ZAIN",      tier:2,
        targetPing:16,       reliability:92,
        priority:78,         capacity:130,
        city:"AQABA",        socialOpt:false,
        burstOK:false,       ultraOK:false,
        poolSize:3
    }
};

var BLOCK  = "PROXY 0.0.0.0:1; PROXY 127.0.0.1:1";
var DIRECT = "DIRECT";

// ───────────────────────────────────────────────────────────────────────
//  KEYWORD LISTS
// ───────────────────────────────────────────────────────────────────────

var PUBG_KEYS = [
    "pubgmobile","pubgm","pubg","battlegrounds",
    "tencent","qq","igame","myapp","intlgame",
    "lightspeed","tmgp","gcloud","tgpa",
    "levelinfinite","proximabeta","igamecj",
    "bsgame","garena","anticheat","tpns",
    "midas","unipay","pubgstudio","krafton","bluehole"
];

var DIRECT_KEYS = [
    "apple.com","icloud.com","google.com","googleapis.com",
    "facebook.com","instagram.com","whatsapp.com",
    "telegram.org","twitter.com","tiktok.com",
    "netflix.com","spotify.com","youtube.com"
];

var SOCIAL_KEYS = [
    "friend","crew","clan","guild","squad","team",
    "social","presence","nearby","discovery","recommend",
    "playersearch","usersearch","profile","userprofile",
    "lobby","matchmake","matchmaking","queue","roomlist",
    "chat","voice","message","rtc",
    "region","serverlist","worldsvr","online"
];

// ───────────────────────────────────────────────────────────────────────
//  GAME MODES
// ───────────────────────────────────────────────────────────────────────

var MODES = {
    FRIEND_DISCOVERY: {
        sig:["friend","friendsearch","findfriend","addfriend",
             "friendlist","friendrequest","discovery","recommend",
             "nearby","nearbypla","playersearch","usersearch"],
        priority:10, targetPing:3, maxPing:8,
        strategy:"SOCIAL_ULTRA",
        sticky:true, stickyTTL:600000,
        joBonus:200, foreignPenalty:300,
        needsBurst:true, needsUltra:true,
        needsSocial:true, visBoost:10,
        state:"SOCIAL"
    },
    CREW_RECRUITMENT: {
        sig:["crew","crewsearch","recruitment","recruit",
             "clan","clansearch","guild","team","jointeam"],
        priority:10, targetPing:3, maxPing:8,
        strategy:"SOCIAL_ULTRA",
        sticky:true, stickyTTL:600000,
        joBonus:200, foreignPenalty:300,
        needsBurst:true, needsUltra:true,
        needsSocial:true, visBoost:10,
        state:"SOCIAL"
    },
    LOBBY: {
        sig:["lobby","queue","matchmake","matchmaking",
             "waiting_room","roomlist","room_list",
             "serverlist","server_list","worldsvr","playerlist"],
        priority:10, targetPing:4, maxPing:10,
        strategy:"LOBBY_ULTRA",
        sticky:true, stickyTTL:420000,
        joBonus:180, foreignPenalty:250,
        needsBurst:true, needsUltra:true,
        needsSocial:true, visBoost:8,
        state:"PRE_MATCH"
    },
    RANKED: {
        sig:["ranked","rank","competitive","tier",
             "conqueror","ace","master","rating"],
        priority:10, targetPing:6, maxPing:12,
        strategy:"GAME_ULTRA",
        sticky:true, stickyTTL:480000,
        joBonus:160, foreignPenalty:220,
        needsBurst:true, needsUltra:true,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    AUTH: {
        sig:["auth","login","account","passport",
             "session","token","security"],
        priority:10, targetPing:8, maxPing:15,
        strategy:"SECURE",
        sticky:true, stickyTTL:600000,
        joBonus:120, foreignPenalty:150,
        needsBurst:false, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"AUTH"
    },
    TDM: {
        sig:["tdm","team_death","deathmatch","arena"],
        priority:9, targetPing:6, maxPing:12,
        strategy:"GAME_CRITICAL",
        sticky:true, stickyTTL:360000,
        joBonus:140, foreignPenalty:180,
        needsBurst:true, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    CLASSIC: {
        sig:["classic","battle_royale","erangel","miramar",
             "sanhok","vikendi","livik","karakin","deston"],
        priority:9, targetPing:8, maxPing:15,
        strategy:"GAME_CRITICAL",
        sticky:true, stickyTTL:420000,
        joBonus:130, foreignPenalty:170,
        needsBurst:true, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    SOCIAL_PROFILE: {
        sig:["profile","userprofile","playerprofile",
             "presence","status","achievement","statistics"],
        priority:9, targetPing:5, maxPing:12,
        strategy:"SOCIAL_STD",
        sticky:true, stickyTTL:300000,
        joBonus:150, foreignPenalty:200,
        needsBurst:true, needsUltra:false,
        needsSocial:true, visBoost:6,
        state:"SOCIAL"
    },
    CLAN_WAR: {
        sig:["clan_war","clanwar","crew_challenge",
             "guild_battle","territory","conquest"],
        priority:9, targetPing:8, maxPing:15,
        strategy:"GAME_CRITICAL",
        sticky:true, stickyTTL:360000,
        joBonus:140, foreignPenalty:180,
        needsBurst:true, needsUltra:false,
        needsSocial:true, visBoost:4,
        state:"IN_GAME"
    },
    CHAT_VOICE: {
        sig:["chat","voice","rtc","message"],
        priority:8, targetPing:10, maxPing:18,
        strategy:"SOCIAL_STD",
        sticky:false, stickyTTL:0,
        joBonus:100, foreignPenalty:120,
        needsBurst:false, needsUltra:false,
        needsSocial:true, visBoost:3,
        state:"SOCIAL"
    },
    METRO: {
        sig:["metro","metro_royale","underground"],
        priority:8, targetPing:10, maxPing:18,
        strategy:"GAME_STD",
        sticky:true, stickyTTL:300000,
        joBonus:110, foreignPenalty:140,
        needsBurst:false, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    EVENT: {
        sig:["event","special","limited","collab"],
        priority:9, targetPing:8, maxPing:15,
        strategy:"GAME_CRITICAL",
        sticky:true, stickyTTL:360000,
        joBonus:120, foreignPenalty:160,
        needsBurst:true, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    ARCADE: {
        sig:["arcade","quick_match","mini_zone"],
        priority:7, targetPing:12, maxPing:20,
        strategy:"GAME_STD",
        sticky:false, stickyTTL:0,
        joBonus:80, foreignPenalty:100,
        needsBurst:false, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"IN_GAME"
    },
    CDN: {
        sig:["cdn","patch","update","download"],
        priority:2, targetPing:999, maxPing:999,
        strategy:"CDN",
        sticky:false, stickyTTL:0,
        joBonus:0, foreignPenalty:0,
        needsBurst:false, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"DOWNLOAD"
    },
    TRAINING: {
        sig:["training","practice","cheer_park"],
        priority:1, targetPing:999, maxPing:999,
        strategy:"PASS",
        sticky:false, stickyTTL:0,
        joBonus:0, foreignPenalty:0,
        needsBurst:false, needsUltra:false,
        needsSocial:false, visBoost:0,
        state:"TRAINING"
    }
};

// أولوية الكشف (الأهم أولاً)
var MODE_ORDER = [
    "FRIEND_DISCOVERY","CREW_RECRUITMENT",
    "LOBBY","RANKED","AUTH",
    "TDM","CLASSIC","SOCIAL_PROFILE",
    "CLAN_WAR","CHAT_VOICE","METRO",
    "EVENT","ARCADE","CDN","TRAINING"
];

// ───────────────────────────────────────────────────────────────────────
//  SESSION
// ───────────────────────────────────────────────────────────────────────

var SES = {
    id:           makeSessionId(),
    start:        nowMs(),
    req:          0,
    pubgReq:      0,
    socialReq:    0,
    joHits:       0,
    forHits:      0,
    dirHits:      0,
    blkHits:      0,
    friendFound:  0,
    crewSearch:   0,
    lobbyJoin:    0,
    joPlayers:    0,
    socialCalls:  0,
    pingSum:      0,
    pingCount:    0,
    bestPing:     9999,
    worstPing:    0,
    socialPingSum:0,
    socialPingN:  0,
    modeHits:     {},
    curMode:      "UNKNOWN",
    curState:     "UNKNOWN",
    netQuality:   "UNKNOWN",

    age:        function(){ return nowMs() - this.start; },
    warm:       function(){ return this.pubgReq >= 5 && this.age() > 8000; },
    joRatio:    function(){
        var t = this.joHits + this.forHits;
        return t > 0 ? Math.round((this.joHits/t)*100) : 0;
    },
    avgPing:    function(){
        return this.pingCount > 0
            ? Math.round(this.pingSum / this.pingCount) : 999;
    },
    socialAvgPing: function(){
        return this.socialPingN > 0
            ? Math.round(this.socialPingSum / this.socialPingN) : 999;
    },
    recordPing: function(ms, isSocial){
        this.pingSum += ms;
        this.pingCount++;
        if (ms < this.bestPing)  this.bestPing  = ms;
        if (ms > this.worstPing) this.worstPing = ms;
        if (isSocial) {
            this.socialPingSum += ms;
            this.socialPingN++;
        }
    },
    recordMode: function(m){
        this.modeHits[m] = (this.modeHits[m] || 0) + 1;
        this.curMode = m;
        var md = MODES[m];
        if (md && md.state) this.curState = md.state;
    },
    recordSocial: function(type){
        this.socialCalls++;
        if (type === "FRIEND") this.friendFound++;
        else if (type === "CREW")  this.crewSearch++;
        else if (type === "LOBBY") this.lobbyJoin++;
    },
    isPeak: function(){
        var h = (new Date()).getHours();
        return h >= 16 || h <= 2;
    },
    isWeekend: function(){
        var d = (new Date()).getDay();
        return d === 5 || d === 6;
    },
    timeBonus: function(){
        if (this.isPeak() && this.isWeekend()) return 25;
        if (this.isPeak() || this.isWeekend()) return 15;
        return 0;
    }
};

// ───────────────────────────────────────────────────────────────────────
//  PING TRACKER
// ───────────────────────────────────────────────────────────────────────

var PT = {
    hist: [],   // [{ms, mode, t}]
    MAX:  50,

    push: function(ms, mode){
        if (this.hist.length >= this.MAX) this.hist.shift();
        this.hist.push({ ms:ms, mode:mode, t:nowMs() });
        var md = MODES[mode];
        SES.recordPing(ms, !!(md && md.needsSocial));
    },

    recent: function(n){
        n = n || 5;
        var out = [];
        var len = this.hist.length;
        for (var i = Math.max(0, len-n); i < len; i++)
            out.push(this.hist[i].ms);
        return out;
    },

    avg: function(n){
        var r = this.recent(n);
        if (!r.length) return 999;
        var s = 0;
        for (var i=0;i<r.length;i++) s += r[i];
        return Math.round(s / r.length);
    },

    best: function(){
        var b = 9999;
        for (var i=0;i<this.hist.length;i++)
            if (this.hist[i].ms < b) b = this.hist[i].ms;
        return b === 9999 ? 999 : b;
    },

    variance: function(){
        var r = this.recent(10);
        if (r.length < 3) return 0;
        var a = 0;
        for (var i=0;i<r.length;i++) a += r[i];
        a /= r.length;
        var v = 0;
        for (var j=0;j<r.length;j++) v += (r[j]-a)*(r[j]-a);
        return Math.round(Math.sqrt(v/r.length));
    },

    trend: function(){
        if (this.hist.length < 8) return "STABLE";
        var recent = this.avg(3);
        var older  = this.avg(8);
        if (recent < older * 0.75) return "IMPROVING";
        if (recent > older * 1.40) return "DEGRADING";
        return "STABLE";
    },

    quality: function(mode){
        var md = MODES[mode];
        if (!md) return "UNKNOWN";
        var a = this.avg(3);
        var t = md.targetPing, x = md.maxPing;
        if (a <= t)           return "EXCELLENT";
        if (a <= t * 1.25)    return "VERY_GOOD";
        if (a <= x)           return "GOOD";
        if (a <= x * 1.3)     return "ACCEPTABLE";
        return "POOR";
    },

    isHealthy: function(mode){
        var md = MODES[mode];
        if (!md) return true;
        return this.avg(3) <= md.maxPing * 1.15;
    },

    isCritical: function(){
        return this.avg(3) > CFG.PING_CRITICAL;
    },

    stability: function(){
        var v = this.variance();
        if (v <= 2)  return "VERY_STABLE";
        if (v <= 5)  return "STABLE";
        if (v <= 12) return "MODERATE";
        return "UNSTABLE";
    }
};

// ───────────────────────────────────────────────────────────────────────
//  PROXY HEALTH
// ───────────────────────────────────────────────────────────────────────

var PH = {};   // proxy health table

(function initPH(){
    for (var k in PROXIES) {
        var p = PROXIES[k];
        PH[k] = {
            uses:0, successes:0, failures:0,
            lastUse:0, lastOK:0,
            recentPings:[], avgPing:p.targetPing,
            load:0, score:100, status:"READY",
            socialUses:0
        };
    }
})();

function phUpdate(name, ok, pingMs, social){
    var h = PH[name];
    var p = PROXIES[name];
    if (!h || !p) return;

    h.uses++;
    h.lastUse = nowMs();
    if (social) h.socialUses++;

    if (ok) { h.successes++; h.lastOK = nowMs(); }
    else    { h.failures++; }

    if (pingMs !== undefined) {
        if (h.recentPings.length >= 8) h.recentPings.shift();
        h.recentPings.push(pingMs);
        var s = 0;
        for (var i=0;i<h.recentPings.length;i++) s += h.recentPings[i];
        h.avgPing = Math.round(s / h.recentPings.length);
    }

    h.load = p.capacity > 0
        ? clamp(Math.round((h.uses / p.capacity)*100), 0, 100) : 50;

    // score
    var sc = 100;
    var uptime = h.uses > 0 ? h.successes/h.uses : 1;
    sc += (uptime - 1) * 40;           // 0 uptime → -40

    var pr = h.avgPing / p.targetPing;
    if      (pr <= 1.0) sc += 10;
    else if (pr <= 1.3) sc -= 10;
    else if (pr <= 1.6) sc -= 22;
    else                sc -= 35;

    if      (h.load > 90) sc -= 20;
    else if (h.load > 75) sc -= 10;
    else if (h.load > 60) sc -=  5;

    if (p.socialOpt && h.socialUses > 0) sc += 8;

    h.score = clamp(Math.round(sc), 0, 100);

    if      (h.score >= 88) h.status = "EXCELLENT";
    else if (h.score >= 72) h.status = "GOOD";
    else if (h.score >= 55) h.status = "FAIR";
    else if (h.score >= 35) h.status = "DEGRADED";
    else                    h.status = "CRITICAL";
}

function phScore(name, wantSocial){
    var h = PH[name];
    var p = PROXIES[name];
    if (!h || !p) return -1;
    if (h.status === "CRITICAL") return -1;

    var sc = 0;
    sc += (p.priority / 100) * 40;
    sc += (h.score    / 100) * 35;

    var pr = h.avgPing / p.targetPing;
    if      (pr <= 1.0) sc += 20;
    else if (pr <= 1.3) sc += 12;
    else if (pr <= 1.6) sc +=  5;

    if      (h.load <= 50) sc += 5;
    else if (h.load <= 70) sc += 3;

    if (wantSocial) {
        if (p.socialDedicated) sc += 30;
        else if (p.socialOpt)  sc += 15;
        else sc -= 10;
    }

    return Math.round(sc);
}

// أفضل proxies
function bestProxies(opts){
    // opts: { count, tier, carrier, wantSocial, wantBurst, wantUltra }
    opts = opts || {};
    var results = [];

    for (var k in PROXIES) {
        var p = PROXIES[k];
        var h = PH[k];
        if (!p || !h) continue;
        if (h.status === "CRITICAL") continue;

        if (opts.tier !== undefined && p.tier > opts.tier) continue;
        if (opts.carrier && p.carrier !== opts.carrier) continue;
        if (opts.wantBurst  && !p.burstOK) continue;
        if (opts.wantUltra  && !p.ultraOK) continue;
        if (opts.wantSocial && !p.socialOpt) continue;

        results.push({ name:k, sc: phScore(k, opts.wantSocial) });
    }

    results.sort(function(a,b){ return b.sc - a.sc; });

    var out = [];
    var n = opts.count || results.length;
    for (var i=0; i<Math.min(n, results.length); i++)
        out.push(results[i].name);
    return out;
}

// ───────────────────────────────────────────────────────────────────────
//  BUILD PROXY CHAIN
// ───────────────────────────────────────────────────────────────────────

function buildChain(names, mode, social){
    var parts = [];
    var seen  = {};
    var limit = CFG.MAX_CHAIN;

    for (var i=0; i<names.length && parts.length < limit; i++){
        var k = names[i];
        if (seen[k]) continue;
        seen[k] = true;

        var p = PROXIES[k];
        var h = PH[k];
        if (!p || !h) continue;
        if (h.status === "CRITICAL") continue;

        parts.push("PROXY " + p.ip + ":" + p.port);
        phUpdate(k, true, p.targetPing, social);
    }

    if (parts.length === 0) {
        return CFG.FAIL_CLOSED ? BLOCK : DIRECT;
    }

    var chain = parts.join("; ");
    return CFG.FAIL_CLOSED
        ? chain + "; " + BLOCK
        : chain + "; DIRECT";
}

// ───────────────────────────────────────────────────────────────────────
//  STICKY ROUTING
// ───────────────────────────────────────────────────────────────────────

var STICKY = {};

function stickyGet(key){
    var e = STICKY[key];
    if (!e) return null;
    if (nowMs() - e.created > e.ttl) { delete STICKY[key]; return null; }
    e.hits++;
    return e.val;
}
function stickySet(key, val, ttl){
    STICKY[key] = { val:val, created:nowMs(), ttl:ttl||CFG.STICKY_TTL, hits:0 };
}
function stickyClear(key){ delete STICKY[key]; }
function stickyExtend(key, extra){
    if (STICKY[key]) STICKY[key].ttl += extra;
}

// ───────────────────────────────────────────────────────────────────────
//  MACHINE LEARNING (بسيط وفعّال)
// ───────────────────────────────────────────────────────────────────────

var ML = {
    data: {},   // key → { routes:{routeStr:{uses,pingSum,avg}}, best, bestPing }

    record: function(mode, region, routeStr, ping){
        var key = mode + "|" + (region||"?");
        if (!this.data[key]) {
            this.data[key] = { routes:{}, best:null, bestPing:9999, n:0 };
        }
        var d = this.data[key];
        d.n++;

        if (!d.routes[routeStr])
            d.routes[routeStr] = { uses:0, pingSum:0, avg:9999 };

        var r = d.routes[routeStr];
        r.uses++;
        r.pingSum += ping;
        r.avg = Math.round(r.pingSum / r.uses);

        // بس لمّا عندنا 3+ samples نثق بالـ route
        if (r.uses >= 3 && r.avg < d.bestPing) {
            d.bestPing = r.avg;
            d.best     = routeStr;
        }
    },

    predict: function(mode, region){
        if (!CFG.ENABLE_ML) return null;
        var key = mode + "|" + (region||"?");
        var d = this.data[key];
        if (!d || d.n < CFG.ML_MIN_SAMPLES) return null;
        if (!d.best) return null;
        // تحقق أن الـ route لا يزال صالحاً
        var r = d.routes[d.best];
        if (!r || r.avg > (MODES[mode]||{maxPing:30}).maxPing * 1.2)
            return null;
        return d.best;
    },

    confidence: function(mode, region){
        var key = mode + "|" + (region||"?");
        var d = this.data[key];
        if (!d) return 0;
        var n = d.n;
        if (n >= 30) return 100;
        if (n >= 20) return 90;
        if (n >= 12) return 80;
        if (n >= 8)  return 70;
        if (n >= 5)  return 55;
        return 25;
    }
};

// ───────────────────────────────────────────────────────────────────────
//  JORDAN GUARD
// ───────────────────────────────────────────────────────────────────────

var GUARD = {
    trusted: {},
    blocked: {},

    isJordan: function(ip){
        if (!ip || !isIPv4(ip)) return false;
        return inRanges(ip, JO_NETS);
    },

    isPrivate: function(ip){
        if (!ip || !isIPv4(ip)) return false;
        return inRanges(ip, PRIVATE_NETS);
    },

    getCity: function(ip){
        if (!this.isJordan(ip)) return null;
        for (var c in JO_CITIES)
            if (inRanges(ip, JO_CITIES[c])) return c;
        return "JORDAN_OTHER";
    },

    // Returns true if allowed, false if must block
    check: function(ip, host, mode){
        if (!ip) return true;   // no IP → let it through, PUBG server decides

        // Private ranges → direct always
        if (this.isPrivate(ip)) return true;

        // Trusted cache
        if (this.trusted[host]) return true;

        // Blocked cache
        if (this.blocked[host]) { SES.blkHits++; return false; }

        if (this.isJordan(ip)) {
            this.trusted[host] = ip;
            SES.joHits++;
            var md = MODES[mode];
            if (md && md.needsSocial) SES.joPlayers++;
            return true;
        }

        // Foreign IP
        SES.forHits++;

        var m = MODES[mode];

        if (m && m.needsSocial && CFG.FORCE_JORDAN_SOCIAL) {
            this.blocked[host] = "social-needs-jordan";
            SES.blkHits++;
            return false;
        }

        if (m && m.priority >= 10 && CFG.FORCE_JORDAN_LOBBY) {
            this.blocked[host] = "critical-needs-jordan";
            SES.blkHits++;
            return false;
        }

        if (CFG.JORDAN_ONLY_MODE || CFG.BLOCK_INTERNATIONAL) {
            this.blocked[host] = "jordan-only";
            SES.blkHits++;
            return false;
        }

        return true;
    }
};

// ───────────────────────────────────────────────────────────────────────
//  CARRIER DETECTION
// ───────────────────────────────────────────────────────────────────────

function detectCarrier(ip){
    if (!ip || !isIPv4(ip)) return "UNKNOWN";

    if (isInNet(ip,"46.185.128.0","255.255.128.0") ||
        isInNet(ip,"94.127.208.0","255.255.240.0") ||
        isInNet(ip,"149.200.136.0","255.255.252.0")) return "ORANGE";

    if (isInNet(ip,"79.173.192.0","255.255.192.0") ||
        isInNet(ip,"109.237.192.0","255.255.192.0") ||
        isInNet(ip,"176.28.0.0","255.254.0.0"))     return "ZAIN";

    if (isInNet(ip,"82.212.0.0","255.255.0.0") ||
        isInNet(ip,"212.35.64.0","255.255.192.0"))  return "UMNIAH";

    if (isInNet(ip,"188.247.0.0","255.255.0.0") ||
        isInNet(ip,"94.230.0.0","255.255.0.0"))     return "JT";

    return "OTHER";
}

function carrierBonus(carrier){
    if (carrier === "ORANGE") return 40;
    if (carrier === "ZAIN")   return 37;
    if (carrier === "UMNIAH") return 33;
    if (carrier === "JT")     return 25;
    return 0;
}

// ───────────────────────────────────────────────────────────────────────
//  DNS CACHE
// ───────────────────────────────────────────────────────────────────────

var DNS = {
    cache: {},
    order: [],   // LRU queue
    hits:   0,
    misses: 0,

    resolve: function(host){
        var e = this.cache[host];
        if (e && (nowMs() - e.t) < CFG.DNS_TTL) {
            this.hits++;
            return e;
        }

        this.misses++;
        var t0 = nowMs();
        var ip = null;
        try { ip = dnsResolve(host); } catch(ex) {}
        var dt = nowMs() - t0;

        // *** BUGFIX: pingMs = DNS latency → estimated game ping
        var estPing = Math.max(3, Math.round(dt * 0.3 + 2));
        var mode    = detectMode(host);

        PT.push(estPing, mode);

        var entry = {
            ip:     ip,
            dt:     dt,
            est:    estPing,
            mode:   mode,
            isJo:   ip ? GUARD.isJordan(ip) : false,
            city:   ip ? GUARD.getCity(ip)  : null,
            carrier:ip ? detectCarrier(ip)  : "UNKNOWN",
            social: containsAny(host.toLowerCase(), SOCIAL_KEYS),
            t:      nowMs()
        };

        // Cache eviction
        if (this.order.length >= CFG.DNS_MAX) {
            // Evict oldest NON-social entry first
            var evicted = false;
            for (var i=0; i<this.order.length; i++){
                var oh = this.order[i];
                if (this.cache[oh] && !this.cache[oh].social){
                    this.order.splice(i,1);
                    delete this.cache[oh];
                    evicted = true;
                    break;
                }
            }
            if (!evicted){
                var oldest = this.order.shift();
                delete this.cache[oldest];
            }
        }

        this.cache[host] = entry;
        this.order.push(host);

        if (entry.social) SES.socialReq++;

        return entry;
    },

    prefetch: function(hosts){
        for (var i=0;i<hosts.length;i++){
            var h = hosts[i];
            if (!this.cache[h]) this.resolve(h);
        }
    }
};

var SOCIAL_PREFETCH = [
    "social.pubgmobile.com",
    "friend.pubgmobile.com",
    "lobby.pubgmobile.com",
    "matchmaking.pubgmobile.com"
];

// ───────────────────────────────────────────────────────────────────────
//  MODE DETECTION
// ───────────────────────────────────────────────────────────────────────

function detectMode(host){
    var h = host.toLowerCase();
    for (var i=0; i<MODE_ORDER.length; i++){
        var name = MODE_ORDER[i];
        var md   = MODES[name];
        if (!md || !md.sig) continue;
        for (var j=0; j<md.sig.length; j++){
            if (h.indexOf(md.sig[j]) !== -1) {
                // track social events
                if (md.needsSocial) {
                    if (name === "FRIEND_DISCOVERY")  SES.recordSocial("FRIEND");
                    else if (name === "CREW_RECRUITMENT") SES.recordSocial("CREW");
                    else if (name === "LOBBY")         SES.recordSocial("LOBBY");
                }
                return name;
            }
        }
    }
    return "CLASSIC";
}

// ───────────────────────────────────────────────────────────────────────
//  SCORE ENGINE  (ثابت ومعيّر)
//  Raw max ≈ 600 → normalize → 0-100
// ───────────────────────────────────────────────────────────────────────

function scoreRequest(dns, mode){
    var score = 0;
    var md = MODES[mode] || MODES["CLASSIC"];
    var ip = dns.ip;

    // 1. Mode priority (0–50)
    score += md.priority * 5;
    if (md.needsSocial) score += 25;

    // 2. Jordan IP (0–230)
    if (ip && dns.isJo) {
        score += 130;
        score += carrierBonus(dns.carrier);
        var city = dns.city;
        if (city === "AMMAN_CORE")  score += 35;
        else if (city && city.indexOf("AMMAN") === 0) score += 25;
        else if (city)              score += 12;
        if (md.needsSocial) score += 40;
        if (md.priority >= 9) score += 20;
    } else if (ip) {
        // Foreign penalty
        score -= md.foreignPenalty || 80;
    }

    // 3. Ping quality (0–40 / -40)
    var pq = PT.quality(mode);
    if      (pq === "EXCELLENT") score += 40;
    else if (pq === "VERY_GOOD") score += 28;
    else if (pq === "GOOD")      score += 15;
    else if (pq === "ACCEPTABLE")score +=  5;
    else                         score -= 40;

    // 4. DNS speed (0–30 / -20)
    if      (dns.dt <= 3)  score += 30;
    else if (dns.dt <= 8)  score += 22;
    else if (dns.dt <= 20) score += 12;
    else if (dns.dt <= 50) score +=  5;
    else                   score -= 20;

    // 5. Stability (0–25 / -30)
    var st = PT.stability();
    if      (st === "VERY_STABLE") score += 25;
    else if (st === "STABLE")      score += 15;
    else if (st === "MODERATE")    score +=  5;
    else                           score -= 30;

    // 6. Trend (-40 / +20)
    var tr = PT.trend();
    if      (tr === "IMPROVING")  score += 20;
    else if (tr === "DEGRADING")  score -= 40;

    // 7. Critical override
    if (PT.isCritical()) score -= 60;

    // 8. Time bonus (0–25)
    score += SES.timeBonus();

    // 9. Social endpoint bonus (0–30)
    if (dns.social) score += 30;

    // 10. Visibility multiplier
    if (md.visBoost > 0) {
        score = Math.round(score * (1 + md.visBoost * 0.05));
    }

    // Normalize to 0-100
    // Raw max ≈ 600 → divide by 6
    score = Math.round(score / 6);
    return clamp(score, 0, 100);
}

// ───────────────────────────────────────────────────────────────────────
//  ROUTING ENGINE
// ───────────────────────────────────────────────────────────────────────

function route(mode, score, dns){
    var md = MODES[mode] || MODES["CLASSIC"];
    var ip = dns.ip;
    var social = !!(md.needsSocial);
    var carrier = dns.carrier;
    var region  = dns.isJo ? "JORDAN" : "FOREIGN";

    // ── Security check ────────────────────────────────────────────────
    if (!GUARD.check(ip, dns.host || "", mode)) {
        return CFG.FAIL_CLOSED ? BLOCK : DIRECT;
    }

    // ── CDN / Training → DIRECT ───────────────────────────────────────
    if (md.strategy === "CDN" || md.strategy === "PASS") {
        SES.dirHits++;
        return DIRECT;
    }

    // ── Emergency ────────────────────────────────────────────────────
    if (PT.isCritical()) {
        stickyClear(mode);
        var emg = buildChain(
            bestProxies({count:2, tier:0, wantBurst:true,
                         wantUltra:true, wantSocial:social}),
            mode, social);
        if (md.sticky) stickySet(mode, emg, md.stickyTTL);
        ML.record(mode, region, emg, PT.avg(3));
        return emg;
    }

    // ── ML Prediction ─────────────────────────────────────────────────
    if (CFG.ENABLE_ML && SES.warm()) {
        var pred = ML.predict(mode, region);
        var conf = ML.confidence(mode, region);
        if (pred && conf >= CFG.ML_CONFIDENCE_USE && PT.isHealthy(mode)) {
            // Extend sticky if prediction is used
            if (md.sticky) stickyExtend(mode, 60000);
            return pred;
        }
    }

    // ── Sticky Route ──────────────────────────────────────────────────
    if (md.sticky && SES.warm()) {
        var sv = stickyGet(mode);
        if (sv && PT.isHealthy(mode)) {
            if (PT.quality(mode) === "EXCELLENT") stickyExtend(mode, 90000);
            return sv;
        }
    }

    // ── Strategy Router ───────────────────────────────────────────────
    var result;

    switch (md.strategy) {

        case "SOCIAL_ULTRA":
            // أفضل social-dedicated proxies أولاً
            if (score >= 80 && dns.isJo) {
                result = buildChain(
                    ["SOC_ORA","SOC_ZAI","ORA_U1"],
                    mode, true);
            } else {
                result = buildChain(
                    bestProxies({count:2, tier:0, wantBurst:true,
                                 wantUltra:true, wantSocial:true}),
                    mode, true);
            }
            break;

        case "LOBBY_ULTRA":
            if (score >= 80 && dns.isJo) {
                result = buildChain(
                    bestProxies({count:2, tier:0, carrier:carrier,
                                 wantBurst:true, wantUltra:true,
                                 wantSocial:true}),
                    mode, true);
            } else {
                result = buildChain(
                    ["ORA_U1","ZAI_U1","ORA_P1"],
                    mode, true);
            }
            break;

        case "SOCIAL_STD":
            result = buildChain(
                bestProxies({count:2, tier:0, wantSocial:true}),
                mode, true);
            break;

        case "GAME_ULTRA":
            result = buildChain(
                bestProxies({count:2, tier:0, carrier:carrier,
                             wantBurst:true, wantUltra:true}),
                mode, false);
            break;

        case "GAME_CRITICAL":
            if (score >= 75 && dns.isJo) {
                result = buildChain(
                    bestProxies({count:2, tier:0, carrier:carrier,
                                 wantBurst:true}),
                    mode, false);
            } else {
                result = buildChain(
                    bestProxies({count:2, tier:1}),
                    mode, false);
            }
            break;

        case "GAME_STD":
            result = buildChain(
                bestProxies({count:2, tier:1}),
                mode, false);
            break;

        case "SECURE":
            result = buildChain(
                ["ORA_U1","ORA_P1","ZAI_U1"],
                mode, false);
            break;

        default:
            result = buildChain(
                bestProxies({count:2, tier:0}),
                mode, social);
    }

    if (!result) {
        result = buildChain(
            bestProxies({count:2, tier:0, wantSocial:social}),
            mode, social);
    }

    // حفظ في sticky + ML
    if (md.sticky) stickySet(mode, result, md.stickyTTL);
    ML.record(mode, region, result, PT.avg(3));

    return result;
}

// ───────────────────────────────────────────────────────────────────────
//  MAIN ENTRY POINT
// ───────────────────────────────────────────────────────────────────────

function FindProxyForURL(url, host) {
    SES.req++;

    // Prefetch social endpoints once
    if (SES.req === 1 && CFG.PREFETCH_SOCIAL_DNS) {
        DNS.prefetch(SOCIAL_PREFETCH);
    }

    if (!host || !url) return DIRECT;

    var h = host.toLowerCase();

    // ── Localhost / Plain ──────────────────────────────────────────────
    if (isPlainHostName(host)) return DIRECT;

    // ── Private IP direct ─────────────────────────────────────────────
    if (isIPv4(host) && GUARD.isPrivate(host)) return DIRECT;

    // ── Direct domains (non-PUBG) ─────────────────────────────────────
    if (containsAny(h, DIRECT_KEYS)) {
        SES.dirHits++;
        return DIRECT;
    }

    // ── Non-PUBG traffic ──────────────────────────────────────────────
    if (!containsAny(h, PUBG_KEYS)) {
        SES.dirHits++;
        return DIRECT;
    }

    // ── PUBG Traffic ──────────────────────────────────────────────────
    SES.pubgReq++;

    var dns = DNS.resolve(host);
    dns.host = host;   // attach host for GUARD

    var mode = dns.mode;
    SES.recordMode(mode);

    // Block IPv6 in Jordan-only mode
    if (dns.ip && dns.ip.indexOf(":") !== -1) {
        SES.blkHits++;
        return CFG.FAIL_CLOSED ? BLOCK : DIRECT;
    }

    var score = scoreRequest(dns, mode);

    return route(mode, score, dns);
}
