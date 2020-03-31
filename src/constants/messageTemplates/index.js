export const callBackData = `callbackData`;
export const scanDevicesName = `scanForDevices`;
export const scanForDevicesBrackets = `{ ${scanDevicesName} }`;
export const space = ` `;
export const mainCallback = `mainCallback`;
export const dotInterface = `.deviceInterface.`;
export const magTekDevice = `MagTekDevice`;
export const deviceNamespace = `window.${magTekDevice}`;

export const feedToFunctionComment = `
/*
    The above callback would be fed to the '${scanDevicesName}' function during initialization.
*/
`;

export const rawCommand = `rawCommand`;
export const commandResp = `commandResp`;
export const readDateCommand = ["0x49", "0x06", "0x00", "0x00", "0x03", "0x0D"];