import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

import CardData from '../cardData';
import CompatabilityInfo from '../compatibilityInfo';
import SendCommands from '../sendCommands';
import { compatabilityPath, sendCommandsPath } from '../../../constants';

const rootWrapperStyles = makeStyles(({ spacing }) => ({
    gridWrapper: {
        marginTop: spacing(8)
    },
}));


export default ({ trxHandler }) => {
    const { gridWrapper } = rootWrapperStyles();

    return (
        <Grid container className={ gridWrapper }>
            <Switch>
                <Route path="/" exact>
                    <CardData trxHandler={ trxHandler } />
                </Route>
                <Route path={ compatabilityPath }>
                    <CompatabilityInfo />
                </Route>
                <Route path={ sendCommandsPath }>
                    <SendCommands trxHandler={ trxHandler } />
                </Route>
            </Switch>
        </Grid>
    );
} 