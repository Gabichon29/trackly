export default function HabitList({
  habits = [],
  toggleHabit,
  input,
  setInput,
  addHabit,
}) {
  const today = new Date().toDateString();

  return (
    <>
      <div className="flex gap-3 mb-6">
        <input
          className="flex-1 p-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur outline-none focus:ring-2 focus:ring-black"
          placeholder="Nouvelle habitude..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={addHabit}
          className="bg-black hover:bg-gray-800 transition text-white px-6 rounded-2xl"
        >
          Ajouter
        </button>
      </div>

      <div className="space-y-4">
        {habits.map((h) => {
          const doneToday = h.history?.includes(today);

          return (
            <div
              key={h.id}
              className="bg-white/80 backdrop-blur p-5 rounded-3xl flex justify-between items-center shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold text-lg">{h.name}</p>

                <p className="text-sm text-gray-500 mt-1">
                  🔥 {h.streak} jours
                </p>
              </div>

              <button
                onClick={() => toggleHabit(h.id)}
                disabled={doneToday}
                className={`px-5 py-2 rounded-2xl transition ${
                  doneToday
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {doneToday ? "Fait" : "Marquer"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}