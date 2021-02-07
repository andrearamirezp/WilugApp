import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './src/Navigation/Navigation';
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%"
  }
});


