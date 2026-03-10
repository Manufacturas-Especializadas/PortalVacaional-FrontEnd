const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("API base URL is not defined in environment variables");
}

export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  endpoints: {
    auth: {
      login: "/api/Auth/login",
      setupProfile: "/api/Auth/setup-profile",
    },
    admin: {
      getEmployeesWithTheirDays: "/api/Admin/employees",
      create: "/api/Admin/createEmployees",
      update: "/api/Admin/employees/",
      delete: "/api/Admin/deleteEmployees/",
      reactivate: "/api/Admin/reactivateEmployee/",
    },
    employee: {
      getDashboard: "/api/Employee/dashboard",
    },
  },
};
