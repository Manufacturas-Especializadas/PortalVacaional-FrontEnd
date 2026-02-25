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
            <tr key={item.id} className="border-b text-sm">
              <td className="py-3">{item.start}</td>
              <td>{item.end}</td>
              <td>{item.days}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "Aprobado" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                >
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
