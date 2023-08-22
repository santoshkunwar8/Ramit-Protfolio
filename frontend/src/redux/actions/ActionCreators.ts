import { Dispatch } from "redux";
import { UserType } from "../../utils/Types";
import { ActionTypes } from "./ActionTypes";
import { Action } from ".";

export const AddUserAction = (payload: UserType) => (dispatch: Dispatch<Action>) => {

    return dispatch({
        type: ActionTypes.ADD_USER,
        payload
    })
}
export const RemoveUserAction = () => (dispatch: Dispatch) => {

    return dispatch({
        type: ActionTypes.REMOVE_USER,
    })
}