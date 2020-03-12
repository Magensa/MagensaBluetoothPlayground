import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Typography,
    Link,
    Grid,
    makeStyles,
    TextField,
    Button
} from '@material-ui/core';
import clsx from 'clsx';
import SendCommandCode from './sendCommandCode';
import { ColoredCode, CodePanelLayout, LoadingWidget, OutputPaper } from '../../sharedComponents';
import { catchAndDisplay, hexStrToArray, convertArrayToHexString } from '../../../utils/helperFunctions';
import { readDateTimeCmdLink, hexRegex } from '../../../constants';
import { mainCallback } from '../../../constants/messageTemplates';
import { fullWidth, codeBlockStyles } from '../../../constants/styleConstants';

let sendCommandIsMounted = true;

const sendCmdStyles = makeStyles(({ spacing, breakpoints: { down } }) => ({
    codeBlock: {
        ...codeBlockStyles(spacing),
        padding: spacing(1)
    },
    wrapperFullWidth: fullWidth,
    inputWrapper: {
        marginTop: spacing(1)
    },
    loadingStyles: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        color: '#37474f',
        padding: spacing(1)
    },
    outputBlock: {
        minHeight: 0,
        width: '50%',
        marginBottom: spacing(3),
        textAlign: 'center',
        [down('sm')]: {
            marginLeft: 0,
            width: '100%',
        }
    }
}));

export default _ => {
    const { codeBlock, wrapperFullWidth, inputWrapper, loadingStyles, outputBlock } = sendCmdStyles();
    const selectedDevice = useSelector(state => state.selectedDevice);
    const [ rawCommand, setRawCommand ] = useState(() => "");
    const [ commandResp, setCommandResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const [ inputError, setInputError ] = useState(() => false);
    
    const commandDispatcher = useDispatch();
    const msgDispatcher = catchAndDisplay(commandDispatcher);

    const sendDeviceCommand = async() => {
        setIsLoading(true);
        const userCommand = (rawCommand) ? 
            hexStrToArray(rawCommand) : [0x49, 0x06, 0x00, 0x00, 0x03, 0x0D, 0x00, 0x00];

        try {
            console.log('cmd: ', userCommand);
            const cmdResp = await selectedDevice.deviceInterface.sendCommand(userCommand);
            console.log(cmdResp);

            if (sendCommandIsMounted) {
                setCommandResp(
                    ((cmdResp.length) ? convertArrayToHexString(cmdResp) : JSON.stringify(cmdResp, null, 4))
                );
                setIsLoading(false);
            }
        }
        catch(err) {
            msgDispatcher(err);

            if (sendCommandIsMounted)
                setIsLoading(false);
        }
    }

    useEffect(() => {
        sendCommandIsMounted = true;
        return () => (sendCommandIsMounted = false);
    }, []);

    const handleCommand = e => {
        let val = e.target.value;

        if (val === "" || hexRegex.test(val)) {
            setRawCommand(val);
            setInputError(false);
        }
        else {
            setInputError(true);
        }
    }

    return (
        <Grid 
            container 
            direction="column" 
            justify="center" 
            alignItems='center' 
            spacing={2}
        >

            <Grid item xl={10} md={12}>
                <Typography paragraph variant='subtitle1' align='center'>
                    <ColoredCode>sendCommand</ColoredCode> is a function that accepts an array of numbers and sends this command directly to the device. Any JavaScript array is accepted, 
                    but it is recommended to send a simple array of numbers. The numbers can be either decimal or hex. No floats accepted. The library will parse the array and send the subsequent byte array directly to the device.
                </Typography>
                <Typography gutterBottom variant='subtitle2' align='center' color='textSecondary'>
                    When utilizing other deviceInterface commands, the library parses and formats the device response before returning it to the caller. 
                    In this case, the <ColoredCode>sendCommand</ColoredCode> is a somewhat direct interaction with the device, and therefore the response is not formatted.
                    A raw device response is a byte array, so the library will parse the byte array and return an array of numbers representing the device's response, but it will not be formatted.
                    Please keep this in mind when utilizing custom commands.
                </Typography>
            </Grid>
           
            <Grid item xl={8} md={10}>
                <Grid container justify='center' alignItems='center'>
                    <CodePanelLayout>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item xs={11} md={12}>
                                 <Typography paragraph variant='subtitle2' align="center">
                                    In the code example below, there is a check to see if there was a command fed to the <ColoredCode>sendCommand</ColoredCode> function. If not - we will send the raw command for&nbsp;
                                    <Link color='textSecondary' href={ readDateTimeCmdLink }>
                                        Read Date and Time
                                    </Link>.
                                    Please keep in mind, this command only works for SCRA devices (devices that are not PinPads).
                                    Since this is a direct query to the device - the response will be returned immediately.  If the command sent triggers an action (such as <ColoredCode>startTransaction</ColoredCode>), the response
                                    will be a status (usually informing the caller that the command was received, and operation has begun). 
                                    Any data result from the subsequent action (such as a card being inserted), will be fed to the <ColoredCode>{mainCallback}</ColoredCode> that was provided to the <ColoredCode /> method, upon initialization.
                                </Typography>
                            </Grid>
                           
                            <Grid item className={ codeBlock }>
                                <SendCommandCode />
                            </Grid>

                        </Grid>
                    </CodePanelLayout>
                </Grid>
            </Grid>

            <Grid 
                container 
                justify="center" 
                alignItems="center" 
                direction="column" 
                className={ clsx(inputWrapper, wrapperFullWidth) }
                spacing={2}
            >
                <Grid item xs={11} className={ wrapperFullWidth }>
                    <Typography paragraph variant='subtitle1' align='center'>
                        <em>
                            For demonstration purposes, both the input and output are in hex format. Be aware that when this function is implemented in code, both input and output types are <ColoredCode>Arrays.</ColoredCode>
                        </em>
                    </Typography>
                </Grid>
                <Grid item xs={11} xl={5} className={ wrapperFullWidth }>
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
                </Grid>
                <Grid item xs={12}>
                    <Button
                        onClick={ sendDeviceCommand }
                        variant='outlined'
                        color='primary'
                    >
                        sendCommand()
                    </Button>
                </Grid>

                <Grid item xl={12} className={ outputBlock }>
                    {(!isLoading) ?
                        <OutputPaper outputVal={ commandResp } />
                        :
                        <LoadingWidget 
                            loadingStyles={ loadingStyles }
                            loadingText={
                                `Sending command ${
                                JSON.stringify( ((rawCommand) ? 
                                    hexStrToArray(rawCommand) : [0x49, 0x06, 0x00, 0x00, 0x03, 0x0D, 0x00, 0x00])
                                )} to device`}
                        />
                    }
                </Grid>

            </Grid>
        </Grid>
    );
}