import { url } from '../../config.json';

// ACTIONS
export const RECIVE_MAIL = "RECIVE_MAIL";
export const FINISH_MAIL = "FINISH_MAIL";
export const ERROR_MAIL = "ERROR_MAIL";

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
