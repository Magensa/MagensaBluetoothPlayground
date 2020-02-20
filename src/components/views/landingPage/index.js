import React, { memo, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import ToastMsg from '../../helperComponents/toastMsg';
import CardData from '../cardData';
import LandingPageBanner from './landingPageBanner';
import CompatabilityInfo from '../compatibilityInfo';
import { compatabilityPath } from '../../../constants';

export default memo(_ => {
    const trxHandler = useCallback(callBackData => {
        console.log("trxCallback", callBackData);
    }, []);

    return (
        <>
            <ToastMsg />
            <LandingPageBanner />
            <Switch>
                <Route path="/" exact>
                    <CardData trxHandler={ trxHandler } />
                </Route>
                <Route path={ compatabilityPath }>
                    <CompatabilityInfo />
                </Route>
            </Switch>
        </>
    );
});