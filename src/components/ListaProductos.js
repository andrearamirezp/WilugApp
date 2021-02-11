import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Productos from './Productos';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function ListaProductos(props) {
  const {navigation} = props;
  const [showlist, setShowList] = useState(true);

  return (
    <View style={[styles.box, styles.box1]}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <View style={styles.box4}>
        <ImageBackground
          style={styles.box3}
          source={require('../assets/extintor.jpg')}>
          <View style={{backgroundColor: 'rgba(209,217,222, .8)', width:'100%', height:'100%'}}>
            {showlist ? (
              <ScrollView style={styles.scrollView}>
                <Productos/>
              </ScrollView>
            ) : (
              console.log('Hola')
            )}
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
    
  },
  box3: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#D7DBDD',
  },
  logo: {
    resizeMode: 'center',
    height: 120,
    marginTop: 50,
    marginBottom: 30,
  },
  scrollView: {
    width: '100%',
    marginBottom: 50,
  },
});
