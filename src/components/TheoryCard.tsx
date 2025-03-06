
import React from "react";

interface TheoryCardProps {
  title: string;
  description: string;
  category: "scales" | "chords" | "technique" | "modes" | "general";
  imageUrl?: string;
  onClick?: () => void;
}

const TheoryCard = ({ 
  title, 
  description, 
  category,
  imageUrl = "/placeholder.svg", 
  onClick 
}: TheoryCardProps) => {
  
  const categoryColors = {
    scales: "bg-blue-100 text-blue-800 border-blue-200",
    chords: "bg-purple-100 text-purple-800 border-purple-200",
    technique: "bg-orange-100 text-orange-800 border-orange-200",
    modes: "bg-indigo-100 text-indigo-800 border-indigo-200",
    general: "bg-gray-100 text-gray-800 border-gray-200"
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
          className="object-cover w-full h-32 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[category]}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg text-guitar-800 mb-1">{title}</h3>
        <p className="text-guitar-500 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default TheoryCard;
