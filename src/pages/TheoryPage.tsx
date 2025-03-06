
import React from "react";
import TheoryCard from "../components/TheoryCard";

// Mock data for theory topics
const theoryMockData = [
  {
    id: "1",
    title: "Major Scale Patterns",
    description: "Learn the 5 common patterns for playing the major scale across the fretboard.",
    category: "scales" as const,
    imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Pentatonic Scales",
    description: "Master the versatile pentatonic scale used in rock, blues, and more.",
    category: "scales" as const,
    imageUrl: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Barre Chord Fundamentals",
    description: "Learn how to play barre chords and move them around the fretboard.",
    category: "chords" as const,
    imageUrl: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Alternate Picking",
    description: "Improve your speed and precision with proper alternate picking technique.",
    category: "technique" as const,
    imageUrl: "https://images.unsplash.com/photo-1603577871344-618201a2e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "5",
    title: "Dorian Mode",
    description: "Explore the soulful sound of the Dorian mode used in jazz and rock.",
    category: "modes" as const,
    imageUrl: "https://images.unsplash.com/photo-1574575162280-86274e08f1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "6",
    title: "Reading Tablature",
    description: "Learn how to read and interpret guitar tablature notation.",
    category: "general" as const,
    imageUrl: "https://images.unsplash.com/photo-1632250387078-c89fbd134aad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "7",
    title: "Power Chords",
    description: "Master the essential power chords used in rock and metal music.",
    category: "chords" as const,
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "8",
    title: "Phrygian Mode",
    description: "Discover the exotic and tense sound of the Phrygian mode.",
    category: "modes" as const,
    imageUrl: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const TheoryPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-medium text-guitar-800 mb-2">Theory & Techniques</h2>
        <p className="text-guitar-500">Build your foundation with essential guitar knowledge</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {theoryMockData.map((theory) => (
          <TheoryCard
            key={theory.id}
            title={theory.title}
            description={theory.description}
            category={theory.category}
            imageUrl={theory.imageUrl}
            onClick={() => console.log(`Clicked on theory: ${theory.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TheoryPage;
