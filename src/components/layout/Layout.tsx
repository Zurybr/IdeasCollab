import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ThemeProvider } from "../../contexts/ThemeContext";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="layout">
        <Navbar />

        <div className="layout__content">
          <Sidebar />

          <main className="layout__main">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
