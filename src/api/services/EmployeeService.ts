import { API_CONFIG } from "../../config/api";
import type { EmployeeDashboardData } from "../../types/types";
import { apiClient } from "../client";

class EmployeeService {
  private getDashboardEndpoint = API_CONFIG.endpoints.employee.getDashboard;

  async getDashboard(): Promise<EmployeeDashboardData> {
    return apiClient.get<EmployeeDashboardData>(this.getDashboardEndpoint);
  }
}

export const employeeService = new EmployeeService();
