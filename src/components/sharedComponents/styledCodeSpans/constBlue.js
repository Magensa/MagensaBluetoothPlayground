import React from 'react';
import PropTypes from 'prop-types';

const ConstBlue = ({ children }) =>
    <span style={{color: '#1e88e5'}}>{children}</span>;

    ConstBlue.propTypes = {
    children: PropTypes.string.isRequired
};

export { ConstBlue };