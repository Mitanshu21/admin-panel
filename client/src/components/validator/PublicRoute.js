import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ loggedUser, redirectPath = "/", children }) => {
  if (loggedUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
