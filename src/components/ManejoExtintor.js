import React, {useState, useCallback,useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import Base from './Base';
import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function ManejoExtintor() {
  const playerRef = useRef();

  const goToUrl = type => {
    switch(type){
      case "facebook":
        Linking.openURL('https://www.facebook.com/wilugchile/');
        break;
      case "instagram":
        Linking.openURL('https://www.instagram.com/wilugchile/?hl=es-la');
        break;
      case "twitter":
        Linking.openURL('https://twitter.com/wilugchile?lang=es');
        break;
      case "youtube":
        Linking.openURL('https://www.youtube.com/watch?v=Ow51yqK70TY')
    }
  };

  return (
    <>
      <Base />
      <View style={[styles.box4]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.TituloSeccion}>¡Prevenir es la clave!</Text>
          <Text style={styles.cuerpo1}>
            Te ayudamos a conocer los tipos de extintores
          </Text>
          <TouchableOpacity onPress={() =>goToUrl("youtube")}>
              <Image
              style={styles.imagenY}
              source={require('../assets/YoutubeVideo.png')}>

              </Image>
          </TouchableOpacity>  
          <Text style={styles.titulo2}>Tipos de fuego</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: 'white'
            }}>
            <View style={styles.viewMarcas}>
              <Image
                style={styles.icono}
                source={require('../assets/fuego1.jpg')}
              />
              <Text style={styles.textoFuego}>
                Madera. Cartón. Papel. Tela.
              </Text>
            </View>
            <View style={styles.viewMarcas}>
              <Image
                style={styles.icono}
                source={require('../assets/fuego2.jpg')}
              />
              <Text style={styles.textoFuego}>
                Pintura. Gasolina. Petróleo.
              </Text>
            </View>
            <View style={styles.viewMarcas}>
              <Image
                style={styles.icono}
                source={require('../assets/fuego3.jpg')}
              />
              <Text style={styles.textoFuego}>Equipos eléctricos.</Text>
            </View>
            <View style={styles.viewMarcas}>
              <Image
                style={styles.icono}
                source={require('../assets/fuego4.jpg')}
              />
              <Text style={styles.textoFuego}>
                Sodio. Potasio. Magnesio. Aluminio.
              </Text>
            </View>
            <View style={styles.viewMarcas}>
              <Image
                style={styles.icono}
                source={require('../assets/fuego5.jpg')}
              />
              <Text style={styles.textoFuego}>Grasas aceites de cocina.</Text>
            </View>
          </View>

          <View>
            <Text style={styles.cuerpo2}>
              EL uso del extintor puede ayudarte a evitar una tragedia
            </Text>
            <Image
              style={styles.imagen}
              source={require('../assets/extintor4.jpeg')}></Image>
            <View>
              <Text style={styles.cuerpo4}>
                Para prevenir incendios en tu hogar o trabajo debes conocer las
                partes que componen un extintor
              </Text>
              <Image
                style={styles.imagen2}
                source={require('../assets/extintor1.jpeg')}></Image>

              <Text style={styles.cuerpo3}>
                Más consejos e información en nuestras redes sociales
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View style={[styles.viewRedes, {marginLeft: 80}]}>
                  <TouchableOpacity onPress={() => goToUrl("facebook")}>
                    <Image
                      style={styles.icono2}
                      source={require('../assets/facebook.png')}></Image>
                  </TouchableOpacity>
                  
                </View>
                <View style={styles.viewRedes}>
                  <TouchableOpacity onPress={() => goToUrl("instagram")}>
                    <Image
                      style={styles.icono2}
                      source={require('../assets/instagram.png')}></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewRedes}>
                  <TouchableOpacity onPress={() =>goToUrl("twitter")}>
                    <Image
                      style={styles.icono2}
                      source={require('../assets/twitter.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '95%',
    height: '80%',
    marginLeft: 10,
  },
  imagen: {
    resizeMode: 'contain',
    height: hp('70%'),
    width: wp('100%'),
  },
  imagenY: {
    
    height: hp('30%'),
    width: wp('100%'),
  },
  imagen2: {
    height: hp('40%'), 
    width: wp('100%'),
  },
  TituloSeccion: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  cuerpo1: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  titulo2: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
    backgroundColor: '#F12929',
  },
  cuerpo2: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#2FA3DA',
    color: 'white',
  },
  cuerpo3: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  viewMarcas: {
    width: '20%',
    alignItems: 'center',
  },
  textoFuego: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
  },
  cuerpo4: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  viewRedes: {
    width: '20%',
    height: 50,
    marginTop: 10
  },
  icono2: {
    width: '70%',
    height: 40, 
    resizeMode: 'contain'
  },
});
