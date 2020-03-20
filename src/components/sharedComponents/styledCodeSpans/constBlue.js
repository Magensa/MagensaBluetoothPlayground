import React from 'react';
import PropTypes from 'prop-types';
import { constBlue } from '../../../constants/styleConstants';

const ConstBlue = ({ children }) =>
    <span style={constBlue}>{(children || `const `)}</span>;

    ConstBlue.propTypes = {
    children: PropTypes.string
};

export { ConstBlue };