
import React from "react";
import SongCard from "../components/SongCard";

// Mock data for songs
const songsMockData = [
  {
    id: "1",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    difficulty: "intermediate" as const,
    progress: 75,
    imageUrl: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    difficulty: "intermediate" as const,
    progress: 50,
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Nothing Else Matters",
    artist: "Metallica",
    difficulty: "intermediate" as const,
    progress: 30,
    imageUrl: "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Wonderwall",
    artist: "Oasis",
    difficulty: "beginner" as const,
    progress: 100,
    imageUrl: "https://images.unsplash.com/photo-1621618766566-2cb892ee3532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Master of Puppets",
    artist: "Metallica",
    difficulty: "advanced" as const,
    progress: 20,
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Hotel California",
    artist: "Eagles",
    difficulty: "intermediate" as const,
    progress: 60,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const SongsPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-medium text-guitar-800 mb-2">My Songs</h2>
        <p className="text-guitar-500">Track your progress and practice your favorite songs</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {songsMockData.map((song) => (
          <SongCard
            key={song.id}
            id={song.id}
            title={song.title}
            artist={song.artist}
            difficulty={song.difficulty}
            progress={song.progress}
            imageUrl={song.imageUrl}
            onClick={() => console.log(`Clicked on song: ${song.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SongsPage;
