import React from 'react';
import { whiteColor } from '../../../constants/styleConstants';

export const CloseParen = ({ begin, end, semicolon }) =>
    <span style={whiteColor}>
        {(begin) ? ` )` 
        : (end) ? `) ` 
            : (semicolon) ? `);` : `)`}
    </span>;