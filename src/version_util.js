class VersionUtil {
    constructor(version) {
        this.version = version;
    }

    getVersion() {
        return this.version || '0.0.1';
    }
}

module.exports = VersionUtil;
