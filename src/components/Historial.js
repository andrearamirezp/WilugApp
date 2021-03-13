import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {DataTable} from 'react-native-paper';

var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function Servicios(props) {
  const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
  };
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
            <DataTable style={{backgroundColor: 'rgba(255,255,255, .5)'}} selectableRows Clicked Selected={handleChange}>
              <DataTable.Header>
                <DataTable.Title style={{justifyContent: 'center'}}>SERVICIO</DataTable.Title>
                <DataTable.Title style={{justifyContent: 'flex-end'}}>FECHA SOLICITUD</DataTable.Title>
                <DataTable.Title style={{justifyContent: 'flex-end'}}>FECHA VISITA</DataTable.Title>
              </DataTable.Header>
              <ScrollView>
                <DataTable.Row >
                  <DataTable.Cell >Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>159</DataTable.Cell>
                  <DataTable.Cell numeric>6.0</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                  <DataTable.Cell numeric>159</DataTable.Cell>
                  <DataTable.Cell numeric>6.0</DataTable.Cell>
                </DataTable.Row>
              </ScrollView>
            </DataTable>
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
