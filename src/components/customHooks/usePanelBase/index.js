import { useState, useEffect } from 'react';

let hookIsMounted = true;

export default _ => {
    const [operationResult, setOperationResult] = useState(() => "");
    const [isLoading, setIsLoading] = useState(() => false);

    useEffect(() => {
        hookIsMounted = true;
        return () => (hookIsMounted = false);
    }, []);

    return [
        operationResult,
        setOperationResult,
        isLoading,
        setIsLoading,
        hookIsMounted
    ];
}