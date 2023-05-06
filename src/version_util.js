class VersionUtil {
    const
    fs = require('fs');

    // Read the contents of the package.json file
    const
    pkgPath = `${__dirname}/../package.json`;

    // Read the contents of the package.json file
    const
    pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

    // Access the version property
    const
    version = pkg.version;

    static getVersion() {
        return VersionUtil.version;
    }
}

module.exports = VersionUtil;
