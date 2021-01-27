import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button } from "react-native";



export default function Nosotros(props) {
  const { changeNosotros } = props;
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Image style={styles.imgStyle}
          source={require('../assets/logo.png')}
        />


      </SafeAreaView>
      <View style={styles.TituloSeccion}>
        <Text style={styles.TituloSeccion}>Nosotros</Text>
      </View>
      <View style={styles.cuerpo}>
        <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras bibendum felis at laoreet tincidunt. 
        Ut hendrerit velit id pellentesque hendrerit. 
        Maecenas convallis, augue sollicitudin dictum mollis, 
        odio eros fermentum ante, a vestibulum ipsum odio eu velit. 
        Ut a blandit nibh. Sed mattis quis risus eu consectetur.</Text>
        <Image style={styles.imgStyle}
          source={require('../assets/nosotros.jpg')}
        />
        <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Cras bibendum felis at laoreet tincidunt. 
        Ut hendrerit velit id pellentesque hendrerit.</Text>
        
        <View style={styles.espacio}></View>
        <Button style={styles.boton}

          title="Volver"
          color="#212778"
          onPress={changeNosotros}
        />
      </View>

    </>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    height: '23%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },

  imgStyle: {
    width: 200,
    height: 70,
    marginTop: 30,

  },

  titulo: {

    height: 140,
    marginTop: 50,
    marginBottom: 30,
  },
  cuerpo: {
    backgroundColor: '#FFFFFF',
    height: '77%',
    alignItems: "center",
  },
  texto: {
    fontSize: 16,
    marginTop: 30,

  },
  fondoInput: {
    height: 50,
    color: '#2b2926',
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778'
  },
  TamañoVentana: {
    height: 110,
    color: '#2b2926',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#212778'
  },
  espacio: {
    marginTop: 20,

  },
  TituloSeccion: {
    fontSize: 30,
    backgroundColor: '#FFFFFF',
    alignItems: "center",

  },
});