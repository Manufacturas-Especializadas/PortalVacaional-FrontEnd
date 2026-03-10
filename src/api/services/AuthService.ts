import { API_CONFIG } from "../../config/api";
import type { Login, LoginResponse, SetupProfile } from "../../types/types";
import { apiClient } from "../client";

class AuthService {
  private LoginEndpoint = API_CONFIG.endpoints.auth.login;
  private setupProfileEndpoint = API_CONFIG.endpoints.auth.setupProfile;

  async login(data: Login): Promise<LoginResponse> {
    return apiClient.post<LoginResponse>(this.LoginEndpoint, data);
  }

  async setupProfile(data: SetupProfile): Promise<void> {
    return apiClient.post<void>(this.setupProfileEndpoint, data);
  }
}

export const authService = new AuthService();
