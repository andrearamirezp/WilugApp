import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function DetalleProducto(props) {
  const {navigation} = props;
  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      
        <ScrollView style={styles.box4}>
          
        </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  box4: {
    width: '100%',
    height: '100%',
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
  card: {
    flexDirection: 'row',
    width: '95%',
    height: 60,
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#202BB8',
    backgroundColor: 'white',
  },
  listMenu: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
