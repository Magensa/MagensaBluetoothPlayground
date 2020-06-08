import { displayItems } from './browserInfo';

//#region routeNames
const compatabilityPath = "/compatibility-info";
const sendCommandsPath = "/send-commands";
const additionalOps = "/additional-operations";
//#endregion

const githubLink = "https://github.com/Magensa/magensa-bluetooth";
const readDateTimeCmdLink = "https://www.magtek.com/content/documentationfiles/d998200226.pdf#page=121";

const deviceImages = [
    {
        deviceName: "eDynamo",
        imgPath: "./images/edynamo_profile.jpg",
        prefix: "eDynamo"
    },
    {
        deviceName: "tDynamo",
        imgPath: "./images/tdynamo_profile.jpg",
        prefix: "tDynamo"
    },
    {
        deviceName: "DynaPro Mini",
        imgPath: "./images/DynaProMini_profile.jpg",
        prefix: "DPMini"
    },
    {
        deviceName: "DynaPro Go",
        imgPath: "./images/dynapro-go.jpg",
        prefix: "DPG"
    }
]

const emvKeys = [
    "arqcData",
    "arqcDataParsed",
    "batchData",
    "batchDataParsed"
];

const operationsText = [
    {
        id: 101,
        text: "Send Raw Commands",
        linkPath: sendCommandsPath
    },
    {
        id: 102,
        text: "Device Operations",
        linkPath: "/"
    },
    {
        id: 103,
        text: "Additional Commands",
        linkPath: additionalOps
    }
];

const startTransactionOptions = {
    reportVerbosity: "verbose",
    cardType: "all",
    timeout: 30,
    currencyCode: "dollar",
    authorizedAmount: 1000,
    transactionType: "purchase"
};

const unSuccessfulPair = (function() { 
    const errMsg = "Selected Device did not pair successfully, please try again";
    const notSuccessfulPair = new Error(errMsg);
    notSuccessfulPair.name = "UnsuccessfulPair";
    return notSuccessfulPair;
})();

const notCompatibleBrowser = (function() {
    const errMsg = "Your current browser is not compatible with WebBluetooth. Please see PlayGround Information for compatability details"
    const notCompatibleBrowser = new Error(errMsg);
    notCompatibleBrowser.name = "BrowserNotCompatible"
    return notCompatibleBrowser;
})();

let hexRegex = new RegExp(/^[0-9A-Fa-f]+$/i);

export {
    compatabilityPath,
    displayItems,
    deviceImages,
    emvKeys,
    sendCommandsPath,
    additionalOps,
    startTransactionOptions,
    operationsText,
    unSuccessfulPair,
    githubLink,
    readDateTimeCmdLink,
    hexRegex,
    notCompatibleBrowser
}