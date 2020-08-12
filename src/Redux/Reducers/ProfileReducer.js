const initialState = {
    name: null,
    email: null,
    picture: null,
    userId: null
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE': {
            return {
                ...state,
                name: action.name,
                userId: action.userId,
                picture: action.picture
            }
        }
        case 'CLEAR_PROFILE': {
            return {
                ...state,
                name: null,
                email: null,
                picture: null,
                userId: null
            }
        }

        default:
            return state;
    }
}