import { combineReducers } from 'redux';
import toastInfo from './userToast';
import selectedDevice from './selectedDevice';

export default combineReducers({
    toastInfo,
    selectedDevice
});
