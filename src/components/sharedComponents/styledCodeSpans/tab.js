import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ repetitions = 1 }) => {
    const tabSpace = `    `;

    return (
        <span>{tabSpace.repeat(repetitions)}</span>
    );
}

Tab.propTypes = {
    repetitions: PropTypes.number
}

export { Tab };