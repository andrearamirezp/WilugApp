import React, { useEffect, useCallback, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from "react-redux";
import { registerClient } from '../actions/client';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RegistrarCliente({ navigation }) {
  const [data, setData] = useState({
    nombre: '',
    razonSocial: '',
    rut: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    email: '',
    tipo: '',
    password: ''
  });

  const dispatch = useDispatch();
  const { reciveRegister, successRegister, errorRegister } = useSelector((state) => state.client);

  const handleChange =  (name) => (value) => {
    setData({ ...data, [name]: value });
  };
  const doRequest = useCallback(async () => {
    dispatch(registerClient(data));
  }, [dispatch]);
  const Alerta = () =>
    Alert.alert(
      "Cambiar Datos",
      "¿Esta seguro de cambiar los datos?",
      [
        {
          text: "Volver",
          onPress: () => console.log("Cancelar Presionado"),
          style: "cancel"
        },
        { text: "SI", onPress: () => console.log("Si presionado") }
      ],
      { cancelable: false }
    );

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Felipe Castro blahblah</Text>
        <Text style={[styles.texto, {marginBottom: 10}]}>A continuación puedes modificar tus datos.</Text>
        
        <Text style={styles.texto}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: email@email.com"
          placeholderTextColor="#969696"
          value={data.email}
          onChangeText={handleChange("email")}
        />
        <Text style={styles.texto}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="9 1234 5678"
          placeholderTextColor="#969696"
          value={data.telefono}
          onChangeText={handleChange("telefono")}
        />
        <Text style={styles.texto}>Dirección</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#969696"
          secureTextEntry={true}
        />
        <Text style={styles.texto}>Repite tu contraseña</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#969696"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.boton} onPress={Alerta}>
          <Text style={styles.btnText}>Finalizar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  container: {
    width: wp('100%'),
    height: hp('80%'),
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
});
