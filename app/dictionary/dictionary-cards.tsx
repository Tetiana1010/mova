import React from "react";
import { Word } from "@/src/db/schema";

import DictionaryCard from "./dictionary-card";

interface MyWordsProps {
  words: Word[];
}

const DictionaryCards: React.FC<MyWordsProps> = ({ words }) => {
  return (
    <div className="flex flex-col gap-2">
      {words.map((word) => (
        <DictionaryCard key={word.id} word={word} />
      ))}
    </div>
  );
};

export default DictionaryCards;
