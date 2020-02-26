import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardData from '../cardData';
import CompatabilityInfo from '../compatibilityInfo';
import { compatabilityPath } from '../../../constants';


const rootWrapperStyles = makeStyles(({ spacing }) => ({
    gridWrapper: {
        marginTop: spacing(8)
    },
}))

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
            </Switch>
        </Grid>
    );
} 