import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Products = ({ data, navigation }) =>
    data.map((value, index) => (
        <TouchableOpacity
            key={index}
            style={[styles.card, value.dias < 0 ==true ? styles.pasado : value.dias < 30 == true ? styles.presente : styles.futuro]}
            onPress={console.log('dias para la mantencion: ' + value.dias),() => navigation.navigate('detalleProducto', {
                id: value.id
            })}>
            <Text style={{color:'black'}}>{value.name}</Text>
        </TouchableOpacity>
    ));

export default function Productos({ data }) {
    const navigation = useNavigation();
    return <Products data={data} navigation={navigation} />;
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
        // backgroundColor: '#2B88E9',
    },
    pasado:{
       backgroundColor: '#BC0505', 
    },
    futuro:{
        backgroundColor: 'green', 
     },
     presente:{
        backgroundColor: 'yellow', 
     },
});
