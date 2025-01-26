import React from 'react';
import { PropsWithChildren } from 'react';
import { StyleSheet, GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

type ButtonProps = PropsWithChildren<{
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  buttonStyle?: {} | undefined;
  textStyle?: {} | undefined;
}>;

function CustomButton({
  onPress, 
  title, 
  buttonStyle = styles.buttonStyle,
  textStyle = styles.textStyle 
}: ButtonProps): React.JSX.Element {
  const accessibilityLabel = `${title} button`;

  return (
    <TouchableOpacity  
      style={buttonStyle} 
      onPress={onPress} 
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
      margin: 0,
      padding: 10,
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "#ffffff",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: '600',
    }
});

export default CustomButton;
