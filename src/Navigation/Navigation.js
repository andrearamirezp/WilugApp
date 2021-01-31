import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../components/Home";
import Mantencion from "../components/Mantencion";
import OtrosServicios from "../components/OtrosServicios";
import ManejoExtintor from "../components/ManejoExtintor";
import Nosotros from "../components/Nosotros";
import Contactanos from "../components/Contactanos";
import LoginForm from "../components/LoginForm";
import Productos from "../components/Productos";

const Stack = createStackNavigator();


export default function navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Wilug'}}/> 
            <Stack.Screen name="mantencion" component={Mantencion} options={{title:'Mantención'}}/> 
            <Stack.Screen name="otrosServicios" component={OtrosServicios} options={{title:'Otros Servicios'}}/> 
            <Stack.Screen name="informacion" component={ManejoExtintor} options={{title:'Manejo de Extintores'}}/> 
            <Stack.Screen name="nosotros" component={Nosotros} options={{title:'Nosotros'}}/>
            <Stack.Screen name="contacto" component={Contactanos} options={{title:'Contáctanos'}}/>
            <Stack.Screen name="loginForm" component={LoginForm} options={{title:'LoginForm'}}/>
            <Stack.Screen name="productos" component={Productos} options={{title:'Mis productos'}}/>
        </Stack.Navigator>
    )
}