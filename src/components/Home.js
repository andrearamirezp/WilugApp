import React, {useState}from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity, Linking} from 'react-native';
import colors from '../utils/colors';
import LoginForm from "./LoginForm";
import Contactanos from "./Contactanos";
import Mantencion from "./Mantencion";
/* import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 */
export default function Home(props){
    const {changeForm} = props;
    const [isContactanos, setIsContactanos] = useState(true);
    const [isMantencion, setIsMantencion] = useState(true);

    const changeContactanos = () => {
        setIsContactanos(!isContactanos);
    }
    const changeMantencion = () => {
        setIsMantencion(!isMantencion);
    }
    const abrirlink = ()=>{
        Linking.openURL('https://www.wilug.cl/tienda/')
    }
    return(
        <View style={styles.view}>
            {isContactanos ? (
                    <>
                    </>
                ) : (
                    <Contactanos changeContactanos={changeContactanos}/>
                )}
            {isMantencion ? (
                    <>
                    </>
                ) : (
                    <Mantencion changeMantencion={changeMantencion}/>
                )}    
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            
            <TouchableOpacity style={styles.maintenanceboton} onPress={changeMantencion} > 
            <Image style={styles.icono} source={require("../assets/maintenanceicon.png")}/>
                <Text style={styles.text}>Mantención</Text>
            </TouchableOpacity>       

            <TouchableOpacity style={styles.botonOtro}> 
            <Image style={styles.icono} source={require("../assets/otro.png")}/>
                <Text style={styles.text}>Otros servicios</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity style={styles.botonNosotros}> 
            <Image style={styles.icono} source={require("../assets/nosotros.png")}/>
                <Text style={styles.text}>Nosotros</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.botonTienda} onPress={abrirlink}> 
            <Image style={styles.icono} source={require("../assets/tienda.png")}/>
                <Text style={styles.text}>Tienda</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.botonExtintor}> 
            <Image style={styles.icono} source={require("../assets/extintor.png")}/>
                <Text style={styles.text}>Informacion</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.botonContacto} onPress={changeContactanos}> 
            <Image style={styles.icono} source={require("../assets/contacto.png")}/>
                <Text style={styles.text}>Contacto</Text>
            </TouchableOpacity> 

            <View>
                <TouchableOpacity style={styles.boton} onPress={changeForm}> 
                    <Text style={styles.textLogin}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity> 
                <Text style={styles.textRegistrar}>Registrarse</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        resizeMode: "center",
        height: 140,
        marginTop: 50,
        marginBottom: 50,
    },
    icono:{
        width: 80,
        height: 80
    },
    maintenanceboton: {
        marginRight: 200,
    },
    botonOtro: {
        marginLeft: 210,
        marginTop: -100
    },
    botonNosotros:{
        marginLeft: 200,
        marginTop: 20,
    },
    botonTienda: {
        marginLeft: 200,
        marginTop: 20,
    },
    botonExtintor: {
        marginRight: 200,
        marginTop: -240
    },
    botonContacto: {
        marginRight: 200,
        marginTop: 15,
    },
    text: {
        fontSize: 18,
    },
    textLogin: {
        fontSize: 18,
        marginTop: 50,
        textAlign: "center",
        color: "#fff"
    },
    textRegistrar:{
        fontSize: 18,
        marginTop: 20
    },
    viewLogin: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    boton: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5
    }
});
