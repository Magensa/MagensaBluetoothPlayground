import React from 'react';
import PropTypes from 'prop-types';

const FuncYellow = ({ children }) => 
    <span style={{color: '#ffee58'}}>{children}</span>

    FuncYellow.propTypes = {
    children: PropTypes.string.isRequired
}

export { FuncYellow };