import { getTenWords } from "@/src/db/queries";
import WordCards from "@/app/ui/trainings/word-cards";

export default async function Home() {
  const words = await getTenWords();
  
  return (
    
    <div className="container mx-auto px-4">
      <WordCards words={words}/>
    </div>
  );
};