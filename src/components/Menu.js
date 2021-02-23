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

export default function Menu(props) {
  const {navigation} = props;
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      
        <ScrollView style={styles.box4}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/notificacion.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('nosotros')}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/grupo.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>¿Quienes somos?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/libro-abierto.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('informacion')}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/extintor-de-incendios.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Manejo de extintores</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('preguntasFrecuentes')}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/ayudar.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Preguntas frecuentes</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('cambiarDatos')}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/boligrafo.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Modificar mis datos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('contacto')}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/contacto1.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Contáctanos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={styles.listMenu}>
              <Image
                source={require('../assets/logout.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>Cerrar sesión</Text>
          </TouchableOpacity>
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
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logo: {
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 60,
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#202BB8',
    backgroundColor: 'white',
  },
  listMenu: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
