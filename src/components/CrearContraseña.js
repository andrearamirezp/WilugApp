import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { registerClient } from '../actions/client';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function CrearContraseña(props) {
  const { navigation } = props
  const dispatch = useDispatch();

  const [data, setData] = useState({
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
    confirmPassword: ''
  });

  const {
    dataClient,
    reciveRegister,
    successRegister,
    errorRegister,
  } = useSelector((state) => state.client);

  useEffect(() => {
    setData({ ...dataClient });
  }, []);

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Registro de cliente', 'Contraseñas no coinciden');
    } else {
      dispatch(registerClient(data));
    }
  };

  useEffect(() => {
    if (successRegister) {
      Alert.alert('Registro de cliente', 'Exito al registrar el cliente');
      navigation.navigate('loginForm');
    }
  }, [successRegister]);

  useEffect(() => {
    if (errorRegister) {
      Alert.alert('Registro de cliente', 'Error al registrar el cliente');
    }
  }, [errorRegister]);

  useEffect(() => {
    if (reciveRegister) {
      console.log('cargando .....');
    }
  }, [reciveRegister]);

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Crea tu contraseña</Text>
        <Text style={{ marginLeft: 15, marginBottom: 10 }}>
          Asegura tu cuenta con una contraseña de al menos 8 caracteres.
        </Text>
        <Text style={styles.texto}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#969696"
          secureTextEntry={true}
          value={data.password}
          onChangeText={handleChange('password')}
        />
        <Text style={styles.texto}>Repite tu contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#969696"
          secureTextEntry={true}
          value={data.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
        />
        <TouchableOpacity style={styles.boton} onPress={
          (handleSubmit)
        }>
          <Text style={styles.btnText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: box_height,
    backgroundColor: '#D7DBDD'
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    width: '100%',
    height: '80%',
  },
  input: {
    height: 45,
    color: '#2b2926',
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#212778',
  },
  texto: {
    fontSize: 16,
    marginLeft: 30,
  },
  picker: {
    height: 45,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#212778',
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
  },
  titulo: {
    fontSize: 22,
    color: '#0A6DD3',
    marginLeft: 15,
    marginBottom: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  boton: {
    width: '100%',
    height: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
