import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Base from './Base';

export default function FormMantencion() {
  return (

    <>
    <Base/>
    <View style={[styles.box4]}>
      <ScrollView>
        <Text style={styles.titulo}>Solicitar Mantención</Text>
        <Text>Nombre Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#969696"
        />

        <Text>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          placeholderTextColor="#969696"
        />
        <Text>Empresa</Text>
        <TextInput
          style={styles.input}
          placeholder="Razón social"
          placeholderTextColor="#969696"
        />
        <Text>Dirección</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#969696"
        />
        <Text>Tipo de producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Extintor, Red húmeda, etc."
          placeholderTextColor="#969696"
        />
        <Text>Servicio</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#969696"
        />

        <Text>Mensaje</Text>
        <TextInput
          style={styles.inputMSJ}
          placeholder=""
          placeholderTextColor="#969696"
        />
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '95%',
    height: '80%',
    marginLeft: 10,
  },
  input: {
    height: 50,
    color: '#2b2926',
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778',
  },
  inputMSJ: {
    height: 150,
    color: '#2b2926',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  boton: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
