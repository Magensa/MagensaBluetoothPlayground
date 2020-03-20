import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import usePairDevice from '../../customHooks/usePairDevice';

const deviceCardStyles = makeStyles(({ spacing }) => ({
    imgStyles: {
        height: spacing(21)
    },
    imgArea: {
        backgroundColor: "#eceff1",
        minWidth: spacing(22)
    }
}));

const DeviceCard = ({ trxHandler, deviceImg: { deviceName, imgPath, prefix } }) => {
    const { imgStyles, imgArea } = deviceCardStyles();
    const pairDevice = usePairDevice({ trxHandler })

    return (
        <Grid item>
            <Card raised className={ imgArea }>
                <CardActionArea disableRipple disableTouchRipple onClick={ pairDevice(prefix) }>
                    <CardMedia 
                        image={ imgPath }
                        className={ imgStyles }
                    />
                    <CardContent>
                        <Typography align='center' gutterBottom variant="h6">
                            {deviceName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>   
        </Grid>
    );
}

DeviceCard.propTypes = {
    trxHandler: PropTypes.func.isRequired,
    deviceImg: PropTypes.object.isRequired
}

export default DeviceCard;