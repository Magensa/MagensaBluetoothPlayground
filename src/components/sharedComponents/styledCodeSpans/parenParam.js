import React from 'react';
import PropTypes from 'prop-types';
import { OpenParen } from './openParen';
import { CloseParen } from './closeParen';

const ParenParam = ({ children = "", semicolon }) => 
    <>
        <OpenParen />
            {children}
        <CloseParen semicolon={ semicolon } />
    </>

ParenParam.propTypes = {
    children: PropTypes.string,
    semicolon: PropTypes.bool
}

export { ParenParam };