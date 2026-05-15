export default function WeekCalendar({ habits = [] }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getLast7Days = () => {
    const result = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      result.push(d.toDateString());
    }

    return result;
  };

  const last7Days = getLast7Days();

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">

      <h2 className="font-semibold text-lg mb-5">
        📅 Activité hebdomadaire
      </h2>

      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-3">
        {days.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-3">
        {last7Days.map((day, i) => {
          const done = habits.some((h) => h.lastDone === day);

          return (
            <div
              key={i}
              className={`h-10 rounded-2xl flex items-center justify-center text-sm font-bold transition ${
                done
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {done ? "✓" : "—"}
            </div>
          );
        })}
      </div>

    </div>
  );
}