"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getAllWords } from "@/src/db/queries";
import { Word } from "@/src/db/schema";

import DictionaryCards from "./dictionary-cards";
import PlusIcon from "../ui/icons/plus-icon";
import BackButton from "../ui/buttons/back-button";
import AddWordForm from "../ui/dictionary/add-word-form";

interface MyWordsProps {
  words: Word[];
}

const MyWords: React.FC<MyWordsProps> = ({ words }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { data: wordList, refetch } = useQuery({
    queryKey: ["words"],
    queryFn: async () => await getAllWords(),
    initialData: words,
  });

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  if (!wordList) return null;

  return (
    <div className="container mx-auto p-5">
      <BackButton />
      <div className="text-center my-5">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Dictionary</h1>
          <div>
            <button
              className="bg-green text-white p-2 rounded"
              onClick={toggleForm}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
        <DictionaryCards words={wordList} />
        {isFormOpen && <AddWordForm handleToggle={toggleForm} />}
      </div>
    </div>
  );
};

export default MyWords;
