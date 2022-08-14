const chalk = require("chalk");

const getUserInput = require("./utilities/get-user-input");
const constructURL = require("./utilities/construct-url");
const getLanguage = require("./utilities/get-language");
const readFile = require("./utilities/read-file");
const hexToRGBA = require("./utilities/hex-to-rgba");

const fileExists = require("./utilities/file-exists");

const file = process.argv[2];
const extension = file.split(".")[1];

if (!file) {
    console.log(chalk.red("No file specified!"));
    process.exit(1);
};

if (!fileExists(file)) {
    console.log(chalk.red(`File ${file} does not exist.`));
    process.exit(1);
};

const main = async () => {
    const inputs = await getUserInput();
    const code = await readFile(file);
    const language = getLanguage(extension);
    const URL = constructURL({ ...inputs, bg: hexToRGBA(inputs.bg), l: language, code });
    console.log(URL);
};

main();