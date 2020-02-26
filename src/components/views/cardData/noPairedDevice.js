import React from 'react';
import Button from '@material-ui/core/Button';


export default ({ pairDevice }) => {
    return (
        <Button onClick={ pairDevice } variant='contained' color='primary'>
            Pair Device
        </Button>
    );
}