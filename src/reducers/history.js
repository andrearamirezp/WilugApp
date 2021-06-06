import {
    RECIVE_HISTORY,
    FINISH_HISTORY,
    ERROR_HISTORY
} from '../actions/history';

export default (
    state = {
        reciveHistory: false,
        successHistory: false,
        errorHistory: false,
        data: []
    },
    action,
) => {
    switch (action.type) {
        case RECIVE_HISTORY:
            return {
                ...state,
                reciveHistory: true,
                errorHistory: false,
                successHistory: false,
            };
        case FINISH_HISTORY:
            return {
                ...state,
                reciveHistory: false,
                successHistory: true,
                errorHistory: false,
                data: action.data
            };
        case ERROR_HISTORY:
            return {
                ...state,
                reciveHistory: false,
                errorHistory: true,
                successHistory: false,
            };
        default:
            return state;
    }
};
