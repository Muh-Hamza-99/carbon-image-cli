const fs = require("fs");

const readFile = async file => {
    const code = await fs.promises.readFile(`./${file}`, "utf8");
    return code;
};

module.exports = readFile;