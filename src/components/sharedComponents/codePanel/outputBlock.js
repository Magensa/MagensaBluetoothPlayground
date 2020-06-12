import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { 
    Grid,
    Paper,
    makeStyles, 
    useTheme 
} from '@material-ui/core';
import PropTypes from 'prop-types';
import LoadingWidget from '../loadingWidget';
import OutputPaper from '../outputPaper';
import { preStyling, fullWidth, loadingStyleBase } from '../../../constants/styleConstants';
import { additionalOps } from '../../../constants';

const outputStyles = makeStyles({
    outputBlock: ({ spacing, down, resultFullWidth }) => ({
        minHeight: 0,
        ...fullWidth,
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        marginLeft: (!resultFullWidth) ? spacing(1) : 0,
        [down('sm')]: {
            marginLeft: 0
        }
    }),
    outputPaper: {
        backgroundColor: '#fffde7',
        color: "#ef6c00",
    },
    outputPre: ({ spacing, outputVal }) => ({
        ...preStyling,
        padding: (outputVal) ? spacing(1) : 0,
        cursor: 'text'
    }),
    loadingStyles: ({ isAddCmdRoute }) => (!isAddCmdRoute) ? 
    loadingStyleBase : ({
        ...loadingStyleBase,
        transform: 'perspective(1px) translateY(-50%)'
    })
});

const OutputBlock = ({ outputVal, resultFullWidth, isLoading, loadingText }) => {
    const { spacing, breakpoints: { down } } = useTheme();

    const isAddCmdRoute = useRouteMatch({
        path: additionalOps,
        strict: true,
        sensitive: true
    });
    
    const { loadingStyles, outputPre, outputPaper, outputBlock } = outputStyles({
        resultFullWidth,
        spacing,
        down,
        outputVal,
        isAddCmdRoute
    });

    return (
        <>
            {(typeof( outputVal ) === 'string') ?
                <Grid item xl={(resultFullWidth) ? 12 : 4} className={ outputBlock }>
                    {(!isLoading) ? 
                        <OutputPaper outputVal={ outputVal } />
                        :
                        <LoadingWidget 
                            loadingStyles={ loadingStyles }
                            loadingText={ loadingText }
                        />
                    }
                </Grid>
                :
                <>
                    {
                        [
                            { id: 98, val: outputVal[0] }, 
                            { id: 99, val: outputVal[1] }
                        ].map(({ id, val }) =>
                            <Grid key={id} item xl={(resultFullWidth) ? 12 : 4} className={ outputBlock }>
                                {(val) ?
                                    <Paper className={ outputPaper }>
                                        <pre className={ outputPre }>
                                            <code>
                                                {val}
                                            </code>
                                        </pre>
                                    </Paper>
                                    : (isLoading) ?
                                        <LoadingWidget 
                                            key={ id }
                                            loadingStyles={ loadingStyles }
                                            loadingText={ loadingText }
                                        />
                                        :
                                        null
                                }
                            </Grid>
                        )
                    }
                </>
            }
        </>
    );
}


OutputBlock.propTypes = {
    outputVal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired, 
    resultFullWidth: PropTypes.bool, 
    isLoading: PropTypes.bool.isRequired, 
    loadingText: PropTypes.string.isRequired
}


export default OutputBlock;