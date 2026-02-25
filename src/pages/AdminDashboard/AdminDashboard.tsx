import { AdminToolbar } from "../../components/Admin/AdminToolbar";
import { EmployeesTable } from "../../components/Admin/EmployeesTable";

export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Panel Administrativo
          </h2>
          <p className="text-gray-500">
            Gestión masiva de vacaciones y empleados
          </p>
        </div>

        <AdminToolbar onImport={(file) => console.log(file)} />

        <EmployeesTable />
      </div>
    </div>
  );
};
