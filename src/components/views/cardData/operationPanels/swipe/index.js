import React, { useState, useEffect, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import OperationPanel from '../../../../sharedComponents/operationPanel';
import SwipeCode from './swipeCode';

import { catchAndDisplay } from '../../../../../utils/helperFunctions';
import useSwipeHandler from '../../../../customHooks/useSwipeHandler';

let swipeIsMounted = true;

export default _ => {
    const [ swipeResult, setSwipeResult ] = useState(() => "");
    const [ awaitingSwipeData, setIsAwaitingSwipeData ] = useState(() => false);
    const [ isLoading, setIsLoading ] = useState(() => false);
    const [ loadingText, setLoadingText ] = useState(() => "");
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardData = useSelector(state => state.cardData);
    const initialDispatcher = useDispatch();
    const { clearSwipeData } = useSwipeHandler();

    const messageDispatcher = catchAndDisplay(initialDispatcher);

    const cleanUp = useCallback(() => {
        setLoadingText("");
        setIsLoading(false);
    }, [setLoadingText, setIsLoading]);

    const cardSwipe = async() => {
        setSwipeResult("");
        setLoadingText("Requesting swipe from device");
        clearSwipeData();
        setIsLoading(true);

        try {
            const swipeResp = await selectedDevice.deviceInterface.requestCardSwipe();
            console.log("Request Swipe Response: ", swipeResp);

            if (swipeResp.code === 0 && swipeIsMounted) {
                setLoadingText("Please swipe your card");
                setIsAwaitingSwipeData(true);
            }
            else {
                cleanUp();
                messageDispatcher(swipeResp);
            }
        }
        catch(err) {
            cleanUp();
            messageDispatcher(err);
        }
    }

    useEffect(() => {
        swipeIsMounted = true;
        console.log("awaitingSwipeData: ", awaitingSwipeData);
        console.log('cardData: ', cardData);

        if (awaitingSwipeData && "swipeData" in cardData) {
            setSwipeResult(
                JSON.stringify(cardData.swipeData, null, 4)
            );

            cleanUp();
        }

        return () => swipeIsMounted = false;
    }, [cardData, awaitingSwipeData, cleanUp]);

    return (
        <OperationPanel 
            providedFunc={ cardSwipe } 
            btnText="cardSwipe();" 
            outputVal={ swipeResult } 
            isLoading={ isLoading } 
            loadingText={ loadingText }
            codeComponent={ SwipeCode }
            resultFullWidth={ true }
            operationTitle={
                <strong>
                    Request Card Swipe
                </strong>
            }
        >
            <Typography gutterBottom variant='subtitle1'>
                When&nbsp;<code>requestCardSwipe</code>&nbsp;is called, the device will respond with a status to confirm that it has received the operation request.
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