import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import useScreenSize from '../../customHooks/useScreenSize';
import { clearDevice } from '../../../redux/actions';

export default _ => {
    const selectedDevice = useSelector(state => state.selectedDevice);
    const removeDeviceDispatch = useDispatch();
    const { isSmallScreen } = useScreenSize();
    
    const removeDevice = async() => {
        if (selectedDevice && selectedDevice.hasOwnProperty("deviceInterface")) 
            await selectedDevice.deviceInterface.closeDevice();

        return void removeDeviceDispatch( clearDevice() );
    }

    return (
        <Button 
            onClick={ removeDevice } 
            color='secondary' 
            variant="contained" 
            size={(!isSmallScreen) ? "medium" : "small"}
        >
            Remove Current Device
        </Button>
    );
}