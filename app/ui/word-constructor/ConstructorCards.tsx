"use client";

import { Word } from "@/src/db/schema";
import ConstructorCard from "./ConstructorCard";
import { useState } from "react";

interface ConstructorsCardProps {
  words: Word[]
}

const ConstructorCards: React.FC<ConstructorsCardProps> = ({ words }) => {
  const [index, setIndex] = useState(0);

  const handleOptionClick = async (constructedWord: string): Promise<void> => {
    console.log(constructedWord)
    const correctAnswer = constructedWord === words[index].word;

    // await updateScore(words[index].word, +correctAnswer);

    if (correctAnswer) {
      setIndex((prevIndex) => prevIndex + 1);
    }
    if (index < words.length - 1) {
      // setIndex((prevIndex) => prevIndex + 1);
    } else {
      // setTrainingOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center p-6 rounded-lg">
      <ConstructorCard key={words[index].id} word={words[index]} onClick={handleOptionClick} />
    </div>
  )
};

export default ConstructorCards;