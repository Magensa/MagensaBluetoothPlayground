import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import CardDataLayout from '../../sharedComponents/cardDataLayout';
import {
    SwipePanel,
    InitializationPanel,
    EmvPanel
} from './operationPanels';

export default memo(({ trxHandler }) => 
    <CardDataLayout
        trxHandler={ trxHandler }
    >
        <>
            <Typography variant='h4' align='center' paragraph>
                Please expand a device operation for details
            </Typography>

            <InitializationPanel />
            <SwipePanel />
            <EmvPanel />
        </>
    </CardDataLayout>
);