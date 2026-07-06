import { Link } from "react-router-dom";

type GameCardProps = {
  title: string;
  description: string;
  emoji: string;
  path: string;
  buttonText?: string;
};

const GameCard = ({
  title,
  description,
  emoji,
  path,
  buttonText = "Play Now",
}: GameCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 text-center text-6xl transition-transform duration-300 group-hover:scale-110">
        {emoji}
      </div>

      <h2 className="text-center text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mt-4 text-center text-gray-600">
        {description}
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to={path}
          className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          {buttonText}
        </Link>
      </div>

    </div>
  );
};

export default GameCard;