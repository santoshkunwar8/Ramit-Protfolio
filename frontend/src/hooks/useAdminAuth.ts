import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";

const useAdminAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: State) => state.user.user); 

  useEffect(() => {
    const isAdminRoute = location.pathname.startsWith("/admin/upload");

    // Redirect unauthorized users
    if (isAdminRoute && (!user || !user.isAdmin)) {
      navigate("/login"); 
    }
  }, [user, location.pathname, navigate]);
};

export default useAdminAuth;