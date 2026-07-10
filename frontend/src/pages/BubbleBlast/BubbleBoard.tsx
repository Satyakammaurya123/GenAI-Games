import type { Bubble } from "./BubbleTypes";

type BubbleBoardProps = {
  bubbles: Bubble[];
  onPop: (id: number) => void;
};

const BubbleBoard = ({
  bubbles,
  onPop,
}: BubbleBoardProps) => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl border-4 border-blue-300 bg-gradient-to-b from-sky-100 to-blue-50">

      {bubbles.map((bubble) => (
        <button
          key={bubble.id}
          onClick={() => onPop(bubble.id)}
          className="absolute cursor-pointer rounded-full transition duration-200 hover:scale-110 active:scale-95"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
          }}
        >
          <span className="text-sm font-bold text-white">
            +{bubble.points}
          </span>
        </button>
      ))}

    </div>
  );
};

export default BubbleBoard;