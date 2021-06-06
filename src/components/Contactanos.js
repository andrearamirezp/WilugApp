import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Linking,
} from 'react-native';
import Base from './Base';
import { useSelector, useDispatch } from 'react-redux';
import { sendMailContacto } from '../actions/services';
import Snackbar from 'react-native-snackbar';

export default function Contactanos() {
  

  const initiateWhatsApp = () => {
    
    let url =
      'whatsapp://send?text=' + 
       
      '&phone=56961684482' ;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Debe tener la aplicacion de WhatsApp instalada en su telefono');
      });
  };

  const Alerta = () =>
    Alert.alert(
      "Contacto",
      "¿Esta seguro de enviar este mensaje?",
      [
        {
          text: "Volver",
          onPress: () => console.log("Cancelar Presionado"),
          style: "cancel"
        },
        { text: "SI", onPress: () => handleSubmit() }
      ],
      { cancelable: false }
    );

  const dispatch = useDispatch();
  const {
    reciveContacto,
    successContacto,
    errorContacto,
  } = useSelector((state) => state.services);

  const {
    user
  } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    email_cliente: '',
    nombre_cliente: '',
    telefono: '',
    msg: ''
  });

  useEffect(() => {
    if (successContacto) {
      Snackbar.show({
        text: 'Solicitud de contacto enviada',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [successContacto]);

  useEffect(() => {
    if (errorContacto) {
      Snackbar.show({
        text: 'Error al enviar la solicitud de contacto',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [errorContacto]);

  useEffect(() => {
    if (reciveContacto) {
      Snackbar.show({
        text: 'Cargando ....',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  }, [reciveContacto]);

  const handleSubmit = () => {
    dispatch(sendMailContacto(data));
  };

  const handleChange = (name) => (value) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (user.email_cliente) {
      setData(user);
    }
  }, [user])

  return (
    <>
      <Base />
      <ScrollView style={[styles.box4]} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.titulo2}>Habla con nosotros</Text>
          <Text style={styles.texto}>Nombre Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Diego López"
            placeholderTextColor="#969696"
            value={data.nombre_cliente}
            onChangeText={handleChange('nombre_cliente')}
          />
          <Text style={styles.texto}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            placeholderTextColor="#969696"
            value={data.email_cliente}
            onChangeText={handleChange('email_cliente')}
          />
          <Text style={styles.texto}>Teléfono</Text>
          <TextInput style={styles.input}
            placeholder="9 1234 5678"
            placeholderTextColor="#969696"
            value={data.telefono}
            onChangeText={handleChange('telefono')}
          />
          <Text style={styles.texto}>Mensaje</Text>
          <TextInput
            style={styles.inputMSJ}
            multiline
            numberOfLines={5}
            placeholder=""
            placeholderTextColor="#969696"
            value={data.msg}
            onChangeText={handleChange('msg')}
          />
          <TouchableOpacity style={styles.boton} onPress={Alerta}>
            <Text style={styles.btnText}>Enviar</Text>
          </TouchableOpacity>
          
          <Text style={styles.titulo2}>Para un contacto mas directo</Text>
          <View >
                  <TouchableOpacity  onPress={initiateWhatsApp}>
                    <Image
                      style={styles.icono2}
                      source={require('../assets/whatsapp.png')}></Image>
                  </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/mapa.jpg')}>
          <View style={{ backgroundColor: 'rgba(235,245,250, .6)' }}>
            <Text style={styles.titulo2}>Sucursales</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <View style={{ width: '35%', marginLeft: 5 }}>
                <Text style={styles.titulo}>Calama</Text>
                <Text style={{ textAlign: 'center' }}>
                  Avda. Arturo Prat #2576
                </Text>
                <Text style={{ textAlign: 'center', color: 'blue' }}>lacarvajal@wilug.cl</Text>
                <Text style={{ textAlign: 'center' }}>+569 9563 3527 </Text>
              </View>
              <View style={{ width: '28%', marginLeft: 10 }}>
                <Text style={styles.titulo}>Coquimbo</Text>
                <Text style={{ textAlign: 'center' }}>
                  Los Carpinteros #1250, Barrio Industrial
                </Text>
                <Text style={{ textAlign: 'center', color: 'blue' }}>ventas@wilug.cl</Text>
                <Text style={{ textAlign: 'center' }}>+569 4410 3811</Text>
              </View>
              <View style={{ width: '28%', marginLeft: 15 }}>
                <Text style={styles.titulo}>Express</Text>
                <Text style={{ textAlign: 'center' }}>
                  Pedro Aguirre Cerca #865, El Llano, Coquimbo
                </Text>
                <Text style={{ textAlign: 'center', color: 'blue' }}>egarri@wilug.cl </Text>
                <Text style={{ textAlign: 'center' }}>+569 6494 7726</Text>
              </View>
              <View style={{ width: '35%', marginLeft: 60 }}>
                <Text style={styles.titulo}>Copiapó</Text>
                <Text style={{ textAlign: 'center' }}>Los Aromos #1705</Text>
                <Text style={{ textAlign: 'center', color: 'blue' }}>mescobar@wilug.cl</Text>
                <Text style={{ textAlign: 'center' }}>+569 5012 5338</Text>
              </View>

              <View style={{ width: '35%' }}>
                <Text style={styles.titulo}>Santiago</Text>
                <Text style={{ textAlign: 'center' }}>
                  Av. El Vestisquero #1225, Renca
                </Text>
                <Text style={{ textAlign: 'center', color: 'blue' }}>comercial@wilug.cl</Text>
                <Text style={{ textAlign: 'center' }}>+569 6468 2685</Text>
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
  icono2: {
    width: '100%',
    height: 40, 
    resizeMode: 'contain',
    

  },
  
});
