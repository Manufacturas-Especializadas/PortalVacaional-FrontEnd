import { toast } from "react-hot-toast";
import { adminService } from "../api/services/AdminService";

export const useReactivateEmployee = () => {
  const reactivateEmployee = async (id: number): Promise<boolean> => {
    const promise = adminService.reactivateEmployee(id);

    toast.promise(promise, {
      loading: "Restableciendo acceso del colaborador...",
      success: "Colaborador reactivado con éxito",
      error: "No se pudo reactivar al empleado",
    });

    try {
      await promise;
      return true;
    } catch {
      return false;
    }
  };

  return { reactivateEmployee };
};
