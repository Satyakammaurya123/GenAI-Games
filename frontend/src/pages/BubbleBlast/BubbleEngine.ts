import type { Bubble } from "./BubbleTypes";

export const GAME_DURATION = 60;

export const MAX_BUBBLES = 12;

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

export const createBubble = (): Bubble => {
  const size = Math.floor(Math.random() * 50) + 40;

  let points = 10;

  if (size < 55) {
    points = 30;
  } else if (size < 70) {
    points = 20;
  }

  return {
    id: Date.now() + Math.random(),
    x: Math.random() * 85,
    y: Math.random() * 80,
    size,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    points,
  };
};

export const generateBubbles = (): Bubble[] => {
  return Array.from(
    { length: MAX_BUBBLES },
    () => createBubble()
  );
};

export const popBubble = (
  bubbles: Bubble[],
  id: number
) => {
  const bubble = bubbles.find(
    (b) => b.id === id
  );

  if (!bubble) {
    return {
      bubbles,
      score: 0,
    };
  }

  const newBubbles = bubbles
    .filter((b) => b.id !== id);

  newBubbles.push(createBubble());

  return {
    bubbles: newBubbles,
    score: bubble.points,
  };
};

export const saveHighScore = (
  score: number
) => {
  const high =
    Number(
      localStorage.getItem(
        "bubble-high-score"
      )
    ) || 0;

  if (score > high) {
    localStorage.setItem(
      "bubble-high-score",
      score.toString()
    );
  }
};

export const getHighScore = () => {
  return (
    Number(
      localStorage.getItem(
        "bubble-high-score"
      )
    ) || 0
  );
};