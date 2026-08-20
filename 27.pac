// ============================================================================
//  PUBG Mobile - Jordan Gaming PAC  (iOS / iPad Edition)
//  Author : ALYAZOURI (saeedalyazouri0 / saeedjor11)
//  PUBG ID: 5744469523
//  Version: 2026.6 - iOS-optimized for iPad Pro on Wi-Fi
//
//  THE iOS TRUTH (honest - read once):
//    * iOS PAC / system proxy routes TCP connections ONLY.
//    * PUBG in-match traffic is UDP + raw sockets -> a PAC CANNOT route it.
//    * What this PAC CAN route on iPad = PUBG's TCP parts:
//        login, account, auth/API calls, store, updates, lobby HTTP.
//      -> routing THOSE through your Jordan proxy makes PUBG's region
//         detection see a Jordan IP (helps regional matchmaking + lobby).
//    * To route the actual UDP gameplay through the Jordan exit you need a
//      tunnel app (WireGuard / Shadowrocket / Stash / Quantumult X), not PAC.
//
//  BEST iOS SETUP (recommended):
//    Shadowrocket / Stash / Quantumult X :
//      1) add server 94.127.211.6:10010 (type: SS / Trojan / V2Ray / HTTP)
//      2) enable UDP relay so gameplay UDP also uses the tunnel
//      3) load this PAC as routing rules -> game traffic goes via the
//         Jordan exit, everything else stays DIRECT
//
//  NATIVE iOS PAC (no third-party app) only works if 94.127.211.6:10010 is
//  a real HTTP or SOCKS5 proxy. Setup:
//    Settings -> Wi-Fi -> (i) -> Configure Proxy -> Automatic -> PAC URL
//
//  PROXY (verified): 94.127.211.6:10010 - Amman, Jordan, AS9038 Batelco/Orbit
//
//  CONFIG - edit ONLY these two lines:
//    TCP_ROUTE     = "PROXY 94.127.211.6:10010"  (Jordan exit)
//    DEFAULT_ROUTE = "DIRECT"
// ============================================================================

// ------------------------- CONFIG -------------------------------------------
var TCP_ROUTE     = "PROXY 94.127.211.6:10010";   // PUBG TCP parts -> Jordan
var DEFAULT_ROUTE = "DIRECT";                      // everything else
// ----------------------------------------------------------------------------

function isDomain(host, domain) {
    return host === domain || dnsDomainIs(host, "." + domain);
}
function isIpLiteral(host) {
    return /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
}

