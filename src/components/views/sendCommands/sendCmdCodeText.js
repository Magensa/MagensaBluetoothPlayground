import React from 'react';
import { Typography, Link } from '@material-ui/core';

import { ColoredCode } from '../../sharedComponents';
import { readDateTimeCmdLink } from '../../../constants';
import { mainCallback } from '../../../constants/messageTemplates';


export default _ => 
    <Typography paragraph variant='subtitle2' align="center">
        In the code example below, there is a check to see if there was a command fed to the <ColoredCode>sendCommand</ColoredCode> function. 
        If not - we will send the raw command for&nbsp;
        <Link color='textSecondary' href={ readDateTimeCmdLink }>
            Read Date and Time
        </Link>.
        Please keep in mind, this command only works for SCRA devices (devices that are not PinPads).
        Since this is a direct query to the device - the response will be returned immediately.  If the command sent triggers an action 
        (such as <ColoredCode>startTransaction</ColoredCode>), the response
        will be a status (usually informing the caller that the command was received, and operation has begun). 
        Any data result from the subsequent action (such as a card being inserted), will be fed to 
        the <ColoredCode>{mainCallback}</ColoredCode> that was provided to the <ColoredCode /> method, upon initialization.
    </Typography>