export const VacationStats = () => {
  const availableDays = 12;
  const useDays = 8;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-500 text-sm">Días Usuados</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">{useDays}</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-500 text-sm">Total Anual</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          {availableDays}
        </h2>
      </div>
    </div>
  );
};
