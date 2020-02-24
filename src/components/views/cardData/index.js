import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scanForDevices } from 'magensa-bluetooth';
import { catchAndDisplay } from '../../../utils/helperFunctions';
import { selectDevice } from '../../../redux/actions';
import Grid from '@material-ui/core/Grid';
import CardDataDisplay from './cardDataDisplay';
import NoPairedDevice from './noPairedDevice';

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
        <Grid container>
            {(selectedDevice) ?
                <CardDataDisplay selectedDevice={ selectedDevice } />
                :
                <NoPairedDevice pairDevice={ pairDevice } />
            }
        </Grid>
    ); 
        
}