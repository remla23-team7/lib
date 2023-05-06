const fs = require('fs');
const path = require('path');

class VersionUtil {
    // Get the absolute path to the root directory of the project
    static rootDir = path.resolve(__dirname, '../');

    // Read the contents of the package.json file
    static pkg = JSON.parse(fs.readFileSync(path.join(VersionUtil.rootDir, 'package.json'), 'utf-8'));

    // Access the version property
    static getVersion() {
        return VersionUtil.pkg.version;
    }
}

module.exports = VersionUtil;
