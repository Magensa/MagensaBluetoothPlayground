import React, { useState, useEffect } from 'react';
import {
    Typography,
    List,
    ListItem
} from '@material-ui/core';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import ClearSessionCode from './clearSessionCode';

let clearSessionIsMounted = true;


export default ({ selectedDevice }) => {
    const [ clearSessionResp, setClearSessionResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const catchAndDisplay = useCatchAndDisplay();

    const clearSession = async() => {
        setClearSessionResp("");
        setIsLoading(true);

        try {
            const openDeviceResp = await selectedDevice.deviceInterface.clearSession();
            let resp = (openDeviceResp) ? 
                JSON.stringify(openDeviceResp, null, 4) 
                : "Successfully executed 'clearSession' on a SCRA Device";

            console.log(resp);

            if (clearSessionIsMounted) {
                setClearSessionResp(resp);

                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);

            if (clearSessionIsMounted) { 
                setClearSessionResp("");
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        clearSessionIsMounted = true;
        return () => (clearSessionIsMounted = false);
    }, []);

    const cancelClearSession = _ => {
        setIsLoading(false);
        setClearSessionResp("");
    }

    const operationPanelProps = ({
        providedFunc: clearSession,
        outputVal: clearSessionResp,
        isLoading: isLoading,
        codeComponent: ClearSessionCode,
        btnText: "clearSession()",
        loadingText: "Closing Session...",
        operationTitle:"Clear Session",
        cancelText: "Cancel",
        cancelFunc: cancelClearSession
    });

    return (
        <OperationPanel  { ...operationPanelProps } >
            <Typography variant='subtitle1'>
                Below is an example implementation of how to clear your paired device's volatile memory. Please keep in mind that only PinPad devices retain a volatile memory 
                session (usually most recent card data, or PIN data). When this command is executed on a device that does not have session (SCRA devices) - it will immediately return
                a Promise that resolves as <ColoredCode>`undefined`.</ColoredCode> When this command is executed on a PinPad device, there are three possible outcomes:
            </Typography>

            <List dense disablePadding>
                <ListItem>Success (success object returned)</ListItem>
                <ListItem>Handled Exception (status object returned, detailing the failure encountered)</ListItem>
                <ListItem>Unhandled Exception (Failure upstream from the library that threw an exception, and is rethrown to the caller)</ListItem>
            </List>

        </OperationPanel>
    );
}