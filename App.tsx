import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';

function App(): React.JSX.Element {
  return (
    <View>
      <HomeScreen />
    </View>
  )
};

const styles = StyleSheet.create({
});

export default App;