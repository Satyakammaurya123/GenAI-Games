import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { navigationItems } from "../constants/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-50
        h-[calc(100vh-64px)]
        w-72
        bg-white
        shadow-2xl
        transition-transform
        duration-300

        ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold text-blue-700">
            🎮 GenAI Games
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-200"
          >
            <FaTimes />
          </button>

        </div>

        {/* Navigation */}
        <nav className="space-y-3 p-4">

          {navigationItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `
                block
                rounded-xl
                px-4
                py-3
                font-medium
                shadow-sm
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : index % 2 === 0
                    ? "bg-blue-50 hover:bg-blue-100"
                    : "bg-green-50 hover:bg-green-100"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;