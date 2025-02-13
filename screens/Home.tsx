import * as React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Accordian from "../components/Accordian";
import { FetchRecommendedGames } from '../hooks/IGDBApi';

function Home(): React.JSX.Element {
  const items = ['New Releases','Recommendations','Action','Puzzle','Mystery','RPG','VR']

  const { data, isPending, error } = FetchRecommendedGames();

  return (
    <SafeAreaView style={styles.content}>
      { !isPending &&
        <ScrollView>
          <Text>{data}</Text>
          {
            items.map((item, _) => (
              <Accordian title={item} isInitiallyOpen={true}></Accordian>
            ))
          }
        </ScrollView>
      }
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