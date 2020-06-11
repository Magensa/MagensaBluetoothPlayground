import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { githubLink } from '../../../constants';

export default ({ sublink }) =>
    <Typography gutterBottom variant='subtitle1'>
        {`You can view the full API `}
        <Link color="textSecondary" href={ (!sublink) ? githubLink : `${githubLink}#${sublink}` }>
            here
        </Link> 
        {` for more configuration options.`}
    </Typography>