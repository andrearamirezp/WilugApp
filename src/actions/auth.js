import { url } from '../../config.json';

// ACTIONS
export const RECIVE_LOGIN = "RECIVE_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

export const RECIVE_LOGOUT = "RECIVE_LOGOUT";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const ERROR_LOGOUT = "ERROR_LOGOUT";

export const RECIVE_RECOVER = "RECIVE_RECOVER";
export const SUCCESS_RECOVER = "SUCCESS_RECOVER";
export const ERROR_RECOVER = "ERROR_RECOVER";

export const CLEAN_STATE = "CLEAN_STATE";

const cleanState = () => {
    return {
        type: CLEAN_STATE
    };
};

export const clean = () => async (dispatch) => {
    dispatch(cleanState());
};


const reciveLogin = () => {
    return {
        type: RECIVE_LOGIN
    };
};

const successLogin = (user, token) => {
    return {
        type: SUCCESS_LOGIN,
        user,
        token
    };
};

const errorLogin = () => {
    return {
        type: ERROR_LOGIN
    };
};

const reciveLogout = () => {
    return {
        type: RECIVE_LOGOUT
    };
};

const successLogout = () => {
    return {
        type: SUCCESS_LOGOUT
    };
};

const errorLogout = () => {
    return {
        type: ERROR_LOGOUT
    };
};

const reciveRecover = () => {
    return {
        type: RECIVE_RECOVER
    };
};

const successRecover = () => {
    return {
        type: SUCCESS_RECOVER
    };
};

const errorRecover = () => {
    return {
        type: ERROR_RECOVER
    };
};

export const login = (data) => async (dispatch) => {
    try {
        dispatch(reciveLogin());
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}auth/login`, config);
        if (rawResponse.status === 200) {
            const { token, user } = await rawResponse.json();
            dispatch(successLogin(user, token));
        } else {
            dispatch(errorLogin());
        }
    } catch (error) {
        dispatch(errorLogin());
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch(reciveLogout());
        dispatch(successLogout());
    } catch (error) {
        dispatch(errorLogout());
    }
};

export const recoverPass = (data) => async (dispatch) => {
    try {
        dispatch(reciveRecover());
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}auth/recoverPassword`, config);
        if (rawResponse.status === 200) {
            dispatch(successRecover);
        } else {
            dispatch(errorRecover());
        }
    } catch (error) {
        dispatch(errorRecover());
    }
};
