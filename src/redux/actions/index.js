import {
    LOAD_TOAST_INFO,
    CLEAR_TOAST_INFO,
    SELECT_DEVICE,
    CLEAR_DEVICE,
    LOAD_DISPLAY_MESSAGE,
    CLEAR_DISPLAY_MESSAGE,
    LOAD_SWIPE_DATA,
    CLEAR_SWIPE_DATA
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