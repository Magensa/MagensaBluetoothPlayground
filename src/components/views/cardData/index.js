import React from 'react';
import { useSelector } from 'react-redux';
import CardDataDisplay from './cardDataDisplay';
import NoPairedDevice from './noPairedDevice';


export default ({ trxHandler }) => {
    const selectedDevice = useSelector(state => state.selectedDevice);

    return (
        <>
            {(selectedDevice) ?
                <CardDataDisplay trxHandler={ trxHandler } />
                :
                <NoPairedDevice trxHandler={ trxHandler } />
            }
        </>
    );
}