import { useState, useEffect } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import HabitChart from "./components/HabitChart";
import HabitList from "./components/HabitList";
import WeekCalendar from "./components/WeekCalendar";
import Heatmap from "./components/Heatmap";

export default function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("trackly-habits");

    if (saved) return JSON.parse(saved);

    return [
      {
        id: 1,
        name: "Sport",
        streak: 0,
        history: [],
      },
      {
        id: 2,
        name: "Lecture",
        streak: 0,
        history: [],
      },
    ];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("trackly-habits", JSON.stringify(habits));
  }, [habits]);

  const today = new Date().toDateString();

  const total = habits.length;

  const completedToday = habits.filter((h) =>
    h.history?.includes(today)
  ).length;

  const rate =
    total === 0 ? 0 : Math.round((completedToday / total) * 100);

  const addHabit = () => {
    if (!input.trim()) return;

    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: input,
        streak: 0,
        history: [],
      },
    ]);

    setInput("");
  };

  const calculateStreak = (history) => {
    if (!history.length) return 0;

    let streak = 0;

    const sorted = [...history]
      .map((d) => new Date(d))
      .sort((a, b) => b - a);

    let current = new Date();

    for (let i = 0; i < sorted.length; i++) {
      const target = new Date(current);
      target.setDate(current.getDate() - i);

      if (
        sorted[i].toDateString() === target.toDateString()
      ) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) => {
        if (h.id !== id) return h;

        const history = h.history || [];

        if (history.includes(today)) {
          return h;
        }

        const updatedHistory = [...history, today];

        return {
          ...h,
          history: updatedHistory,
          streak: calculateStreak(updatedHistory),
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="max-w-4xl mx-auto">

        <Header />

        <Stats
          total={total}
          completedToday={completedToday}
          rate={rate}
        />

        <WeekCalendar habits={habits} />

        <Heatmap habits={habits} />

        <HabitChart habits={habits} />

        <HabitList
          habits={habits}
          toggleHabit={toggleHabit}
          input={input}
          setInput={setInput}
          addHabit={addHabit}
        />

      </div>

    </div>
  );
}