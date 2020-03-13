import React from 'react';
import Typography from '@material-ui/core/Typography';

import CardDataLayout from '../../sharedComponents/cardDataLayout';
import NoPairedDevice from '../../sharedComponents/noPairedDevice';
import OpenDevicePanel from './additionalPanels/openDevice';

export default ({ trxHandler, selectedDevice }) => {

    return (selectedDevice) ?
    <CardDataLayout
        trxHandler={trxHandler}
    >
        <Typography variant='h4' align='center' paragraph>
            Additional Commands
        </Typography>
        <OpenDevicePanel selectedDevice={ selectedDevice } />
    </CardDataLayout>
    :
    <NoPairedDevice trxHandler={ trxHandler } />
}