import React from 'react';
import {
    Accordion ,
    AccordionSummary,
    AccordionDetails,
    Typography,
    makeStyles
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { fullWidth } from '../../../constants/styleConstants';

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
        [down('md')]: fullWidth
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
        <Accordion className={ codeRoot }>
            <AccordionSummary
                expandIcon={ <CodeIcon /> }
            >
                <Typography variant='caption' className={ showCodeStyles }>
                    <strong>Show the Code!</strong>
                </Typography>
            </AccordionSummary>
            <AccordionDetails
                classes={{
                    root: smScreenPadding
                }}
            >
                {children}
            </AccordionDetails>
        </Accordion>
    );
}
