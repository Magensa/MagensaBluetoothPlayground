import React from 'react';
import {
    Grid,
    Modal,
    Typography,
    IconButton,
    makeStyles,
    List,
    ListItem,
    Paper
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import { generateRandomKey } from '../../../utils/helperFunctions';
import { fullWidth } from '../../../constants/styleConstants';

const instructionsModalStyles = makeStyles(({ 
    spacing, 
    shadows, 
    shape: { borderRadius },
    breakpoints: { down },
    palette: { 
        background: { paper } 
    } 
}) => ({
    modalWrapper: {
        position: 'absolute',
        minWidth: '50%',
        minHeight: '50%',
        backgroundColor: paper,
        border: '2px solid #000',
        boxShadow: shadows[5],
        padding: spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '75%',
        borderRadius: borderRadius,
        margin: spacing(1),
        [down('sm')]: {
            overflow: 'scroll'
        }
    },
    closeButtonWrapper: {
        textAlign: 'right',
        ...fullWidth
    }
}));


const InstructionsModal = ({ detailsTitle, details, closeAndClear, modalIsOpen }) => {
    const { modalWrapper, closeButtonWrapper } = instructionsModalStyles();

    return (
        <Modal
            aria-labelledby=""
            aria-describedby=""
            open={ modalIsOpen }
            onClose={ closeAndClear() }
        >
            <Paper elevation={3} className={ modalWrapper }>
                <div className={ closeButtonWrapper }>
                    <IconButton edge='end' onClick={ closeAndClear() }>
                        <CloseIcon />
                    </IconButton>
                </div>
                

                <Typography component="h4" align='center'>
                    { detailsTitle }
                </Typography>

                <List>
                    {details.map((textLine, index) =>
                        <ListItem>
                            <Typography 
                                key={ generateRandomKey( (index.toString() + 'de') ) }
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
        </Modal>
    );
}


export default InstructionsModal;