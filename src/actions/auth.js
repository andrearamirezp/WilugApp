import { url } from '../../config.json';

// ACTIONS
export const RECIVE_LOGIN = "RECIVE_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";

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
