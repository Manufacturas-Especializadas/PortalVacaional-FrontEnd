import { useMemo, useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";
import { useRoles } from "../../hooks/useRoles";
import { FloatingSelect } from "../CustomInputs/FloatingSelect";

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

  const { data, loading: loadingRole } = useRoles();

  const roleOptions = useMemo(
    () => data.map((r) => ({ label: r.name, value: r.id })),
    [data],
  );

  console.log("Datos del empleado recibidos:", employee);

  const calculateVacationDays = (hireDate: string): number => {
    if (!hireDate) return 0;

    const start = new Date(hireDate);
    const today = new Date();
    let years = today.getFullYear() - start.getFullYear();

    const monthDiff = today.getMonth() - start.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < start.getDate())
    ) {
      years--;
    }

    if (years < 1) return 0;
    if (years === 1) return 12;
    if (years === 2) return 14;
    if (years === 3) return 16;
    if (years === 4) return 18;
    if (years === 5) return 20;
    if (years >= 6 && years <= 10) return 22;
    if (years >= 11 && years <= 15) return 24;
    if (years >= 16 && years <= 20) return 26;
    if (years >= 21 && years <= 25) return 28;
    if (years >= 26 && years <= 30) return 30;

    return 32;
  };

  const handleChange = (field: string, value: any) => {
    const newForm = { ...form, [field]: value };

    if (field === "hireDate") {
      newForm.totalVacationDays = calculateVacationDays(value);
    }

    setForm(newForm);
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

          {employee.id && (
            <FloatingSelect
              label={loadingRole ? "Cargando roles..." : "Rol"}
              value={form.roleId || ""}
              options={roleOptions}
              onChange={(val) => handleChange("roleId", val)}
            />
          )}

          <Input
            label="Fecha de ingreso"
            type="date"
            value={form.hireDate ? form.hireDate.split("T")[0] : ""}
            onChange={(e) => handleChange("hireDate", e.target.value)}
            required
          />

          <div className="relative">
            <Input
              label="Total de Vacaciones"
              type="number"
              value={form.totalVacationDays || ""}
              onChange={(e) =>
                handleChange("totalVacationDays", Number(e.target.value))
              }
              disabled
            />
          </div>

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
