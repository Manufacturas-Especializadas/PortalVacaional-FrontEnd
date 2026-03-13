import { useEffect, useState } from "react";
import type { Roles } from "../types/types";
import { adminService } from "../api/services/AdminService";

export const useRoles = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Roles[]>([]);

  const getRoles = async () => {
    setLoading(true);

    try {
      const role = await adminService.getRoles();
      setData(role);
    } catch (err: any) {
      console.error("Error al obtener los roles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  return { data, loading };
};
