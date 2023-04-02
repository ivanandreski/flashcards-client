import React from "react";

const ButtonDarkGray = ({ handleClick, color, textColor, children }) => {
  return (
    <button
      onClick={handleClick}
      className="
        text-white bg-gray-700 hover:bg-gray-800
        font-medium text-sm px-4 py-2.5 w-full
        text-center inline-flex items-center
      "
    >
      <div className="flex justify-center w-full">{children}</div>
    </button>
  );
};

export default ButtonDarkGray;
