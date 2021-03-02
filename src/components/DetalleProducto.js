import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function DetalleProducto(props) {
  const {navigation} = props;
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <ScrollView style={styles.box4} showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Detalles del producto</Text>
        <View style={styles.viewText}>
          <Text style={styles.text}>Número de certificación:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Tipo de agente:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Capacidad:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Fecha de fabricación:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Fecha última carga:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Vencimiento de carga:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Fecha última mantención:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
        <View style={styles.viewText}>
          <Text style={styles.text}>Fecha próxima mantención:</Text>
          <Text style={styles.textOutPut}>HOLA</Text>
        </View>
      </ScrollView>
    </View>
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
    resizeMode: 'center',
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
