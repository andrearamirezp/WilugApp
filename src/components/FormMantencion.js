import React, { useState, useEffect } from 'react'
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/products';
import { saveMantencion } from '../actions/mantencion';
import { getHistory } from '../actions/history';
import Snackbar from 'react-native-snackbar';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;


export default function FormMantencion({ navigation }) {
  const [selectData, setSelectData] = useState({ selectedFruits: [] })

  const dispatch = useDispatch();
  const { reciveProducts, successProducts, errorProducts, dataMantencion } = useSelector(
    (state) => state.products,
  );
  const { reciveManrtencion, successManrtencion, errorManrtencion, } = useSelector(
    (state) => state.mantencion,
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (successProducts) {
      Snackbar.show({
        text: 'Productos cargado exitosamente',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [successProducts]);

  useEffect(() => {
    if (errorProducts) {
      Snackbar.show({
        text: 'Error al cargar los producttos',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorProducts]);

  useEffect(() => {
    if (reciveProducts) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveProducts]);

  useEffect(() => {
    if (successManrtencion) {
      dispatch(getHistory(user.cliente_id))
      Snackbar.show({
        text: 'Productos enviados a mantención',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [successManrtencion]);

  useEffect(() => {
    if (errorManrtencion) {
      Snackbar.show({
        text: 'Error al enviar los productos a mantención',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorManrtencion]);

  useEffect(() => {
    if (reciveManrtencion) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveManrtencion]);

  useEffect(() => {
    dispatch(getProducts(user.cliente_id, 'mantencion'));
  }, []);

  onSelectionsChange = (selectedFruits) => {
    setSelectData({ selectedFruits })
  }

  const handleSubmit = () => {
    dispatch(saveMantencion(selectData));
    navigation.navigate('clienteRegistrado');
  };

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={[styles.box4]}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/fondo2.jpg')}>
          <View style={{ backgroundColor: 'rgba(235,245,250, .6)' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.titulo}>Solicita aquí tu mantención.</Text>
              <View>
                <SelectMultiple
                  items={dataMantencion}
                  selectedItems={selectData.selectedFruits}
                  onSelectionsChange={this.onSelectionsChange} />
              </View>

              <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                <Text style={styles.btnText}>Enviar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '80%',
  },
  box3: {
    resizeMode: 'contain',
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
  inputMSJ: {
    height: 120,
    color: '#2b2926',
    marginTop: 10,
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

  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
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
    marginLeft: 30,
  },
  box: {
    height: box_height,
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
});

