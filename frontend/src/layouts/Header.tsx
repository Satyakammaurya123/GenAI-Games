import { FaBars, FaUserCircle } from "react-icons/fa";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-md">
      <div className="flex h-16 items-center justify-between px-6 md:px-8 lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-blue-700"
          >
            <FaBars size={22} />
          </button>

          <h1 className="text-xl font-bold">
            GenAI Games
          </h1>
        </div>

        {/* Right */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-blue-700">
          <FaUserCircle size={30} />
        </button>
      </div>
    </header>
  );
};

export default Header;