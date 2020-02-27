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

const capitalizeFirstLetter = str => 
    str.charAt(0).toUpperCase() + str.slice(1);

export {
    catchAndDisplay,
    capitalizeFirstLetter
}