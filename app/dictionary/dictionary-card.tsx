import React, { useState } from "react";
import { Word } from "@/src/db/schema";

import Skeleton from "../ui/dictionary/skeleton";

import EditIcon from "../ui/icons/edit-icon";
import TrashIcon from "../ui/icons/trash-icon";
import ChartIcon from "../ui/icons/chart-icon";

import EditWordForm from "../ui/dictionary/edit-word-form copy";
import { useQueryClient } from "@tanstack/react-query";
import { deleteWord } from "@/src/db/mutations";
import { toast } from "sonner";

interface WordProps {
  word: Word;
}

const DictionaryCard: React.FC<WordProps> = ({ word }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const queryCache = useQueryClient();

  return (
    <>
      <div className="flex gap-4 px-4 py-5 bg-light-violet bg-opacity-30 rounded-md">
        <Skeleton />
        <div className="flex flex-col text-left flex-1">
          <h2 className="text-slate-900 font-medium">{word.word}</h2>
          <h3 className="text-slate-500 text-sm">{word.translation}</h3>
          <p className="mt-auto text-slate-500 text-sm">{word.example}</p>
        </div>
        <div className="flex gap-2 items-start">
          <ChartIcon score={word.score ?? 0} />
          <button onClick={toggleForm}>
            <EditIcon />
          </button>
          <button
            onClick={async () => {
              toast.promise(deleteWord(word.id), {
                loading: "Deleting word",
                success: (data) => {
                  const deletedWord = data[0];
                  queryCache.refetchQueries({
                    queryKey: ["words"],
                  });
                  console.log(deletedWord);
                  return `Word ${deletedWord.word} deleted!`;
                },
                error: (err) => `Error: ${err.message}`,
              });
            }}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      {isFormOpen && <EditWordForm handleToggle={toggleForm} word={word} />}
    </>
  );
};

export default DictionaryCard;
