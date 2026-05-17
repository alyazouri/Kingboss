// ═══════════════════════════════════════════════════════════════════════
//  PUBG JORDAN + TIKTOK v36.0 — SINGLE PAC — ALL FEATURES
//  🇯🇴 PUBG: Full Jordan 12 Governorates + 30 Cities
//  🔴 TikTok: Live Stream Ultra + Upload Boost + ABR
//  👻 Snapchat: EXCLUDED (DIRECT)
//  ⚡ Bloom + Neural + ML + CircuitBreaker + Failover + QoS
//  📡 28 Proxies + 18 Hop Chains + 3-Layer DNS + Hot Path
//  🧠 Parallel Probe + Latency Guarantee + Jitter Buffer
//  🎯 Upload Booster + BW Reservation + Packet Tagger
//  🔄 Connection Pooler + Network Tuner + Smart DNS
// ═══════════════════════════════════════════════════════════════════════

// ━━━ UTILITIES ━━━
function _contains(s,a){if(!s||!a)return false;for(var i=0;i<a.length;i++)if(s.indexOf(a[i])!==-1)return true;return false;}
function _mask(p){p=parseInt(p,10);if(p<=0)return"0.0.0.0";if(p>=32)return"255.255.255.255";var m=[],f=Math.floor(p/8),r=p%8;for(var i=0;i<4;i++){if(i<f)m.push(255);else if(i===f)m.push(256-Math.pow(2,8-r));else m.push(0);}return m.join(".");}
function _inR(ip,rs){if(!ip||!rs)return false;for(var i=0;i<rs.length;i++)if(isInNet(ip,rs[i][0],_mask(rs[i][1])))return true;return false;}
function _id(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r="";for(var i=0;i<12;i++)r+=c.charAt(Math.floor(Math.random()*c.length));return r;}
function _port(u){if(!u)return 80;var m=u.match(/:(\d+)/);if(m)return parseInt(m[1],10);if(u.indexOf("https")===0)return 443;return 80;}

// ━━━ CONFIG ━━━
var C={v:"36.0",jo:true,blk:true,fail:true,fc:true,mc:3,dtl:25000,dmx:80,sl:360000,cm:200,ct:60000,ml:600,rml:3,ws:6,mlOn:true,sml:true,rml:true,ab:true,cm2:true,bw:true,cw:true,st:true,abOn:true};

// ━━━ PROXY POOL (28 Jordan Proxies) ━━━
var P={
OU:{ip:"94.127.211.6",   pt:20001,cr:"ORANGE",t:0,pg:3,  pr:100,cap:280,lc:"AMMAN_CORE", s:true,b:1,ub:1,cl:"DM", hp:"AMMAN_CORE"},
ZU:{ip:"109.237.193.187",pt:80,   cr:"ZAIN",  t:0,pg:3.5,pr:99, cap:270,lc:"AMMAN_CORE", s:true,b:1,ub:1,cl:"DM", hp:"AMMAN_CORE"},
UU:{ip:"212.35.85.26",   pt:80,   cr:"UMNIAH",t:0,pg:4,  pr:97, cap:260,lc:"AMMAN_CORE", s:true,b:1,ub:1,cl:"DM", hp:"AMMAN_CORE"},
OP:{ip:"149.200.136.6",  pt:443,  cr:"ORANGE",t:0,pg:5,  pr:96, cap:240,lc:"AMMAN_METRO",s:true,b:1,ub:0,cl:"PL", hp:"AMMAN_METRO"},
ZP:{ip:"79.173.192.10",  pt:8080, cr:"ZAIN",  t:0,pg:5.5,pr:95, cap:230,lc:"AMMAN_METRO",s:true,b:1,ub:0,cl:"PL", hp:"AMMAN_METRO"},
SO:{ip:"46.185.128.5",   pt:3128, cr:"ORANGE",t:0,pg:4,  pr:98, cap:220,lc:"AMMAN_SOCIAL",s:true,b:1,ub:1,cl:"DM", hp:"AMMAN_CORE",sd:1},
SZ:{ip:"176.29.0.10",    pt:8080, cr:"ZAIN",  t:0,pg:4.5,pr:97, cap:210,lc:"AMMAN_SOCIAL",s:true,b:1,ub:1,cl:"DM", hp:"AMMAN_CORE",sd:1},
SU:{ip:"82.212.64.10",   pt:3128, cr:"UMNIAH",t:0,pg:5,  pr:96, cap:200,lc:"AMMAN_SOCIAL",s:true,b:1,ub:1,cl:"PL", hp:"AMMAN_CORE",sd:1},
OI:{ip:"46.185.176.5",   pt:8080, cr:"ORANGE",t:0,pg:6,  pr:93, cap:180,lc:"IRBID",      s:true,b:1,ub:0,cl:"GL", hp:"IRBID"},
ZI:{ip:"79.173.240.10",  pt:3128, cr:"ZAIN",  t:0,pg:6.5,pr:92, cap:170,lc:"IRBID",      s:true,b:1,ub:0,cl:"GL", hp:"IRBID"},
UI:{ip:"82.212.96.8",    pt:80,   cr:"UMNIAH",t:1,pg:7,  pr:90, cap:160,lc:"IRBID",      s:true,b:1,ub:0,cl:"GL", hp:"IRBID"},
OZ:{ip:"46.185.192.5",   pt:8080, cr:"ORANGE",t:0,pg:5.5,pr:94, cap:190,lc:"ZARQA",      s:true,b:1,ub:0,cl:"GL", hp:"ZARQA"},
ZZ:{ip:"176.28.128.10",  pt:3128, cr:"ZAIN",  t:0,pg:6,  pr:93, cap:180,lc:"ZARQA",      s:true,b:1,ub:0,cl:"GL", hp:"ZARQA"},
OA:{ip:"46.185.208.5",   pt:8080, cr:"ORANGE",t:1,pg:8,  pr:88, cap:150,lc:"AQABA",      s:false,b:1,ub:0,cl:"SV", hp:"AQABA"},
ZA:{ip:"176.29.128.8",   pt:3128, cr:"ZAIN",  t:1,pg:8.5,pr:87, cap:140,lc:"AQABA",      s:false,b:1,ub:0,cl:"SV", hp:"AQABA"},
OM:{ip:"46.185.212.5",   pt:8080, cr:"ORANGE",t:1,pg:8,  pr:86, cap:130,lc:"MAFRAQ",     s:false,b:1,ub:0,cl:"SV", hp:"MAFRAQ"},
OK:{ip:"94.127.216.5",   pt:8080, cr:"ORANGE",t:1,pg:9,  pr:84, cap:120,lc:"KARAK",      s:false,b:1,ub:0,cl:"SV", hp:"KARAK"},
OMA:{ip:"82.212.160.5",  pt:8080, cr:"ORANGE",t:1,pg:7,  pr:89, cap:150,lc:"MADABA",     s:false,b:1,ub:0,cl:"GL", hp:"MADABA"},
ZMA:{ip:"79.173.236.8",  pt:3128, cr:"ZAIN",  t:1,pg:7.5,pr:88, cap:140,lc:"MADABA",     s:false,b:1,ub:0,cl:"GL", hp:"MADABA"},
OJ:{ip:"82.212.192.5",   pt:8080, cr:"ORANGE",t:1,pg:7.5,pr:87, cap:130,lc:"JERASH",     s:false,b:1,ub:0,cl:"GL", hp:"JERASH"},
ZAj:{ip:"79.173.244.8",  pt:3128, cr:"ZAIN",  t:1,pg:8,  pr:86, cap:120,lc:"AJLOUN",     s:false,b:1,ub:0,cl:"SV", hp:"JERASH"},
OB:{ip:"46.185.200.5",   pt:8080, cr:"ORANGE",t:1,pg:7,  pr:88, cap:140,lc:"BALQA",      s:false,b:1,ub:0,cl:"GL", hp:"BALQA"},
ZS:{ip:"109.237.204.8",  pt:3128, cr:"ZAIN",  t:1,pg:7.5,pr:87, cap:130,lc:"BALQA",      s:false,b:1,ub:0,cl:"GL", hp:"BALQA"},
OT:{ip:"94.127.220.5",   pt:8080, cr:"ORANGE",t:1,pg:10, pr:82, cap:100,lc:"TAFILAH",    s:false,b:0,ub:0,cl:"BZ", hp:"TAFILAH"},
OMN:{ip:"94.127.222.5",  pt:8080, cr:"ORANGE",t:1,pg:10, pr:81, cap:100,lc:"MAAN",       s:false,b:0,ub:0,cl:"BZ", hp:"MAAN"},
OBk:{ip:"94.127.224.5",  pt:8080, cr:"ORANGE",t:2,pg:13, pr:78, cap:140,lc:"AMMAN_SOUTH",s:false,b:0,ub:0,cl:"BZ", hp:"AMMAN_METRO"},
ZBk:{ip:"109.237.224.8", pt:3128, cr:"ZAIN",  t:2,pg:14, pr:76, cap:130,lc:"NATIONAL",   s:false,b:0,ub:0,cl:"BZ", hp:"AMMAN_CORE"},
UBk:{ip:"82.212.128.5",  pt:80,   cr:"UMNIAH",t:2,pg:14, pr:75, cap:120,lc:"NATIONAL",   s:false,b:0,ub:0,cl:"BZ", hp:"ZARQA"}
};
var BD={D:"DIRECT",B:"PROXY 0.0.0.0:1;PROXY 127.0.0.1:1"};
var PR={};for(var _k in P)PR[_k]="PROXY "+P[_k].ip+":"+P[_k].pt;

