import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Dimensions,
} from 'react-native';


var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Registrar(props) {
    const {navigation} = props
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.titulo}>¿Como desea continuar?</Text>
        <View style={styles.boxCard}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('registrarEmpresa')}>
            <View style={styles.viewImage}>
              <Image
                style={styles.cardImage}
                source={require('../assets/empresa.png')}
              />
            </View>
            <View style={styles.viewImage}>
              <Text style={styles.subtitulo}>Cliente empresa</Text>
              <Text>Empresas o personas naturales con giro comercial.</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.boxCard}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('registrarCliente')}>
            <View style={styles.viewImage}>
              <Image
                style={styles.cardImage}
                source={require('../assets/cliente.png')}
              />
            </View>
            <View style={styles.viewImage}>
              <Text style={styles.subtitulo}>Cliente particular</Text>
              <Text>No cuento con giro comercial.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  container: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  boxCard: {
    marginTop: 30,
    width: '80%',
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#212778',
    borderWidth: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardImage: {
    width: '60%',
    height: 100,
    resizeMode: 'center',
    marginHorizontal: 20,
  },
  viewImage: {
    width: '50%',
    height: 100,
  },
  titulo: {
    fontSize: 22,
    color: '#0A6DD3',
  },
  subtitulo: {
    fontSize: 18,
    textAlign:'justify',
    marginBottom: 5,
    marginTop: 10,
    color: '#212778'
  },
});
