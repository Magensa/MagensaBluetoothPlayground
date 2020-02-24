import React from 'react';
import { 
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OsInfoList from './osInfoList';

export default ({ osInfo }) => {

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls={`${osInfo.osId}-os-info-content`}
                id={`${osInfo.osId}-os-info-header`}
            >
                <Typography gutterBottom variant="subtitle1" align='center'>
                    {osInfo.osName}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                id={`${osInfo.osId}-os-info-content`}
            >
                <Typography variant='subtitle2'>
                    <OsInfoList osDetails={ osInfo }  />
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}