import React from 'react';
import Typography from '@material-ui/core/Typography';

import SendCmdLogic from './sendCmdLogic';
import NoPairedDevice from '../../sharedComponents/noPairedDevice';
import CardDataLayout from '../../sharedComponents/cardDataLayout';


export default ({ trxHandler, selectedDevice }) => (selectedDevice) ?
    <CardDataLayout
        trxHandler={trxHandler}
    >
        <Typography variant='h4' align='center' paragraph>
            Send Command to Device
        </Typography>
        <SendCmdLogic selectedDevice={ selectedDevice } />
    </CardDataLayout>
    :
    <NoPairedDevice trxHandler={ trxHandler } />