import React from 'react';
import PropTypes from 'prop-types';

const CommentGreen = ({ children }) => 
    <span style={{ color: '#66bb6a' }}>{children}</span>;

CommentGreen.propTypes = {
    children: PropTypes.string.isRequired
}

export { CommentGreen };