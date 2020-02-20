import React from 'react';
import {
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import InfoPanels from './infoPanels';


const compatibilityStyles = makeStyles(({ spacing }) => ({
    gridWrapper: {
        marginTop: spacing(2)
    },
    headerWrapper: {
        marginBottom: spacing(2)
    }
}));

export default _ => {
    const { gridWrapper, headerWrapper: topSpace } = compatibilityStyles();

    return (
        <Grid container justify='center' className={ gridWrapper } spacing={5}>
            <Grid item xs={8}>
                <Typography 
                    variant='h5' 
                    align='center'
                    className={ topSpace }
                >
                    Magensa Web Bluetooth Information
                </Typography>

                <InfoPanels />
            </Grid>
        </Grid>
    );
}