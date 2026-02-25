import { VacationForm } from "../../components/Employee/VacationForm";
import { VacationHistory } from "../../components/Employee/VacationHistory";
import { VacationStats } from "../../components/Employee/VacationStats";

export const EmployeeDashboard = () => {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] 
      background-size-[16px_16px]"
    >
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        <header
          className="flex flex-col md:flex-row md:items-center 
          justify-between gap-4 border-b border-gray-200 pb-6"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Portal de Vacaciones
            </h2>
            <p className="text-slate-500 mt-1 text-lg">
              Bienvenido, gestiona tu tiempo de descanso
            </p>
          </div>
        </header>

        <VacationStats />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-4">
            <VacationForm />
          </div>
          <div className="xl:col-span-8">
            <VacationHistory />
          </div>
        </div>
      </div>
    </div>
  );
};
