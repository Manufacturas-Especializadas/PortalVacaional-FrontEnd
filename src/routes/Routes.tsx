import { Navigate, Route, Routes } from "react-router-dom";
import { EmployeeDashboard } from "../pages/EmployeeDashboard/EmployeeDashboard";
import { Login } from "../pages/Auth/Login/Login";
import { AdminDashboard } from "../components/Admin/AdminDashboard";
import { MainLayout } from "../layouts/MainLayout";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/empleado-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
