import { VacationForm } from "../../components/Employee/VacationForm";
import { VacationHistory } from "../../components/Employee/VacationHistory";
import { VacationStats } from "../../components/Employee/VacationStats";

export const EmployeeDashboard = () => {
  return (
    <div
      className="min-h-screen bg-[#f8fafc] 
      bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px]"
    >
      <div className="max-w-7xl mx-auto p-6 md:p-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Portal <span className="text-blue-600">MESA</span> Vacaciones
            </h2>
            <p className="text-slate-500 mt-1 font-medium">
              gestiona tus solicitudes y consulta tus días disponibles.
            </p>
          </div>
          <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block mb-3" />
        </header>

        <VacationStats />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          <aside className="xl:col-span-4">
            <VacationForm />
          </aside>
          <main className="xl:col-span-8">
            <VacationHistory />
          </main>
        </div>
      </div>
    </div>
  );
};
