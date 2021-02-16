import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function FormSolicitarServicio() {
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Nombre del sistema</Text>
        <Text style={[styles.texto, {marginBottom: 10}]}>
          Desarrollo de la Ingeniaría de Sistemas contra incendio por un equipo
          profesional técnicamente experimentado.
        </Text>
        <Text style={[styles.texto, {marginBottom: 10}, {marginTop: 10}]}>
          Déjanos más detalles de tu proyecto.
        </Text>
        <TextInput
          style={styles.inputMSJ}
          multiline
          numberOfLines={8}
          placeholder=""
          placeholderTextColor="#969696"
        />
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: box_height,
    backgroundColor: '#D7DBDD',
  },
  container: {
    width: wp('100%'),
    height: hp('80%'),
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
    marginHorizontal: 20,
    textAlign: 'justify',
  },
  titulo: {
    fontSize: 22,
    color: '#0A6DD3',
    marginLeft: 15,
    marginBottom: 20,
    textAlign: 'center',
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
  inputMSJ: {
    height: 200,
    color: '#2b2926',
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 25,
    fontSize: 16,
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
  boton: {
    width: '100%',
    height: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
