import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RegistrarContactoEmpresa(props) {
    const {navigation}= props
  state = {
    language: 'java',
  };
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Datos personales</Text>
        <Text style={styles.texto}>Nombre y apellido</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Diego López"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Rut</Text>
        <TextInput
          style={styles.input}
          placeholder="12.345.678-9"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: email@email.com"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="9 1234 5678"
          placeholderTextColor="#969696"
        />
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('crearContraseña')}>
          <Text style={styles.btnText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: box_height,
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
    width: '100%',
    height: '80%',
    // backgroundColor: 'red',
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
