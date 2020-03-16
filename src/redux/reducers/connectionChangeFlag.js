import { FLAG_CONNECTION_CHANGE } from '../actions/actionTypes';

export default (state = false, { type }) => 
    (type === FLAG_CONNECTION_CHANGE) ? !state : state;