import React, { useEffect } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { getHistory } from '../actions/history';
import Snackbar from 'react-native-snackbar';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Servicios(props) {

  const dispatch = useDispatch();
  const {
    reciveHistory,
    successHistory,
    errorHistory,
    data
  } = useSelector((state) => state.history);
  const {
    user
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (successHistory) {
      Snackbar.show({
        text: 'Historial cargado exitosamente',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [successHistory]);

  useEffect(() => {
    if (errorHistory) {
      Snackbar.show({
        text: 'Error al cargar el historial',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorHistory]);

  useEffect(() => {
    if (reciveHistory) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveHistory]);

  useEffect(() => {
    dispatch(getHistory(user.cliente_id))
  }, [])

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={[styles.box4]}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/extintor.jpg')}>
          <View
            style={{
              backgroundColor: 'rgba(209,217,222, .8)',
              width: '100%',
              height: '100%',
            }}>
            <DataTable style={{ backgroundColor: 'rgba(255,255,255, .5)' }}>
              <DataTable.Header>
                <DataTable.Title style={{ justifyContent: 'center' }}>SERVICIO</DataTable.Title>
                <DataTable.Title style={{ justifyContent: 'flex-end' }}>FECHA SOLICITUD</DataTable.Title>
                <DataTable.Title style={{ justifyContent: 'flex-end' }}>FECHA VISITA</DataTable.Title>
              </DataTable.Header>
              <ScrollView>
                {data.map(value => (
                  <DataTable.Row >
                    <DataTable.Cell >{value.nombre}</DataTable.Cell>
                    <DataTable.Cell numeric>{value.solicitud}</DataTable.Cell>
                    <DataTable.Cell numeric>{value.realizada}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </ScrollView>
            </DataTable>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#D7DBDD',
  },
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  text: {
    alignContent: 'center',
  },
});
