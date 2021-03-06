import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import InitializationCode from './initializationCode';
import {
    OperationPanel,
    ColoredCode,
    LinkToApi
} from '../../../../sharedComponents';
import { pairDisclaimer } from '../../../../../constants/messageTemplates/initializationTemplates';

const InitializationDisplay = ({ pairDevice, isLoading, outputResult }) => (
    <OperationPanel 
        providedFunc={ pairDevice } 
        btnText="pairDevice();" 
        outputVal={ outputResult } 
        isLoading={ isLoading } 
        loadingText="Initializing Device"
        btnDisclaimer={ pairDisclaimer }
        codeComponent={ InitializationCode }
        operationTitle={ 
            <>
                Initialize 
                    <ColoredCode>
                        {`magensa-bluetooth`}
                    </ColoredCode> 
                library
            </>
        }
        mountExpand
    >
        <Typography gutterBottom variant='subtitle1'>
            There is an initialization process that must be performed to utilize this library.
        </Typography>
        <Typography gutterBottom variant='subtitle2'>
            The only top-level function exported from the <ColoredCode>magensa-bluetooth</ColoredCode> library is the <ColoredCode /> function.
            This function accepts a single callback function as a required parameter (As well as the optional <ColoredCode>deviceName</ColoredCode>and <ColoredCode>deviceType</ColoredCode>parameters). 
            Only one callback is required, but multiple callbacks are supported, if desired.
            This function, when invoked, will prompt a pair window that the end user must select a device from (the same as you just saw). 
            The object returned from this method represents the selected device, and contains the interface necessary to interact with the device.
            Below is a simple initialization example used for demonstration purposes, that saves the device to a global namespace.
            You are free to interact with the selected device in the JavaScript console, if preferred.
        </Typography>
        <LinkToApi />
    </OperationPanel>
);


InitializationDisplay.propTypes = {
    pairDevice: PropTypes.func.isRequired, 
    isLoading: PropTypes.bool.isRequired, 
    outputResult: PropTypes.string.isRequired
}

export default InitializationDisplay;