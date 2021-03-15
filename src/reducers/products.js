import {
    RECIVE_PRODUCTS,
    FINISH_PRODUCTS,
    ERROR_PRODUCTS,
    RECIVE_DETAIL,
    FINISH_DETAIL,
    ERROR_DETAIL,
    RECIVE_INSERT,
    FINISH_INSERT,
    ERROR_INSERT,
    CLEAN_STATE,
    FINISH_PRODUCTS_MANTENCION
} from '../actions/products';

export default (
    state = {
        reciveProducts: false,
        successProducts: false,
        errorProducts: false,
        data: [],
        dataMantencion: [],
        reciveDetail: false,
        successDetail: false,
        errorDetail: false,
        product: {},
        reciveInsert: false,
        successInsert: false,
        errorInsert: false
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
        case FINISH_PRODUCTS_MANTENCION:
            return {
                ...state,
                reciveProducts: false,
                successProducts: true,
                errorProducts: false,
                dataMantencion: action.data
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
        case RECIVE_INSERT:
            return {
                ...state,
                reciveInsert: true,
                errorInsert: false,
                successInsert: false,
            };
        case FINISH_INSERT:
            return {
                ...state,
                reciveInsert: false,
                successInsert: true,
                errorInsert: false,
            };
        case ERROR_INSERT:
            return {
                ...state,
                reciveInsert: false,
                errorInsert: true,
                successInsert: false,
            };
        case CLEAN_STATE:
            return {
                ...state,
                reciveInsert: false,
                successInsert: false,
                errorInsert: false
            };
        default:
            return state;
    }
};
