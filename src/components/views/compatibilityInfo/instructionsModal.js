import React from 'react';
import {
    Grid,
    Modal,
    Typography,
    makeStyles
} from '@material-ui/core';

const instructionsModalStyles = makeStyles(({ spacing, shadows, palette: { background: { paper } } }) => ({
    modalWrapper: {
        position: 'absolute',
        width: 400,
        backgroundColor: paper,
        border: '2px solid #000',
        boxShadow: shadows[5],
        padding: spacing(2, 4, 3),
    }
}));


const InstructionsModal = ({ detailsTitle, details=[1,2,3,4] }) => {
    const { modalWrapper } = instructionsModalStyles();

    return (
        <Modal
            aria-labelledby=""
            aria-describedby=""
            open={true}
            onClose={()=>{}}
        >
            <div className={ modalWrapper }>
                <Typography component="h3" paragraph variant="h4">
                    { detailsTitle }
                </Typography>

                {details.map(textLine =>
                    <Typography variant="subtitle1" component="p">
                        { textLine }
                    </Typography>
                )}

            </div>
        </Modal>
    );
}


export default InstructionsModal;