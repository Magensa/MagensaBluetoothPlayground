import React, { forwardRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import CardData from '../cardData';
import CompatabilityInfo from '../compatibilityInfo';
import { compatabilityPath } from '../../../constants';


export default forwardRef(({ trxHandler }, navRef) => {
    return (
        <Switch>
            <Route path="/" exact>
                <CardData trxHandler={ trxHandler } />
            </Route>
            <Route path={ compatabilityPath }>
                <CompatabilityInfo navRef={ navRef } />
            </Route>
        </Switch>
    )
});