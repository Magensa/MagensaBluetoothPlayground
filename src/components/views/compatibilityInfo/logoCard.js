import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    Typography,
    CardContent,
    CardMedia,
    makeStyles,
    Button
} from '@material-ui/core';


const logoCardStyles = makeStyles(({ spacing }) => ({
    cardWrapper: {
        width: spacing(40),
        padding: spacing(1),
        margin: spacing(2)
    },
    cardImg: {
        height: 250,
        width: 250
    },
    cardMediaStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));


export default ({ cardContent: 
    { title, LogoComponent, versionText, osSupport }
}) => {
    const { cardWrapper, cardImg, cardMediaStyle, cardBtn } = logoCardStyles();

    return (
        <Card className={ cardWrapper }>
            <CardActionArea>
                <CardMedia className={ cardMediaStyle }>
                    <div className={ cardImg }>
                        <LogoComponent />
                    </div>
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" align='center'>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`Web Bluetooth supported as of version: ${versionText}`}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={ cardBtn }>
                <Button>
                    Click for details
                </Button>
            </CardActions>
        </Card>
    );
}