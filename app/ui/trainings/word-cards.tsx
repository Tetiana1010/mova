import React from "react";
import WordCard from "./word-card";
import { Word } from "@/src/db/schema";

interface MyWordsProps {
  words: Word[];
}

const WordCards: React.FC<MyWordsProps> = ({ words }) => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 justify-center">
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
};

export default WordCards;
