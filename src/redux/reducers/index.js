import { combineReducers } from 'redux';
import toastInfo from './userToast';
import selectedDevice from './selectedDevice';
import displayMessage from './displayMessage';
import cardData from './cardData';
import connectionFlag from './connectionChangeFlag';

export default combineReducers({
    toastInfo,
    selectedDevice,
    displayMessage,
    cardData,
    connectionFlag
});
