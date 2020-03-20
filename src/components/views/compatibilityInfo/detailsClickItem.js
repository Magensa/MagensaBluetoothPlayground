import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@material-ui/core';

const OsInfoListItem = ({ listFullWidth, clickHandler }) => 
    <ListItem 
        divider 
        disableGutters 
        button
        onClick={ clickHandler }
    >
        <Typography 
            color='textSecondary' 
            align='center'
            className={ listFullWidth }
        >
            <strong>Click For Specific Details</strong>
        </Typography>
    </ListItem>

OsInfoListItem.propTypes = {
    listFullWidth: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default OsInfoListItem;