import React, { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import LogoCard from './logoCard';
import { displayItems } from '../../../constants';
import InstructionsModal from './instructionsModal';


export default _ => {
    const [ pairingDetails, setPairingDetails ] = useState(() => null);
    const [ modalIsOpen, setModalIsOpen ] = useState(() => false);

    const setModalDetails = useCallback(details => _ =>  {
        if (details) {
            setModalIsOpen(true);
            setPairingDetails(details);
        }
        else {
            setModalIsOpen(false);
            setPairingDetails(null);
        }
    }, [setPairingDetails, setModalIsOpen]);

    return (
        <Grid container justify='center' spacing={3} alignItems='baseline'>
            {displayItems.map( browserInfo => (
                <Grid item key={browserInfo.id}>
                    <LogoCard
                        { ...browserInfo }
                        setModalDetails={ setModalDetails }
                    />
                </Grid>
            ))}

            {pairingDetails &&
                <InstructionsModal 
                    closeAndClear={ setModalDetails }
                    modalIsOpen={ modalIsOpen }
                    { ...pairingDetails } 
                />
            }
        </Grid>
    );
}