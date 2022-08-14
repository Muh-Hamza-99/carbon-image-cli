let BASE_URL = "https://carbon.now.sh?";

const constructURL = inputs => {
    for (let inputArray of Object.entries(inputs)) if (inputArray[0] !== "exportAsFiletype") BASE_URL += `${inputArray[0]}=${inputArray[1]}&`;
    return encodeURI(BASE_URL.slice(0, -1));
};

module.exports = constructURL;