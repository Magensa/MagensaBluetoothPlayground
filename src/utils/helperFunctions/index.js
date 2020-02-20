import { loadToastInfo } from '../../redux/actions';

const catchAndDisplay = dispatcher => err => {
    console.log(err);

    dispatcher(
        loadToastInfo({
            toastType: "error",
            toastMsg: err.message
        })
    )
}

export {
    catchAndDisplay
}