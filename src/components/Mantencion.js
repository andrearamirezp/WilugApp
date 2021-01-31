import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import colors from '../utils/colors';

export default function Mantencion(props) {
  const {changeMantencion} = props;
  return (
    <>
      <Image style={styles.imgStyle} source={require('../assets/logo.png')} />
      <Text style={{fontSize: 30}}>Solicitar Mantención</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#969696"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#969696"
      />

      <TextInput
        style={styles.input}
        placeholder="Empresa"
        placeholderTextColor="#969696"
      />
    </>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'center',
    width: 200,
    height: 70,
    marginTop: 30,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
  },
  input: {
    height: 50,
    color: '#2b2926',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: colors.PRIMARY_COLOR_DARK,
    marginLeft: -200
  },
});
