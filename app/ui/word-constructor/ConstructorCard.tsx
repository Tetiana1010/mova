import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Word } from "@/src/db/schema";
import CheckIcon from "../icons/check-icon";

interface ConstructorCardProps {
  word: Word;
  onClick: (constructedWord: string) => void;
}

const shuffleArray = (array: string[]): string[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

interface DraggableLetterProps {
  letter: string;
  index: number;
  from: string;
  moveLetter: (from: string, letter: string, index: number) => void;
}

const DraggableLetter: React.FC<DraggableLetterProps> = ({ letter, index, from, moveLetter }) => {
  const [, drag] = useDrag({
    type: "LETTER",
    item: { letter, index, from },
  });

  return (
    <div
      ref={drag as any}
      className="bg-blue text-white px-4 py-2 m-1 rounded cursor-pointer shadow-md hover:bg-blue-700 transition duration-300"
    >
      {letter}
    </div>
  );
};

interface DropZoneProps {
  accept: string;
  onDrop: (item: { letter: string, index: number, from: string }) => void;
  children: React.ReactNode;
}

const DropZone: React.FC<DropZoneProps> = ({ accept, onDrop, children }) => {
  const [, drop] = useDrop<{ letter: string, index: number, from: string }>({
    accept,
    drop: (item) => onDrop(item),
  });

  return (
    <div
      ref={drop as any}
      className="border border-dashed border-gray-500 p-4 min-h-[50px] flex flex-wrap gap-2  rounded"
    >
      {children}
    </div>
  );
};

const ConstructorCard: React.FC<ConstructorCardProps> = ({ word, onClick }) => {
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [constructedWord, setConstructedWord] = useState<string[]>([]);

  useEffect(() => {
    setShuffledLetters(shuffleArray(Array.from(word.word)));
    setConstructedWord([]);
  }, [word.word]);

  const moveLetter = (from: string, letter: string, index: number) => {
    if (from === "shuffled") {
      setShuffledLetters((prev) => prev.filter((_, i) => i !== index));
      setConstructedWord((prev) => [...prev, letter]);
    } else {
      setConstructedWord((prev) => prev.filter((_, i) => i !== index));
      setShuffledLetters((prev) => [...prev, letter]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Shuffled Letters</h3>
          <DropZone accept="LETTER" onDrop={(item) => moveLetter(item.from, item.letter, item.index)}>
            {shuffledLetters.map((letter, index) => (
              <DraggableLetter key={index} letter={letter} index={index} from="shuffled" moveLetter={moveLetter} />
            ))}
          </DropZone>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Constructed Word</h3>
          <DropZone accept="LETTER" onDrop={(item) => moveLetter(item.from, item.letter, item.index)}>
            {constructedWord.map((letter, index) => (
              <DraggableLetter key={index} letter={letter} index={index} from="constructed" moveLetter={moveLetter} />
            ))}
          </DropZone>
        </div>
        <button
          disabled={shuffledLetters.length > 0}
          onClick={() => onClick(constructedWord.join(''))}
          className="self-center bg-green text-white px-4 py-2 flex justify-center rounded shadow-md transition duration-300 "
        >
          <CheckIcon />
        </button>
      </div>
    </DndProvider>
  );
};

export default ConstructorCard;
