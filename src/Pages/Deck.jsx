import React, { useState } from "react";
import useFetchUserDeckSession from "../Hooks/Api/useFetchUserDeckSession";
import StartRevision from "../Components/StartRevision";
import Flashcard from "../Components/Flashcard/Flashcard";

const Deck = () => {
  const { flashcards } = useFetchUserDeckSession();
  const [index, setIndex] = useState(-1);

  const goToNextFlashcard = () => {
    const numNotCorrect = flashcards
      .map((f) => f.correct)
      .filter((c) => !c).length;
    if (numNotCorrect > 0) {
      let tempIndex = index == -1 ? 0 : index + 1;
      while (flashcards[tempIndex] == undefined || flashcards[tempIndex].correct) {
        tempIndex = tempIndex == flashcards.length ? 0 : tempIndex + 1;
      }
      setIndex(tempIndex);
    } else {
      setIndex(-1);
    }
  };

  const handleCloseSession = () => {
    setIndex(-1);
  }

  return index > -1 ? (
    <Flashcard
      flashcard={flashcards[index]}
      goToNextFlashcard={goToNextFlashcard}
      handleCloseSession={handleCloseSession}
    />
  ) : (
    <StartRevision
      flashcards={flashcards}
      goToNextFlashcard={goToNextFlashcard}
    />
  );
};

export default Deck;
