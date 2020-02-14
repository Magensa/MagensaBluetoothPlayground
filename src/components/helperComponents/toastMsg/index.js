import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import { clearAlertInfo } from '../../../redux/actions';


export default _ => {
    const [ displayAlert, setDisplayAlert ] = useState(false);
    const alertObj = useSelector(state => state.toastInfo);
    const alertDispatch = useDispatch();

    const closeAlert = (e, eventType) => {
        if (eventType !== 'clickaway') {
            setDisplayAlert(false);
            alertDispatch( clearAlertInfo() );
        }
    };

    useEffect(() => {
        if (alertObj)
            setDisplayAlert(true);
    }, [alertObj]);

    return (alertObj) ? (
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
                severity={( alertObj.alertType || "success" )} 
                variant='filled' 
                onClose={ closeAlert }
            >
                <AlertTitle>
                    { (alertObj.alertType) ? 
                        `${alertObj.alertType.charAt(0).toUpperCase()}${alertObj.alertType.substring(1)}` 
                        : ""
                    }
                </AlertTitle>
                {alertObj.alertMsg}
            </Alert>
        </Snackbar>
    ) : null;
}