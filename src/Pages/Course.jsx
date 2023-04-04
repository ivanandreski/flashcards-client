import React from "react";
import { useParams } from "react-router-dom";
import useFetchCourseDecks from "../Hooks/Api/useFetchCourseDecks";
import CourseDeck from "../Components/CourseDeck";

const Course = () => {
  const { id } = useParams();
  const { decks } = useFetchCourseDecks();

  return (
    <div className="w-full bg-gradient-to-r from-sky-500 to-fuchsia-800 p-1">
      <div className="min-h-96 bg-white p-4">
        <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
          {decks.map((deck) => {
            return <CourseDeck key={deck.id} deck={deck} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
