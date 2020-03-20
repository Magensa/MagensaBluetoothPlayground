import React from 'react';
import { whiteColor } from '../../../constants/styleConstants';

export const OpenParen = ({ begin, end }) =>
    <span style={whiteColor}>
        {(begin) ? ` (` 
        : (end) ?  `( ` : `(`}
    </span>