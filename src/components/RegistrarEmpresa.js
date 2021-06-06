import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { setDataClient } from '../actions/client';
import RNPickerSelect from 'react-native-picker-select';
import LoadingView from 'react-native-loading-view';
import { getRegions, getComunas } from '../actions/client';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function RegistrarEmpresa(props) {
  const { navigation } = props
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [comunasPicker, setComunasPicker] = useState([]);

  const [data, setData] = useState({
    nombre: '',
    razonSocial: '',
    rut: '',
    direccion: '',
    ciudad: '',
    telefono: '',
    email: '',
    tipo: 'E',
    password: '',
    nombreContacto: '',
    direccionFactura: '',
    giro: '',
    secondTelefono: '',
    comuna: '',
  });

  const {
    regions,
    successRegion,
    errorRegion,
    successComuna,
    errorComuna,
    reciveComuna,
    comunas
  } = useSelector((state) => state.client);

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  const handleChangePicker = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const filterComuna = (value) => {
    dispatch(getComunas(value))
  };

  useEffect(() => {
    dispatch(getRegions())
  }, [])

  useEffect(() => {
    if (successRegion) {
      setLoading(false)
    }
  }, [successRegion])

  useEffect(() => {
    if (errorRegion) {
      Alert.alert('Registro de cliente', 'Ocurrio un error al cargar la aplicación');
      navigation.navigate('home');
    }
  }, [errorRegion])

  useEffect(() => {
    if (reciveComuna) {
      setComunasPicker([])
    }
  }, [reciveComuna])

  useEffect(() => {
    if (successComuna) {
      setComunasPicker(comunas)
    }
  }, [successComuna])

  useEffect(() => {
    if (errorComuna) {
      Alert.alert('Registro de cliente', 'Ocurrio un error al cargar la aplicación');
      navigation.navigate('home');
    }
  }, [errorComuna])

  const handleSubmit = () => {
    dispatch(setDataClient(data));
    navigation.navigate('registrarContactoEmpresa');
  };

  return (
    <LoadingView text={"cargando"} loading={loading}>
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <ScrollView style={styles.container}>
          <Text style={styles.titulo}>Datos de la empresa</Text>
          <Text style={styles.texto}>Empresa</Text>
          <TextInput
            style={styles.input}
            placeholder="Razon social"
            placeholderTextColor="#969696"
            value={data.razonSocial}
            onChangeText={handleChange('razonSocial')}
          />
          <Text style={styles.texto}>Rut</Text>
          <Text style={{marginLeft: 30, fontSize:12}}>(sin punto ni guión)</Text>
          <TextInput
            style={styles.input}
            placeholder="123456789"
            placeholderTextColor="#969696"
            value={data.rut}
            onChangeText={handleChange('rut')}
          />
          <Text style={styles.texto}>Giro</Text>
          <TextInput
            style={styles.input}
            placeholder="Particular"
            placeholderTextColor="#969696"
            value={data.giro}
            onChangeText={handleChange('giro')}
          />
          <Text style={styles.texto}>Región</Text>
          <View style={styles.picker}>
            <RNPickerSelect
              placeholder={{ label: "Seleccione una región", value: null }}
              onValueChange={(value) => filterComuna(value)}
              style={{ inputAndroid: { color: 'black' } }}
              useNativeAndroidPickerStyle={true}
              items={regions}
            />
          </View>

          <Text style={styles.texto}> Comuna</Text>
          <View style={styles.picker}>
            <RNPickerSelect
              placeholder={{ label: "Seleccione una comuna", value: null }}
              onValueChange={(value) => handleChangePicker('comuna', value)}
              style={{ inputAndroid: { color: 'black' } }}
              useNativeAndroidPickerStyle={true}
              items={comunasPicker}
              value={data.comuna}
            />
          </View>
          <Text style={styles.texto}>Ciudad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Coquimbo"
            placeholderTextColor="#969696"
            value={data.ciudad}
            onChangeText={handleChange('ciudad')}
          />
          <Text style={styles.texto}>Dirección de trabajo</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            placeholderTextColor="#969696"
            value={data.direccion}
            onChangeText={handleChange('direccion')}
          />
          <Text style={styles.texto}>Dirección factura</Text>
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            placeholderTextColor="#969696"
            value={data.direccionFactura}
            onChangeText={handleChange('direccionFactura')}
          />
          <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LoadingView>
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
    resizeMode: 'contain',
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
