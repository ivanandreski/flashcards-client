import React from "react";
import { Link } from "react-router-dom";
import RouteNames from "../Utils/RouteNames";
import Deck from "../Pages/Deck";

const CourseDeck = ({ deck, i, setActiveDeck }) => {
  return (
    <div className="border-4 rounded bg-gray-400 border-gray-500 p-3 text-white font-semibold">
      {/* <Link
        to={RouteNames.Deck(deck.id)}
        className="text-xl hover:text-2xl hover:font-bold hover:underline"
      >
        {deck.name}
      </Link> */}
      <button
        onClick={() => setActiveDeck(i)}
        className="text-xl hover:text-2xl hover:font-bold hover:underline"
      >
        {deck.name}
      </button>
      <hr className="my-3" />
      <div className="flex">
        <div className="w-1/2">Questions: {deck.questions}</div>
        <div className="w-1/2 flex justify-end">
          Answers: {deck.flashcards.filter((f) => f.correct).length}
        </div>
      </div>
      <hr className="my-3" />
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-fuchsia-500 to-sky-800 h-2.5 rounded-full"
          style={{
            width: `${Math.ceil(
              (deck.flashcards.filter((f) => f.correct).length / deck.questions) * 100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CourseDeck;
