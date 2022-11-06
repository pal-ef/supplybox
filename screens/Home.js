import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = () => {
  return (
    <View style={theme.container}>
      <Text>Home</Text>
    </View>
  )
}

const theme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Home