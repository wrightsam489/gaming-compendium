import { PropsWithChildren, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from './Header';
import * as React from 'react';

type AccordianProps = PropsWithChildren<{
  title: string;
  isInitiallyOpen?: boolean | undefined
  content: any;
}>;

function Accordian({title, isInitiallyOpen = false, content}: AccordianProps) {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <View style={styles.accordian}>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <Header title={title} />
            </TouchableOpacity >
            { isOpen && content }
        </View>
    );
}

const styles = StyleSheet.create({
    accordian: {
        marginBottom: 20,
    },
});

export default Accordian;