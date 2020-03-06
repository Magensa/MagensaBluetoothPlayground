export const callBackData = `callbackData`;
export const scanDevicesName = `scanForDevices`;
export const space = ` `;
export const mainCallback = `mainCallback`;
export const dotInterface = `.deviceInterface.`;
export const magTekDevice = `MagTekDevice`;
export const deviceNamespace = `window.${magTekDevice}`;

export const feedToFunctionComment = `
/*
    This callback would be fed to the 'scanForDevices' function during initialization.
*/
`;

export const emvSwitchCases = [{
    str: "arqcData",
    consoleStr: "ArqcData: "
},
{
    str: "batchData",
    consoleStr: "Batch Data: "
}];

export const emvOptionsObj = [
    {
        keyName: "reportVerbosity",
        val: "verbose"
    },
    {
        keyName: "cardType",
        val: "all"
    },
    {
        keyName: "timeout",
        val: 30
    },
    {
        keyName: "currencyCode",
        val: "dollar"
    },
    {
        keyName: "authorizedAmount",
        val: 1000
    },
    {
        keyName: "transactionType",
        val: "purchase"
    }
];