import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core';

import CardData from '../cardData';
import CompatabilityInfo from '../compatibilityInfo';
import SendCommands from '../sendCommands';
import AdditionalCommands from '../additionalCommands';
import { compatabilityPath, sendCommandsPath, additionalOps } from '../../../constants';

const rootWrapperStyles = makeStyles(({ spacing }) => ({
    gridWrapper: {
        marginTop: spacing(8)
    },
}));


export default ({ trxHandler }) => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const { gridWrapper } = rootWrapperStyles();

    useEffect(() => {
        if (selectedDevice) {
            console.log(
                '%c Tip: You may access your paired `MagTekDevice` directly in this console. Be sure to prefix all function invocations with `await`', 
                'background: #78909c; color: #e1f5fe'
            );
        }
    }, [selectedDevice]);

    return (
        <Grid container className={ gridWrapper }>
            <Switch>
                <Route path="/" exact>
                    <CardData 
                        trxHandler={ trxHandler } 
                        selectedDevice={ selectedDevice } 
                    />
                </Route>
                <Route path={ compatabilityPath }>
                    <CompatabilityInfo />
                </Route>
                <Route path={ sendCommandsPath }>
                    <SendCommands trxHandler={ trxHandler } selectedDevice={ selectedDevice } />
                </Route>
                <Route path={ additionalOps }>
                    <AdditionalCommands trxHandler={ trxHandler } selectedDevice={ selectedDevice } />
                </Route>
            </Switch>
        </Grid>
    );
} 