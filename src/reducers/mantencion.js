import {
    RECIVE_MANTENCION,
    FINISH_MANTENCION,
    ERROR_MANTENCION
} from '../actions/mantencion';

export default (
    state = {
        reciveManrtencion: false,
        successManrtencion: false,
        errorManrtencion: false,
    },
    action,
) => {
    switch (action.type) {
        case RECIVE_MANTENCION:
            return {
                ...state,
                reciveManrtencion: true,
                errorManrtencion: false,
                successManrtencion: false,
            };
        case FINISH_MANTENCION:
            return {
                ...state,
                reciveManrtencion: false,
                successManrtencion: true,
                errorManrtencion: false,
            };
        case ERROR_MANTENCION:
            return {
                ...state,
                reciveManrtencion: false,
                errorManrtencion: true,
                successManrtencion: false,
            };
        default:
            return state;
    }
};
