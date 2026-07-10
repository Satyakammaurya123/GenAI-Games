import type { Direction, Position } from "./SnakeTypes";

export const GRID_SIZE = 20;

export const CELL_SIZE = 22;

export const createInitialSnake = (): Position[] => [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];

export const createFood = (
  snake: Position[]
): Position => {
  while (true) {
    const food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };

    const exists = snake.some(
      (cell) =>
        cell.x === food.x &&
        cell.y === food.y
    );

    if (!exists) return food;
  }
};

export const moveSnake = (
  snake: Position[],
  direction: Direction
): Position[] => {
  const head = { ...snake[0] };

  switch (direction) {
    case "UP":
      head.y--;
      break;

    case "DOWN":
      head.y++;
      break;

    case "LEFT":
      head.x--;
      break;

    case "RIGHT":
      head.x++;
      break;
  }

  const newSnake = [head, ...snake];

  newSnake.pop();

  return newSnake;
};

export const growSnake = (
  snake: Position[]
): Position[] => {
  const tail = snake[snake.length - 1];

  return [...snake, tail];
};

export const checkWallCollision = (
  head: Position
) => {
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= GRID_SIZE ||
    head.y >= GRID_SIZE
  );
};

export const checkSelfCollision = (
  snake: Position[]
) => {
  const head = snake[0];

  return snake
    .slice(1)
    .some(
      (cell) =>
        cell.x === head.x &&
        cell.y === head.y
    );
};