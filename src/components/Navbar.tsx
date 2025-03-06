
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Music, BookOpen, Sun, Moon, Globe } from "lucide-react";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, language, toggleTheme, setLanguage, t } = useThemeLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? theme === "dark" 
            ? "bg-guitar-800/80 backdrop-blur-lg shadow-sm" 
            : "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className={`text-2xl font-semibold ${theme === "dark" ? "text-white" : "text-guitar-800"}`}>
              Strum Progress
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-1">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                    isActive 
                      ? "bg-guitar-accent text-white" 
                      : theme === "dark"
                        ? "text-white hover:bg-guitar-700" 
                        : "text-guitar-600 hover:bg-guitar-200"
                  }`
                }
              >
                <Music size={18} />
                <span className="hidden sm:inline">{t("songs")}</span>
              </NavLink>
              
              <NavLink 
                to="/theory" 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                    isActive 
                      ? "bg-guitar-accent text-white" 
                      : theme === "dark"
                        ? "text-white hover:bg-guitar-700" 
                        : "text-guitar-600 hover:bg-guitar-200"
                  }`
                }
              >
                <BookOpen size={18} />
                <span className="hidden sm:inline">{t("theory")}</span>
              </NavLink>
            </nav>
            
            {/* Tema */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" 
                  ? "text-white hover:bg-guitar-700" 
                  : "text-guitar-600 hover:bg-guitar-200"
              }`}
              aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Idioma */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`p-2 rounded-full transition-colors ${
                    theme === "dark" 
                      ? "text-white hover:bg-guitar-700" 
                      : "text-guitar-600 hover:bg-guitar-200"
                  }`}
                  aria-label="Change language"
                >
                  <Globe size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  🇺🇸 {t("english")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                  🇧🇷 {t("portuguese")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
