import React from "react";
import { useParams } from "react-router-dom";
import useFetchCourseDecks from "../Hooks/Api/useFetchCourseDecks";
import CourseDeck from "../Components/CourseDeck";
import MyCoursesList from "../MockDB/MyCoursesList";

const Course = () => {
  const { id } = useParams();
  const { decks } = useFetchCourseDecks();

  return (
    <div className="p-4">
      <h1 className="text-4xl text-bold">Home/Courses/{MyCoursesList.Courses[id-1].name}</h1>
      <div className="my-2 border border-black" />
      <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4">
        {decks.map((deck) => {
          return <CourseDeck key={deck.id} deck={deck} />;
        })}
      </div>
    </div>
  );
};

export default Course;