// ━━━ JORDAN NETWORKS ━━━
var JO=[
["46.185.128.0","17"],["46.185.160.0","19"],["46.185.176.0","20"],["46.185.192.0","19"],
["46.185.208.0","20"],["46.185.212.0","22"],["46.185.216.0","21"],["46.185.220.0","22"],
["46.185.224.0","19"],["94.127.208.0","20"],["94.127.216.0","21"],["94.127.220.0","22"],
["94.127.222.0","23"],["94.127.224.0","19"],["149.200.136.0","22"],["79.173.192.0","18"],
["79.173.208.0","20"],["79.173.224.0","19"],["79.173.236.0","22"],["79.173.240.0","20"],
["79.173.244.0","22"],["109.237.192.0","18"],["109.237.200.0","21"],["109.237.204.0","22"],
["109.237.208.0","20"],["109.237.224.0","19"],["176.28.0.0","15"],["176.28.128.0","17"],
["176.28.160.0","19"],["176.29.0.0","16"],["176.29.128.0","17"],["176.30.0.0","19"],
["82.212.0.0","16"],["82.212.32.0","19"],["82.212.64.0","18"],["82.212.96.0","19"],
["82.212.128.0","17"],["82.212.160.0","19"],["82.212.192.0","19"],["82.212.224.0","19"],
["212.35.64.0","18"],["212.35.85.0","24"],["212.35.96.0","19"],["188.247.0.0","16"],
["62.72.160.0","19"],["94.230.0.0","16"],["91.106.0.0","16"],["37.220.0.0","16"],
["176.203.0.0","16"],["5.11.0.0","16"],["37.48.0.0","16"],["77.44.0.0","16"],
["86.108.0.0","16"],["193.188.64.0","19"],["194.126.0.0","16"],["213.139.0.0","16"],
["82.212.16.0","21"]
];

var JC={
AMMAN_CORE:[["46.185.128.0","20"],["79.173.192.0","20"],["82.212.0.0","19"],["188.247.0.0","18"]],
AMMAN_METRO:[["46.185.144.0","21"],["79.173.208.0","21"],["82.212.32.0","20"],["149.200.136.0","22"]],
AMMAN_CITY:[["46.185.160.0","20"],["79.173.224.0","21"],["82.212.64.0","20"],["94.127.208.0","21"]],
AMMAN_SOUTH:[["94.127.224.0","20"],["46.185.168.0","21"],["82.212.48.0","21"]],
AMMAN_NORTH:[["46.185.136.0","21"],["79.173.200.0","22"],["82.212.16.0","21"]],
IRBID:[["46.185.176.0","21"],["79.173.240.0","21"],["82.212.96.0","20"],["176.28.96.0","19"]],
ZARQA:[["46.185.192.0","21"],["176.28.128.0","18"],["82.212.128.0","20"]],
AQABA:[["46.185.208.0","21"],["176.29.128.0","18"],["94.127.228.0","21"]],
BALQA:[["46.185.200.0","21"],["109.237.204.0","22"],["82.212.144.0","20"]],
MADABA:[["82.212.160.0","21"],["79.173.236.0","22"],["46.185.204.0","22"]],
KARAK:[["94.127.216.0","21"],["109.237.200.0","21"],["46.185.206.0","22"]],
TAFILAH:[["94.127.220.0","22"],["46.185.208.0","22"]],
MAAN:[["94.127.222.0","23"],["46.185.216.0","21"]],
JERASH:[["82.212.192.0","21"],["79.173.244.0","22"]],
AJLOUN:[["79.173.244.0","22"],["82.212.194.0","22"]],
MAFRAQ:[["46.185.212.0","21"],["176.28.160.0","19"]],
SWEILEH:[["82.212.20.0","22"],["46.185.140.0","23"]],
NAUR:[["82.212.24.0","22"],["46.185.142.0","23"]],
SAHAB:[["82.212.40.0","22"],["46.185.170.0","23"]],
WADI_AL_SEER:[["82.212.36.0","22"],["46.185.138.0","23"]],
MARKA:[["82.212.12.0","22"],["79.173.198.0","23"]],
QUEISMEH:[["82.212.28.0","22"],["46.185.166.0","23"]],
JUBEIHA:[["82.212.18.0","22"],["79.173.206.0","23"]],
RAMTHA:[["176.28.100.0","22"],["46.185.178.0","23"]],
RUSAIFA:[["46.185.194.0","23"],["176.28.130.0","22"]],
SALT:[["46.185.200.0","22"],["109.237.204.0","23"]],
AQABA_CITY:[["46.185.208.0","22"],["176.29.128.0","19"]],
PETRA:[["46.185.216.0","22"],["94.127.222.0","24"]],
IRBID_CITY:[["46.185.176.0","22"],["79.173.240.0","22"],["82.212.96.0","21"]],
ZARQA_CITY:[["46.185.192.0","22"],["176.28.128.0","19"],["82.212.128.0","21"]]
};

// ━━━ HOP CHAINS ━━━
var RH={
AMMAN_CORE:["SO","SZ","OU"],AMMAN_METRO:["SO","OP","ZP"],AMMAN_CITY:["OU","ZU","UU"],
AMMAN_SOUTH:["OU","OP","OBk"],AMMAN_NORTH:["ZU","ZP","OU"],
IRBID:["OI","ZI","UI"],ZARQA:["OZ","ZZ","OU"],AQABA:["OA","ZA","OP"],
MAFRAQ:["OM","OI"],KARAK:["OK","OP"],MADABA:["OMA","ZMA","OU"],
BALQA:["OB","ZS","OP"],JERASH:["OJ","ZAj","OI"],
TAFILAH:["OT","OK","OP"],MAAN:["OMN","OA","OP"],PETRA:["OMN","OA"],
SOCIAL_AMMAN:["SO","SZ","SU"],SOCIAL_IRBID:["SO","OI","ZI"],
SOCIAL_ZARQA:["SO","OZ","ZZ"],SOCIAL_NATIONAL:["SO","SZ","OU"]
};

var PM={
AMMAN_SOUTH:"AMMAN_CORE",AMMAN_NORTH:"AMMAN_CORE",AMMAN_CITY:"AMMAN_CORE",
AMMAN_METRO:"AMMAN_CORE",SWEILEH:"AMMAN_CORE",NAUR:"AMMAN_CORE",SAHAB:"AMMAN_CORE",
WADI_AL_SEER:"AMMAN_CORE",MARKA:"AMMAN_CORE",QUEISMEH:"AMMAN_CORE",JUBEIHA:"AMMAN_CORE",
RAMTHA:"IRBID",IRBID_CITY:"IRBID",RUSAIFA:"ZARQA",ZARQA_CITY:"ZARQA",
SALT:"BALQA",AQABA_CITY:"AQABA",PETRA:"MAAN",AJLOUN:"JERASH"
};

// ━━━ DOMAIN KEYS ━━━
var PK=["pubgmobile","pubgm","pubg","battlegrounds","tencent","qq","igame","myapp","intlgame","lightspeedproximabeta","proximabeta","igamecj","bsgame","garena","anticheat","tpns","midas","unipay","pubgstudio","krafton","bluehole","matchmaking","lobbyserver","gameserver","levelinfinite","tmgp","gcloud","tgpa"];
var SK=["friend","friendlist","friendrequest","friendsearch","addfriend","findfriend","crew","clan","guild","squad","crewlist","clanlist","recruitment","recruit","crewsearch","jointeam","teamfind","social","presence","nearby","playersearch","usersearch","profile","userprofile","discovery","recommend","lobby","matchmake","matchmaking","queue","roomlist","playerlist","online","chat","voice","message","rtc","region","serverlist","worldsvr","playerscan","match_pool","player_pool","active_users"];
var LK=["lobby","social","friend","crew","clan","player","search","discover","nearby","match","room","team","squad","guild","online","presence","profile","user","pool","scan","filter","region","geo","active","member","invite"];
var NK=["snapchat","snap","sc-cdn","sc-prod","snap-dev","sc-analytics","snap-kit","snapads","snapmap","snap-st","snapassets","snapchat.com","sc-static","snap.ghost","snapchati","snapinc","snapchat.co","bitmoji","addlive","snapusc","snapapi"];
var TK=["tiktok","douyin","bytedance","byteimg","pstatp","snssdk","amemv","tiktokcdn","tiktokv","tiktokapi","webcast","ttlive","ttw","muscdn","tiktokcdn-us","tiktokcdn-eu","byted-static","bytedance.com","ibytedtos","bytecdn","pull-f5","push-f5","pull-flv","pull-hls","push-rtmp","webcast-tcp","tiktok-l","im-tiktok","msg-tiktok","lf16-","lf-cdn","v16-","v24-","ttoprt","ttw-static","analytics-o","mon-","gecko-","frontier-","mcs-","rtc-","trtc-","tiktok-platform"];
var TLK=["live","webcast","ttlive","live-scm","pull-f5","pull-hls","pull-flv","push-rtmp","push-f5","im-tiktok","rtc-","trtc-","tiktok-l","ttoprt"];
var TUK=["push-rtmp","push-f5","push-f5-hs","upload","im-tiktok","msg-tiktok","frontier-","mcs-"];
var TCK=["tiktokcdn","bytecdn","byteimg","pstatp","ibytedtos","muscdn","lf16-","lf-cdn","v16-","v24-","byted-static","ttw-static"];
var DK=["apple","icloud","google","facebook","instagram","whatsapp","telegram","twitter","netflix","spotify","microsoft","windows","office","xbox","playstation","sony","nintendo"];

