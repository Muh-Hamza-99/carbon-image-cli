const LANGUAGES = require("../lib/languages");

const getLanguage = extension => {
    const languageArray = LANGUAGES.filter(array => array[0] === extension);
    return languageArray[0][1];
};

module.exports = getLanguage;