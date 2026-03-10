import { Navigate, Outlet } from "react-router-dom";

interface Props {
  allowedRoles?: string[];
}

export const ProtectedRoute = ({ allowedRoles }: Props) => {
  const token = localStorage.getItem("token");
  const userRaw = localStorage.getItem("user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.mustChangePassword || !user.email) {
    if (window.location.pathname !== "/setup-profile") {
      return <Navigate to="/setup-profile" replace />;
    }
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/empleado-dashboard" replace />;
  }

  return <Outlet />;
};
