import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { scanForDevicesBrackets } from '../../../constants/messageTemplates';

const coloredCodeStyles = makeStyles(({ typography: { pxToRem } }) => ({
    coloredCode: {
        color: '#1a237e', 
        fontSize: pxToRem(18)
    }
}));

const ColoredCode = ({ children = scanForDevicesBrackets }) => {
    const { coloredCode } = coloredCodeStyles();

    return <code className={ coloredCode }>{` ${children} `}</code>
}

ColoredCode.propTypes = {
    children: PropTypes.string
}

export default ColoredCode;