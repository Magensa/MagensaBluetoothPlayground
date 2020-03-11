import React from 'react';
import CardDataLayout from '../../sharedComponents/cardDataLayout';
import Typography from '@material-ui/core/Typography';

export default ({ trxHandler }) => {

    return (
        <CardDataLayout
            trxHandler={trxHandler}
        >
            <Typography variant='h4' align='center' paragraph>
                Please expand a device operation for details
            </Typography>
        </CardDataLayout>
    )
}