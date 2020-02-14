import {
    LOAD_TOAST_INFO,
    CLEAR_TOAST_INFO
} from './actionTypes';

export const loadToastInfo = toastObj => ({
    type: LOAD_TOAST_INFO,
    payload: toastObj
});

export const clearToastInfo = _ => ({
    type: CLEAR_TOAST_INFO
});