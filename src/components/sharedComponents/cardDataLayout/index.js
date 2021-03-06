import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Grid,
    Paper
} from '@material-ui/core';

import PairButton from '../pairButton';
import DeviceConnection from './deviceConnection';
import RemoveDeviceBtn from './removeDeviceBtn';
import OperationsNav from './operationsNavBar';
import ScrollButton from '../../helperComponents/scrollButton';
import { fullWidth } from '../../../constants/styleConstants';

const cardDataLayoutStyles = makeStyles(({ spacing, breakpoints: { only } }) => {
    const one = spacing(1);
    const two = spacing(2);

    return ({
        cardDataBtnWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: "row",
            flexWrap: 'wrap',
            ...fullWidth,
            margin: one,
            padding: one,
            [only('xs')]: {
                padding: 0,
                margin: 0,
                flexDirection: 'column-reverse',
                alignItems: 'center',
                height: spacing(18),
                justifyContent: 'space-around',
                marginBottom: two
            },
            [only('sm')]: {
                padding: 0,
                margin: 0,
                flexDirection: "row",
                height: spacing(11),
                justifyContent: 'space-around',
                marginBottom: two
            }
        },
        operationsWrapper: {
            padding: two,
            margin: two,
            [only('xs')]: {
                padding: one,
                margin: one
            }
        },
        bottomMargin: {
            marginBottom: spacing(5),
            [only('xs')] : {
                marginBottom: spacing(8)
            }
        }
    })
});


const CardDataLayout = ({ children, trxHandler }) => {
    const { operationsWrapper, cardDataBtnWrapper, bottomMargin } = cardDataLayoutStyles();

    return (
        <>
            <div className={ cardDataBtnWrapper } id="top-anchor">
                <PairButton trxHandler={ trxHandler } btnText="Pair another device" />
                <DeviceConnection />
                <RemoveDeviceBtn />
            </div>

            <Grid container justify='center' className={ bottomMargin }>
                <Grid item xs={12} lg={11} xl={11}>
                    <Paper className={ operationsWrapper }>
                        <OperationsNav />
                        {children}
                    </Paper>
                    <ScrollButton />
                </Grid>
            </Grid>
        </>
    );
}

CardDataLayout.propTypes = {
    trxHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default CardDataLayout;