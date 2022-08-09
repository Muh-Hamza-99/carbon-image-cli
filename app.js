const inquirer = require("inquirer");

const chalk = require("chalk");

const fileExists = require("./utilities/file-exists");

const THEMES = require("./lib/themes");
const FONTS = require("./lib/fonts");

const getUserInput = async () => {
    const inputs = await inquirer.prompt([
        {
            type: "list",
            name: "t",
            message: "Syntax Theme",
            choices: Object.entries(THEMES).map(theme => theme[0]),
            default: "Duotone",
        },
        {
            type: "input",
            name: "bg",
            message: "Background Color",
            validate: async input => {
                if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input)) return "Color must be a valid hexadecimal code.";
                return true;
            },
            default: "#333333",
        },
        {
            type: "list",
            name: "fm",
            choices: Object.entries(FONTS).map(theme => theme[0]),
            message: "Font Family",
            default: "Fantasque Sans Mono",
        },
        {
            type: "input",
            name: "fs",
            message: "Font Size",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "18px",
        },
        {
            type: "input",
            name: "lh",
            message: "Line Height",
            validate: async input => {
                if (!input.endsWith("%")) return "Value must end with '%'";
                return true;
            },
            default: "133%",
        },
        {
            type: "input",
            name: "pv",
            message: "Vertical Padding?",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "50px"
        },
        {
            type: "input",
            name: "ph",
            message: "Horizontal Padding?",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "60px"
        },
        {
            type: "confirm",
            name: "ln",
            message: "Include Line Numbers?",
            default: false,
        },
        {
            type: "confirm",
            name: "wc",
            message: "Include Window Controls?",
            default: true,
        },
        {
            type: "list",
            name: "wt",
            message: "Window Theme?",
            choices: ["none", "sharp", "boxy", "bw"],
            default: "none",
            when: answers => answers.wc
        },
        {
            type: "confirm",
            name: "ds",
            message: "Include Drop Shadow?",
            default: false
        },
        {
            type: "input",
            name: "dsyoff",
            message: "Drop Shadow Y-Offset?",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "20px",
            when: answers => answers.ds
        },
        {
            type: "input",
            name: "dsblur",
            message: "Drop Shadow Blur",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "68px",
            when: answers => answers.ds
        },
        {
            type: "list",
            name: "exportAsFiletype",
            message: "Export As",
            choices: ["svg", "png"],
            default: "png",
        },
    ]);
    console.log(inputs);
};

const file = process.argv[2];
if (!file) {
    console.log(chalk.red("No file specified!"));
    process.exit(1);
};

if (!fileExists(file)) {
    console.log(chalk.red(`File ${file} does not exist.`));
    process.exit(1);
};

getUserInput();