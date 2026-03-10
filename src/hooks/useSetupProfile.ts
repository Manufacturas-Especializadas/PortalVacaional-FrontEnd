import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SetupProfile } from "../types/types";
import { authService } from "../api/services/AuthService";
import toast from "react-hot-toast";

export const useSetupProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();

  const completeSetup = async (data: SetupProfile) => {
    setIsUpdating(true);
    try {
      await authService.setupProfile(data);

      const userRaw = localStorage.getItem("user");
      if (userRaw) {
        const user = JSON.parse(userRaw);
        user.mustChangePassword = false;
        user.email = data.email;
        localStorage.setItem("user", JSON.stringify(user));
      }

      toast.success("Perfil configurado correctamente");
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const path =
        user.role === "Admin" ? "/admin-dashboard" : "/empleado-dashboard";

      navigate(path);
      return true;
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Error al actualizar perfil",
      );
      return false;
    } finally {
      setIsUpdating(false);
    }
  };

  return { completeSetup, isUpdating };
};
