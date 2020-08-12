import { combineReducers } from "redux";

import { AuthReducer } from './AuthReducer'
import { ProfileReducer } from "./ProfileReducer";
import { TodoReducer } from "./TodoReducer";

export default combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    todo: TodoReducer
})