import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import LinkButton from "../components/LinkButton";
import SubmitButton from '../components/SubmitButton';

function Login({navigation}: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.modal}>
                <Header 
                    title="Gaming Compendium" 
                    alignment="center"
                />
                <TextInput style={styles.input}
                    value={username}
                    placeholder="Username"
                    onChangeText={setUsername}
                />
                <TextInput style={styles.input}
                    value={password}
                    placeholder="Password"
                    onChangeText={setPassword}
                />
                <SubmitButton onPress={() => { navigation.navigate('Home', {}); }}/>

                <View style={styles.groupButtons}>
                    <LinkButton title="Create new account"/>
                    <LinkButton title="Forgot password"/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    modal: {
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff', 
        // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5
    },
    groupButtons: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})

export default Login;