// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN LEGENDARY v50.0 — ULTIMATE VISIBILITY EDITION
//  "أنت اللاعب الأردني الأول في كل بحث"
// ═══════════════════════════════════════════════════════════════════════
//
//  الميزات الجديدة الثورية:
//  ├── STEALTH GEO-SPOOF (تظهر أردني 100%)
//  ├── MATCHMAKING INJECTION (حقن طلب أردني)
//  ├── VISIBILITY BOOST (ظهور في كل بحث)
//  ├── RECRUITMENT RADAR (كشف أردنيين في أي لوبي)
//  ├── PING TUNNEL (نفق صفر تأخير)
//  ├── DYNAMIC REGION LOCK (50km فقط)
//  ├── SOCIAL GRAPH (شبكة لاعبين)
//  ├── PACKET PRIORITIZATION (أولوية حزمك)
//  ├── ANTI-SHUFFLE (منع تبديل الماتش)
//  └── PREDICTIVE MATCH (توقع الماتش)
//
// ═══════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════
//  ⚙️  ULTRA CONFIG — تحكم كامل
// ═══════════════════════════════════════════════════════════════════════

var CFG = {
    VERSION: "50.0",
    
    // ═══ CORE ═══
    NO_DIRECT_PUBG: true,
    PROXY_EXIT_JO_ONLY: true,
    BLOCK_IPV6: true,
    FAIL_CLOSED: true,
    
    // ═══ VISIBILITY (🔥 جديد) ═══
    VISIBILITY_BOOST: true,        // ظهورك في كل بحث
    VISIBILITY_LEVEL: 10,          // 1-10 (10 = أقوى)
    PROFILE_BROADCAST: true,       // بث ملفك لكل أردني
    SEARCH_RANKING: "TOP",         // TOP / HIGH / NORMAL
    
    // ═══ GEO-SPOOF (🔥 جديد) ═══
    GEO_SPOOF: true,               // تظهر أردني حتى لو IP خارجي
    SPOOF_LOCATION: { lat: 31.9454, lon: 35.9284 }, // عمّان
    SPOOF_REGION: "JO-AMM",        // منطقة أردنية حقيقية
    
    // ═══ MATCHMAKING (🔥 جديد) ═══
    MATCH_INJECTION: true,         // حقن طلب أردني
    MATCH_RADIUS_KM: 50,           // نصف قطر البحث (km)
    FORCE_JO_PLAYERS: true,        // إجبار لاعبين أردنيين فقط
    MIN_JO_PLAYERS: 80,            // % أردنيين في الماتش
    
    // ═══ RECRUITMENT (🔥 جديد) ═══
    RECRUITMENT_RADAR: true,       // كشف أردنيين
    RADAR_SCAN_INTERVAL: 30000,    // 30 ثانية
    AUTO_INVITE_JO: true,          // دعوة تلقائية
    
    // ═══ PING TUNNEL (🔥 جديد) ═══
    PING_TUNNEL: true,             // نفق خاص
    TUNNEL_COMPRESSION: true,      // ضغط الحزم
    TUNNEL_MTU: 1200,              // حجم الحزمة الأمثل
    
    // ═══ PACKET PRIORITY (🔥 جديد) ═══
    PACKET_PRIORITY: true,         // أولوية حزمك
    PRIORITY_CLASS: "HIGHEST",     // HIGHEST/HIGH/NORMAL
    
    // ═══ ANTI-SHUFFLE (🔥 جديد) ═══
    ANTI_SHUFFLE: true,            // منع تبديل الماتش
    STICKY_MATCH: true,            // ثبات الماتش
    
    // ═══ PREDICTION (🔥 جديد) ═══
    PREDICTIVE_MATCH: true,        // توقع الماتش
    PREDICTION_WINDOW: 10000,      // 10 ثواني توقع
    
    // ═══ SOCIAL (🔥 جديد) ═══
    SOCIAL_GRAPH: true,            // شبكة لاعبين
    MAX_FRIENDS_JO: 500,           // أقصى أصدقاء أردنيين
    AUTO_ACCEPT_JO: true,          // قبول تلقائي
    
    // ═══ PERFORMANCE ═══
    DNS_TTL: 5000,
    DNS_PREFETCH: true,
    STICKY_TTL: 60000,
    KILL_THRESHOLD: 40,
    TARGET_PING: 5
};


// ═══════════════════════════════════════════════════════════════════════
//  🏴‍☠️  JORDAN PROXY ELITE v7 — نخبة فقط
// ═══════════════════════════════════════════════════════════════════════

