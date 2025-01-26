import * as React from 'react';
import { useState } from "react";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';

export type GameData = {
    id: string;
    title: string;
};

type GameProps = {
  };

function Game() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={toggleModal}>
                <View style={styles.cover}></View>
            </TouchableOpacity>
            <Modal isVisible={isOpen} onBackdropPress={toggleModal}>
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Button title="Close" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginRight: 45
    },
    cover: {
        backgroundColor: "grey",
        width: 120,
        height: 67.5,
    }, 
    overlay: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
    overlayText: {
        marginBottom: 10,
        fontSize: 16,
    },
});

export default Game;