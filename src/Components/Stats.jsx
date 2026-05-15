export default function Stats({ total, completedToday, rate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

      <div className="bg-white/80 backdrop-blur p-5 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-gray-500">Habitudes</p>
        <p className="text-3xl font-bold mt-2">{total}</p>
      </div>

      <div className="bg-white/80 backdrop-blur p-5 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-gray-500">Aujourd’hui</p>
        <p className="text-3xl font-bold mt-2">{completedToday}</p>
      </div>

      <div className="bg-white/80 backdrop-blur p-5 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-gray-500">Taux réussite</p>
        <p className="text-3xl font-bold mt-2">{rate}%</p>
      </div>

    </div>
  );
}