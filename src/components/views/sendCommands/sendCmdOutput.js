import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { LoadingWidget, OutputPaper } from '../../sharedComponents';
import { hexStrToArray } from '../../../utils/helperFunctions';


const SendCmdOutput = ({ 
    isLoading, 
    commandResp, 
    rawCommand, 
    loadingStyles, 
    outputBlock 
}) =>
    <Grid item xl={12} className={ outputBlock }>
        {(!isLoading) ?
            <OutputPaper outputVal={ commandResp } />
            :
            <LoadingWidget 
                loadingStyles={ loadingStyles }
                loadingText={
                    `Sending command ${
                        JSON.stringify( 
                            ((rawCommand) ? hexStrToArray(rawCommand) 
                            : [0x49, 0x06, 0x00, 0x00, 0x03, 0x0D, 0x00, 0x00])
                        )
                    } to device`}
            />
        }
    </Grid>

SendCmdOutput.propTypes = {
    isLoading: PropTypes.bool.isRequired, 
    commandResp: PropTypes.string.isRequired, 
    rawCommand: PropTypes.string.isRequired, 
    loadingStyles: PropTypes.string.isRequired, 
    outputBlock: PropTypes.string.isRequired 
}

export default SendCmdOutput;