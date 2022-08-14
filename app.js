const chalk = require("chalk");

const getUserInput = require("./utilities/get-user-input");
const constructURL = require("./utilities/construct-url");
const readFile = require("./utilities/read-file");

const fileExists = require("./utilities/file-exists");

const file = process.argv[2];
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
    console.log(code);
    const URL = constructURL(inputs);
    console.log(URL);
};

main();