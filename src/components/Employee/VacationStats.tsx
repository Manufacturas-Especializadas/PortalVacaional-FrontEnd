import { PieChart, Clock, CalendarCheck } from "lucide-react";

interface Props {
  total: number;
  used: number;
}

export const VacationStats = ({ total, used }: Props) => {
  const available = total - used;

  const cards = [
    {
      label: "Días Disponibles",
      value: available,
      icon: <CalendarCheck size={22} />,
      accent: "border-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50/50",
    },
    {
      label: "Días Usados",
      value: used,
      icon: <Clock size={22} />,
      accent: "border-orange-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50/50",
    },
    {
      label: "Total Anual",
      value: total,
      icon: <PieChart size={22} />,
      accent: "border-slate-800",
      textColor: "text-slate-600",
      bgColor: "bg-slate-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`relative overflow-hidden bg-white rounded-2xl p-6 border border-slate-200 shadow-sm border-l-4 ${card.accent} transition-all hover:shadow-md`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                {card.label}
              </p>
              <h3 className="text-4xl font-bold text-slate-800 mt-1 tracking-tight">
                {card.value}
              </h3>
            </div>
            <div className={`p-3 ${card.bgColor} ${card.textColor} rounded-xl`}>
              {card.icon}
            </div>
          </div>

          {card.label === "Días Disponibles" && (
            <div className="mt-4">
              <div className="flex justify-between text-[10px] mb-1 font-bold text-slate-400 uppercase">
                <span>Progreso</span>
                <span>{Math.round((available / total) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-700 ease-out"
                  style={{ width: `${(available / total) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
