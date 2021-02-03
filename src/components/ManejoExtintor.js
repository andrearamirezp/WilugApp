import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from 'react-native-responsive-screen';


export default function Informacion(props) {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          
        }
      }, []);

    const togglePlaying = useCallback(() => {
          setPlaying((prev) => !prev);
      }, []);
      
    
    return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <Image style={styles.imgStyle}
                    source={require('../assets/logo.png')}
                />


            </SafeAreaView>
            <View style={styles.TituloSeccion}>
                <Text style={styles.TituloSeccion}>Informacion</Text>
            </View>
            <View style={styles.cuerpo}>
                <Text style={styles.texto}>Tipos de extintores</Text>
                  
            </View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"Ow51yqK70TY"}
                onChangeState={onStateChange}
            />
            
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
        resizeMode: 'center',
        height: hp('15%'), // 70% of height device screen
        width: wp('60%'),
        marginTop: 10,

    },
    Youtube: {
        width: 200,
        height: 120,
        marginTop: 30,

    },

    titulo: {

        height: 140,
        marginTop: 50,
        marginBottom: 30,
    },
    cuerpo: {
        backgroundColor: '#FFFFFF',
        height: '10%',
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
