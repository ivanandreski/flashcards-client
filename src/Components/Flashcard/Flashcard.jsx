import React, { useState } from "react";
import FlashcardShown from "./FlashcardShown";
import FlashcardHidden from "./FlashcardHidden";

const Flashcard = ({ flashcard, goToNextFlashcard, handleCloseSession }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <button onClick={handleCloseSession} className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
        Close Session
      </button>
      <div className="border-4 rounded bg-gray-400 border-gray-500 p-3 text-white font-semibold">
        <p className="text-4xl">{flashcard.question}</p>
        <hr className="my-3" />
        {show ? <FlashcardShown goToNextFlashcard={goToNextFlashcard} flashcard={flashcard} setShow={setShow} /> : <FlashcardHidden setShow={setShow} />}
      </div>
    </div>
  );
};

export default Flashcard;
