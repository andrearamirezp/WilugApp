import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Header from './src/components/Header';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function LayoutBase() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={[styles.box, styles.box2]}>
        <Image
          style={styles.logoUser}
          source={require('../assets/usuario.png')}
        />
        <Text style={styles.textWelcome}>Bienvenid@ a WilugApp</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#969696"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.textUnder}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 3,
    // backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 10,
    // backgroundColor: '#8BC34A',
    alignItems: 'center',
  },
  box3: {
    flex: 3,
    // backgroundColor: '#e3aa1a',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: 150,
    marginTop: 40,
    marginBottom: 20,
  },
  logoUser: {
    width: 140,
    height: 140,
    marginTop: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  textWelcome: {
    color: '#212778',
    fontSize: 20,
    marginBottom: 40,
  },
  input: {
    height: 50,
    color: '#2b2926',
    width: '80%',
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  textUnder: {
    marginTop: 50,
    textDecorationLine: 'underline',
    color: '#0000FF',
  },
  boton: {
    color: '#fff',
    fontSize: 18,
    height: 50,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
    top: 20,
  },
});
