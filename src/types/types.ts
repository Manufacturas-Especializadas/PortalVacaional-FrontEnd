export interface Roles {
  id: number;
  name: string;
}

export interface Employee {
  nomina: number;
  nombre: string;
  depto: string;
  antiguedad: string;
  total: number;
}

export interface EmployeeList {
  id: number;
  payRollNumber: number;
  fullName: string;
  department: string;
  roleId: number;
  yearsOfService: number;
  totalVacationDays: number;
  isActive: boolean;
}

export interface ManagersList {
  id: number;
  payRollNumber: number;
  fullName: string;
  email: string;
  roleId: number;
  roleName: string;
  department: string;
  departmentId: number;
  yearsOfService: number;
  hireDate: string;
  totalVacationDays: number;
  isActive: boolean;
}

export interface VacationBalance {
  year: number;
  assignedDays: number;
}

export interface CreateEmployee {
  payRollNumber: number;
  fullName: string;
  department: string;
  hireDate: string;
}

export interface UpdateEmployee {
  id: number;
  payRollNumber: number;
  fullName: string;
  department: string;
  roleId: number;
  hireDate: string;
  isActive: boolean;
  balances: VacationBalance[];
}

export interface SetupProfile {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface Login {
  payRollNumber: number;
  password: string;
}

export interface LoginResponse {
  token: string;
  payRollNumber: number;
  fullName: string;
  roleId: number;
  mustChangePassword: boolean;
  email: string | null;
}

export interface VacationRequest {
  id: number;
  startDate: string;
  endDate: string;
  days: number;
  status: string;
}

export interface EmployeeDashboardData {
  totalDays: number;
  usedDays: number;
  availableDays: number;
  history: VacationRequest[];
}
