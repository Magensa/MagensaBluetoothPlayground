import React from 'react';
import propTypes from 'prop-types';

const Num = ({ children }) => <span style={{color: '#c5e1a5'}}>{children}</span>;

Num.propTypes = {
    children: propTypes.number.isRequired
}

export { Num };