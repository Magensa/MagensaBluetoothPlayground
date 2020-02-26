import React from 'react';

import CardDataDisplay from './cardDataDisplay';
import NoPairedDevice from './noPairedDevice';
import { useSelector, useDispatch } from 'react-redux';
import { scanForDevices } from 'magensa-bluetooth';
import { catchAndDisplay } from '../../../utils/helperFunctions';
import { selectDevice } from '../../../redux/actions';


export default ({ trxHandler }) => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardDataDispatch = useDispatch();
    const catchDisplayToUser = catchAndDisplay(cardDataDispatch);
    

    const pairDevice = async() => {
        try {
            const device = await scanForDevices(trxHandler);

            if (device) {
                console.log('paired device - send to store', device);
                await device.deviceInterface.openDevice();

                cardDataDispatch(
                    selectDevice( device )
                );
            }
            else
                console.log('device failed check:', device);
        }
        catch(err) {
            catchDisplayToUser(err)
        }
    }

    return (
        <>
            {(selectedDevice) ?
                <CardDataDisplay selectedDevice={ selectedDevice } />
                :
                <NoPairedDevice pairDevice={ pairDevice } />
            }
        </>
    );
}