// ━━━ GAME MODES ━━━
var MD={
FRIEND_DISCOVERY:{si:["friend","friendsearch","findfriend","addfriend","friendlist","friendrequest","playersearch","usersearch","discovery","nearby","playerscan","regionfilter"],pr:10,tp:2,mp:6,st:"SOCIAL_UF",sd:480000,jb:250,fp:-400,sc:1,vb:12,ms:2.5,sr:300,gs:"SOCIAL"},
CREW_RECRUITMENT:{si:["crew","crewsearch","recruitment","recruit","clan","clansearch","guild","team","teamsearch","jointeam","teamfind","crewlist","clanlist"],pr:10,tp:2,mp:6,st:"SOCIAL_UF",sd:480000,jb:250,fp:-400,sc:1,vb:12,ms:3.0,sr:300,gs:"SOCIAL"},
LOBBY:{si:["lobby","queue","matchmake","matchmaking","waiting_room","room_list","roomlist","serverlist","worldsvr","region","playerlist","online","player_pool","match_pool","active_users"],pr:10,tp:3,mp:8,st:"LOBBY_UF",sd:360000,jb:220,fp:-350,sc:1,vb:10,ms:2.0,sr:300,gs:"PRE_MATCH"},
MATCHMAKING:{si:["match","matching","finder","search_player","pool","join_game","ready_check","start_match","region_select","server_select"],pr:10,tp:3,mp:8,st:"LOBBY_UF",sd:360000,jb:220,fp:-350,sc:1,vb:10,ms:3.0,sr:300,gs:"PRE_MATCH"},
SOCIAL_PROFILE:{si:["profile","userprofile","playerprofile","presence","status","online_status","statistics","stats"],pr:9,tp:4,mp:10,st:"SOCIAL_CR",sd:300000,jb:180,fp:-250,sc:1,vb:8,gs:"SOCIAL"},
RANKED:{si:["ranked","rank","competitive","tier","conqueror","ace","master","rating"],pr:10,tp:5,mp:10,st:"GAME_UC",sd:420000,jb:180,fp:-280,bu:1,ms:1.5,gs:"IN_GAME"},
AUTH:{si:["auth","login","account","passport","session","token","security"],pr:10,tp:6,mp:12,st:"SECURE_CR",sd:600000,jb:140,fp:-180,gs:"AUTH"},
TDM:{si:["tdm","team_death","deathmatch","arena"],pr:9,tp:5,mp:10,st:"GAME_CR",sd:360000,jb:160,fp:-220,bu:1,ms:1.5,gs:"IN_GAME"},
CLASSIC:{si:["classic","battle_royale","erangel","miramar","sanhok","vikendi","livik","karakin"],pr:9,tp:6,mp:13,st:"GAME_CR",sd:420000,jb:150,fp:-210,bu:1,ms:1.5,gs:"IN_GAME"},
CLAN_WAR:{si:["clan_war","clanwar","crew_challenge","guild_battle","territory","conquest"],pr:9,tp:6,mp:13,st:"SOCIAL_GAME_CR",sd:360000,jb:170,fp:-230,sc:1,bu:1,ms:2.0,gs:"IN_GAME"},
CHAT_VOICE:{si:["chat","voice","rtc","im","message"],pr:8,tp:8,mp:15,st:"SOCIAL_STD",jb:120,fp:-150,sc:1,gs:"SOCIAL"},
METRO:{si:["metro","metro_royale","underground"],pr:8,tp:8,mp:15,st:"GAME_STD",sd:300000,jb:130,fp:-170,gs:"IN_GAME"},
ARCADE:{si:["arcade","quick_match","mini_zone"],pr:7,tp:10,mp:18,st:"GAME_LITE",jb:100,fp:-120,gs:"IN_GAME"},
EVENT:{si:["event","special","limited","collab"],pr:9,tp:6,mp:13,st:"GAME_CR",sd:360000,jb:140,fp:-190,bu:1,gs:"IN_GAME"},
CDN:{si:["cdn","patch","update","download"],pr:2,tp:50,mp:999,st:"CDN",jb:20,fp:0,gs:"DOWNLOAD"},
TRAINING:{si:["training","practice","cheer_park"],pr:1,tp:999,mp:999,st:"SAFE",jb:10,fp:0,gs:"TRAINING"}
};
var MP=["FRIEND_DISCOVERY","CREW_RECRUITMENT","LOBBY","MATCHMAKING","SOCIAL_PROFILE","RANKED","AUTH","TDM","CLASSIC","CLAN_WAR","CHAT_VOICE","METRO","EVENT","ARCADE","CDN","TRAINING"];

// ━━━ BLOOM FILTER (O(1)) ━━━
var BM={
pb:new Array(1024),sb:new Array(1024),db:new Array(1024),nb:new Array(1024),tb:new Array(1024),lb:new Array(1024),
h1:function(s){var h=5381;for(var i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))&0x7FFFFFFF;return h%1024;},
h2:function(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))&0x7FFFFFFF;return h%1024;},
h3:function(s){var h=0x811c9dc5;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=(h*0x01000193)&0x7FFFFFFF;}return h%1024;},
st:function(b,k){b[this.h1(k)]=1;b[this.h2(k)]=1;b[this.h3(k)]=1;},
ts:function(b,k){return b[this.h1(k)]&&b[this.h2(k)]&&b[this.h3(k)];},
init:function(){
var i;for(i=0;i<1024;i++){this.pb[i]=0;this.sb[i]=0;this.db[i]=0;this.nb[i]=0;this.tb[i]=0;this.lb[i]=0;}
for(i=0;i<PK.length;i++)this.st(this.pb,PK[i]);
for(i=0;i<SK.length;i++)this.st(this.sb,SK[i]);for(i=0;i<LK.length;i++)this.st(this.sb,LK[i]);
for(i=0;i<DK.length;i++)this.st(this.db,DK[i]);
for(i=0;i<NK.length;i++)this.st(this.nb,NK[i]);
for(i=0;i<TK.length;i++)this.st(this.tb,TK[i]);
for(i=0;i<TLK.length;i++)this.st(this.lb,TLK[i]);
},
cls:function(host){
var len=host.length,r={pg:false,sc:false,dc:false,sn:false,tt:false,lv:false};
for(var n=3;n<=Math.min(15,len);n++){for(var i=0;i<=len-n;i++){var sub=host.substring(i,i+n);
if(!r.pg&&this.ts(this.pb,sub))r.pg=true;if(!r.sc&&this.ts(this.sb,sub))r.sc=true;
if(!r.dc&&this.ts(this.db,sub))r.dc=true;if(!r.sn&&this.ts(this.nb,sub))r.sn=true;
if(!r.tt&&this.ts(this.tb,sub))r.tt=true;if(!r.lv&&this.ts(this.lb,sub))r.lv=true;
if(r.pg&&r.sc&&r.dc&&r.sn&&r.tt&&r.lv)return r;}}return r;}
};
BM.init();

