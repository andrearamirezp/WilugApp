import { url } from '../../config.json';

// ACTIONS
export const RECIVE_HISTORY = "RECIVE_HISTORY";
export const FINISH_HISTORY = "FINISH_HISTORY";
export const ERROR_HISTORY = "ERROR_HISTORY";

const reciveHistory = () => {
    return {
        type: RECIVE_HISTORY
    };
};

const finishHistory = (data) => {
    return {
        type: FINISH_HISTORY,
        data
    };
};

const errorHistory = () => {
    return {
        type: ERROR_HISTORY
    };
};

export const getHistory = (id) => async (dispatch) => {
    try {
        dispatch(reciveHistory());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}services/history/${id}`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            console.log(data)
            dispatch(finishHistory(data));
        } else {
            dispatch(errorHistory());
        }
    } catch (error) {
        dispatch(errorHistory());
    }
};
