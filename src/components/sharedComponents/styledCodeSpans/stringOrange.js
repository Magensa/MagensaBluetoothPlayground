import React from 'react';
import PropTypes from 'prop-types';

const StringOrange = ({ children }) =>
    <span style={{color: '#ff9800'}}>{`"${children}"`}</span>;

    StringOrange.propTypes = {
    children: PropTypes.string.isRequired
};

export { StringOrange };