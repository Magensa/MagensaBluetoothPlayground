import React from 'react';
import {
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import InfoPanels from './infoPanels';
import useScreenSize from '../../customHooks/useScreenSize';

const useStyles = makeStyles({
        gridWrapper: {
            marginTop: props => props.isLargeScreen ? props.spacing(11) : props.spacing(16)
        },
        topSpace: {
            marginBottom: props => props.spacing(2)
        }
    });


export default _ => {
    const { isLargeScreen, spacing } = useScreenSize();
    const { gridWrapper, topSpace } = useStyles({
        isLargeScreen,
        spacing: spacing
    });

    return (
        <Grid container className={ gridWrapper }>
            <Grid item xs={12}>
                <Typography 
                    variant='h5' 
                    align='center'
                    className={ topSpace }
                    gutterBottom
                >
                    Magensa Web Bluetooth Information
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <InfoPanels />
            </Grid>
        </Grid>
    );
}