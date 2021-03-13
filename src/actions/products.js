import { url } from '../../config.json';
import moment from 'moment';

// ACTIONS
export const RECIVE_PRODUCTS = "RECIVE_PRODUCTS";
export const FINISH_PRODUCTS = "FINISH_PRODUCTS";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

export const RECIVE_DETAIL = "RECIVE_DETAIL";
export const FINISH_DETAIL = "FINISH_DETAIL";
export const ERROR_DETAIL = "ERROR_DETAIL";

export const RECIVE_INSERT = "RECIVE_INSERT";
export const FINISH_INSERT = "FINISH_INSERT";
export const ERROR_INSERT = "ERROR_INSERT";

export const CLEAN_STATE = "CLEAN_STATE";

const cleanState = () => {
    return {
        type: CLEAN_STATE
    };
};

export const clean = () => async (dispatch) => {
    dispatch(cleanState());
};

const reciveInsert = () => {
    return {
        type: RECIVE_INSERT
    };
};

const finishInsert = () => {
    return {
        type: FINISH_INSERT
    };
};

const errorInsert = () => {
    return {
        type: ERROR_INSERT
    };
};

const reciveDetail = () => {
    return {
        type: RECIVE_DETAIL
    };
};

const finishDetail = (data) => {
    return {
        type: FINISH_DETAIL,
        data
    };
};

const errorDetail = () => {
    return {
        type: ERROR_DETAIL
    };
};

const reciveProducts = () => {
    return {
        type: RECIVE_PRODUCTS
    };
};

const finishProducts = (data) => {
    return {
        type: FINISH_PRODUCTS,
        data
    };
};

const errorProducts = () => {
    return {
        type: ERROR_PRODUCTS
    };
};

export const getProducts = (id) => async (dispatch) => {
    try {
        dispatch(reciveProducts());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}products/ByCliente/${id}`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            dispatch(finishProducts(data));
        } else {
            dispatch(errorProducts());
        }
    } catch (error) {
        dispatch(errorProducts());
    }
};

export const getDetailProduct = (id) => async (dispatch) => {
    try {
        dispatch(reciveDetail());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}products/detail/${id}`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            dispatch(finishDetail(data[0]));
        } else {
            dispatch(errorDetail());
        }
    } catch (error) {
        dispatch(errorDetail());
    }
};

export const addProducto = (data) => async (dispatch) => {
    try {
        dispatch(reciveInsert());

        data.fechaFabricacion =  moment(data.fechaUltMantencion).format('YYYY/MM/DD')
        data.fechaUltCarga = moment(data.fechaUltMantencion).format('YYYY/MM/DD')
        data.fechaUltMantencion = moment(data.fechaUltMantencion).format('YYYY/MM/DD')

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `data=${encodeURIComponent(JSON.stringify(data))}`,
        };

        const rawResponse = await fetch(`${url}products`, config);
        if (rawResponse.status === 201) {
            dispatch(finishInsert());
        } else {
            dispatch(errorInsert());
        }
        dispatch(cleanState());
    } catch (error) {
        dispatch(errorInsert());
        dispatch(cleanState());
    }
};
