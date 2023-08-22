import { UserType } from "../../utils/Types";
import { ActionTypes } from "./ActionTypes";


interface AddUserAction {
    type: ActionTypes.ADD_USER;
    payload: UserType
}
interface RemoveUserAction {
    type: ActionTypes.REMOVE_USER;
}

export type Action = AddUserAction | RemoveUserAction
