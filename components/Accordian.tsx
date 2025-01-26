import { PropsWithChildren, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from './Header';
import Game, { GameData } from "./Game";
import * as React from 'react';

type AccordianProps = PropsWithChildren<{
  title: string;
  isInitiallyOpen?: boolean | undefined
}>;

const DATA: GameData[] = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'First Item',
    },
    {
      id: '5',
      title: 'Second Item',
    },
    {
      id: '6',
      title: 'Third Item',
    },
];

function Accordian({title, isInitiallyOpen = false}: AccordianProps) {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);
    const [selectedId, setSelectedId] = useState<string>();

    const renderItem = ({item}: {item: GameData}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Game />
        );
    }

    return (
        <View style={styles.accordian}>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <Header title={title} />
            </TouchableOpacity >
            { isOpen &&
                <FlatList 
                    horizontal
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    accordian: {
        marginBottom: 20,
    },
});

export default Accordian;