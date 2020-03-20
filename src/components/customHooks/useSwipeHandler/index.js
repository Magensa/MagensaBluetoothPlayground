import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadSwipeData, clearSwipeData as clearSwipe } from '../../../redux/actions';

export default _ => {
    const swipeDispatcher = useDispatch();
    const clearSwipeData = useCallback(() => 
        swipeDispatcher( clearSwipe() ), 
        [swipeDispatcher]
    );

    const setSwipeData = useCallback(msg => 
        swipeDispatcher( loadSwipeData(msg) ), 
        [swipeDispatcher]
    );

    return { clearSwipeData, setSwipeData };
}