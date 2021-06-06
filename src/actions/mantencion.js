import { url } from '../../config.json';

// ACTIONS
export const RECIVE_MANTENCION = "RECIVE_MANTENCION";
export const FINISH_MANTENCION = "FINISH_MANTENCION";
export const ERROR_MANTENCION = "ERROR_MANTENCION";

const reciveMantencion = () => {
    return {
        type: RECIVE_MANTENCION
    };
};

const finishMantencion = () => {
    return {
        type: FINISH_MANTENCION
    };
};

const errorMantencion = () => {
    return {
        type: ERROR_MANTENCION
    };
};

export const saveMantencion = (data) => async (dispatch) => {
    try {
        dispatch(reciveMantencion());

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}services/saveMantencion`, config);
        if (rawResponse.status === 200) {
            dispatch(finishMantencion());
        } else {
            dispatch(errorMantencion());
        }
    } catch (error) {
        dispatch(errorMantencion());
    }
};
