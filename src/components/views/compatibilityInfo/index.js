import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery
} from '@material-ui/core';
import InfoPanels from './infoPanels';

const useStyles = makeStyles({
        gridWrapper: {
            marginTop: props => props ? 74 : 114
        },
        headerWrapper: {
            marginBottom: props => props.spacing(2)
        }
    });


export default _ => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    console.log(theme);
    const { gridWrapper, headerWrapper: topSpace } = useStyles({
        isLargeScreen,
        spacing: theme.spacing
    });

    return (
        <Grid container justify='center' className={ gridWrapper } spacing={5}>
            <Grid item lg={8} sm={10} xs={10}>
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