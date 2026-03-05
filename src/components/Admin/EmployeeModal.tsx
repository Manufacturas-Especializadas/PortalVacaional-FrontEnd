import { useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";

interface Props {
  employee: any;
  onClose: () => void;
  onSave: (data: any) => void;
  loading: boolean;
}

export const EmployeeModal = ({
  employee,
  onClose,
  onSave,
  loading,
}: Props) => {
  const [form, setForm] = useState(employee);

  const handleChange = (field: string, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-6">
          {employee.id ? "Editar Empleado" : "Nuevo Empleado"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nómina"
            type="number"
            value={form.payRollNumber || ""}
            onChange={(e) =>
              handleChange("payRollNumber", Number(e.target.value))
            }
            required
          />

          <Input
            label="Nombre"
            value={form.fullName || ""}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
          />

          <Input
            label="Departamento"
            value={form.department || ""}
            onChange={(e) => handleChange("department", e.target.value)}
            required
          />

          <Input
            label="Fecha de ingreso"
            type="date"
            value={form.hireDate ? form.hireDate.split("T")[0] : ""}
            onChange={(e) => handleChange("hireDate", e.target.value)}
            required
          />

          <Input
            label="Total de Vacaciones"
            type="number"
            value={form.totalVacationDays || ""}
            onChange={(e) =>
              handleChange("totalVacationDays", Number(e.target.value))
            }
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-xl border 
              border-slate-200 font-semibold text-slate-600 
              hover:bg-slate-50 transition-all hover:cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white 
              font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 
              transition-all disabled:opacity-50 hover:cursor-pointer"
            >
              {loading ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
