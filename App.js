import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Header from './src/components/Header';
import Auth from './src/components/Auth';
import Contactanos from './src/components/Contactanos';
import Home from './src/components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DBDD',
  },
});