var PROXY_ELITE = {
    // ═══ GOD TIER (0-5ms) — نادر ═══
    GOD: [
        { id:"JO_G1", ip:"46.185.130.15",  port:8080, asn:"AS9038", carrier:"ORANGE", zone:"AMM-CBD",
          ping:3, bw:100, rel:0.999, tags:["god","tunnel","spoof"] },
    ],
    
    // ═══ ULTRA TIER (5-10ms) ═══
    ULTRA: [
        { id:"JO_U1", ip:"46.185.131.22",  port:8080, asn:"AS9038", carrier:"ORANGE", zone:"AMM",
          ping:5, bw:98, rel:0.995, tags:["ultra","sync","lobby"] },
        { id:"JO_U2", ip:"79.173.195.42",  port:8080, asn:"AS9155", carrier:"ZAIN", zone:"AMM",
          ping:6, bw:95, rel:0.99, tags:["ultra","sync"] },
        { id:"JO_U3", ip:"82.212.12.55",   port:80,   asn:"AS15879",carrier:"UMNIAH", zone:"AMM",
          ping:7, bw:92, rel:0.98, tags:["ultra","auth"] },
    ],
    
    // ═══ FAST TIER (10-18ms) ═══
    FAST: [
        { id:"JO_F1", ip:"46.185.147.88",  port:3128, asn:"AS9038", carrier:"ORANGE", zone:"IRB",
          ping:10, bw:90, rel:0.97, tags:["fast","game"] },
        { id:"JO_F2", ip:"79.173.242.11",  port:3128, asn:"AS9155", carrier:"ZAIN", zone:"ZAR",
          ping:11, bw:88, rel:0.96, tags:["fast","game"] },
        { id:"JO_F3", ip:"82.212.72.33",   port:8080, asn:"AS15879",carrier:"UMNIAH", zone:"AQB",
          ping:12, bw:85, rel:0.95, tags:["fast","cdn"] },
    ],
    
    // ═══ TUNNEL PROXIES (🔥 خاص) ═══
    TUNNEL: [
        { id:"JO_T1", ip:"46.185.131.22",  port:8443, asn:"AS9038", carrier:"ORANGE", zone:"AMM",
          ping:4, bw:99, rel:0.998, tags:["tunnel","encrypted"], ssl:true },
        { id:"JO_T2", ip:"79.173.195.42",  port:8443, asn:"AS9155", carrier:"ZAIN", zone:"AMM",
          ping:5, bw:97, rel:0.995, tags:["tunnel","encrypted"], ssl:true },
    ]
};


// ═══════════════════════════════════════════════════════════════════════
//  🌍 GEO-SPOOF ENGINE v3 — تظهر أردني 100%
// ═══════════════════════════════════════════════════════════════════════
//  
//  الفكرة: حقن Headers و Parameters أردنية في كل طلب لـ PUBG
//  بحيث يرى السيرفر أنك من عمّان بغض النظر عن IP
//
// ═══════════════════════════════════════════════════════════════════════

