import React from "react";

const StartRevision = ({ flashcards, goToNextFlashcard }) => {
  const getNumCorrectAnswers = () => {
    return flashcards.filter((f) => f.correct).length;
  };

  return (
    <div className="p-4">
      <div className="border-4 rounded bg-gray-400 border-gray-500 p-3 text-white font-semibold">
        <button
          onClick={() => goToNextFlashcard()}
          className="text-xl hover:text-2xl hover:font-bold hover:underline"
        >
          Start Revision
        </button>
        <hr className="my-3" />
        <div className="flex">
          <div className="w-1/2">Questions: {flashcards.length}</div>
          <div className="w-1/2 flex justify-end">
            Answers: {getNumCorrectAnswers()}
          </div>
        </div>
        <hr className="my-3" />
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-fuchsia-500 to-sky-800 h-2.5 rounded-full"
            style={{
              width: `${Math.ceil(
                (getNumCorrectAnswers() / flashcards.length) * 100
              )}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StartRevision;
