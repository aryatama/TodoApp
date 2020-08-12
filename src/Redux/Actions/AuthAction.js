import AsyncStorage from '@react-native-community/async-storage';
import Axios from "axios"

export const handleCheckToken = () => {
    return async dispatch => {
        try {
            const res = await AsyncStorage.getItem("@token")
            dispatch({ type: 'CHECK_TOKEN', token: res })

        } catch (error) {
            console.log(error)
        }
    }
}

export const handleLogin = (Email, Password) => {
    return async dispatch => {
        try {
            const res = await Axios.post('https://titan-todoapp.herokuapp.com/api/v1/users/login', {
                email: Email,
                password: Password
            })
            await AsyncStorage.setItem("@token", res.data.token)

            dispatch({ type: 'LOGIN', token: res.data.token, email: Email })
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleRegister = (Name, Email, Password) => {
    return async dispatch => {
        try {
            const res = await Axios.post('https://titan-todoapp.herokuapp.com/api/v1/users/register', {
                name : Name,
                email: Email,
                password: Password
            })
            await AsyncStorage.setItem("@token", res.data.token)
            dispatch({type: 'REGISTER', token: res.data.token, email :Email})
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleLogout = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem("@token")
            dispatch({ type: 'LOGIN', token: null, email: null })
            dispatch({ type: 'CLEAR_DATA' })
            dispatch({ type: 'CLEAR_PROFILE'})
        } catch (error) {
            console.log(error)
        }
    }
}

