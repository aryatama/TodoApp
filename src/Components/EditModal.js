import React, { useState, useEffect } from 'react'
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput,
    TouchableWithoutFeedback
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { handleEditTodo } from '../Redux/Actions/TodoAction';


const EditModal = (props) => {
    const [importance, setImportance] = useState()
    const [completion, setCompletion] = useState()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect (()=> {
        setTitle(props.theTitle)
        setDesc(props.theDesc)
        setImportance(props.theImportance)
        setCompletion(props.theCompletion)
    }, [])

    const dispatch = useDispatch() 
    const editTodo = (Title, Desc, Importance, Completion, Token, Id) => dispatch(handleEditTodo(Title, Desc, Importance, Completion, Token, Id))

    const token = useSelector(state => state.auth.token)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showModal}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={{ flexDirection: "column", width: "90%", backgroundColor: "white", padding: 10, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>

                    <View style={styles.Note}>
                            <Text>Title</Text>
                            <TextInput style={{ fontSize: 23, marginBottom: 5 }} multiline editable textAlignVertical="top" value={title} onChangeText={e => setTitle(e)} />
                        </View>
                        <View style={styles.Note}>
                            <Text>Description</Text>

                            <TextInput style={{ fontSize: 23, marginBottom: 5 }} multiline editable textAlignVertical="top" value={desc} onChangeText={e => setDesc(e)} />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                            <View style={{ flexDirection: "row", }}>
                                <TouchableWithoutFeedback onPress={() => setImportance(!importance)}>
                                    <Icon name={importance ? "star-circle" : "star-circle-outline"} size={30} color="#1488CC" />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => setCompletion(!completion)}>
                                    <Icon name={completion ? "checkbox-marked-circle" : "check-circle-outline"} size={30} color="#ff2e63" />
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            </View>

                        </View>
                    </View>


                    <View style={{flexDirection: "row"}} >
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3", marginRight: 10 }}
                        onPress={() => {
                            editTodo(title, desc, importance, completion, token, props.theId)
                            props.handleModal()
                        }}
                    >
                        <Text style={styles.textStyle}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#d63447" }}
                        onPress={() => {
                            props.handleModal()
                        }}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableHighlight>
                    </View>

                    


                </View>
            </View>
        </Modal>
    )
}

export default EditModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    Note: {
        width: 300,
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 10
    },
    openButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 30,
        borderRadius: 10,
        elevation: 3
    }
})
