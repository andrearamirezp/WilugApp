import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import Mantencion from '../components/FormMantencion';
import OtrosServicios from '../components/FormOtrosServicios';
import ManejoExtintor from '../components/ManejoExtintor';
import Nosotros from '../components/Nosotros';
import Contactanos from '../components/Contactanos';
import LoginForm from '../components/LoginForm';
import Productos from '../components/Productos';
import ClienteRegistrado from '../components/ClienteRegistrado';
import Registrar from '../components/Registrar';
import RegistrarEmpresa from '../components/RegistrarEmpresa';
import RegistrarContactoEmpresa from '../components/RegistrarContactoEmpresa';
import CrearContraseña from '../components/CrearContraseña';
import RegistrarCliente from '../components/RegistrarCliente';
import CambiarDatos from '../components/CambiarDatos';

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="home"
        component={Home} 
        options={{title: 'Wilug'}} />
      <Stack.Screen
        name="otrosServicios"
        component={OtrosServicios}
        options={{title: 'Otros Servicios'}}
      />
      <Stack.Screen
        name="informacion"
        component={ManejoExtintor}
        options={{title: 'Manejo de Extintores'}}
      />
      <Stack.Screen
        name="nosotros"
        component={Nosotros}
        options={{title: 'Nosotros'}}
      />
      <Stack.Screen
        name="contacto"
        component={Contactanos}
        options={{title: 'Contáctanos'}}
      />
      <Stack.Screen
        name="loginForm"
        component={LoginForm}
        options={{title: 'LoginForm'}}
      />
      <Stack.Screen
        name="productos"
        component={Productos}
        options={{title: 'Mis productos'}}
      />
      <Stack.Screen
        name="clienteRegistrado"
        component={ClienteRegistrado}
        options={{title: 'Menu'}}
      />
      <Stack.Screen
        name="registrar"
        component={Registrar}
        options={{title: 'Registrar'}}
      />
      <Stack.Screen
        name="registrarEmpresa"
        component={RegistrarEmpresa}
        options={{title: 'Datos Empresa'}}
      />
      <Stack.Screen
        name="registrarContactoEmpresa"
        component={RegistrarContactoEmpresa}
        options={{title: 'Datos personales'}}
      />
      <Stack.Screen
        name="crearContraseña"
        component={CrearContraseña}
        options={{title: 'Contraseña'}}
      />
      <Stack.Screen
        name="registrarCliente"
        component={RegistrarCliente}
        options={{title: 'Registrar Cliente'}}
      />
      <Stack.Screen
        name="mantencion"
        component={Mantencion}
        options={{title: 'Registrar Cliente'}}
      />
      <Stack.Screen
        name="cambiarDatos"
        component={CambiarDatos}
        options={{title: 'Cambiar Datos'}}
      />
    </Stack.Navigator>
  );
}
