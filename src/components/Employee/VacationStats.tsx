import { PieChart, Clock, CalendarCheck } from "lucide-react";

export const VacationStats = () => {
  const total = 12;
  const usados = 8;
  const disponibles = total - usados;

  const cards = [
    {
      label: "Días Disponibles",
      value: disponibles,
      icon: <CalendarCheck className="text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      label: "Días Usados",
      value: usados,
      icon: <Clock className="text-orange-600" />,
      color: "bg-orange-50",
    },
    {
      label: "Total Anual",
      value: total,
      icon: <PieChart className="text-emerald-600" />,
      color: "bg-emerald-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                {card.label}
              </p>
              <h3 className="text-4xl font-black text-slate-800 mt-2">
                {card.value}
              </h3>
            </div>
            <div
              className={`p-4 ${card.color} rounded-2xl group-hover:scale-110 transition-transform`}
            >
              {card.icon}
            </div>
          </div>
          {/* Barra de progreso sutil solo en la card de disponibles */}
          {card.label === "Días Disponibles" && (
            <div className="w-full bg-slate-100 h-1.5 mt-4 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-500"
                style={{ width: `${(disponibles / total) * 100}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
