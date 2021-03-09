import React, { useState } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function AñadirProducto() {
  const [formData, setFormData] = useState({});
  const { navigation } = props;
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isVisibleCarga, setIsVisibleCarga] = useState(false);
  const [isVisibleMantencion, setIsVisibleMantencion] = useState(false);

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const handlerConfirm = (date) => {
    const dateFabricacion = date;
    dateFabricacion.setHours(0);
    dateFabricacion.setMinutes(0);
    dateFabricacion.setSeconds(0);
    setFormData({ ...formData, dateFabricacion });
    hideDatePicker();
  };

  const hideDatePickerCarga = () => {
    setIsVisibleCarga(false);
  };

  const showDatePickerCarga = () => {
    setIsVisibleCarga(true);
  };

  const handlerConfirmCarga = (date) => {
    const dateCarga = date;
    dateCarga.setHours(0);
    dateCarga.setMinutes(0);
    dateCarga.setSeconds(0);
    setFormDataCarga({...formDataCarga, dateCarga});
    hideDatePickerCarga();
  };

  const hideDatePickerMantencion = () => {
    setIsVisibleMantencion(false);
  };

  const showDatePickerMantencion = () => {
    setIsVisibleMantencion(true);
  };

  const handlerConfirmMantencion = (date) => {
    const dateMantencion = date;
    dateMantencion.setHours(0);
    dateMantencion.setMinutes(0);
    dateMantencion.setSeconds(0);
    setFormDataMantencion({...formDataMantencion, dateMantencion});
    hideDatePickerMantencion();
  };

  return (
    <>
      <View style={[styles.box, styles.box1]}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />

        <View style={styles.box4}>
          <ImageBackground
            style={styles.box3}
            source={require('../assets/extintor.jpg')}>
            <View
              style={{
                backgroundColor: 'rgba(209,217,222, .8)',
                width: '100%',
                height: '100%',
              }}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.titulo}>Agregar producto externo</Text>
                <Text style={styles.texto}>Tipo de agente</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{ label: "Seleccione un agente", value: null }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "JavaScript", value: "JavaScript" },
                      { label: "TypeStript", value: "TypeStript" },
                      { label: "Python", value: "Python" },
                      { label: "Java", value: "Java" },
                      { label: "C++", value: "C++" },
                      { label: "C", value: "C" },
                    ]}
                  />
                </View>
                <Text style={styles.texto}>Capacidad</Text>
                <View style={styles.picker}>
                  <RNPickerSelect
                    placeholder={{ label: "Seleccione capacidad", value: null }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                      { label: "1 KG", value: "1" },
                      { label: "2 KG", value: "2" },
                      { label: "4 KG", value: "4" },
                      { label: "5 KG", value: "5" },
                      { label: "6 KG", value: "6" },
                      { label: "10 KG", value: "10" },
                      { label: "50 KG", value: "50" },
                    ]}
                  />
                </View>

                <Text style={styles.texto}>Fecha fabricación</Text>
                <View style={[styles.input, styles.datePicker]}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: formData.dateFabricacion ? '#000' : '#969696',
                    }}
                    onPress={showDatePicker}>
                    {formData.dateFabricacion
                      ? moment(formData.dateFabricacion).format('DD/MM/YYYY')
                      : 'DD/MM/AA'}
                  </Text>
                </View>

                <Text style={styles.texto}>Fecha última recarga</Text>
                <View style={[styles.input, styles.datePicker]}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: formDataCarga.dateCarga ? '#000' : '#969696',
                    }}
                    onPress={showDatePickerCarga}>
                    {formDataCarga.dateCarga
                      ? moment(formDataCarga.dateCarga).format('DD/MM/YYYY')
                      : 'DD/MM/AA'}
                  </Text>
                  <DateTimePickerModal
                    isVisible={isVisibleCarga}
                    mode="date"
                    onConfirm={handlerConfirmCarga}
                    onCancel={hideDatePickerCarga}
                  />
                </View>
                <Text style={styles.texto}>Fecha última mantención</Text>
                <View style={[styles.input, styles.datePicker]}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: formDataMantencion.dateMantencion ? '#000' : '#969696',
                    }}
                    onPress={showDatePickerMantencion}>
                    {formDataMantencion.dateMantencion
                      ? moment(formDataMantencion.dateMantencion).format('DD/MM/YYYY')
                      : 'DD/MM/AA'}
                  </Text>
                  <DateTimePickerModal
                    isVisible={isVisibleMantencion}
                    mode="date"
                    onConfirm={handlerConfirmMantencion}
                    onCancel={hideDatePickerMantencion}
                  />
                </View>
                <TouchableOpacity style={styles.boton}>
                  <Text style={styles.btnText}>Agregar</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
    </>
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
  btnText: {
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#212778',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#0A6DD3',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  boton: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 16,
    marginLeft: 30,
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
  datePicker: {
    justifyContent: 'center',
  },
});
