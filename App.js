import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home';
import TabNavigator from './Navigation/TabNavigator';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0066CC" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          component={Main} name="Main"
        />
        <Stack.Screen 
          component={TabNavigator} name="Home"
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Main = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  }

  return (
  <SafeAreaView style={theme.container}>
    <View style={theme.logo}>
      <Ionicons style={theme.logoSvg} name='cube-outline' size={150} />
      <Text style={theme.logoText}>
        SupplyBox
      </Text>
    </View>
    <View style={theme.form}>
      <Text style={theme.label}>Correo Eléctronico</Text>
      <TextInput style={theme.input} placeholder='example@mail.com' />

      <Text style={theme.label}>Contraseña</Text>
      <TextInput style={theme.input} placeholder='Ingresa tu contraseña' />

      <TouchableOpacity onPress={handleLogin} style={theme.button}>
        <Text style={theme.buttonTxt}>Ingresa a tu cuenta</Text>
        <Ionicons style={theme.buttonSvg} name='arrow-forward-outline' size={30} />
      </TouchableOpacity>

    </View>
  </SafeAreaView>
  )
}


const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSvg: {
    color: 'black',
  },
  logoText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black'
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap:50
  },
  input: {
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 20,
  },
  label: {
    width:250,
    marginBottom:5,
    textAlign:'left',
  },
  button: {
    backgroundColor: 'black',
    width:250,
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonTxt: {
    color: 'white'
  },
  buttonSvg: {
    color: 'white'
  }
});

export default App;
