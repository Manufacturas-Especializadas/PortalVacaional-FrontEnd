export const VacationHistory = () => {
  const history = [
    {
      id: 1,
      start: "2025-01-10",
      end: "2025-01-15",
      days: 5,
      status: "Aprobado",
    },
    {
      id: 2,
      start: "2025-03-01",
      end: "2025-03-03",
      days: 3,
      status: "Pendiente",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Historial de Solicitudes
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3">Inicio</th>
            <th className="pb-3">Fin</th>
            <th className="pb-3">Días</th>
            <th className="pb-3">Estado</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr
              key={item.id}
              className="group hover:bg-slate-50 transition-colors"
            >
              <td className="py-4 pl-4 font-medium text-slate-700">
                {item.start}
              </td>
              <td className="py-4 text-slate-600">{item.end}</td>
              <td className="py-4">
                <span className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-bold text-slate-600">
                  {item.days} días
                </span>
              </td>
              <td className="py-4 pr-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                    item.status === "Aprobado"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
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
  );
};
