import {
    RECIVE_PRODUCTS,
    FINISH_PRODUCTS,
    ERROR_PRODUCTS
} from '../actions/products';

export default (
    state = {
        reciveProducts: false,
        successProducts: false,
        errorProducts: false,
        data: []
    },
    action,
) => {
    switch (action.type) {
        case RECIVE_PRODUCTS:
            return {
                ...state,
                reciveProducts: true,
                errorProducts: false,
                successProducts: false,
            };
        case FINISH_PRODUCTS:
            return {
                ...state,
                reciveProducts: false,
                successProducts: true,
                errorProducts: false,
                data: action.data
            };
        case ERROR_PRODUCTS:
            return {
                ...state,
                reciveProducts: false,
                errorProducts: true,
                successProducts: false,
            };
        default:
            return state;
    }
};
