import { UserType } from "../../utils/Types";
import { ActionTypes } from "../actions/ActionTypes";

interface UserState {
    user: null | UserType
}

interface AddUserAction {
    type: ActionTypes.ADD_USER;
    payload: UserType
}
interface RemoveUserAction {
    type: ActionTypes.REMOVE_USER;
}

type UserAction = AddUserAction | RemoveUserAction
const INITIAL_USERSTATE = {
    user: null,
};

const UserReducer = (state: UserState = INITIAL_USERSTATE, action: UserAction) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, user: action.payload };

        case ActionTypes.REMOVE_USER:
            return { ...state, user: null };

        default:
            return state;
    }
};

export default UserReducer;
