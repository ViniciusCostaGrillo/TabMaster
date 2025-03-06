
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Music, BookMusic } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-guitar-800">
              Strum Progress
            </h1>
          </div>
          
          <nav className="flex space-x-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                  isActive 
                    ? "bg-guitar-accent text-white" 
                    : "text-guitar-600 hover:bg-guitar-200"
                }`
              }
            >
              <Music size={18} />
              <span className="hidden sm:inline">Songs</span>
            </NavLink>
            
            <NavLink 
              to="/theory" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                  isActive 
                    ? "bg-guitar-accent text-white" 
                    : "text-guitar-600 hover:bg-guitar-200"
                }`
              }
            >
              <BookMusic size={18} />
              <span className="hidden sm:inline">Theory</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
