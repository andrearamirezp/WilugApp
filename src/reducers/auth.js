import {
    RECIVE_LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    RECIVE_LOGOUT,
    SUCCESS_LOGOUT,
    ERROR_LOGOUT,
    CLEAN_STATE
} from "../actions/auth";

export default (
    state = {
        authenticating: false,
        isAuthenticated: false,
        authenticateError: false,
        user: {},
        token: ''
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