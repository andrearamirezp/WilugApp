import {
    RECIVE_PRODUCTS,
    FINISH_PRODUCTS,
    ERROR_PRODUCTS,
    RECIVE_DETAIL,
    FINISH_DETAIL,
    ERROR_DETAIL
} from '../actions/products';

export default (
    state = {
        reciveProducts: false,
        successProducts: false,
        errorProducts: false,
        data: [],
        reciveDetail: false,
        successDetail: false,
        errorDetail: false,
        product: {},
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
        case RECIVE_DETAIL:
            return {
                ...state,
                reciveDetail: true,
                errorDetail: false,
                successDetail: false,
            };
        case FINISH_DETAIL:
            return {
                ...state,
                reciveDetail: false,
                successDetail: true,
                errorDetail: false,
                product: action.data
            };
        case ERROR_DETAIL:
            return {
                ...state,
                reciveDetail: false,
                errorDetail: true,
                successDetail: false,
            };
        default:
            return state;
    }
};
