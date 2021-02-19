import {
  RECIVE_REGISTER,
  FINISH_REGISTER,
  ERROR_REGISTER,
  SET_DATA,
} from '../actions/client';

export default (
  state = {
    reciveRegister: false,
    successRegister: false,
    errorRegister: false,
    dataClient: {
      nombre: '',
      razonSocial: '',
      rut: '',
      direccion: '',
      ciudad: '',
      telefono: '',
      email: '',
      tipo: '',
      password: '',
      nombreContacto: '',
      direccionFactura: '',
      giro: '',
      secondTelefono: '',
      comuna: '',
    },
  },
  action,
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
    case SET_DATA:
      return {
        ...state,
        dataClient: action.data,
      };
    default:
      return state;
  }
};