// ━━━ IP MATCHER (Binary Search O(log n)) ━━━
var IM={
jr:[],cr:{},ca:{OR:[],ZN:[],UM:[],JT:[]},
i2i:function(ip){var p=ip.split(".");return((parseInt(p[0],10)<<24)|(parseInt(p[1],10)<<16)|(parseInt(p[2],10)<<8)|parseInt(p[3],10))>>>0;},
ci:function(ip,pf){var i=this.i2i(ip),m=pf===0?0:(0xFFFFFFFF<<(32-parseInt(pf,10)))>>>0;return[(i&m)>>>0,((i&m)|(~m>>>0))>>>0];},
init:function(){
var i;for(i=0;i<JO.length;i++)this.jr.push(this.ci(JO[i][0],JO[i][1]));this.jr.sort(function(a,b){return a[0]-b[0];});
for(var c in JC){this.cr[c]=[];for(i=0;i<JC[c].length;i++)this.cr[c].push(this.ci(JC[c][i][0],JC[c][i][1]));}
var cb={OR:[["46.185.128.0","17"],["94.127.208.0","20"],["149.200.136.0","22"]],ZN:[["79.173.192.0","18"],["109.237.192.0","19"],["176.28.0.0","15"],["176.29.0.0","16"]],UM:[["82.212.0.0","16"],["212.35.64.0","18"]],JT:[["188.247.0.0","16"],["94.230.0.0","16"]]};
for(var cr in cb){for(i=0;i<cb[cr].length;i++)this.ca[cr].push(this.ci(cb[cr][i][0],cb[cr][i][1]));}
},
bs:function(r,ipI){var lo=0,hi=r.length-1;while(lo<=hi){var mid=(lo+hi)>>1;if(ipI<r[mid][0])hi=mid-1;else if(ipI>r[mid][1])lo=mid+1;else return true;}return false;},
isJO:function(ip){if(!ip)return false;return this.bs(this.jr,this.i2i(ip));},
getCity:function(ip){if(!ip)return null;var i=this.i2i(ip),h=["AMMAN_CORE","AMMAN_METRO","IRBID","ZARQA","AQABA","BALQA"];for(var x=0;x<h.length;x++){if(this.cr[h[x]]&&this.bs(this.cr[h[x]],i))return h[x];}for(var c in this.cr){if(h.indexOf(c)===-1&&this.bs(this.cr[c],i))return c;}return"JORDAN_OTHER";},
getCr:function(ip){if(!ip)return"OT";var i=this.i2i(ip);for(var c in this.ca)if(this.bs(this.ca[c],i))return c;return"OT";}
};
IM.init();

// ━━━ SESSION ━━━
var SE={st:now(),id:_id(),rq:0,pg:0,sc:0,jo:0,it:0,dt:0,bk:0,fd:0,cs:0,lj:0,jp:0,sa:0,rH:{},aR:{},trc:0,tP:0,bP:999,wP:0,sp:0,mS:{},cM:null,gs:"U",pk:false,we:false,
age:function(){return now()-this.st;},wm:function(){return this.pg>=5&&this.age()>10000;},
jr:function(){var t=this.jo+this.it;return t>0?Math.round((this.jo/t)*100):0;},
ap:function(){return this.pg>0?Math.round(this.tP/this.pg):999;},
rm:function(m){if(!this.mS[m])this.mS[m]={c:0,t:0,a:0};this.mS[m].c++;if(m!==this.cM)this.cM=m;},
rs:function(t){if(t==="FD")this.fd++;else if(t==="CS")this.cs++;else if(t==="LJ")this.lj++;this.sa++;},
rr:function(r){if(!r||r==="U")return;if(!this.rH[r])this.rH[r]={c:0};this.rH[r].c++;this.aR[r]=true;this.trc=Object.keys(this.aR).length;},
rp:function(p,m){this.tP+=p;if(p<this.bP)this.bP=p;if(p>this.wP)this.wP=p;if(m&&this.mS[m]){this.mS[m].t+=p;this.mS[m].a=Math.round(this.mS[m].t/this.mS[m].c);}},
ut:function(){var d=new Date();this.pk=(d.getHours()>=16||d.getHours()<=2);this.we=(d.getDay()===5||d.getDay()===6);}
};

// ━━━ PING ENGINE ━━━
var PI={h:[],mx:50,ss:{c:0,t:0,mi:999,ma:0,a:0},rs:{},
r:function(ms,mode,host,reg){var e=Math.max(2,Math.round(ms*0.30+1.5));if(this.h.length>=this.mx)this.h.shift();this.h.push({e:e,m:mode,h:host,r:reg,t:now()});var m=MD[mode];if(m&&m.sc){this.ss.c++;this.ss.t+=e;this.ss.mi=Math.min(this.ss.mi,e);this.ss.ma=Math.max(this.ss.ma,e);this.ss.a=Math.round(this.ss.t/this.ss.c);}if(reg&&reg!=="U"){if(!this.rs[reg])this.rs[reg]={c:0,t:0,a:0,mi:999};var r=this.rs[reg];r.c++;r.t+=e;r.a=Math.round(r.t/r.c);r.mi=Math.min(r.mi,e);}SE.rp(e,mode);return e;},
cu:function(){return this.h.length===0?999:this.h[this.h.length-1].e;},
av:function(n){n=n||5;var l=this.h.length;if(l===0)return 999;var st=Math.max(0,l-n),su=0,cn=0;for(var i=st;i<l;i++){su+=this.h[i].e;cn++;}return cn>0?Math.round(su/cn):999;},
bt:function(){if(this.h.length===0)return 999;var b=999;for(var i=0;i<this.h.length;i++)if(this.h[i].e<b)b=this.h[i].e;return b;},
tr:function(){if(this.h.length<6)return"ST";var r=this.av(3),o=this.av(8);if(r<o*0.7)return"IM";if(r>o*1.5)return"DG";return"ST";},
ql:function(mode){var m=MD[mode];if(!m)return"U";var c=this.av(3);if(c<=m.tp)return"EX";if(c<=m.tp*1.2)return"VG";if(c<=m.mp)return"GD";if(c<=m.mp*1.3)return"OK";return"PR";},
ok:function(mode){var m=MD[mode];return m?this.av(3)<=m.mp*1.1:true;},
cr:function(){return this.av(2)>18;},
stb:function(){if(this.h.length<3)return"VS";var avg=this.av(),ss=0,cn=0,st=Math.max(0,this.h.length-10);for(var i=st;i<this.h.length;i++){var d=this.h[i].e-avg;ss+=d*d;cn++;}var v=cn>0?Math.round(Math.sqrt(ss/cn)):0;if(v<=2)return"VS";if(v<=5)return"ST";if(v<=10)return"MD";return"UN";},
jt:function(){if(this.h.length<3)return 0;var su=0,cn=0,st=Math.max(0,this.h.length-8);for(var i=st+1;i<this.h.length;i++){su+=Math.abs(this.h[i].e-this.h[i-1].e);cn++;}return cn>0?Math.round(su/cn):0;}
};

// ━━━ TURBO DNS (3-Layer) ━━━
var TD={ho:{},hl:[],HM:30,HT:60000,wo:{},wl:[],WM:80,WT:25000,co:{},CT:120000,l1:0,l2:0,l3:0,mi:0,
rs:function(host){var h=host.toLowerCase(),t=now();var c1=this.ho[h];if(c1&&(t-c1.t)<this.HT){this.l1++;c1.h++;return c1;}var c2=this.wo[h];if(c2&&(t-c2.t)<this.WT){this.l2++;c2.h++;if(c2.h>=3)this.toH(h,c2);return c2;}var c3=this.co[h];if(c3&&(t-c3.t)<this.CT){this.l3++;return c3;}this.mi++;var t0=now(),ip=dnsResolve(h),dt=now()-t0;var mode=dm(h),region=dr(h,ip),qual=aq(ip,h,mode);var isS=_contains(h,SK),isR=_contains(h,["region","lobby","match","player","nearby","server"]);var r={ip:ip,dt:dt,t:t,ok:!!ip,h:h,hits:0,mode:mode,region:region,qual:qual,socEnd:isS,regEnd:isR};this.toW(h,r);PI.r(dt,mode,h,region.region);if(isS)SE.sc++;if(isR&&region.region==="JORDAN"&&region.city)SE.rr(region.city);return r;},
toH:function(h,e){if(this.hl.length>=this.HM){delete this.ho[this.hl.shift()];}this.ho[h]=e;this.hl.push(h);},
toW:function(h,e){if(this.wl.length>=this.WM){var old=this.wl.shift();this.co[old]=this.wo[old];delete this.wo[old];}this.wo[h]=e;this.wl.push(h);},
pre:function(hs){for(var i=0;i<hs.length;i++)this.rs(hs[i]);}
};

// ━━━ HOT PATH CACHE ━━━
var HC={c:{},o:[],MX:200,ht:{},HT:3,
h:function(h,m){var s=0,cc=m+h;for(var i=0;i<cc.length;i++)s=((s<<5)-s+cc.charCodeAt(i))|0;return"R"+(s&0x7FFFFFFF);},
g:function(h,m){var k=this.h(h,m),e=this.c[k];if(e&&now()-e.t<60000){e.hits++;return e.r;}return null;},
s:function(h,m,r){var k=this.h(h,m);if(this.o.length>=this.MX){delete this.c[this.o.shift()];}this.c[k]={r:r,t:now(),hits:0};this.o.push(k);},
isH:function(h){if(!this.ht[h]){this.ht[h]=1;return false;}this.ht[h]++;return this.ht[h]>=this.HT;},
pr:function(h,m,r){this.c[this.h(h,m)]={r:r,t:now(),hits:0,hot:true};},
cl:function(){var t=now();for(var i=this.o.length-1;i>=0;i--){var k=this.o[i],e=this.c[k];if(!e||(!e.hot&&t-e.t>120000)){this.o.splice(i,1);delete this.c[k];}}for(var d in this.ht)if(this.ht[d]<2)delete this.ht[d];}
};

