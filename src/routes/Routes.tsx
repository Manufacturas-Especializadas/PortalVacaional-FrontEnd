import { Navigate, Route, Routes } from "react-router-dom";
import { EmployeeDashboard } from "../pages/EmployeeDashboard/EmployeeDashboard";
import { Login } from "../pages/Auth/Login/Login";
import { AdminDashboard } from "../pages/AdminDashboard/AdminDashboard";
import { MainLayout } from "../layouts/MainLayout";
import { SetupProfile } from "../pages/SetupProfile/SetupProfile";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/setup-profile" element={<SetupProfile />} />
      <Route element={<MainLayout />}>
        <Route path="/empleado-dashboard" element={<EmployeeDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
