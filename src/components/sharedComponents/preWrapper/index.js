import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { preStyling } from '../../../constants/styleConstants';

const initializeCodeStyles = makeStyles({
    preTagStyles: preStyling
});

const PreWrapper = ({ children }) => {
    const preStyles = initializeCodeStyles().preTagStyles;

    return (
        <pre className={ preStyles }>
            <code>
                {children}
            </code>
        </pre>
    );
}

PreWrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired
};

export default PreWrapper;