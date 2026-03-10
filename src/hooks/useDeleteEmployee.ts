import toast from "react-hot-toast";
import { adminService } from "../api/services/AdminService";

export const useDeleteEmployee = () => {
  const deleteEmployee = async (id: number) => {
    const promise = adminService.deleteEmployee(id);

    toast.promise(promise, {
      loading: "Procesando baja del colaborador...",
      success: "Colaborador desactivado del sistema",
      error: "No se pudo procesar la baja",
    });

    try {
      await promise;
      return true;
    } catch (error) {
      return false;
    }
  };

  return { deleteEmployee };
};
