
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { theme } = useThemeLanguage();
  
  return (
    <div className={`flex flex-col min-h-screen ${
      theme === "dark" ? "bg-guitar-800 text-white" : "bg-guitar-100 text-guitar-800"
    }`}>
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          {/* Key helps React know when to animate between routes */}
          <div key={location.pathname} className="animate-slide-up">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
