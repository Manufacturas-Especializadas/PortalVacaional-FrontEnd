import { AlertCircle, ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import { useEmployeeList } from "../../hooks/useEmployeeList";
import { useState } from "react";

export const EmployeesTable = () => {
  const {
    employees: employeeList,
    error,
    loading,
    refresh,
  } = useEmployeeList();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLasItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLasItem - itemsPerPage;
  const currentItems = employeeList.slice(indexOfFirstItem, indexOfLasItem);
  const totalPages = Math.ceil(employeeList.length / itemsPerPage);

  return (
    <div
      className="bg-white rounded-2xl border 
      border-slate-100 shadow-sm overflow-hidden"
    >
      <div
        className="p-6 border-b border-slate-50 flex 
        justify-between items-center bg-slate-50/50"
      >
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Listado de Empleados
          </h3>
          <p className="text-sm text-slate-500">
            {loading
              ? "Cargando..."
              : `Total: ${employeeList.length} colaboradores`}
          </p>
        </div>

        <button
          className="bg-slate-900 hover:bg-slate-800 text-white px-5 
          py-2.5 rounded-xl font-bold text-sm transition-all flex items-center 
          gap-2 hover:cursor-pointer"
        >
          <span>+</span> Nuevo Empleado
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr
              className="text-slate-400 uppercase text-[11px] font-bold 
              tracking-widest bg-white"
            >
              <th className="px-6 py-4">Empleado</th>
              <th className="px-6 py-4">Departamento</th>
              <th className="px-6 py-4">Antigüedad</th>
              <th className="px-6 py-4 text-center">Vacaciones</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {loading &&
              [...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-6 py-4">
                    <div className="h-10 w-48 bg-slate-100 rounded-lg"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-6 w-24 bg-slate-100 rounded-md"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-6 w-16 bg-slate-100 rounded-md"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-8 w-12 mx-auto bg-slate-100 rounded-lg"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="h-8 w-8 bg-slate-100 rounded-full ml-auto"></div>
                  </td>
                </tr>
              ))}

            {error && !loading && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-2 text-red-500">
                    <AlertCircle size={40} />
                    <p className="font-bold">Error al cargar empleados</p>
                    <p className="text-sm text-slate-400">
                      Por favor, intenta recargar la página
                    </p>
                  </div>
                </td>
              </tr>
            )}

            {!loading &&
              !error &&
              currentItems.map((emp) => (
                <tr
                  key={emp.payRollNumber}
                  className="hover:bg-blue-50/30 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-9 w-9 rounded-lg bg-blue-100 
                        text-blue-700 flex items-center justify-center 
                        font-bold text-xs uppercase"
                      >
                        {emp.fullName.substring(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">
                          {emp.fullName}
                        </p>
                        <p className="text-xs text-slate-400">
                          #Nómina: {emp.payRollNumber}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-md bg-slate-100 
                    text-slate-600 text-[11px] font-bold uppercase"
                    >
                      {emp.department}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {emp.yearsOfService}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className="text-sm font-black text-blue-600 
                      bg-blue-50 px-3 py-1 rounded-lg"
                    >
                      {emp.totalVacationDays}{" "}
                      <span className="text-[10px] text-blue-400 italic">
                        días
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="p-2 text-slate-400 
                      hover:text-blue-600 hover:bg-blue-50 rounded-lg 
                      transition-all"
                    >
                      <Pencil size={18} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {!loading && !error && (
        <div className="p-4 border-t border-slate-50 flex items-center justify-between bg-white">
          <p>
            Mostrando {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLasItem, employeeList.length)} de{" "}
            {employeeList.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50
              disabled:opacity-30 disabled:hover:bg-transparent transition-all hover:cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`h-8 w-8 rounded-lg text-xs font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 
              text-slate-400 hover:bg-slate-50 disabled:opacity-30 
              disabled:hover:bg-transparent transition-all hover:cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
      {/* {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onSave={handleSave}
        />
      )} */}
    </div>
  );
};
