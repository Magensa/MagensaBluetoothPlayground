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

export {
    manageDevicePath,
    compatabilityPath,
    displayItems,
    deviceImages
}