import React, { memo, useCallback, useEffect } from 'react';
import ToastMsg from '../../helperComponents/toastMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

//TODO: Remove debug Event Listener when ready to deploy.
const debugFunc = logInfo => console.log(logInfo.detail);

export default memo(_ => {
    const trxHandler = useCallback(deviceData => {

        switch(true) {
            case ("displayMessage" in deviceData):
                console.log('displayMessage Handler: ', deviceData);
                break;
            case ("swipeData" in deviceData):
                console.log('swipeData Handler: ', deviceData);
                break;
            case ("batchData" in deviceData):
                console.log('batchData Handler: ', deviceData);
                break;
            case ("arqcData" in deviceData):
                console.log('arqcData Handler: ', deviceData);
                break;
            case ("transactionStatus" in deviceData):
                if (deviceData.transactionStatus.statusCode === 8) {
                    console.log('clear Display Message Handler: ', deviceData);
                }
                else if (deviceData.transactionStatus.statusCode === 3) {
                    if (deviceData.transactionStatus.progressCode === 44) {
                        console.log('clear Display Message Handler: ', deviceData);
                    }
                }
                break;
            default:
                console.log('fell out of case/switch: ', deviceData);
                break;
        }
    }, []);

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