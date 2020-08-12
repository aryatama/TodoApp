import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo() {

    return (
        <View style={styles.container}>
            <View style={styles.LogoBorder}>
                <Text style={styles.LogoText}>T</Text>
            </View>
            <Text style={styles.TextTitle}>
                TodosApp
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
        marginTop: 110,
        marginBottom: 110
        
    },
    LogoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 50,
    },
    LogoBorder: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 8,
        borderRadius: 60,
        borderColor: "white",
        padding: 10,
        width: 80,
        height: 80,
    },
    TextTitle: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        marginTop: 5,

    }
})