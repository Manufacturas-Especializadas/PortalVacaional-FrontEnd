import { useCallback, useEffect, useState } from "react";
import type { EmployeeDashboardData } from "../types/types";
import { employeeService } from "../api/services/EmployeeService";

export const useEmployeeDashboard = () => {
  const [data, setData] = useState<EmployeeDashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = useCallback(async () => {
    try {
      const result = await employeeService.getDashboard();
      setData(result);
    } catch (error) {
      console.error("Error al cargar dashboard: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return { data, loading, refresh: fetchDashboard };
};
