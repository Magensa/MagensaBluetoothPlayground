import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Link,
    makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InitializationCode from './initializationCode';
import CodePanel from '../../../sharedComponents/codePanel';
import { pairDisclaimer } from '../../../../constants/messageTemplates';

const initializeLibraryStyles = makeStyles(({ spacing, breakpoints: { down }, typography: { pxToRem } }) => {
    let oneSpace = spacing(1)

    return ({
        initialDetails: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            [down('md')]: {
                paddingLeft: oneSpace,
                paddingRight: oneSpace
            },
        },
        initializeHeader: {
            width: '100%'
        },
        smMargin: {
            [down('sm')]: {
                paddingLeft: oneSpace,
                paddingRight: oneSpace
            }
        },
        coloredCode: {
            color: '#1a237e', 
            fontSize: pxToRem(18)
        }
    });
});

export default ({ pairDevice, isLoading, outputResult }) => {
    const { initialDetails, initializeHeader, smMargin, coloredCode } = initializeLibraryStyles();

    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="initialization-details"
                id="initialization-summary"
                classes={{
                    root: smMargin
                }}
            >
                <Typography variant='subtitle1' className={ initializeHeader } component='p'>
                    <strong>Initialize&nbsp;<code className={ coloredCode }>{`magensa-bluetooth`}</code>&nbsp;library</strong>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={ initialDetails }>
                <Typography gutterBottom variant='subtitle1'>
                    There is an initialization process that must be performed to utilize this library.
                </Typography>
                <Typography gutterBottom variant='subtitle2'>
                    The only top-level function exported from the <code className={ coloredCode }>magensa-bluetooth</code> library is the <code className={ coloredCode }>{`{ scanForDevices }`}</code> function.
                    This function accepts a single callback function as a parameter. Only one callback is required, but multiple callbacks are supported, if desired.
                    This function, when invoked, will prompt a pair window that the end user must select a device from (the same as you just saw). 
                    The object returned from this method contains the interface necessary to interact with selected device.
                    It is recommended to open the device immediately after user selection to ensure all necessary GATT characteristics are cached properly.
                    Below is a simple initialization example used for demonstration purposes, that saves the device to a global namespace.
                    You are free to interact with the selected device in the JavaScript console, if preferred.
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                    You can view the full API <Link color="textSecondary" href="https://github.com/Magensa">here</Link> for more granular configuration.
                </Typography>
                <CodePanel
                    providedFunc={ pairDevice }
                    outputVal={ outputResult } 
                    btnText="pairDevice();"
                    btnDisclaimer={ pairDisclaimer }
                    isLoading={ isLoading }
                    loadingText="Initializing Device"
                >
                    <InitializationCode />
                </CodePanel>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}