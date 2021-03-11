import {
    ERROR_UPDATE,
    FINISH_UPDATE,
    RECIVE_UPDATE,
    CLEAN_STATE
} from '../actions/user';

export default (
    state = {
        reciveUpdate: false,
        successUpdate: false,
        errorUpdate: false
    },
    action,
) => {
    switch (action.type) {
        case RECIVE_UPDATE:
            return {
                ...state,
                reciveUpdate: true,
                errorUpdate: false,
                successUpdate: false,
            };
        case FINISH_UPDATE:
            return {
                ...state,
                reciveUpdate: false,
                successUpdate: true,
                errorUpdate: false,
            };
        case ERROR_UPDATE:
            return {
                ...state,
                reciveUpdate: false,
                errorUpdate: true,
                successUpdate: false,
            };
        case CLEAN_STATE:
            return {
                ...state,
                reciveUpdate: false,
                errorUpdate: false,
                successUpdate: false,
            };
        default:
            return state;
    }
};
