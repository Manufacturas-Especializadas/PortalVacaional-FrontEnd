import { Navigate, Route, Routes } from "react-router-dom";
import { EmployeeDashboard } from "../pages/EmployeeDashboard/EmployeeDashboard";
import { ManagerDashboard } from "../pages/ManagerDashboard/ManagerDashboard"; // Importar el nuevo
import { Login } from "../pages/Auth/Login/Login";
import { AdminDashboard } from "../pages/AdminDashboard/AdminDashboard";
import { MainLayout } from "../layouts/MainLayout";
import { SetupProfile } from "../pages/SetupProfile/SetupProfile";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { ManagerTable } from "../components/Admin/ManagerTable";
import { useAuth } from "../hooks/useAuth"; // Asumiendo que tienes un hook de auth

export const MyRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          user ? (
            user.role === "Admin" ? (
              <Navigate to="/admin-dashboard" />
            ) : ["Manager", "Department Head"].includes(user.role) ? (
              <Navigate to="/manager-dashboard" />
            ) : (
              <Navigate to="/empleado-dashboard" />
            )
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route path="/setup-profile" element={<SetupProfile />} />
      </Route>

      <Route element={<MainLayout />}>
        {/* Rutas exclusivas de Admin */}
        <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/managers" element={<ManagerTable />} />
        </Route>

        {/* Rutas de Jefe / Gerente */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["Department Head", "Manager"]} />
          }
        >
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        </Route>

        {/* Rutas generales para todos (o solo empleados) */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["Employee", "Admin", "Department Head", "Manager"]}
            />
          }
        >
          <Route path="/empleado-dashboard" element={<EmployeeDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
