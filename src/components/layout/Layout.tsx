import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
// Theme provider removed as we're using Zustand for global state
import "./Layout.css";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className="layout__main">
        <div className="layout__main-content">{children}</div>
        <Footer />
      </main>
    </div>
  );
};
