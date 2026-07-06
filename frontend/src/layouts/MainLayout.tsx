import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuClick={toggleSidebar} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      {/* 64px header + 32px spacing */}
      <main
        className="min-h-screen bg-gray-100 px-6 py-8"
        style={{ paddingTop: "calc(64px + 2rem)" }}
        >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;