import React from 'react';
import {
    Grid,
    Modal,
    Typography,
    IconButton,
    makeStyles,
    List,
    ListItem,
    Paper,
    Divider
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { generateRandomKey } from '../../../utils/helperFunctions';
import { fullWidth } from '../../../constants/styleConstants';

const instructionsModalStyles = makeStyles(({ 
    spacing, 
    shadows, 
    typography: { h4, h5 },
    shape: { borderRadius },
    breakpoints: { down },
    palette: { 
        background: { paper } 
    } 
}) => ({
    modalWrapper: {
        position: 'absolute',
        minWidth: '80%',
        minHeight: '50%',
        maxHeight: '75%',
        backgroundColor: paper,
        border: '2px solid #000',
        boxShadow: shadows[5],
        padding: spacing(1),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: borderRadius,
        margin: spacing(1),
        overflowWrap: 'break-word',
        [down('sm')]: {
            overflow: 'scroll',
            minWidth: '82%',
            transform: 'translate(-53%, -50%)',
        }
    },
    closeButtonWrapper: {
        textAlign: 'right',
        ...fullWidth
    },
    divideWrapper: {
        display: 'flex',
        justifyContent: 'center',
        '& hr': {
            width: '80%'
        }
    },
    titleStyles: {
        margin: spacing(2, 0, 2),
        textAlign: 'center',
        ...h4,
        [down('sm')]: {
            margin: spacing(1, 0, 1),
            ...h5
        }
    }
}));


const InstructionsModal = ({ detailsTitle, details, closeAndClear, modalIsOpen }) => {
    const { modalWrapper, closeButtonWrapper, divideWrapper, titleStyles } = instructionsModalStyles();

    return (
        <Modal
            aria-labelledby=""
            aria-describedby=""
            open={ modalIsOpen }
            onClose={ closeAndClear() }
        >
            <div className={ modalWrapper }>
                <Paper elevation={3}>
                        <div className={ closeButtonWrapper }>
                            <IconButton onClick={ closeAndClear() } >
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <div className={ titleStyles }>
                            { detailsTitle }
                        </div>

                    <div className={ divideWrapper }>
                        <Divider />
                    </div>
                   
                    <List component="nav">
                        {details.map((textLine, index) =>
                            <ListItem  key={ generateRandomKey( (index.toString() + 'de') ) }>
                                <Typography
                                    variant="subtitle1" 
                                    component="p"
                                    align='left'
                                >
                                    { textLine }
                                </Typography>
                            </ListItem>
                        )}
                    </List>
                </Paper>
            </div>
        </Modal>
    );
}


export default InstructionsModal;