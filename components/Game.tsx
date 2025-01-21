import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export type GameData = {
    id: string;
    title: string;
};

type GameProps = {
    item: GameData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };

function Game({item, onPress, backgroundColor, textColor}: GameProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <View>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <View style={styles.gameCover}></View>
                {
                    isOpen && 
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}
    
const styles = StyleSheet.create({
    gameCover: {
        backgroundColor: "grey",
        width: 45,
        height: 80,
        marginRight: 45
    },
});

export default Game;