import { url } from '../../config.json';
import { format } from 'date-fns'

// ACTIONS
export const RECIVE_PRODUCTS = "RECIVE_PRODUCTS";
export const FINISH_PRODUCTS = "FINISH_PRODUCTS";
export const FINISH_PRODUCTS_MANTENCION = "FINISH_PRODUCTS_MANTENCION";
export const ERROR_PRODUCTS = "ERROR_PRODUCTS";

export const RECIVE_DETAIL = "RECIVE_DETAIL";
export const FINISH_DETAIL = "FINISH_DETAIL";
export const ERROR_DETAIL = "ERROR_DETAIL";

export const RECIVE_INSERT = "RECIVE_INSERT";
export const FINISH_INSERT = "FINISH_INSERT";
export const ERROR_INSERT = "ERROR_INSERT";

export const RECIVE_AGENTS = "RECIVE_AGENTS";
export const FINISH_AGENTS = "FINISH_AGENTS";
export const ERROR_AGENTS = "ERROR_AGENTS";

export const CLEAN_STATE = "CLEAN_STATE";

const cleanState = () => {
    return {
        type: CLEAN_STATE
    };
};

export const clean = () => async (dispatch) => {
    dispatch(cleanState());
};

const reciveAgents = () => {
    return {
        type: RECIVE_AGENTS
    };
};

const finishAgents = (data) => {
    return {
        type: FINISH_AGENTS,
        data
    };
};

const errorAgents = () => {
    return {
        type: ERROR_AGENTS
    };
}
    ;
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

const finishProductsMantencion = (data) => {
    return {
        type: FINISH_PRODUCTS_MANTENCION,
        data
    };
};

const errorProducts = () => {
    return {
        type: ERROR_PRODUCTS
    };
};

export const getProducts = (id, view) => async (dispatch) => {
    try {
        dispatch(reciveProducts());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}products/ByCliente/${id}/${view}`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            if (view == 'mantencion') {
                let newData = []
                data.map(value => {
                    newData.push({
                        label: value.name,
                        value: value.id
                    })
                });
                dispatch(finishProductsMantencion(newData));
            } else {
                dispatch(finishProducts(data));
            }
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

export const getAgents = () => async (dispatch) => {
    try {
        dispatch(reciveAgents());

        const config = {
            method: 'GET'
        };

        const rawResponse = await fetch(`${url}products/agents`, config);
        if (rawResponse.status === 200) {
            const data = await rawResponse.json();
            dispatch(finishAgents(data));
        } else {
            dispatch(errorAgents());
        }
    } catch (error) {
        dispatch(errorAgents());
    }
};

export const addProducto = (data) => async (dispatch) => {
    try {
        dispatch(reciveInsert());
        format(data.fechaFabricacion, 'yyyy-MM-dd')
        format(data.fechaUltCarga, 'yyyy-MM-dd')
        format(data.fechaUltMantencion, 'yyyy-MM-dd')

        data.fechaFabricacion =  format(data.fechaFabricacion, 'yyyy-MM-dd');
        data.fechaUltCarga = format(data.fechaUltCarga, 'yyyy-MM-dd');
        data.fechaUltMantencion =  format(data.fechaUltMantencion, 'yyyy-MM-dd');

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
            getProducts( data.idCliente,'list')
            getProducts( data.idCliente,'list')
            getProducts( data.idCliente,'list')
            getProducts( data.idCliente,'list')
        } else {
            const { error } = await rawResponse.json(); 
            console.log(error)
            dispatch(errorInsert());
        }
        dispatch(cleanState());
    } catch (error) {
        dispatch(errorInsert());
        dispatch(cleanState());
    }
};
