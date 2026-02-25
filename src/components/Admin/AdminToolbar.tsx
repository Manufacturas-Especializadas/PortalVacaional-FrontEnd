import { Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import { Input } from "../CustomInputs/Input";

interface Props {
  onImport: (file: File) => void;
}

export const AdminToolbar = ({ onImport }: Props) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onImport(e.target.files[0]);
    }
  };

  return (
    <div
      className="bg-white p-4 rounded-xl shadow-sm flex flex-wrap 
      gap-4 items-center justify-between"
    >
      <div className="flex gap-3 flex-wrap items-center">
        <label
          className="flex items-center gap-2 bg-blue-600 
          text-white px-4 py-2 rounded-lg cursor-pointer 
          hover:bg-blue-700 transition"
        >
          <Upload size={18} />
          Importar Excel
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        <Input label="Buscar por numero de nómina" />
      </div>
    </div>
  );
};
