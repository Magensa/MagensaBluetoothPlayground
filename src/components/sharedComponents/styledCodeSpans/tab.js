import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ repitions = 1 }) => {
    const tabSpace = `    `;

    return (
        <span>{tabSpace.repeat(repitions)}</span>
    );
}

Tab.propTypes = {
    repitions: PropTypes.number
}

export { Tab };