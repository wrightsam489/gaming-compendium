import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <MyStack />
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
