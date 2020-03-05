import React from 'react';
import {
    Typography,
    Link,
    makeStyles
} from '@material-ui/core';
import InitializationCode from './initializationCode';
import OperationPanel from '../../../../sharedComponents/operationPanel';
import { pairDisclaimer } from '../../../../../constants/messageTemplates/initializationTemplates';

const initializeLibraryStyles = makeStyles(({ typography: { pxToRem } }) => ({
    coloredCode: {
        color: '#1a237e', 
        fontSize: pxToRem(18)
    }
}));

export default ({ pairDevice, isLoading, outputResult }) => {
    const purpleCodeTitle = initializeLibraryStyles().coloredCode;

    return (
        <OperationPanel 
            providedFunc={pairDevice} 
            btnText="pairDevice();" 
            outputVal={outputResult} 
            isLoading={isLoading} 
            loadingText="Initializing Device"
            btnDisclaimer={ pairDisclaimer }
            codeComponent={ InitializationCode }
            operationTitle={
                <strong>
                    Initialize&nbsp;<code className={ purpleCodeTitle }>{`magensa-bluetooth`}</code>&nbsp;library
                </strong>
            }
        >
            <Typography gutterBottom variant='subtitle1'>
                There is an initialization process that must be performed to utilize this library.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                The only top-level function exported from the <code className={ purpleCodeTitle }>magensa-bluetooth</code> library is the <code className={ purpleCodeTitle }>{`{ scanForDevices }`}</code> function.
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
        </OperationPanel>
    );
}