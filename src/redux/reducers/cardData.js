import { 
    LOAD_SWIPE_DATA,
    CLEAR_SWIPE_DATA,
    LOAD_EMV_DATA,
    CLEAR_EMV_DATA
} from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
    switch(type) {
        case LOAD_SWIPE_DATA:
            return {
                ...state,
                swipeData: {
                    ...payload
                }
            }
        case CLEAR_SWIPE_DATA:
            let { swipeData, ...newState } = state;
            return newState;
        case LOAD_EMV_DATA:
            return {
                ...state,
                ...payload
            }
        case CLEAR_EMV_DATA:
            let { 
                arqcData, 
                arqcDataParsed, 
                batchData, 
                batchDataParsed, 
                signatureRequired, 
                ...clearedState 
            } = state;

            return clearedState;
        default:
            return state;
    }
}