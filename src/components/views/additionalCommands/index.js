import React from 'react';
import Typography from '@material-ui/core/Typography';

import CardDataLayout from '../../sharedComponents/cardDataLayout';
import NoPairedDevice from '../../sharedComponents/noPairedDevice';
import OpenCloseTemplate from './additionalPanels/openClosePanels';
import ClearSessionPanel from './additionalPanels/clearSessionPanel';
import DeviceInfoPanel from './additionalPanels/deviceInfoPanel';
import IsDeviceOpenPanel from './additionalPanels/isDeviceOpenPanel';

export default ({ trxHandler, selectedDevice }) => (selectedDevice) ?
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
        <ClearSessionPanel selectedDevice={ selectedDevice } />
        <DeviceInfoPanel selectedDevice={ selectedDevice } />
        <IsDeviceOpenPanel selectedDevice={ selectedDevice } />
    </CardDataLayout>
    :
    <NoPairedDevice trxHandler={ trxHandler } />
    