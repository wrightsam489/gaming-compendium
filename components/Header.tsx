import * as React from 'react';
import { PropsWithChildren } from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";

type HeaderProps = PropsWithChildren<{
  title: string;
  alignment?: TextStyle['textAlign'];
}>;

function Header({title, alignment = "left"}: HeaderProps): React.JSX.Element {
  return (
    <View>
        <Text style={[styles.header, { textAlign: alignment}]}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15
    },
});

export default Header;