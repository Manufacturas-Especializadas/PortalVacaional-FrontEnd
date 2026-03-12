import { useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";
import { Send } from "lucide-react";
import { useVacationRequest } from "../../hooks/useVacationRequest";

export const VacationForm = ({
  onRecordCreated,
}: {
  onRecordCreated: () => void;
}) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState("");

  const { sendRequest, isSubmitting } = useVacationRequest(onRecordCreated);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await sendRequest({ startDate, endDate, days });

    if (success) {
      setStartDate("");
      setEndDate("");
      setDays("");
    }
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
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl 
            font-semibold shadow-lg shadow-blue-200 transition-all flex items-center 
            justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:cursor-pointer"}`}
        >
          <Send size={18} />
          {isSubmitting ? "Enviando..." : "Enviar a Revisión"}
        </button>
      </form>
    </div>
  );
};
