import { url } from '../../config.json';

// ACTIONS
export const RECIVE_REGISTER = "RECIVE_REGISTER";
export const FINISH_REGISTER = "FINISH_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";
export const SET_DATA = "SET_DATA";

const reciveRegister = () => {
    return {
        type: RECIVE_REGISTER
    };
};

const finishRegister = () => {
    return {
        type: FINISH_REGISTER
    };
};

const errorRegister = () => {
    return {
        type: ERROR_REGISTER
    };
};

const setData = (data) => {
    return {
        type: SET_DATA,
        data
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
        if (rawResponse.status === 200) {
            dispatch(finishRegister());
        } else {
            dispatch(errorRegister());
        }
    } catch (error) {
        dispatch(errorRegister());
    }
};

export const setDataClient = data => async (dispatch) => {
    if(data.tipo == 'cl') {
        data.razonSocial = data.nombre;
        data.nombreContacto = data.nombre;
        data.direccionFactura = data.direccion;
        data.secondTelefono = data.telefono;
    }
    dispatch(setData(data));
};
