
import React from "react";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

interface ProgressBarProps {
  progress: number; // 0-100
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const ProgressBar = ({ progress, size = "md", showLabel = true }: ProgressBarProps) => {
  // Ensure progress is between 0-100
  const validProgress = Math.min(100, Math.max(0, progress));
  const { theme, t } = useThemeLanguage();
  
  // Define height based on size
  const heights = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };
  
  return (
    <div className="w-full">
      <div className={`w-full ${theme === "dark" ? "bg-guitar-700" : "bg-guitar-200"} rounded-full overflow-hidden`}>
        <div 
          className={`bg-guitar-accent transition-all duration-500 ease-out rounded-full ${heights[size]}`}
          style={{ width: `${validProgress}%` }}
        />
      </div>
      
      {showLabel && (
        <div className={`mt-1 text-xs ${theme === "dark" ? "text-guitar-300" : "text-guitar-500"} text-right`}>
          {validProgress}% {t("progress")}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
