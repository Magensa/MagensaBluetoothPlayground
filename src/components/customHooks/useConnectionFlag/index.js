import { useDispatch } from 'react-redux';
import { flagConnectionChange } from '../../../redux/actions';


export default _ => {
    const flagDispatcher = useDispatch();
    const fireFlagChange = _ => flagDispatcher( flagConnectionChange() );
    
    return fireFlagChange;
}