import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

import {
    OperationPanel,
    ColoredCode
} from '../../../../sharedComponents';
import SwipeCode from './swipeCode';
import useSwipeHandler from '../../../../customHooks/useSwipeHandler';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';

let swipeIsMounted = true;


export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardData = useSelector(state => state.cardData);
    const catchAndDisplay = useCatchAndDisplay();
    const [ swipeResult, setSwipeResult ] = useState(() => "");
    const [ awaitingSwipeData, setIsAwaitingSwipeData ] = useState(() => false);
    const [ isLoading, setIsLoading ] = useState(() => false);
    const [ loadingText, setLoadingText ] = useState(() => "");
    
    const { clearSwipeData } = useSwipeHandler();
    const cleanUp = useCallback((clearResult) => {
        setLoadingText("");
        setIsLoading(false);
        setIsAwaitingSwipeData(false);

        if (clearResult)
            setSwipeResult("");
    }, [setLoadingText, setIsLoading, setSwipeResult]);

    const cardSwipe = async() => {
        setLoadingText("Requesting swipe from device");
        clearSwipeData();
        setIsLoading(true);

        try {
            const swipeResp = await selectedDevice.deviceInterface.requestCardSwipe();
            const stringResp = JSON.stringify(swipeResp, null, 4);
            
            setSwipeResult(prevState => (!prevState) ? 
                [stringResp] : [stringResp, prevState[1]]
            );

            if (swipeResp.code === 0 && swipeIsMounted) {
                setLoadingText("Please swipe your card");
                setIsAwaitingSwipeData(true);
            }
            else {
                cleanUp(true);
                catchAndDisplay(swipeResp);
            }
        }
        catch(err) {
            cleanUp(true);
            catchAndDisplay(err);
        }
    }

    const cancelSwipe = async() => {
        await selectedDevice.deviceInterface.cancelTransaction();
        cleanUp(true);
    }

    useEffect(() => {
        swipeIsMounted = true;

        if (awaitingSwipeData && ("swipeData" in cardData)) {
            if (swipeIsMounted) {
                setSwipeResult(prevState => {
                    if (!prevState) {
                        let newState = [];
                        newState[1] = JSON.stringify(cardData.swipeData, null, 4);
                        return newState;
                    }
                    else {
                        prevState[1] = JSON.stringify(cardData.swipeData, null, 4);
                        return prevState;
                    }
                });
    
                cleanUp();
            }
        }

        return () => (swipeIsMounted = false);
    }, [cardData, awaitingSwipeData, cleanUp]);
    
    const panelProps = {
        providedFunc: cardSwipe,
        btnText: "cardSwipe()",
        outputVal: swipeResult,
        isLoading: isLoading,
        loadingText: loadingText,
        codeComponent: SwipeCode,
        cancelText: "Cancel Swipe",
        cancelFunc: cancelSwipe ,
        resultFullWidth: true,
        operationTitle: <strong> Request Card Swipe </strong>
    }

    return (
        <OperationPanel  {...panelProps} >
            <Typography gutterBottom variant='subtitle1'>
                When <ColoredCode>requestCardSwipe</ColoredCode> is called, the device will respond with a status to confirm that it has received the operation request.
                Once a card is swiped - the output from the device will be fed to the callback function that was provided to the <ColoredCode /> function.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                The callback function provided is the only way the device can transmit data to the application.
                It is recommended to define handlers based on object property checks and / or destructuring of the object that is received from the device. 
                A simple implementation is demonstrated below.
            </Typography>
        </OperationPanel>
    );
}