function FindProxyForURL(url, host) {
    host = host.toLowerCase();
    if (isPlainHostName(host))                       return "DIRECT";
    if (dnsDomainIs(host, ".local"))                 return "DIRECT";
    if (dnsDomainIs(host, ".lan"))                   return "DIRECT";
    if (isIpLiteral(host)) {
        if (isInNet(host, "10.0.0.0",    "255.0.0.0"))   return "DIRECT";
        if (isInNet(host, "127.0.0.0",   "255.0.0.0"))   return "DIRECT";
        if (isInNet(host, "172.16.0.0",  "255.240.0.0")) return "DIRECT";
        if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
        if (isInNet(host, "169.254.0.0", "255.255.0.0")) return "DIRECT";
        if (isInNet(host, "100.64.0.0",  "255.192.0.0")) return "DIRECT";
    }

    if (isDomain(host, "pubgmobile.com"))            return TCP_ROUTE;
    if (isDomain(host, "pubg.com"))                  return TCP_ROUTE;
    if (isDomain(host, "battlegrounds.com"))         return TCP_ROUTE;
    if (isDomain(host, "playbattlegrounds.com"))     return TCP_ROUTE;
    if (isDomain(host, "tencentcs.com"))             return TCP_ROUTE;
    if (isDomain(host, "tencent.com"))               return TCP_ROUTE;
    if (isDomain(host, "myqcloud.com"))              return TCP_ROUTE;
    if (isDomain(host, "qcloud.com"))                return TCP_ROUTE;
    if (isDomain(host, "gtimg.com"))                 return TCP_ROUTE;
    if (isDomain(host, "qq.com"))                    return TCP_ROUTE;
    if (isDomain(host, "igamecj.com"))               return TCP_ROUTE;
    if (isDomain(host, "trtc.qcloud.com"))           return TCP_ROUTE;
    if (isDomain(host, "agora.io"))                  return TCP_ROUTE;
    if (isDomain(host, "sd-rtn.com"))                return TCP_ROUTE;
    if (isDomain(host, "krafton.com"))               return TCP_ROUTE;
    if (isDomain(host, "bluehole.net"))              return TCP_ROUTE;
    if (isDomain(host, "battleye.com"))              return TCP_ROUTE;
    if (isDomain(host, "nprotect.com"))              return TCP_ROUTE;
    if (isDomain(host, "wellbia.com"))               return TCP_ROUTE;

    if (isIpLiteral(host)) {
    // Jordan (JO) - official RIPE ranges, lowest local ping
    if (isInNet(host, "2.59.52.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "5.45.128.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "5.198.240.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "5.199.184.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "37.17.192.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "37.44.32.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "37.75.144.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "37.123.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "37.152.0.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "37.202.64.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "37.220.112.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "37.252.222.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "45.142.196.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "46.23.112.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "46.32.96.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "46.185.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "46.248.192.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "62.72.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "77.245.0.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "79.134.128.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "79.173.192.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "80.90.160.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "81.21.0.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "81.28.112.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "82.212.64.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "84.18.32.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "84.18.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "84.252.106.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "85.159.216.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "86.108.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "87.236.232.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "87.238.128.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "89.20.49.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "89.28.216.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "89.38.152.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "91.106.96.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "91.132.100.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.186.224.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "91.209.248.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.212.0.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.220.195.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.223.202.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "92.241.32.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "92.253.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "93.93.144.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "93.95.200.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "93.115.2.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "93.115.15.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "93.191.176.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "94.127.208.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "94.142.32.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "94.249.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "95.141.208.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "95.172.192.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "109.107.224.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "109.237.192.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "141.0.0.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "141.98.64.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "141.105.56.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "146.19.239.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "146.19.246.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "149.200.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "176.28.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "176.29.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "176.57.0.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "176.57.48.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "176.118.39.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "176.241.64.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "178.20.184.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "178.77.128.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "178.238.176.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "185.10.216.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.12.244.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.14.132.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.19.112.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.24.128.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.30.248.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.33.28.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.40.19.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.43.146.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.51.212.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.57.120.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.68.54.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.80.24.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.80.104.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.98.220.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.98.224.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.109.120.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.109.192.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.135.200.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.139.220.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.159.180.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.160.236.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.163.205.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.173.56.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.175.248.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.176.44.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.180.80.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.182.136.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.193.176.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.197.176.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.200.128.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.234.111.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.241.62.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.253.112.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "188.123.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "188.247.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "193.17.53.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.108.134.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.111.29.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.188.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "193.189.148.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.203.24.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.203.110.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "194.104.95.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "194.110.236.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "194.165.128.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "195.18.9.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.20.216.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "212.34.0.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "212.35.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "212.118.0.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "213.139.32.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "213.186.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "217.23.32.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "217.29.240.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "217.144.0.0", "255.255.240.0")) return "DIRECT";

    // Kuwait (KW) - official RIPE ranges, lowest local ping
    if (isInNet(host, "5.182.132.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "31.203.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "31.214.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "31.217.224.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "37.34.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "37.36.0.0", "255.252.0.0")) return "DIRECT";
    if (isInNet(host, "37.231.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "45.15.228.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "45.66.0.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "45.130.36.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "45.158.96.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "46.186.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "62.150.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "62.215.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "78.41.138.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "78.89.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "78.154.192.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "78.159.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "80.184.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "83.68.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "83.96.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "84.246.72.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "85.239.0.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "87.236.120.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "89.203.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "89.251.80.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "91.102.32.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "91.102.144.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "91.102.232.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "91.140.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "91.194.102.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "91.194.130.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "91.198.134.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.208.203.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.209.172.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.214.152.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "91.216.188.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.221.128.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "91.221.220.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "91.230.213.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "91.246.14.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "93.191.64.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "94.29.128.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "94.128.0.0", "255.254.0.0")) return "DIRECT";
    if (isInNet(host, "94.187.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "94.187.192.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "95.66.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "109.71.188.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "139.141.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "149.147.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "158.94.180.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "161.252.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "168.187.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "171.25.224.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "176.98.36.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "176.110.119.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "178.53.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "178.61.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "178.161.0.0", "255.255.128.0")) return "DIRECT";
    if (isInNet(host, "178.249.176.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "185.1.129.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.9.196.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.16.4.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.19.76.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.33.124.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.36.176.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.41.216.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.46.144.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.48.188.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.62.230.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.64.200.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.75.56.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.95.4.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.96.228.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.132.204.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.133.168.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.142.104.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.146.240.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.147.28.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.150.216.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.170.116.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.173.40.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.187.176.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.192.236.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.206.96.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.211.104.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "185.230.100.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "185.249.158.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "188.70.0.0", "255.254.0.0")) return "DIRECT";
    if (isInNet(host, "188.236.0.0", "255.255.0.0")) return "DIRECT";
    if (isInNet(host, "193.22.172.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.32.228.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "193.33.224.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.42.223.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.56.9.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.105.56.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.107.14.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.108.30.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.108.142.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.109.215.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "193.169.130.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.188.48.0", "255.255.240.0")) return "DIRECT";
    if (isInNet(host, "193.188.142.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.188.144.0", "255.255.248.0")) return "DIRECT";
    if (isInNet(host, "193.188.152.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "193.188.160.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "193.200.40.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "194.31.57.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "194.54.136.0", "255.255.252.0")) return "DIRECT";
    if (isInNet(host, "194.54.192.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "194.126.32.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "194.176.108.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "194.233.51.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.14.110.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "195.39.128.0", "255.255.192.0")) return "DIRECT";
    if (isInNet(host, "195.78.74.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "195.80.227.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.88.222.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "195.114.31.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.137.174.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.137.190.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.226.224.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "195.238.252.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "195.254.170.0", "255.255.254.0")) return "DIRECT";
    if (isInNet(host, "196.1.69.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "196.1.70.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "212.6.37.0", "255.255.255.0")) return "DIRECT";
    if (isInNet(host, "212.43.0.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "213.34.192.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "213.132.224.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "213.189.64.0", "255.255.224.0")) return "DIRECT";
    if (isInNet(host, "217.69.176.0", "255.255.240.0")) return "DIRECT";
    }

    // BLOCK 4 - app stores / CDN -> DIRECT (fastest downloads, no proxy hop)
    if (isDomain(host, "gstatic.com"))               return "DIRECT";
    if (isDomain(host, "googleapis.com"))            return "DIRECT";
    if (isDomain(host, "googleusercontent.com"))     return "DIRECT";
    if (isDomain(host, "apple.com"))                 return "DIRECT";
    if (isDomain(host, "mzstatic.com"))              return "DIRECT";
    if (isDomain(host, "cloudflare.com"))            return "DIRECT";
    if (isDomain(host, "cloudflare.net"))            return "DIRECT";

    // BLOCK 5 - default
    return DEFAULT_ROUTE;
}
