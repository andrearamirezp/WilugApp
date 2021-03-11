import { url } from '../../config.json';

// ACTIONS
export const RECIVE_PRODUCTS = "RECIVE_PRODUCTS";
export const FINISH_PRODUCTS = "FINISH_PRODUCTS";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

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
