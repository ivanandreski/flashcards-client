import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchCourseDecks from "../Hooks/Api/useFetchCourseDecks";
import CourseDeck from "../Components/CourseDeck";
import MyCoursesList from "../MockDB/MyCoursesList";
import useFetchMyCourses from "../Hooks/Api/useFetchMyCourses";
import Deck from "./Deck";

const Course = () => {
  const { id } = useParams();
  const { decks } = useFetchCourseDecks(id);
  const { courses } = useFetchMyCourses();

  const [deckSessions, setDeckSessions] = useState([]);
  const [activeDeck, setActiveDeck] = useState(-1);

  useEffect(() => {
    setDeckSessions(
      decks.map((d) => {
        return {
          ...d,
          flashcards: d.flashcards.map((f) => {
            return {
              ...f,
              correct: false,
            };
          }),
        };
      })
    );
  }, [decks]);

  const setActiveDeckIndex = (index) => {
    setActiveDeck(index);
  };

  const updateDeckSession = (deckId, flashcardId) => {
    const deckToUpdateIndex = deckSessions.findIndex((d) => d.id == deckId);
    const flashcardToUpdateIndex = deckSessions[
      deckToUpdateIndex
    ].flashcards.findIndex((f) => f.id == flashcardId);
    const newDeckSessions = deckSessions.map((deck, index) => {
      if (index == deckToUpdateIndex) {
        return {
          ...deck,
          flashcards: deck.flashcards.map((flashcard, fIndex) => {
            if (flashcard.id == flashcardId) {
              return {
                ...flashcard,
                correct: true,
              };
            }

            return flashcard;
          }),
        };
      }

      return deck;
    });
    // console.log(newDeckSessions);
    setDeckSessions(newDeckSessions);
  };

  return activeDeck == -1 ? (
    <div className="p-4">
      <h1 className="text-4xl text-bold">
        Home/Courses/
        {courses.filter((c) => c.id == id).length > 0 &&
          courses.filter((c) => c.id == id)[0].name}
      </h1>
      <div className="my-2 border border-black" />
      <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        {deckSessions.map((deck, i) => {
          return (
            <CourseDeck
              key={deck.id}
              deck={deck}
              i={i}
              setActiveDeck={setActiveDeckIndex}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Deck
      deck={deckSessions[activeDeck]}
      updateDeckSession={updateDeckSession}
      setActiveDeckIndex={setActiveDeckIndex}
    />
  );
};

export default Course;
