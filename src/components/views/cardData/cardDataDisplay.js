import React from 'react';
import Grid from '@material-ui/core/Grid';


export default ({ selectedDevice }) => {
    return (
        <Grid>
        <h1>Card Data with device {`${selectedDevice.name}`} {console.log('selectedDevice', selectedDevice)}</h1>
    </Grid>
    )
}