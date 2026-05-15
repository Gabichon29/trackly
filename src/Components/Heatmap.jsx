export default function Heatmap({ habits = [] }) {
  const getPastDays = (days) => {
    const result = [];

    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);

      result.push(d.toDateString());
    }

    return result;
  };

  const days = getPastDays(35);

  const getLevel = (day) => {
    let count = 0;

    habits.forEach((h) => {
      if (h.history?.includes(day)) {
        count++;
      }
    });

    if (count === 0) return "bg-gray-200";
    if (count === 1) return "bg-green-200";
    if (count === 2) return "bg-green-400";

    return "bg-green-600";
  };

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">
          🟩 Consistency Heatmap
        </h2>

        <p className="text-sm text-gray-500">
          35 derniers jours
        </p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <div
            key={i}
            title={day}
            className={`aspect-square rounded-lg transition hover:scale-110 ${getLevel(day)}`}
          />
        ))}
      </div>

    </div>
  );
}