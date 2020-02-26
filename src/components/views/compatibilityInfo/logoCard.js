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
        minHeight: 150,
        minWidth: 150
    },
    cardMediaStyle: flexBase,
    cardBtn: {
        ...flexBase,
        padding: 0
    }
}));


export default ({ cardContent: 
    { title, LogoComponent, versionText, osSupport }
}) => {

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
                        <OsInfoPanel osInfo={ eachOs } key={ eachOs.osId } />
                    ))}
                </Grid>
            </CardActions>
        </Card>
    );
}