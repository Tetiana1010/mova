import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { config } from "dotenv";
import { wordsTable } from "./schema";
config({ path: ".env.local" });
export const db = drizzle(sql, {
  schema: {
    words: wordsTable,
  },
});
