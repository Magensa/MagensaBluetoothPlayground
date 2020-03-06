import { loadToastInfo } from '../../redux/actions';

const catchAndDisplay = dispatcher => err => {
    console.error(err);
    
    if (err.code !== 8 || err.name !== "NotFoundError" || !err.message.includes("requestDevice()"))
        dispatcher(
            loadToastInfo({
                toastType: "error",
                toastMsg: err.message
            })
        )
}

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

export {
    catchAndDisplay,
    capitalizeFirstLetter,
    deviceInterfaceReplacer
}