import {
    LOAD_TOAST_INFO,
    CLEAR_TOAST_INFO,
    SELECT_DEVICE,
    CLEAR_DEVICE,
    LOAD_DISPLAY_MESSAGE,
    CLEAR_DISPLAY_MESSAGE,
    LOAD_SWIPE_DATA,
    CLEAR_SWIPE_DATA,
    LOAD_EMV_DATA,
    CLEAR_EMV_DATA,
    FLAG_CONNECTION_CHANGE,
    LOAD_PIN_DATA,
    CLEAR_PIN_DATA,
    LOAD_TIP_DATA,
    CLEAR_TIP_DATA
} from './actionTypes';

export const loadToastInfo = toastObj => ({
    type: LOAD_TOAST_INFO,
    payload: toastObj
});

export const clearToastInfo = _ => ({
    type: CLEAR_TOAST_INFO
});

export const selectDevice = device => ({
    type: SELECT_DEVICE,
    payload: device
});

export const clearDevice = _ => ({ type: CLEAR_DEVICE });

export const loadDisplayMsg = msg => ({
    type: LOAD_DISPLAY_MESSAGE,
    payload: msg
});

export const clearDisplayMsg = _ => ({ type: CLEAR_DISPLAY_MESSAGE });

export const loadSwipeData = swipeData => ({
    type: LOAD_SWIPE_DATA,
    payload: swipeData
});

export const clearSwipeData = _ => ({ type: CLEAR_SWIPE_DATA });

export const loadEmvData = emvData => ({
    type: LOAD_EMV_DATA,
    payload: emvData
});

export const clearEmvData = _ => ({ type: CLEAR_EMV_DATA });

export const flagConnectionChange = _ => ({ type: FLAG_CONNECTION_CHANGE });

export const clearPinData = _ => ({ type: CLEAR_PIN_DATA });
export const clearTipData = _ => ({ type: CLEAR_TIP_DATA });
export const loadTipData = tipData => ({
    type: LOAD_TIP_DATA,
    payload: tipData
});

export const loadPinData = pinData => ({
    type: LOAD_PIN_DATA,
    payload: pinData
});
