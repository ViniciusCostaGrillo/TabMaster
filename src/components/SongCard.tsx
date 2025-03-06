
import React from "react";
import ProgressBar from "./ProgressBar";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";

interface SongCardProps {
  id: string;
  title: string;
  artist: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  progress: number;
  imageUrl?: string;
  onClick?: () => void;
}

const SongCard = ({ 
  title, 
  artist, 
  difficulty, 
  progress, 
  imageUrl = "/placeholder.svg", 
  onClick 
}: SongCardProps) => {
  const { t } = useThemeLanguage();
  
  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    advanced: "bg-red-100 text-red-800 border-red-200"
  };
  
  return (
    <div 
      className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-48 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-xl text-guitar-800">{title}</h3>
            <p className="text-guitar-500">{artist}</p>
          </div>
          
          <span className={`text-xs px-2 py-1 rounded-full border ${difficultyColors[difficulty]}`}>
            {t(difficulty)}
          </span>
        </div>
        
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default SongCard;
