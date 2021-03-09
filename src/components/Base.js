import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Base() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 120,
    marginTop: 50,
    marginBottom: 50,

  },
});
