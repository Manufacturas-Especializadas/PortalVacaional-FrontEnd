import { useState, useCallback, useEffect } from "react";
import { adminService } from "../api/services/AdminService";
import type { ManagersList } from "../types/types";

export const userManagerList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [managers, setManagers] = useState<ManagersList[]>([]);

  const getManagersList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await adminService.getManagers();
      setManagers(data);
    } catch (err: any) {
      const message = err.message || "Error al cargar los empleados";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getManagersList();
  }, []);

  return {
    managers,
    loading,
    error,
    refresh: getManagersList,
  };
};
