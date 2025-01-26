import { GestureResponderEvent, StyleSheet, View } from "react-native";
import CustomButton from "./CustomButton";
import { PropsWithChildren } from "react";
import * as React from 'react';

type SubmitButtonProps = PropsWithChildren<{
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}>;

function SubmitButton({onPress}: SubmitButtonProps) {
    return (
        <CustomButton 
            onPress={onPress}
            title="Submit"
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}      
        />
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: "#2196F3",
      borderRadius: 5
    },
    textStyle: {
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: 'bold',
      color: '#fff',
      padding: 10
    }
});

export default SubmitButton;