import { useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";

interface Props {
  employee: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

export const EmployeeModal = ({ employee, onClose, onSave }: Props) => {
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
          {employee.nomina ? "Editar Empleado" : "Nuevo Empleado"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nómina"
            type="number"
            value={form.nomina || ""}
            onChange={(e) => handleChange("nomina", Number(e.target.value))}
            required
          />

          <Input
            label="Nombre"
            value={form.nombre}
            onChange={(e) => handleChange("nombre", e.target.value)}
            required
          />

          <Input
            label="Departamento"
            value={form.depto}
            onChange={(e) => handleChange("depto", e.target.value)}
            required
          />

          <Input
            label="Total de Vacaciones"
            type="number"
            value={form.total || ""}
            onChange={(e) => handleChange("total", Number(e.target.value))}
            required
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white 
              hover:bg-blue-700 hover:cursor-pointer"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
