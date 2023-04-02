import React from "react";

const DropdownButton = ({ handleClick, color, textColor, children }) => {
  return (
    <button
      onClick={handleClick}
      className={`
        text-white bg-${color}-700 hover:bg-${color}-800
        font-medium rounded-lg text-sm px-4 py-2.5
        text-center inline-flex items-center
      `}
    >
      {children}
    </button>
  );
};

export default DropdownButton;
