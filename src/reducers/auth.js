import {
    RECIVE_LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    RECIVE_LOGOUT,
    SUCCESS_LOGOUT,
    ERROR_LOGOUT,
    CLEAN_STATE,
    RECIVE_RECOVER,
    SUCCESS_RECOVER,
    ERROR_RECOVER
} from "../actions/auth";

export default (
    state = {
        authenticating: false,
        isAuthenticated: false,
        authenticateError: false,
        user: {},
        token: '',
        reciveRecover: false,
        sucessRecover: false,
        errorRecover: false
    },
    action
) => {
    switch (action.type) {
        case RECIVE_LOGIN:
            return {
                ...state,
                authenticating: true,
            };
        case SUCCESS_LOGIN:
            return {
                ...state,
                authenticating: false,
                isAuthenticated: true,
                user: action.user,
                token: action.token,
            };
        case ERROR_LOGIN:
            return {
                ...state,
                authenticating: false,
                authenticateError: true,
            };
        case RECIVE_LOGOUT:
            return {
                ...state,
                authenticating: true,
            };
        case SUCCESS_LOGOUT:
            return {
                ...state,
                authenticating: false,
                isAuthenticated: false,
                user: {},
                token: '',
            };
        case ERROR_LOGOUT:
            return {
                ...state,
                authenticating: false,
                authenticateError: true,
            };
        case RECIVE_RECOVER:
            return {
                ...state,
                reciveRecover: true,
                errorRecover: false,
                sucessRecover: false,
            };
        case SUCCESS_RECOVER:
            return {
                ...state,
                sucessRecover: true,
                reciveRecover: false,
                errorRecover: false,
            };
        case ERROR_RECOVER:
            return {
                ...state,
                reciveRecover: false,
                errorRecover: true,
                sucessRecover: false,
            };
        case CLEAN_STATE:
            return {
                ...state,
                authenticating: false,
                isAuthenticated: false,
                authenticateError: false,
            };
        default:
            return state;
    };
};