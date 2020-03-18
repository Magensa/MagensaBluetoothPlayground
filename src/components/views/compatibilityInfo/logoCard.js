import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    Typography,
    CardContent,
    CardMedia,
    makeStyles,
    Grid
} from '@material-ui/core';
import OsInfoPanel from './osInfoPanel';
import { flexBase } from '../../../constants/styleConstants';


const logoCardStyles = makeStyles(({ spacing }) => ({
    cardWrapper: {
        width: spacing(35),
        padding: spacing(1)
    },
    cardImg: {
        height: 150,
        width: 150
    },
    cardMediaStyle: flexBase,
    cardBtn: {
        ...flexBase,
        padding: 0
    }
}));


export default ({ title, LogoComponent, versionText, osSupport, setModalDetails }) => {

    const { cardWrapper, cardImg, cardMediaStyle, cardBtn } = logoCardStyles();

    return (
        <Card className={ cardWrapper }>
            <CardActionArea disableRipple disableTouchRipple>
                <CardMedia className={ cardMediaStyle }>
                    <div className={ cardImg }>
                        <LogoComponent />
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center'>
                        {title}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p" 
                        align='center'
                    >
                        {`Web Bluetooth supported as of version: ${versionText}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={ cardBtn } disableSpacing>
                <Grid container direction='column'>
                    {osSupport.map( eachOs => (
                        <OsInfoPanel { ...eachOs } key={ eachOs.osId } setModalDetails={ setModalDetails } />
                    ))}
                </Grid>
            </CardActions>
        </Card>
    );
}