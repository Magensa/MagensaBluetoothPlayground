import React from 'react';
import PropTypes from 'prop-types';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Button,
    Grid,
    makeStyles
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

import OutPutBlock from './outputBlock';

const codePanelStyles = makeStyles(({ 
    spacing, 
    breakpoints: { down }, 
    typography: { pxToRem } 
}) => {
    const fullWidth = '100%';

    return ({
        codeRoot: {
            marginTop: spacing(2),
            flex: '1 1 auto',
            width: '80%',
            alignSelf: 'center',
            [down('md')]: {
                width: fullWidth
            }
        },
        smScreenPadding: {
            [down('sm')]: {
                padding: 0
            }
        },
        showCodeStyles: {
            fontSize: pxToRem(16)
        },
        codeBlock: {
            backgroundColor: '#455a64',
            color: '#b3e5fc',
            maxWidth: spacing(94)
        },
        btnJuxtapose: {
            flexBasis: 0,
            textAlign: 'center',
            marginTop:  spacing(2),
            marginBottom: spacing(1),
            width: fullWidth,
            [down('sm')]: {
                marginTop: spacing(1)
            }
        },
        codeBlocksWrapper: { 
            flexBasis: 0,
            width: fullWidth
        },
        cancelButton: {
            backgroundColor: "#ffea00",
            marginLeft: spacing(2),
            '&:hover': {
                backgroundColor: "#ffd600"
            }
        }
    })
});


const CodePanel = props => {
    const { 
        children, 
        providedFunc,
        btnText, 
        btnDisclaimer,
        resultFullWidth,
        cancelText,
        cancelFunc,
        ...outputProps
    } = props;

    const {
        codeRoot, 
        smScreenPadding, 
        showCodeStyles, 
        codeBlock,
        btnJuxtapose,
        codeBlocksWrapper,
        cancelButton
    } = codePanelStyles();

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
                            <OutPutBlock 
                                { ...outputProps }
                                resultFullWidth={ resultFullWidth }
                            />
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
                        <Grid container justify="center">
                            <Grid item>
                                <Button 
                                    onClick={ providedFunc } 
                                    variant='outlined' 
                                    color="primary"
                                >
                                    {btnText}
                                </Button>
                            </Grid>
                            {(props.isLoading && cancelText) &&
                                <Grid item >
                                    <Button 
                                        variant='contained'
                                        onClick={ cancelFunc }
                                        classes={{
                                            contained: cancelButton
                                        }}
                                    >
                                        {cancelText}
                                    </Button>
                                </Grid>
                            }
                        </Grid>
                        
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

CodePanel.propTypes = {
    children: PropTypes.node.isRequired,
    providedFunc: PropTypes.func.isRequired,
    outputVal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    btnText: PropTypes.string.isRequired
};

export default CodePanel;