import React from 'react';
import {
    makeStyles,
    useScrollTrigger,
    Fab,
    Zoom
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { blueGrey, whiteColor } from '../../../constants/styleConstants';

const scrollStyles = makeStyles(({ spacing, breakpoints: { down } }) => {
    const four = spacing(4);
    const three = spacing(3)

    return ({
        scrollWrapper: {
            position: 'fixed',
            bottom: four,
            right: four,
            [down('sm')]: {
                bottom: three,
                right: three
            }
        },
        btnColor: {
            backgroundColor: blueGrey,
            ...whiteColor,
            '&:focus': {
                backgroundColor: blueGrey
            },
            '&:hover': {
                backgroundColor: blueGrey
            }
        }
    })
});

export default _ => {
    const { scrollWrapper, btnColor } = scrollStyles();

    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true
    });

    const scrollBtnClick = e => {
        const anchor = (e.target.ownerDocument || document).querySelector('#top-anchor');

        if (anchor)
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <Zoom in={ scrollTrigger }>
            <div 
                onClick={ scrollBtnClick }
                role="presentation"
                className={ scrollWrapper }
            >
                <Fab 
                    aria-label="scroll to top of page" 
                    size="small" 
                    className={ btnColor }
                    variant='extended'
                >
                    <KeyboardArrowUpIcon />
                    Top
                </Fab>
            </div>
        </Zoom>
    );
}