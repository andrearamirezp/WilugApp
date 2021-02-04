import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';
import Base from './Base';

export default function Contactanos() {
  return (
    <>
      <Base />
      <ScrollView style={[styles.box4]}>
        <View>
          <Text style={styles.titulo2}>Habla con nosotros</Text>
          <Text style={styles.texto}>Nombre Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#969696"
          />
          <Text style={styles.texto}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="#969696"
          />
          <Text style={styles.texto}>Teléfono</Text>
          <TextInput style={styles.input} placeholderTextColor="#969696" />
          <Text style={styles.texto}>Mensaje</Text>
          <TextInput
            style={styles.inputMSJ}
            placeholder=""
            placeholderTextColor="#969696"
          />
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.btnText}>Enviar</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/mapa.jpg')}>
          <View style={{backgroundColor: 'rgba(235,245,250, .6)'}}>
            <Text style={styles.titulo2}>Sucursales</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <View style={{width: '35%', marginLeft: 5}}>
                <Text style={styles.titulo}>Calama</Text>
                <Text style={{textAlign: 'center'}}>
                  Avda. Arturo Prat #2576
                </Text>
                <Text style={{textAlign: 'center', color: 'blue'}}>lacarvajal@wilug.cl</Text>
                <Text style={{textAlign: 'center'}}>+569 9563 3527 </Text>
              </View>
              <View style={{width: '28%', marginLeft: 10}}>
                <Text style={styles.titulo}>Coquimbo</Text>
                <Text style={{textAlign: 'center'}}>
                  Los Carpinteros #1250, Barrio Industrial
                </Text>
                <Text style={{textAlign: 'center', color: 'blue'}}>ventas@wilug.cl</Text>
                <Text style={{textAlign: 'center'}}>+569 4410 3811</Text>
              </View>
              <View style={{width: '28%', marginLeft: 15}}>
                <Text style={styles.titulo}>Express</Text>
                <Text style={{textAlign: 'center'}}>
                  Pedro Aguirre Cerca #865, El Llano, Coquimbo
                </Text>
                <Text style={{textAlign: 'center', color: 'blue'}}>egarri@wilug.cl </Text>
                <Text style={{textAlign: 'center'}}>+569 6494 7726</Text>
              </View>
              <View style={{width: '35%', marginLeft: 60}}>
                <Text style={styles.titulo}>Copaipó</Text>
                <Text style={{textAlign: 'center'}}>Los Aromos #1705</Text>
                <Text style={{textAlign: 'center', color: 'blue'}}>mescobar@wilug.cl</Text>
                <Text style={{textAlign: 'center'}}>+569 5012 5338</Text>
              </View>

              <View style={{width: '35%'}}>
                <Text style={styles.titulo}>Santiago</Text>
                <Text style={{textAlign: 'center'}}>
                  Av. El Vestisquero #1225, Renca
                </Text>
                <Text style={{textAlign: 'center', color: 'blue'}}>comercial@wilug.cl</Text>
                <Text style={{textAlign: 'center'}}>+569 6468 2685</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  box4: {
    height: '60%',
    backgroundColor: 'white',
  },
  box3: {
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  titulo2: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    height: 50,
    color: '#2b2926',
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#212778',
  },
  texto: {
    fontSize: 15,
    marginLeft: 30,
  },
  inputMSJ: {
    height: 150,
    color: '#2b2926',
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 25,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#212778',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  boton: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
