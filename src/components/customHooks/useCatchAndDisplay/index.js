import { useDispatch } from 'react-redux';
import { loadToastInfo } from '../../../redux/actions';


export default _ => {
    const catchDispatch = useDispatch();

    const catchAndDisplay = err => {
        if (err instanceof Error) {
            console.error(err);
        
            if (err.code !== 8 || err.name !== "NotFoundError" || !err.message.includes("requestDevice()"))
                catchDispatch(
                    loadToastInfo({
                        toastType: "error",
                        toastMsg: err.message
                    })
                )
        }
        else {
            catchDispatch(
                loadToastInfo({
                    toastType: "success",
                    toastMsg: err
                })
            )
        }
    }

    return catchAndDisplay;
}