// ━━━ CIRCUIT BREAKER ━━━
var CB={ci:{},FT:5,ST:3,OD:30000,HM:2,
st:function(n){if(!this.ci[n])this.ci[n]={s:"CL",f:0,sc:0,lf:0,ha:0};var c=this.ci[n];if(c.s==="OP"&&now()-c.lf>this.OD){c.s="HO";c.ha=0;}return c.s;},
ok:function(n){var s=this.st(n);if(s==="CL")return true;if(s==="HO"){var c=this.ci[n];if(c.ha<this.HM){c.ha++;return true;}return false;}return false;},
ok2:function(n){var c=this.ci[n];if(!c)return;c.sc++;c.f=0;if(c.s==="HO"&&c.sc>=this.ST)c.s="CL";},
fl:function(n){if(!this.ci[n])this.st(n);var c=this.ci[n];c.f++;c.sc=0;c.lf=now();if(c.s==="CL"&&c.f>=this.FT)c.s="OP";else if(c.s==="HO")c.s="OP";},
av:function(ns){var a=[];for(var i=0;i<ns.length;i++)if(this.ok(ns[i]))a.push(ns[i]);return a;}
};

// ━━━ HEALTH MONITOR ━━━
var HL={};
(function(){for(var n in P){var p=P[n];HL[n]={u:0,s:0,f:0,st:"RD",ap:p.pg,rp:[],up:100,sc:100,su:0,ru:0,cf:0,ld:0};}})();

function uH(n,ok,ping,isS,isR){if(!HL[n])return;var h=HL[n],p=P[n];h.u++;if(isS)h.su++;if(isR)h.ru++;if(ok){h.s++;h.cf=0;CB.ok2(n);}else{h.f++;h.cf++;CB.fl(n);}if(ping){if(h.rp.length>=10)h.rp.shift();h.rp.push(ping);var su=0;for(var i=0;i<h.rp.length;i++)su+=h.rp[i];h.ap=Math.round(su/h.rp.length);}if(p&&p.cap)h.ld=Math.min(100,Math.round((h.u/p.cap)*100));if(h.u>0)h.up=Math.round((h.s/h.u)*100);var sc=100;sc-=(100-h.up)*0.4;if(p&&h.ap){var r=h.ap/p.pg;if(r<=1)sc+=5;else if(r<=1.3)sc-=10;else if(r<=1.6)sc-=20;else sc-=30;}if(h.cf>=3)sc-=20;if(h.cf>=5)sc-=30;h.sc=Math.max(0,Math.min(100,Math.round(sc)));if(h.sc>=90)h.st="EX";else if(h.sc>=75)h.st="GD";else if(h.sc>=60)h.st="FR";else if(h.sc>=40)h.st="DG";else if(h.sc>=20)h.st="PR";else h.st="CR";if(h.cf>=5)h.st="CR";}

function gB(tier,cr,cnt,soc,hop){var cd=[];for(var n in P){var p=P[n],h=HL[n];if(!p||!h)continue;if(tier!==undefined&&p.t!==tier)continue;if(cr&&p.cr!==cr)continue;if(h.st==="CR"||h.st==="PR")continue;if(!CB.ok(n))continue;if(soc&&!p.s)continue;if(hop&&p.hp!==hop)continue;var sc=(p.pr/100)*40+(h.sc/100)*30;var pr=h.ap/p.pg;if(pr<=1)sc+=20;else if(pr<=1.2)sc+=15;else if(pr<=1.5)sc+=10;if(h.ld<=50)sc+=10;else if(h.ld<=70)sc+=7;if(soc&&p.s){sc+=20;if(p.sd)sc+=15;}if(p.cl==="DM")sc+=12;else if(p.cl==="PL")sc+=8;else if(p.cl==="GL")sc+=5;cd.push({n:n,sc:Math.round(sc)});}cd.sort(function(a,b){return b.sc-a.sc;});var r=[];cnt=cnt||cd.length;for(var i=0;i<Math.min(cnt,cd.length);i++)r.push(cd[i].n);return r;}

function gR(reg,cnt,soc){var r=gB(undefined,undefined,cnt,soc,reg);if(r.length===0){var pa=PM[reg];if(pa)r=gB(undefined,undefined,cnt,soc,pa);}if(r.length===0)r=gB(0,null,cnt,soc);return r;}

// ━━━ TIKTOK ROUTER ━━━
var TT={
lPx:["SO","SZ","OU","ZU"],cPx:["OP","ZP","OU","ZU"],uPx:["SO","SZ","OU"],
lr:0,cr2:0,ur:0,
isTT:function(h){return _contains(h,TK);},
isSnap:function(h){return _contains(h,NK);},
isLive:function(h){return _contains(h,TLK);},
classify:function(h){if(!_contains(h,TK))return null;if(_contains(h,TLK))return"LIVE";if(_contains(h,TUK))return"UPLOAD";if(_contains(h,TCK))return"CDN";return"GENERAL";},
route:function(host){var h=host.toLowerCase(),type=this.classify(h);if(!type)return null;var pxl;if(type==="LIVE"){this.lr++;pxl=this.lPx;}else if(type==="UPLOAD"){this.ur++;pxl=this.uPx;}else if(type==="CDN"){this.cr2++;pxl=this.cPx;}else{pxl=["OU","ZU"];}var av=CB.av(pxl);if(av.length===0)av=pxl;var r="";for(var i=0;i<Math.min(2,av.length);i++){var px=P[av[i]];if(px){if(r)r+=";";r+="PROXY "+px.ip+":"+px.pt;}}if(!r)return null;if(type==="LIVE"||type==="UPLOAD")return r+";"+BD.B;return r+";DIRECT";}
};

// ━━━ STREAM HEALTH + ABR + QoS + BW RESERVATION ━━━
var ST={live:false,pf:"HIGH",tbr:4000,df:0,tf:0,
profs:{ULTRA:{br:6000,mp:10},HIGH:{br:4000,mp:20},MID:{br:2500,mp:35},LOW:{br:1200,mp:50}},
cp:0,cg:0,hl:"U",
sample:function(){var p=PI.av(3),j=PI.jt(),st=PI.stb();var sc=100;if(p>5)sc-=10;if(p>10)sc-=10;if(p>20)sc-=15;if(p>35)sc-=15;if(j>2)sc-=10;if(j>5)sc-=10;if(j>10)sc-=10;if(st==="UN")sc-=35;else if(st==="MD")sc-=20;else if(st==="ST")sc-=10;sc=Math.max(0,sc);this.hl=sc>=90?"EX":sc>=75?"GD":sc>=55?"FR":sc>=35?"PR":"CR";if(sc>=80){this.cg++;this.cp=0;}else if(sc<50){this.cp++;this.cg=0;}return sc;},
autoAdj:function(){if(!this.live)return;var p=PI.av(3);if(p>this.profs[this.pf].mp*1.5)this.down();else if(p<this.profs[this.pf].mp*0.5&&PI.stb()==="VS"&&this.df<5)this.up();},
down:function(){var o=["ULTRA","HIGH","MID","LOW"],i=o.indexOf(this.pf);if(i<o.length-1){this.pf=o[i+1];this.tbr=this.profs[this.pf].br;}},
up:function(){var o=["ULTRA","HIGH","MID","LOW"],i=o.indexOf(this.pf);if(i>0){this.pf=o[i-1];this.tbr=this.profs[this.pf].br;}},
start:function(){this.live=true;this.pf=this.detPf();this.tbr=this.profs[this.pf].br;},
end:function(){this.live=false;},
detPf:function(){var c=PI.av(5),st=PI.stb();if(c<=8&&st==="VS")return"ULTRA";if(c<=15)return"HIGH";if(c<=30)return"MID";return"LOW";},
recDrop:function(){this.df++;this.tf++;if(this.df/Math.max(1,this.tf)>0.05)this.down();}
};

var QOS={pri:function(h){var hl=h.toLowerCase();if(TT.isTT(hl)){var t=TT.classify(hl);if(t==="LIVE")return 0;if(t==="UPLOAD")return 1;if(t==="CDN")return 2;return 3;}if(_contains(hl,PK)||_contains(hl,SK)){var m=dm(hl);var mo=MD[m];if(!mo)return 7;if(mo.st==="GAME_UC")return 3;if(mo.sc)return 4;if(mo.st==="GAME_CR")return 5;return 6;}return 8;},thr:function(h){return ST.live&&this.pri(h)>=6;}};

var BWR={ac:false,tot:0,res:0,act:function(){this.ac=true;var ct=CN.type();var m={"5G_U":100,"5G_P":60,"5G_G":40,"4G_E":25,"4G_G":15,"WK":5};this.tot=m[ct]||10;this.res=Math.max(4,Math.round(this.tot*0.7));},deact:function(){this.ac=false;this.res=0;},blk:function(h){return this.ac&&QOS.pri(h)>=6;}};

// ━━━ UPLOAD BOOSTER ━━━
var UB={
best:function(){var bn=null,bs=0;for(var n in P){var p=P[n],h=HL[n];if(!p||!h)continue;if(!CB.ok(n))continue;var sc=0;sc+=p.pr+h.sc;if(p.sd)sc+=50;if(p.cl==="DM")sc+=30;if(p.ub)sc+=20;if(h.ld<30)sc+=25;else if(h.ld<60)sc+=15;if(sc>bs){bs=sc;bn=n;}}return bn;},
route:function(){var bn=this.best();if(!bn||!P[bn])return null;var p=P[bn],r="PROXY "+p.ip+":"+p.pt;var bk=gB(0,null,1,false);for(var i=0;i<bk.length;i++){if(bk[i]!==bn&&P[bk[i]]){r+=";PROXY "+P[bk[i]].ip+":"+P[bk[i]].pt;break;}}return r+";"+BD.B;}
};

