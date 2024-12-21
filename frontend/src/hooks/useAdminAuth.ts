import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

const useAdminAuth = () => {
  const navigate = useNavigate();
  const user = useSelector((state: State) => state.user);

  useEffect(() => {
    if (!user || user.email !== "Contact.cornortech@gmail.com") {
      navigate("/");
    }
  }, [user, navigate]);
};

export default useAdminAuth;
