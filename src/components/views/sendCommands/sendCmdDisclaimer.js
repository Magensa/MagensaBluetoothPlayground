import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ColoredCode } from '../../sharedComponents';

export default _ => 
    <>
        <Typography paragraph variant='subtitle1' align='center'>
            <ColoredCode>sendCommand</ColoredCode> is a function that accepts an array of numbers, or hex string, and sends this command directly to the device. Any JavaScript array is accepted, 
            but it is recommended to send a simple array of numbers. The numbers can be either decimal or hex. No floats accepted. The library will parse the command and send the subsequent byte array directly to the device.
        </Typography>
        <Typography gutterBottom variant='subtitle2' align='center' color='textSecondary'>
            When utilizing other deviceInterface commands, the library parses and formats the device response before returning it to the caller. 
            In this case, the <ColoredCode>sendCommand</ColoredCode> is a somewhat direct interaction with the device, and therefore the response is not formatted.
            A raw device response is a byte array, so the library will parse the byte array and return an array of numbers representing the device's response, but it will not be formatted.
            Please keep this in mind when utilizing custom commands.
        </Typography>
    </>