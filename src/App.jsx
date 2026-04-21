import { useState } from "react";
import Particles from "react-tsparticles";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!text) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();

      const percent = Math.min(Math.abs(data.score) * 20, 100);
      data.percent = percent;

      setResult(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 Particles */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 70 },
            size: { value: 2 },
            move: { speed: 1 },
            links: {
              enable: true,
              color: "#3b82f6",
              distance: 120,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120 },
            },
          },
        }}
      />

      {/* 💎 UI */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">

        <h1 className="text-4xl font-bold mb-8 text-blue-400 tracking-wide">
          AI Consumer Sentiment Analyzer
        </h1>

        <textarea
          className="w-full max-w-md p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Type a review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={analyze}
          className="mt-5 px-6 py-2 bg-blue-600 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#3b82f6] hover:scale-105"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {result && (
          <div className="mt-8 p-5 rounded-xl bg-gray-900 border border-gray-700 text-center w-full max-w-md backdrop-blur-lg">

            <p className="text-lg mb-2">Score: {result.score}</p>

            <p
              className={`text-2xl font-semibold ${
                result.label === "Positive"
                  ? "text-green-400"
                  : result.label === "Negative"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {result.label}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Confidence: {result.percent}%
            </p>

          </div>
        )}

      </div>
    </div>
  );
}