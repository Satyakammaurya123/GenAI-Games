import { FaBars, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button className="text-2xl">
            <FaBars />
          </button>

          <h1 className="text-xl font-bold">
            GenAI Games
          </h1>
        </div>

        <button className="text-3xl">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
};

export default Header;