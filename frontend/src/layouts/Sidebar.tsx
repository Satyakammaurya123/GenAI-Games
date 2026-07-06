import { NavLink } from "react-router-dom";
import { navigationItems } from "../constants/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-50
          h-[calc(100vh-64px)]
          w-64
          bg-white
          shadow-lg
          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          
        `}
      >
        <nav className="flex flex-col py-4">

          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `px-6 py-3 transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`
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