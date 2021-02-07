import { url } from '../../config.json';

// ACTIONS
export const RECIVE_REGISTER = "RECIVE_REGISTER";
export const FINISH_REGISTER = "FINISH_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";

const reciveRegister = () => {
    return {
        type: RECIVE_REGISTER
    };
};

const finishRegister = () => {
    return {
        type: FINISH_REGISTER,
        data
    };
};

const errorRegister = () => {
    return {
        type: ERROR_REGISTER
    };
};

export const registerClient = (data) => async (dispatch) => {
    try {
        dispatch(reciveRegister());

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}clients/newClient`, config);
        if (rawResponse.status === 201) {
            dispatch(finishRegister());
        } else {
            dispatch(errorRegister());
        }
    } catch (error) {
        dispatch(errorRegister());
    }
};
