import React from 'react';
import PropTypes from 'prop-types';
import { ConstBlue } from './constBlue';
import { FuncYellow } from './funcYellow';
import { Equals } from './equals';
import { ParenParam } from './parenParam';
import { FuncArrow } from './funcArrow';
import { space, callBackData, mainCallback } from '../../../constants/messageTemplates';

const FuncDeclare = ({ funcName, paramName }) =>
    <>
        <ConstBlue>const </ConstBlue>
        <FuncYellow>{(funcName || mainCallback)}</FuncYellow>
        {space}
        <Equals end={true}/>
        {(typeof( paramName ) === 'boolean') ? 
            <ParenParam /> 
            : 
            <ParenParam>
                {(paramName || callBackData)}
            </ParenParam>
        }
        <FuncArrow begin={true} />
    </>

FuncDeclare.propTypes = {
    funcName: PropTypes.string,
    paramName: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ])
}

export { FuncDeclare };
    