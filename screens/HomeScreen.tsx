import { View, Text, StyleSheet } from "react-native";

function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        height: "100%"
    },
    text: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default HomeScreen;