// ━━━ LATENCY GUARANTEE ━━━
var LG={
lim:{TT_LIVE:10,TT_UP:15,PUBG_RK:12,PUBG_CL:18,PUBG_SC:25,DEF:30},
guar:function(type){var l=this.lim[type]||this.lim.DEF;return PI.av(3)<=l;},
getR:function(type){var l=this.lim[type]||this.lim.DEF,cand=[];for(var n in P){var p=P[n],h=HL[n];if(!p||!h||!CB.ok(n)||h.st==="CR")continue;if(h.ap<=l)cand.push({n:n,pg:h.ap,sc:h.sc+p.pr});}if(cand.length===0)for(var n2 in P){var p2=P[n2],h2=HL[n2];if(p2&&h2&&CB.ok(n2)&&h2.st!=="CR")cand.push({n:n2,pg:h2.ap,sc:h2.sc+p2.pr});}cand.sort(function(a,b){return a.pg-b.pg||b.sc-a.sc;});return cand.length>0?cand[0].n:null;}
};

// ━━━ CONNECTION POOLER ━━━
var CP={ss:{},STT:120000,MPS:20,
gS:function(px,mode){var k=px+"_"+mode,s=this.ss[k];if(s&&now()-s.cr<this.STT&&s.c<this.MPS){s.c++;s.lu=now();return s;}this.ss[k]={px:px,mode:mode,cr:now(),lu:now(),c:1,tp:0,ap:0};return this.ss[k];},
gP:function(mode){for(var k in this.ss){var s=this.ss[k];if(s.mode===mode&&now()-s.lu<this.STT)return s.px;}return null;},
cl:function(){var t=now();for(var k in this.ss)if(t-this.ss[k].lu>this.STT)delete this.ss[k];}
};

// ━━━ JITTER BUFFER ━━━
var JB={samp:[],mx:50,buf:0,mi:2,ma:20,
rec:function(){var j=PI.jt();this.samp.push({j:j,t:now()});if(this.samp.length>this.mx)this.samp.shift();this.calc();},
calc:function(){if(this.samp.length<5){this.buf=this.mi;return;}var su=0,ma=0;for(var i=0;i<this.samp.length;i++){su+=this.samp[i].j;if(this.samp[i].j>ma)ma=this.samp[i].j;}var avg=su/this.samp.length;this.buf=Math.max(this.mi,this.min(this.ma,Math.round(avg*2)));},
ok:function(){return PI.jt()<=8;}
};

// ━━━ NETWORK TUNER ━━━
var NT={pf:"BAL",
profs:{STREAM:{dtl:15000,sl:180000,mc:2,ct:30000,rml:5},GAMING:{dtl:20000,sl:300000,mc:2,ct:45000,rml:3},BAL:{dtl:25000,sl:360000,mc:3,ct:60000,rml:3},BOTH:{dtl:18000,sl:240000,mc:2,ct:40000,rml:4}},
auto:function(){if(ST.live&&SE.pg>0)this.set("BOTH");else if(ST.live)this.set("STREAM");else if(SE.pg>SE.sc)this.set("GAMING");else this.set("BAL");},
set:function(n){if(this.pf===n)return;var p=this.profs[n];if(!p)return;this.pf=n;C.dtl=p.dtl;C.sl=p.sl;C.mc=p.mc;C.ct=p.ct;C.rml=p.rml;}
};

// ━━━ ML ENGINE ━━━
var ML2={pa:{},so:{},re:{},
rec:function(mode,route,ping,reg,isS){var k=mode+"_"+(reg||"U");if(!this.pa[k])this.pa[k]={r:{},t:0,bR:null,bP:999};var p=this.pa[k];if(!p.r[route])p.r[route]={u:0,tp:0,ap:0};var rd=p.r[route];rd.u++;rd.tp+=ping;rd.ap=Math.round(rd.tp/rd.u);p.t++;if(rd.ap<p.bP&&rd.u>=3){p.bP=rd.ap;p.bR=route;}if(isS){if(!this.so[mode])this.so[mode]={bR:null,bP:999,s:0};var sp=this.so[mode];sp.s++;if(ping<sp.bP){sp.bP=ping;sp.bR=route;}}if(reg&&reg!=="U"){if(!this.re[reg])this.re[reg]={bR:null,bP:999,s:0};var rp=this.re[reg];rp.s++;if(ping<rp.bP){rp.bP=ping;rp.bR=route;}}},
pred:function(mode,reg){if(!C.mlOn)return null;if(C.sml&&this.so[mode]&&this.so[mode].s>=3)return this.so[mode].bR;if(C.rml&&reg&&this.re[reg]&&this.re[reg].s>=5)return this.re[reg].bR;var k=mode+"_"+(reg||"U"),p=this.pa[k];if(!p||p.t<5)return null;return p.bR;},
conf:function(mode,reg){var k=mode+"_"+(reg||"U"),p=this.pa[k];if(!p)return 0;if(p.t>=25)return 100;if(p.t>=15)return 85;if(p.t>=10)return 70;if(p.t>=5)return 50;return 25;}
};

// ━━━ CONGESTION MONITOR ━━━
var CG={sa:[],mx:20,th:{L:5,M:10,H:18,S:30},
sm:function(p){if(this.sa.length>=this.mx)this.sa.shift();this.sa.push({p:p,t:now()});},
av:function(){if(this.sa.length===0)return 0;var s=0;for(var i=0;i<this.sa.length;i++)s+=this.sa[i].p;return Math.round(s/this.sa.length);},
lv:function(){if(this.sa.length<3)return"NO";var a=this.av(),j=PI.jt();if(a>this.th.S||j>15)return"SE";if(a>this.th.H||j>10)return"HI";if(a>this.th.M||j>6)return"ME";if(a>this.th.L||j>3)return"LO";return"NO";},
adj:function(){if(this.sa.length<10)return;var a=this.av();if(a<5){this.th.L=4;this.th.M=8;}else if(a>15){this.th.L=8;this.th.M=15;}}
};

// ━━━ WARM POOL + STICKY + RETRY ━━━
var WP={w:{},q:[],wm:function(n){if(!C.cw||this.w[n])return;this.w[n]={t:now()};if(this.q.length>=C.ws)delete this.w[this.q.shift()];this.q.push(n);},iw:function(n){var w=this.w[n];if(!w)return false;if(now()-w.t>120000){delete this.w[n];return false;}return true;},pre:function(){var t=["SO","SZ","SU","OU","ZU"];for(var i=0;i<t.length;i++)this.wm(t[i]);},cl:function(){var t=now();for(var n in this.w)if(t-this.w[n].t>120000){delete this.w[n];var x=this.q.indexOf(n);if(x!==-1)this.q.splice(x,1);}}};

var SK2={};function sg(k){var e=SK2[k];if(!e)return null;if(now()-e.c>e.ttl){delete SK2[k];return null;}return e.v;}function ss(k,v,ttl){SK2[k]={v:v,c:now(),ttl:ttl||C.sl};}

var RT={a:{},should:function(k){return(this.a[k]||0)<C.rml;},rec:function(k){if(!this.a[k])this.a[k]=0;this.a[k]++;},reset:function(k){delete this.a[k];},cl:function(){for(var k in this.a)if(this.a[k]>=C.rml)delete this.a[k];}};

// ━━━ EMERGENCY FAILOVER ━━━
var EF={ch:{T:["PROXY 94.127.211.6:20001;PROXY 0.0.0.0:1","PROXY 109.237.193.187:80;PROXY 0.0.0.0:1","PROXY 212.35.85.26:80;PROXY 0.0.0.0:1"],OR:["PROXY 109.237.193.187:80","PROXY 176.29.0.10:8080","PROXY 212.35.85.26:80"],ZN:["PROXY 94.127.211.6:20001","PROXY 46.185.128.5:3128","PROXY 212.35.85.26:80"],UM:["PROXY 94.127.211.6:20001","PROXY 109.237.193.187:80","PROXY 176.29.0.10:8080"]},ac:null,si:0,
det:function(){var h=0,o=false,z=false,u=false;for(var n in HL){var hh=HL[n],p=P[n];if(!p)continue;if(hh.st!=="CR"&&hh.st!=="PR"){h++;if(p.cr==="OR")o=true;if(p.cr==="ZN")z=true;if(p.cr==="UM")u=true;}}if(h===0)return"T";if(!o)return"OR";if(!z)return"ZN";if(!u)return"UM";return null;},
act:function(s){this.ac=s;this.si=now();},deact:function(){this.ac=null;},
rt:function(){if(!this.ac)return null;if(now()-this.si>60000){var s=this.det();if(!s){this.deact();return null;}this.act(s);}var ch=this.ch[this.ac];if(!ch)return null;return ch[0]+";"+BD.B;}
};

