import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import ClearSessionCode from './clearSessionCode';
import PanelList from '../panelList';

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
        loadingText: "Clearing Session...",
        operationTitle:"Clear Session",
        cancelText: "Cancel",
        cancelFunc: cancelClearSession
    });

    return (
        <OperationPanel  { ...operationPanelProps } >

             <Typography variant='subtitle1' paragraph>
                Use this command to clear your paired device's session (volatile memory). Please keep in mind that only PinPad devices retain a volatile memory 
                session (usually most recent card data, or PIN data).
            </Typography>

            <Typography variant='subtitle2' color="textSecondary">
                Below is an example implementation of how to clear your paried device's session. When this command is executed on a device that does not have session (SCRA devices) - it will immediately return
                a Promise that resolves as <ColoredCode>`undefined`.</ColoredCode> When this command is executed on a PinPad device, there are two possible outcomes:
            </Typography>

            <PanelList noHandled />

        </OperationPanel>
    );
}