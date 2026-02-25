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
    <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Empleados</h3>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white 
          px-4 py-2 rounded-lg hover:cursor-pointer"
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
          + Nuevo Empleado
        </button>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-500">
            <th className="pb-3">Nómina</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Total Vacaciones</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.nomina} className="border-b hover:bg-gray-50">
              <td className="py-3">{emp.nomina}</td>
              <td>{emp.nombre}</td>
              <td>{emp.depto}</td>
              <td className="font-semibold text-blue-600">{emp.total}</td>
              <td>
                <button
                  onClick={() => setSelectedEmployee(emp)}
                  className="text-gray-500 hover:text-blue-600 hover:cursor-pointer"
                >
                  <Pencil size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
