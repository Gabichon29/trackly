export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          📊 Trackly
        </h1>

        <p className="text-gray-500 mt-1">
          Track your habits daily
        </p>
      </div>

      <button className="bg-black hover:bg-gray-800 transition text-white px-5 py-3 rounded-2xl shadow-sm">
        + Nouvelle habitude
      </button>

    </div>
  );
}