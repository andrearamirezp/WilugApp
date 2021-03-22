import React, { useState, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { recoverPass } from '../actions/auth';
import Snackbar from 'react-native-snackbar';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RecuperarContraseña({ navigation }) {
  const dispatch = useDispatch();
  const {
    reciveRecover,
    sucessRecover,
    errorRecover
  } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    email: ''
  });

  useEffect(() => {
    if (sucessRecover) {
      Snackbar.show({
        text: 'Contraseña actualizada, revise su correo',
        duration: Snackbar.LENGTH_SHORT,
      });
      navigation.navigate('loginForm');
    }
  }, [sucessRecover]);

  useEffect(() => {
    if (errorRecover) {
      Snackbar.show({
        text: 'Error al recuperar la contraseña',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorRecover]);

  useEffect(() => {
    if (reciveRecover) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveRecover]);

  const handleSubmit = () => {
    dispatch(recoverPass(data));
  };

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Olvidé mi contraseña</Text>
        <Text style={styles.texto}>
          Por favor, escribe tu correo electrónico.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: email@email.com"
          placeholderTextColor="#969696"
          value={data.email}
          onChangeText={handleChange('email')}
        />
        <TouchableOpacity
          style={styles.boton}
          onPress={handleSubmit}
        >
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
  titulo: {
    fontSize: 24,
    color: '#0A6DD3',
    marginBottom: 20,
    marginTop: 20,
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
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
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
});
