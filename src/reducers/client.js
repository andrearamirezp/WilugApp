import {
    RECIVE_REGISTER,
    FINISH_REGISTER,
    ERROR_REGISTER,
  } from "../actions/client";
  
  export default (
    state = {
      reciveRegister: false,
      successRegister: false,
      errorRegister: false,
    },
    action
  ) => {
    switch (action.type) {
      case RECIVE_REGISTER:
        return {
          ...state,
          reciveRegister: true,
        };
      case FINISH_REGISTER:
        return {
          ...state,
          reciveRegister: false,
          successRegister: true,
          response: action.data,
        };
      case ERROR_REGISTER:
        return {
          ...state,
          reciveRegister: false,
          errorRegister: true,
        };
      default:
        return state;
    }
  };
  