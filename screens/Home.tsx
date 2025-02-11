import * as React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Accordian from "../components/Accordian";

function Home(): React.JSX.Element {
  const items = ['New Releases','Recommendations','Action','Puzzle','Mystery','RPG','VR']

  return (
    <SafeAreaView style={styles.content}>
            <ScrollView>
              {
                items.map((item, _) => (
                  <Accordian title={item} isInitiallyOpen={true}></Accordian>
                ))
              }
            </ScrollView>
          </SafeAreaView>
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

export default Home;