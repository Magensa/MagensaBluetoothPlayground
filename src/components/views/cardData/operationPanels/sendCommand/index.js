import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import SendCommandCode from './sendCommandCode';
import {
    OperationPanel,
    ColoredCode
} from '../../../../sharedComponents';
import { catchAndDisplay } from '../../../../../utils/helperFunctions';
import { mainCallback } from '../../../../../constants/messageTemplates';

let sendCommandIsMounted = true;


export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const [ rawCommand, setRawCommand ] = useState(() => null);
    const [ commandResp, setCommandResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    
    const commandDispatcher = useDispatch();
    const msgDispatcher = catchAndDisplay(commandDispatcher);

    const sendDeviceCommand = async() => {
        const userCommand = (rawCommand || [0x49, 0x06, 0x00, 0x00, 0x03, 0x0D]);
        setIsLoading(true);

        try {
            const commandResp = await selectedDevice.deviceInterface.sendCommand(userCommand);
            console.log(commandResp);
            if (sendCommandIsMounted) {
                setCommandResp(
                    JSON.stringify(commandResp, null, 4)
                );
                setIsLoading(false);
            }
        }
        catch(err) {
            msgDispatcher(err);
        }
    }

    useEffect(() => {
        sendCommandIsMounted = true;
        return () => (sendCommandIsMounted = false);
    }, []);

    const cancelSendCommand = async() => {
        await selectedDevice.deviceInterface.cancelTransaction();
        setIsLoading(false);
    }

    const operationProps = {
        providedFunc: sendDeviceCommand,
        btnText: "sendRawCommand()",
        outputVal: commandResp,
        isLoading: isLoading,
        loadingText: "Sending command to device",
        codeComponent: SendCommandCode,
        cancelText: "Cancel Command",
        cancelFunc: cancelSendCommand,
        operationTitle: "Send Command (raw)"
    }

    return (
        <OperationPanel { ...operationProps }>
            <Typography gutterBottom variant='subtitle1'>
                <ColoredCode>sendCommand</ColoredCode> is a function that accepts a JavaScript array of numbers, and sends this command directly to the device. Any JavaScript array is accepted, 
                but it is recommended to send a simple array of numbers. The numbers can be either decimal or hex. No floats accepted. The library will parse the array and send the subsequent byte array directly to the device.
            </Typography>
            <Typography gutterBottom variant='subtitle2'>
                In the example below, we are checking if there was a command fed to the <ColoredCode>sendCommand</ColoredCode> function. If not - we will send the raw command for <ColoredCode>Read Date and Time</ColoredCode>
                Please keep in mind, this default command only works for devices without a screen (any device that is not a PinPad).
                Since this is a direct query to the device - the response will be returned immediately.  If the command sent triggers an action (such as <ColoredCode>startTransaction</ColoredCode>), the response
                will be a status object (usually informing the user that the command was received, and operation started). 
                Any result from the subsequent action will be fed to the <ColoredCode>{mainCallback}</ColoredCode> provided to the <ColoredCode /> method.
            </Typography>
        </OperationPanel>
    );
}