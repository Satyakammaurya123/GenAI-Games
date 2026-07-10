import { useEffect, useState } from "react";

import BubbleBoard from "./BubbleBoard";

import type { Player } from "./BubbleTypes";

import {
  GAME_DURATION,
  generateBubbles,
  popBubble,
  getHighScore,
  saveHighScore,
} from "./BubbleEngine";

const BubbleBlast = () => {
  const [player, setPlayer] =
    useState<Player>({
      name: "",
      age: 0,
    });

  const [started, setStarted] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(GAME_DURATION);

  const [score, setScore] =
    useState(0);

  const [highScore, setHighScore] =
    useState(getHighScore());

  const [bubbles, setBubbles] =
    useState(generateBubbles());

  useEffect(() => {
    if (!started) return;

    if (timeLeft === 0) {
      setStarted(false);

      saveHighScore(score);

      setHighScore(getHighScore());

      alert(`Game Over!\nScore : ${score}`);

      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [started, timeLeft, score]);

  const handleStart = () => {
    if (player.name.trim() === "") {
      alert("Enter player name");
      return;
    }

    if (player.age <= 0) {
      alert("Enter valid age");
      return;
    }

    setScore(0);

    setTimeLeft(GAME_DURATION);

    setBubbles(generateBubbles());

    setStarted(true);
  };

  const handleRestart = () => {
    setStarted(false);

    setScore(0);

    setTimeLeft(GAME_DURATION);

    setBubbles(generateBubbles());
  };

  const handleBubblePop = (
    id: number
  ) => {
    if (!started) return;

    const result = popBubble(
      bubbles,
      id
    );

    setBubbles(result.bubbles);

    setScore(
      (prev) => prev + result.score
    );
  };

  return (
    <div className="mx-auto max-w-7xl">

      <h1 className="mb-8 text-center text-4xl font-bold">
        🫧 Bubble Blast
      </h1>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

        {/* Left */}

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Player Details
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Player Name"
              value={player.name}
              onChange={(e) =>
                setPlayer({
                  ...player,
                  name: e.target.value,
                })
              }
              className="w-full rounded-lg border p-3"
            />

            <input
              type="number"
              placeholder="Age"
              value={player.age || ""}
              onChange={(e) =>
                setPlayer({
                  ...player,
                  age: Number(
                    e.target.value
                  ),
                })
              }
              className="w-full rounded-lg border p-3"
            />

            {!started ? (
              <button
                onClick={handleStart}
                className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
              >
                Start Game
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

          <hr className="my-6" />

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Time</span>
              <span>{timeLeft}s</span>
            </div>

            <div className="flex justify-between">
              <span>Score</span>
              <span>{score}</span>
            </div>

            <div className="flex justify-between">
              <span>High Score</span>
              <span>{highScore}</span>
            </div>

          </div>

        </div>

        {/* Right */}

        <BubbleBoard
          bubbles={bubbles}
          onPop={handleBubblePop}
        />

      </div>

    </div>
  );
};

export default BubbleBlast;