import React from 'react'
import { View, Text, ActivityIndicator, Modal } from 'react-native'
import { useSelector } from 'react-redux'


const Loading = () => {

    isLoading = useSelector(state => state.auth.isLoading)
    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={isLoading}
            >

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0, 0.6)" }}>
                <ActivityIndicator size="large" color="white" />
                <Text style={{color: "white"}}>Loading...</Text>
            </View>
        </Modal>
    )
}

export default Loading
