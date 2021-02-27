import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Productos(props){
    
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('detalleProducto')}>
            <Text>Producto</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin:10,
        borderRadius: 15,
        backgroundColor: '#E03434'
    }
})