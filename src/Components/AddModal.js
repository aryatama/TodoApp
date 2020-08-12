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
import { handleCreateTodo } from '../Redux/Actions/TodoAction';


const AddModal = (props) => {
    const [importance, setImportance] = useState(false)
    const [completion, setCompletion] = useState(false)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const token = useSelector(state => state.auth.token)

    const dispatch = useDispatch();
    const createTodo = (Title, Desc, Importance, Completion, Token) => dispatch(handleCreateTodo(Title, Desc, Importance, Completion, Token))

    const resetHandle = () => {
        setCompletion(false)
        setImportance(false)
        setTitle('')
        setDesc('')
    }
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
                                {/* false : star-circle-outline, check-circle-outline  checkbox-marked-circle*/}
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            </View>

                        </View>
                    </View>

                    <View style={{flexDirection: "row"}} >
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3", marginRight: 10 }}
                        onPress={() => {
                            createTodo(title, desc, importance, completion, token)
                            props.handleAddModal()
                            resetHandle()
                        }}
                    >
                        <Text style={styles.textStyle}>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#d63447" }}
                        onPress={() => {
                            props.handleAddModal()
                            resetHandle()

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

export default AddModal

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
