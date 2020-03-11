import React from 'react';
import PropTypes from 'prop-types';
import { Link as RrLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const OperationsLink = ({ linkPath, children, opLinkStyles }) => 
    <Link 
        component={ RrLink }
        to={ linkPath }
        color="textSecondary"
        className={ opLinkStyles }
        underline='none'
        variant='h6'
    >
        { children }
    </Link>

OperationsLink.propTypes = {
    linkPath: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    opLinkStyles: PropTypes.string.isRequired
}

export default OperationsLink;