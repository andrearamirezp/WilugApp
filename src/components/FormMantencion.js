import React, { Component } from 'react'
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native';
  var {height} = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Extintor PQS 4 KG', 'Extintor CO2 10KG', 'Extintor PQS 5 KG']


class FormMantencion extends Component {
  state = { selectedFruits: [] }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render () {
    return (
        <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={[styles.box4]}>
          <ImageBackground
            style={styles.box3}
            source={require('../assets/fondo2.jpg')}>
            <View style={{backgroundColor: 'rgba(235,245,250, .6)'}}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.titulo}>Solicita aquí tu mantención.</Text>
                <View>
                    <SelectMultiple
                    items={fruits}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />
                </View>
                
                <TouchableOpacity style={styles.boton} onPress={console.log(this.state.selectedFruits)}>
                  <Text style={styles.btnText}>Enviar</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </View>  
      
    )
  }
}

const styles = StyleSheet.create({
    box4: {
      width: '100%',
      height: '80%',
    },
    box3: {
      resizeMode: 'contain',
    },
    input: {
      height: 45,
      color: '#2b2926',
      marginBottom: 10,
      marginTop: 10,
      marginHorizontal: 20,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      borderRadius: 50,
      fontSize: 15,
      borderWidth: 2,
      borderColor: '#212778',
    },
    inputMSJ: {
      height: 120,
      color: '#2b2926',
      marginTop: 10,
      marginHorizontal: 20,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      borderRadius: 25,
      fontSize: 16,
      borderWidth: 2,
      borderColor: '#212778',
    },
    btnText: {
      color: '#fff',
      fontSize: 18,
      backgroundColor: '#212778',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
  
    titulo: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    boton: {
      width: '100%',
      height: 100,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: 16,
      marginLeft: 30,
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
      marginBottom: 30,
    },
    picker: {
      height: 45,
      backgroundColor: '#fff',
      marginHorizontal: 20,
      borderWidth: 2,
      borderColor: '#212778',
      borderRadius: 50,
      marginBottom: 10,
      marginTop: 10,
    },
  });
  
  
export default FormMantencion
