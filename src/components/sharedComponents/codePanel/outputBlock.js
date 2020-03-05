import React from 'react';
import { 
    Grid,
    Paper,
    makeStyles, 
    useTheme 
} from '@material-ui/core';
import { preStyling } from '../../../constants/styleConstants';
import LoadingWidget from './loadingWidget';

const outputStyles = makeStyles({
    outputBlock: ({ spacing, down, resultFullWidth }) => ({
        minHeight: (!resultFullWidth) ? spacing(38) : 0,
        width: '100%',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        marginLeft: (!resultFullWidth) ? spacing(1) : 0,
        [down('sm')]: {
            minHeight: 0,
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
    loadingStyles: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        transform: 'perspective(1px) translateY(-50%)',
        color: '#37474f'
    }
});

export default ({ outputVal, resultFullWidth, isLoading, loadingText }) => {
    const { spacing, breakpoints: { down } } = useTheme();
    const { loadingStyles, outputPre, outputPaper, outputBlock } = outputStyles({
        resultFullWidth,
        spacing,
        down,
        outputVal
    });

    return (
        <>
            {(typeof( outputVal ) === 'string') ?
                <Grid item xl={(resultFullWidth) ? 12 : 4} className={ outputBlock }>
                    {(!isLoading) ? 
                        <Paper className={ outputPaper }>
                            <pre className={ outputPre }>
                                <code>
                                    {outputVal}
                                </code>
                            </pre>
                        </Paper>
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