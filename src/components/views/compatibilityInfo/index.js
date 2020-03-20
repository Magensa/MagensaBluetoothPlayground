import React from 'react';
import {
    Grid,
    Typography,
    Link,
    makeStyles
} from '@material-ui/core';
import InfoPanels from './infoPanels';
import useScreenSize from '../../customHooks/useScreenSize';

const useStyles = makeStyles(({ spacing, shadows, shape: { borderRadius } }) => ({
    topSpace: {
        marginBottom: spacing(2)
    },
    infoBanner: {
        margin: spacing(2),
        padding: spacing(2),
        boxShadow: shadows[1],
        backgroundColor: "#eceff1",
        borderRadius: borderRadius
    }
}));


export default _ => {
    const { isSmallScreen } = useScreenSize();
    const { topSpace, infoBanner } = useStyles();

    return (
        <>
            <Grid item xs={12}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={12} sm={12} lg={10} xl={8} className={ infoBanner }>
                        <Typography 
                            variant={(!isSmallScreen) ? 'h5' : 'h6'} 
                            align='center'
                            className={ topSpace }
                        >
                            Magensa Bluetooth utilizes the&nbsp;
                            <Link 
                                href="https://www.w3.org/community/web-bluetooth/"
                                onClick={e => e.preventDefault()}
                                color="textSecondary"
                            >
                                WebBluetooth API
                            </Link>
                            . Below you will find information about which browsers, and operating systems, are compatible with this API.
                        </Typography>
                        <Typography 
                            variant={(!isSmallScreen) ? 'h5' : 'h6'} 
                            align='center'
                            className={ topSpace }
                        >
                            All MagTek® devices use pairing code: <code>000000</code>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <InfoPanels />
            </Grid>
        </>
    );
}