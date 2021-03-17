import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Products = ({ data, navigation }) =>
    data.map((value, index) => (
        <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('detalleProducto', {
                id: value.id
            })}>
            <Text >{value.name}</Text>
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
        backgroundColor: '#00A1C3',
    },
});
