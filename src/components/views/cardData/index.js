import React from 'react';
import CardDataDisplay from './cardDataDisplay';
import NoPairedDevice from '../../sharedComponents/noPairedDevice';


export default ({ trxHandler, selectedDevice }) =>
    <>
        {(selectedDevice) ?
            <CardDataDisplay trxHandler={ trxHandler } />
            :
            <NoPairedDevice trxHandler={ trxHandler } />
        }
    </>