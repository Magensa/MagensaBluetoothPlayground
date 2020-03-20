import React from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles } from '@material-ui/core';
import { preStyling } from '../../../constants/styleConstants';

const outputPaperStyles = makeStyles(({ spacing }) => ({
    outputPaper: {
        backgroundColor: '#fffde7',
        color: "#ef6c00"
    },
    outputPre: {
        ...preStyling,
        padding: spacing(1),
        cursor: 'text'
    },
}));

const OutputPaper = ({ outputVal }) => {
    const { outputPaper, outputPre } = outputPaperStyles();

    return (
        <Paper className={ outputPaper }>
            {outputVal &&
                <pre className={ outputPre }>
                    <code>
                        {outputVal}
                    </code>
                </pre>
            }
        </Paper>
    );
}

OutputPaper.propTypes = {
    outputVal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired
}

export default OutputPaper;