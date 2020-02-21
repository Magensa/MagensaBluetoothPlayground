import React, { memo, useCallback, useRef, createContext } from 'react';
import ToastMsg from '../../helperComponents/toastMsg';
import RootRouter from './rootRouter';
import LandingPageBanner from './landingPageBanner';

const LandingPageContext = createContext();

const LandingPage = memo(_ => {
    const trxHandler = useCallback(callBackData => {
        console.log("trxCallback", callBackData);
    }, []);

    const fixNavHeight = useRef(null);

    return (
        <>
            <ToastMsg />
            <LandingPageBanner ref={ fixNavHeight } />
            <LandingPageContext.Provider value={ fixNavHeight }>
                <RootRouter trxHandler={ trxHandler } ref={ fixNavHeight } />
            </LandingPageContext.Provider>
        </>
    );
});

export { 
    LandingPage,
    LandingPageContext 
};