import { useEffect, useState } from "react";
import { getLoggedInUserApi } from "../utils/api";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";

const useSetup = () => {
  const dispatch = useDispatch();
  const { AddUserAction } = bindActionCreators(actionCreators, dispatch);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const fetchLoggedInUser = async () => {
    try {
      const { data, status } = await getLoggedInUserApi();
      if (status === 200) {
        AddUserAction(data.message);
      } else {
        console.error("Error fetching logged-in user:", data.message);
      }
    } catch (error) {
      console.error("Error fetching logged-in user:", error);
    } finally {
      setLoading(false);
    }
  };

  return loading;
};

export default useSetup;