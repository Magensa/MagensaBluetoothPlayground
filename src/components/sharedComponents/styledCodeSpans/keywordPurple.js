import React from 'react';
import PropTypes from 'prop-types';

const KeywordPurple = ({ children }) =>
    <span style={{color: '#ba68c8'}}>{children}</span>;

KeywordPurple.propTypes = {
    children: PropTypes.string.isRequired
};

export { KeywordPurple };