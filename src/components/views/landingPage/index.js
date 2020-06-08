import React, { memo, useCallback } from 'react';

import { useRouteMatch } from 'react-router-dom';
import ToastMsg from '../../helperComponents/toastMsg';
import DisplayMsg from '../../helperComponents/displayMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

import useDisplayMessage from '../../customHooks/useDisplayMessage';
import useSwipeHandler from '../../customHooks/useSwipeHandler';
import useEmvHandler from '../../customHooks/useEmvHandler';
import useConnectionFlag from '../../customHooks/useConnectionFlag';
import { sendCommandsPath } from '../../../constants';


export default memo(_ => {
    const { clearDisplayMessage, setDisplayMessage } = useDisplayMessage();
    const { setSwipeData } = useSwipeHandler();
    const { setEmvData } = useEmvHandler();
    const flagConnectionChange = useConnectionFlag();

    const isSendCmd = useRouteMatch({
        path: sendCommandsPath,
        strict: true,
        sensitive: true
    });

    const isOperations = useRouteMatch({
        path: "/",
        strict: true,
        sensitive: true
    });
    
    const trxCallback = (function() {

        const mainCallback = deviceData => {
            if (isSendCmd)
                console.log("Data from main callback: ", deviceData);
            
            switch(true) {
                case ("swipeData" in deviceData):
                    setSwipeData(deviceData.swipeData);
                    break;
                case ("batchData" in deviceData):
                case ("arqcData" in deviceData):
                    setEmvData(deviceData);
                    break;
                default:
                    break;
            }
        }
        
        mainCallback.disconnectHandler = event => {
            console.log("[Disconnect Event]:", event);
            flagConnectionChange();
        } 

        mainCallback.displayCallback = ({ displayMessage }) => {
            if (isOperations)
                console.log('Message from device: ', displayMessage);

            setDisplayMessage(displayMessage);
        }

        mainCallback.transactionStatusCallback = statusObj => {
            console.log("[Trx Status Callback]:", statusObj);

            if (statusObj && statusObj.transactionStatus) {
                //SCRA
                const { transactionStatus } = statusObj;

                if (transactionStatus.statusCode === 8)
                    clearDisplayMessage();
                else if (transactionStatus.progressCode === 44)
                    clearDisplayMessage();
                else if (transactionStatus.progressCode === 60)
                    clearDisplayMessage();
            }
        }
        
        return mainCallback;
    })();

    const trxHandler = useCallback(trxCallback, [trxCallback]);

    return (
        <>
            <ToastMsg />
            <LandingPageBanner />
            <DisplayMsg />
            <RootRouter trxHandler={ trxHandler } />
        </>
    );
});