import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Modal, FlatList, ToastAndroid, Button, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AddFab from '../Components/AddFab';
import AddModal from '../Components/AddModal'
import { useSelector, useDispatch } from 'react-redux'
import { handleGetProfile } from '../Redux/Actions/ProfileAction';
import { handleGetTodo, handleToast } from '../Redux/Actions/TodoAction';
import ListTodo from '../Components/ListTodo';


export default function HomeScreen({ navigation }) {

    const token = useSelector(state => state.auth.token)
    const email = useSelector(state => state.auth.email)
    const data = useSelector(state => state.todo.todo)
    const toast = useSelector(state => state.todo)

    const dispatch = useDispatch();
    const getProfile = (Token, Email) => dispatch(handleGetProfile(Token, Email))
    const getTodo = (Token) => dispatch(handleGetTodo(Token))

    const setToast = () => dispatch(handleToast())


    useEffect(() => {
        getProfile(token, email)
        getTodo(token)
        console.log("data is the", data.rows)
    }, [])






    const showToast = () => {
        ToastAndroid.show(toast.message, ToastAndroid.SHORT);
        setToast()
    };


    const [showAddModal, setShowAddmodal] = useState(false)

    if (data.rows == null) {
        return   <LinearGradient colors={['#1488CC', '#2B32B2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ ...styles.container, justifyContent: "center" }}>
                <ActivityIndicator size="large" color="white" />
                <Text style={{fontSize: 25, fontWeight:"bold", color:"white"}}>Loading...</Text>
            </LinearGradient>
    }
    return (
        <LinearGradient colors={['#1488CC', '#2B32B2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>

            <FlatList
                data={data.rows}
                renderItem={({ item }) => (
                    <ListTodo
                        desc={item.description}
                        title={item.title}
                        importance={item.importance}
                        completion={item.completion}
                        id={item.id}
                        token={token}
                        getToken={() => getTodo(token)}
                    />
                )}
                keyExtractor={item => `item ${item.id}`}
                style={{ height: "100%" }}
            />

            <AddFab handleAddModal={() => setShowAddmodal(true)} />

            <AddModal showModal={showAddModal} handleAddModal={() => setShowAddmodal(false)} />

            {toast.isToast && showToast()}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
})