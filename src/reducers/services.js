import {
    RECIVE_MAIL,
    FINISH_MAIL,
    ERROR_MAIL,
    RECIVE_CONTACTO,
    FINISH_CONTACTO,
    ERROR_CONTACTO
} from '../actions/services';

export default (
    state = {
        reciveMail: false,
        successMail: false,
        errorMail: false,
        reciveContacto: false,
        successContacto: false,
        errorContacto: false,
    },
    action,
) => {
    switch (action.type) {
        case RECIVE_MAIL:
            return {
                ...state,
                reciveMail: true,
                errorMail: false,
                successMail: false,
            };
        case FINISH_MAIL:
            return {
                ...state,
                reciveMail: false,
                successMail: true,
                errorMail: false,
            };
        case ERROR_MAIL:
            return {
                ...state,
                reciveMail: false,
                errorMail: true,
                successMail: false,
            };
        case RECIVE_CONTACTO:
            return {
                ...state,
                reciveContacto: true,
                errorContacto: false,
                successContacto: false,
            };
        case FINISH_CONTACTO:
            return {
                ...state,
                reciveContacto: false,
                successContacto: true,
                errorContacto: false,
            };
        case ERROR_CONTACTO:
            return {
                ...state,
                reciveContacto: false,
                errorContacto: true,
                successContacto: false,
            };
        default:
            return state;
    }
};
