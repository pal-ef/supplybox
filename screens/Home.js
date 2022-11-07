import React from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = () => {
  return (
    <View >
      <Header />
      <View style={theme.slider}>
        <Ionicons style={theme.sliderIcon} name="chevron-back-outline" />
        <Text style={theme.h1}>Tus ultimos pedidos</Text>
        <Ionicons style={theme.sliderIcon} name="chevron-forward-outline" />
      </View>
    </View>
  )
}

const theme = StyleSheet.create({
  h1: {
    marginHorizontal:30,
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  slider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIcon: {
    color: 'black',
    fontSize: 30
  }
});

export default Home