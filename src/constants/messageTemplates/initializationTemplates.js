//#region InitializationTemplates
import { callBackData, scanDevicesName, space, mainCallback, dotInterface, deviceNamespace } from './index';
export { callBackData, scanDevicesName, space, mainCallback, deviceNamespace };
export const magensaBt = `"magensa-bluetooth"`;
export const device = `device`;
export const deviceInterface = `${device}${dotInterface}`;
export const initializeComment = `
        /*
            After user selects ${device} from pair window the '${device}' variable contains the interface 
            needed to interact with the ${device}.
            Store this variable wherever makes sense for your application.
            For demonstration purposes, this playground will store ${device} to a global namespace.
        */
`
export const assingNamespace = `${device} || ${deviceNamespace}`;
export const pairDisclaimer = `When pairing a new ${device} using this function, the chosen ${device} will replace the current ${device} in the ${deviceNamespace} namespace.`
//#endregion