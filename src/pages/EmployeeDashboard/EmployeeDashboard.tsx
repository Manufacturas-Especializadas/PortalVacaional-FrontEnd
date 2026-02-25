import { VacationForm } from "../../components/Employee/VacationForm";
import { VacationHistory } from "../../components/Employee/VacationHistory";
import { VacationStats } from "../../components/Employee/VacationStats";

export const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Panel de Vacaciones
          </h2>
          <p className="text-gray-500">
            Gestiona tus días disponibles y solicitudes
          </p>
        </div>

        <VacationStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <VacationForm />
          <VacationHistory />
        </div>
      </div>
    </div>
  );
};
