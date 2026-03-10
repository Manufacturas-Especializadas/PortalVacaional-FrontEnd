import { Navigate, Route, Routes } from "react-router-dom";
import { EmployeeDashboard } from "../pages/EmployeeDashboard/EmployeeDashboard";
import { Login } from "../pages/Auth/Login/Login";
import { AdminDashboard } from "../pages/AdminDashboard/AdminDashboard";
import { MainLayout } from "../layouts/MainLayout";
import { SetupProfile } from "../pages/SetupProfile/SetupProfile";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/setup-profile" element={<SetupProfile />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        <Route
          element={<ProtectedRoute allowedRoles={["Employee", "Admin"]} />}
        >
          <Route path="/empleado-dashboard" element={<EmployeeDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
