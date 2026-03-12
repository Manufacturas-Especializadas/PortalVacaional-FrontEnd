import { API_CONFIG } from "../../config/api";
import type { EmployeeDashboardData } from "../../types/types";
import { apiClient } from "../client";

class EmployeeService {
  private getDashboardEndpoint = API_CONFIG.endpoints.employee.getDashboard;
  private requestVacationEndpoint =
    API_CONFIG.endpoints.employee.requestVacation;

  async getDashboard(): Promise<EmployeeDashboardData> {
    return apiClient.get<EmployeeDashboardData>(this.getDashboardEndpoint);
  }

  async requestVacation(data: {
    startDate: string;
    endDate: string;
    requestedDays: number;
  }): Promise<void> {
    return apiClient.post<void>(this.requestVacationEndpoint, data);
  }
}

export const employeeService = new EmployeeService();
