import React from "react";

const FlashcardHidden = ({ setShow }) => {
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="text-white bg-sky-500 hover:bg-sky-600 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Reveal Answer
      </button>
    </div>
  );
};

export default FlashcardHidden;
