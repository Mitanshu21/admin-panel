import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedUser, redirectPath = "/", children }) => {
  if (!loggedUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
