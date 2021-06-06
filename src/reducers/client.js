import {
  RECIVE_REGISTER,
  FINISH_REGISTER,
  ERROR_REGISTER,
  RECIVE_REGION,
  FINISH_REGION,
  ERROR_REGION,
  RECIVE_COMUNA,
  FINISH_COMUNA,
  ERROR_COMUNA,
  SET_DATA,
  CLEAN_STATE
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
    regions: [],
    comunas: [],
    reciveRegion: false,
    successRegion: false,
    errorRegion: false,
    reciveComuna: false,
    successComuna: false,
    errorComuna: false,
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
      };
    case ERROR_REGISTER:
      return {
        ...state,
        reciveRegister: false,
        errorRegister: true,
      };
    case RECIVE_REGION:
      return {
        ...state,
        reciveRegion: true,
      };
    case FINISH_REGION:
      return {
        ...state,
        reciveRegion: false,
        successRegion: true,
        regions: action.data,
      };
    case ERROR_REGION:
      return {
        ...state,
        reciveRegion: false,
        errorRegion: true,
      };
    case RECIVE_COMUNA:
      return {
        ...state,
        reciveComuna: true,
        successComuna: false
      };
    case FINISH_COMUNA:
      return {
        ...state,
        reciveComuna: false,
        successComuna: true,
        comunas: action.data,
      };
    case ERROR_COMUNA:
      return {
        ...state,
        reciveComuna: false,
        errorComuna: true,
      };
    case SET_DATA:
      return {
        ...state,
        dataClient: action.data,
      };
    case CLEAN_STATE:
      return {
        ...state,
        reciveRegister: false,
        successRegister: false,
        errorRegister: false,
        reciveRegion: false,
        successRegion: false,
        errorRegion: false,
        reciveComuna: false,
        successComuna: false,
        errorComuna: false,
      };
    default:
      return state;
  }
};
