import React from 'react';
import PropTypes from 'prop-types';
import {
    StringOrange,
    Tab,
    Colon,
    NewLine,
    Comma
} from '../../../../../sharedComponents/styledCodeSpans';
import { space } from '../../../../../../constants/messageTemplates';


const ObjectProps = ({ repititions, propName, propVal }) => 
    <>
        <Tab repititions={ repititions }/>
        {propName}
        <Colon />
        {space}
        {(typeof( propVal ) === 'string') ? 
            <StringOrange>{propVal}</StringOrange>
            :
            propVal
        }
        <Comma />
        <NewLine />
    </>;

ObjectProps.propTypes = {
    propVal: PropTypes.number,
    propName: PropTypes.string.isRequired,
    propVal: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

export default ObjectProps;