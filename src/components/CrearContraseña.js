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

export default function CrearContraseña() {
  state = {
    language: 'java',
  };
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Crea tu contraseña</Text>
        <Text style={{marginLeft: 15, marginBottom: 10}}>
          Asegura tu cuenta con una contraseña de al menos 8 caracteres. 
        </Text>
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
        <TouchableOpacity style={styles.boton}>
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
    resizeMode: 'center',
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
