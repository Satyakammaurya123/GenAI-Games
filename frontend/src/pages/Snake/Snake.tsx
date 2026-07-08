import { useState } from "react";
import SnakeBoard from "./SnakeBoard";
import type { Player } from "./SnakeTypes";

const Snake = () => {
  const [player, setPlayer] = useState<Player>({
    name: "",
    age: 0,
  });

  const [started, setStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [highScore] = useState(() => {
    const score = localStorage.getItem("snake-high-score");
    return score ? Number(score) : 0;
  });

  const handleStart = () => {
    if (player.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (player.age <= 0) {
      alert("Please enter a valid age.");
      return;
    }

    setScore(0);
    setStarted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setStarted(false);
  };

  return (
    <div className="mx-auto max-w-7xl">

      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        🐍 Snake Game
      </h1>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

        {/* Left Panel */}

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Player Details
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block font-medium">
                Player Name
              </label>

              <input
                type="text"
                value={player.name}
                onChange={(e) =>
                  setPlayer({
                    ...player,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                placeholder="Enter your name"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                Age
              </label>

              <input
                type="number"
                value={player.age || ""}
                onChange={(e) =>
                  setPlayer({
                    ...player,
                    age: Number(e.target.value),
                  })
                }
                className="w-full rounded-lg border p-3 outline-none focus:border-blue-600"
                placeholder="Enter age"
              />

            </div>

            {!started ? (
              <button
                onClick={handleStart}
                className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
              >
                ▶ Start Game
              </button>
            ) : (
              <button
                onClick={handleRestart}
                className="w-full rounded-lg bg-red-600 py-3 text-white hover:bg-red-700"
              >
                Restart
              </button>
            )}

          </div>

          <hr className="my-8" />

          <div className="space-y-4">

            <div className="flex justify-between">

              <span className="font-semibold">
                Score
              </span>

              <span>{score}</span>

            </div>

            <div className="flex justify-between">

              <span className="font-semibold">
                High Score
              </span>

              <span>{highScore}</span>

            </div>

          </div>

          <hr className="my-8" />

          <div>

            <h3 className="mb-4 text-lg font-bold">
              Controls
            </h3>

            <ul className="space-y-2 text-gray-700">

              <li>⬆️ Move Up</li>

              <li>⬇️ Move Down</li>

              <li>⬅️ Move Left</li>

              <li>➡️ Move Right</li>

            </ul>

          </div>

        </div>

        {/* Right Panel */}

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <SnakeBoard
            started={started}
            score={score}
            setScore={setScore}
          />

        </div>

      </div>

    </div>
  );
};

export default Snake;