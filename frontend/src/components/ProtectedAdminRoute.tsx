import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { State } from "../redux/reducers";

const ProtectedAdminRoute = () => {
  const user = useSelector((state: State) => state.user.user);

  
  if (!user) {
    return  <Navigate to="/login" />;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  
  return <Outlet />;
};

export default ProtectedAdminRoute;