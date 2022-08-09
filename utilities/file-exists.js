const fs = require("fs");

const fileExists = file => {
    if (fs.existsSync(file)) return true;
    return false;
};

module.exports = fileExists;