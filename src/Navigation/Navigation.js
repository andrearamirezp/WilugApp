import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../components/Home";
import Mantencion from "../components/Mantencion";
import OtrosServicios from "../components/OtrosServicios";
import Informacion from "../components/Informacion";
import Nosotros from "../components/Nosotros";
import Contactanos from "../components/Contactanos";
import LoginForm from "../components/LoginForm";
import Productos from "../components/Productos";

const Stack = createStackNavigator();


export default function navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Wilug'}}/> 
            <Stack.Screen name="mantencion" component={Mantencion} options={{title:'Mantencion'}}/> 
            <Stack.Screen name="otrosServicios" component={OtrosServicios} options={{title:'Otros servicios'}}/> 
            <Stack.Screen name="informacion" component={Informacion} options={{title:'Informacion'}}/> 
            <Stack.Screen name="nosotros" component={Nosotros} options={{title:'Nosotros'}}/>
            <Stack.Screen name="contacto" component={Contactanos} options={{title:'Contactanos'}}/>
            <Stack.Screen name="loginForm" component={LoginForm} options={{title:'LoginForm'}}/>
            <Stack.Screen name="productos" component={Productos} options={{title:'Mis productos'}}/>
        </Stack.Navigator>
    )
}