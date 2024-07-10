import React from "react";
import Link from "next/link";

interface ScorePopuppRrops {
  score: number;
}

const ScorePopup: React.FC<ScorePopuppRrops> = ({ score }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-8 max-w-md w-full transform transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-4 text-center">Game Over!</h2>
        <p className="text-lg mb-4 text-center">Your Score: {score}</p>
        <div className="flex justify-center">
          <Link
            href="/training"
            className="bg-blue text-white px-4 py-2 rounded-md mr-2"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScorePopup;
