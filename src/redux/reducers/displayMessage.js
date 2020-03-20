import { 
    LOAD_DISPLAY_MESSAGE,
    CLEAR_DISPLAY_MESSAGE
} from '../actions/actionTypes';

export default (state = "", { type, payload }) => 
    (type === LOAD_DISPLAY_MESSAGE) ? payload : 
        (type === CLEAR_DISPLAY_MESSAGE) ? "" : state;