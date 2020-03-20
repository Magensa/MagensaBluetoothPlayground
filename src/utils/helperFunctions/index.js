const capitalizeFirstLetter = str => 
    str.charAt(0).toUpperCase() + str.slice(1);

const deviceInterfaceRender = {
    openDevice: "ƒ",
    startTransaction: "ƒ",
    cancelTransaction: "ƒ",
    sendCommand: "ƒ",
    clearSession: "ƒ",
    closeDevice: "ƒ",
    deviceInfo: "ƒ",
    requestCardSwipe: "ƒ",
    isDeviceOpen: "ƒ",
};

const deviceInterfaceReplacer = (key, val) => 
    (key !== 'deviceInterface') ? val : deviceInterfaceRender;

const convertArrayToHexString = array =>
    Array.from(array, byte =>
        ('0' + (byte & 0xFF).toString(16)).slice(-2)
    ).join('').toUpperCase();

const hexStrToArray = hexStr => {
    let returnArr = [];

    for (let current = 0; current < hexStr.length; current += 2)
        returnArr.push( 
            parseInt( hexStr.substr(current, 2), 16 )
        );

    return returnArr;
}

const generateRandomKey = (name) => 
    name + Math.round((Math.random()*100000)).toString()


export {
    capitalizeFirstLetter,
    deviceInterfaceReplacer,
    convertArrayToHexString,
    hexStrToArray,
    generateRandomKey
}