import React, { useState, useEffect } from 'react';
import { scanForDevices } from 'magensa-bluetooth';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import InitializationDisplay from './initializationDisplay';
import { deviceInterfaceReplacer } from '../../../../../utils/helperFunctions';


let initialIsMounted = true;

export default _ => {
    const [ result, setResult ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const catchAndDisplay = useCatchAndDisplay();
    const mainCallback = callbackData => console.log("Callback Data: ", callbackData);
    
    const pairDevice = async() => {
        setResult("");
        setIsLoading(true);

        try {
            const device = await scanForDevices(mainCallback);
                
            await device.deviceInterface.openDevice();
            
            console.log("Selected Device: ", device);

            if (initialIsMounted) {
                setResult(
                    JSON.stringify(device, deviceInterfaceReplacer, 4)
                );
    
                window.MagTekDevice = (device || window.MagTekDevice);
            }
        }
        catch(err) {
            catchAndDisplay(err);
        }

        if (initialIsMounted)
            setIsLoading(false);
    }

    useEffect(() => {
        initialIsMounted = true;
        return () => initialIsMounted = false;
    }, []);

    return (
        <InitializationDisplay 
            pairDevice={ pairDevice } 
            isLoading={ isLoading } 
            outputResult={ result } 
        />
    );
}