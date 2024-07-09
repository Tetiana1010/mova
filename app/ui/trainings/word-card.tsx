import React from "react";
import { Word } from "@/src/db/schema";

interface WordCardProps {
  word: Word;
}

const WordCard: React.FC<WordCardProps> = ({ word }) => {
  return (
    <div className="row-span-1 aspect-square flex flex-col justify-center items-center gap-4 px-4 py-5 bg-green-200 bg-opacity-30 rounded-md shadow-md w-60 max-w-full transform transition duration-500 hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800">{word.word}</h2>
    </div>
  );
};

export default WordCard;
