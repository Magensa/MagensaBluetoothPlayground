//#region InitializationTemplates
export const magensaBt = ` "magensa-bluetooth";

`;

export const initializeDeclaration = ` = (callbackData) => console.log(`;
export const initializeDeclaration1 = `, callbackData);

`;

export const initializeDeclaration2 = ` = `;

export const initializeDeclaration3 = `() => {
    `;

export const initializeDeclaration4 = `{
        `;

export const initializeDeclaration5 = `device = `;

export const initializeDeclaration6 = `scanForDevices(mainCallback);
        `;
        
export const initializeDeclaration7 = `device.deviceInterface.openDevice();`

export const initializeComment = `

        /*
            After user selects device from pair window the 'device' variable contains the interface 
            needed to interact with the device.
            Store this variable wherever makes sense for your application.
            For demonstration purposes, this playground will store device to a global namespace.
        */
           
`

export const initializeSuffix = `           window.MagTekDevice = device || window.MagTekDevice;
    }
    `;
    
export const initializeSuffix1 = `(err) {
        console.error(err);
    }
}`;

export const pairDisclaimer = "When pairing a new device using this function, the chosen device will replace the current device in the window.MagTekDevice namespace."
//#endregion