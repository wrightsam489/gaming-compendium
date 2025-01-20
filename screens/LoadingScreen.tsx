import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

function LoadingScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        height: "100%"
    },
});

export default LoadingScreen;