import React, { memo, useCallback, useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';
import ToastMsg from '../../helperComponents/toastMsg';
import DisplayMsg from '../../helperComponents/displayMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

import useDisplayMessage from '../../customHooks/useDisplayMessage';
import useSwipeHandler from '../../customHooks/useSwipeHandler';
import useEmvHandler from '../../customHooks/useEmvHandler';
import { sendCommandsPath } from '../../../constants';


export default memo(_ => {
    const { clearDisplayMessage, setDisplayMessage } = useDisplayMessage();
    const { setSwipeData } = useSwipeHandler();
    const { setEmvData } = useEmvHandler();

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
        
        mainCallback.disconnectHandler = event => void console.log("[Disconnect Event]:", event);

        mainCallback.displayCallback = ({ displayMessage }) => {
            if (isOperations)
                console.log('Message from device: ', displayMessage);

            setDisplayMessage(displayMessage);
        }

        mainCallback.transactionStatusCallback = statusObj => {
            console.log("[Trx Status Callback]:", statusObj);

            if (statusObj && statusObj.transactionStatus) {
                //SCRA
                if (statusObj.transactionStatus.statusCode === 8) {
                    clearDisplayMessage();
                }
                else if (statusObj.transactionStatus.statusCode === 3) {
                    if (statusObj.transactionStatus.progressCode === 44) {
                        clearDisplayMessage();
                    }
                }
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