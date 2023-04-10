import React from "react";

const FlashcardShown = ({ goToNextFlashcard, flashcard, setShow }) => {

    const updateFlashcardState = () => {
        setShow(false);
        // send request to update flashcardCorrect to true;

        goToNextFlashcard();
    }

  return (
    <>
      <p className="text-4xl">{flashcard.answer}</p>
      <hr className="my-3" />
      <div className="flex">
        <div className="w-1/2 pr-2">
          <button
            onClick={updateFlashcardState}
            className="w-full text-white bg-sky-500 hover:bg-sky-600 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Correct
          </button>
        </div>
        <div className="w-1/2 pl-2">
          <button
            onClick={goToNextFlashcard}
            className="w-full text-white bg-fuchsia-600 hover:bg-fuchsia-700 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Incorrect
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashcardShown;
