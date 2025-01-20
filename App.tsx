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
import CustomButton from './components/StyledButton';
import LoadingScreen from './screens/LoadingScreen';

function App(): React.JSX.Element {

  const [isShowingText, setIsShowingText] = useState(true);

  return (
    <SafeAreaView style={styles.mainView}>
      <CustomButton 
        onPress={() => {setIsShowingText(!isShowingText)}} 
        title='Toggle View'
      />
      {isShowingText && <HomeScreen />}
      {!isShowingText && <LoadingScreen />}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
  },
});

export default App;

