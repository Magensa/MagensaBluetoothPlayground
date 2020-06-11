import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import {
    OperationPanel,
    ColoredCode
} from '../../../../sharedComponents';
import PinEntryCode from './pinEntryCode';
import usePinTipHandler from '../../../../customHooks/usePinTipHandler';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import useOperationFuncs from '../../../../customHooks/useOperationFuncs';


export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const pinTipData = useSelector(state => state.pinTipCashback);
    const catchAndDisplay = useCatchAndDisplay();
    
    const { clearTipPinData } = usePinTipHandler();

    const [
        pinResult, 
        isLoading, 
        setIsLoading, 
        loadingText, 
        setLoadingText, 
        cancelPinEntry,
        setAwaitingPinData,
        setPinResult,
        cleanUp,
        pinIsMounted
    ] = useOperationFuncs("pinData", pinTipData, selectedDevice);

    const requestPin = async() => {
        setPinResult("");
        setLoadingText("Please follow device prompts");
        clearTipPinData("pin");
        setIsLoading(true);

        try {
            await selectedDevice.deviceInterface.clearSession();
            const requestPinResponse = await selectedDevice.deviceInterface.requestPinEntry();
            
            if (requestPinResponse) {
                const stringResp = JSON.stringify(requestPinResponse, null, 4);
                console.log("Request PIN Response: ", requestPinResponse);
                
                setPinResult(prevState => (!prevState) ? 
                    [stringResp] : [stringResp, prevState[1]]
                );
    
                if (requestPinResponse.code === 0 && pinIsMounted) {
                    setAwaitingPinData(true);
                    return;
                }
                else
                    catchAndDisplay(requestPinResponse);
            }

            cleanUp(true);
        }
        catch(err) {
            cleanUp(true);
            catchAndDisplay(err);
        }
    }
    
    const panelProps = {
        providedFunc: requestPin,
        btnText: "requestPin()",
        outputVal: pinResult,
        isLoading: isLoading,
        loadingText: loadingText,
        codeComponent: PinEntryCode,
        cancelText: "Cancel Pin Entry",
        cancelFunc: cancelPinEntry,
        resultFullWidth: true,
        operationTitle: <strong> Request PIN Entry </strong>,
        subHeading: "PinPad devices only"
    }

    return (
        <OperationPanel  {...panelProps} >
            <Typography gutterBottom variant='subtitle1'>
                When <ColoredCode>requestPinEntry</ColoredCode> is called, the device will respond with a status to confirm that it has received the operation request.
                Once the pin entry process is completed - the output from the device will be fed to the callback function that was provided to the <ColoredCode /> function.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                In the example below, you will notice that <ColoredCode>clearSession</ColoredCode> is called prior to <ColoredCode>requestPinEntry.</ColoredCode>
                It is recommended to code this approach. If the device has data in session - the call to <ColoredCode>requestPinEntry</ColoredCode>will be blocked.
            </Typography>
        </OperationPanel>
    );
}
