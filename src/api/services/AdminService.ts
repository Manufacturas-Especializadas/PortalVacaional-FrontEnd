import { API_CONFIG } from "../../config/api";
import type { EmployeeList } from "../../types/types";
import { apiClient } from "../client";

class AdminService {
  private getEmployeesListEndpoint =
    API_CONFIG.endpoints.admin.getEmployeesWithTheirDays;

  async getEmployeesList(): Promise<EmployeeList[]> {
    return apiClient.get<EmployeeList[]>(this.getEmployeesListEndpoint);
  }
}

export const adminService = new AdminService();
