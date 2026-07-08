export type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  name: string;
  age: number;
}

export interface GameState {
  player: Player;
  snake: Position[];
  food: Position;
  direction: Direction;
  score: number;
  highScore: number;
  isPlaying: boolean;
  isGameOver: boolean;
}