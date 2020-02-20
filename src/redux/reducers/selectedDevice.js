import { SELECT_DEVICE, CLEAR_DEVICE } from '../actions/actionTypes';

export default (state = null, { type, payload }) => 
    (type === SELECT_DEVICE) ? payload : 
        (type !== CLEAR_DEVICE) ? state : null;