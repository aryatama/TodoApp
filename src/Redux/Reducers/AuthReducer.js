const initialState = {
    isLoading : false,
    isFlash : true,
    token : null,
    email: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.token,
                email: action.email,
                isLoading : false
            }
            case "REGISTER":
            return {
                ...state,
                token: action.token,
                email: action.email,
                isLoading : false
            }
            case "CHECK_TOKEN":
            return {
                ...state,
                token: action.token,
                isFlash: false
            }
            case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
} 