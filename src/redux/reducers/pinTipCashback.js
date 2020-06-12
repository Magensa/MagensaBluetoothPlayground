import { 
    LOAD_PIN_DATA,
    CLEAR_PIN_DATA,
    LOAD_TIP_DATA,
    CLEAR_TIP_DATA
} from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
    switch(type) {
        case LOAD_PIN_DATA:
            return {
                ...state,
                pinData: {
                    ...payload
                }
            }
        case LOAD_TIP_DATA:
            return {
                ...state,
                tipCashbackReport: {
                    ...payload
                }
            }
        case CLEAR_PIN_DATA:
            let { pinData, ...newState } = state;
            return newState;
        case CLEAR_TIP_DATA:
            let { tipCashbackReport, ...stateWithoutTip } = state;
            return stateWithoutTip;
        default:
            return state;
    }
}