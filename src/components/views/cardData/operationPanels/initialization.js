import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions,
    Typography,
    Grid,
    Button,
    Link,
    makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const initializeLibraryStyles = makeStyles(({ breakpoints: { down } }) => ({
    initialDetails: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    codeBlock: {
        backgroundColor: '#455a64',
        color: '#b3e5fc',
        width: '66%',
        [down('md')]: {
            width: '100%'
        }
    },
    preTagStyle: {
        padding: 0,
        margin: 0,
        fontSize: "100%",
        background: '0 0',
        border: 0,
        whiteSpace: 'pre-wrap',
        overflow: 'auto'
    }
}));


export default _ => {
    const { initialDetails, codeBlock, preTagStyle } = initializeLibraryStyles();

    return (
        <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls="initialization-details"
                id="initialization-summary"
            >
                Initialize &nbsp; <code>{`magensa-bluetooth`}</code> &nbsp; library
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={ initialDetails }>
                <Typography gutterBottom>
                    There is an initialization process that must be performed to utilize this library.
                    Below is a simple initialization used for demonstration purposes.
                    You can view the full API <Link color="textSecondary" href="https://github.com/Magensa">here</Link> for more options.
                </Typography>
                <div className={ codeBlock }>
                    <pre className={ preTagStyle }>
                        <code>{`
    import { scanForDevices } from 'magensa-bluetooth';

    const mainCallback = (callbackData) => void console.log("Callback Data: ", callbackData);

    const pairDevice = async() => {
        try {
            const device = await scanForDevices(mainCallback);

            //After user selects device from pair window the 'device' variable contains the interface needed to interact with the device.

            //Store this variable wherever makes sense for your application.
            
            //For demonstration purposes, this playground will store device to a global namespace.

            window.MagTekDevice = device;
        }
        catch(err) {
            console.error(err);
        }
    }
                        `}</code>
                    </pre>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}