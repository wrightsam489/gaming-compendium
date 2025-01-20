import { PropsWithChildren } from 'react';
import { StyleSheet, GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

type ButtonProps = PropsWithChildren<{
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  containerStyle?: {} | undefined;
  textStyle?: {} | undefined;
}>;

function CustomButton({
  onPress, 
  title, 
  containerStyle = styles.buttonContainer,
  textStyle = styles.buttonText 
}: ButtonProps): React.JSX.Element {
  const accessibilityLabel = `${title} button`;

  return (
    <TouchableOpacity  
      style={containerStyle} 
      onPress={onPress} 
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      margin: 0,
      padding: 10,
      backgroundColor: "#2196F3",
    },
    buttonText: {
      color: "#ffffff",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: '600',
    }
});

export default CustomButton;
