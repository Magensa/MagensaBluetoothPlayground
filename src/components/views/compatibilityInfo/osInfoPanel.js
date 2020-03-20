import React from 'react';
import { 
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OsInfoList from './osInfoList';
import { fullWidth } from '../../../constants/styleConstants';

const useOsInfoPanelStyles = makeStyles({
    expansionDetailsWrapper: {
        padding: 0
    },
    panelTextImg: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    trimProps: {
        width: props => (!props) ? fullWidth.width : (props === 1) ? "86%" : "66%",
        height: props => (!props || props === 1) ? fullWidth.width : '80%'
    },
    osText: fullWidth
});

export default props => {
    const { osId, osLogo, logoAlt, trim, osName } = props;
    const { expansionDetailsWrapper, panelTextImg, trimProps, osText } = useOsInfoPanelStyles(trim);
    
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-controls={`${osId}-os-info-content`}
                id={`${osId}-os-info-header`}
                classes={{
                    content: panelTextImg
                }}
            >
                <Avatar 
                    alt={ logoAlt } 
                    src={ osLogo } 
                    classes={ (trim) ? 
                        { img: trimProps} : {}
                    }
                />

                <Typography gutterBottom variant="subtitle1" align='center' className={ osText }>
                    <strong>{osName}</strong>
                </Typography>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                id={`${osId}-os-info-content`}
                className={ expansionDetailsWrapper }
            >
                <OsInfoList { ...props }  />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}