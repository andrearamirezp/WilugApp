import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Touchable,
} from 'react-native';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function AñadirProducto(props) {
  return (
    <>
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <View style={styles.box4}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.titulo}>Preguntas Frecuentes</Text>
            <Text style={styles.subTitulo}>¿QUÉ ES UN EXTINTOR?</Text>
            <Text style={styles.texto}>
              Equipo portátil o móvil sobre ruedas sin locomoción propia, que
              contiene un agente extinguidor el cual puede expelerse bajo
              presión con el fin de combatir o extinguir un fuego incipiente.
            </Text>
            <Text style={styles.subTitulo}>¿QUÉ ES UN AGENTE EXTINTOR?</Text>
            <Text style={styles.texto}>
              Sustancia líquida, sólida o gaseosa que, al hacer contacto con un
              material en combustión, apague el fuego.
            </Text>
            <Text style={styles.subTitulo}>
              ¿QUÉ TIPO DE AGENTES EXTINTORES EXISTEN?
            </Text>
            <Text style={styles.texto}>
              Agentes secos, agentes limpios, agentes húmedos, agente bióxido de
              carbono y agentes especiales.
            </Text>
            <Text style={styles.subTitulo}>
              ¿CADA CUÁNTO TIEMPO SE DEBE DAR UN SERVICIO DE MANTENCIÓN A UN
              EXTINTOR?
            </Text>
            <Text style={styles.texto}>Una vez al año como mínimo.</Text>
            <Text style={styles.subTitulo}>
              ¿CÚAL ES LA VIDA ÚTIL DE UN EXTINTOR?
            </Text>
            <Text style={styles.texto}>
              Todos los extintores deben de tener grabada la fecha de
              fabricación, en base a esa fecha y por norma oficial, cada 5 años
              se debe de realizar prueba hidrostática para estar seguros de que
              el cilindro cuenta con la resistencia necesaria para contener la
              presión indicada según sea el caso. Si en el proceso el cilindro
              cuenta con alguna fuga inmediatamente será descontinuado y sacado
              de circulación haciendo constar mediante una carta al dueño de
              este, que el artefacto ya no tiene vida útil.
            </Text>
            <Text style={styles.subTitulo}>
              ¿DURANTE EL SERVICIO DE MANTENCION PONDRÉ CONTAR CON UN EQUIPO QUE
              RESPALDE MI NEGOCIO, DOMICILIO,INSTALACIONES ETC?
            </Text>
            <Text style={[styles.texto, {marginBottom: 60}]}>
              Por norma, nosotros como proveedores de este servicio debemos de
              otorgarle equipo en préstamo debidamente reglamentado en cuanto a
              mantenimiento y funcionalidad para respaldar su seguridad durante
              el tiempo que se encuentre en servicio su equipo.
            </Text>
          </ScrollView>
        </View>
      </View>
    </>
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
  titulo: {
    fontSize: 24,
    backgroundColor: '#0A6DD3',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 15,
    marginHorizontal: 15,
    textAlign: 'justify',
  },
  subTitulo: {
    fontSize: 18,
    margin: 15,
    color: '#1207CA',
  },
});
