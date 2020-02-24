import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default ({ osDetails: 
    { osId, osName, minBrowserVersion, minOsVersion, behindFlag } 
}) => {

    return (
        <List>
            <ListItem>
                <ListItemText 
                    primary={`Browser version: >=${minBrowserVersion}`} 
                />
            </ListItem>
        </List>
    );
}