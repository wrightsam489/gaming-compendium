import { PropsWithChildren } from "react";
import { View, Text, StyleSheet } from "react-native";

type HeaderProps = PropsWithChildren<{
  title: string;
}>;

function Header({title}: HeaderProps): React.JSX.Element {
  return (
    <View>
        <Text style={styles.header}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '600',
    },
});

export default Header;