import React, { useEffect } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailProduct } from '../actions/products';
import Snackbar from 'react-native-snackbar';
import moment from 'moment';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function DetalleProducto({ route }) {
  const { params } = route
  const dispatch = useDispatch();
  const {
    reciveDetail,
    successDetail,
    errorDetail,
    product,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (successDetail) {
      Snackbar.show({
        text: 'Detalle cargado exitosamente',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [successDetail]);

  useEffect(() => {
    if (errorDetail) {
      Snackbar.show({
        text: 'Error al cargar el detalle',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorDetail]);

  useEffect(() => {
    if (reciveDetail) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveDetail]);

  useEffect(() => {
    dispatch(getDetailProduct(params.id))
  }, [])

  return (
    product && (
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <ScrollView style={styles.box4} showsVerticalScrollIndicator={false}>
          <Text style={styles.titulo}>Detalles del producto</Text>
          <View style={styles.viewText}>
            <Text style={styles.text}>Número de certificación:</Text>
            <Text style={styles.textOutPut}>{product.num_cert == null ? '--' : product.num_cert}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Tipo de agente:</Text>
            <Text style={styles.textOutPut}>{product.nom_agente == null ? '--' : product.nom_agente}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Capacidad:</Text>
            <Text style={styles.textOutPut}>{product.cap_extagente == null ? '--' : `${product.cap_extagente} kg`}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Fecha de fabricación:</Text>
            <Text style={styles.textOutPut}>{moment(product.fecha_fabricacion).format('DD/MM/YYYY') == null ? '--' : moment(product.fecha_fabricacion).format('DD/MM/YYYY')}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Fecha última carga:</Text>
            <Text style={styles.textOutPut}>{moment(product.fecha_ultcarga).format('DD/MM/YYYY') == null ? '--' : moment(product.fecha_ultcarga).format('DD/MM/YYYY')}</Text>
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Vencimiento de carga:</Text>
            <Text style={styles.textOutPut}>{moment(product.fecha_vencarga).format('DD/MM/YYYY') == null ? '--' : moment(product.fecha_vencarga).format('DD/MM/YYYY')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '100%',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#D7DBDD',
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    color: '#0A6DD3',
    textAlign: 'center',
  },
  textOutPut: {
    fontSize: 18,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  viewText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
