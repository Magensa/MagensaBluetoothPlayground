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
}) => {
    const fifty = '50%';

    return ({
        modalWrapper: {
            position: 'absolute',
            minWidth: '60%',
            minHeight: fifty,
            maxHeight: '75%',
            backgroundColor: paper,
            boxShadow: shadows[5],
            padding: spacing(1),
            top: fifty,
            left: fifty,
            transform: `translate(-50%, -${fifty})`,
            borderRadius: borderRadius,
            margin: spacing(1),
            overflowWrap: 'break-word',
            overflow: 'auto',
            [down('sm')]: {
                minWidth: '82%',
                transform: `translate(-53%, -${fifty})`,
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
                width: '85%'
            }
        },
        titleStyles: {
            margin: spacing(-1, 0, 2),
            textAlign: 'center',
            ...h4,
            [down('sm')]: {
                margin: spacing(-1, 0, 1),
                ...h5
            }
        },
        nestedList: {
            paddingLeft: spacing(4)
        },
        twoPadding: {
            padding: spacing(2)
        }
    })
});


const InstructionsModal = ({ detailsTitle, details, closeAndClear, modalIsOpen }) => {
    const { 
        modalWrapper, 
        closeButtonWrapper, 
        divideWrapper, 
        titleStyles, 
        nestedList, 
        twoPadding 
    } = instructionsModalStyles();

    return (
        <Modal
            aria-labelledby="pairing-details-title"
            aria-describedby="pairing-details-body"
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

                        <div id="pairing-details-title" className={ titleStyles }>
                            { detailsTitle }
                        </div>

                    <div className={ divideWrapper }>
                        <Divider />
                    </div>

                   <Grid container justify='center' alignItems='center' className={ twoPadding }>
                        <Grid item xl={10}>
                            <List component="nav" id="pairing-details-body">
                                {details.map((textLine, index) => (typeof( textLine ) === 'string') ?
                                    <ListItem  key={ generateRandomKey( (index.toString() + 'de') ) }>
                                        <Typography variant="body1">
                                            { textLine }
                                        </Typography>
                                    </ListItem>
                                    :
                                    <List key={ generateRandomKey( (index.toString() + 'de') ) } className={ nestedList }>
                                        {textLine.map( (subText, index) =>
                                            <ListItem key={ generateRandomKey( (index.toString() + 'st') ) }>
                                                <Typography variant="body1">
                                                    {`- ${subText}`}
                                                </Typography>
                                            </ListItem>
                                        )}
                                    </List>
                                )}
                            </List>
                       </Grid>
                   </Grid>
                   
                </Paper>
            </div>
        </Modal>
    );
}


export default InstructionsModal;