import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    Grid,
    makeStyles,
    Button
} from '@material-ui/core';
import clsx from 'clsx';
import SendCmdCode from './sendCmdCode';
import SendCmdCodeText from './sendCmdCodeText';
import SendCmdOutput from './sendCmdOutput';
import { CodePanelLayout } from '../../sharedComponents';
import { fullWidth, codeBlockStyles } from '../../../constants/styleConstants';

const sendCmdStyles = makeStyles(({ spacing, breakpoints: { down } }) => ({
    codeBlock: {
        ...codeBlockStyles(spacing),
        padding: spacing(1)
    },
    wrapperFullWidth: fullWidth,
    inputWrapper: {
        marginTop: spacing(1)
    },
    loadingStyles: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        color: '#37474f',
        padding: spacing(1)
    },
    outputBlock: {
        minHeight: 0,
        marginBottom: spacing(3),
        [down('sm')]: {
            marginLeft: 0,
            ...fullWidth
        }
    }
}));

const SendCmdDisplay = ({ sendDeviceCommand, children, ...outputProps }) => {
    const { codeBlock, wrapperFullWidth, inputWrapper, loadingStyles, outputBlock } = sendCmdStyles();

    return (
        <>
            <Grid item xl={8} md={10}>
                <Grid container justify='center' alignItems='center'>
                    <CodePanelLayout>
                        <Grid container justify='center' alignItems='center'>
                            <Grid item xs={11} md={12}>
                                 <SendCmdCodeText />
                            </Grid>
                           
                            <Grid item className={ codeBlock }>
                                <SendCmdCode />
                            </Grid>

                        </Grid>
                    </CodePanelLayout>
                </Grid>
            </Grid>

            <Grid 
                container 
                justify="center" 
                alignItems="center" 
                direction="column" 
                className={ clsx(inputWrapper, wrapperFullWidth) }
                spacing={2}
            >
                <Grid item xs={11} className={ wrapperFullWidth }>
                    <Typography paragraph variant='subtitle1' align='center'>
                        <em>
                            For demonstration purposes, both the input and output are in hex format. Be aware that when this function is 
                            implemented in code, this function accepts either hex string or array of numbers.
                        </em>
                    </Typography>
                </Grid>

                <Grid item xs={11} xl={5} className={ wrapperFullWidth }>
                   {children}
                </Grid>

                <Grid item xs={12}>
                    <Button
                        onClick={ sendDeviceCommand }
                        variant='outlined'
                        color='primary'
                    >
                        sendCommand()
                    </Button>
                </Grid>

                <SendCmdOutput 
                    loadingStyles={ loadingStyles }
                    outputBlock={ outputBlock }
                    { ...outputProps } 
                />

            </Grid>
        </>
    );
}

SendCmdDisplay.propTypes = {
    sendDeviceCommand: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired
}

export default SendCmdDisplay;