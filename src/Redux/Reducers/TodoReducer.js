const initialState = {
    todo: {},
    todoImportance: {},
    todoCompletion: {},
    todos:{},
    isToast: false,
    message: null
}

export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODO':
            return {
                ...state,
                todo: action.payload,
            }
        case 'GET_TODO_COMPLETION':
            return {
                ...state,
                todoCompletion: action.payload,
            }
        case 'GET_TODO_IMPORTANCE':
            return {
                ...state,
                todoImportance: action.payload,
            }
        case 'SET_IMPORTANCE':
            return {
                ...state,
                importance: action.importance,
                isToast: action.toast,
                message: action.message
            }
        case 'SET_COMPLETION':
            return {
                ...state,
                completion: action.completion,
                isToast: toast,
                message: action.message
            }
        case 'SHOW_TOAST':
            return {
                ...state,
                isToast: action.toast,
                message: action.message

            }
        case 'CLEAR_DATA':
            return {
                ...state,
                todo: {},
                todoImportance: {},
                todoCompletion: {},
            }

        default:
            return state;
    }
}