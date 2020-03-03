import React, { memo } from 'react';
import { Paper, makeStyles, Typography, Grid } from '@material-ui/core';
import DeviceConnection from './deviceConnection';
import PairButton from '../../sharedComponents/pairButton';
import RemoveDeviceBtn from './removeDeviceBtn';
import {
    SwipePanel,
    InitializationPanel
} from './operationPanels';


const cardDataDisplayStyles = makeStyles(({ spacing, breakpoints: { only } }) => ({
    cardDataBtnWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        margin: spacing(1),
        padding: spacing(1),
        [only('xs')]: {
            padding: 0,
            margin: 0,
            flexDirection: 'column-reverse',
            alignItems: 'center',
            height: spacing(18),
            justifyContent: 'space-around',
            marginBottom: spacing(2)
        },
        [only('sm')]: {
            padding: 0,
            margin: 0,
            flexDirection: "row",
            height: spacing(11),
            justifyContent: 'space-around',
            marginBottom: spacing(2)
        }
    },
    operationsWrapper: {
        padding: spacing(2),
        margin: spacing(2),
        [only('xs')]: {
            padding: spacing(1),
            margin: spacing(1)
        }
    }
}));


export default memo(({ selectedDevice, pairDevice }) => {
    const { cardDataBtnWrapper, operationsWrapper } = cardDataDisplayStyles();

    console.log(
        '%c Tip: You may access your paired `MagTekDevice` directly in this console. Be sure to prefix all function invocations with `await`', 
        'background: #78909c; color: #e1f5fe'
    );

    return (
        <>
            <div className={ cardDataBtnWrapper }>
                <PairButton pairDevice={ pairDevice } btnText="Pair another device" />
                <DeviceConnection selectedDevice={ selectedDevice } />
                <RemoveDeviceBtn />
            </div>

            <Grid container justify='center'>
                <Grid item xs={12} lg={11} xl={11}>
                    <Paper className={ operationsWrapper }>
                        <Typography variant='h4' align='center'>
                            Please expand a device operation for details
                        </Typography>

                        <InitializationPanel />
                        <SwipePanel />

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
});