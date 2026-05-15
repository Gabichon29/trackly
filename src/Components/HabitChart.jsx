export default function HabitChart({ habits = [] }) {
  const max = Math.max(...habits.map((h) => h.streak || 0), 0);

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">

      <h2 className="font-semibold text-lg mb-5">
        🔥 Progression des habitudes
      </h2>

      <div className="space-y-4">
        {habits.map((h) => (
          <div key={h.id}>

            <div className="flex justify-between text-sm mb-2">
              <span>{h.name}</span>
              <span>{h.streak} jours</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-black h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${max ? (h.streak / max) * 100 : 0}%`,
                }}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}