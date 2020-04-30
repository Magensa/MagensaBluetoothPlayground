import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { flagConnectionChange } from '../../../redux/actions';


export default _ => {
    const flagDispatcher = useDispatch();
    const fireFlagChange = useCallback(_ => flagDispatcher( flagConnectionChange() ), [flagDispatcher]);
    
    return fireFlagChange;
}