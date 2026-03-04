import { API_CONFIG } from "../../config/api";
import type { EmployeeList, UpdateEmployee } from "../../types/types";
import { apiClient } from "../client";

class AdminService {
  private getEmployeesListEndpoint =
    API_CONFIG.endpoints.admin.getEmployeesWithTheirDays;
  private updateEmployeeEndpoint = API_CONFIG.endpoints.admin.update;

  async getEmployeesList(): Promise<EmployeeList[]> {
    return apiClient.get<EmployeeList[]>(this.getEmployeesListEndpoint);
  }

  async updateEmployee(id: number, data: UpdateEmployee): Promise<void> {
    const payload = { ...data, id: id };
    return apiClient.patch<void>(
      `${this.updateEmployeeEndpoint}${id}`,
      payload,
    );
  }
}

export const adminService = new AdminService();
