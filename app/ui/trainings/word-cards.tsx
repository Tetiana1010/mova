"use client";

import React, { useState, useEffect } from "react";
import WordCard from "./word-card";
import ScorePopup from "@/app/ui/popups/score-popup";
import { Word } from "@/src/db/schema";
import { updateScore } from "@/src/db/mutations";

interface WordCardsProps {
  words: Word[];
}

const WordCards: React.FC<WordCardsProps> = ({ words }) => {
  const [index, setIndex] = useState<number>(0);
  const [options, setOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [trainingOver, setTrainingOver] = useState<boolean>(false);
  // const [result, setResult] = useState<Record<string, number>>({});

  useEffect(() => {
    if (index < words.length) {
      const currentWord = words[index];
      const excludedWords = [currentWord.word];
      const option1 = getRandomWord(words, excludedWords);
      const option2 = getRandomWord(words, [...excludedWords, option1]);
      const option3 = getRandomWord(words, [
        ...excludedWords,
        option1,
        option2,
      ]);
      const newOptions = shuffleArray([
        option1,
        option2,
        option3,
        currentWord.word,
      ]);
      setOptions(newOptions);
    }
  }, [index, words]);

  console.log(words);

  const getRandomWord = (wordList: Word[], excluded: string[]): string => {
    const filteredWords = wordList.filter(
      (word) => !excluded.includes(word.word),
    );
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex].word;
  };

  const shuffleArray = (array: string[]): string[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionClick = async (selectedWord: string): Promise<void> => {
    const correctAnswer = selectedWord === words[index].word;

    // setResult(prevResult => ({
    //   ...prevResult,
    //   [words[index].word]: +correctAnswer
    // }));

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

  // const handleResetTraining = (): void => {
  //   setIndex(0);
  //   setScore(0);
  //   setTrainingOver(false);
  // };

  return (
    <>
      {trainingOver ? (
        <ScorePopup score={score} />
      ) : (
        <div className="flex flex-col items-center gap-4 text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="font-bold text-2xl mb-6 text-blue-600">
            Score: {score}
          </div>
          <div className="grid grid-cols-2 gap-6 justify-items-center">
            {options.map((word) => (
              <WordCard
                key={word}
                word={word}
                onClick={() => handleOptionClick(word)}
              />
            ))}
          </div>
          <div className="italic text-lg text-gray-700 mt-4">
            {words[index]?.translation}
          </div>
        </div>
      )}
    </>
  );
};

export default WordCards;
