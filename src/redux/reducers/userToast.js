import { 
    LOAD_TOAST_INFO,
    CLEAR_TOAST_INFO
} from '../actions/actionTypes';

export default (state = null, { type, payload }) => 
    (type === LOAD_TOAST_INFO) ? payload : 
        (type === CLEAR_TOAST_INFO) ? null : state;