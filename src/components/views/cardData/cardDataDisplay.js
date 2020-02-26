import React from 'react';
import DeviceConnection from './deviceConnection';


export default ({ selectedDevice }) => {
    return (
        <>
            <DeviceConnection selectedDevice={ selectedDevice } />
            <h1>Card Data with device {`${selectedDevice.name}`} {console.log('selectedDevice', selectedDevice)}</h1>
        </>
    )
}