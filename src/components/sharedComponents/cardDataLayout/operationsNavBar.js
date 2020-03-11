import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import OperationsLink from './operationsLink';
import { operationsText } from '../../../constants';

const operationsNavStyles = makeStyles(({ 
    spacing, 
    zIndex: { appBar }, 
    breakpoints: { down }, 
    shape: { borderRadius }  
}) => ({
    operationNavBar: {
        marginBottom: spacing(2),
        marginTop: spacing(1),
        backgroundColor: '#cfd8dc',
        zIndex: appBar - 1
    },
    operationsToolbar: {
        justifyContent: 'space-around',
        textAlign: 'center',
        [down('sm')]: {
            justifyContent: 'space-between'
        }
    },
    operationLinks: {
        borderRadius: borderRadius,
        padding: spacing(1),
        '&:hover': {
            backgroundColor: '#b0bec5'
        }
    }
}));

export default _ => {
    const { operationNavBar, operationsToolbar, operationLinks } = operationsNavStyles();

    return (
        <AppBar position='relative' className={ operationNavBar } >
            <Toolbar variant="dense" className={ operationsToolbar } disableGutters>
                {operationsText.map(({ id, text, linkPath }) =>
                    <OperationsLink
                        key={ id }
                        linkPath={ linkPath }
                        opLinkStyles={ operationLinks }
                    >
                        {text}
                    </OperationsLink>
                )}
            </Toolbar>
        </AppBar>
    )
}