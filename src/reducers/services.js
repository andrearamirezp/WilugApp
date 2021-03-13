import {
    RECIVE_MAIL,
    FINISH_MAIL,
    ERROR_MAIL
} from '../actions/services';

export default (
    state = {
        reciveMail: false,
        successMail: false,
        errorMail: false,
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
        default:
            return state;
    }
};
