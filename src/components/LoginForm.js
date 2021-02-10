import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from "react-redux";
import { login } from '../actions/auth';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function LoginForm({ navigation }) {
  const dispatch = useDispatch();
  const { token, authenticating, isAuthenticated, authenticateError, user } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    rut: '',
    password: ''
  });

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (token !== '' && isAuthenticated && user) {
      console.log(token, isAuthenticated, user);
      Alert.alert('Inicio de sesión', 'inicio sesión exitoso');
      AsyncStorage.setItem('token', token);
      AsyncStorage.setItem('user', JSON.stringify(user));
      navigation.navigate('clienteRegistrado')
    }
  }, [token, isAuthenticated])

  useEffect(() => {
    if(authenticateError) {
      Alert.alert('Inicio de sesión', 'Error al iniciar sesión');
    }
  }, [authenticateError])

  useEffect(() => {
    if(authenticating) {
      console.log('cargando .....')
    }
  }, [authenticating])

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
          value={data.rut}
          onChangeText={handleChange("rut")}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#969696"
          secureTextEntry={true}
          value={data.password}
          onChangeText={handleChange("password")}
        />
        <TouchableOpacity
          style={styles.boton}
          onPress={handleSubmit}>
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{height: '5%'}}>
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
    backgroundColor: '#D7DBDD'
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 10,
    alignItems: 'center',
  },
  box3: {
    flex: 3,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: hp('100%'), // 70% of height device screen
    width: wp('80%'),
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
    top: 25,
    marginBottom: 50
  },
});
