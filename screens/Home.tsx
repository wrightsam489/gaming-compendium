import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, FlatList, View } from "react-native";
import { FetchAllGenres, FetchGamesById } from '../hooks/IGDBApi';
import GamesByGenreView from '../components/GamesByGenreView';
import Header from '../components/Header';

function Home(): React.JSX.Element {

  const { data: genres, isPending, error } = FetchAllGenres();
  // const { data: game, isPending, error } = FetchGamesById(1);

  return (
    <SafeAreaView style={styles.content}>
      { isPending && <Header title='Loading...' />}
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
  },  cover: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderColor: '#000000'
  },
});

export default Home;