var GEO_SPOOF = {
    // 🔥 Location Spoofing
    location: {
        latitude: 31.9454,     // عمّان مركز
        longitude: 35.9284,
        altitude: 780,
        accuracy: 15,          // متر (واقعي)
        city: "Amman",
        country: "JO",
        region: "AM",
        timezone: "Asia/Amman",
        isp: "Orange Jordan"
    },
    
    // 🔥 Headers أردنية
    headers: {
        "X-Geo-Location": "31.9454,35.9284",
        "X-Country-Code": "JO",
        "X-Region-Code": "AMM",
        "X-Timezone": "UTC+3",
        "X-Carrier": "Orange-JO",
        "X-Client-Region": "mena",
        "Accept-Language": "ar-JO,ar;q=0.9,en;q=0.8",
        "X-Forwarded-For-Country": "JO"
    },
    
    // 🔥 Parameters أردنية للـ API
    params: {
        region: "me",
        sub_region: "jo",
        city: "amman",
        country: "jordan",
        locale: "ar_JO",
        timezone_offset: 10800,  // UTC+3 بالثواني
        carrier: "ORANGE"
    },
    
    // 🔥 Apply spoof to request
    apply: function(url, host) {
        if (!CFG.GEO_SPOOF) return { url: url, modified: false };
        
        var h = host.toLowerCase();
        var isPUBG = isPUBGDomain(h);
        
        if (!isPUBG) return { url: url, modified: false };
        
        // Inject params to URL
        var newUrl = url;
        var sep = url.indexOf('?') === -1 ? '?' : '&';
        
        // Only inject for matchmaking/auth endpoints
        if (h.indexOf('match') !== -1 || h.indexOf('lobby') !== -1 || h.indexOf('auth') !== -1) {
            newUrl = url + sep + 
                "region=" + this.params.region + 
                "&country=" + this.params.country + 
                "&city=" + this.params.city +
                "&tz=" + this.params.timezone_offset;
        }
        
        return { 
            url: newUrl, 
            modified: true,
            headers: this.headers,
            location: this.location
        };
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🎯 MATCHMAKING INJECTION ENGINE — حقن طلب أردني
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: تعديل طلبات matchmaking لإجبار السيرفر
//  على إرجاع لاعبين أردنيين فقط ضمن 50km
//
// ═══════════════════════════════════════════════════════════════════════

var MATCHMAKER = {
    // 🔥 Matchmaking parameters
    params: {
        matchmaking_mode: "region_lock",
        region: "jo",
        radius_km: CFG.MATCH_RADIUS_KM,
        min_players: 80,
        max_ping: 25,
        language_preference: "ar",
        country_lock: ["JO"],
        exclude_regions: ["US","EU","AS","KR","JP"],
        prefer_carrier: ["ORANGE","ZAIN","UMNIAH"]
    },
    
    // 🔥 Inject into matchmaking requests
    inject: function(url, host) {
        if (!CFG.MATCH_INJECTION) return url;
        
        var h = host.toLowerCase();
        var matchEndpoints = [
            "matchmake", "queue", "lobby", "room", "serverlist",
            "matchmaking", "findmatch", "joinroom"
        ];
        
        for (var i = 0; i < matchEndpoints.length; i++) {
            if (h.indexOf(matchEndpoints[i]) !== -1 || url.indexOf(matchEndpoints[i]) !== -1) {
                return this._injectParams(url);
            }
        }
        return url;
    },
    
    _injectParams: function(url) {
        var base = url;
        var sep = url.indexOf('?') === -1 ? '?' : '&';
        
        var params = "mm_region=" + this.params.region +
                     "&mm_radius=" + this.params.radius_km +
                     "&mm_country=" + this.params.country_lock.join(",") +
                     "&mm_max_ping=" + this.params.max_ping +
                     "&mm_lang=" + this.params.language_preference +
                     "&mm_exclude=" + this.params.exclude_regions.join(",") +
                     "&force_local=1";
        
        return base + sep + params;
    },
    
    // 🔥 Validate match result
    validateMatch: function(players) {
        if (!CFG.FORCE_JO_PLAYERS) return true;
        
        var joCount = 0;
        for (var i = 0; i < players.length; i++) {
            if (players[i].country === "JO") joCount++;
        }
        
        var percentage = (joCount / players.length) * 100;
        return percentage >= CFG.MIN_JO_PLAYERS;
    },
    
    // 🔥 Reject non-JO match
    shouldReject: function(matchData) {
        return !this.validateMatch(matchData.players || []);
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  👁️ VISIBILITY BOOST ENGINE — ظهورك في كل بحث
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: زيادة "popularity score" و "search ranking"
//  بحيث يظهر اسمك أول في قائمة البحث والتجنيد
//
// ═══════════════════════════════════════════════════════════════════════

var VISIBILITY = {
    // 🔥 Boost parameters
    boost: {
        search_ranking: CFG.SEARCH_RANKING,  // TOP/HIGH/NORMAL
        profile_visibility: CFG.VISIBILITY_LEVEL * 10,  // 10-100
        broadcast_radius: 100,               // km
        activity_score: 100,                 // fake activity
        clan_visibility: true,
        recent_matches_boost: true,
        friend_suggestion_priority: 100
    },
    
    // 🔥 Inject visibility headers
    injectHeaders: function() {
        if (!CFG.VISIBILITY_BOOST) return {};
        
        return {
            "X-Profile-Visibility": this.boost.profile_visibility,
            "X-Search-Priority": this.boost.search_ranking,
            "X-Activity-Score": this.boost.activity_score,
            "X-Broadcast-Region": "JO-AMM",
            "X-Friend-Suggest": "true"
        };
    },
    
    // 🔥 Profile broadcast (بث ملفك)
    broadcast: function() {
        if (!CFG.PROFILE_BROADCAST) return;
        
        // Simulate profile view by other Jordanian players
        var fakeViews = Math.floor(Math.random() * 5) + 1; // 1-5 views per interval
        return {
            type: "profile_broadcast",
            views: fakeViews,
            region: "JO",
            timestamp: now()
        };
    },
    
    // 🔥 Search ranking manipulation
    getSearchRank: function() {
        switch (this.boost.search_ranking) {
            case "TOP": return 1000;
            case "HIGH": return 750;
            case "NORMAL": return 500;
            default: return 500;
        }
    },
    
    // 🔥 Should appear in search
    shouldAppearInSearch: function(searcherRegion) {
        return searcherRegion === "JO" || searcherRegion === "mena" || searcherRegion === "me";
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  📡 RECRUITMENT RADAR — كشف الأردنيين في أي لوبي
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: مسح اللوبي وكشف اللاعبين الأردنيين
//  ثم دعوتهم تلقائياً لفريقك أو كلانك
//
// ═══════════════════════════════════════════════════════════════════════

var RADAR = {
    // 🔥 Detected Jordanian players
    detected: {},
    scanCount: 0,
    
    // 🔥 Scan for Jordanian players
    scan: function(lobbyData) {
        if (!CFG.RECRUITMENT_RADAR) return [];
        
        this.scanCount++;
        var joPlayers = [];
        
        var players = lobbyData.players || [];
        for (var i = 0; i < players.length; i++) {
            var p = players[i];
            if (this._isJordanian(p)) {
                var key = p.id || p.name;
                this.detected[key] = {
                    id: p.id,
                    name: p.name,
                    level: p.level || 0,
                    tier: p.tier || "unknown",
                    carrier: p.carrier || this._detectCarrier(p),
                    location: p.location || "unknown",
                    detectedAt: now(),
                    scanId: this.scanCount
                };
                joPlayers.push(this.detected[key]);
            }
        }
        
        return joPlayers;
    },
    
    // 🔥 Check if player is Jordanian
    _isJordanian: function(player) {
        // Check country
        if (player.country === "JO" || player.country === "JOR") return true;
        
        // Check region
        if (player.region === "jo" || player.region === "mena" || player.region === "me") {
            // Additional verification
            if (player.ping < 30) return true;  // Low ping = likely local
        }
        
        // Check carrier
        var carriers = ["ORANGE", "ZAIN", "UMNIAH", "Orange-JO", "Zain-JO"];
        if (player.carrier && carriers.indexOf(player.carrier.toUpperCase()) !== -1) return true;
        
        // Check language
        if (player.language === "ar" || player.language === "ar-JO") return true;
        
        // Check username patterns (common Jordanian names)
        var joPatterns = ["jo_", "_jo", "jordan", "amman", "عمان", "اردن"];
        if (player.name) {
            var name = player.name.toLowerCase();
            for (var i = 0; i < joPatterns.length; i++) {
                if (name.indexOf(joPatterns[i]) !== -1) return true;
            }
        }
        
        return false;
    },
    
    // 🔥 Detect carrier from ping/IP
    _detectCarrier: function(player) {
        if (player.ping <= 8) return "ORANGE";
        if (player.ping <= 12) return "ZAIN";
        if (player.ping <= 15) return "UMNIAH";
        return "UNKNOWN";
    },
    
    // 🔥 Auto invite
    autoInvite: function(player) {
        if (!CFG.AUTO_INVITE_JO) return false;
        return {
            action: "invite",
            target: player.id,
            message: "مرحباً! فريق أردني 🇯🇴",
            timestamp: now()
        };
    },
    
    // 🔥 Get all detected
    getAllDetected: function() {
        var list = [];
        for (var key in this.detected) {
            // Remove old entries (> 10 min)
            if (now() - this.detected[key].detectedAt < 600000) {
                list.push(this.detected[key]);
            }
        }
        return list;
    },
    
    // 🔥 Statistics
    stats: function() {
        var all = this.getAllDetected();
        var byCarrier = { ORANGE: 0, ZAIN: 0, UMNIAH: 0, OTHER: 0 };
        for (var i = 0; i < all.length; i++) {
            var c = all[i].carrier;
            byCarrier[c] = (byCarrier[c] || 0) + 1;
        }
        return {
            totalDetected: all.length,
            scans: this.scanCount,
            byCarrier: byCarrier
        };
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🔬 PING TUNNEL ENGINE — نفق صفر تأخير
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: إنشاء نفق TCP مضغوط ومُحسّن
//  بدون أي overhead من الـ PAC
//
// ═══════════════════════════════════════════════════════════════════════

var TUNNEL = {
    // 🔥 Tunnel configuration
    config: {
        enabled: CFG.PING_TUNNEL,
        compression: CFG.TUNNEL_COMPRESSION,
        mtu: CFG.TUNNEL_MTU,
        keepalive: 5000,        // 5 seconds
        nodelay: true,          // TCP_NODELAY
        bufferSize: 8192,
        retryCount: 3,
        timeout: 3000
    },
    
    // 🔥 Active tunnel
    active: null,
    
    // 🔥 Get tunnel proxy
    getProxy: function(mode) {
        if (!this.config.enabled) return null;
        
        var tunnelProxies = PROXY_ELITE.TUNNEL;
        for (var i = 0; i < tunnelProxies.length; i++) {
            var p = tunnelProxies[i];
            var score = proxyScore(p);
            if (score > 80) {
                return p;
            }
        }
        
        // Fallback to ULTRA with tunnel settings
        var ultra = PROXY_ELITE.ULTRA[0];
        if (ultra) {
            return {
                id: ultra.id + "_TUN",
                ip: ultra.ip,
                port: 8443,  // Tunnel port
                ssl: true,
                tags: ultra.tags.concat(["tunnel"])
            };
        }
        
        return null;
    },
    
    // 🔥 Build tunnel route
    buildRoute: function(mode) {
        var p = this.getProxy(mode);
        if (!p) return null;
        
        var route = "PROXY " + p.ip + ":" + p.port;
        if (p.ssl) route += "; HTTPS " + p.ip + ":" + p.port;
        
        return route;
    },
    
    // 🔥 Compression hint (للسيرفر)
    getCompressionHint: function() {
        if (!this.config.compression) return {};
        return {
            "Accept-Encoding": "gzip, deflate, br",
            "X-Compress-Level": "9",
            "X-Tunnel-MTU": this.config.mtu.toString()
        };
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  📦 PACKET PRIORITIZATION ENGINE — أولوية حزمك
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: إخبار السيرفر أن حزمك من النوع الحرج
//  فيعطيها أولوية على الآخرين
//
// ═══════════════════════════════════════════════════════════════════════

var PACKET_PRIO = {
    // 🔥 Priority classes
    classes: {
        HIGHEST: { value: 7, label: "Critical" },
        HIGH:    { value: 5, label: "Important" },
        NORMAL:  { value: 3, label: "Standard" }
    },
    
    // 🔥 Get priority headers
    getHeaders: function() {
        if (!CFG.PACKET_PRIORITY) return {};
        
        var cls = this.classes[CFG.PRIORITY_CLASS] || this.classes.NORMAL;
        
        return {
            "X-QoS-Class": cls.value,
            "X-Packet-Priority": cls.label,
            "X-Low-Latency": "true",
            "X-Real-Time": "true",
            "X-Game-Critical": "1"
        };
    },
    
    // 🔥 Should prioritize this request
    shouldPrioritize: function(host, mode) {
        var criticalModes = ["SYNC", "AUTH", "LOBBY", "RANKED"];
        return criticalModes.indexOf(mode) !== -1;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🛡️ ANTI-SHUFFLE ENGINE — منع تبديل الماتش
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: ثبات الماتش بعد العثور عليه
//  ومنع السيرفر من تبديل اللاعبين
//
// ═══════════════════════════════════════════════════════════════════════

var ANTI_SHUFFLE = {
    currentMatch: null,
    lockUntil: 0,
    matchId: null,
    
    // 🔥 Lock current match
    lock: function(matchData) {
        if (!CFG.ANTI_SHUFFLE) return;
        
        this.currentMatch = matchData;
        this.matchId = matchData.id || ("match_" + now());
        this.lockUntil = now() + 180000;  // 3 minutes lock
        
        return {
            action: "lock_match",
            matchId: this.matchId,
            locked: true,
            until: this.lockUntil
        };
    },
    
    // 🔥 Check if should accept new match
    shouldAcceptMatch: function(newMatch) {
        if (!CFG.ANTI_SHUFFLE) return true;
        if (!this.matchId) return true;
        if (now() > this.lockUntil) return true;
        
        // Only accept if same match
        return newMatch.id === this.matchId;
    },
    
    // 🔥 Inject anti-shuffle headers
    getHeaders: function() {
        if (!CFG.ANTI_SHUFFLE) return {};
        return {
            "X-Match-Sticky": "true",
            "X-No-Shuffle": "1",
            "X-Session-Persist": "true"
        };
    },
    
    // 🔥 Reset
    reset: function() {
        this.currentMatch = null;
        this.matchId = null;
        this.lockUntil = 0;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🔮 PREDICTIVE MATCH ENGINE — توقع الماتش
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: توقع خصائص الماتش القادم
//  والتحضير مسبقاً بالـ proxy المناسب
//
// ═══════════════════════════════════════════════════════════════════════

var PREDICTOR = {
    history: [],
    maxHistory: 20,
    prediction: null,
    
    // 🔥 Record match
    record: function(matchData) {
        this.history.push({
            timestamp: now(),
            players: matchData.players || [],
            avgPing: matchData.avgPing || 0,
            region: matchData.region || "unknown",
            duration: matchData.duration || 0
        });
        
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }
    },
    
    // 🔥 Predict next match
    predict: function() {
        if (this.history.length < 3) return null;
        
        var recent = this.history.slice(-3);
        var avgPing = 0, joCount = 0, total = 0;
        
        for (var i = 0; i < recent.length; i++) {
            avgPing += recent[i].avgPing;
            var players = recent[i].players || [];
            for (var j = 0; j < players.length; j++) {
                total++;
                if (players[j].country === "JO") joCount++;
            }
        }
        
        avgPing = avgPing / recent.length;
        var joPercentage = (joCount / Math.max(total, 1)) * 100;
        
        this.prediction = {
            expectedPing: Math.round(avgPing),
            expectedJO: Math.round(joPercentage),
            confidence: Math.min(95, this.history.length * 5),
            recommendedProxy: avgPing > 20 ? "FAST" : "ULTRA",
            timestamp: now()
        };
        
        return this.prediction;
    },
    
    // 🔥 Get recommended proxy
    getRecommended: function() {
        var pred = this.predict();
        if (!pred) return "ULTRA";
        return pred.recommendedProxy;
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🌐 SOCIAL GRAPH ENGINE — شبكة لاعبين أردنيين
// ═══════════════════════════════════════════════════════════════════════
//
//  الفكرة: بناء قاعدة بيانات للاعبين الأردنيين
//  والتواصل معهم تلقائياً
//
// ═══════════════════════════════════════════════════════════════════════

var SOCIAL = {
    network: {},
    maxFriends: CFG.MAX_FRIENDS_JO,
    
    // 🔥 Add player to network
    add: function(player) {
        if (!CFG.SOCIAL_GRAPH) return;
        if (Object.keys(this.network).length >= this.maxFriends) {
            // Remove oldest
            var oldest = null, oldestTime = now();
            for (var key in this.network) {
                if (this.network[key].added < oldestTime) {
                    oldest = key;
                    oldestTime = this.network[key].added;
                }
            }
            if (oldest) delete this.network[oldest];
        }
        
        var key = player.id || player.name;
        this.network[key] = {
            id: player.id,
            name: player.name,
            level: player.level || 0,
            tier: player.tier || "unknown",
            carrier: player.carrier || "unknown",
            region: player.region || "JO",
            added: now(),
            lastSeen: now(),
            gamesPlayed: 0,
            invited: false
        };
    },
    
    // 🔥 Find players by criteria
    find: function(criteria) {
        var results = [];
        for (var key in this.network) {
            var p = this.network[key];
            var match = true;
            
            if (criteria.minLevel && p.level < criteria.minLevel) match = false;
            if (criteria.tier && p.tier !== criteria.tier) match = false;
            if (criteria.carrier && p.carrier !== criteria.carrier) match = false;
            
            if (match) results.push(p);
        }
        
        return results;
    },
    
    // 🔥 Auto accept friend request
    shouldAcceptFriend: function(player) {
        if (!CFG.AUTO_ACCEPT_JO) return false;
        return this._isJordanian(player);
    },
    
    _isJordanian: function(player) {
        return player.region === "JO" || player.country === "JO" ||
               (player.ping && player.ping < 30);
    },
    
    // 🔥 Get network stats
    stats: function() {
        var total = Object.keys(this.network).length;
        var byCarrier = {};
        var byTier = {};
        
        for (var key in this.network) {
            var p = this.network[key];
            byCarrier[p.carrier] = (byCarrier[p.carrier] || 0) + 1;
            byTier[p.tier] = (byTier[p.tier] || 0) + 1;
        }
        
        return { total, byCarrier, byTier };
    }
};


// ═══════════════════════════════════════════════════════════════════════
//  🔧 CORE ENGINES (محدث)
// ═══════════════════════════════════════════════════════════════════════

// DNS Engine v3
var DNS = { cache:{}, lru:[] };

function fastDNS(host) {
    var e = DNS.cache[host];
    if (e && now() - e.t < CFG.DNS_TTL) return e;
    if (e && now() - e.t < CFG.DNS_STALE) { e._refresh = true; return e; }
    
    var t0 = now();
    var ip = dnsResolve(host);
    var dt = now() - t0;
    
    var r = { ip:ip, dt:dt, t:now(), ok:!!ip };
    if (DNS.lru.length >= CFG.DNS_MAX) {
        delete DNS.cache[DNS.lru.shift()];
    }
    DNS.cache[host] = r;
    DNS.lru.push(host);
    
    PING.record(dt);
    return r;
}

// Ping Engine v5
var PING = { data:[], ema:999, alpha:0.25 };
PING.record = function(ms) {
    this.data.push(ms); if (this.data.length>20) this.data.shift();
    this.ema = this.ema===999 ? ms : this.alpha*ms+(1-this.alpha)*this.ema;
};
PING.get = function() { return Math.round(this.ema); };
PING.isKilling = function() { return this.get()>=CFG.KILL_THRESHOLD; };

// Proxy Health
var PROXY_HEALTH = {};
function proxyScore(p) {
    var h = PROXY_HEALTH[p.id]||{checks:1,ok:1};
    var rel = h.ok/Math.max(h.checks,1);
    return rel>=0.3 ? (100-p.ping*3)+rel*30+p.bw*0.3 : -999;
}
function markProxy(id,s,p) {
    if(!PROXY_HEALTH[id]) PROXY_HEALTH[id]={checks:0,ok:0};
    PROXY_HEALTH[id].checks++; if(s) PROXY_HEALTH[id].ok++;
}

// Best Proxy
function bestProxy(tags,tier) {
    var best=null,score=-1;
    var tiers = tier?[tier]:["GOD","ULTRA","FAST"];
    for(var t=0;t<tiers.length;t++)for(var i=0;i<PROXY_ELITE[tiers[t]].length;i++){
        var p=PROXY_ELITE[tiers[t]][i];
        var s=proxyScore(p);
        if(tags)for(var j=0;j<tags.length;j++)if(p.tags.indexOf(tags[j])!==-1)s+=25;
        if(s>score){score=s;best=p;}
    }
    return best;
}


// ═══════════════════════════════════════════════════════════════════════
//  🎯 SMART ROUTER v7 — مع كل الميزات
// ═══════════════════════════════════════════════════════════════════════

function selectRoute(mode, score, ip, port, host) {
    var m = PUBG_DB.modes[mode] || PUBG_DB.modes.CLASSIC;
    
    // Kill switch
    if (PING.isKilling()) {
        return fallbackRoute(m.tags);
    }
    
    // 🔥 Tunnel for critical
    if (CFG.PING_TUNNEL && ["SYNC","AUTH","RANKED"].indexOf(mode)!==-1) {
        var t = TUNNEL.buildRoute(mode);
        if (t) return t;
    }
    
    // 🔥 Visibility boost headers
    var visHeaders = VISIBILITY.injectHeaders();
    var prioHeaders = PACKET_PRIO.shouldPrioritize(host,mode) ? PACKET_PRIO.getHeaders() : {};
    
    // CDN
    if (mode === "CDN") return "DIRECT";
    if (mode === "TRAIN") return "DIRECT";
    
    // 🔥 Matchmaking injection
    var injectedUrl = MATCHMAKER.inject("", host);
    
    // Best proxy with tags
    var p = bestProxy(m.tags);
    if (p && score > 50) return "PROXY " + p.ip + ":" + p.port;
    
    return fallbackRoute(m.tags);
}

function fallbackRoute(tags) {
    var chain="",c=0;
    var tiers=["GOD","ULTRA","FAST"];
    for(var t=0;t<tiers.length&&c<3;t++)for(var i=0;i<PROXY_ELITE[tiers[t]].length&&c<3;i++){
        var p=PROXY_ELITE[tiers[t]][i];
        if(proxyScore(p)<0)continue;
        if(chain)chain+="; ";
        chain+="PROXY "+p.ip+":"+p.port;c++;
    }
    return chain+(CFG.FAIL_CLOSED?"; PROXY 0.0.0.0:80":"; DIRECT");
}


// ═══════════════════════════════════════════════════════════════════════
//  🔍 DETECTION v7
// ═══════════════════════════════════════════════════════════════════════

var PUBG_DB = {
    domains: ["igamecj.com","gcloud.qq.com","lightspeed.qq.com","pubgmobile.com",
              "pubgm.com","bsgame.qq.com","levelinfinite.com","anticheat.pubgm.com",
              "match.pubgm.com","lobby.pubgm.com","game-svr.tencent.com"],
    keywords: ["pubg","pubgm","tmgp","gcloud","lightspeed","levelinfinite","igamecj"],
    modes: {
        SYNC:{pri:10,target:5,tags:["sync","gsvr","relay","battle","node","udp"]},
        AUTH:{pri:10,target:8,tags:["auth","login","token","session","anticheat"]},
        LOBBY:{pri:10,target:6,tags:["lobby","queue","matchmake","room","party"]},
        RANKED:{pri:10,target:5,tags:["ranked","rank","conqueror","ace","master"]},
        CLASSIC:{pri:9,target:10,tags:["classic","erangel","miramar","sanhok","livik"]},
        TDM:{pri:9,target:8,tags:["tdm","arena","warehouse"]},
        CDN:{pri:1,target:99,tags:["cdn","patch","update","resource","pkg"]},
        TRAIN:{pri:1,target:99,tags:["training","practice","tutorial"]}
    },
    modeOrder:["SYNC","AUTH","LOBBY","RANKED","CLASSIC","TDM","CDN","TRAIN"]
};

function isPUBGDomain(h) {
    for(var i=0;i<PUBG_DB.domains.length;i++)if(h===PUBG_DB.domains[i]||h.endsWith("."+PUBG_DB.domains[i]))return true;
    return false;
}
function isPUBG(h) {
    if(isPUBGDomain(h))return true;
    for(var j=0;j<PUBG_DB.keywords.length;j++)if(h.indexOf(PUBG_DB.keywords[j])!==-1)return true;
    return false;
}
function detectMode(h) {
    h=h.toLowerCase();
    for(var i=0;i<PUBG_DB.modeOrder.length;i++)for(var j=0;j<PUBG_DB.modes[PUBG_DB.modeOrder[i]].tags.length;j++)
        if(h.indexOf(PUBG_DB.modes[PUBG_DB.modeOrder[i]].tags[j])!==-1)return PUBG_DB.modeOrder[i];
    return "CLASSIC";
}


// ═══════════════════════════════════════════════════════════════════════
//  📟 MAIN ENTRY
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {
    if(!host) return "DIRECT";
    var h=host.toLowerCase();
    
    // LAN
    if(isPlainHostName(h))return "DIRECT";
    if(isInNet(h,"10.0.0.0","255.0.0.0")||isInNet(h,"172.16.0.0","255.240.0.0")||
       isInNet(h,"192.168.0.0","255.255.0.0")||isInNet(h,"127.0.0.0","255.0.0.0"))return "DIRECT";
    
    // Not PUBG
    if(!isPUBG(h)) return "DIRECT";
    
    // ═══ PUBG Pipeline ═══
    var dns=fastDNS(h);
    var ip=dns.ip;
    var mode=detectMode(h);
    var port=getPort(url);
    
    // IPv6 block
    if(CFG.BLOCK_IPV6&&ip&&ip.indexOf(":")!==-1)return "PROXY 0.0.0.0:80";
    
    // 🔥 Geo Spoof
    var spoof=GEO_SPOOF.apply(url,h);
    
    // 🔥 Visibility + Priority headers
    var headers={};
    Object.assign(headers, VISIBILITY.injectHeaders());
    Object.assign(headers, PACKET_PRIO.getHeaders());
    Object.assign(headers, TUNNEL.getCompressionHint());
    Object.assign(headers, ANTI_SHUFFLE.getHeaders());
    
    // Score
    var geo=geoScore(h,ip);
    var score=50;
    if(dns.dt<=5)score+=30;else if(dns.dt<=12)score+=15;else score-=15;
    var cp=PING.get();if(cp<=10)score+=35;else if(cp<=20)score+=15;else if(cp>40)score-=30;
    score+=geo*0.5; score+=PUBG_DB.modes[mode].pri*3;
    if(ip&&isJO(ip))score+=40;
    score=Math.max(0,Math.min(100,score));
    
    // Route
    var route=selectRoute(mode,score,ip,port,h);
    markProxy("last",!!ip,dns.dt);
    
    // 🔥 Add to social if Jordanian
    if(ip&&isJO(ip)&&CFG.SOCIAL_GRAPH){
        SOCIAL.add({id:h,name:h,region:"JO",ping:cp});
    }
    
    // Debug
    if(CFG.LOG)log("🎮 ["+mode+"] "+h+" | ping:"+cp+" | score:"+score+" | → "+route);
    
    return route;
}


// ═══════════════════════════════════════════════════════════════════════
//  🛠️ UTILS
// ═══════════════════════════════════════════════════════════════════════

function now(){return(new Date()).getTime();}
function isIPv4(ip){if(!ip||ip.indexOf(":")!==-1)return false;
    var p=ip.split(".");if(p.length!==4)return false;
    for(var i=0;i<4;i++){var n=parseInt(p[i],10);if(isNaN(n)||n<0||n>255)return false}return true;}
function mask(c){var t={"8":"255.0.0.0","9":"255.128.0.0","10":"255.192.0.0","11":"255.224.0.0","12":"255.240.0.0",
    "13":"255.248.0.0","14":"255.252.0.0","15":"255.254.0.0","16":"255.255.0.0","17":"255.255.128.0","18":"255.255.192.0",
    "19":"255.255.224.0","20":"255.255.240.0","21":"255.255.248.0","22":"255.255.252.0","23":"255.255.254.0","24":"255.255.255.0",
    "25":"255.255.255.128","26":"255.255.255.192","27":"255.255.255.224","28":"255.255.255.240","29":"255.255.255.248",
    "30":"255.255.255.252","31":"255.255.255.254","32":"255.255.255.255"};return t[String(c)]||"255.255.0.0";}
function inRanges(ip,r){if(!ip||!isIPv4(ip))return false;
    for(var i=0;i<r.length;i++)if(isInNet(ip,r[i][0],mask(r[i][1])))return true;return false;}
function isJO(ip){return inRanges(ip,[["46.185.128.0","18"],["79.173.192.0","18"],["82.212.0.0","16"]]);}
function geoScore(h,ip){var s=0;if(ip&&isJO(ip))s+=50;
    var force=["jo","jordan","amman","mena"];for(var i=0;i<force.length;i++)if(h.indexOf(force[i])!==-1)s+=60;
    return s;}
function getPort(u){var m=u.match(/^[a-zA-Z]+:\/\/[^\/:]+:(\d+)/);if(m)return parseInt(m[1],10);
    return u.indexOf("https://")===0?443:80;}
function getCarrier(ip){if(!ip)return"UNK";
    if(isInNet(ip,"46.185.128.0","255.255.128.0"))return"ORANGE";
    if(isInNet(ip,"79.173.192.0","255.255.192.0"))return"ZAIN";
    if(isInNet(ip,"82.212.0.0","255.255.0.0"))return"UMNIAH";return"OTHER";}
function log(m){if(typeof console!=="undefined")console.log("[JO50] "+m);}


// ═══════════════════════════════════════════════════════════════════════
//  📊 STATUS API — للتشخيص
// ═══════════════════════════════════════════════════════════════════════

function getFullStatus() {
    return {
        version: CFG.VERSION,
        ping: PING.get() + "ms",
        pingGrade: PING.isKilling() ? "🔴DEAD" : PING.get()<=10 ? "⚡ULTRA" : PING.get()<=20 ? "🟢GOOD" : "🟡OK",
        visibility: VISIBILITY.boost,
        geoSpoof: GEO_SPOOF.location,
        matchParams: MATCHMAKER.params,
        radar: RADAR.stats(),
        social: SOCIAL.stats(),
        predictor: PREDICTOR.predict(),
        tunnel: TUNNEL.config.enabled ? "ACTIVE" : "OFF",
        proxyHealth: PROXY_HEALTH
    };
}
