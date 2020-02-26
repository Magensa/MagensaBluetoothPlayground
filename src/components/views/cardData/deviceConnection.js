import React, { useState, useEffect } from 'react';
import {
    Chip,
    Typography,
    makeStyles
} from '@material-ui/core';


const deviceConnectionStyles = makeStyles(({ spacing }) => ({
    chipStyles: {
        minWidth: spacing(50),
        background: "rgba(1, 82, 111, 0.8)",
        color: 'white',
        '&:hover': {
            background: "rgba(1, 82, 111, .50)",
            border: "1px solid #01526f",
            color: "white"
        },
        '&:focus': {
            background: "rgba(1, 82, 111, 0.8)",
            border: "1px solid #01526f",
            color: "white"
        }
    }
}))


export default ({ selectedDevice }) => {
    const [ isOpen, setIsOpen ] = useState(() => false);
    const [ changingDeviceState, setChangingDeviceState ] = useState(() => false);
    const { chipStyles } = deviceConnectionStyles();

    const toggleConnection = async _ => {
        if (selectedDevice) {
            if (selectedDevice.hasOwnProperty('deviceInterface')) {
                setChangingDeviceState(true);

                try {
                    let toggleOpenResp = (isOpen) ? 
                        await selectedDevice.deviceInterface.closeDevice() 
                        : await selectedDevice.deviceInterface.openDevice();

                    if (toggleOpenResp.code === 0) {
                        setIsOpen(!isOpen);
                    }
                }
                catch(err) {
                    console.warn("Error encountered while trying to open device. Error details below:")
                    console.error(err);
                    setIsOpen(false);
                }
               
                return setChangingDeviceState(false);
            }
        }
    }

    useEffect(() => {
        if (selectedDevice) {
            if (selectedDevice.hasOwnProperty('deviceInterface')) {
                let currentConnection = selectedDevice.deviceInterface.isDeviceOpen();
    
                if (isOpen !== currentConnection) {
                    setIsOpen(currentConnection)
                }
            }
        }
    }, [selectedDevice, isOpen, setIsOpen]);

    return (selectedDevice) ? 
        <Chip 
            label={
                <Typography variant='body2' color='textPrimary'>
                    { (changingDeviceState) ? `${(isOpen ? 'Disconnecting....' : 'Connecting....')}` : 
                        `Selected Device: ${selectedDevice.name} is ${(isOpen ? 'Connected' : 'Disconnected')}` 
                    }
                </Typography>
            }
            onClick={ toggleConnection }
            disabled={ changingDeviceState }
            className={ chipStyles }
        />
        : null
}