import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Chip,
    Typography,
    makeStyles
} from '@material-ui/core';


const deviceConnectionStyles = makeStyles(({ spacing, breakpoints }) => {
    let blueGrey = "#607d8b";
    let blueGreyBorder = "1px solid #455a64";
    let white = "white";

    return {
        chipStyles: {
            flex: '0 1 auto',
            minWidth: spacing(50),
            background: blueGrey,
            color: white,
            '&:hover': {
                background: "#90a4ae",
                border: blueGreyBorder,
                color: white
            },
            '&:focus': {
                background: blueGrey,
                border: blueGreyBorder,
                color: white
            },
            [breakpoints.down('sm')]: {
                minWidth: spacing(18)
            }
        }
    }
});

export default ({ selectedDevice }) => {
    const [ isOpen, setIsOpen ] = useState(() => false);
    const [ changingDeviceState, setChangingDeviceState ] = useState(() => false);
    const cardData = useSelector(state => state.cardData);
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
    
                if (isOpen !== currentConnection)
                    setIsOpen(currentConnection);
            }
        }
    }, [selectedDevice, isOpen, setIsOpen, cardData]);

    return (selectedDevice) ? 
        <Chip 
            label={
                <Typography variant='body2' color='inherit'>
                    { (changingDeviceState) ? `${(isOpen ? 'Disconnecting...' : 'Connecting...')}` : 
                        `Device: ${selectedDevice.name} is ${(isOpen ? 'Connected' : 'Disconnected')}` 
                    }
                </Typography>
            }
            onClick={ toggleConnection }
            disabled={ changingDeviceState }
            className={ chipStyles }
        />
        : null
}