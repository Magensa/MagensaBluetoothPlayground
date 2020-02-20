import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import { clearToastInfo } from '../../../redux/actions';


export default _ => {
    const [ displayAlert, setDisplayAlert ] = useState(false);
    const toastInfo = useSelector(state => state.toastInfo);
    const alertDispatch = useDispatch();

    const closeAlert = (e, eventType) => {
        if (eventType !== 'clickaway') {
            setDisplayAlert(false);
            alertDispatch( clearToastInfo() );
        }
    };

    useEffect(() => {
        if (toastInfo)
            setDisplayAlert(true);
    }, [toastInfo]);

    return (toastInfo) ? (
        <Snackbar 
            open={ displayAlert } 
            autoHideDuration={5000} 
            onClose={ closeAlert }
            anchorOrigin={{ 
                vertical: "top",
                horizontal: "center"
            }}
        >
            <Alert 
                severity={( toastInfo.toastType || "success" )} 
                variant='filled' 
                onClose={ closeAlert }
            >
                <AlertTitle>
                    { (toastInfo.toastType) ? 
                        `${toastInfo.toastType.charAt(0).toUpperCase()}${toastInfo.toastType.substring(1)}` 
                        : ""
                    }
                </AlertTitle>
                {toastInfo.toastMsg}
            </Alert>
        </Snackbar>
    ) : null;
}