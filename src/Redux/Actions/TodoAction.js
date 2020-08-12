import Axios from "axios"

export const handleGetTodo = (token) => {
    return async dispatch => {
        try {
            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: data
            })

        } catch (error) {
            console.log(error)
        }

    }
}
export const handleGetTodoCompletion = (token) => {
    return async dispatch => {
        try {
            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: data
            })


        } catch (error) {
            console.log(error)
        }

    }
}
export const handleGetTodoImportance = (token) => {
    return async dispatch => {
        try {
            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: data
            })

        } catch (error) {
            console.log(error)
        }

    }
}


export const handleImportance = (state, id, token) => {
    return async dispatch => {
        try {
            const resas = await Axios.put(`https://titan-todoapp.herokuapp.com/api/v1/todos/${id}`,
                {
                    importance: state
                },
                {
                    headers: {
                        Authorization: token
                    },
                })
            dispatch({
                type: 'SHOW_TOAST',
                toast: true,
                message: "Change the importance of the note!"
            })
            console.log("importan")

            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: data
            })

            const resasd = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let datas = resasd.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: datas
            })
            console.log("update!!");
            const resds = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let datads = resds.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: datads
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleCompletion = (state, id, token) => {
    return async dispatch => {
        try {
            const resCom = await Axios.put(`https://titan-todoapp.herokuapp.com/api/v1/todos/${id}`,
                {
                    completion: state
                },
                {
                    headers: {
                        Authorization: token
                    },
                })
            dispatch({
                type: 'SHOW_TOAST',
                toast: true,
                message: "Change the completion of the note!"
            })

            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: data
            })

            const resasd = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let datas = resasd.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: datas
            })
            console.log("update!!");
            const resds = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let datads = resds.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: datads
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const handleDeleteTodo = (id, token) => {
    return async dispatch => {
        try {
            await Axios.delete(`https://titan-todoapp.herokuapp.com/api/v1/todos/${id}`,
                {
                    headers: {
                        Authorization: token
                    },
                })
            dispatch({
                type: 'SHOW_TOAST',
                toast: true,
                message: "Todo has been deleted!"
            })
            const res = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let data = res.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: data
            })

            const resasd = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let datas = resasd.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: datas
            })
            console.log("update!!");
            const resds = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let datads = resds.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: datads
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const handleCreateTodo = (title, desc, importance, completion, token) => {
    return async dispatch => {
        try {
            const res = await Axios.post('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                title: title,
                description: desc,
                importance: importance,
                completion: completion,
                due_date: "2020-05-26"
            }, {
                headers: {
                    Authorization: token
                }
            })
            dispatch({
                type: 'SHOW_TOAST',
                toast: true,
                message: "Todo has been created!"
            })
            const resq = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let dataq = resq.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: dataq
            })

            const resasd = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let datas = resasd.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: datas
            })
            console.log("update!!");
            const resds = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let datads = resds.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: datads
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleEditTodo = (title, desc, importance, completion, token, id) => {
    return async dispatch => {
        try {
            const res = await Axios.put(`https://titan-todoapp.herokuapp.com/api/v1/todos/${id}`, {
                title: title,
                description: desc,
                importance: importance,
                completion: completion,
                due_date: "2020-05-26"
            }, {
                headers: {
                    Authorization: token
                }
            })
            dispatch({
                type: 'SHOW_TOAST',
                toast: true,
                message: "Todo has been Edited!"
            })
            const resq = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/', {
                headers: {
                    Authorization: token
                }
            })
            let dataq = resq.data.todos
            dispatch({
                type: 'GET_TODO',
                payload: dataq
            })

            const resasd = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/importance', {
                headers: {
                    Authorization: token
                }
            })
            let datas = resasd.data.todos
            dispatch({
                type: 'GET_TODO_IMPORTANCE',
                payload: datas
            })
            console.log("update!!");
            const resds = await Axios.get('https://titan-todoapp.herokuapp.com/api/v1/todos/completion', {
                headers: {
                    Authorization: token
                }
            })
            let datads = resds.data.todos
            dispatch({
                type: 'GET_TODO_COMPLETION',
                payload: datads
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const handleToast = () => {
    return {
        type: 'SHOW_TOAST',
        message: null,
        toast: false
    }
}
