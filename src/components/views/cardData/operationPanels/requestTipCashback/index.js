import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import {
    OperationPanel,
    ColoredCode,
    LinkToApi
} from '../../../../sharedComponents';
import TipCashbackCode from './tipCashbackCode';
import usePinTipHandler from '../../../../customHooks/usePinTipHandler';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import useOperationFuncs from '../../../../customHooks/useOperationFuncs';


export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const pinTipData = useSelector(state => state.pinTipCashback);
    const catchAndDisplay = useCatchAndDisplay();

    const [
        tipCashbackResult, 
        isLoading, 
        setIsLoading, 
        loadingText, 
        setLoadingText, 
        cancelOperation,
        setAwaitingData,
        setTipCashbackResult,
        cleanUp,
        tipCashbackIsMounted
    ] = useOperationFuncs("tipCashbackReport", pinTipData, selectedDevice);
    
    const { clearTipPinData } = usePinTipHandler();

    const requestTipCashback = async() => {
        setTipCashbackResult("");
        setLoadingText("Please follow device prompts");
        clearTipPinData();
        setIsLoading(true);

        const tipOptions = {
            commandType: 'tip',
            transactionAmount: 12420,
            calculatedTaxAmount: 1242,
            taxRate: 10,
            tipSelectionMode: 'percent',
            leftAmount: 10,
            middleAmount: 15,
            rightAmount: 20
        }

        try {
            await selectedDevice.deviceInterface.clearSession();
            const tipCashbackResp = await selectedDevice.deviceInterface.requestTipOrCashback(tipOptions);
            const stringResp = JSON.stringify(tipCashbackResp, null, 4);
            console.log("Request Tip Response: ", tipCashbackResp);
            
            setTipCashbackResult(prevState => (!prevState) ? 
                [stringResp] : [stringResp, prevState[1]]
            );

            if (tipCashbackResp.code === 0 && tipCashbackIsMounted) {
                setAwaitingData(true);
            }
            else {
                cleanUp(true);
                catchAndDisplay(tipCashbackResp);
            }
        }
        catch(err) {
            cleanUp(true);
            catchAndDisplay(err);
        }
    }
    
    const panelProps = {
        providedFunc: requestTipCashback,
        btnText: "requestTipCashback()",
        outputVal: tipCashbackResult,
        isLoading: isLoading,
        loadingText: loadingText,
        codeComponent: TipCashbackCode,
        cancelText: "Cancel Tip / Cashback",
        cancelFunc: cancelOperation,
        resultFullWidth: true,
        operationTitle: <strong> Request Tip or Cashback </strong>,
        subHeading: "DynaPro Go only"
    }

    return (
        <OperationPanel  {...panelProps} >
            <Typography gutterBottom variant='subtitle1'>
                When <ColoredCode>requestTipOrCashback</ColoredCode>is called, the device will respond with a status to confirm that it has received the operation request.
                Once the tip/cashback entry process is completed - the output from the device will be fed to the callback function that was provided to the <ColoredCode /> function.
                The <ColoredCode>tipCashbackReport</ColoredCode>is relatively unparsed, with Array representations of the device's response. These Arrays can be fed directly into the <ColoredCode>emvOptions</ColoredCode>object for the <ColoredCode>startTransaction</ColoredCode>function.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                In the example below, you will notice that <ColoredCode>clearSession</ColoredCode>is called prior to <ColoredCode>requestTipOrCashback.</ColoredCode>
                It is recommended to code this approach. If the device has data in session - the call to <ColoredCode>requestTipOrCashback</ColoredCode>will be blocked.  
                Additionally, you will notice the configuration object that is fed to the function. There are some required fields (based upon the commandType), that must be fed to the <ColoredCode>requestTipOrCashback</ColoredCode>function, in order to be successful.
            </Typography>
            <LinkToApi sublink="Tip-Cashback-Options-Object"/>
        </OperationPanel>
    );
}