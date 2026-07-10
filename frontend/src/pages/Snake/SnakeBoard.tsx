import { useEffect, useState } from "react";

import type {
  Direction,
} from "./SnakeTypes";

import {
  CELL_SIZE,
  GRID_SIZE,
  createFood,
  createInitialSnake,
  moveSnake,
  growSnake,
  checkWallCollision,
  checkSelfCollision,
} from "./SnakeEngine";

type SnakeBoardProps = {
  started: boolean;
  score: number;
  setScore: React.Dispatch<
    React.SetStateAction<number>
  >;
};

const SnakeBoard = ({
  started,
  setScore,
}: SnakeBoardProps) => {
  const [snake, setSnake] =
    useState(createInitialSnake());

  const [food, setFood] = useState(
    createFood(createInitialSnake())
  );

  const [direction, setDirection] =
    useState<Direction>("RIGHT");

  useEffect(() => {
    if (!started) {
      setSnake(createInitialSnake());
      setFood(createFood(createInitialSnake()));
      setDirection("RIGHT");
      return;
    }

    const interval = setInterval(() => {
      setSnake((currentSnake) => {
        let nextSnake = moveSnake(
          currentSnake,
          direction
        );

        const head = nextSnake[0];

        if (
          checkWallCollision(head) ||
          checkSelfCollision(nextSnake)
        ) {
          alert("Game Over");

          return createInitialSnake();
        }

        if (
          head.x === food.x &&
          head.y === food.y
        ) {
          nextSnake = growSnake(nextSnake);

          setFood(createFood(nextSnake));

          setScore((prev) => {
            const newScore = prev + 10;

            const high =
              Number(
                localStorage.getItem(
                  "snake-high-score"
                )
              ) || 0;

            if (newScore > high) {
              localStorage.setItem(
                "snake-high-score",
                newScore.toString()
              );
            }

            return newScore;
          });
        }

        return nextSnake;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [started, direction, food, setScore]);

  useEffect(() => {
    const handleKey = (
      e: KeyboardEvent
    ) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;

        case "ArrowDown":
          setDirection("DOWN");
          break;

        case "ArrowLeft":
          setDirection("LEFT");
          break;

        case "ArrowRight":
          setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, []);

  return (
    <div className="flex flex-col items-center">

      <div
        className="grid border-4 border-gray-700 bg-gray-100"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
        }}
      >
        {Array.from({
          length: GRID_SIZE * GRID_SIZE,
        }).map((_, index) => {
          const x = index % GRID_SIZE;

          const y = Math.floor(
            index / GRID_SIZE
          );

          const snakeCell = snake.find(
            (cell) =>
              cell.x === x &&
              cell.y === y
          );

          const foodCell =
            food.x === x &&
            food.y === y;

          return (
            <div
              key={index}
              className={`border border-gray-200
              ${
                snakeCell
                  ? "bg-green-600"
                  : foodCell
                  ? "bg-red-500 rounded-full"
                  : "bg-white"
              }`}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
              }}
            />
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">

        <div />

        <button
          onClick={() =>
            setDirection("UP")
          }
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          ↑
        </button>

        <div />

        <button
          onClick={() =>
            setDirection("LEFT")
          }
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          ←
        </button>

        <button
          onClick={() =>
            setDirection("DOWN")
          }
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          ↓
        </button>

        <button
          onClick={() =>
            setDirection("RIGHT")
          }
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          →
        </button>

      </div>

    </div>
  );
};

export default SnakeBoard;