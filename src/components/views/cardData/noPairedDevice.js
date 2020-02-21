import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const cardDataDisplayStyles = makeStyles(({ spacing }) => ({
    cardDataWrapper: {
        marginTop: spacing(10)
    }
}));


export default ({ pairDevice }) => {
    const { cardDataWrapper } = cardDataDisplayStyles();

    return (
        <Grid container className={ cardDataWrapper }>
            <Button onClick={ pairDevice } variant='contained' color='primary'>
                Pair Device
            </Button>
        </Grid>
    );
}