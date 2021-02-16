import React, {useState} from 'react';
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

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Servicios(props) {
    const {navigation} = props;
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.box4}>
        <View>
          <ImageBackground
            style={styles.box3}
            source={require('../assets/extintor.jpg')}>
            <View style={[styles.menu]}>
              <View style={styles.menuItem}>
                <TouchableOpacity onPress={() => navigation.navigate('mantencion')}>
                  <Image
                    source={require('../assets/mantenimiento.png')}
                    style={styles.image}
                  />
                  <Text style={styles.cardText}>Solicitar mantención</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuItem}>
                <TouchableOpacity onPress={() => navigation.navigate('otrosServicios')}>
                  <Image
                    source={require('../assets/innovacion.png')}
                    style={styles.image}
                  />
                  <Text style={styles.cardText}>Ingeniería y sistemas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:  'rgba(209,217,222, .8)'
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#D7DBDD',
  },
  box4: {
    width: '100%',
    height: '80%',
  },
  logo: {
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  menuItem: {
    width: '100%',
    height: '40%',
    marginTop: 25
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 15,
  },
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
