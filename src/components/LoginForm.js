import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image,Button } from 'react-native';
import colors from '../utils/colors';

export default function LoginForm(props) {
    

    const login = () => {
        console.log("Iniciando sesión...");
    }

  
    return (
        <>  
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <Image style={styles.logoUser} source={require("../assets/usuario.png")}/>
            <Text style={styles.textWelcome}>Bienvenid@ a WilugApp</Text>
            <TextInput 
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#969696"
            />

            <TextInput 
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
            />

            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            
            <View style={styles.register}>
                <TouchableOpacity>
                    <Text style={styles.btnText}>Registrarse</Text>
                </TouchableOpacity>
            </View>

            
        </>
    );
}

const styles = StyleSheet.create({
    logo: {
        resizeMode: "center",
        height: 140,
        marginTop: 50,
        marginBottom: 30,
    },
    logoUser: {
        width: 140,
        height: 140,
        marginTop: 5,
        marginBottom: 20,
    },
    textWelcome: {
        color: colors.PRIMARY_COLOR_DARK,
        fontSize: 20,
        marginBottom: 20,
    },
    text: {
        marginTop: 20,
        textDecorationLine: "underline",
        color: "#0000FF"
    },
    input: {
        height: 50,
        color: '#2b2926',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor:colors.PRIMARY_COLOR_DARK
    }, 
    btnText: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    register:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 30
    }
});