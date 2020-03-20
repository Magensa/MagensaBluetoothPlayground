import React from 'react';
import { whiteColor } from '../../../constants/styleConstants';

export const Equals = ({ begin, end }) => 
    <span style={whiteColor}>
        {(begin) ? ` =` 
            : (end) ?  `= ` : `=`}
    </span>