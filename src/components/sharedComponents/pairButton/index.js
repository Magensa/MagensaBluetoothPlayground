import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import usePairDevice from '../../customHooks/usePairDevice';
import useScreenSize from '../../customHooks/useScreenSize';

const PairButton = ({ btnText, trxHandler }) => {
    const { isSmallScreen } = useScreenSize();
    const pairDevice = usePairDevice({ trxHandler });
    
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
    trxHandler: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired
}

export default PairButton;