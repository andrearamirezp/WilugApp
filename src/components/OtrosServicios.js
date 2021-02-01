import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import OtroServicio from './FormOtroServicio';  

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function LayoutBase() {
  return (
    <View style={styles.container}>
            <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={[styles.box, styles.box2]}>
          <OtroServicio/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scroll:{
    backgroundColor: 'pink',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 5,
    marginTop: 10,
    marginBottom: 20,
    // backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 30,
    // backgroundColor: '#8BC34A',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'center',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
});
