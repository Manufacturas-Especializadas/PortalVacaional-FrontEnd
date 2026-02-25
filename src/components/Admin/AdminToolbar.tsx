import { FileDown, Search, Upload } from "lucide-react";
import type { ChangeEvent } from "react";

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
      className="bg-white p-5 rounded-2xl border border-slate-100 
      shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between"
    >
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Buscar por número de nómina o nombre..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border 
          border-slate-200 rounded-xl focus:outline-none focus:ring-2 
          focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
        />
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <button
          className="flex-1 md:flex-none flex items-center 
          justify-center gap-2 px-4 py-2.5 text-slate-700 font-semibold 
          text-sm border border-slate-200 rounded-xl hover:bg-slate-50 
          transition hover:cursor-pointer"
        >
          <FileDown size={18} />
          Exportar
        </button>

        <label
          className="flex-1 md:flex-none flex items-center 
          justify-center gap-2 bg-blue-600 text-white 
          px-5 py-2.5 rounded-xl font-bold text-sm cursor-pointer 
          hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all 
          active:scale-95"
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
      </div>
    </div>
  );
};
