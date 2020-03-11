import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import CardDataLayout from '../../sharedComponents/cardDataLayout';
import {
    SwipePanel,
    InitializationPanel,
    EmvPanel
} from './operationPanels';

export default memo(({ trxHandler }) => {
    console.log(
        '%c Tip: You may access your paired `MagTekDevice` directly in this console. Be sure to prefix all function invocations with `await`', 
        'background: #78909c; color: #e1f5fe'
    );

    return (
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
    )
});