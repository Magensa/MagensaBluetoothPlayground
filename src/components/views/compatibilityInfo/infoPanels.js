import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import LogoCard from './logoCard';
import { displayItems } from '../../../constants';
import InstructionsModal from './instructionsModal';



export default _ => {
    const [ pairingDetails, setPairingDetails ] = useState(null);

    return (
        <Grid container justify='center' spacing={3} alignItems='baseline'>
            {displayItems.map( browserInfo => (
                <Grid item key={browserInfo.id}>
                    <LogoCard
                        cardContent={ browserInfo } 
                    />
                </Grid>
            ))}
            
            <InstructionsModal />
        </Grid>
    );
}