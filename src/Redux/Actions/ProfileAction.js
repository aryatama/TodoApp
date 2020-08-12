import Axios from "axios"

export const handleGetProfile = (token, email) => {
    return async dispatch => {
        try {
            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/profiles/', {
                headers: {
                    Authorization: token
                }
            })
            const data = res.data.profile
            dispatch({
                type: 'GET_PROFILE',
                name: data.name,
                userId: data.id,
                picture: data.picture
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleUpdateProfile = (token, name, photo, photoName, photoType) => {
    const dataForm = new FormData();
    dataForm.append('name', name);
    dataForm.append('picture', {
        uri: photo,
        name: photoName,
        type: photoType
    });
    return async dispatch => {
        try {
            const ress = await Axios.put('https://titan-todoapp.herokuapp.com/api/v1/profiles/', dataForm, {
                headers: {
                    Authorization: token
                },
            })
            console.log(ress);

            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/profiles/', {
                headers: {
                    Authorization: token
                }
            })
            const data = res.data.profile
            dispatch({
                type: 'GET_PROFILE',
                name: data.name,
                userId: data.id,
                picture: data.picture
            })
        } catch (error) {
            console.log(error)
        }
    }
}