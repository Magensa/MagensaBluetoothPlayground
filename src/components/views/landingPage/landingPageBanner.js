import React, { forwardRef } from 'react';
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
    },
    itemText: {
        textAlign: 'center'
    }
}));

export default forwardRef((props, navRef) => {
    const { navWrapper: wrapperStyles, itemText } = landingPageBannerStyles();

    return (
        <AppBar 
            position="fixed" 
            color='default'
            className='mui-fixed'
            ref={ navRef }
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
                        <Typography variant='h4' align='center'>
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
});