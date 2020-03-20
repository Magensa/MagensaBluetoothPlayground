import React from 'react';
import PropTypes from 'prop-types';

const KeywordPurple = ({ children, end }) =>
    <span style={{color: '#ba68c8'}}>{(!end ? children : `${children} `)}</span>;

KeywordPurple.propTypes = {
    children: PropTypes.string.isRequired,
    end: PropTypes.bool
};

export { KeywordPurple };