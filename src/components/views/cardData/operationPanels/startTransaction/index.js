import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import StartTrxCode from './startTrxCode';
import {
    LinkToApi,
    OperationPanel,
    ColoredCode
} from '../../../../sharedComponents';
import useEmvHandler from '../../../../customHooks/useEmvHandler';
import { emvKeys, startTransactionOptions } from '../../../../../constants';
import { clearDisplayMsg as clearMsg } from '../../../../../redux/actions';

let emvIsMounted = true;


export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardData = useSelector(state => state.cardData);
    const catchAndDisplay = useCatchAndDisplay();
    const [ emvResult, setEmvResult ] = useState(() => "");
    const [ loadingDisplay, setLoadingDisplay ] = useState(() => "");
    const [ awaitingEmvData, setAwaitingEmvData ] = useState(() => false);
    const [ isLoading, setIsLoading ] = useState(() => false);
    
    const emvDispatcher = useDispatch();
    const { clearEmvData } = useEmvHandler();

    const clearDisplayMsg = useCallback(_ => emvDispatcher( clearMsg() ), [emvDispatcher]);

    const emvCleanUp = useCallback(() => {
        setIsLoading(false);
        setAwaitingEmvData(false);
        setLoadingDisplay("");
        setEmvResult("");
    }, [setLoadingDisplay, setIsLoading]);

    const requestEmv = async() => {
        setLoadingDisplay("Requesting EMV transaction from device");
        clearEmvData();
        setIsLoading(true);

        try {
            const emvResp = await selectedDevice.deviceInterface.startTransaction(startTransactionOptions);
            console.log('emvResp: ', emvResp);
            setLoadingDisplay("Please follow device prompts");
            const emvJsonResp = JSON.stringify(emvResp, null, 4);
            setEmvResult([emvJsonResp]);

            if (emvResp.code === 0 && emvIsMounted) {
                setAwaitingEmvData(true);
            }
            else {
                emvCleanUp();
                catchAndDisplay(emvJsonResp);
            }
        }
        catch(err) {
            emvCleanUp();
            catchAndDisplay(err);
        }
    }

    useEffect(() => {
        emvIsMounted = true;

        if (awaitingEmvData) {
            let returnObj = {};
            emvKeys.forEach( emvKey => {
                if (emvKey in cardData)
                    returnObj[emvKey] = cardData[emvKey];
            });

            if (Object.keys(returnObj).length && emvIsMounted) {
                setEmvResult(prevState => {
                    prevState[1] = JSON.stringify(returnObj, null, 4);
                    return prevState;
                });

                if (("batchData" in returnObj) && emvIsMounted) {
                    setAwaitingEmvData(false);
                    setIsLoading(false);

                    if (returnObj.hasOwnProperty('batchDataParsed')) {
                        //Find trxStatus tag and manually clear display msg - if timeout is encountered.
                        let trxStatus = returnObj.batchDataParsed.find(({ tag }) => tag === 'DFDF1A');
                        if (trxStatus  && trxStatus.tagValue === "22 Waiting for Card Timeout")
                            clearDisplayMsg()
                    }
                }
            }
        }

        return () => (emvIsMounted = false);
    }, [cardData, awaitingEmvData, clearDisplayMsg]);

    const cancelTrx = async() => {
        await selectedDevice.deviceInterface.cancelTransaction();
        emvCleanUp();
        clearDisplayMsg();
    }

    const operationProps = {
        providedFunc: requestEmv,
        btnText: "requestEmv()",
        outputVal: emvResult,
        isLoading: isLoading,
        loadingText: loadingDisplay,
        codeComponent: StartTrxCode,
        cancelText: "Cancel Transaction",
        cancelFunc: cancelTrx,
        resultFullWidth: true,
        operationTitle: "Start Transaction (EMV)"
    }

    return (
        <OperationPanel { ...operationProps }>
            <Typography gutterBottom variant='subtitle1'>
                When <ColoredCode>startTransaction</ColoredCode> is called, the device will respond with a status to confirm that it has received the operation request.
                Once a card is inserted (or tapped for contactless) - the output from the device will be fed to the callback function that was provided to the <ColoredCode /> function.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                In the example below, the mainCallback function that will be fed to the <ColoredCode /> function is defined. In the mainCallback, a switch/case based on
                object properties is defined. This is to capture and filter the data returned from the device (after a card interaction). Next, a <ColoredCode>displayCallback</ColoredCode>
                property is assigned to the mainCallback. This function will only receive an object with a single property: `displayMessage` which is a string. For PinPad devices, this function will never be called 
                (display messages will appear on the device's screen). However, for devices without a screen - this function will capture the display messages sent from the device 
                (it is EMV standard to display these messages directly to end user without modification). Customizing your callbacks can be done in a variety of ways - this is one example implementation. 
                Next, the transaction configuration is defined as `startTransactionOptions`. Keep in mind this object is optional, and every property will have default values. 
                Whatever object property you supply to this function will override the default value. We then invoke the `startTransaction` function with the configuration that has been defined.
            </Typography>
           <LinkToApi />
        </OperationPanel>
    );
}