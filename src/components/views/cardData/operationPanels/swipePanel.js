import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions,
    Typography,
    Grid,
    Button
} from '@material-ui/core';


export default _ => {

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography>
                    Request Card Swipe
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <pre>
                    <code>{`
                        try {
                            const device await MagTekDevice.deviceInterface.requestCardSwipe()
                        }
                    `}</code>
                </pre>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Button>
                    Request Swipe
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    );
}
