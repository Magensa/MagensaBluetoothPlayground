import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scanForDevices } from 'magensa-bluetooth';

import CardDataDisplay from './cardDataDisplay';
import NoPairedDevice from './noPairedDevice';
import { selectDevice } from '../../../redux/actions';
import { catchAndDisplay } from '../../../utils/helperFunctions';


export default ({ trxHandler }) => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const cardDataDispatch = useDispatch();
    const catchDisplayToUser = catchAndDisplay(cardDataDispatch);
    

    const pairDevice = devicePrefix => async(e) => {
        try {
            const device = (!devicePrefix) ? await scanForDevices(trxHandler) 
                : await scanForDevices(trxHandler, devicePrefix);

            if (device) {
                console.log('paired device - send to store', device);
                await device.deviceInterface.openDevice();

                window.MagTekDevice = device;

                cardDataDispatch(
                    selectDevice( device )
                );
            }
            else
                console.log('device failed check:', device);
        }
        catch(err) {
            catchDisplayToUser(err);
        }
    }

    return (
        <>
            {(selectedDevice) ?
                <CardDataDisplay selectedDevice={ selectedDevice } pairDevice={ pairDevice } />
                :
                <NoPairedDevice pairDevice={ pairDevice } />
            }
        </>
    );
}