import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {login, clean} from '../actions/auth';
import Snackbar from 'react-native-snackbar';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function LoginForm({navigation}) {
  const dispatch = useDispatch();
  const {
    token,
    authenticating,
    isAuthenticated,
    authenticateError,
    user,
  } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    rut: '',
    password: '',
  });

  const handleChange = (name) => (value) => {
    setData({...data, [name]: value});
  };

  const handleSubmit = () => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (token !== '' && isAuthenticated && user) {
      Snackbar.show({
        text: 'Inicio de sesión exitosamente',
        duration: Snackbar.LENGTH_SHORT,
      });
      navigation.navigate('clienteRegistrado');
    }
  }, [token, isAuthenticated]);

  useEffect(() => {
    if (authenticateError) {
      Snackbar.show({
        text: 'Error al iniciar sesión',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [authenticateError]);

  useEffect(() => {
    if (authenticating) {
      Snackbar.show({
        text: 'Iniciando sesión ....',
        duration: Snackbar.LENGTH_INDEFINITE,
      });
    }
  }, [authenticating]);

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <ScrollView style={styles.container}>
        <View style={styles.box1}>
          <Image
            style={styles.logoUser}
            source={require('../assets/usuario.png')}
          />
          <Text style={styles.textWelcome}>Bienvenid@ a WilugApp</Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            (Rut sin punto ni guión)
          </Text>
          <TextInput
            style={styles.input}
            placeholder="111111111"
            placeholderTextColor="#969696"
            value={data.rut}
            onChangeText={handleChange('rut')}
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#969696"
            secureTextEntry={true}
            value={data.password}
            onChangeText={handleChange('password')}
          />
          <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
            <Text style={styles.btnText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{height: '5%'}}
            onPress={() => navigation.navigate('recuperarContraseña')}>
            <Text style={styles.textUnder}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('80%'),
  },
  box: {
    height: box_height,
    backgroundColor: '#D7DBDD',
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 10,
    // alignItems: 'center',
    backgroundColor: 'red',
  },
  box3: {
    flex: 3,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
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
    marginBottom: 20,
  },
  input: {
    height: 50,
    color: '#2b2926',
    width: '80%',
    marginBottom: 30,
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
    top: 20,
    marginBottom: 40,
  },
});
