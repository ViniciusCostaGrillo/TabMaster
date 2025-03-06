
import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeType = "light" | "dark";
type LanguageType = "en" | "pt";

interface ThemeLanguageContextType {
  theme: ThemeType;
  language: LanguageType;
  toggleTheme: () => void;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    songs: "Songs",
    theory: "Theory",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    english: "English",
    portuguese: "Portuguese",
    progress: "complete",
  },
  pt: {
    songs: "Músicas",
    theory: "Teoria",
    darkMode: "Modo Escuro",
    lightMode: "Modo Claro",
    english: "Inglês",
    portuguese: "Português",
    progress: "completo",
  }
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicializa com o tema do sistema ou o último tema usado
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Inicializa com o idioma do navegador ou o último idioma usado
  const [language, setLanguage] = useState<LanguageType>(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage === "en" || savedLanguage === "pt") return savedLanguage;
    return navigator.language.startsWith("pt") ? "pt" : "en";
  });

  // Atualiza o tema no DOM e salva no localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Salva o idioma no localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Função para alternar entre temas
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Função para traduzir textos
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, language, toggleTheme, setLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error("useThemeLanguage must be used within a ThemeLanguageProvider");
  }
  return context;
};
