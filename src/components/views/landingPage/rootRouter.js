import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CardData from '../cardData';
import CompatabilityInfo from '../compatibilityInfo';
import { compatabilityPath } from '../../../constants';


export default ({ trxHandler }) => {
    return (
        <Switch>
            <Route path="/" exact>
                <CardData trxHandler={ trxHandler } />
            </Route>
            <Route path={ compatabilityPath }>
                <CompatabilityInfo />
            </Route>
        </Switch>
    )
};