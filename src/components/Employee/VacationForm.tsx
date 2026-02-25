import { useState, type SyntheticEvent } from "react";
import { Input } from "../CustomInputs/Input";

export const VacationForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ startDate, endDate, days });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Solicitar Vacaciones
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            label="Días a disfrutar"
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>

        <div>
          <Input
            label="Fecha de inicio"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div>
          <Input
            label="Fecha fin"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white 
          py-3 rounded-lg font-medium transition hover:cursor-pointer"
        >
          Enviar solictud
        </button>
      </form>
    </div>
  );
};
