import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';

const deviceCardStyles = makeStyles(({ spacing }) => ({
    imgStyles: {
        height: spacing(21)
    },
    imgArea: {
        backgroundColor: "#eceff1",
        minWidth: spacing(22)
    }
}));

export default ({ pairDevice, deviceImg: { deviceName, imgPath, prefix } }) => {
    const { imgStyles, imgArea } = deviceCardStyles();

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