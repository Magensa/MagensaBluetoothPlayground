import React from 'react';
import { List, ListItem, Divider, makeStyles, Typography } from '@material-ui/core';

const osInfoListStyles = makeStyles(({ spacing }) => ({
    listWrapper: {
        width: '100%'
    },
    liText: {
        width: '100%'
    }
}));

export default ({ osDetails: 
    { osId, osName, minBrowserVersion, minOsVersion, behindFlag } 
}) => {

    const { listWrapper, liText } = osInfoListStyles();

    return (
        <List className={ listWrapper }>
            <Divider />
            <ListItem divider disableGutters>
                <Typography 
                    variant='body1' 
                    component='p' 
                    color='textSecondary' 
                    align='center' 
                    className={ liText }
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
                    className={ liText }
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
                        className={ liText }
                    >
                        <em>WebBluetooth is behind flag: </em>{`${behindFlag}`}
                    </Typography>
                </ListItem>
            }

        </List>
    );
}