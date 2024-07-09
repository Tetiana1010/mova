"use client";

import { useRouter } from "next/navigation";
import LeftArror from "./../icons/left-arrow";

const BackButton = () => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <LeftArror />
    </button>
  );
};

export default BackButton;
