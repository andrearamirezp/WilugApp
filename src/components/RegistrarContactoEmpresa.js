import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import { setDataClient } from '../actions/client';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RegistrarContactoEmpresa(props) {
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
    comuna: ''
  });

  const {
    dataClient
  } = useSelector((state) => state.client);

  useEffect(() => {
    setData({ ...dataClient });
  }, []);

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setDataClient(data));
    navigation.navigate('crearContraseña')
  };

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Datos personales</Text>
        <Text style={{ marginLeft: 15, marginBottom: 10 }}>
          Datos de la persona encargada en la empresa
        </Text>
        <Text style={styles.texto}>Nombre y apellido cliente</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Diego López"
          placeholderTextColor="#969696"
          value={data.nombre}
          onChangeText={handleChange('nombre')}
        />

        <Text style={styles.texto}>Nombre y apellido persona de conctacto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Diego López"
          placeholderTextColor="#969696"
          value={data.nombreContacto}
          onChangeText={handleChange('nombreContacto')}
        />
        <Text style={styles.texto}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: email@email.com"
          placeholderTextColor="#969696"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <Text style={styles.texto}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="9 1234 5678"
          placeholderTextColor="#969696"
          value={data.telefono}
          onChangeText={handleChange('telefono')}
        />
        <Text style={styles.texto}>Otro teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="9 1234 5678"
          placeholderTextColor="#969696"
          value={data.secondTelefono}
          onChangeText={handleChange('secondTelefono')}
        />
        <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
          <Text style={styles.btnText}>Continuar</Text>
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
    resizeMode: 'contain',
    height: 120,
    marginTop: 20,
    marginBottom: 20,
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
});
