import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Productos from './Productos';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function ListaProductos(props) {
  const {navigation} = props;
  const [showlist, setShowList] = useState(true);

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <View style={styles.box4}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/extintor.jpg')}>
          <View
            style={{
              backgroundColor: 'rgba(209,217,222, .8)',
              width: '100%',
              height: '100%',
            }}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.titulo}>Mis productos</Text>
                <View style={styles.añadir}>
                  <TouchableOpacity  onPress={() => navigation.navigate('añadirProducto')}>
                    <Image
                      style={styles.icono2}
                      source={require('../assets/mas.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {showlist ? (
                <>
                  <Productos />
                </>
              ) : (
                console.log('Hola')
              )}
            </ScrollView>
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
  },
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
  scrollView: {
    width: '100%',
    marginBottom: 50,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    marginLeft: 20,
    color: '#0A6DD3',
    textAlign: 'center',
  },
  boton: {
    marginRight: 10,
    marginTop: 15,
  },
  añadir: {
    width: '20%',
    height: 50,
    marginTop: 10,
  },
  icono2: {
    width: '60%',
    height: 40, 
    resizeMode: 'center',
    marginTop: 10
  },
});
