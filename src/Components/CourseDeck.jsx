import React from "react";
import { Link } from "react-router-dom";
import RouteNames from "../Utils/RouteNames";

const CourseDeck = ({ deck }) => {
  return (
    <div className="border-4 rounded bg-gray-400 border-gray-500 p-3 text-white font-semibold">
      <Link
        to={RouteNames.Deck(deck.id)}
        className="text-xl hover:text-2xl hover:font-bold hover:underline"
      >
        {deck.name}
      </Link>
      <hr className="my-3" />
      <div className="flex">
        <div className="w-1/2">Questions: {deck.questions}</div>
        <div className="w-1/2 flex justify-end">
          Answers: {deck.correctAnswers}
        </div>
      </div>
      <hr className="my-3" />
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-fuchsia-500 to-sky-800 h-2.5 rounded-full"
          style={{
            width: `${Math.ceil(
              (deck.correctAnswers / deck.questions) * 100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CourseDeck;
