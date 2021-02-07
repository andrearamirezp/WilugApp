import {
    RECIVE_LOGIN,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
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
        default:
            return state;
    };
};