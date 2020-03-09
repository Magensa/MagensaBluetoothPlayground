import React from 'react';
import PropTypes from 'prop-types';
import {
    Backdrop,
    Paper,
    makeStyles,
    Typography,
    ClickAwayListener,
    Grid,
    IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const displayMsgStyles = makeStyles(({ spacing, zIndex: { drawer } }) => ({
    backdropWrapper: {
        zIndex: drawer + 1
    },
    displayPaperStyles: {
        paddingBottom: spacing(4),
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        margin: spacing(1)
    }
}));

const DisplayMsgDisplay = ({ showBackdrop, hideBackdrop, displayMsg }) => {
    const { backdropWrapper, displayPaperStyles } = displayMsgStyles();

    return (
        <Backdrop open={ showBackdrop } className={ backdropWrapper }>
            <ClickAwayListener onClickAway={ hideBackdrop }>
                <Paper className={ displayPaperStyles }>
                    <Grid container direction="column" alignItems="flex-end">
                        <IconButton edge='end' onClick={ hideBackdrop }>
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h3" align="center">
                            {displayMsg}
                        </Typography>
                    </Grid>
                </Paper>
            </ClickAwayListener>
        </Backdrop>
    );
}

DisplayMsgDisplay.propTypes = {
    showBackdrop: PropTypes.bool.isRequired,
    hideBackdrop: PropTypes.func.isRequired,
    displayMsg: PropTypes.string.isRequired
}

export default DisplayMsgDisplay