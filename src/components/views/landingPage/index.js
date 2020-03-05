import React, { memo, useCallback, useEffect } from 'react';

import ToastMsg from '../../helperComponents/toastMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

import useDisplayMessage from '../../customHooks/useDisplayMessage';
import useSwipeHandler from '../../customHooks/useSwipeHandler';

//TODO: Remove debug Event Listener when ready to deploy.
const debugFunc = logInfo => console.log(logInfo.detail);

export default memo(_ => {
    const { clearDisplayMessage, setDisplayMessage } = useDisplayMessage();
    const { setSwipeData } = useSwipeHandler();
    const trxCallback = (function() {

        const mainCallback = deviceData => {
            switch(true) {
                case ("displayMessage" in deviceData):
                    console.log('displayMessage Handler: ', deviceData);
                    setDisplayMessage(deviceData.displayMessage);
                    break;
                case ("swipeData" in deviceData):
                    console.log('swipeData Handler: ', deviceData);
                    setSwipeData(deviceData.swipeData);
                    break;
                case ("batchData" in deviceData):
                    console.log('batchData Handler: ', deviceData);
                    break;
                case ("arqcData" in deviceData):
                    console.log('arqcData Handler: ', deviceData);
                    break;
                case ("transactionStatus" in deviceData):
                    if (deviceData.transactionStatus.statusCode === 8) {
                        clearDisplayMessage();
                    }
                    else if (deviceData.transactionStatus.statusCode === 3) {
                        if (deviceData.transactionStatus.progressCode === 44) {
                            clearDisplayMessage();
                        }
                    }
                    break;
                default:
                    console.log('fell out of case/switch: ', deviceData);
                    break;
            }
        }
        
        mainCallback.disconnectHandler = event => void console.log('[Disconnect Event]', event);
        
        return mainCallback;
    })();

    const trxHandler = useCallback(trxCallback, [trxCallback]);

    useEffect(() => {
        window.addEventListener('deviceLog', debugFunc, { passive: true});
        return () => window.removeEventListener('deviceLog', debugFunc, { passive: true});
    }, []);

    return (
        <>
            <ToastMsg />
            <LandingPageBanner />
            <RootRouter trxHandler={ trxHandler } />
        </>
    );
});