import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Logo from '../Components/Logo';
import LinearGradient from 'react-native-linear-gradient';

export default function FlashScreen() {

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1488CC', '#2B32B2']} style={styles.linearGradient}>
                <Logo />
                <View style ={styles.loading}>
                <ActivityIndicator size="large" color="white"/>
                </View>
            </LinearGradient>

        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    textLoading : {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
 
    },
    loading : {
        margin: 100,
        justifyContent: "center",
        alignItems: "center"

    }

})