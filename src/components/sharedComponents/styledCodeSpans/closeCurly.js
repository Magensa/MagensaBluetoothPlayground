import React from 'react';
import { whiteColor } from '../../../constants/styleConstants';

export const CloseCurly = ({ begin, newLine }) =>
    <span style={whiteColor}>
        {(begin) ? ` }` 
        : (newLine) ?  `}
        ` : `}`}
    </span>