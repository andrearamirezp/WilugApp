import React from "react";
import {StyleSheet,SafeAreaView, Text, View}from "react-native";
import Home from "./src/components/Home";
import Auth from "./src/components/Auth";
import { NavigationContainer} from "@react-navigation/native";
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return(
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%"
  }

})


