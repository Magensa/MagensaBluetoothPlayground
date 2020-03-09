import React from 'react';
import PropTypes from 'prop-types';

const NewLine = ({ repetitions = 1 }) => {
    const newLine = `
`;

    return (
        <span>{newLine.repeat(repetitions)}</span>
    );
}

NewLine.propTypes = {
    repetitions: PropTypes.number
}

export { NewLine };