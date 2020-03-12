import React, { useState, useEffect } from 'react';
import {
    Typography,
    Link,
    Grid,
    makeStyles,
    TextField,
    Button
 } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { codeBlockStyles } from '../../../constants/styleConstants';

import SendCommandCode from './sendCommandCode';
import {
    ColoredCode,
    CodePanelLayout
} from '../../sharedComponents';
import { catchAndDisplay } from '../../../utils/helperFunctions';
import { mainCallback } from '../../../constants/messageTemplates';
import { readDateTimeCmdLink } from '../../../constants';

let sendCommandIsMounted = true;
let hexRegex = new RegExp(/^[0-9A-Fa-f]+$/i);

const sendCmdStyles = makeStyles(({ spacing }) => ({
    codeBlock: {
        ...codeBlockStyles(spacing),
        padding: spacing(1)
    }
}));

export default _ => {
    const { codeBlock } = sendCmdStyles();
    const selectedDevice = useSelector(state => state.selectedDevice);
    const [ rawCommand, setRawCommand ] = useState(() => "");
    const [ commandResp, setCommandResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const [ inputError, setInputError ] = useState(() => false);
    
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

    // const cancelSendCommand = async() => {
    //     await selectedDevice.deviceInterface.cancelTransaction();
    //     setIsLoading(false);
    // }

    const handleCommand = e => {
        let name = e.target.name;
        let val = e.target.value;

        console.log('input', name, val);

        if (val === "" || hexRegex.test(val)) {
            console.log('success');
            setRawCommand(val);

            if (inputError)
                setInputError(false);
        }
        else {
            console.log('failure');
            setInputError(true);
        }
    }

    return (
        <Grid container direction="column" justify="center" alignItems='center' spacing={2}>

            <Grid item xl={10} md={12}>
                <Typography gutterBottom variant='subtitle1' align='center'>
                    <ColoredCode>sendCommand</ColoredCode> is a function that accepts an array of numbers and sends this command directly to the device. Any JavaScript array is accepted, 
                    but it is recommended to send a simple array of numbers. The numbers can be either decimal or hex. No floats accepted. The library will parse the array and send the subsequent byte array directly to the device.
                </Typography>
            </Grid>
           
            <Grid item xl={8} md={10}>
                <Grid container justify='center' alignItems='center'>
                    <CodePanelLayout>
                        <Grid container justify='center' alignItems='center'>
                            <Typography paragraph variant='subtitle2'>
                                In the code example below, there is a check to see if there was a command fed to the <ColoredCode>sendCommand</ColoredCode> function. If not - we will send the raw command for &nbsp;
                                <Link color='textSecondary' href={ readDateTimeCmdLink }>
                                    Read Date and Time
                                </Link>.
                                Please keep in mind, this command only works for SCRA devices (devices that are not PinPads).
                                Since this is a direct query to the device - the response will be returned immediately.  If the command sent triggers an action (such as <ColoredCode>startTransaction</ColoredCode>), the response
                                will be a status object (usually informing the user that the command was received, and operation started). 
                                Any result from the subsequent data, as a response to  will be fed to the <ColoredCode>{mainCallback}</ColoredCode> provided to the <ColoredCode /> method.
                            </Typography>
                            <Grid item className={ codeBlock }>
                                <SendCommandCode />
                            </Grid>
                        </Grid>
                    </CodePanelLayout>
                </Grid>
            </Grid>

            <div>
                <Grid container direction="column" justify='center'>
                    <TextField 
                        value={ rawCommand }
                        onChange={ handleCommand }
                        name="rawCommand"
                        helperText={ (inputError) ? "Hex characters only" : "" }
                        error={ inputError }
                        variant="outlined"
                        label="Raw Command (Hex Format)"
                        fullWidth
                    />
                    <Button
                        onClick={ sendDeviceCommand }
                        variant='outlined'
                        color='primary'
                    >
                        sendCommand()
                    </Button>
                </Grid>
            </div>

        </Grid>
    );
}