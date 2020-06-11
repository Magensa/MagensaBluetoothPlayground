import { useState, useEffect, useCallback } from 'react';
import usePanelBase from '../usePanelBase';
import useCatchAndDisplay from '../useCatchAndDisplay';

export default (propStringName, data, selectedDevice) => {
    const [awaitingData, setAwaitingData] = useState(() => false);
    const [loadingText, setLoadingText] = useState(() => "");
    const catchAndDisplay = useCatchAndDisplay();

    const [ 
        operationResult, 
        setOperationResult,
        isLoading, 
        setIsLoading,
        hookIsMounted
    ] = usePanelBase();

    const cleanUp = useCallback((clearResult) => {
        setLoadingText("");
        setIsLoading(false);
        setAwaitingData(false);

        if (clearResult)
            setOperationResult("");
    }, [setLoadingText, setIsLoading, setAwaitingData, setOperationResult]);

    const cancelOperation = async(skipClear) => {
        try {
            await selectedDevice.deviceInterface.cancelTransaction();
            
            if (!skipClear)
                await selectedDevice.deviceInterface.clearSession();
        }
        catch(err) {
            catchAndDisplay(err);
        }

        cleanUp(true);
    }

    const prettyPrintArray = obj => JSON.stringify(
        obj, (key, val) => (val instanceof Array) ? JSON.stringify(val) : val, 4
    ).replace(/\\/g, '')
    .replace(/\[/g, '[')
    .replace(/\]/g,']')
    .replace(/\{/g, '{')
    .replace(/\}/g,'}');

    useEffect(() => {
        if (awaitingData && (propStringName in data)) {
            if (hookIsMounted) {
                setOperationResult(prevState => {
                    if (!prevState) {
                        let newState = [];
                        newState[1] = prettyPrintArray(data[propStringName]);
                        return newState;
                    }
                    else {
                        prevState[1] = prettyPrintArray(data[propStringName]);
                        return prevState;
                    }
                });
    
                cleanUp();
            }
        }
    }, [data, awaitingData, cleanUp, propStringName, hookIsMounted, setOperationResult]);

    return [
        operationResult, 
        isLoading, 
        setIsLoading, 
        loadingText, 
        setLoadingText, 
        cancelOperation, 
        setAwaitingData, 
        setOperationResult,
        cleanUp,
        hookIsMounted
    ];
}