import React, { useState, useCallback, memo } from 'react';
import { Link as RrLink } from 'react-router-dom';
import {
    Link as MuiLink,
    makeStyles,
    Typography,
    Grid,
    Toolbar,
    AppBar,
    IconButton,
    Drawer,
    List,
    Divider,
    ListItem
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { compatabilityPath } from '../../../constants';


const mobileAppBarStyles = makeStyles(({ spacing, mixins: { toolbar } }) => ({
    iconHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: spacing(0, 1),
        ...toolbar
    }
}));

export default memo(_ => {
    const { iconHeader } = mobileAppBarStyles();
    const [ isOpen, setIsOpen ] = useState(() => false);
    const toggleOpen = useCallback(_ => 
        setIsOpen(currentOpenState => !currentOpenState), 
        [setIsOpen]
    );

    return (
        <>
            <AppBar 
                position="fixed" 
                color='default'
                className='mui-fixed'
            >
                <Toolbar>
                    <Grid
                        container 
                        alignItems='center'
                        direction="row"
                    >
                        <Grid item xs={2}>
                            <IconButton
                                color="inherit"
                                aria-label="open-navigation-menu"
                                edge="end"
                                onClick={ toggleOpen }
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant='h5' align='center'>
                                Welcome to Magensa Bluetooth Playground
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            
            <Drawer
                open={ isOpen }
                variant="persistent"
                anchor="left"
            >
                <div className={ iconHeader }>
                    <IconButton onClick={ toggleOpen }>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>

                <List>
                    <Divider />
                    <ListItem button divider>
                        <MuiLink 
                            variant='subtitle1' 
                            component={ RrLink } 
                            to="/"
                            color='textSecondary'
                            push="true"
                            onClick={ toggleOpen }
                        >
                            Playground Home
                        </MuiLink>
                    </ListItem>
                    <ListItem button divider>
                        <MuiLink 
                            variant='subtitle1' 
                            component={ RrLink } 
                            to={ compatabilityPath }
                            color='textSecondary'
                            push="true"
                            align="center"
                            onClick={ toggleOpen }
                        >
                            Playground Information
                        </MuiLink>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
});