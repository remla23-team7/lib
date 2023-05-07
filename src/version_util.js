class VersionUtil {
    static getVersion() {
         // Use the version from process.env or fallback to "0.0.1"
        return process.env.VERSION || "0.0.1";
    }
}

module.exports = VersionUtil;
