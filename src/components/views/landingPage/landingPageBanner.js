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

const landingPageBannerStyles = makeStyles(({ spacing }) => ({
    navWrapper: {
        padding: spacing(2)
    }
}));

export default _ => {
    const { navWrapper: wrapperStyles } = landingPageBannerStyles();

    return (
        <AppBar 
            position="sticky" 
            color='default'
        >
            <Toolbar>
                <Grid container justify='space-evenly' alignItems='center' className={ wrapperStyles }>
                    <MuiLink 
                        variant='subtitle1' 
                        component={ RrLink } 
                        to="/"
                        color='textSecondary'
                        push="true"
                    >
                        Playground Home
                    </MuiLink>

                    <Typography variant='h4' align='center'>
                        Welcome to Magensa Bluetooth Playground
                    </Typography>

                    <MuiLink 
                        variant='subtitle1' 
                        component={ RrLink } 
                        to={ compatabilityPath }
                        color='textSecondary'
                        push="true"
                    >
                        Playground Information
                    </MuiLink>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}