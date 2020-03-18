import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography, Button } from '@material-ui/core';

const OsInfoListItem = ({ listFullWidth, clickHandler }) => 
    <ListItem divider disableGutters button>
        <Typography 
            variant='caption' 
            color='textSecondary' 
            align='center'
            component='h4'
            className={ listFullWidth }
            onClick={ clickHandler }
        >
            Click For Specific Details
        </Typography>
    </ListItem>

OsInfoListItem.propTypes = {
    listFullWidth: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default OsInfoListItem;