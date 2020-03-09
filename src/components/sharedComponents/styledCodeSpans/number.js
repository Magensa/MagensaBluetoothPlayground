import React from 'react';
import PropTypes from 'prop-types';

const Num = ({ children }) => <span style={{color: '#c5e1a5'}}>{children}</span>;

Num.propTypes = {
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

export { Num };