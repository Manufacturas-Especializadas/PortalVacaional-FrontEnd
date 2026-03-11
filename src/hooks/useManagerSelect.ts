import { useState, useCallback, useEffect } from "react";
import { adminService } from "../api/services/AdminService";
import type { ManagerSelect } from "../types/types";

export const useManagerSelect = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ManagerSelect[]>([]);

  const getManagersSelect = useCallback(async () => {
    setLoading(true);

    try {
      const data = await adminService.getManagers();
      setData(data);
    } catch (err: any) {
      console.error("Error al cargar los empleados", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getManagersSelect();
  }, []);

  return {
    data,
    loading,
  };
};
