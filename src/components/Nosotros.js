import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Linking,
} from 'react-native';
import Base from './Base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function FormMantencion() {
  
  const goToUrl = type => {
    switch(type){
      case "kidde":
        Linking.openURL('https://www.kidde-fenwal.com/Public/Kidde');
        break;
      case "thermasteror":
        Linking.openURL('https://www.thermarestor.co.uk/');
        break;
      case "edwards":
        Linking.openURL('https://www.edwardsfiresafety.com/');
        break;
      case "buckeye":
        Linking.openURL('http://www.buckeyedetects.com/');
        break;
      case "apollo":
        Linking.openURL('https://www.apollo-fire.com/');
        break;
      case "firetrace":
        Linking.openURL('https://www.firetrace.com/');
        break;
      case "comm":
        Linking.openURL('https://www.comm-port.com/');
        break;
    }
  };
  return (
    <>
      <Base />
      <ScrollView style={[styles.box4]}>
        <Text style={styles.titulo3}>Nos destacamos por</Text>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono1.png')}
            />
            <Text style={styles.textIcono}>
              27% DE NUESTRAS TRABAJADORAS SON MUJERES
            </Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono2.png')}
            />
            <Text style={styles.textIcono}>
              40% DE NUESTRO DIRECTORIO SON MUJERES
            </Text>
          </View>

          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono3.png')}
            />
            <Text style={styles.textIcono}>
              33% DE LA GERENCIA ESTA COMPUESTA POR MUJERES
            </Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono4.png')}
            />
            <Text style={styles.textIcono}>
              9% DE NUESTROS TRABAJADORES SON ADULTOS MAYORES
            </Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono5.png')}
            />
            <Text style={styles.textIcono}>
              1% DE NUESTROS TRABAJADORES TIENEN CAPACIDADES DIFERENTES
            </Text>
          </View>
          <View style={{width: '33.33%'}}>
            <Image
              style={styles.icono2}
              source={require('../assets/icono6.png')}
            />
            <Text style={styles.textIcono}>
              7% DE NUESTROS TRABAJADORES SON DE PUEBLOS ORIGINARIOS Y
              EXTRANJEROS
            </Text>
          </View>
        </View>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/fondo.png')}>
          <View style={{backgroundColor: 'rgba(47,163,218, .6)'}}>
            <Text style={styles.titulo2}>¿Quienes somos?</Text>
            <Text style={styles.texto}>
              Wilug es una empresa de ingeniería de proyectos, diseño,
              mantención y montaje, que se especializa en los ámbitos
              relacionados con la protección y control de incendios; manejo de
              fluidos, hidráulica, mecánica y neumática general, capacitación y
              entrenamiento.
            </Text>
            <Text style={styles.texto}>
              Fundada en 1989, Wilug ha sido reconocida, como una empresa
              confiable y preocupada por sus clientes, con un énfasis en la
              innovación y nuevas tecnologías, situándola como un protagonista
              de la industria de la Seguridad.
            </Text>
            <Image
              style={styles.imagen}
              source={require('../assets/wilug1.png')}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={styles.titulo}>Marcas Representadas</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("kidde")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca1.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("thermasteror")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca2.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("edwards")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca3.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("buckeye")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca4.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("apollo")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca5.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("firetrace")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca6.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewMarcas}>
            <TouchableOpacity onPress={() =>goToUrl("comm")}>
              <Image
                style={styles.icono}
                source={require('../assets/marca7.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  texto: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 10,
    marginHorizontal: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  imagen: {
    height: hp('57%'),
    width: wp('100%'),
    
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
  },
  icono: {
    width: '90%',
    height: 90,
    resizeMode: 'center',
    marginLeft: 10,
  },
  titulo2: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    marginTop: 10,
  },
  titulo3: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    color: '#2FA3DA',
    marginTop: 10,
  },
  icono2: {
    resizeMode: 'center',
    height: 100,
    width: '100%',
    marginBottom: 20,
  },
  textIcono: {
    textAlign: 'center',
    marginBottom: 20,
  },
  boton: {
    alignItems: 'flex-start',
  },
  viewMarcas: {
    width: '25%',
    height: 80,
  },
});
