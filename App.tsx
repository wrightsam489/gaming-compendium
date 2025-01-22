/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

function App(): React.JSX.Element {

  const [isShowingText, setIsShowingText] = useState(true);

  return (
    <SafeAreaView style={styles.mainView}>
      <Login />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
  },
});

export default App;

