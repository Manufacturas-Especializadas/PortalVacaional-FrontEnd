import { useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";
import { Send } from "lucide-react";

export const VacationForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ startDate, endDate, days });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-800">Nueva Solicitud</h2>
        <p className="text-sm text-slate-500">
          Completa los detalles de tu periodo de descanso.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Días a disfrutar"
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />

        <div className="grid grid-cols-1 gap-6">
          <Input
            label="Fecha de inicio"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <Input
            label="Fecha de finalización"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Enviar a Revisión
        </button>
      </form>
    </div>
  );
};
