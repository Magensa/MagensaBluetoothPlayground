import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    makeStyles
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

const codePanelLayoutStyles = makeStyles(({ 
    spacing,
    breakpoints: { down }, 
    typography: { pxToRem } 
}) => ({
    codeRoot: {
        marginTop: spacing(2),
        flex: '1 1 auto',
        width: '80%',
        alignSelf: 'center',
        [down('md')]: {
            width: '100%'
        }
    },
    smScreenPadding: {
        [down('sm')]: {
            padding: 0
        }
    },
    showCodeStyles: {
        fontSize: pxToRem(16)
    }
}));

export default ({ children }) => {
    const { codeRoot, smScreenPadding, showCodeStyles } = codePanelLayoutStyles();

    return (
        <ExpansionPanel className={ codeRoot }>
            <ExpansionPanelSummary
                expandIcon={ <CodeIcon /> }
            >
                <Typography variant='caption' className={ showCodeStyles }>
                    <strong>Show the Code!</strong>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                classes={{
                    root: smScreenPadding
                }}
            >
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}