import { url } from '../../config.json';

// ACTIONS
export const RECIVE_PRODUCTS = "RECIVE_PRODUCTS";
export const FINISH_PRODUCTS = "FINISH_PRODUCTS";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

export const RECIVE_DETAIL = "RECIVE_DETAIL";
export const FINISH_DETAIL = "FINISH_DETAIL";
export const ERROR_DETAIL = "ERROR_DETAIL";


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
