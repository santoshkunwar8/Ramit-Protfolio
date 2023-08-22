import { combineReducers } from "redux"
import UserReducer from "./userReducer";


const reducers = combineReducers({

    user: UserReducer,

})

export type State = ReturnType<typeof reducers>

export default reducers;



