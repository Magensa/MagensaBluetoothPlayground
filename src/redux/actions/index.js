import {
    LOAD_TOAST_INFO,
    CLEAR_TOAST_INFO,
    SELECT_DEVICE
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