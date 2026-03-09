import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../types/types";
import { authService } from "../api/services/AuthService";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: Login) => {
    setIsLoading(true);

    const loginPromise = authService.login(data);

    toast.promise(loginPromise, {
      loading: "Verificando credenciales...",
      success: "¡Bienvenido al portal MESA!",
      error: (err) => err.response?.data?.message || "Error al iniciar sesión",
    });

    try {
      const response = await loginPromise;

      localStorage.setItem("token", response.token);

      const decoded: any = jwtDecode(response.token);
      const userRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      if (response.mustChangePassword || !response.email) {
        navigate("/setup-profile");

        return true;
      }

      if (userRole == "Admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/empleado-dashboard");
      }

      return true;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
