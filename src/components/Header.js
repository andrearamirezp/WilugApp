import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: 150,
    marginTop: 40,
    marginBottom: 20,
  }
});
