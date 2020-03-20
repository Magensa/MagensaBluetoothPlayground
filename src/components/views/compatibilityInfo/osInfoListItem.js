import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@material-ui/core';

const OsInfoListItem = ({ listFullWidth, children }) => 
    <ListItem divider disableGutters>
        <Typography 
            variant='body1' 
            component='p' 
            color='textSecondary' 
            align='center'
            className={ listFullWidth }
        >
            { children }
        </Typography>
    </ListItem>

OsInfoListItem.propTypes = {
    listFullWidth: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired
}

export default OsInfoListItem;