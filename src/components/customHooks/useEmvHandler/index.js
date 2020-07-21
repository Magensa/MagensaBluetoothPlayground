import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadEmvData, clearEmvData as clearData } from '../../../redux/actions';

export default _ => {
    const emvDispatcher = useDispatch();
    const clearEmvData = useCallback(() => 
        emvDispatcher( clearData() ), 
        [emvDispatcher]
    );

    const setEmvData = useCallback(data => 
        emvDispatcher( loadEmvData(data) ), 
        [emvDispatcher]
    );

    return { clearEmvData, setEmvData };
}
