import { url } from '../../config.json';

// ACTIONS
export const RECIVE_UPDATE = "RECIVE_UPDATE";
export const FINISH_UPDATE = "FINISH_UPDATE";
export const ERROR_UPDATE = "ERROR_UPDATE";
export const CLEAN_STATE = "CLEAN_STATE";


const reciveUpdate = () => {
    return {
        type: RECIVE_UPDATE
    };
};

const finishUpdate = () => {
    return {
        type: FINISH_UPDATE
    };
};

const errorUpdate = () => {
    return {
        type: ERROR_UPDATE
    };
};

const cleanState = () => {
    return {
        type: CLEAN_STATE
    };
};



export const updateUser = (data, id) => async (dispatch) => {
    try {
        dispatch(reciveUpdate());

        const { direccion_factura, telefono, email_cliente, password, confirmPassword } = data;
        let isValid = true;

        if (direccion_factura === '') {
            isValid = false;
        }

        if (telefono === '') {
            isValid = false;
        }

        if (email_cliente === '') {
            isValid = false;
        }

        if (password === '') {
            isValid = false;
        }

        if (confirmPassword === '') {
            isValid = false;
        }

        if (isValid) {
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `data=${encodeURIComponent(JSON.stringify(data))}`,
            };
            const rawResponse = await fetch(`${url}clients/editClient/${id}`, config);

            if (rawResponse.status === 201) {
                dispatch(finishUpdate());
            } else {
                dispatch(errorUpdate());
            }
        } else {
            dispatch(errorUpdate());
        }
    } catch (error) {
        dispatch(errorUpdate());
    }
};

export const clean = () => async (dispatch) => {
    dispatch(cleanState());
};
