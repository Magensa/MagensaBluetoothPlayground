import React, { memo } from 'react';
import { Paper, makeStyles, Typography, Grid } from '@material-ui/core';
import DeviceConnection from './deviceConnection';
import PairButton from '../../sharedComponents/pairButton';
import RemoveDeviceBtn from './removeDeviceBtn';
import { flexBase } from '../../../constants/styleConstants';


const cardDataDisplayStyles = makeStyles(({ spacing, breakpoints }) => ({
    cardDataBtnWrapper: {
        ...flexBase,
        justifyContent: 'space-between',
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        margin: spacing(1),
        padding: spacing(1),
        [breakpoints.only('xs')]: {
            padding: 0,
            flexDirection: 'column-reverse',
            alignItems: 'center',
            height: spacing(18),
            justifyContent: 'space-around',
            marginBottom: spacing(2)
        },
        [breakpoints.only('sm')]: {
            padding: 0,
            flexDirection: "row",
            height: spacing(11),
            justifyContent: 'space-around',
            marginBottom: spacing(2)
        }
    },
    operationsWrapper: {
        padding: spacing(2),
        margin: spacing(2)
    }
}));


export default memo(({ selectedDevice, pairDevice }) => {
    const { cardDataBtnWrapper, operationsWrapper } = cardDataDisplayStyles();

    return (
        <>
            <div className={ cardDataBtnWrapper }>
                <PairButton pairDevice={ pairDevice } btnText="Pair another device" />
                <DeviceConnection selectedDevice={ selectedDevice } />
                <RemoveDeviceBtn />
            </div>
            <Grid container justify='center'>
                <Grid item xs={11}>
                    <Paper className={ operationsWrapper }>
                        <Typography>
                            Please expand a device operation for details
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
});