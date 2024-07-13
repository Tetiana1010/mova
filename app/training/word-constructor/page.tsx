import { getTenWords } from "@/src/db/queries";
import ConstructorCards from "@/app/ui/word-constructor/ConstructorCards";

const WordConstructor = async () => {
  const words = await getTenWords();
  return (
    <>
      <ConstructorCards words={words} />
    </>
  );
};

export default WordConstructor;