import { Calendar } from "lucide-react";

export const VacationHistory = () => {
  const history = [
    {
      id: 1,
      start: "10 Ene 2025",
      end: "15 Ene 2025",
      days: 5,
      status: "Aprobado",
    },
    {
      id: 2,
      start: "01 Mar 2025",
      end: "03 Mar 2025",
      days: 3,
      status: "Pendiente",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">Historial Reciente</h2>
        <Calendar size={20} className="text-slate-400" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50">
            <tr className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Periodo</th>
              <th className="px-6 py-4">Duración</th>
              <th className="px-6 py-4 text-right">Estado</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {history.map((item) => (
              <tr
                key={item.id}
                className="group hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-700">
                      Del {item.start}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Al {item.end}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold">
                    {item.days} días
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                      item.status === "Aprobado"
                        ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        : "bg-amber-100 text-amber-700 border border-amber-200"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${item.status === "Aprobado" ? "bg-emerald-500" : "bg-amber-500"}`}
                    />
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
