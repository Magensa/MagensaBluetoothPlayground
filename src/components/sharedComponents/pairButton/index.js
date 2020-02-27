import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import useScreenSize from '../../customHooks/useScreenSize';

const PairButton = ({ pairDevice, btnText }) => {
    const { isSmallScreen } = useScreenSize();
    
    return (
        <Button 
            onClick={ pairDevice() } 
            variant='contained' 
            color='primary'
            size={(!isSmallScreen) ? "medium" : "small"}
        >
            {btnText}
        </Button>
    );
}
    

PairButton.propTypes = {
    pairDevice: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
}

export default PairButton;