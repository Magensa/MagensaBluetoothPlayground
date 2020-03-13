import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import OpenDeviceCode from './openDeviceCode';

let openDeviceIsMounted = true;

export default ({ selectedDevice }) => {
    const [ openResp, setOpenResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const catchAndDisplay = useCatchAndDisplay();

    const openDevice = async() => {
        setOpenResp("");
        setIsLoading(true);

        try {
            const openDeviceResp = await selectedDevice.deviceInterface.openDevice();
            console.log(openResp);

            if (openDeviceIsMounted) {
                setOpenResp(
                    JSON.stringify(openDeviceResp, null, 4)
                )
                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        openDeviceIsMounted = true;
        return () => (openDeviceIsMounted = false);
    }, []);

    return (
        <OperationPanel 
            providedFunc={ openDevice } 
            btnText="openDevice();" 
            outputVal={ openResp } 
            isLoading={ isLoading } 
            loadingText="Opening Device..."
            codeComponent={ OpenDeviceCode }
            operationTitle="Open Device"
        >
            <Typography gutterBottom variant='subtitle1'>
                Below is an example implementation of how to open your paired device.  There are no configuration options for this function.
                There are three possible outcomes when calling this function:
                {`  1. Success (success object returned)
                `}
                {`  2. Handled Exception (status object returned detailing the failure encountered).
                `}
                {`  3. Unhandled Exception (Failure upstream from the library that threw an exception, and is rethrown to the caller).`} 
            </Typography>
        </OperationPanel>
    );
}