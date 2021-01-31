import React from "react";
import {StyleSheet, View, Text, SafeAreaView, Image,TextInput, Button} from "react-native";



export default function Contactanos (props) {
  
  return (
   <> 
    <SafeAreaView style={styles.safeArea}>
    <Image style = {styles.imgStyle}
       source = { require('../assets/logo.png')}
      />
         

    </SafeAreaView>
    <View style={styles.TituloSeccion}>
      <Text style={styles.TituloSeccion}>Contactanos</Text> 
    </View>
    <View style= {styles.cuerpo}>
      <Text style={styles.texto}>Nombre</Text>
      <TextInput style={styles.fondoInput} placeholder="Ingrese su nombre"/>

      <Text style={styles.texto}>Correo electronico</Text>
      <TextInput style={styles.fondoInput} placeholder="Ingrese su correo electronico"/>

      <Text style={styles.texto}>Mensaje</Text>
      <TextInput style={styles.TamañoVentana} placeholder="Motivo del contacto"/>
      <View style= {styles.espaciochico}></View>
      <Button style={styles.boton}
        
        title="Enviar"
        color="#212778"
        
      />
      <View style= {styles.espaciochico}></View>
      
    </View>
    
   </> 
  );
}


const styles = StyleSheet.create ({
  safeArea: {
    backgroundColor: '#FFFFFF',
    height:'23%',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems : "center",
  },

  imgStyle:{
    width:200,
    height:70,
    marginTop:30,
    
  },

  titulo:{
        
        height: 140,
        marginTop: 50,
        marginBottom: 30,
  },
  cuerpo:{
    backgroundColor: '#FFFFFF',
    height:'77%',
    alignItems : "center",
  },
  texto:{
    fontSize:16,
    marginTop:30,

  },
  fondoInput:{
        height: 50,
        color: '#2b2926',
        width: '80%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor:'#212778'
  },
  TamañoVentana:{
    height: 110,
    color: '#2b2926',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 2,
    borderColor:'#212778'
  },
  espacio:{
    marginTop:20,

  },
  espaciochico:{
    marginTop:10,

  },
  TituloSeccion:{
    fontSize:30,
    backgroundColor: '#FFFFFF',
    alignItems : "center",

  },
});