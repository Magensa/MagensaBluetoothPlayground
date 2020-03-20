import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadDisplayMsg, clearDisplayMsg } from '../../../redux/actions';

export default _ => {
    const displayDispatcher = useDispatch();
    const clearDisplayMessage = useCallback(() => 
        displayDispatcher( clearDisplayMsg() ), 
        [displayDispatcher]
    );
    const setDisplayMessage = useCallback(msg => 
        displayDispatcher( loadDisplayMsg(msg) ), 
        [displayDispatcher]
    );

    return { clearDisplayMessage, setDisplayMessage };
}