import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home(props) {
  const {navigation} = props;

  const abrirlink = () => {
    Linking.openURL('https://www.wilug.cl/tienda/');
  };
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('informacion')}>
            <Image
              source={require('../assets/extintor2.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Manejo de extintores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('nosotros')}>
            <Image
              source={require('../assets/nosotros.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Nosotros</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity onPress={() => navigation.navigate('contacto')}>
            <Image
              source={require('../assets/contacto.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Contáctanos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity onPress={abrirlink}>
            <Image
              source={require('../assets/tienda.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Tienda</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewBoton}>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => navigation.navigate('loginForm')}>
          <Text style={styles.textLogin}>Ir a tu sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('registrar')}>
          <Text style={styles.textRegistrar}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D7DBDD'
  },
  menuItem: {
    width: '50%',
    height: '40%',
  },
  menu: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '70%',
    opacity: 0.8,
    resizeMode: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  boton: {
    color: '#fff',
    fontSize: 18,
    height: 50,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  textLogin: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  viewBoton: {
    position: 'absolute',
    width: '100%',
    height: 100,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegistrar: {
    fontSize: 16,
    marginTop: 20,
  },
  header: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: hp('100%'), // 70% of height device screen
    width: wp('90%'),
    marginTop: 40,
    marginBottom: 20,
  },
});
