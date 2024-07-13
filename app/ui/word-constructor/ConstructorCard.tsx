import React, { useState, useEffect } from "react";
import { Word } from "@/src/db/schema";

interface ConstructorCardProps {
  word: Word;
}

const shuffleArray = (array: string[]): string[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ConstructorCard: React.FC<ConstructorCardProps> = ({ word }) => {
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);

  useEffect(() => {
    setShuffledLetters(shuffleArray(Array.from(word.word)));
  }, [word.word]);

  return (
    <div className="flex space-x-2">
      {shuffledLetters.map((letter, index) => (
        <div 
          key={index} 
          className="bg-blue text-white px-4 py-2 rounded cursor-pointer"
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default ConstructorCard;