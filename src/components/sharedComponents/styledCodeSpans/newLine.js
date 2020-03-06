import React from 'react';
import PropTypes from 'prop-types';

const NewLine = ({ repititions = 1 }) => {
    const newLine = `
`;

    return (
        <span>{newLine.repeat(repititions)}</span>
    );
}

NewLine.propTypes = {
    repititions: PropTypes.number
}

export { NewLine };