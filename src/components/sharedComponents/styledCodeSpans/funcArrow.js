import React from 'react';
import { constBlue } from '../../../constants/styleConstants';

export const FuncArrow = ({ begin, end }) =>
    <span style={constBlue}>
        {(begin) ? ` =>` 
        : (end) ?  `=> ` : `=>`}
    </span>