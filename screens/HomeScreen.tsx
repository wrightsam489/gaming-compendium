import * as React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Accordian from "../components/Accordian";

function HomeScreen(): React.JSX.Element {
  const items = ['New Releases','Recommendations','Action','Puzzle','Mystery','RPG','VR']


  return (
    <View>
      <View style={styles.toolbar}><Text>Toolbar</Text></View>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          {
            items.map((item, _) => (
              <Accordian title={item} isInitiallyOpen={true}></Accordian>
            ))
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "lightgrey",
    padding: 10
  },
  content: {
    margin: 10
  },
});

export default HomeScreen;