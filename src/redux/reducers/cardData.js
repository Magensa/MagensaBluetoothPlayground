import { 
    LOAD_SWIPE_DATA,
    CLEAR_SWIPE_DATA
} from '../actions/actionTypes';

export default (state = {}, { type, payload }) => {
    switch(type) {
        case LOAD_SWIPE_DATA:
            console.log('cardDataReducer: ', `type: ${type}`, payload);
            return {
                ...state,
                swipeData: {
                    ...payload
                }
            }
        case CLEAR_SWIPE_DATA:
            console.log('cardDataReducer: ', `type: ${type}`, state);
            let { swipeData, ...newState } = state;
            return newState;
        default:
            return state;
    }
}