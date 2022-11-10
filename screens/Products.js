import React from 'react';
import {
    View, Text, StyleSheet,
    ScrollView
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import F5 from 'react-native-vector-icons/FontAwesome5';

const Products = () => {
    return (
    <View>
      <Header />
      <ScrollView>
        <Text style={theme.h1}>Productos</Text>
        <View style={theme.productsWrapper}>
            <View style={theme.product}>
                <Text style={theme.productSvg} >
                    <F5 name="apple-alt" size={80} />;
                </Text>
                <Text style={theme.productTxt}>Manzana</Text>
            </View>
            <View style={theme.product}>
                <Text style={theme.productSvg} >
                    <Icon name="food-drumstick" size={80} />;
                </Text>
                <Text style={theme.productTxt}>Pollo</Text>
            </View>
            <View style={theme.product}>
                <Text style={theme.productSvg} >
                    <Icon name="noodles" size={80} />;
                </Text>
                <Text style={theme.productTxt}>Fideos</Text>
            </View>
            <View style={theme.product}>
                <Text style={theme.productSvg} >
                    <Icon name="food-steak" size={80} />;
                </Text>
                <Text style={theme.productTxt}>Carnes Rojas</Text>
            </View>
        </View>
      </ScrollView>
    </View>
    )
}

const theme = StyleSheet.create({
    h1: {
        marginTop: 20,
        marginHorizontal:30,
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
  },
  productsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  product: {
    display: 'flex',
    padding: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  productSvg: {
    marginBottom: 10,
    color: 'black'
  },
  productTxt: {
    color: 'black',
    fontSize: 16,
  }
})

export default Products;