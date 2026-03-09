import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import toast from "react-hot-toast";

export const MainLayout = () => {
  const navigate = useNavigate();

  const userRaw = localStorage.getItem("user");
  const userData = userRaw ? JSON.parse(userRaw) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Sesión cerrada correctamente", {
      style: {
        borderRadius: "12px",
        background: "#333",
        color: "#fff",
      },
    });

    navigate("/login");
  };

  const roleDisplay = userData?.role || "Colaborador";

  return (
    <div>
      <Navbar
        userName={userData?.fullName || "Usuario MESA"}
        role={roleDisplay}
        onLogout={handleLogout}
      />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
