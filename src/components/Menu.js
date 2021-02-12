import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Menu(props) {
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={[styles.box4]}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/extintor.jpg')}>
          <View
            style={{
              backgroundColor: 'rgba(209,217,222, .8)',
              width: '100%',
              height: '100%',
            }}>
            
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#D7DBDD',
  },
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logo: {
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  text: {
    alignContent: 'center',
  },
});
