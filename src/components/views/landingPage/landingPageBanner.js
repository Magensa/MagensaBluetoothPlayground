import React from 'react';
import { Link as RrLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Grid,
    Typography,
    makeStyles,
    Link as MuiLink
} from '@material-ui/core';
import { compatabilityPath } from '../../../constants';
import useScreenSize from '../../customHooks/useScreenSize';

const landingPageBannerStyles = makeStyles({
    navWrapper: {
        padding: ({ spacing }) => spacing(2)
    },
    itemText: {
        textAlign: 'center'
    }
});

export default _ => {
    const { spacing, isLargeScreen } = useScreenSize();
    const { navWrapper: wrapperStyles, itemText } = landingPageBannerStyles({ spacing });

    return (
        <AppBar 
            position="fixed" 
            color='default'
            className='mui-fixed'
        >
            <Toolbar>
                <Grid
                    container 
                    justify='space-evenly' 
                    alignItems='center' 
                    className={ wrapperStyles }
                >
                    <Grid item xs={3} className={ itemText }>
                        <MuiLink 
                            variant='subtitle1' 
                            component={ RrLink } 
                            to="/"
                            color='textSecondary'
                            push="true"
                        >
                            Playground Home
                        </MuiLink>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant={(isLargeScreen) ? 'h4' : 'h5'} align='center'>
                            Welcome to Magensa Bluetooth Playground
                        </Typography>
                    </Grid>

                    <Grid item xs={3} className={ itemText }>
                        <MuiLink 
                            variant='subtitle1' 
                            component={ RrLink } 
                            to={ compatabilityPath }
                            color='textSecondary'
                            push="true"
                            align="center"
                        >
                            Playground Information
                        </MuiLink>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    );
};