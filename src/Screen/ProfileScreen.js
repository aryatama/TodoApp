import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import { Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateProfile } from '../Redux/Actions/ProfileAction';


const Profile = ({ navigation: { goBack } }) => {
    const token = useSelector(state => state.auth.token)
    const profile = useSelector(state => state.profile)
    const dispatch = useDispatch();
    const saveUpdate = (Token, Name, Photo, PhotoName, photoType) => {
        dispatch(handleUpdateProfile(Token, Name, Photo, PhotoName, photoType))
        goBack()
    }

    const [theName, setTheName] = useState('');
    const [photoProfile, setPhotoProfile] = useState(null);
    const [photoName, setPhotoName] = useState(null);
    const [photoType, setPhotoType] = useState(null);


    useEffect(() => {
        setTheName(profile.name)
    }, []) 

    const handleChoosePhoto = () => {
        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error = ', response.error);
            } else {
                console.log(response)
                setPhotoProfile(response.uri);
                setPhotoName(response.fileName);
                setPhotoType(response.type);
            }
        });
    };

    return (
        <LinearGradient colors={['#1488CC', '#2B32B2']} style={styles.linearGradient} style={styles.container}>

            <View style={styles.ThumbnailStyle} >
                <Thumbnail source={{ uri: profile.picture }} style={{ width: 180, height: 180, borderRadius: 100 }} />
                <Text>{photoName}</Text>
                <TouchableWithoutFeedback onPress={() => handleChoosePhoto()}>
                    <Text>Change Photo</Text>
                </TouchableWithoutFeedback>
                <View style={{ ...styles.textInput, marginTop: 20 }}>
                    <Icon name="account" size={30} color="rgba(0,0,0, 0.8)" />
                    <TextInput placeholder="Name" value={theName} onChangeText={(e) => setTheName(e)} />
                </View>

                <TouchableOpacity style={styles.LoginButton} onPress={() => saveUpdate(token, theName, photoProfile, photoName, photoType)}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#1488CC', '#2B32B2']} style={styles.linierButton}>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }} >SAVE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    ThumbnailStyle: {
        width: "100%",
        padding: 20,
        alignItems: "center",
    },
    textInput: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 20,
        marginBottom: 0,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "white",
        marginBottom: 10
    },
    LoginButton: {
        marginTop: 20,
        width: "80%",
        borderRadius: 50,
        elevation: 1
    },
    linierButton: {
        borderRadius: 50, width: "100%", padding: 15, justifyContent: "center",
        alignItems: "center",

    },
})
