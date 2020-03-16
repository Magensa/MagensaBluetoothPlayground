import React from 'react';
import Typography from '@material-ui/core/Typography';

import CardDataLayout from '../../sharedComponents/cardDataLayout';
import NoPairedDevice from '../../sharedComponents/noPairedDevice';
import OpenCloseTemplate from './additionalPanels/openClosePanels';

export default ({ trxHandler, selectedDevice }) => {

    return (selectedDevice) ?
    <CardDataLayout
        trxHandler={trxHandler}
    >
        <Typography variant='h4' align='center' paragraph>
            Additional Commands
        </Typography>
        
        <OpenCloseTemplate 
            selectedDevice={ selectedDevice }
            isOpenDevice
        />
        <OpenCloseTemplate 
            selectedDevice={ selectedDevice } 
        />
    </CardDataLayout>
    :
    <NoPairedDevice trxHandler={ trxHandler } />
}