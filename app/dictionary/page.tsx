import React from "react";
import MyWords from "./my-words";
import { getAllWords } from "@/src/db/queries";

export default async function dictionaryPage() {
  const words = await getAllWords();

  return <MyWords words={words} />;
}
