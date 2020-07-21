import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DisplayMsgDisplay from './displayMsgDisplay';
import { clearDisplayMsg } from '../../../redux/actions';


export default _ => {
    const [ showBackdrop, setShowBackdrop ] = useState(() => false);
    const displayMsg = useSelector(state => state.displayMessage);
    const displayDispatch = useDispatch();

    const displayDispatcher = useCallback(() => 
        displayDispatch( clearDisplayMsg() ), 
        [displayDispatch]
    );

    const hideBackdrop = useCallback(() => {
        setShowBackdrop(false);
    }, [setShowBackdrop]);

    useEffect(() => {
        if (displayMsg)
            setShowBackdrop(true);
        else
            hideBackdrop();
    }, [displayMsg, displayDispatcher, hideBackdrop]);
    
    return (
        <DisplayMsgDisplay
            showBackdrop={ showBackdrop }
            hideBackdrop={ hideBackdrop }
            displayMsg={ displayMsg }
        />
    );
}
