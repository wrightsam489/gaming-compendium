import * as React from 'react';
import { Text, Image, StyleSheet, View, FlatList } from "react-native";
import { FetchRecommendedGamesByGenre } from '../hooks/IGDBApi';
import Accordian from "./Accordian";
import { PropsWithChildren } from 'react';
import Header from './Header';

export type GameProps = PropsWithChildren<{
  id: number,
  name: string,
  cover: CoverProps,
  genres: [GenreProps]
}>;

export type CoverProps = PropsWithChildren<{
  id: number,
  url: string
}>;

export type GenreProps = PropsWithChildren<{
  id: number,
  name: string
}>;

function GamesByGenreView({id, name}: GenreProps) {

    const { data: games, isPending, error } = FetchRecommendedGamesByGenre(id);

    const renderItem = ({item}: {item: GameProps}) => {
      const correctedUrl = `https:${item.cover.url}`;
      return (
        <View>
          <Image
            style={styles.cover}
            source={{uri: correctedUrl}}
          />
          <Text style={styles.gameTitle}>{item.name}</Text>   
        </View>
      );
    };

    return (
        <Accordian 
            title={name} //+ " - " + id}
            isInitiallyOpen={true}
            content={ 
              <View>
                {isPending ? (
                  <Header title='Loading'/>
                ) : (
                  <FlatList
                    data={games}
                    renderItem={renderItem}
                    keyExtractor={(game) => game.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                )}
              </View>
            }         
        />
    );
}

const styles = StyleSheet.create({
  cover: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  gameTitle: {
    width: 100,
  },
});

export default GamesByGenreView;
