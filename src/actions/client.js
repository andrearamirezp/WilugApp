import { url } from '../../config.json';

// ACTIONS
export const RECIVE_REGISTER = "RECIVE_REGISTER";
export const FINISH_REGISTER = "FINISH_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";
export const SET_DATA = "SET_DATA";

export const RECIVE_REGION = "RECIVE_REGION";
export const FINISH_REGION = "FINISH_REGION";
export const ERROR_REGION = "ERROR_REGION";

export const RECIVE_COMUNA = "RECIVE_COMUNA";
export const FINISH_COMUNA = "FINISH_COMUNA";
export const ERROR_COMUNA = "ERROR_COMUNA";

export const CLEAN_STATE = "CLEAN_STATE";

const cleanState = () => {
    return {
        type: CLEAN_STATE
    };
};

export const clean = () => async (dispatch) => {
    dispatch(cleanState());
};


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

const reciveRegion = () => {
    return {
        type: RECIVE_REGION
    };
};

const finishRegion = (data) => {
    return {
        type: FINISH_REGION,
        data
    };
};

const errorRegion = () => {
    return {
        type: ERROR_REGION
    };
};

const reciveComuna = () => {
    return {
        type: RECIVE_COMUNA
    };
};

const finishComuna = (data) => {
    return {
        type: FINISH_COMUNA,
        data
    };
};

const errorComuna = () => {
    return {
        type: ERROR_COMUNA
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
        
        if (rawResponse.status === 201) {
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
        data.giro = 'Particular';
    }
    dispatch(setData(data));
};

export const getRegions = () => async (dispatch) => {
    try {
        dispatch(reciveRegion());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}country/regions`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            dispatch(finishRegion(data));
        } else {
            dispatch(errorRegion());
        }
    } catch (error) {
        dispatch(errorRegion());
    }
};

export const getComunas = (id) => async (dispatch) => {
    try {
        dispatch(reciveComuna());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}country/communesByRegion/${id}`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            dispatch(finishComuna(data));
        } else {
            dispatch(errorComuna());
        }
    } catch (error) {
        dispatch(errorComuna());
    }
};
