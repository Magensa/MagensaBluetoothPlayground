import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Button,
    Grid,
    makeStyles
} from '@material-ui/core';

import CodePanelLayout from '../codePanelLayout';
import OutPutBlock from './outputBlock';
import { codeBlockStyles, fullWidth } from '../../../constants/styleConstants';

const codePanelStyles = makeStyles(({ spacing, breakpoints: { down } }) => {
    const one = spacing(1);
    const two = spacing(2);

    return ({
        codeBlock: codeBlockStyles(spacing),
        btnJuxtapose: {
            flexBasis: 0,
            textAlign: 'center',
            marginTop:  two,
            marginBottom: one,
            ...fullWidth,
            [down('sm')]: {
                marginTop: one
            }
        },
        codeBlocksWrapper: { 
            flexBasis: 0,
            ...fullWidth
        },
        cancelButton: {
            backgroundColor: "#ffea00",
            marginLeft: two,
            '&:hover': {
                backgroundColor: "#ffd600"
            },
            [down('sm')]: {
                marginLeft: 0
            }
        },
        btnPadding: {
            padding: one
        }
    })
});


const CodePanel = props => {
    const { 
        children, 
        providedFunc,
        btnText, 
        btnDisclaimer,
        cancelText,
        cancelFunc,
        ...outputProps
    } = props;

    const {
        codeBlock,
        btnJuxtapose,
        codeBlocksWrapper,
        cancelButton,
        btnPadding
    } = codePanelStyles();

    return (
       <CodePanelLayout>
            <Grid 
                container 
                direction='column' 
                justify='center' 
                alignItems='center' 
                spacing={3}
            >
                <Grid item xs={11} lg={12} className={ codeBlocksWrapper }>
                    <Grid container direction="row" justify="center" spacing={3}>
                        <Grid item xl={(props.resultFullWidth) ? 10 : 7} className={ codeBlock }>
                            { children }
                        </Grid>
                        <OutPutBlock { ...outputProps } />
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
                        <Grid item className={btnPadding}>
                            <Button 
                                onClick={ providedFunc } 
                                variant='outlined' 
                                color="primary"
                            >
                                {btnText}
                            </Button>
                        </Grid>
                        {(props.isLoading && cancelText) &&
                            <Grid item className={ btnPadding }>
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
        </CodePanelLayout>
    );
}

CodePanel.propTypes = {
    children: PropTypes.node.isRequired,
    providedFunc: PropTypes.func.isRequired,
    outputVal: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    btnText: PropTypes.string.isRequired
};

export default CodePanel;