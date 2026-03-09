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
  yearsOfService: number;
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
