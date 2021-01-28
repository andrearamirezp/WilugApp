import React from "react";
import {StyleSheet,SafeAreaView, Text, View}from "react-native";
import Home from "./src/components/Home";
import Auth from "./src/components/Auth";
import Contactanos from "./src/components/Contactanos";

export default function App() {
  return(
    <SafeAreaView style = {styles.background}>
      <Auth/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%"
  }

})


