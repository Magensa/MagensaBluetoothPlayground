import { displayItems } from './browserInfo';
//#region routeNames
const manageDevicePath = "/manage-devices";
const compatabilityPath = "/compatibility-info";
//#endregion

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

export const startTransactionOptions = {
    reportVerbosity: "verbose",
    cardType: "all",
    timeout: 30,
    currencyCode: "dollar",
    authorizedAmount: 1000,
    transactionType: "purchase"
};

export {
    manageDevicePath,
    compatabilityPath,
    displayItems,
    deviceImages,
    emvKeys
}