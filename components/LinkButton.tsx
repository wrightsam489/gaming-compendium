import { GestureResponderEvent, StyleSheet, View } from "react-native";
import CustomButton from "./CustomButton";
import { PropsWithChildren } from "react";

type LinkButtonProps = PropsWithChildren<{
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}>;

function LinkButton({onPress, title}: LinkButtonProps) {
    return (
        <CustomButton 
            onPress={onPress}
            title={title}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.textStyle}      
        />
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    textStyle: {
      color: "#2196F3",
      textAlign: "center",
      textTransform: "none",
      fontWeight: 'normal',
      textDecorationLine: "underline",
    }
});

export default LinkButton;