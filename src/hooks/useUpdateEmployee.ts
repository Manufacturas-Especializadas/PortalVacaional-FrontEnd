import { useState } from "react";
import type { UpdateEmployee } from "../types/types";
import { toast } from "react-hot-toast";
import { adminService } from "../api/services/AdminService";

export const useUpdateEmployee = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateEmployee = async (id: number, data: UpdateEmployee) => {
    setIsUpdating(true);

    const updatePromise = adminService.updateEmployee(id, data);

    toast.promise(updatePromise, {
      loading: "Sincronizando datos con MESA...",
      success: "Colaborador actualizado con éxito",
      error: (err) => {
        const errorMessage =
          err.response?.data?.message || "No se pudieron guardar los cambios";
        return `Error: ${errorMessage}`;
      },
    });

    try {
      await updatePromise;
      return true;
    } catch (error) {
      return false;
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateEmployee, isUpdating };
};
