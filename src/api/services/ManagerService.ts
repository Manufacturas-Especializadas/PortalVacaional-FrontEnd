import { API_CONFIG } from "../../config/api";
import type { PendingRequest } from "../../types/types";
import { apiClient } from "../client";

class ManagerService {
  private approvalsRequestEndpoint =
    API_CONFIG.endpoints.managers.approvalsRequest;
  private getRequestPendingEndpoint =
    API_CONFIG.endpoints.managers.pedingRequest;

  async getRequestPending(): Promise<PendingRequest[]> {
    return apiClient.get<PendingRequest[]>(this.getRequestPendingEndpoint);
  }

  async approvalsRequest(data: {
    requestId: number;
    approved: boolean;
    comments: string;
  }): Promise<void> {
    return apiClient.post<void>(this.approvalsRequestEndpoint, data);
  }
}

export const managerService = new ManagerService();
