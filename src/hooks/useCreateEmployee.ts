import { useState } from "react";
import type { CreateEmployee } from "../types/types";
import { adminService } from "../api/services/AdminService";
import toast from "react-hot-toast";

export const useCreateEmployee = () => {
  const [isCreating, setIsCreating] = useState(false);

  const createEmployee = async (data: CreateEmployee) => {
    setIsCreating(true);
    const promise = adminService.createEmployee(data);

    toast.promise(promise, {
      loading: "Registrando empleado...",
      success: "¡Empleado registrado!",
      error: (err) => {
        const msg =
          err.response?.data?.message || "Error al registrar empleado";

        return `Error: ${msg}`;
      },
    });

    try {
      await promise;

      return true;
    } catch {
      return false;
    } finally {
      setIsCreating(false);
    }
  };

  return { createEmployee, isCreating };
};
