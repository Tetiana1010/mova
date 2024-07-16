"use client";

import { Word } from "@/src/db/schema";
import ConstructorCard from "./ConstructorCard";
import { useState } from "react";
import { updateScore } from "@/src/db/mutations";
import ScorePopup from "../popups/score-popup";

interface ConstructorsCardProps {
  words: Word[]
}

const ConstructorCards: React.FC<ConstructorsCardProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [trainingOver, setTrainingOver] = useState<boolean>(false);

  const handleOptionClick = async (constructedWord: string): Promise<void> => {
    const correctAnswer = constructedWord === words[index].word;

    await updateScore(words[index].word, +correctAnswer);

    if (correctAnswer) {
      setScore((prevScore) => prevScore + 10);
    }

    if (index < words.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setTrainingOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center p-6 rounded-lg">
      {trainingOver ? (
        <ScorePopup score={score} />
      ) : (
        <ConstructorCard key={words[index].id} word={words[index]} onClick={handleOptionClick} />
      )}
    </div>
  );
};

export default ConstructorCards;