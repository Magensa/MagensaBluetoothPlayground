import React from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import usePanelBase from '../../../../customHooks/usePanelBase';
import DisplayMsgCode from './displayMsgCode';


export default ({ selectedDevice }) => {
    const [ 
        displayResult, 
        setDisplayResult,
        isLoading, 
        setIsLoading,
        setDisplayIsMounted
    ] = usePanelBase();
    const catchAndDisplay = useCatchAndDisplay();

    const setDisplayMessage = async() => {
        setDisplayResult("");
        setIsLoading(true);

        try {
            const displayResp = await selectedDevice.deviceInterface.setDisplayMessage({ messageId: 0x01 });
            console.log(displayResp);
            if (displayResp) {
                const resp = JSON.stringify(displayResp, null, 4);

                if (setDisplayIsMounted) {
                    setDisplayResult(resp);
                    setIsLoading(false);
                    return;
                }
            }
        }
        catch(err) {
            catchAndDisplay(err);
        }

        if (setDisplayIsMounted) { 
            setDisplayResult("");
            setIsLoading(false);
        }
    }

    const cancelSetDisplay = _ => {
        setDisplayResult("");
        setIsLoading(false);
    }

    const operationPanelProps = ({
        providedFunc: setDisplayMessage,
        outputVal: displayResult,
        isLoading: isLoading,
        codeComponent: DisplayMsgCode,
        btnText: "setDisplay()",
        loadingText: "Displaying Chosen Message",
        operationTitle: "Set Display Message",
        cancelText: "Cancel",
        cancelFunc: cancelSetDisplay,
        subHeading: "PinPad Devices Only"
    });                                                                          

    return (
        <OperationPanel  { ...operationPanelProps } >

            <Typography variant='subtitle1' paragraph>
                Below is an example implementation of how to display a specific message on your paired PinPad device.
            </Typography>
            
            <Typography variant='subtitle2' color="textSecondary">
                You will notice the configuration object fed as a parameter. <ColoredCode>messageId</ColoredCode>is required (denoting which display message to display), 
                while <ColoredCode>displayTime</ColoredCode>is optional, and defaults to 15 seconds - if not supplied.
            </Typography>

        </OperationPanel>
    );
}
