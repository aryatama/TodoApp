import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../Components/Logo';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { handleRegister } from '../Redux/Actions/AuthAction';
import { handleLoading } from '../Redux/Actions/SetLoadingAction';

import { useDispatch } from 'react-redux'

export default function SignupScreen({ navigation }) {

    const dispatch = useDispatch();
    const RegistrationButt = (Name, Email, Password) => {
        if (isValidPassword == false || isValidEmail == false) {
            Alert.alert("Invalid email", "Email and password is incorrect.", [{ text: "Okey" }])
            return;
        } else {
            dispatch(handleRegister(Name, Email, Password))
            dispatch(handleLoading())
        }
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isValidPassword, setValidPassword] = useState(true)
    const [isValidEmail, setValidEmail] = useState(true)

    const handleValidUser = (val) => {
        if (val.trim().length >= 6) {
            setValidEmail(true)
        } else {

            setValidEmail(false)
        }
    }

    const handleValidPassword = (val) => {
        if (val.trim().length >= 6) {
            setPassword(val)
            setValidPassword(true)
        } else {
            setPassword(val)
            setValidPassword(false)
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1488CC', '#2B32B2']} style={styles.linearGradient}>
                <Logo />

                <View style={{ width: '85%', marginBottom: 10 }}>
                    <Text style={{ fontSize: 50, color: "white" }}>
                        Get on <Text style={{ fontSize: 50, color: "white", fontWeight: "bold", }}>Board.</Text>
                    </Text>
                </View>

                <View style={styles.textInput}>
                    <Icon name="account" size={30} color="rgba(0,0,0, 0.8)" />
                    <TextInput placeholder="Name" onChangeText={(e) => setName(e)} />
                </View>
                <View style={{ height: 20 }}>
                    {/* <Text style={{color: "red"}}>Email should has minimal 8 characters</Text> */}
                </View>
                <View style={styles.textInput}>
                    <Icon name="email" size={30} color="rgba(0,0,0, 0.8)" />
                    <TextInput placeholder="Email" onChangeText={(e) => setEmail(e)} onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} />
                </View>
                <View style={{ height: 20 }}>
                    {isValidEmail ? null :
                        <Text style={{ color: "red" }}>Email is incorrect</Text>
                    }
                </View>
                <View style={styles.textInput}>
                    <Icon name="lock" size={30} color="rgba(0,0,0, 0.8)" />
                    <TextInput secureTextEntry placeholder="Password" onChangeText={(e) => handleValidPassword(e)} />
                </View>
                <View style={{ height: 20 }}>
                    {isValidPassword ? null :
                        <Text style={{ color: "red" }}>Password should has minimal 6 characters</Text>
                    }
                </View>

                <TouchableOpacity style={styles.LoginButton} onPress={() => RegistrationButt(name, email, password)}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#1488CC', '#2B32B2']} style={styles.linierButton}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >SIGN UP</Text>
                    </LinearGradient>
                </TouchableOpacity>


                <View style={{ margin: 30, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.Question}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => (navigation.navigate("Login"))}>
                        <Text style={{ ...styles.Question, fontWeight: "bold", margin: 5 }}>Sign in</Text>
                    </TouchableOpacity>
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
    LoginForm: {
        justifyContent: "center",
        alignItems: "center",
        width: '85%',
        height: '45%',
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5
    },
    textInput: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        marginBottom: 0,
        width: "85%",
        borderRadius: 50,
        backgroundColor: "white",
        elevation: 3
    },
    LoginButton: {
        marginTop: 20,
        width: "60%",
        borderRadius: 50,
        elevation: 3
    },
    linierButton: {
        borderRadius: 50, width: "100%", padding: 15, justifyContent: "center",
        alignItems: "center",

    },
    Question: {
        color: "white",

    }

})