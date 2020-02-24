import React from 'react';
import {
    Grid
} from '@material-ui/core';
import LogoCard from './logoCard';
import { displayItems } from '../../../constants';


export default _ => 
    <Grid container justify='center' spacing={3} alignItems='baseline'>
        {displayItems.map( browserInfo => (
            <Grid item key={browserInfo.id}>
                <LogoCard
                    cardContent={ browserInfo } 
                />
            </Grid>
        ))}
    </Grid>