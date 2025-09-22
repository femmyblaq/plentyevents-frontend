import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";


// Protect dashboards
const ProtectedRoute = ({ children, allowedRoles }) => {
  // export default function PrivateRoute({ children, allowedRoles }) {
  const { token, role, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // wait for cookie check

  if (!token) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;