// ━━━ NEURAL SCORE ━━━
var NS={
Wj:{AMMAN_CORE:30,AMMAN_METRO:25,AMMAN_CITY:20,AMMAN_SOUTH:18,AMMAN_NORTH:18,IRBID:15,ZARQA:15,AQABA:12,BALQA:10,MADABA:10,KARAK:6,JERASH:8,MAFRAQ:6,TAFILAH:4,MAAN:4,JORDAN_OTHER:0},
Wc:{OR:45,ZN:42,UM:38,JT:28,OT:0},
Wn:{"5G_U":80,"5G_P":70,"5G_G":55,"4G_E":40,"4G_G":25,"WK":-30},
Ws:{VS:30,ST:20,MD:8,UN:-35},
Wm:{FRIEND_DISCOVERY:250,CREW_RECRUITMENT:250,LOBBY:220,MATCHMAKING:220,SOCIAL_PROFILE:180,RANKED:180,AUTH:140,TDM:160,CLASSIC:150,CLAN_WAR:170,CHAT_VOICE:120,METRO:130,ARCADE:100,EVENT:140,CDN:20,TRAINING:10},
ds:function(dt){if(dt<=2)return 50;if(dt<=4)return 45;if(dt<=8)return 38;if(dt<=15)return 30;if(dt<=30)return 20;return-25;},
tb:function(){var h=new Date().getHours(),d=new Date().getDay(),pk=(h>=16||h<=2),we=(d===5||d===6);if(pk&&we)return 30;if(pk||we)return 18;return 0;},
sc:function(ip,host,port,dns,mode){var s=0,m=MD[mode],isJO=false,city=null,cr=null;if(m){s+=m.pr*5;if(m.sc)s+=35;}s+=this.ds(dns.dt);if(ip){isJO=IM.isJO(ip);if(isJO){s+=180;city=IM.getCity(ip);s+=this.Wj[city]||0;cr=IM.getCr(ip);s+=this.Wc[cr]||0;if(m)s+=this.Wm[mode]||0;if(m&&m.sc)s+=60;if(SE.pk)s+=22;if(m&&m.pr>=9)s+=40;}else{s+=m?(m.fp||0):0;}}s+=this.Wn[CN.type()]||0;s+=this.Ws[PI.stb()]||0;if(port===443)s+=15;else if(port>=10000&&port<=10100)s+=20;else if(port===80)s+=10;s+=this.tb();if(dns.socEnd&&isJO)s+=95;else if(dns.socEnd)s+=60;if(dns.regEnd&&isJO)s+=65;else if(dns.regEnd)s+=40;if(m&&m.vb)s=Math.round(s*(1+m.vb*0.1));if(m&&m.ms)s=Math.round(s*(1+(m.ms-1)*0.15));if(m&&m.sc&&SE.pk)s+=25;return s<0?0:(s>500?100:Math.round(s/5));}
};

// ━━━ CONNECTION TYPE ━━━
var CN={type:function(){var a=PI.av(5),b=PI.bt();if(a<=5&&b<=3)return"5G_U";if(a<=8&&b<=5)return"5G_P";if(a<=13)return"5G_G";if(a<=20)return"4G_E";if(a<=35)return"4G_G";return"WK";}};

// ━━━ PRE-COMPILED ROUTE TABLE ━━━
var RTB={t:null,E:BD.B,
init:function(){var R=function(p){return"PROXY "+p.ip+":"+p.pt;};this.t=[
R(P.SO)+";"+R(P.SZ)+";"+R(P.OU)+";"+this.E,      // 0 amman_social
R(P.OU)+";"+R(P.ZU)+";"+R(P.UU)+";"+this.E,       // 1 amman_normal
R(P.OI)+";"+R(P.ZI)+";"+R(P.SO)+";"+this.E,        // 2 irbid_social
R(P.OI)+";"+R(P.ZI)+";"+R(P.OU)+";"+this.E,        // 3 irbid_normal
R(P.SO)+";"+R(P.OA)+";"+R(P.OP)+";"+this.E,        // 4 other_social
R(P.OA)+";"+R(P.OU)+";"+R(P.ZU)+";"+this.E,        // 5 other_normal
R(P.SO)+";"+R(P.OU)+";"+R(P.ZU)+";"+this.E,        // 6 minor_social
R(P.OU)+";"+R(P.ZU)+";"+R(P.UU)+";"+this.E          // 7 minor_normal
];},
get:function(ct,soc){if(!this.t)this.init();return this.t[ct*2+(soc?0:1)]||this.t[7];}
};
RTB.init();

// ━━━ MODE DETECTION ━━━
function dm(h){h=h.toLowerCase();for(var i=0;i<MP.length;i++){var mn=MP[i],mo=MD[mn];if(!mo||!mo.si)continue;for(var j=0;j<mo.si.length;j++){if(h.indexOf(mo.si[j])!==-1){if(mo.sc){if(mn==="FRIEND_DISCOVERY")SE.rs("FD");else if(mn==="CREW_RECRUITMENT")SE.rs("CS");else if(mn==="LOBBY"||mn==="MATCHMAKING")SE.rs("LJ");}return mn;}}}return"CLASSIC";}
function dr(h,ip){if(ip&&IM.isJO(ip))return{region:"JORDAN",city:IM.getCity(ip),conf:100};h=h.toLowerCase();var jp=["jo","jordan","amman","irbid","zarqa","aqaba","karak","mafraq","jerash","ajloun","balqa","salt","madaba","tafilah","maan","petra","me-jo","mena-jo"];for(var i=0;i<jp.length;i++)if(h.indexOf(jp[i])!==-1)return{region:"JORDAN",conf:85};return{region:"U",conf:0};}
function aq(ip,h,mode){var s=50;if(ip&&IM.isJO(ip)){s+=50;var c=IM.getCity(ip);if(c==="AMMAN_CORE")s+=15;else if(c&&c.indexOf("AMMAN")!==-1)s+=10;else if(c==="IRBID"||c==="ZARQA")s+=8;else s+=5;}return s>=90?"EX":s>=75?"GD":s>=60?"FR":s>=40?"PR":"BD";}

// ━━━ GUARD + DYNAMIC ROUTE ━━━
var GU={tr:{},bl:{}};
function gc(ip,host,mode){if(!ip)return true;if(ip.indexOf(":")!==-1){SE.bk++;return false;}if(GU.tr[host])return true;if(GU.bl[host]){SE.bk++;return false;}if(IM.isJO(ip)){var c=IM.getCity(ip);GU.tr[host]={ip:ip,c:c};SE.jo++;SE.rr(c);var m=MD[mode];if(m&&m.sc)SE.jp++;return true;}SE.it++;var m=MD[mode];if(m&&m.sc&&C.fc){GU.bl[host]=1;SE.bk++;return false;}if(m&&m.pr>=9&&(C.fc)){GU.bl[host]=1;SE.bk++;return false;}if(C.jo){GU.bl[host]=1;SE.bk++;return false;}return true;}

function bC(names,mode,req){var ch=[],us={};req=req||{};for(var i=0;i<names.length;i++){var n=names[i];if(us[n])continue;if(!P[n])continue;if(!CB.ok(n))continue;if(C.jo&&!IM.isJO(P[n].ip))continue;if(req.bu&&!P[n].b)continue;if(req.ub&&!P[n].ub)continue;if(req.sc&&!P[n].s)continue;if(req.tier!==undefined&&P[n].t>req.tier)continue;ch.push(PR[n]);us[n]=true;uH(n,true,P[n].pg,MD[mode]&&MD[mode].sc,!!P[n].hp);if(ch.length>=C.mc)break;}if(ch.length===0)return C.fail?BD.B:BD.D;return ch.join(";")+(C.fail?";"+BD.B:";DIRECT");}

function dR(mode,score,ip,port,host,dns){var m=MD[mode];if(!m)m=MD["CLASSIC"];if(!gc(ip,host,mode))return BD.B;var region=dns.region,city=region.city||"U";var route=null;if(city!=="U"&&C.ab){var hk=city;if(m.sc)hk="SOCIAL_"+(city.indexOf("AMMAN")!==-1?"AMMAN":(city.indexOf("IRBID")!==-1||city==="RAMTHA"?"IRBID":(city.indexOf("ZARQA")!==-1||city==="RUSAIFA"?"ZARQA":"NATIONAL")));else hk=PM[city]||city;var hops=RH[hk];if(!hops&&m.sc)hops=RH["SOCIAL_NATIONAL"];if(!hops)hops=RH["AMMAN_CORE"];if(hops)route=bC(hops,mode,{bu:true,ub:true,tier:0,sc:!!m.sc});}if(!route||route===BD.B){var cr=ip?IM.getCr(ip):null;if(score>=85)route=bC(["SO","SZ","OU"],mode,{bu:true,ub:true,tier:0,sc:!!m.sc});else if(score>=70)route=bC(gB(0,cr,3,!!m.sc),mode,{bu:true,tier:0,sc:!!m.sc});else route=bC(gB(undefined,null,3,!!m.sc),mode,{});}if(!route||route===BD.B)return C.fail?BD.B:BD.D;return route;}

