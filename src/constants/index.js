import { displayItems } from './browserInfo';
//#region routeNames
const compatabilityPath = "/compatibility-info";
const sendCommandsPath = "/send-commands";
const additionalOps = "/additional-operations";
//#endregion

const githubLink = "https://github.com/Magensa";
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
    let notSuccessfulPair = new Error();
    notSuccessfulPair.name = "UnsuccessfulPair";
    notSuccessfulPair.message = "Selected Device did not pair successfully, please try again";
    return notSuccessfulPair;
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
    hexRegex
}