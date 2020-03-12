import React from 'react';
import { List, ListItem, Divider, makeStyles, Typography } from '@material-ui/core';
import { fullWidth } from '../../../constants/styleConstants';

const osInfoListStyles = makeStyles({
    listFullWidth: fullWidth
});

export default ({ osDetails: 
    { osName, minBrowserVersion, minOsVersion, behindFlag, specialInstructions } 
}) => {

    const { listFullWidth } = osInfoListStyles();

    return (
        <List className={ listFullWidth }>
            <Divider />
            <ListItem divider disableGutters>
                <Typography 
                    variant='body1' 
                    component='p' 
                    color='textSecondary' 
                    align='center' 
                    className={ listFullWidth }
                >
                    <em>Browser version: </em>{`>=${minBrowserVersion}`}
                </Typography>
            </ListItem>
            <ListItem divider disableGutters>
                <Typography 
                    variant='body1' 
                    component='p' 
                    color='textSecondary' 
                    align='center'
                    className={ listFullWidth }
                >
                    <em>{`${osName} version: `}</em>{`>=${minOsVersion}`}
                </Typography>
            </ListItem>

            {behindFlag &&
                <ListItem divider disableGutters>
                    <Typography 
                        variant='body1' 
                        component='p' 
                        color='textSecondary' 
                        align='center'
                        className={ listFullWidth }
                    >
                        <em>WebBluetooth is behind flag: </em>{`${behindFlag}`}
                    </Typography>
                </ListItem>
            }

            {specialInstructions &&
                <ListItem divider disableGutters>
                    <Typography 
                        variant='body1' 
                        component='p' 
                        color='textSecondary' 
                        align='center'
                        className={ listFullWidth }
                    >
                        {specialInstructions}
                    </Typography>
                </ListItem>
            }

        </List>
    );
}