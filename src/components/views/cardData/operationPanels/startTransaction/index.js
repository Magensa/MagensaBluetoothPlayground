import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import OperationPanel from '../../../../sharedComponents/operationPanel';
import StartTrxCode from './startTrxCode';

import { catchAndDisplay } from '../../../../../utils/helperFunctions';
import useEmvHandler from '../../../../customHooks/useEmvHandler';
import { emvKeys } from '../../../../../constants';

let emvIsMounted = true;

export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardData = useSelector(state => state.cardData);

    const [ emvResult, setEmvResult ] = useState(() => "");
    const [ awaitingEmvData, setAwaitingEmvData ] = useState(() => false);
    const [ isLoading, setIsLoading ] = useState(() => false);
    const [ loadingDisplay, setLoadingDisplay ] = useState(() => "");
    
    const emvDispatcher = useDispatch();
    const { clearEmvData } = useEmvHandler();

    const messageDispatcher = catchAndDisplay(emvDispatcher);

    const emvCleanUp = useCallback(() => {
        setIsLoading(false);
        setLoadingDisplay("");
    }, [setLoadingDisplay, setIsLoading]);

    const requestEmv = async() => {
        setLoadingDisplay("Requesting EMV transaction from device");
        clearEmvData();
        setIsLoading(true);

        const startTransactionOptions = {
            reportVerbosity: "verbose",
            cardType: "all",
            timeout: 30,
            currencyCode: "dollar",
            authorizedAmount: 1000,
            transactionType: "purchase"
        };

        try {
            const emvResp = await selectedDevice.deviceInterface.startTransaction(startTransactionOptions);

            setLoadingDisplay("Please follow device prompts");
            const emvJsonResp = JSON.stringify(emvResp, null, 4);
            setEmvResult([emvJsonResp]);

            if (emvResp.code === 0 && emvIsMounted) {
                setAwaitingEmvData(true);
            }
            else {
                emvCleanUp();
                messageDispatcher(emvJsonResp);
                setEmvResult("");
            }
        }
        catch(err) {
            emvCleanUp();
            messageDispatcher(err);
            setEmvResult("");
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

            if (Object.keys(returnObj).length)
                setEmvResult(prevState => {
                    prevState[1] = JSON.stringify(returnObj, null, 4);
                    return prevState;
                });
        }

        return () => (emvIsMounted = false);
    }, [cardData, awaitingEmvData]);

    const cancelTrx = async() => {
        await selectedDevice.deviceInterface.cancelTransaction();
        emvCleanUp();
        setEmvResult("");
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
                When&nbsp;<code>startTransaction</code>&nbsp;is called, the device will respond with a status to confirm that it has received the operation request.
                Once a card is swiped - the output from the device will be fed to the callback function that was provided to the <code>{`{ scanForDevices }`}</code> function.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                The callback function provided is the only way the device can transmit data to the application.
                It is recommended to define handlers based on object property checks and / or destructuring of the object that is received from the device. 
                A simple implementation is demonstrated below.
            </Typography>
        </OperationPanel>
    );
}