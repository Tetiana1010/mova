"use server";

import { eq } from "drizzle-orm";
import { db } from ".";
import { wordsTable } from "./schema";

export async function createWord(
  word: string,
  translation: string,
  example: string,
) {
  const [inserted] = await db
    .insert(wordsTable)
    .values({
      word,
      example,
      translation,
    })
    .returning();
  return inserted;
}

export async function editWord(
  word: string,
  translation: string,
  example: string,
  id: number,
) {
  const [inserted] = await db
    .update(wordsTable)
    .set({
      word,
      example,
      translation,
    })
    .where(eq(wordsTable.id, id))
    .returning();
  return inserted;
}

export async function updateScore(word: string, score: number) {
  const [inserted] = await db
    .update(wordsTable)
    .set({ score })
    .where(eq(wordsTable.word, word))
    .returning();
  return inserted;
}

export async function deleteWord(id: number) {
  const deletedWord = await db
    .delete(wordsTable)
    .where(eq(wordsTable.id, id))
    .returning();
  return deletedWord;
}
