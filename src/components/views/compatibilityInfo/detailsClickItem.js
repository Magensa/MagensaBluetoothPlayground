import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@material-ui/core';

const OsInfoListItem = ({ listFullWidth, clickHandler }) => 
    <ListItem divider disableGutters>
        <Typography 
            variant='caption' 
            component='p' 
            color='textSecondary' 
            align='center'
            className={ listFullWidth }
            onClick={ clickHandler }
        >
            Click For Details
        </Typography>
    </ListItem>

OsInfoListItem.propTypes = {
    listFullWidth: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired
}

export default OsInfoListItem;