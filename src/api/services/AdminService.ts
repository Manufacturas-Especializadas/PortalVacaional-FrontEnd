import { API_CONFIG } from "../../config/api";
import type {
  CreateEmployee,
  EmployeeList,
  ManagerSelect,
  ManagersList,
  Roles,
  UpdateEmployee,
} from "../../types/types";
import { apiClient } from "../client";

class AdminService {
  private getManagersEndpoint = API_CONFIG.endpoints.managers.getManagers;
  private getRolesEndpoint = API_CONFIG.endpoints.admin.getRoles;
  private getManagerSelectEndpoint =
    API_CONFIG.endpoints.managers.getManagersSelect;
  private getEmployeesListEndpoint =
    API_CONFIG.endpoints.admin.getEmployeesWithTheirDays;
  private createEmployeeEndpoint = API_CONFIG.endpoints.admin.create;
  private updateEmployeeEndpoint = API_CONFIG.endpoints.admin.update;
  private deleteEmployeeEndpoint = API_CONFIG.endpoints.admin.delete;
  private reactivateEmployeeEndpoint = API_CONFIG.endpoints.admin.reactivate;

  async getRoles(): Promise<Roles[]> {
    return apiClient.get<Roles[]>(this.getRolesEndpoint);
  }

  async getManagerSelect(): Promise<ManagerSelect[]> {
    return apiClient.get<ManagerSelect[]>(this.getManagerSelectEndpoint);
  }

  async getEmployeesList(): Promise<EmployeeList[]> {
    return apiClient.get<EmployeeList[]>(this.getEmployeesListEndpoint);
  }

  async getManagers(): Promise<ManagersList[]> {
    return apiClient.get<ManagersList[]>(this.getManagersEndpoint);
  }

  async createEmployee(data: CreateEmployee): Promise<void> {
    return apiClient.post<void>(this.createEmployeeEndpoint, data);
  }

  async updateEmployee(id: number, data: UpdateEmployee): Promise<void> {
    const payload = { ...data, id: id };
    return apiClient.patch<void>(
      `${this.updateEmployeeEndpoint}${id}`,
      payload,
    );
  }

  async deleteEmployee(id: number): Promise<void> {
    return apiClient.delete<void>(`${this.deleteEmployeeEndpoint}${id}`);
  }

  async reactivateEmployee(id: number): Promise<void> {
    return apiClient.patch<void>(`${this.reactivateEmployeeEndpoint}${id}`, {});
  }
}

export const adminService = new AdminService();
