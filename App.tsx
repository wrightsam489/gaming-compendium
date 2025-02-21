import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, Button, TouchableOpacity, View, StyleSheet } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const MenuButton = () => {
  return (
    <TouchableOpacity style={styles.menu} onPress={() => {alert('Pressed!')}}>
      <Image 
        style={styles.menu}
        source={require('./assets/Hamburger_icon.png')}
        />
    </TouchableOpacity>
  )
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: true, headerBackVisible: false, headerRight: () => (<MenuButton/>) }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  menu: {
    width: 30,
    height: 30,
  },
});

export default App;
