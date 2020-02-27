import React from 'react';
import { 
    Paper, 
    makeStyles, 
    Typography, 
    Grid, 
    Divider 
} from '@material-ui/core';
import PairButton from '../../sharedComponents/pairButton';
import DeviceCard from './deviceCard';
import { flexBase } from '../../../constants/styleConstants';
import { deviceImages } from '../../../constants';

const noPairedDeviceStyles = makeStyles(({ spacing }) => ({
    noDeviceWrapper: {
        margin: spacing(2),
        padding: spacing(1)
    },
    noDevicePaper: {
        padding: spacing(4),
        margin: spacing(2),
        backgroundColor: '#eceff1',
        ...flexBase,
        flexDirection: 'column'
    },
    supportedBanner: {
        marginBottom: spacing(3),
        marginTop: -spacing(1),
        padding: spacing(1)
    },
    dividerStyles: {
        height: spacing(1),
        paddingTop: spacing(1),
        paddingLeft: '15%',
        '& hr': {
            width:'85%'
        }
    }
}));

export default ({ pairDevice }) => {
const { noDeviceWrapper, noDevicePaper, supportedBanner, dividerStyles } = noPairedDeviceStyles();
    return (
        <Grid 
            container 
            className={ noDeviceWrapper } 
            justify='center' 
            alignItems='center'
            direction='column'
            spacing={2}
            wrap='nowrap'
        >
            <Grid item xs={12} lg={8} xl={6}>
                <Paper 
                    elevation={2} 
                    className={ noDevicePaper }
                >
                    <Typography variant='h6' align="center" paragraph>
                        Please pair a MagTek® device to get started
                    </Typography>
                    <PairButton pairDevice={ pairDevice } btnText="Pair Device" />
                </Paper>
            </Grid>

            <Grid item xs={12} lg={8} xl={6}>
                <Paper 
                    elevation={2} 
                    className={ noDevicePaper }
                >
                    <Paper className={ supportedBanner }>
                        <Typography variant='h5' align="center">
                            <em>Currently Supported Devices</em>
                        </Typography>
                        <div className={ dividerStyles }>
                            <Divider />
                        </div>
                        <Typography align="center">
                            You may click a device to scan for that device type only
                        </Typography>
                    </Paper>
                    
                    <Grid container spacing={4} justify='center'>
                        {deviceImages.map( deviceImg => 
                            <DeviceCard 
                                key={ deviceImg.deviceName }
                                deviceImg={ deviceImg }  
                                pairDevice={ pairDevice } 
                            />
                        )}
                    </Grid>

                </Paper>
            </Grid>
        </Grid>
    );
}

