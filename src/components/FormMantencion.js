import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function FormMantencion() {
  state = {
    language: 'java',
  };

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={[styles.box4]}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/fondo2.jpg')}>
          <View style={{backgroundColor: 'rgba(235,245,250, .6)'}}>
            <ScrollView>
              <Text style={styles.titulo}>Solicita aquí tu mantención.</Text>
              <Text style={{marginLeft: 30, marginBottom: 15}}>
                Necesitamos saber algunas cosas para brindarte un excelente
                servicio.
              </Text>
              <Text style={styles.texto}>Nombre y apellido</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Diego López"
                placeholderTextColor="#969696"
              />

              <Text style={styles.texto}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: email@email.com"
                placeholderTextColor="#969696"
              />
              <Text style={styles.texto}>Teléfono</Text>
              <TextInput
                style={styles.input}
                placeholder="9 1234 5678"
                placeholderTextColor="#969696"
              />
              <Text style={styles.texto}>Empresa a la que perteneces</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese el nombre de la empresa"
                placeholderTextColor="#969696"
              />
              <Text style={styles.texto}>Región</Text>
              <View style={styles.picker}>
                <Picker style={{height: 45, marginLeft: 10}}>
                  <Picker.Item
                    label="Seleccione región"
                    value="0"
                    color="#969696"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>

              <Text style={styles.texto}> Comuna</Text>
              <View style={styles.picker}>
                <Picker style={{height: 45, marginLeft: 10}}>
                  <Picker.Item
                    label="Seleccione comuna"
                    value="0"
                    color="#969696"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
              <Text style={styles.texto}>Dirección </Text>
              <TextInput
                style={styles.input}
                placeholder="Dirección"
                placeholderTextColor="#969696"
              />
              <Text style={styles.texto}>Tipo de producto</Text>
              <View style={styles.picker}>
                <Picker style={{height: 45, marginLeft: 10}}>
                  <Picker.Item
                    label="Seleccione tipo de producto"
                    value="0"
                    color="#969696"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>
              <Text style={styles.texto}>Servicio</Text>
              <View style={styles.picker}>
                <Picker style={{height: 45, marginLeft: 10}}>
                  <Picker.Item
                    label="Seleccione motivo"
                    value="0"
                    color="#969696"
                  />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </View>

              <Text style={styles.texto}>Información adicional relevante</Text>
              <TextInput
                style={styles.inputMSJ}
                placeholder=""
                placeholderTextColor="#969696"
              />
              <TouchableOpacity style={styles.boton}>
                <Text style={styles.btnText}>Enviar</Text>
              </TouchableOpacity>
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
    resizeMode: 'contain',
  },
  input: {
    height: 45,
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
  inputMSJ: {
    height: 120,
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

  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  boton: {
    width: '100%',
    height: 100,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 16,
    marginLeft: 30,
  },
  box: {
    height: box_height,
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
  picker: {
    height: 45,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#212778',
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
  },
});
