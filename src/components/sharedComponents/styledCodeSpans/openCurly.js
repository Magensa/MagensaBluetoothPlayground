import React from 'react';
import { whiteColor } from '../../../constants/styleConstants';

export const OpenCurly = ({ begin, newLine }) =>
    <span style={whiteColor}>
        {(begin) ? ` {` 
        : (newLine) ?  `{
    ` : `{`}
    </span>