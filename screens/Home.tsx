import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { FetchAllGenres } from '../hooks/IGDBApi';
import GamesByGenreView from '../components/GamesByGenreView';
import Header from '../components/Header';

function Home(): React.JSX.Element {

  const { data: genres, isPending, error } = FetchAllGenres();

  return (
    <SafeAreaView>
      { isPending && <Header title='Loading' />}
      { !isPending && 
        <FlatList
          style={styles.content}
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
    padding: 10
  },
});

export default Home;