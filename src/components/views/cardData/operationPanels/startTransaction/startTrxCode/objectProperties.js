import React from 'react';
import PropTypes from 'prop-types';
import {
    StringOrange,
    Tab,
    Colon,
    NewLine,
    Comma,
    Num
} from '../../../../../sharedComponents/styledCodeSpans';
import { space } from '../../../../../../constants/messageTemplates';


const ObjectProps = ({ repetitions, propName, propVal }) => 
    <>
        <Tab repetitions={ repetitions }/>
        {propName}
        <Colon />
        {space}
        {(typeof( propVal ) === 'string') ? 
            <StringOrange>{propVal}</StringOrange>
            :
            <Num>{propVal}</Num>
        }
        <Comma />
        <NewLine />
    </>;

ObjectProps.propTypes = {
    propName: PropTypes.string.isRequired,
    propVal: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

export default ObjectProps;