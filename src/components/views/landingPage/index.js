import React, { memo, useCallback } from 'react';
import ToastMsg from '../../helperComponents/toastMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

export default memo(_ => {
    const trxHandler = useCallback(callBackData => {
        console.log("trxCallback", callBackData);
    }, []);

    return (
        <>
            <ToastMsg />
            <LandingPageBanner />
            <RootRouter trxHandler={ trxHandler } />
        </>
    );
});