function FindProxyForURL(url, host) {

    // فتح الراوتر مباشرة بدون بروكسي
    if (host == "192.168.100.1" ||
        isInNet(host, "192.168.100.0", "255.255.255.0")) {
        return "DIRECT";
    }

    // باقي الاتصال بدون بروكسي
    return "DIRECT";
}
