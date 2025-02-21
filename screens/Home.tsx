import * as React from 'react';
import { Text, SafeAreaView, Image, ScrollView, StyleSheet, View, FlatList } from "react-native";
import { FetchAllGenres } from '../hooks/IGDBApi';
import GamesByGenreView from '../components/GamesByGenreView';

function Home(): React.JSX.Element {

  const { data: genres, isPending, error } = FetchAllGenres();

  return (
    <SafeAreaView style={styles.content}>
      { isPending && <Text>Loading...</Text>}
      { !isPending && 
        <FlatList
          data={genres}
          renderItem={({ item: genre }) => (<GamesByGenreView id={genre.id} name={genre.name}/>)}
          keyExtractor={(genre) => genre.id.toString()}
        />
      }
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  content: {
    margin: 10
  },
});

export default Home;