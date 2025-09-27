import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ThemeProvider } from "../../contexts/ThemeContext";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="layout">
        <Navbar onToggleSidebar={toggleSidebar} />

        <div className="layout__content">
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

          <main
            className={`layout__main ${
              isSidebarOpen ? "layout__main--sidebar-open" : ""
            }`}
          >
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
