import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListaProductos from '../components/ListaProductos';
import Historial from '../components/Historial';
import Servicios from '../components/Servicios';
import Menu from '../components/Menu';
/* import About from "../screens/About";
import Contact from "../screens/Contact";
import HomeStack from "./HomeStack"; */

const Tab = createBottomTabNavigator();
export default function navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle:{
          fontSize:13,
          margin: 15,
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#212778',
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="productos"
        component={ListaProductos}
        options={{title: 'Productos'}}
      />
      <Tab.Screen
        name="servicios"
        component={Servicios}
        options={{title: 'Servicios'}}
      />
      <Tab.Screen
        name="historial"
        component={Historial}
        options={{title: 'Historial'}}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menú',
        }}
      />
    </Tab.Navigator>
  );
}
