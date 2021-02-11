import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Producto(){
    return(
        <TouchableOpacity style={[styles.card, ]}>
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
        backgroundColor: 'red'
    }
})