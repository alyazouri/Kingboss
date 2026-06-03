/* =========================================================
   🏆 JORDAN ULTRA FORTRESS v14.0 – FIXED FOR TINDER
   🇯🇴 Tinder: Route via Jordan (No Block) | PUBG: Jordan Lock
   🛡️ Anti-Israel | Zero Direct | No Hang/Stuck
   ========================================================= */

var P1    = "PROXY 37.220.120.111:20001";
var P2    = "PROXY 46.185.131.218:20001";
var P3    = "PROXY 109.237.195.25:20001";
var BLOCK = "PROXY 0.0.0.0:0";

var C1 = P1 + "; " + P2 + "; " + P3;
var C2 = P2 + "; " + P1 + "; " + P3;

function hash(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
  }
  return h;
}

var _dns = {}, _dnsT = {};
function getIP(host) {
  var now = Date.now();
  if (_dns[host] && (now - _dnsT[host] < 120000)) return _dns[host];
  var ip = dnsResolve(host);
  if (ip) { _dns[host] = ip; _dnsT[host] = now; }
  return ip;
}

/* Israel Block */
function isIsraelIP(ip) {
  return isInNet(ip,"5.28.0.0","255.252.0.0") || isInNet(ip,"31.44.128.0","255.255.128.0") ||
         isInNet(ip,"46.116.0.0","255.252.0.0") || isInNet(ip,"62.0.0.0","255.192.0.0") ||
         isInNet(ip,"79.176.0.0","255.240.0.0") || isInNet(ip,"80.178.0.0","255.254.0.0") ||
         isInNet(ip,"81.218.0.0","255.255.0.0") || isInNet(ip,"82.80.0.0","255.240.0.0") ||
         isInNet(ip,"84.94.0.0","255.254.0.0") || isInNet(ip,"85.64.0.0","255.252.0.0") ||
         isInNet(ip,"87.68.0.0","255.252.0.0") || isInNet(ip,"89.138.0.0","255.254.0.0") ||
         isInNet(ip,"93.172.0.0","255.252.0.0") || isInNet(ip,"94.159.0.0","255.255.0.0") ||
         isInNet(ip,"95.35.0.0","255.255.0.0") || isInNet(ip,"109.64.0.0","255.240.0.0") ||
         isInNet(ip,"147.234.0.0","255.254.0.0") || isInNet(ip,"176.12.128.0","255.255.128.0") ||
         isInNet(ip,"185.175.144.0","255.255.240.0") || isInNet(ip,"192.114.0.0","255.255.0.0") ||
         isInNet(ip,"212.143.0.0","255.255.0.0") || isInNet(ip,"213.8.0.0","255.255.0.0");
}

/* Syria Block */
function isSyriaIP(ip) {
  return isInNet(ip,"31.9.0.0","255.255.0.0") || isInNet(ip,"91.144.0.0","255.252.0.0") ||
         isInNet(ip,"5.36.0.0","255.252.0.0");
}

/* PUBG Foreign Block (للعبة فقط) */
function isForeignGame(ip) {
  return isInNet(ip,"52.0.0.0","255.0.0.0") || isInNet(ip,"54.0.0.0","255.0.0.0") ||
         isInNet(ip,"18.192.0.0","255.240.0.0") || isInNet(ip,"13.212.0.0","255.255.0.0");
}

/* Tinder Detection */
function isTinder(h, u) {
  h = h.toLowerCase(); u = u.toLowerCase();
  var domains = ["tinder","gotinder","tndr"];
  for (var i=0; i<domains.length; i++) if (h.indexOf(domains[i]) !== -1) return true;
  return (u.indexOf("tinder") !== -1);
}

/* PUBG Detection */
function isPUBG(h, u) {
  h = h.toLowerCase(); u = u.toLowerCase();
  var domains = ["pubg","krafton","tencent","proximabeta","qcloud"];
  for (var i=0; i<domains.length; i++) if (h.indexOf(domains[i]) !== -1) return true;
  var ports = /:(7889|801[123]|8443|10012|17500|2[0-9]{4})/;
  return ports.test(u);
}

/* Junk Filter (يستثني Tinder) */
function isJunk(h) {
  h = h.toLowerCase();
  if (h.indexOf("tinder") !== -1 || h.indexOf("pubg") !== -1) return false;
  var junk = ["doubleclick","googleads","facebook","instagram","tiktok"];
  for (var i=0; i<junk.length; i++) if (h.indexOf(junk[i]) !== -1) return true;
  return false;
}

/* Persistent System */
var _locked = null;
var _lockTime = 0;
var _fp = hash("fix_v14_" + Date.now());

function getProxy(isGame) {
  var now = Date.now();
  if (_locked && (now - _lockTime < 2700000)) {
    if (!isGame && (hash(_fp) % 100) < 90) return _locked;
    if (isGame) return _locked;
  }
  _locked = C1; // دائماً P1 الأردني
  _lockTime = now;
  return C1;
}

/* Main */
function FindProxyForURL(url, host) {
  var h = host.toLowerCase();
  var u = url.toLowerCase();

  /* System */
  if (isPlainHostName(h) || h.indexOf("127.") === 0 || 
      h.indexOf("192.168.") === 0 || h.indexOf("10.") === 0) return P1;

  /* Junk */
  if (isJunk(h)) return BLOCK;

  /* Domain Blocks */
  if (shExpMatch(h, "*.il")) return BLOCK;
  if (shExpMatch(h, "*.sy")) return BLOCK;

  /* DNS */
  var ip = getIP(h);
  
  /* IP Blocks */
  if (ip) {
    if (isIsraelIP(ip)) return BLOCK;
    if (isSyriaIP(ip)) return BLOCK;
  }

  /* 💘 TINDER: Route via Jordan ONLY (No Foreign Block) */
  /* المهم: نمرره عبر P1 الأردني ليظن إنه في الأردن */
  if (isTinder(h, u)) {
    return getProxy(false); // يستخدم P1 دائماً
  }

  /* 🎮 PUBG: Jordan Region Lock */
  if (isPUBG(h, u)) {
    if (ip && isForeignGame(ip)) return BLOCK; // حظر سيرفرات اللعبة الأجنبية
    return getProxy(true);
  }

  /* Other */
  return getProxy(false);
}
