import React from 'react'
import { Thumbnail } from 'native-base';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../Redux/Actions/AuthAction';


export default function DrawerProfile(props) {

    const profileState = useSelector(state => state.profile)

    const dispatch = useDispatch();
    const handleLogoutButton = () => {
        dispatch(handleLogout())
    }
    const handleNavigateProfile = () => {
        props.navigation.navigate('Profile')
        props.navigation.toggleDrawer()
    }

    return (
        <View style={styles.container}>
            <View style={styles.ThumbnailStyle}>
                <Thumbnail large source={{ uri: profileState.picture }} />
                <Text style={styles.NameStyle}>{profileState.name}</Text>
                <TouchableOpacity style={styles.SettingStyle} onPress={() => handleNavigateProfile() }>
                    <LinearGradient colors={['#1488CC', '#2B32B2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: "100%", flexDirection: "row", borderRadius: 40, justifyContent: "center", alignItems: "center" }}>
                        <Icon name="account-edit" size={20} style={{ marginRight: 5 }} color="white" />
                        <Text style={{ color: "white", fontSize: 15 }} >Edit Profile</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.LogoutStyle}>
                <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => handleLogoutButton()}>
                    <Icon name="logout" size={25} style={{}} />
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }} >Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ThumbnailStyle: {
        width: "100%",
        padding: 20,
        alignItems: "center",
        backgroundColor: "#e4e4e4"
    },
    NameStyle: {
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    EmailStyle: {
        color: "rgba(0,0,0, 0.8) ",
        fontSize: 15,
        paddingBottom: 10
    },
    SettingStyle: {
        flexDirection: "row",
        width: "50%",
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40
    },
    LogoutStyle: {
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 13,
        padding: 10,
        borderTopWidth: 1,
        borderColor: "rgba(0,0,0, 0.6) "
    }

})