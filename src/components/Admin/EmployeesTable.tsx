import { useState } from "react";
import type { Employee } from "../../types/types";
import { Pencil } from "lucide-react";
import { EmployeeModal } from "./EmployeeModal";

export const EmployeesTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      nomina: 1730,
      nombre: "GUTIERREZ PEÑA DIANA VERONICA",
      depto: "GERENTE ADMVO",
      antiguedad: "18 años",
      total: 50,
    },
    {
      nomina: 4199,
      nombre: "POBLANO IBARRA JUAN MARCELINO",
      depto: "JEFE DE SISTEMAS",
      antiguedad: "7 años",
      total: 31.5,
    },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );

  const handleSave = (updated: Employee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.nomina === updated.nomina ? updated : emp)),
    );
    setSelectedEmployee(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Listado de Empleados
          </h3>
          <p className="text-sm text-slate-500">
            Total: {employees.length} colaboradores registrados
          </p>
        </div>

        <button
          className="bg-slate-900 hover:bg-slate-800 text-white px-5 
          py-2.5 rounded-xl font-bold text-sm transition-all flex items-center 
          gap-2 hover:cursor-pointer"
          onClick={() =>
            setSelectedEmployee({
              nomina: 0,
              nombre: "",
              depto: "",
              antiguedad: "",
              total: 0,
            })
          }
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
            {employees.map((emp) => (
              <tr
                key={emp.nomina}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-9 w-9 rounded-lg bg-blue-100 text-blue-700 
                      flex items-center justify-center font-bold text-xs"
                    >
                      {emp.nombre.substring(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        {emp.nombre}
                      </p>
                      <p className="text-xs text-slate-400">
                        #Nómina: {emp.nomina}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="px-3 py-1 rounded-md bg-slate-100 
                    text-slate-600 text-[11px] font-bold uppercase"
                  >
                    {emp.depto}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  {emp.antiguedad}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className="text-sm font-black text-blue-600 bg-blue-50 
                    px-3 py-1 rounded-lg"
                  >
                    {emp.total}{" "}
                    <span className="text-[10px] text-blue-400">días</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="p-2 text-slate-400 hover:text-blue-600 
                    hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
