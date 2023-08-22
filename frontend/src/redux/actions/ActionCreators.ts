import { Dispatch } from "redux";
import { UserType } from "../../utils/Types";
import { ActionTypes } from "./ActionTypes";

export const AddUserAction = (payload: UserType) => (dispatch: Dispatch) => {

    dispatch({
        type: ActionTypes.ADD_USER,
        payload
    })
}
export const RemoveUserAction = () => (dispatch: Dispatch) => {

    dispatch({
        type: ActionTypes.REMOVE_USER,
    })
}