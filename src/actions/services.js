import { url } from '../../config.json';

// ACTIONS
export const RECIVE_MAIL = "RECIVE_MAIL";
export const FINISH_MAIL = "FINISH_MAIL";
export const ERROR_MAIL = "ERROR_MAIL";

export const RECIVE_CONTACTO = "RECIVE_CONTACTO";
export const FINISH_CONTACTO = "FINISH_CONTACTO";
export const ERROR_CONTACTO = "ERROR_CONTACTO";

const reciveContacto = () => {
    return {
        type: RECIVE_CONTACTO
    };
};

const finishContacto = () => {
    return {
        type: FINISH_CONTACTO,
    };
};

const errorContacto = () => {
    return {
        type: ERROR_CONTACTO
    };
};

const reciveMail = () => {
    return {
        type: RECIVE_MAIL
    };
};

const finishMail = () => {
    return {
        type: FINISH_MAIL,
    };
};

const errorMail = () => {
    return {
        type: ERROR_MAIL
    };
};

export const sendMail = (to, text) => async (dispatch) => {
    try {
        dispatch(reciveMail());

        const data = {
            to,
            text
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}services/sendMail`, config);

        if (rawResponse.status === 200) {
            dispatch(finishMail());
        } else {
            dispatch(errorMail());
        }
    } catch (error) {
        dispatch(errorMail());
    }
};

export const sendMailContacto = (data) => async (dispatch) => {
    try {
        dispatch(reciveContacto());

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}services/sendContacto`, config);

        if (rawResponse.status === 200) {
            dispatch(finishContacto());
        } else {
            dispatch(errorContacto());
        }
    } catch (error) {
        dispatch(errorContacto());
    }
};
