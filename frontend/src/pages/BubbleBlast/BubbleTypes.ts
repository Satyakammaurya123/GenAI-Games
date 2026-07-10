export interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  points: number;
}

export interface Player {
  name: string;
  age: number;
}

export interface GameState {
  player: Player;
  score: number;
  highScore: number;
  timeLeft: number;
  isPlaying: boolean;
  bubbles: Bubble[];
}