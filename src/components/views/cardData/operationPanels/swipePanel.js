import React, { useState } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions,
    Typography,
    Button
} from '@material-ui/core';
import CodePanel from '../../../sharedComponents/codePanel';


export default _ => {
    const [ swipeResp, setSwipeResp ] = useState("");

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography>
                    Request Card Swipe
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <h1>placeholder</h1>
                {/* <CodePanel
                    btnText="funcName()"
                    outputVal={ swipeResp }
                >
                    {({ preTagStyle, commentPreStyle }) =>
                        <pre className={ preTagStyle }>
                            <code>{`
                                try {
                                    const device await MagTekDevice.deviceInterface.requestCardSwipe()
                                }
                            `}</code>
                        </pre>
                    }
                </CodePanel> */}
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Button>
                    Request Swipe
                </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    );
}
