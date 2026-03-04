export interface Employee {
  nomina: number;
  nombre: string;
  depto: string;
  antiguedad: string;
  total: number;
}

export interface EmployeeList {
  payRollNumber: number;
  fullName: string;
  department: string;
  yearsOfService: number;
  totalVacationDays: number;
}

export interface VacationBalance {
  year: number;
  assignedDays: number;
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
