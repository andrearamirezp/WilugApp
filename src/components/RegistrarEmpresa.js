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
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RegistrarEmpresa(props) {
  const {navigation} = props
  state = {
    language: 'java',
  };
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>Datos de la empresa</Text>
        <Text style={styles.texto}>Empresa</Text>
        <TextInput
          style={styles.input}
          placeholder="Razon social"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Rut</Text>
        <TextInput
          style={styles.input}
          placeholder="12.345.678-9"
          placeholderTextColor="#969696"
        />
        <Text style={styles.texto}>Región</Text>
        <View style={styles.picker}>
          <Picker style={{height: 45, marginLeft: 10}}>
            <Picker.Item label="Seleccione región" value="0" color="#969696" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>

        <Text style={styles.texto}> Comuna</Text>
        <View style={styles.picker}>
          <Picker style={{height: 45, marginLeft: 10}}>
            <Picker.Item label="Seleccione comuna" value="0" color="#969696" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
        <Text style={styles.texto}>Dirección</Text>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#969696"
        />
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('registrarContactoEmpresa')}>
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
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
