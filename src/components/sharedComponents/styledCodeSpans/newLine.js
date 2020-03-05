import React from 'react';

export const NewLine = ({ repititions = 1 }) => {
    const newLine = `
`;

    return (
        <span>{newLine.repeat(repititions)}</span>
    );
}