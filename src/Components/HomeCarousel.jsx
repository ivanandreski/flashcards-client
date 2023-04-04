import React, { useState } from "react";
import HomePageParagraphs from "../Utils/HomePageParagraphs";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const paragraphs = HomePageParagraphs.Paragraphs;

  const renderParagraph = () => {
    const currentParagraph = paragraphs[index];
    return (
      <div className="h-full w-4/6 flex items-center">
        <p className="text-white bg-clip-text font-bold text-4xl text-center">
          {currentParagraph}
        </p>
      </div>
    );
  };

  const renderParagraphButtons = () => {
    return paragraphs.map((p, i) => {
      return (
        <button
          key={i}
          type="button"
          className={`w-3 h-3 rounded-full ${
            index == i ? "bg-gray-400" : "bg-white"
          }`}
          onClick={() => setIndex(i)}
        ></button>
      );
    });
  };

  return (
    <div className="w-full pr-28 bg-black">
      <div className="relative">
        <div className="relative h-[550px] w-full flex justify-center overflow-hidden rounded-lg">
          {renderParagraph()}
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {renderParagraphButtons()}
        </div>
        <div className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none">
          <span
            onClick={() =>
              setIndex(index == 0 ? paragraphs.length - 1 : index - 1)
            }
            className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </div>
        <div className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group focus:outline-none">
          <span
            onClick={() =>
              setIndex(index == paragraphs.length - 1 ? 0 : index + 1)
            }
            className="cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
