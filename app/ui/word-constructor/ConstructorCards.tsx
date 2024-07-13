"use client";

import { Word } from "@/src/db/schema";
import ConstructorCard from "./ConstructorCard";
import { useState } from "react";

interface ConstructorsCardProps {
  words: Word[]
}

const ConstructorCards: React.FC<ConstructorsCardProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 text-center p-6 rounded-lg">
      <ConstructorCard key={words[index].id} word={words[index]}/>
    </div>
  )
};

export default ConstructorCards;