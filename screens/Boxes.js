import React from 'react';
import {
    View, Text
} from 'react-native';
import Header from '../components/Header';

const Boxes = () => {
    return (
        <View>
        <Header />
            <Text style={{fontSize: 20, textAlign: 'center', marginTop: 100}}>Mis pedidos</Text>
        </View>
    )
}

export default Boxes;