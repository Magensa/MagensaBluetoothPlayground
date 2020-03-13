import React, { useState, useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import {
    Grid,
    TextField
} from '@material-ui/core';
import SendCmdDisplay from './sendCmdDisplay';
import SendCmdDisclaimer from './sendCmdDisclaimer';
import { hexRegex } from '../../../constants';
import { catchAndDisplay, hexStrToArray, convertArrayToHexString } from '../../../utils/helperFunctions';

let sendCmdIsMounted = true;


export default memo(({ selectedDevice }) => {
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

            if (sendCmdIsMounted) {
                setCommandResp(
                    ((cmdResp.length) ? convertArrayToHexString(cmdResp) : JSON.stringify(cmdResp, null, 4))
                );
                setIsLoading(false);
            }
        }
        catch(err) {
            msgDispatcher(err);

            if (sendCmdIsMounted)
                setIsLoading(false);
        }
    }

    useEffect(() => {
        sendCmdIsMounted = true;
        return () => (sendCmdIsMounted = false);
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

    const displayProps = {
        sendDeviceCommand,
        rawCommand,
        commandResp,
        isLoading,
    };

    return (
        <Grid 
            container 
            direction="column" 
            justify="center" 
            alignItems='center' 
            spacing={2}
        >
            <Grid item xl={10} md={12}>
               <SendCmdDisclaimer />
            </Grid>

            <SendCmdDisplay { ...displayProps }>
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
            </SendCmdDisplay>

        </Grid>
    );
});