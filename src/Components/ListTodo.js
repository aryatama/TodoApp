import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import EditModal from './EditModal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { handleImportance, handleCompletion, handleDeleteTodo } from '../Redux/Actions/TodoAction';


const ListTodo = (props) => {

    const getToken = () => props.getToken()
    const dispatch = useDispatch()
    const setImportance = (state, id, token) => {
        dispatch(handleImportance(state, id, token))
    }
    const setCompletion = (state, id, token) => {
        dispatch(handleCompletion(state, id, token))
    }
    const deleteTodo = (id, token) => {
        dispatch(handleDeleteTodo(id, token))
    }

    const [showModal, setShowmodal] = useState(false)

    return (
        <View style={styles.ListContainer}>

            <View style={{ flexDirection: "column", width: "90%", backgroundColor: "white", padding: 10, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>

                <View style={{ borderBottomWidth: 2 }}>
                    <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 5 }} >{props.title}</Text>
                </View>

                <Text style={{ fontSize: 18, marginBottom: 5, marginTop: 5 }}>{props.desc}</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <View style={{ flexDirection: "row", }}>
                        <TouchableWithoutFeedback onPress={() => setImportance(!props.importance, props.id, props.token)}>
                            <Icon name={props.importance ? "star-circle" : "star-circle-outline"} size={30} color="#1488CC" />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => setCompletion(!props.completion, props.id, props.token)}>
                            <Icon name={props.completion ? "checkbox-marked-circle" : "check-circle-outline"} size={30} color="#ff2e63" />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ backgroundColor: "#364f6b", borderRadius: 20, paddingLeft: 10, paddingRight: 10, color: "white", fontWeight: 'bold', marginRight: 5 }}>Saturday, 24 Mei 2020</Text>
                        <TouchableOpacity style={{ backgroundColor: "#250f6c", borderRadius: 20, paddingLeft: 5, paddingRight: 8, flexDirection: "row", justifyContent: "center", alignItems: "center" }} onPress={() => setShowmodal(true)}>
                            <Icon name="pen" size={15} color="white" />
                            <Text style={{ color: "white", fontWeight: "bold", marginLeft: 5, marginRight: 3 }} >Edit</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 85 }} onPress={() => deleteTodo(props.id, props.token)}>
                <Icon name="trash-can-outline" size={30} color="white" />
            </TouchableOpacity>

            <EditModal
                showModal={showModal}
                handleModal={() => setShowmodal(false)}
                theTitle={props.title} theDesc={props.desc}
                theImportance={props.importance}
                theCompletion ={props.completion}
                theId= {props.id}
            />
        </View>
    )
}


export default ListTodo

const styles = StyleSheet.create({
    ListContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
        backgroundColor: "#d72323",
        width: 380,
        borderRadius: 8,
        elevation: 3
    }
})
