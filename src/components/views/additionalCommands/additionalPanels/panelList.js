import React, { useState } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

const returnTypes = [
    {
        id: 1001,
        liText: "Success (success object returned)"
    },
    {
        id: 1002,
        liText: "Handled Exception (status object returned, detailing the failure encountered)"
    },
    {
        id: 1003,
        liText: "Unhandled Exception (Failure upstream from the library that threw an exception, and is rethrown to the caller)"
    }
];

export default ({ noHandled }) => {
    const [ returnText ] = useState(() => (!noHandled) ? 
        (returnTypes) : (returnTypes.filter( ({id}) => id !== 1002))
    );

    return (
        <List dense disablePadding>
            {returnText.map( ({ id, liText }) =>
                <ListItem key={ id }>
                    <Typography variant='subtitle2' color="textSecondary">{liText}</Typography>
                </ListItem>
            )}
        </List>
    );
}