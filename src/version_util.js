let VERSION = "0.0.1"; // default version that wil lbe replaced during packing (webpack)

class VersionUtil {
    static getVersion() {
        return VERSION || "0.0.1"; // Default version number
    }
}

module.exports = VersionUtil;
