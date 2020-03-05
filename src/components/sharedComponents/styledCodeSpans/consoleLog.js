import React from 'react';
import PropTypes from 'prop-types';
import { FuncYellow } from './funcYellow';
import { StringOrange } from './stringOrange';
import { OpenParen } from './openParen';
import { CloseParen } from './closeParen';
import { whiteColor } from '../../../constants/styleConstants';

const ConsoleLog = ({ logString, logVar, isError }) => (
    <>
        <span style={{ color: "#00e676"}}>console</span>
        <span style={ whiteColor }>.</span>
        <FuncYellow>{(!isError) ? `log` : `error`}</FuncYellow>
        <OpenParen />

        {logString &&
            <>
                <StringOrange>{`"${logString}"`}</StringOrange>
                <span style={ whiteColor }>{`, `}</span>
            </>
        }
        
        <span>{logVar}</span>
        <CloseParen semicolon={true} />
    </>
);

ConsoleLog.propTypes = {
    logString: PropTypes.string,
    logVar: PropTypes.string.isRequired,
    isError: PropTypes.bool
}

export { ConsoleLog };