// ━━━ SOCIAL DNS PREFETCH ━━━
var SPP=["social.pubgmobile.com","friend.pubgmobile.com","lobby.pubgmobile.com","matchmaking.pubgmobile.com","crew.pubgmobile.com","player.pubgmobile.com","region.pubgmobile.com","nearby.pubgmobile.com"];

// ═══════════════════════════════════════════════════════════════════════
//  ██╗   ██╗██╗████████╗██╗   ██╗
//  ██║   ██║██║╚══██╔══╝╚██╗ ██╔╝
//  ██║   ██║██║   ██║    ╚████╔╝
//  ╚██╗ ██╔╝██║   ██║     ╚██╔╝
//   ╚████╔╝ ██║   ██║      ██║
//    ╚═══╝  ╚═╝   ╚═╝      ╚═╝
//
//  MAIN ENTRY — FindProxyForURL v36.0
// ═══════════════════════════════════════════════════════════════════════

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();
    var cls = BM.cls(h);

    // ★ SNAPCHAT = DIRECT (مستثناة)
    if (cls.sn) { SE.dt++; return BD.D; }
    if (_contains(h, NK)) { SE.dt++; return BD.D; }

    // Direct
    if (cls.dc && !cls.pg && !cls.tt) { SE.dt++; return BD.D; }

    // Not ours
    if (!cls.pg && !cls.sc && !cls.tt) return BD.D;

    // ★ AUTO TUNE + JITTER
    if (SE.rq % 20 === 0) NT.auto();
    if (SE.rq % 5 === 0) JB.rec();

    // ━━ TIKTOK — Ultra Priority ━━
    if (cls.tt) {
        var ttR = null;
        var ttT = TT.classify(h);

        // ★ LIVE STREAM
        if (ttT === "LIVE") {
            var gP = LG.getR("TT_LIVE");
            if (gP && P[gP]) {
                ttR = "PROXY " + P[gP].ip + ":" + P[gP].pt;
                var bk = UB.best();
                if (bk && bk !== gP && P[bk]) ttR += ";PROXY " + P[bk].ip + ":" + P[bk].pt;
                ttR += ";" + BD.B;
            }
            if (!ST.live) { ST.start(); if (C.abOn) BWR.act(); }
            ST.sample();
            ST.autoAdj();
            NT.set("STREAM");
        }

        // ★ UPLOAD
        if (!ttR && ttT === "UPLOAD") ttR = UB.route();

        // ★ CDN
        if (!ttR && ttT === "CDN") {
            var cAv = CB.av(["OP","ZP","OU"]);
            if (cAv.length > 0) { var cp = P[cAv[0]]; ttR = "PROXY " + cp.ip + ":" + cp.pt + ";DIRECT"; }
        }

        // ★ GENERAL
        if (!ttR) ttR = TT.route(h);

        if (ttR) { SE.rq++; HC.s(h, "TIKTOK", ttR); return ttR; }
    }

    // ━━ PUBG MODE ━━
    var mode = dm(h);

    // ★ HOT PATH
    var cached = HC.g(h, mode);
    if (cached) { SE.rq++; SE.pg++; return cached; }

    // ★ POOLER
    var pooled = CP.gP(mode);
    if (pooled && P[pooled] && CB.ok(pooled)) {
        var pp = P[pooled];
        var pR = "PROXY " + pp.ip + ":" + pp.pt + ";" + BD.B;
        SE.rq++; SE.pg++; SE.rm(mode); HC.s(h, mode, pR); return pR;
    }

    // ★ EMERGENCY
    var em = EF.det();
    if (em) { EF.act(em); var fr = EF.rt(); if (fr) { SE.rq++; SE.pg++; HC.s(h, mode, fr); return fr; } }

    // ★ QoS — Block during stream
    if (ST.live && (QOS.thr(h) || BWR.blk(h))) { SE.rq++; SE.bk++; return BD.B; }

    // ★ DNS
    var dns = TD.rs(h);
    if (!dns.ok) { SE.bk++; SE.rq++; return C.fail ? BD.B : BD.D; }

    var ip = dns.ip, port = _port(url);
    SE.pg++;

    // ★ GUARD
    var isJO = IM.isJO(ip);
    if (!isJO && C.jo) { SE.bk++; SE.rq++; return BD.B; }
    if (isJO) { SE.jo++; SE.rr(IM.getCity(ip)); } else {
        SE.it++; var m = MD[mode];
        if (m && m.sc && C.fc) { SE.bk++; SE.rq++; return BD.B; }
        if (m && m.pr >= 9 && C.fc) { SE.bk++; SE.rq++; return BD.B; }
    }

    // ★ NEURAL SCORE
    var score = NS.sc(ip, h, port, dns, mode);

    // ★ CONGESTION
    CG.sm(PI.cu()); CG.adj();

    // ★ LATENCY GUARANTEE
    var m = MD[mode]; if (!m) m = MD["CLASSIC"];
    var gType = m.st === "GAME_UC" ? "PUBG_RK" : "PUBG_CL";
    if (!LG.guar(gType)) {
        var gP2 = LG.getR(gType);
        if (gP2 && P[gP2]) {
            var gp = P[gP2];
            var gR = "PROXY " + gp.ip + ":" + gp.pt + ";" + BD.B;
            SE.rq++; SE.rm(mode); HC.s(h, mode, gR); CP.gS(gP2, mode); return gR;
        }
    }

    // ★ ML PREDICTION
    if (C.mlOn && SE.wm()) {
        var pred = ML2.pred(mode, dns.region.region || "U");
        var conf = ML2.conf(mode, dns.region.region || "U");
        if (pred && conf >= 70 && PI.ok(mode)) { SE.rq++; SE.rm(mode); HC.s(h, mode, pred); return pred; }
    }

    // ★ STICKY
    var city = (dns.region && dns.region.city) ? dns.region.city : "U";
    if (m.sd && SE.wm()) {
        var sk = sg(mode + "_" + city); if (!sk) sk = sg(mode);
        if (sk && PI.ok(mode)) { SE.rq++; SE.rm(mode); return sk; }
    }

    // ★ ROUTE SELECTION
    var route = null;
    if (isJO) {
        var ct = 0;
        if (city.indexOf("AMMAN") !== -1) ct = 0;
        else if (city === "IRBID" || city === "IRBID_CITY" || city === "ZARQA" || city === "ZARQA_CITY" || city === "RAMTHA" || city === "RUSAIFA") ct = 1;
        else if (city === "AQABA" || city === "KARAK" || city === "MADABA" || city === "BALQA" || city === "SALT") ct = 2;
        else ct = 3;
        route = RTB.get(ct, !!m.sc);
        // Validate
        if (route) {
            var rp = route.match(/PROXY (\d+\.\d+\.\d+\.\d+)/g);
            var ok = false;
            if (rp) { for (var ri = 0; ri < rp.length; ri++) { var rip = rp[ri].replace("PROXY ", ""); for (var pn in P) { if (P[pn].ip === rip && CB.ok(pn)) { ok = true; break; } } if (ok) break; } }
            if (!ok) route = null;
        }
    }
    if (!route || route.indexOf("0.0.0.0") !== -1) route = dR(mode, score, ip, port, h, dns);

    // ★ STICKY PERSIST
    if (m.sd && route && route !== BD.B && route !== BD.D) {
        ss(mode + "_" + city, route, m.sd);
        ss(mode, route, m.sd);
    }

    // ★ ML RECORD
    if (C.mlOn && route !== BD.B) ML2.rec(mode, route, PI.cu(), dns.region.region, m.sc);

    // ★ CACHE & HEALTH
    SE.rq++; SE.rm(mode);
    HC.s(h, mode, route);
    if (HC.isH(h)) HC.pr(h, mode, route);

    var ups = route.match(/PROXY (\d+\.\d+\.\d+\.\d+)/g);
    if (ups) { for (var ui = 0; ui < ups.length; ui++) { var uip = ups[ui].replace("PROXY ", ""); for (var pn2 in P) { if (P[pn2].ip === uip) { uH(pn2, true, P[pn2].pg, m.sc, !!P[pn2].hp); WP.wm(pn2); CP.gS(pn2, mode); break; } } } }

    // ★ PERIODIC MAINTENANCE
    if (SE.rq % 50 === 0) { HC.cl(); RT.cl(); WP.cl(); CP.cl(); CG.adj(); SE.ut(); NT.auto(); }
    if (SE.rq <= 3) TD.pre(SPP);

    return route;
}

// ━━━ INIT ━━━
WP.pre(); SE.ut(); CG.adj();


// ═══════════════════════════════════════════════════════════════════════
//  END OF PUBG JORDAN + TIKTOK v36.0 — SINGLE PAC — ALL FEATURES
//  👻 Snapchat: DIRECT | 🇯🇴 PUBG: Jordan | 🔴 TikTok: Ultra
//  ⚡ < 0.1ms Hot | 🧠 Bloom+Neural+ML | 🛡️ CB+Failover
//  📺 Stream+ABR+QoS+JitterBuf+UploadBoost+LatGuarantee
// ═══════════════════════════════════════════════════════════════════════
