import React from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const Home = () => {
  return (
    <View >
      <Header />
      <ScrollView>
      <View style={theme.slider}>
        <Ionicons style={theme.sliderIcon} name="chevron-back-outline" />
        <Text style={theme.h1}>Tus ultimos pedidos</Text>
        <Ionicons style={theme.sliderIcon} name="chevron-forward-outline" />
      </View>

      <View style={theme.item}>
        <View style={theme.itemTitle}>
          <Text style={theme.itemTxt}>Viernes, 4 Noviembre</Text>
        </View>
        <View style={theme.itemDesc}>
          <View style={theme.product}>
            <Ionicons style={theme.productSvg} name="pizza-outline" size={30} />
            <View style={theme.productTxtWrapper}>
              <Text style={theme.productTxt}>Ejemplo de pedido</Text>
              <Text style={theme.productQnt}>5</Text>
            </View>
          </View>
          <View style={theme.product}>
            <Ionicons style={theme.productSvg} name="fast-food-outline" size={30} />
            <View style={theme.productTxtWrapper}>
              <Text style={theme.productTxt}>Ejemplo de pedido</Text>
              <Text style={theme.productQnt}>2</Text>
            </View>
          </View>
        </View>

        <View style={theme.btnWrapper}>
          <Text style={theme.disclaimer}>$103.40 pesos mexicanos</Text>
          <TouchableOpacity style={theme.btn}>
            <Text style={theme.btnTxt}>+ Agregar al carrito</Text>
          </TouchableOpacity>
        </View>


        <Text style={theme.sectionTitle}>Cajas Populares</Text>
        <View style={theme.boxWrapper}>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
          <View style={theme.box}>
            <Ionicons style={theme.boxSvg} name="cube-outline" size={100} />
            <Text style={theme.boxTitle}>Example</Text>
          </View>
        </View>
      </View>
      </ScrollView>
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
    marginVertical: 20
  },
  sliderIcon: {
    color: 'black',
    fontSize: 30
  },
  itemTitle: {
    backgroundColor: 'black',
    paddingVertical: 5
  },
  itemTxt: {
    color: 'white',
    textAlign: 'center'
  },
  itemDesc: {
    display: 'flex',
    gap: 50,
    backgroundColor: '#DEDEDE',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
  },
  product: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  productSvg: {
    color: 'black'
  },
  productTxtWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  },
  productTxt: {
    color: 'black',
    marginLeft: 10,
    fontSize: 16
  },
  productQnt: {
    fontSize: 16,
    color: 'black',
  },
  btnWrapper: {
    marginTop: 30,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'black',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 30
  },
  btnTxt: {
    color: 'white',
    fontSize: 18,
  },
  disclaimer: {
    marginBottom: 7
  },
  sectionTitle: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    marginLeft: 25
  },
  boxWrapper: {
    marginTop: 20,
    marginBottom: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
  },
  box: {
    marginBottom: 20
  },
  boxSvg: {
    color: 'black'
  },
  boxTitle: {
    color: 'black',
    textAlign: 'center'
  }
});

export default Home