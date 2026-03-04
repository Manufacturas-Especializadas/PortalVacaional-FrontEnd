import { useCallback, useEffect, useState } from "react";
import type { EmployeeList } from "../types/types";
import { adminService } from "../api/services/AdminService";

export const useEmployeeList = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [employees, setEmployees] = useState<EmployeeList[]>([]);

  const getEmployeesList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await adminService.getEmployeesList();
      setEmployees(data);
    } catch (err: any) {
      const message = err.message || "Error al cargar los empleados";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getEmployeesList();
  }, []);

  return {
    employees,
    loading,
    error,
    refresh: getEmployeesList,
  };
};
