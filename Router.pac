function FindProxyForURL(url, host) {

    // استثناء الراوتر والشبكة المحلية
    if (isPlainHostName(host) ||
        isInNet(host, "192.168.100.0", "255.255.255.0")) {
        return "DIRECT";
    }

    // البروكسي الأساسي
    return "PROXY 127.0.0.1:8080";
}
