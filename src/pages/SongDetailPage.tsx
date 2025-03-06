
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Play, Pause, SkipBack, SkipForward, Heart, Edit, Trash, List, Download } from "lucide-react";
import { useThemeLanguage } from "../contexts/ThemeLanguageContext";
import ProgressBar from "../components/ProgressBar";
import { Button } from "@/components/ui/button";
import { songsMockData } from "./SongsPage";

const SongDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, t } = useThemeLanguage();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // Find the song based on the ID from the URL
  const song = songsMockData.find(song => song.id === id);

  if (!song) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-medium mb-4">{t("songNotFound")}</h2>
          <Button onClick={() => navigate("/")}>{t("backToSongs")}</Button>
        </div>
      </Layout>
    );
  }

  const difficultyColors = {
    beginner: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-800",
    intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800",
    advanced: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-800"
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(`${isPlaying ? 'Paused' : 'Playing'}: ${song.title}`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(`${isFavorite ? 'Removed from' : 'Added to'} favorites: ${song.title}`);
  };

  return (
    <Layout>
      <div className="animate-fade-in">
        <button 
          onClick={() => navigate("/")} 
          className={`mb-6 flex items-center ${theme === "dark" ? "text-guitar-300 hover:text-white" : "text-guitar-600 hover:text-guitar-800"}`}
        >
          <SkipBack size={16} className="mr-2" />
          {t("backToSongs")}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Song Image */}
          <div className="col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={song.imageUrl} 
                alt={song.title} 
                className="w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Right Column - Song Details */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
                <p className="text-xl text-guitar-500 dark:text-guitar-400">{song.artist}</p>
              </div>
              <span className={`text-xs px-3 py-1.5 rounded-full border ${difficultyColors[song.difficulty]}`}>
                {t(song.difficulty)}
              </span>
            </div>

            <div className="my-6">
              <h3 className="text-lg font-medium mb-2">{t("progress")}</h3>
              <ProgressBar progress={song.progress} size="lg" showLabel={true} />
            </div>

            {/* Player Controls */}
            <div className="flex flex-wrap items-center gap-4 my-8">
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full"
                onClick={() => console.log("Previous section")}
              >
                <SkipBack />
              </Button>
              
              <Button 
                size="icon" 
                className="h-16 w-16 rounded-full bg-guitar-accent hover:bg-guitar-accent/90"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full"
                onClick={() => console.log("Next section")}
              >
                <SkipForward />
              </Button>

              <Button 
                variant={isFavorite ? "default" : "outline"} 
                size="icon" 
                className={`h-12 w-12 rounded-full ml-auto ${isFavorite ? "bg-red-500 hover:bg-red-600" : ""}`}
                onClick={toggleFavorite}
              >
                <Heart className={isFavorite ? "fill-white" : ""} />
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="h-12 w-12 rounded-full"
                onClick={() => console.log("Download song")}
              >
                <Download />
              </Button>
            </div>

            {/* Sections */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">{t("sections")}</h3>
              <div className={`rounded-lg border ${theme === "dark" ? "border-guitar-700" : "border-guitar-200"}`}>
                {["Intro", "Verse", "Chorus", "Bridge", "Outro"].map((section, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between items-center p-4 ${
                      index !== 4 ? (theme === "dark" ? "border-b border-guitar-700" : "border-b border-guitar-200") : ""
                    } hover:bg-guitar-100 dark:hover:bg-guitar-700 cursor-pointer transition-colors`}
                    onClick={() => console.log(`Playing section: ${section}`)}
                  >
                    <div className="flex items-center">
                      <span className="mr-4 w-6 h-6 flex items-center justify-center rounded-full bg-guitar-accent text-white text-xs">
                        {index + 1}
                      </span>
                      <span>{t(`section${section}`)}</span>
                    </div>
                    <span className="text-guitar-400">1:25</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={() => console.log("Edit song")}
              >
                <Edit size={16} className="mr-2" />
                {t("editSong")}
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center"
                onClick={() => console.log("View tabs")}
              >
                <List size={16} className="mr-2" />
                {t("viewTabs")}
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={() => console.log("Delete song")}
              >
                <Trash size={16} className="mr-2" />
                {t("deleteSong")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SongDetailPage;
