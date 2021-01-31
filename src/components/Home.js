import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';

export default function Home() {
  return (
    <View>
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/mantencion.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Solicitar mantención</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/otro.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Otros servicios</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/extintor.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Manejo de extintores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/nosotros.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Nosotros</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/contacto.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Contáctanos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity>
            <Image
              source={require('../assets/tienda.png')}
              style={styles.image}
            />
            <Text style={styles.cardText}>Tienda</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewBoton}>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textLogin}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textRegistrar}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    width: '33.33333%',
    height: '40%',
    padding: 20,
  },
  menu: {
      marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: '70%',
    opacity: 0.8,
    resizeMode: 'center',
  },
  cardText: {
    fontSize: 15,
    textAlign: 'center',
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
});
