import { API_CONFIG } from "../../config/api";
import type { SetupProfile } from "../../types/types";
import { apiClient } from "../client";

class AuthService {
  private setupProfileEndpoint = API_CONFIG.endpoints.auth.setupProfile;

  async setupProfile(data: SetupProfile): Promise<void> {
    return apiClient.post<void>(this.setupProfileEndpoint, data);
  }
}

export const authService = new AuthService();
