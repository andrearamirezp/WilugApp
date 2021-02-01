import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Productos from "../components/Productos";
import Historial from "../components/Historial";
import MantencionClientes from "../components/MantencionClientes";
/* import About from "../screens/About";
import Contact from "../screens/Contact";
import HomeStack from "./HomeStack"; */

const Tab = createBottomTabNavigator();
export default function navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="productos" component={Productos} options={{title:'Productos'}}/>
            <Tab.Screen name="historial" component={Historial} options={{title:'Historial'}}/>
            <Tab.Screen name="mantencion" component={MantencionClientes} options={{title:'Mantencion'}}/>
        </Tab.Navigator>
    )
    
}