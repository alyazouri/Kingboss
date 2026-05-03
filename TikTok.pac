// ╔══════════════════════════════════════════════════════════════╗
// ║  🔥 TikTok DNS Override PAC - Jordan 2025                  ║
// ║  يمرر مباشرة لكنه يستخدم تقنيات متقدمة                    ║
// ╚══════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    var h = host.toLowerCase();

    // قائمة موسعة جداً
    var tt = [
        "tiktok.com","tiktokv.com","tiktokcdn.com",
        "bytecdn.com","bytego.com","ttlivecdn.com",
        "musical.ly","pstatp.com","snssdk.com",
        "iesdouyin.com","ixigua.com","bytedance.com",
        "tiktok.org","bytedns.com","tiktokcdn-us.com",
        "ttw9.com","tiktok-global.com",
        "ibytedtos.com","tosv.byted.org",
    ];

    for (var i = 0; i < tt.length; i++) {
        if (h === tt[i] || h.indexOf("." + tt[i]) !== -1) {
            // === كل طلبات تيك توك مررها مباشرة ===
            return "DIRECT";
        }
    }

    return "DIRECT";
}
