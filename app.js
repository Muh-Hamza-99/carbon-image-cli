const inquirer = require("inquirer");

const getUserInput = async () => {
    const inputs = await inquirer.prompt([
        {
            type: "input",
            name: "syntaxTheme",
            message: "Syntax Theme",
            default: "Duotone",
        },
        {
            type: "input",
            name: "fontFamily",
            message: "Font Family",
            default: "Fantasque Sans Mono",
        },
        {
            type: "input",
            name: "fontSize",
            message: "Font Size",
            validate: async input => {
                if (!input.endsWith("px")) return "Value must end with 'px'";
                return true;
            },
            default: "18px",
        },
        {
            type: "input",
            name: "lineHeight",
            message: "Line Height",
            validate: async input => {
                if (!input.endsWith("%")) return "Value must end with '%'";
                return true;
            },
            default: "133%",
        },
        {
            type: "confirm",
            name: "includeLineNumbers",
            message: "Include Line Numbers?",
            default: false,
        },
        {
            type: "confirm",
            name: "includeWindowControls",
            message: "Include Window Controls?",
            default: true,
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

getUserInput();