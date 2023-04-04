import React from "react";
import { useParams } from "react-router-dom";
import useFetchCourseDecks from "../Hooks/Api/useFetchCourseDecks";
import CourseDeck from "../Components/CourseDeck";

const Course = () => {
  const { id } = useParams();
  const { decks } = useFetchCourseDecks();

  return (
    <div className="p-4 grid gap-3 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
      {decks.map((deck) => {
        return <CourseDeck key={deck.id} deck={deck} />;
      })}
    </div>
  );
};

export default Course;
