import { useEffect } from "react"
import { getLoggedInUserApi } from "../utils/api"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../redux/index"
const useSetup = () => {

    const dispatch = useDispatch();
    const { AddUserAction } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        fetchLoggedInUser();
    }, [])

    const fetchLoggedInUser = async () => {
        try {
            const { data, status } = await getLoggedInUserApi();
            if (status === 200) {
                AddUserAction(data.message);
            }
        } catch (error) {
            console.log(error)
        }

    }


}

export default useSetup