import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { clearPinData, clearTipData, loadTipData, loadPinData } from '../../../redux/actions';

export default _ => {
    const pinTipDispatcher = useDispatch();
    const clearTipPinData = useCallback(pinOrTip => 
        pinTipDispatcher( 
            (pinOrTip === "pin") ? clearPinData() : clearTipData()
        ), [pinTipDispatcher]
    );

    const setPinTipData = useCallback((type, data) => 
        pinTipDispatcher( 
            (type === "pin") ? loadPinData(data) : loadTipData(data)
        ), [pinTipDispatcher]
    );

    return { clearTipPinData, setPinTipData };
}