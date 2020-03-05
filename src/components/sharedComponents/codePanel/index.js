import React from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Button,
    Grid,
    Paper,
    makeStyles,
    useTheme,
    CircularProgress
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { preStyling } from '../../../constants/styleConstants';


const codePanelStyles = makeStyles({
    codeRoot: ({ spacing, down, fullWidth }) => ({
        marginTop: spacing(2),
        flex: '1 1 auto',
        width: '80%',
        alignSelf: 'center',
        [down('md')]: {
            width: fullWidth
        }
    }),
    smScreenPadding: ({ down }) => ({
        [down('sm')]: {
            padding: 0
        }
    }),
    showCodeStyles: {
        fontSize: ({ pxToRem }) => pxToRem(16)
    },
    codeBlock: {
        backgroundColor: '#455a64',
        color: '#b3e5fc',
        maxWidth: ({ spacing }) => spacing(94)
    },
    btnJuxtapose: ({ spacing, down }) => ({
        flexBasis: 0,
        textAlign: 'center',
        marginTop:  spacing(2),
        marginBottom: spacing(1),
        [down('sm')]: {
            marginTop: spacing(1)
        }
    }),
    outputBlock: ({ fullWidth, spacing, down, outputVal }) => ({
        minHeight: (outputVal) ? spacing(38) : 0,
        width: fullWidth,
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        [down('sm')]: {
            minHeight: 0
        }
    }),
    outputPaper: {
        backgroundColor: '#fffde7',
        color: "#ef6c00",
    },
    outputPre: ({ preStyling, spacing, outputVal }) => ({
        ...preStyling,
        padding: (outputVal) ? spacing(1) : 0,
        cursor: 'text'
    }),
    codeBlocksWrapper: { 
        flexBasis: 0,
        width: ({ fullWidth }) => fullWidth
    },
    loadingStyles: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        transform: 'perspective(1px) translateY(-50%)',
        color: '#37474f'
    }
});


const CodePanel = ({ 
    children, 
    providedFunc, 
    outputVal, 
    btnText, 
    btnDisclaimer, 
    isLoading, 
    loadingText,
    resultFullWidth
}) => {
    const { spacing, typography: { pxToRem }, breakpoints: { down } } = useTheme();
    /* 
        Configuration below feeds @material-ui/core's theme tools, in addition to component props into styles function.
        This is due to changes in padding to the 'output' panel, based on props.
        The output is destructured for use amongst the components below.
    */
    const {
        codeRoot, 
        smScreenPadding, 
        showCodeStyles, 
        codeBlock,
        btnJuxtapose,
        outputBlock,
        outputPre,
        codeBlocksWrapper,
        outputPaper,
        loadingStyles
    } = codePanelStyles({
        outputVal,
        spacing,
        pxToRem,
        down,
        fullWidth: '100%',
        preStyling
    });

    return (
        <ExpansionPanel className={ codeRoot }>
            <ExpansionPanelSummary
                expandIcon={ <CodeIcon /> }
            >
                <Typography variant='caption' className={ showCodeStyles }>
                    <strong>Show the Code!</strong>
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                classes={{
                    root: smScreenPadding
                }}
            >
                <Grid 
                    container 
                    direction='column' 
                    justify='center' 
                    alignItems='center' 
                    spacing={3}
                >
                    <Grid item xs={11} lg={12} className={ codeBlocksWrapper }>
                        <Grid container direction="row" justify="center" spacing={3}>
                            <Grid item xl={(resultFullWidth) ? 10 : 8} className={ codeBlock }>
                                { children }
                            </Grid>
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
                                    <div className={ loadingStyles }>
                                        {loadingText &&
                                            <Typography
                                                paragraph
                                                variant="body1"
                                            >
                                                <strong>{loadingText}</strong>
                                            </Typography>
                                        }
                                        <CircularProgress thickness={ 10 } size="5rem" color='inherit' />
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={ btnJuxtapose }>
                        {btnDisclaimer &&
                            <Typography 
                                gutterBottom 
                                color='textSecondary' 
                                variant='body1'
                            >
                                <em>{btnDisclaimer}</em>
                            </Typography>
                        }
                        <Button 
                            onClick={ providedFunc } 
                            variant='outlined' 
                            color="primary"
                        >
                            {btnText}
                        </Button>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

CodePanel.propTypes = {
    children: PropTypes.node.isRequired,
    providedFunc: PropTypes.func.isRequired,
    outputVal: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
};

export default CodePanel;