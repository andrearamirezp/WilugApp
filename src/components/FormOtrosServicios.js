import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Base from './Base';

export default function FormMantencion(props) {
  const {navigation} = props;
  return (
    <>
      <Base />
      <View style={[styles.box4]}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.Youtube}
              source={require('../assets/servicio1.png')}
            />
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.texto}>
                Sistema de detección y alarma contra incendio
              </Text>
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('formSolicitarservicio')}>
                <Text style={styles.text}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.Youtube}
              source={require('../assets/servicio2.png')}
            />
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.texto}>
                Sistema de extinción contra incendio en base a agua
              </Text>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.text}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.Youtube}
              source={require('../assets/servicio3.png')}
            />
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.texto}>
                Sistema de extinción contra incendio en base de gas
              </Text>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.text}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.Youtube}
              source={require('../assets/servicio4.png')}
            />
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.texto}>
                Sistema de extinción contra incendio en base a polvo químico
              </Text>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.text}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={styles.Youtube}
              source={require('../assets/servicio5.png')}
            />
            <View
              style={{
                width: '50%',
              }}>
              <Text style={styles.texto}>
                Sistema de extinción contra incendio para cocinas
              </Text>
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.text}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '80%',
  },
  input: {
    height: 50,
    color: '#2b2926',
    width: '100%',
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778',
  },
  inputMSJ: {
    height: 150,
    color: '#2b2926',
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 25,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778',
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  Youtube: {
    width: '50%',
    height: 200,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  boton: {
    color: '#fff',
    fontSize: 18,
    height: 50,
    width: '90%',
    marginLeft:  10,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'relative',
    top: 50,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
});
